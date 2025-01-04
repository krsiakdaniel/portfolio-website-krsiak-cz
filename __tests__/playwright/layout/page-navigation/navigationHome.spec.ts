import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test.describe('Navigation - Home', () => {
  test('navigates to next page - Work Experience', async ({ page }) => {
    // Step 1: Navigate to home page
    await page.goto('/')

    // Step 2: Click on the PageNavigation component to go to the next page
    await page.click(getDataTestId(DATA_TEST_IDS.page.home.next))

    // Step 3: Check that it navigated to correct page
    expect(page.url()).toBe('http://localhost:3000/work-experience')
  })
})
