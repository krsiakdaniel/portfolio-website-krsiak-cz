import { getDataTestId } from '@/__tests__/playwright/utils/getDataTestId'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import { expect, test } from '@playwright/test'

test.describe('Header - Logo', () => {
  test('Check link and text', async ({ page }) => {
    await test.step('Go to home page', async () => {
      await page.goto('/')
    })

    await test.step('Check if the link is visible', async () => {
      const isLinkVisible = await page.isVisible(getDataTestId(DATA_TEST_IDS.header))
      expect(isLinkVisible).toBe(true)
    })

    await test.step('Check if the link text is correct', async () => {
      const linkText = await page.textContent(getDataTestId(DATA_TEST_IDS.header))
      expect(linkText).toBe('krsiak.cz')
    })

    await test.step('Check if link is correct', async () => {
      const linkUrl = await page.getAttribute(getDataTestId(DATA_TEST_IDS.header), 'href')
      expect(linkUrl).toBe('/')
    })

    await test.step('Check if the link redirects to the home page when clicked', async () => {
      await page.click(getDataTestId(DATA_TEST_IDS.header))
      await page.waitForLoadState('networkidle')
      expect(page.url()).toBe('http://localhost:3000/')
    })
  })
})
