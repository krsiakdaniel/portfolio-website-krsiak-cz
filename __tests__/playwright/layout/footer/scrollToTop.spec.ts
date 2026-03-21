import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Scroll To Top Button', () => {
  test('is not visible at the top of the page', async ({ page }) => {
    await page.goto(PAGES_URL.home)
    await expect(page.getByTestId(DATA_TEST_IDS.footer.scrollToTopButton)).not.toBeVisible()
  })

  test('appears after scrolling down and scrolls back to top on click', async ({ page }) => {
    await page.goto(PAGES_URL.whoIAm)

    // Use mouse.wheel to trigger the native scroll event listener
    await page.mouse.wheel(0, 1500)
    const button = page.getByTestId(DATA_TEST_IDS.footer.scrollToTopButton)
    await expect(button).toBeVisible({ timeout: 10000 })

    await button.click()
    await page.waitForFunction(() => window.scrollY < 100)

    const scrollY = await page.evaluate(() => window.scrollY)
    expect(scrollY).toBeLessThan(100)
  })
})
