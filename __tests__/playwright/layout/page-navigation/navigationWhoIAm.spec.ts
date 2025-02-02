import test, { expect } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test.describe('Navigation - Who I Am', () => {
  test('navigates to previous page - Home', async ({ page }) => {
    // Navigate to page
    await page.goto('/who-i-am')

    // Wait for both click and navigation to complete
    await Promise.all([
      page.waitForURL('**/'),
      page.click(getDataTestId(DATA_TEST_IDS.pageNavigation.whoIAm.previous)),
    ])

    // Check that it navigated to the page
    expect(page.url()).toBe('http://localhost:3000/')
  })

  test('navigates to next page - Work Experience', async ({ page }) => {
    // Navigate to page
    await page.goto('/who-i-am')

    // Wait for both click and navigation to complete
    await Promise.all([
      page.waitForURL('**/work-experience'),
      page.click(getDataTestId(DATA_TEST_IDS.pageNavigation.whoIAm.next)),
    ])

    // Check that it navigated to the page
    expect(page.url()).toBe('http://localhost:3000/work-experience')
  })
})
