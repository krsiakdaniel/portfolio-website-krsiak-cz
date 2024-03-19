import { expect, test } from '@playwright/test'

const START_URL = 'http://localhost:3000'

test.describe('Navigation - Home', () => {
  test('navigates to next page - About Me', async ({ page }) => {
    // Step 1: Navigate to your app's page
    await page.goto(START_URL)

    // Step 2: Click on the NextPageNavigation component to go to the next page
    await page.click('[data-testid="page-navigation-next-about-me"]')

    // Step 3: Check that we've navigated to the /about-me page
    expect(page.url()).toBe('http://localhost:3000/about-me')
  })
})
