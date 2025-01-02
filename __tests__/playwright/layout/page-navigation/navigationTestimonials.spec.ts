import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test.describe('Navigation - Testimonials', () => {
  test('navigates to previous page - Resume', async ({ page }) => {
    // Navigate to page testimonials
    await page.goto('/testimonials')

    // Click on the PageNavigation component to go to the previous page
    await page.click(getDataTestId(DATA_TEST_IDS.page.testimonials.previous))

    // Check that we've navigated to the page 'Resume'
    expect(page.url()).toBe('http://localhost:3000/resume')
  })

  test('navigates to next page - Work Experience', async ({ page }) => {
    // Navigate to page testimonials
    await page.goto('/testimonials')

    // Click on the PageNavigation component to go to the next page
    await page.click(getDataTestId(DATA_TEST_IDS.page.testimonials.next))

    // Check that we've navigated to the page 'Work Experience'
    expect(page.url()).toBe('http://localhost:3000/work-experience')
  })
})
