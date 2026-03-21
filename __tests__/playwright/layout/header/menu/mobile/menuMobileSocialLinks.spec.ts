import { expect, test } from '@playwright/test'

import { MobileMenuPage } from '@/__tests__/playwright/lib/page-objects/MobileMenuPage'
import { EXTERNAL_URL, PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Header - Mobile Menu - Social Links', () => {
  test('should render GitHub link correctly', async ({ page }) => {
    const mobileMenu = new MobileMenuPage(page)
    await mobileMenu.setMobileViewport()
    await page.goto(PAGES_URL.home)

    await expect(mobileMenu.socialLinks.gitHub).toBeVisible()
    await expect(mobileMenu.socialLinks.gitHub).toHaveAttribute('href', EXTERNAL_URL.gitHub)
  })

  test('should render LinkedIn link correctly', async ({ page }) => {
    const mobileMenu = new MobileMenuPage(page)
    await mobileMenu.setMobileViewport()
    await page.goto(PAGES_URL.home)

    await expect(mobileMenu.socialLinks.linkedIn).toBeVisible()
    await expect(mobileMenu.socialLinks.linkedIn).toHaveAttribute('href', EXTERNAL_URL.linkedIn)
  })
})
