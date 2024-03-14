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

test.describe('Project - Groupon', () => {
  test('Link', async () => {
    await page.goto('/project-work-groupon')

    const link = page.getByRole('link', { name: 'Website →' })
    const href = await link.getAttribute('href')

    const expectedUrl = 'https://www.groupon.com/'
    expect(href).toBe(expectedUrl)
  })
})
