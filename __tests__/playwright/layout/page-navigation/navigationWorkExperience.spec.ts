import test, { expect } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test.describe('Navigation - Work Experience', () => {
  test('navigates to previous page - Who I Am', async ({ page }) => {
    // Navigate to page
    await page.goto('/work-experience')

    // Wait for both click and navigation to complete
    await Promise.all([
      page.waitForURL('**/who-i-am'),
      page.click(getDataTestId(DATA_TEST_IDS.pageNavigation.workExperience.previous)),
    ])

    // Verify the final URL
    expect(page.url()).toBe('http://localhost:3000/who-i-am')
  })

  test('navigates to next page - Resume', async ({ page }) => {
    // Navigate to page
    await page.goto('/work-experience')

    // Wait for both click and navigation to complete
    await Promise.all([
      page.waitForURL('**/resume'),
      page.click(getDataTestId(DATA_TEST_IDS.pageNavigation.workExperience.next)),
    ])

    // Verify the final URL
    expect(page.url()).toBe('http://localhost:3000/resume')
  })
})
