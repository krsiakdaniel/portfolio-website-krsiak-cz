import { expect, test } from '@playwright/test'

const Selectors = {
  MENU_WORK_EXPERIENCE: 'data-testid=desktop-work-experience-link',
}

const Paths = {
  HOME: '/',
  WORK_EXPERIENCE: 'http://localhost:3000/work-experience',
}

test.describe('Desktop Menu', () => {
  test('Link - Work Experience', async ({ page }) => {
    await test.step('Go to home page', async () => {
      await page.goto(Paths.HOME)
    })

    await test.step('Check if the link is visible', async () => {
      const isLinkVisible = await page.isVisible(Selectors.MENU_WORK_EXPERIENCE)
      expect(isLinkVisible).toBe(true)
    })

    await test.step('Check if the link redirects to the work experience page when clicked', async () => {
      await page.click(Selectors.MENU_WORK_EXPERIENCE)
      await page.waitForLoadState('networkidle')
      expect(page.url()).toBe(Paths.WORK_EXPERIENCE)
    })

    await test.step('Check if the H1 heading on the final page has the text "Work Experience"', async () => {
      const heading = await page.textContent('h1')
      expect(heading).toBe('🖥️ Work Experience')
    })
  })
})
