import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test.describe('Navigation - About Me', () => {
  test('navigates to previous page - Home', async ({ page }) => {
    // Navigate to your app's page
    await page.goto('/about-me')

    // Click on the PageNavigation component to go to the previous page
    await page.click(getDataTestId(DATA_TEST_IDS.page.aboutMe.previous))

    // Check that we've navigated to the home page
    expect(page.url()).toBe('http://localhost:3000/')
  })

  test('navigates to next page - Resume', async ({ page }) => {
    // Navigate to your app's page
    await page.goto('/about-me')

    // Click on the PageNavigation component to go to the next page
    await page.click(getDataTestId(DATA_TEST_IDS.page.aboutMe.next))

    // Check that we've navigated to the /resume page
    expect(page.url()).toBe('http://localhost:3000/resume')
  })
})
