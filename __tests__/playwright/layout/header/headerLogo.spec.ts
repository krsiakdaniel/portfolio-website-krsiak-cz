import { expect, test } from '@playwright/test'

import { HeaderPage } from '@/__tests__/playwright/lib/page-objects/HeaderPage'
import { UI_TEXTS } from '@/__tests__/playwright/lib/utils/constants/texts/e2eTexts'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Header - Logo', () => {
  test('has correct text, link, and navigates home', async ({ page }) => {
    const header = new HeaderPage(page)
    await header.setDesktopViewport()
    await page.goto(PAGES_URL.home)

    await expect(header.logo).toBeVisible()
    await expect(header.logo).toHaveText(UI_TEXTS.logo)
    await expect(header.logo).toHaveAttribute('href', PAGES_URL.home)

    await header.logo.click()
    await expect(page).toHaveURL(new RegExp(`${PAGES_URL.home}$`))
  })
})
