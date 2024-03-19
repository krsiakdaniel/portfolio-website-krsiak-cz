import { ID } from '@/utils/constants'
import { expect, test } from '@playwright/test'

const FOOTER_LINK_SELECTOR = '[data-testid="footer-link"]'
const HOME_PAGE_URL = 'http://localhost:3000/'
const HOME_PAGE_PATH = '/'

test.describe('Footer - Page Link', () => {
  test('Link - krsiak.cz', async ({ page }) => {
    await test.step('Go to home page', async () => {
      await page.goto(HOME_PAGE_PATH)
    })

    await test.step('Check if the footer is present on the page', async () => {
      const isFooterVisible = await page.isVisible(`#${ID.footer}`)
      expect(isFooterVisible).toBe(true)
    })

    await test.step('Check if the link text is correct', async () => {
      const linkText = await page.textContent(FOOTER_LINK_SELECTOR)
      expect(linkText).toBe('krsiak.cz')
    })

    await test.step('Check if link is correct', async () => {
      const linkUrl = await page.getAttribute(FOOTER_LINK_SELECTOR, 'href')
      expect(linkUrl).toBe(HOME_PAGE_PATH)
    })

    await test.step('Check if the link redirects to the home page when clicked', async () => {
      await page.click(FOOTER_LINK_SELECTOR)
      expect(page.url()).toBe(HOME_PAGE_URL)
    })
  })
})
