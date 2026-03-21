import { expect, test } from '@playwright/test'

import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'
import { getBreadcrumbsLocator } from '@/__tests__/playwright/lib/utils/helpers/breadcrumbsHelper'

test.describe('Breadcrumbs - Who I Am', () => {
  test('should navigate correctly', async ({ page }) => {
    await page.goto(PAGES_URL.whoIAm)
    const breadcrumbs = getBreadcrumbsLocator(page)

    await test.step('Check the Home link', async () => {
      const homeLink = breadcrumbs.locator('a[href="/"]')
      await expect(homeLink).toHaveCount(1)
      await expect(homeLink).toHaveAttribute('href', PAGES_URL.home)
    })

    await test.step('Check the Who I Am link', async () => {
      const whoIAmLink = breadcrumbs.locator(`a[href="${PAGES_URL.whoIAm}"]`)
      await expect(whoIAmLink).toHaveCount(1)
      await expect(whoIAmLink).toHaveAttribute('href', PAGES_URL.whoIAm)
    })
  })
})
