import { expect, test } from '@playwright/test'

import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'
import { getBreadcrumbsLocator } from '@/__tests__/playwright/lib/utils/helpers/breadcrumbsHelper'

test.describe('Links', () => {
  test('should navigate correctly', async ({ page }) => {
    await test.step('Go to Portfolio Website subpage', async () => {
      await page.goto('personal-projects/krsiak')
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

    await test.step('Check the Portfolio Website link', async () => {
      const portfolioWebsiteLink = breadcrumbs.locator('a[href="/personal-projects/krsiak"]')
      await expect(portfolioWebsiteLink).toHaveCount(1)
      await expect(portfolioWebsiteLink).toHaveAttribute('href', PAGES_URL.personalKrsiak)
    })
  })
})
