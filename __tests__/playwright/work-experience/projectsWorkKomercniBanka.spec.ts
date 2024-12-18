import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
import { Browser, BrowserContext, Page, chromium, expect, test } from '@playwright/test'

let browser: Browser
let context: BrowserContext
let page: Page

test.beforeAll(async () => {
  browser = await chromium.launch()
})

test.afterAll(async () => {
  await browser.close()
})

test.beforeEach(async () => {
  context = await browser.newContext()
  page = await context.newPage()
  await page.goto(`${PAGES_URL.home}`)
})

test.afterEach(async () => {
  await context.close()
})

test.describe('Project - Komercni Banka', () => {
  test('Links', async ({ page }) => {
    await test.step('Go to page', async () => {
      await page.goto(`${PAGES_URL.work.komercniBanka}`)
    })

    await test.step('Check Branches & ATMs link', async () => {
      const link1 = page.getByRole('link', { name: 'Branches & ATMs', exact: true })
      const href1 = await link1.getAttribute('href')
      const expectedUrl1 = 'https://www.kb.cz/en/branches-and-atms'
      expect(href1).toBe(expectedUrl1)
    })

    await test.step('Check Branches & ATMs - Details link', async () => {
      const link2 = page.getByRole('link', { name: 'Branches & ATMs - Details', exact: true })
      const href2 = await link2.getAttribute('href')
      const expectedUrl2 = 'https://www.kb.cz/en/branches-and-atms/branches/brno-nam-svobody-1'
      expect(href2).toBe(expectedUrl2)
    })

    await test.step('Check Exchange Rates link', async () => {
      const link3 = page.getByRole('link', { name: 'Exchange Rates', exact: true })
      const href3 = await link3.getAttribute('href')
      const expectedUrl3 = 'https://www.kb.cz/en/exchange-rates'
      expect(href3).toBe(expectedUrl3)
    })
  })
})
