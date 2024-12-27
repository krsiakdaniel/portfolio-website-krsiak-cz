import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test.describe('Footer - Copyright', () => {
  test('Copyright', async ({ page }) => {
    await test.step('Go to home page', async () => {
      await page.goto('/')
    })

    await test.step('Check if the footer is present on the page', async () => {
      const isFooterVisible = await page.isVisible('#footer')
      expect(isFooterVisible).toBe(true)
    })

    await test.step('Check if the copyright year is correct', async () => {
      const currentYear = new Date().getFullYear().toString()
      const copyright = await page.textContent(getDataTestId(DATA_TEST_IDS.footer.copyright))
      expect(copyright).toContain(currentYear)
    })
  })
})
