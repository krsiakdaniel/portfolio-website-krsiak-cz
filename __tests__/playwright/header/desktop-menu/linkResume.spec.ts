import { TEXT } from '@/localization/texts_en'
import { expect, test } from '@playwright/test'

const Selectors = {
  MENU_RESUME: 'data-testid=desktop-resume-link',
}

const Paths = {
  HOME: '/',
  RESUME: 'http://localhost:3000/resume',
}

test.describe('Desktop Menu', () => {
  test('Link - Resume', async ({ page }) => {
    await test.step('Go to home page', async () => {
      await page.goto(Paths.HOME)
    })

    await test.step('Check if the link is visible', async () => {
      const isLinkVisible = await page.isVisible(Selectors.MENU_RESUME)
      expect(isLinkVisible).toBe(true)
    })

    await test.step('Check if the link redirects to the resume page when clicked', async () => {
      await page.click(Selectors.MENU_RESUME)
      await page.waitForLoadState('networkidle')
      expect(page.url()).toBe(Paths.RESUME)
    })

    await test.step('Check if the H1 heading on the final page has the text "Resume"', async () => {
      const heading = await page.textContent('h1')
      expect(heading).toBe(TEXT.resume)
    })
  })
})
