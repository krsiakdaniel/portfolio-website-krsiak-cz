import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test.describe('Navigation - Resume', () => {
  test('navigates to previous page - About Me', async ({ page }) => {
    // Navigate to page resume
    await page.goto('/resume')

    // Click on the PageNavigation component to go to the previous page
    await page.click(getDataTestId(DATA_TEST_IDS.page.resume.previous))

    // Check that we've navigated to the about me page
    expect(page.url()).toBe('http://localhost:3000/about-me')
  })

  test('navigates to next page - Work Experience', async ({ page }) => {
    // Navigate to page resume
    await page.goto('/resume')

    // Click on the PageNavigation component to go to the next page
    await page.click(getDataTestId(DATA_TEST_IDS.page.resume.next))

    // Check that we've navigated to the page 'Work Experience'
    expect(page.url()).toBe('http://localhost:3000/work-experience')
  })
})