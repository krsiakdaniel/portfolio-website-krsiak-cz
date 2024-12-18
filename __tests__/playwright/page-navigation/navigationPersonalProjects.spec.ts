import { getDataTestId } from '@/__tests__/playwright/utils/getDataTestId'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import test, { expect } from '@playwright/test'

test.describe('Navigation - Personal Projects', () => {
  test('navigates to previous page - Work Experience', async ({ page }) => {
    // Navigate to your app's page
    await page.goto(PAGES_URL.personal.mainUrl)

    // Click on the PageNavigation component to go to the previous page
    await page.click(getDataTestId(DATA_TEST_IDS.projects.personal.overview.previous))

    // Check that we've navigated to the /work-experience page
    expect(page.url()).toBe('http://localhost:3000/work-experience')
  })
})
