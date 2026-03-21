import { expect, test } from '@playwright/test'

import { HeaderPage } from '@/__tests__/playwright/lib/page-objects/HeaderPage'
import { EXTERNAL_URL, PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Header - Desktop Menu - Social Links', () => {
  test('should render GitHub link correctly', async ({ page }) => {
    const header = new HeaderPage(page)
    await header.setDesktopViewport()
    await page.goto(PAGES_URL.home)

    await expect(header.socialLinks.gitHub).toBeVisible()
    await expect(header.socialLinks.gitHub).toHaveAttribute('href', EXTERNAL_URL.gitHub)
  })

  test('should render LinkedIn link correctly', async ({ page }) => {
    const header = new HeaderPage(page)
    await header.setDesktopViewport()
    await page.goto(PAGES_URL.home)

    await expect(header.socialLinks.linkedIn).toBeVisible()
    await expect(header.socialLinks.linkedIn).toHaveAttribute('href', EXTERNAL_URL.linkedIn)
  })
})
