import { expect, test } from '@playwright/test'

import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'
import { DATA_TEST_IDS } from '@/lib/utils/constants/ids/dataTestIds'

test.describe('Navigation - Home', () => {
  test('navigates to next page - About Me', async ({ page }) => {
    // Step 1: Navigate to your app's page
    await page.goto('/')

    // Step 2: Click on the PageNavigation component to go to the next page
    await page.click(getDataTestId(DATA_TEST_IDS.page.home.next))

    // Step 3: Check that we've navigated to the /about-me page
    expect(page.url()).toBe('http://localhost:3000/about-me')
  })
})
