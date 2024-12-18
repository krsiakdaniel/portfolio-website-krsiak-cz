import { getDataTestId } from '@/__tests__/playwright/utils/helpers/getDataTestId'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
import test, { expect } from '@playwright/test'

test.describe('Navigation - Work Experience', () => {
  test('navigates to previous page - Resume', async ({ page }) => {
    // Navigate to your app's page
    await page.goto(`${PAGES_URL.work.mainUrl}`)

    // Click on the PageNavigation component to go to the previous page
    await page.click(getDataTestId(DATA_TEST_IDS.projects.work.overview.previous))

    // Check that we've navigated to the /resume page
    expect(page.url()).toBe('http://localhost:3000/resume')
  })

  test('navigates to next page - Personal Projects', async ({ page }) => {
    // Navigate to your app's page
    await page.goto(`${PAGES_URL.work.mainUrl}`)

    // Click on the PageNavigation component to go to the next page
    await page.click(getDataTestId(DATA_TEST_IDS.projects.work.overview.next))

    // Check that we've navigated to the /personal-projects page
    expect(page.url()).toBe('http://localhost:3000/personal-projects')
  })
})
