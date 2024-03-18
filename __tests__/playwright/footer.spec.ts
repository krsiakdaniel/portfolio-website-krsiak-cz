import { ID } from '@/utils/constants'
import { expect, test } from '@playwright/test'

const FOOTER_COPYRIGHT_SELECTOR = '[data-testid="footer-copyright"]'
const FOOTER_LINK_SELECTOR = '[data-testid="footer-link"]'
const HOME_PAGE_URL = 'http://localhost:3000/'
const HOME_PAGE_PATH = '/'

test.describe('Footer', () => {
  test('Copyright + link', async ({ page }) => {
    // Go to home page
    await page.goto(HOME_PAGE_PATH)

    // Check if the footer is present on the page
    const isFooterVisible = await page.isVisible(`#${ID.footer}`)
    expect(isFooterVisible).toBe(true)

    // Check if the copyright year is correct
    const currentYear = new Date().getFullYear().toString()
    const copyright = await page.textContent(FOOTER_COPYRIGHT_SELECTOR)
    expect(copyright).toContain(currentYear)

    // Check if the link text is correct
    const linkText = await page.textContent(FOOTER_LINK_SELECTOR)
    expect(linkText).toBe('krsiak.cz')

    // Check if link is correct
    const linkUrl = await page.getAttribute(FOOTER_LINK_SELECTOR, 'href')
    expect(linkUrl).toBe(HOME_PAGE_PATH)

    // Check if the link redirects to the home page when clicked
    await page.click(FOOTER_LINK_SELECTOR)
    expect(page.url()).toBe(HOME_PAGE_URL)
  })
})
