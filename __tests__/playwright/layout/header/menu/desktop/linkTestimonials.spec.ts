import { expect, test } from '@playwright/test'

import { HeaderPage } from '@/__tests__/playwright/lib/page-objects/HeaderPage'
import { PAGE_HEADINGS } from '@/__tests__/playwright/lib/utils/constants/texts/e2eTexts'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Header - Desktop Menu - Testimonials Link', () => {
  test('should navigate to Testimonials page correctly', async ({ page }) => {
    const header = new HeaderPage(page)
    await header.setDesktopViewport()
    await page.goto(PAGES_URL.home)

    await test.step('link is visible', async () => {
      await expect(header.desktopLinks.testimonials).toBeVisible()
    })

    await test.step('navigates to Testimonials page', async () => {
      await header.navigateViaDesktopLink(header.desktopLinks.testimonials, PAGES_URL.testimonials)
      await expect(page).toHaveURL(new RegExp(PAGES_URL.testimonials))
    })

    await test.step('page heading is correct', async () => {
      await expect(page.locator('h1')).toHaveText(PAGE_HEADINGS.testimonials)
    })
  })
})
