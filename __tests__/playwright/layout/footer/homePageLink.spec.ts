import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test.describe('Footer - Home page Link', () => {
  test('Link - krsiak.cz', async ({ page }) => {
    await test.step('Go to home page', async () => {
      await page.goto('/')
    })

    await test.step('Check if the footer is present on the page', async () => {
      const isFooterVisible = await page.isVisible('#footer')
      expect(isFooterVisible).toBe(true)
    })

    await test.step('Check if the link text is correct', async () => {
      const linkText = await page.textContent(getDataTestId(DATA_TEST_IDS.footer.linkFooterHome))
      expect(linkText).toBe('krsiak.cz')
    })

    await test.step('Check if link is correct', async () => {
      const linkUrl = await page.getAttribute(getDataTestId(DATA_TEST_IDS.footer.linkFooterHome), 'href')
      expect(linkUrl).toBe('/')
    })

    await test.step('Check if the link redirects to the home page when clicked', async () => {
      await page.click(getDataTestId(DATA_TEST_IDS.footer.linkFooterHome))
      expect(page.url()).toBe('http://localhost:3000/')
    })
  })
})
