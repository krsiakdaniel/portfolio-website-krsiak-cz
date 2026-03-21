import { expect, test } from '@playwright/test'

import { HeaderPage } from '@/__tests__/playwright/lib/page-objects/HeaderPage'
import { MobileMenuPage } from '@/__tests__/playwright/lib/page-objects/MobileMenuPage'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Responsive Menu Layout', () => {
  test('desktop: menu links visible, mobile toggle hidden', async ({ page }) => {
    const header = new HeaderPage(page)
    await header.setDesktopViewport()
    await page.goto(PAGES_URL.home)

    await expect(header.desktopLinks.whoIAm).toBeVisible()
    await expect(header.desktopLinks.workExperience).toBeVisible()
    await expect(header.desktopLinks.resume).toBeVisible()

    const mobileMenu = new MobileMenuPage(page)
    await expect(mobileMenu.toggleButton).not.toBeVisible()
  })

  test('mobile: desktop links hidden, mobile toggle visible', async ({ page }) => {
    const mobileMenu = new MobileMenuPage(page)
    await mobileMenu.setMobileViewport()
    await page.goto(PAGES_URL.home)

    await expect(mobileMenu.toggleButton).toBeVisible()

    const header = new HeaderPage(page)
    await expect(header.desktopLinks.whoIAm).not.toBeVisible()
    await expect(header.desktopLinks.workExperience).not.toBeVisible()
  })
})
