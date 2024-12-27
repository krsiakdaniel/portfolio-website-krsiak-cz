import { expect, test } from '@playwright/test'

import { getBreadcrumbsLocator } from '@/__tests__/playwright/lib/utils/helpers/breadcrumbsHelper'

test.describe('Links', () => {
  test('should navigate correctly', async ({ page }) => {
    await test.step('Go to Resume page', async () => {
      await page.goto('/resume')
    })

    const breadcrumbs = getBreadcrumbsLocator(page)

    await test.step('Check the Home link', async () => {
      const homeLink = breadcrumbs.locator('a[href="/"]')
      expect(await homeLink.count()).toBe(1)
      expect(await homeLink.getAttribute('href')).toBe('/')
    })

    await test.step('Check the Resume link', async () => {
      const aboutLink = breadcrumbs.locator('a[href="/resume"]')
      expect(await aboutLink.count()).toBe(1)
      expect(await aboutLink.getAttribute('href')).toBe('/resume')
    })
  })
})
