import { expect, test } from '@playwright/test'

import { getBreadcrumbsLocator } from '@/__tests__/playwright/lib/utils/helpers/breadcrumbsHelper'

test.describe('Links', () => {
  test('should navigate correctly', async ({ page }) => {
    await test.step('Go to Testimonials page', async () => {
      await page.goto('/testimonials')
    })

    const breadcrumbs = getBreadcrumbsLocator(page)

    await test.step('Check the Home link', async () => {
      const homeLink = breadcrumbs.locator('a[href="/"]')
      expect(await homeLink.count()).toBe(1)
      expect(await homeLink.getAttribute('href')).toBe('/')
    })

    await test.step('Check the Testimonials link', async () => {
      const testimonialsLink = breadcrumbs.locator('a[href="/testimonials"]')
      expect(await testimonialsLink.count()).toBe(1)
      expect(await testimonialsLink.getAttribute('href')).toBe('/testimonials')
    })
  })
})
