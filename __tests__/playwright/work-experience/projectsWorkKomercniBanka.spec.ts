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
  await page.goto('/')
})

test.afterEach(async () => {
  await context.close()
})

test.describe('Project - Komercni Banka', () => {
  test('Links', async () => {
    await page.goto('/work-experience/komercni-banka')

    // link 1
    const link1 = page.getByRole('link', { name: 'Branches & ATMs', exact: true })
    const href1 = await link1.getAttribute('href')

    const expectedUrl1 = 'https://www.kb.cz/en/branches-and-atms'
    expect(href1).toBe(expectedUrl1)

    // link 2
    const link2 = page.getByRole('link', { name: 'Branches & ATMs - Details', exact: true })
    const href2 = await link2.getAttribute('href')

    const expectedUrl2 = 'https://www.kb.cz/en/branches-and-atms/branches/brno-nam-svobody-1'
    expect(href2).toBe(expectedUrl2)

    // link 3
    const link3 = page.getByRole('link', { name: 'Exchange Rates', exact: true })
    const href3 = await link3.getAttribute('href')

    const expectedUrl3 = 'https://www.kb.cz/en/exchange-rates'
    expect(href3).toBe(expectedUrl3)

    // link 4
    const link4 = page.getByRole('link', { name: 'Exchange Rates - Details', exact: true })
    const href4 = await link4.getAttribute('href')

    const expectedUrl4 = 'https://www.kb.cz/en/exchange-rates/exchange-detail?curr=USD&date=2024-02-27T18:00:00'
    expect(href4).toBe(expectedUrl4)
  })
})
