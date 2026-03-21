import { expect, test } from '@playwright/test'

import { FooterPage } from '@/__tests__/playwright/lib/page-objects/FooterPage'
import { UI_TEXTS } from '@/__tests__/playwright/lib/utils/constants/texts/e2eTexts'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Footer - Status Link', () => {
  test('has correct text and navigates to status page', async ({ page }) => {
    await page.goto(PAGES_URL.home)
    const footer = new FooterPage(page)

    await footer.expectFooterVisible()
    await expect(footer.statusLink).toHaveText(UI_TEXTS.status)
    await expect(footer.statusLink).toHaveAttribute('href', PAGES_URL.status)

    await footer.statusLink.click()
    await expect(page).toHaveURL(new RegExp(PAGES_URL.status))
  })
})
