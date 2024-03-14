import { expect, test } from '@playwright/test'

const HEADER_LOGO_SELECTOR = 'data-testid=header-logo'
const HOME_PAGE_URL = 'http://localhost:3000/'
const HOME_PAGE_PATH = '/'

test.describe('Header', () => {
  test('Link', async ({ page }) => {
    // Go to home page
    await page.goto(HOME_PAGE_PATH)

    // Check if the link is visible
    const isLinkVisible = await page.isVisible(HEADER_LOGO_SELECTOR)
    expect(isLinkVisible).toBe(true)

    // Check if the link text is correct
    const linkText = await page.textContent(HEADER_LOGO_SELECTOR)
    expect(linkText).toBe('krsiak.cz')

    // Check if link is correct
    const linkUrl = await page.getAttribute(HEADER_LOGO_SELECTOR, 'href')
    expect(linkUrl).toBe(HOME_PAGE_PATH)

    // Check if the link redirects to the home page when clicked
    await page.click(HEADER_LOGO_SELECTOR)
    expect(page.url()).toBe(HOME_PAGE_URL)
  })
})
