import { expect, test } from '@playwright/test'

const Selectors = {
  MENU_ABOUT_ME: 'data-testid=desktop-about-me-link',
}

const Paths = {
  HOME: '/',
  ABOUT_ME: 'http://localhost:3000/about-me',
}

test.describe('Desktop Menu', () => {
  test('Link - About Me', async ({ page }) => {
    await test.step('Go to home page', async () => {
      await page.goto(Paths.HOME)
    })

    await test.step('Check if the link is visible', async () => {
      const isLinkVisible = await page.isVisible(Selectors.MENU_ABOUT_ME)
      expect(isLinkVisible).toBe(true)
    })

    await test.step('Check if the link redirects to the about me page when clicked', async () => {
      await page.click(Selectors.MENU_ABOUT_ME)
      await page.waitForLoadState('networkidle')
      expect(page.url()).toBe(Paths.ABOUT_ME)
    })

    await test.step('Check if the H1 heading on the final page has the text "About Me"', async () => {
      const heading = await page.textContent('h1')
      expect(heading).toBe('👨‍💻 About Me')
    })
  })
})
