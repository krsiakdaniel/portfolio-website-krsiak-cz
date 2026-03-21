import { test } from '@playwright/test'

import { MobileMenuPage } from '@/__tests__/playwright/lib/page-objects/MobileMenuPage'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Menu Mobile - Component', () => {
  test('opens the mobile menu with correct id', async ({ page }) => {
    const mobileMenu = new MobileMenuPage(page)
    await mobileMenu.setMobileViewport()
    await page.goto(PAGES_URL.home)

    await mobileMenu.openMenu()
    await mobileMenu.expectMenuHasCorrectId()
  })

  test('closes the mobile menu', async ({ page }) => {
    const mobileMenu = new MobileMenuPage(page)
    await mobileMenu.setMobileViewport()
    await page.goto(PAGES_URL.home)

    await mobileMenu.openMenu()
    await mobileMenu.closeMenu()
  })
})
