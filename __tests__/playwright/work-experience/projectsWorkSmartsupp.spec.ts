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

test.describe('Project - Smartsupp', () => {
  test('Dashboard - Link', async () => {
    await page.goto('/work-experience/smartsupp-dashboard')

    const link = page.getByRole('link', { name: 'Website →' })
    const href = await link.getAttribute('href')

    const expectedUrl = 'https://www.smartsupp.com/live-chat-for-customer-care-teams/'
    expect(href).toBe(expectedUrl)
  })

  test('Web - Link', async () => {
    await page.goto('/work-experience/smartsupp-web')

    const link = page.getByRole('link', { name: 'Website →' })
    const href = await link.getAttribute('href')

    const expectedUrl = 'https://www.smartsupp.com/'
    expect(href).toBe(expectedUrl)
  })

  test('HELP - Link', async () => {
    await page.goto('/work-experience/smartsupp-help')

    const link = page.getByRole('link', { name: 'Website →' })
    const href = await link.getAttribute('href')

    const expectedUrl = 'https://help.smartsupp.com/'
    expect(href).toBe(expectedUrl)
  })
})
