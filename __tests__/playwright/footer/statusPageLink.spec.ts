import { expect, test } from '@playwright/test'

import { getDataTestId } from '@/__tests__/playwright/utils/helpers/getDataTestId'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'

const STATUS_PAGE_URL = 'http://localhost:3000/status-page'

test.describe('Footer - Status Page Link', () => {
  test('Link - Status page', async ({ page }) => {
    await test.step('Go to home page', async () => {
      await page.goto('/')
    })

    await test.step('Check if the footer is present on the page', async () => {
      const isFooterVisible = await page.isVisible(`#${ID.footer}`)
      expect(isFooterVisible).toBe(true)
    })

    await test.step('Check if the link text is correct', async () => {
      const linkText = await page.textContent(getDataTestId(DATA_TEST_IDS.footer.statusPage))
      expect(linkText).toBe('Status page')
    })

    await test.step('Check if link is correct', async () => {
      const linkUrl = await page.getAttribute(getDataTestId(DATA_TEST_IDS.footer.statusPage), 'href')
      expect(linkUrl).toBe('/status-page')
    })

    await test.step('Check if the link redirects to the status page when clicked', async () => {
      await page.click(getDataTestId(DATA_TEST_IDS.footer.statusPage))
      await page.waitForURL(STATUS_PAGE_URL)
      expect(page.url()).toBe(STATUS_PAGE_URL)
    })
  })
})
