import { getDataTestId } from '@/__tests__/playwright/utils/getDataTestId'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import test, { expect } from '@playwright/test'

const START_URL = 'http://localhost:3000/about-me'

test.describe('Navigation - About Me', () => {
  test('navigates to previous page - Homepage', async ({ page }) => {
    // Navigate to your app's page
    await page.goto(START_URL)

    // Click on the NextPageNavigation component to go to the previous page
    await page.click(getDataTestId(DATA_TEST_IDS.page.aboutMe.previous))

    // Check that we've navigated to the / page
    expect(page.url()).toBe('http://localhost:3000/')
  })

  test('navigates to next page - Resume', async ({ page }) => {
    // Navigate to your app's page
    await page.goto(START_URL)

    // Click on the NextPageNavigation component to go to the next page
    await page.click(getDataTestId(DATA_TEST_IDS.page.aboutMe.next))

    // Check that we've navigated to the /resume page
    expect(page.url()).toBe('http://localhost:3000/resume')
  })
})
