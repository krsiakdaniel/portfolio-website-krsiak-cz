import { expect, test } from '@playwright/test'

import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'
import { getBreadcrumbsLocator } from '@/__tests__/playwright/lib/utils/helpers/breadcrumbsHelper'

test.describe('Links', () => {
  test('should navigate correctly', async ({ page }) => {
    await test.step('Go to Resume page', async () => {
      await page.goto('/resume')
    })

    const breadcrumbs = getBreadcrumbsLocator(page)

    await test.step('Check the Home link', async () => {
      const homeLink = breadcrumbs.locator('a[href="/"]')
      await expect(homeLink).toHaveCount(1)
      await expect(homeLink).toHaveAttribute('href', PAGES_URL.home)
    })

    await test.step('Check the Resume link', async () => {
      const resumeLink = breadcrumbs.locator('a[href="/resume"]')
      await expect(resumeLink).toHaveCount(1)
      await expect(resumeLink).toHaveAttribute('href', PAGES_URL.resume)
    })
  })
})
