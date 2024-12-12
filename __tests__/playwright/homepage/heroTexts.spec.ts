import { TEXT } from '@/localization/texts_en'
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

test.describe('Hero - Heading and texts', () => {
  test('should render the h1 heading correctly', async () => {
    const h1Text = await page.textContent('[data-testid="hero-heading"]')
    expect(h1Text).toContain(TEXT.nameDanielKrsiak)
    expect(h1Text).toContain('React Developer')
  })

  test('should render the paragraphs correctly', async () => {
    const paragraph1Text = await page.textContent('[data-testid="hero-paragraph-1"]')
    expect(paragraph1Text).toContain('Hi 👋 I am React Developer based in Brno, Czech Republic 🇨🇿')
  })
})
