import { expect, test } from '@playwright/test'

import { MobileMenuPage } from '@/__tests__/playwright/lib/page-objects/MobileMenuPage'
import { PAGE_HEADINGS } from '@/__tests__/playwright/lib/utils/constants/texts/e2eTexts'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Menu Mobile - Link "Personal Projects"', () => {
  test('should navigate to Personal Projects page correctly', async ({ page }) => {
    const mobileMenu = new MobileMenuPage(page)
    await mobileMenu.setMobileViewport()
    await page.goto(PAGES_URL.home)

    await mobileMenu.openMenu()
    await expect(mobileMenu.links.personalProjects).toBeVisible()

    await mobileMenu.navigateViaLink(mobileMenu.links.personalProjects, PAGES_URL.personalProjects)
    await expect(page).toHaveURL(new RegExp(PAGES_URL.personalProjects))
    await expect(page.locator('h1')).toContainText(PAGE_HEADINGS.personalProjects)
  })
})
