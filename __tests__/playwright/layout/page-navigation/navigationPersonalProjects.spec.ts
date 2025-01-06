import test, { expect } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

// TODO: in all tests unify and simplify the comments, make them more universal and less specific
test.describe('Navigation - Personal Projects', () => {
  test('navigates to previous page - Resume', async ({ page }) => {
    // Navigate to page
    await page.goto('/personal-projects')

    // Click on the PageNavigation component to go to the previous page
    await page.click(getDataTestId(DATA_TEST_IDS.projects.personal.overview.previous))

    // Check that we've navigated to the page
    expect(page.url()).toBe('http://localhost:3000/resume')
  })

  test('navigates to next page - Testimonials', async ({ page }) => {
    // Navigate to page
    await page.goto('/personal-projects')

    // Click on the PageNavigation component to go to the next page
    await page.click(getDataTestId(DATA_TEST_IDS.projects.personal.overview.next))

    // Check that we've navigated to the page
    expect(page.url()).toBe('http://localhost:3000/testimonials')
  })
})
