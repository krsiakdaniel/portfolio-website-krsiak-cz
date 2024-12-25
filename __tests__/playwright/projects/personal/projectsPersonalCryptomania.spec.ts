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
  await page.goto(PAGES_URL.home)
})

test.afterEach(async () => {
  await context.close()
})

test.describe('Project - Cryptomania', () => {
  test('Links', async ({ page }) => {
    await test.step('Go to page', async () => {
      await page.goto(`${PAGES_URL.personal.cryptoMania}`)
    })

    await test.step('Check Website link', async () => {
      const link = page.getByRole('link', { name: 'Website →' })
      const href = await link.getAttribute('href')
      const expectedUrl = 'https://cryptocurrency-prices-one.vercel.app/'
      expect(href).toBe(expectedUrl)
    })

    await test.step('Check GitHub link', async () => {
      const linkGitHub = page.getByRole('link', { name: 'GitHub repository →' })
      const hrefGitHub = await linkGitHub.getAttribute('href')
      const expectedUrlGitHub = 'https://github.com/krsiakdaniel/cryptocurrency-prices'
      expect(hrefGitHub).toBe(expectedUrlGitHub)
    })
  })
})
