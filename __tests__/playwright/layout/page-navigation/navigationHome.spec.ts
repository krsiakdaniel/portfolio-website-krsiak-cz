import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test.describe('Navigation - Home', () => {
  test('navigates to next page - Who I Am', async ({ page }) => {
    // Navigate to page
    await page.goto('/')

    // Wait for both click and navigation to complete
    await Promise.all([
      page.click(getDataTestId(DATA_TEST_IDS.pageNavigation.home.next)),
      page.waitForURL('**/who-i-am'),
    ])

    // Check that it navigated to the page
    expect(page.url()).toBe('http://localhost:3000/who-i-am')
  })
})
