import { test } from '@playwright/test'

import { FooterPage } from '@/__tests__/playwright/lib/page-objects/FooterPage'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Footer - Copyright', () => {
  test('displays correct copyright year', async ({ page }) => {
    await page.goto(PAGES_URL.home)
    const footer = new FooterPage(page)

    await footer.expectFooterVisible()
    await footer.expectCopyrightContainsCurrentYear()
  })
})
