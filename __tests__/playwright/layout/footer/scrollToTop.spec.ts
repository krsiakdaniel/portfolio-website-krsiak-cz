import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test('should scroll to top when button is clicked', async ({ page }) => {
  // Navigate to your page
  await page.goto('/')

  // Scroll down
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight)
  })

  // Click the "Scroll to Top" button
  await page.click(getDataTestId(DATA_TEST_IDS.footer.scrollToTopButton))

  // Wait for scroll to finish
  await page.waitForFunction(() => window.scrollY === 0)

  // Verify that the page has been scrolled to the top
  const scrollPosition = await page.evaluate(() => window.scrollY)
  expect(scrollPosition).toBe(0)
})
