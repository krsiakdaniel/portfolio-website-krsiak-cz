import { expect, test } from '@playwright/test'

import { ID } from '@/lib/utils/constants/ids/elementIds'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Skip Navigation - Accessibility', () => {
  test('skip to main content link becomes visible on focus and has correct target', async ({
    page,
  }) => {
    await page.goto(PAGES_URL.home)
    const skipLink = page.getByTestId(DATA_TEST_IDS.skipNavigation.skipToMainContent)

    await page.keyboard.press('Tab')
    await expect(skipLink).toBeFocused()
    await expect(skipLink).toHaveAttribute('href', `#${ID.main}`)
  })

  test('skip to navigation link has correct target', async ({ page }) => {
    await page.goto(PAGES_URL.home)
    const skipNavLink = page.getByTestId(DATA_TEST_IDS.skipNavigation.skipToNavigation)

    await expect(skipNavLink).toHaveAttribute('href', `#${ID.menu.desktop}`)
  })
})
