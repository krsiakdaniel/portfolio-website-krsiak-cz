import test, { expect } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test.describe('Navigation - Personal Projects', () => {
  test('navigates to previous page - Work Experience', async ({ page }) => {
    // Navigate to your app's page
    await page.goto('/personal-projects')

    // Click on the PageNavigation component to go to the previous page
    await page.click(getDataTestId(DATA_TEST_IDS.projects.personal.overview.previous))

    // Check that we've navigated to the /work-experience page
    expect(page.url()).toBe('http://localhost:3000/work-experience')
  })
})
