import { expect, test } from '@playwright/test'

import { MobileMenuPage } from '@/__tests__/playwright/lib/page-objects/MobileMenuPage'
import { PAGE_HEADINGS } from '@/__tests__/playwright/lib/utils/constants/texts/e2eTexts'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Menu Mobile - Link "Work Experience"', () => {
  test('should navigate to Work Experience page correctly', async ({ page }) => {
    const mobileMenu = new MobileMenuPage(page)
    await mobileMenu.setMobileViewport()
    await page.goto(PAGES_URL.home)

    await mobileMenu.openMenu()
    await expect(mobileMenu.links.workExperience).toBeVisible()

    await mobileMenu.navigateViaLink(mobileMenu.links.workExperience, PAGES_URL.workExperience)
    await expect(page).toHaveURL(new RegExp(PAGES_URL.workExperience))
    await expect(page.locator('h1')).toContainText(PAGE_HEADINGS.workExperience)
  })
})
