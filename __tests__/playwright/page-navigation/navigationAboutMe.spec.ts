import test, { expect } from '@playwright/test'

const START_URL = 'http://localhost:3000/about-me'

test.describe('Navigation - About Me', () => {
  test('navigates to previous page - Homepage', async ({ page }) => {
    // Navigate to your app's page
    await page.goto(START_URL)

    // Click on the NextPageNavigation component to go to the previous page
    await page.click('[data-testid="page-navigation-previous-homepage"]')

    // Check that we've navigated to the / page
    expect(page.url()).toBe('http://localhost:3000/')
  })

  test('navigates to next page - Work Experience', async ({ page }) => {
    // Navigate to your app's page
    await page.goto(START_URL)

    // Click on the NextPageNavigation component to go to the next page
    await page.click('[data-testid="page-navigation-next-work-experience"]')

    // Check that we've navigated to the /work-experience page
    expect(page.url()).toBe('http://localhost:3000/work-experience')
  })
})
