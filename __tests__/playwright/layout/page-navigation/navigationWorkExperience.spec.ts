import test, { expect } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'
import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test.describe('Navigation - Work Experience', () => {
  test('navigates to previous page - Home', async ({ page }) => {
    // Navigate to page
    await page.goto('/work-experience')

    // Wait for both click and navigation to complete
    await Promise.all([
      page.waitForURL('/'),
      page.click(getDataTestId(DATA_TEST_IDS.pageNavigation.workExperience.previous)),
    ])

    // Verify the final URL
    await expect(page).toHaveURL(new RegExp(`${PAGES_URL.home}$`))
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
    await expect(page).toHaveURL(new RegExp(PAGES_URL.resume))
  })
})
