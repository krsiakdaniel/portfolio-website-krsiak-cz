import { expect, test } from '@playwright/test'

const Selectors = {
  MENU_PERSONAL_PROJECTS: 'data-testid=desktop-personal-projects-link',
}

const Paths = {
  HOME: '/',
  PERSONAL_PROJECTS: 'http://localhost:3000/personal-projects',
}

test.describe('Desktop Menu', () => {
  test('Link - Personal Projects', async ({ page }) => {
    await test.step('Go to home page', async () => {
      await page.goto(Paths.HOME)
    })

    await test.step('Check if the link is visible', async () => {
      const isLinkVisible = await page.isVisible(Selectors.MENU_PERSONAL_PROJECTS)
      expect(isLinkVisible).toBe(true)
    })

    await test.step('Check if the link redirects to the personal projects page when clicked', async () => {
      await page.click(Selectors.MENU_PERSONAL_PROJECTS)
      await page.waitForLoadState('networkidle')
      expect(page.url()).toBe(Paths.PERSONAL_PROJECTS)
    })

    await test.step('Check if the H1 heading on the final page has the text "Personal Projects"', async () => {
      const heading = await page.textContent('h1')
      expect(heading).toBe('🚀 Personal Projects')
    })
  })
})
