import test, { expect } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test.describe('Navigation - Work Experience', () => {
  test('navigates to previous page - Home', async ({ page }) => {
    // Navigate to page
    await page.goto('/work-experience')

    // Click on the PageNavigation component 'previous page'
    await page.click(getDataTestId(DATA_TEST_IDS.projects.work.overview.previous))

    // Check that it navigated to the page
    expect(page.url()).toBe('http://localhost:3000/')
  })

  test('navigates to next page - Resume', async ({ page }) => {
    // Navigate to page
    await page.goto('/work-experience')

    // Click on the PageNavigation component 'next page'
    await page.click(getDataTestId(DATA_TEST_IDS.projects.work.overview.next))

    // Check that it navigated to the page
    expect(page.url()).toBe('http://localhost:3000/resume')
  })
})
