import { expect, test } from '@playwright/test'

const Selectors = {
  HEADER_LOGO: 'data-testid=header-logo',
}

const Paths = {
  HOME: '/',
  HOME_PAGE_URL: 'http://localhost:3000/',
}

test.describe('Header - Logo', () => {
  test('Check link and text', async ({ page }) => {
    await test.step('Go to home page', async () => {
      await page.goto(Paths.HOME)
    })

    await test.step('Check if the link is visible', async () => {
      const isLinkVisible = await page.isVisible(Selectors.HEADER_LOGO)
      expect(isLinkVisible).toBe(true)
    })

    await test.step('Check if the link text is correct', async () => {
      const linkText = await page.textContent(Selectors.HEADER_LOGO)
      expect(linkText).toBe('krsiak.cz')
    })

    await test.step('Check if link is correct', async () => {
      const linkUrl = await page.getAttribute(Selectors.HEADER_LOGO, 'href')
      expect(linkUrl).toBe(Paths.HOME)
    })

    await test.step('Check if the link redirects to the home page when clicked', async () => {
      await page.click(Selectors.HEADER_LOGO)
      await page.waitForLoadState('networkidle')
      expect(page.url()).toBe(Paths.HOME_PAGE_URL)
    })
  })
})
