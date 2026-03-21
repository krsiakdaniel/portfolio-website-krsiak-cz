import { expect, test } from '@playwright/test'

import { MobileMenuPage } from '@/__tests__/playwright/lib/page-objects/MobileMenuPage'
import { PAGE_HEADINGS } from '@/__tests__/playwright/lib/utils/constants/texts/e2eTexts'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Menu Mobile - Link "Resume"', () => {
  test('should navigate to Resume page correctly', async ({ page }) => {
    const mobileMenu = new MobileMenuPage(page)
    await mobileMenu.setMobileViewport()
    await page.goto(PAGES_URL.home)

    await mobileMenu.openMenu()
    await expect(mobileMenu.links.resume).toBeVisible()

    await mobileMenu.navigateViaLink(mobileMenu.links.resume, PAGES_URL.resume)
    await expect(page).toHaveURL(new RegExp(PAGES_URL.resume))
    await expect(page.locator('h1')).toContainText(PAGE_HEADINGS.resume)
  })
})
