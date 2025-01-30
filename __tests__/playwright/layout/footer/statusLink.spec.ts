import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test.describe('Footer - Status Link', () => {
  test('Link - Status', async ({ page }) => {
    await test.step('Go to home page', async () => {
      await page.goto('/')
    })

    await test.step('Check if the footer is present on the page', async () => {
      const isFooterVisible = await page.isVisible('#footer')
      expect(isFooterVisible).toBe(true)
    })

    await test.step('Check if the link text is correct', async () => {
      const linkText = await page.textContent(getDataTestId(DATA_TEST_IDS.footer.status))
      expect(linkText).toBe('Status')
    })

    await test.step('Check if link is correct', async () => {
      const linkUrl = await page.getAttribute(getDataTestId(DATA_TEST_IDS.footer.status), 'href')
      expect(linkUrl).toBe('/status')
    })

    await test.step('Check if the link redirects to the status when clicked', async () => {
      await page.click(getDataTestId(DATA_TEST_IDS.footer.status))
      await page.waitForURL('http://localhost:3000/status')
      expect(page.url()).toBe('http://localhost:3000/status')
    })
  })
})
