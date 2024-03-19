import { ID } from '@/utils/constants'
import { expect, test } from '@playwright/test'

const STATUS_PAGE_LINK_SELECTOR = '[data-testid="footer-link-status-page"]'
const HOME_PAGE_URL = 'http://localhost:3000/'
const STATUS_PAGE_URL = 'http://localhost:3000/status-page'

test.describe('Footer - Status Page Link', () => {
  test('Link - Status page', async ({ page }) => {
    await test.step('Go to home page', async () => {
      await page.goto(HOME_PAGE_URL)
    })

    await test.step('Check if the footer is present on the page', async () => {
      const isFooterVisible = await page.isVisible(`#${ID.footer}`)
      expect(isFooterVisible).toBe(true)
    })

    await test.step('Check if the link text is correct', async () => {
      const linkText = await page.textContent(STATUS_PAGE_LINK_SELECTOR)
      expect(linkText).toBe('Status page')
    })

    await test.step('Check if link is correct', async () => {
      const linkUrl = await page.getAttribute(STATUS_PAGE_LINK_SELECTOR, 'href')
      expect(linkUrl).toBe('/status-page')
    })

    await test.step('Check if the link redirects to the status page when clicked', async () => {
      await page.click(STATUS_PAGE_LINK_SELECTOR)
      await page.waitForNavigation()
      expect(page.url()).toBe(STATUS_PAGE_URL)
    })
  })
})
