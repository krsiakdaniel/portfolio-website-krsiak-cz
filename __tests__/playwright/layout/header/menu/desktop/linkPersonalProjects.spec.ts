import { expect, test } from '@playwright/test'

import { HeaderPage } from '@/__tests__/playwright/lib/page-objects/HeaderPage'
import { PAGE_HEADINGS } from '@/__tests__/playwright/lib/utils/constants/texts/e2eTexts'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Header - Desktop Menu - Personal Projects Link', () => {
  test('should navigate to Personal Projects page correctly', async ({ page }) => {
    const header = new HeaderPage(page)
    await header.setDesktopViewport()
    await page.goto(PAGES_URL.home)

    await test.step('link is visible', async () => {
      await expect(header.desktopLinks.personalProjects).toBeVisible()
    })

    await test.step('navigates to Personal Projects page', async () => {
      await header.navigateViaDesktopLink(
        header.desktopLinks.personalProjects,
        PAGES_URL.personalProjects,
      )
      await expect(page).toHaveURL(new RegExp(PAGES_URL.personalProjects))
    })

    await test.step('page heading is correct', async () => {
      await expect(page.locator('h1')).toHaveText(PAGE_HEADINGS.personalProjects)
    })
  })
})
