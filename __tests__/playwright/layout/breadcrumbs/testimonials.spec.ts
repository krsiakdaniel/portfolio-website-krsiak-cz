import { expect, test } from '@playwright/test'

import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'
import { getBreadcrumbsLocator } from '@/__tests__/playwright/lib/utils/helpers/breadcrumbsHelper'

test.describe('Links', () => {
  test('should navigate correctly', async ({ page }) => {
    await test.step('Go to Testimonials page', async () => {
      await page.goto('/testimonials')
    })

    const breadcrumbs = getBreadcrumbsLocator(page)

    await test.step('Check the Home link', async () => {
      const homeLink = breadcrumbs.locator('a[href="/"]')
      await expect(homeLink).toHaveCount(1)
      await expect(homeLink).toHaveAttribute('href', PAGES_URL.home)
    })

    await test.step('Check the Testimonials link', async () => {
      const testimonialsLink = breadcrumbs.locator('a[href="/testimonials"]')
      await expect(testimonialsLink).toHaveCount(1)
      await expect(testimonialsLink).toHaveAttribute('href', PAGES_URL.testimonials)
    })
  })
})
