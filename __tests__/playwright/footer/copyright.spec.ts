import { ID } from '@/utils/constants'
import { expect, test } from '@playwright/test'

const FOOTER_COPYRIGHT_SELECTOR = '[data-testid="footer-copyright"]'
const HOME_PAGE_PATH = '/'

test.describe('Footer - Copy', () => {
  test('Copyright', async ({ page }) => {
    await test.step('Go to home page', async () => {
      await page.goto(HOME_PAGE_PATH)
    })

    await test.step('Check if the footer is present on the page', async () => {
      const isFooterVisible = await page.isVisible(`#${ID.footer}`)
      expect(isFooterVisible).toBe(true)
    })

    await test.step('Check if the copyright year is correct', async () => {
      const currentYear = new Date().getFullYear().toString()
      const copyright = await page.textContent(FOOTER_COPYRIGHT_SELECTOR)
      expect(copyright).toContain(currentYear)
    })
  })
})
