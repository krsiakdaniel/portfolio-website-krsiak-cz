import { expect, test } from '@playwright/test'

import { FooterPage } from '@/__tests__/playwright/lib/page-objects/FooterPage'
import { UI_TEXTS } from '@/__tests__/playwright/lib/utils/constants/texts/e2eTexts'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Footer - Home page Link', () => {
  test('has correct text and navigates home', async ({ page }) => {
    await page.goto(PAGES_URL.home)
    const footer = new FooterPage(page)

    await footer.expectFooterVisible()
    await expect(footer.homeLink).toHaveText(UI_TEXTS.footerHome)
    await expect(footer.homeLink).toHaveAttribute('href', PAGES_URL.home)

    await footer.homeLink.click()
    await expect(page).toHaveURL(new RegExp(`${PAGES_URL.home}$`))
  })
})
