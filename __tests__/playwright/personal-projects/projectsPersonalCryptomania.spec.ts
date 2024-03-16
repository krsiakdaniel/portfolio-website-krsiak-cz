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

test.describe('Project - Cryptomania', () => {
  test('Links', async () => {
    await page.goto('/personal-projects/cryptomania')

    const link = page.getByRole('link', { name: 'Website →' })
    const href = await link.getAttribute('href')

    const expectedUrl = 'https://cryptomania-currency-prices.netlify.app/'
    expect(href).toBe(expectedUrl)

    const linkGitHub = page.getByRole('link', { name: 'GitHub repository →' })
    const hrefGitHub = await linkGitHub.getAttribute('href')

    const expectedUrlGitHub = 'https://github.com/krsiakdaniel/cryptocurrency-prices'
    expect(hrefGitHub).toBe(expectedUrlGitHub)
  })
})
