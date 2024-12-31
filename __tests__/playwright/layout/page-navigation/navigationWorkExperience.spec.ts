import test, { expect } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test.describe('Navigation - Work Experience', () => {
  test('navigates to previous page - Testimonials', async ({ page }) => {
    // Navigate to page work-experience
    await page.goto('/work-experience')

    // Click on the PageNavigation component to go to the previous page
    await page.click(getDataTestId(DATA_TEST_IDS.projects.work.overview.previous))

    // Check that we've navigated to the /testimonials page
    expect(page.url()).toBe('http://localhost:3000/testimonials')
  })

  test('navigates to next page - Personal Projects', async ({ page }) => {
    // Navigate to page work-experience
    await page.goto('/work-experience')

    // Click on the PageNavigation component to go to the next page
    await page.click(getDataTestId(DATA_TEST_IDS.projects.work.overview.next))

    // Check that we've navigated to the /personal-projects page
    expect(page.url()).toBe('http://localhost:3000/personal-projects')
  })
})
