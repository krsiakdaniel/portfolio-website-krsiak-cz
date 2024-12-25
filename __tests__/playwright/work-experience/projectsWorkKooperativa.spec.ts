import { Browser, BrowserContext, Page, chromium, expect, test } from '@playwright/test'

import { PAGES_URL } from '@/utils/constants/urls/pageUrls'

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

test.describe('Project - Kooperativa', () => {
  test('Links', async ({ page }) => {
    await test.step('Go to page', async () => {
      await page.goto(`${PAGES_URL.work.kooperativa}`)
    })

    await test.step('Check Website link', async () => {
      const link1 = page.getByRole('link', { name: 'Website →', exact: true })
      const href1 = await link1.getAttribute('href')
      const expectedUrl1 = 'https://www.koop.cz/pojisteni/pojisteni-majetku'
      expect(href1).toBe(expectedUrl1)
    })
  })
})
