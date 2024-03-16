import { expect, test } from '@playwright/test'

test.describe('About Me Page - Tests', () => {
  test('Heading + text', async ({ page }) => {
    // Go to the page where the HeadingInfo component is rendered
    await page.goto('http://localhost:3000/about-me')

    // Check that the Heading text is correct
    const heading = await page.textContent('h1')
    expect(heading).toBe('👨‍💻 About Me')

    // Check that the p text is correct
    const paragraph = await page.textContent('[data-testid="about-me-introduction"]')
    expect(paragraph).toContain(
      'I am React Developer, who knows QA Automation and is capable of leading people as Team Leader.',
    )
  })
})
