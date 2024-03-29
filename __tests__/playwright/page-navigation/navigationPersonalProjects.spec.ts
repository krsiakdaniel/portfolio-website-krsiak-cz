import test, { expect } from '@playwright/test'

test.describe('Navigation - Personal Projects', () => {
  test('navigates to previous page - Work Experience', async ({ page }) => {
    // Navigate to your app's page
    await page.goto('http://localhost:3000/personal-projects')

    // Click on the NextPageNavigation component to go to the previous page
    await page.click('[data-testid="page-navigation-previous-work-experience"]')

    // Check that we've navigated to the /work-experience page
    expect(page.url()).toBe('http://localhost:3000/work-experience')
  })
})
