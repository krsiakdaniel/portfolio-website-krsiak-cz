import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test.describe('Navigation - Resume', () => {
  test('navigates to previous page - Work Experience', async ({ page }) => {
    // Navigate to page
    await page.goto('/resume')

    // Click on the PageNavigation component 'previous page'
    await page.click(getDataTestId(DATA_TEST_IDS.pageNavigation.resume.previous))

    // Check that it navigated to the page
    expect(page.url()).toBe('http://localhost:3000/work-experience')
  })

  test('navigates to next page - Personal Projects', async ({ page }) => {
    // Navigate to page
    await page.goto('/resume')

    // Click on the PageNavigation component 'next page'
    await page.click(getDataTestId(DATA_TEST_IDS.pageNavigation.resume.next))

    // Check that it navigated to the page
    expect(page.url()).toBe('http://localhost:3000/personal-projects')
  })
})
