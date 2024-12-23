import { getDataTestId } from '@/__tests__/playwright/utils/helpers/getDataTestId'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'
import { expect, test } from '@playwright/test'

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
      const linkText = await page.textContent(getDataTestId(DATA_TEST_IDS.footer.link))
      expect(linkText).toBe('krsiak.cz')
    })

    await test.step('Check if link is correct', async () => {
      const linkUrl = await page.getAttribute(getDataTestId(DATA_TEST_IDS.footer.link), 'href')
      expect(linkUrl).toBe(HOME_PAGE_PATH)
    })

    await test.step('Check if the link redirects to the home page when clicked', async () => {
      await page.click(getDataTestId(DATA_TEST_IDS.footer.link))
      expect(page.url()).toBe('http://localhost:3000/')
    })
  })
})
