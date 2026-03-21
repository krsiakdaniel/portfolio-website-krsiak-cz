import test, { expect } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'
import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test.describe('Navigation - Personal Projects', () => {
  test('navigates to previous page - Resume', async ({ page }) => {
    // Navigate to page
    await page.goto('/personal-projects')

    // Wait for both click and navigation to complete
    await Promise.all([
      page.waitForURL('**/resume'),
      page.click(getDataTestId(DATA_TEST_IDS.projects.personal.overview.previous)),
    ])

    // Check that it navigated to the page
    await expect(page).toHaveURL(new RegExp(PAGES_URL.resume))
  })

  test('navigates to next page - Testimonials', async ({ page }) => {
    // Navigate to page
    await page.goto('/personal-projects')

    // Wait for both click and navigation to complete
    await Promise.all([
      page.waitForURL('**/testimonials'),
      page.click(getDataTestId(DATA_TEST_IDS.projects.personal.overview.next)),
    ])

    // Check that it navigated to the page
    await expect(page).toHaveURL(new RegExp(PAGES_URL.testimonials))
  })
})
