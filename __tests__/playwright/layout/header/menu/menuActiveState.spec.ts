import { expect, test } from '@playwright/test'

import { HeaderPage } from '@/__tests__/playwright/lib/page-objects/HeaderPage'
import { MobileMenuPage } from '@/__tests__/playwright/lib/page-objects/MobileMenuPage'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Menu Active State', () => {
  test.describe('Desktop Menu', () => {
    test('should show no active state on home page', async ({ page }) => {
      const header = new HeaderPage(page)
      await header.setDesktopViewport()
      await page.goto(PAGES_URL.home)

      for (const link of Object.values(header.desktopLinks)) {
        await header.expectMenuItemInactive(link)
      }
    })

    test('should show active state on who-i-am page', async ({ page }) => {
      const header = new HeaderPage(page)
      await header.setDesktopViewport()
      await page.goto(PAGES_URL.whoIAm)

      await header.expectMenuItemActive(header.desktopLinks.whoIAm)
    })

    test('should show active state on work-experience main page', async ({ page }) => {
      const header = new HeaderPage(page)
      await header.setDesktopViewport()
      await page.goto(PAGES_URL.workExperience)

      await header.expectMenuItemActive(header.desktopLinks.workExperience)
    })

    test('should show active state on work-experience child page', async ({ page }) => {
      const header = new HeaderPage(page)
      await header.setDesktopViewport()
      await page.goto(PAGES_URL.workSmartsuppWeb)

      await header.expectMenuItemActive(header.desktopLinks.workExperience)
    })

    test('should show only one active menu item at a time', async ({ page }) => {
      const header = new HeaderPage(page)
      await header.setDesktopViewport()
      await page.goto(PAGES_URL.resume)

      await header.expectMenuItemActive(header.desktopLinks.resume)

      const otherLinks = [
        header.desktopLinks.whoIAm,
        header.desktopLinks.workExperience,
        header.desktopLinks.personalProjects,
        header.desktopLinks.testimonials,
      ]
      for (const link of otherLinks) {
        await header.expectMenuItemInactive(link)
      }
    })
  })

  test.describe('Mobile Menu', () => {
    test('should show active state in mobile menu', async ({ page }) => {
      const mobileMenu = new MobileMenuPage(page)
      await mobileMenu.setMobileViewport()
      await page.goto(PAGES_URL.testimonials)

      await mobileMenu.openMenu()
      await expect(mobileMenu.links.testimonials).toHaveAttribute('aria-current', 'page')
    })

    test('should maintain active state after navigation', async ({ page }) => {
      const mobileMenu = new MobileMenuPage(page)
      await mobileMenu.setMobileViewport()
      await page.goto(PAGES_URL.personalProjects)

      await mobileMenu.openMenu()
      await mobileMenu.navigateViaLink(mobileMenu.links.workExperience, PAGES_URL.workExperience)

      await mobileMenu.openMenu()
      await expect(mobileMenu.links.workExperience).toHaveAttribute('aria-current', 'page')
    })
  })
})
