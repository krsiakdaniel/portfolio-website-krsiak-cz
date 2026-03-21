import { expect, test } from '@playwright/test'

import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'
import { getBreadcrumbsLocator } from '@/__tests__/playwright/lib/utils/helpers/breadcrumbsHelper'

test.describe('Links', () => {
  test('should navigate correctly', async ({ page }) => {
    await test.step('Go to Cryptomania subpage', async () => {
      await page.goto('/personal-projects/cryptomania')
    })

    const breadcrumbs = getBreadcrumbsLocator(page)

    await test.step('Check the Home link', async () => {
      const homeLink = breadcrumbs.locator('a[href="/"]')
      await expect(homeLink).toHaveCount(1)
      await expect(homeLink).toHaveAttribute('href', PAGES_URL.home)
    })

    await test.step('Check the Personal Projects link', async () => {
      const personalProjectsLink = breadcrumbs.locator('a[href="/personal-projects"]')
      await expect(personalProjectsLink).toHaveCount(1)
      await expect(personalProjectsLink).toHaveAttribute('href', PAGES_URL.personalProjects)
    })

    await test.step('Check the Cryptomania link', async () => {
      const cryptomaniaLink = breadcrumbs.locator('a[href="/personal-projects/cryptomania"]')
      await expect(cryptomaniaLink).toHaveCount(1)
      await expect(cryptomaniaLink).toHaveAttribute('href', PAGES_URL.personalCryptoMania)
    })
  })
})
