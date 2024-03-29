import test, { expect } from '@playwright/test'

const START_URL = 'http://localhost:3000/work-experience'

test.describe('Navigation - Work Experience', () => {
  test('navigates to previous page - About Me', async ({ page }) => {
    // Navigate to your app's page
    await page.goto(START_URL)

    // Click on the NextPageNavigation component to go to the previous page
    await page.click('[data-testid="page-navigation-previous-about-me"]')

    // Check that we've navigated to the /about-me page
    expect(page.url()).toBe('http://localhost:3000/about-me')
  })

  test('navigates to next page - Personal Projects', async ({ page }) => {
    // Navigate to your app's page
    await page.goto(START_URL)

    // Click on the NextPageNavigation component to go to the next page
    await page.click('[data-testid="page-navigation-next-personal-projects"]')

    // Check that we've navigated to the /personal-projects page
    expect(page.url()).toBe('http://localhost:3000/personal-projects')
  })
})
