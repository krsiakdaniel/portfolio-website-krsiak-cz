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
    expect(h1Text).toContain('Daniel Krsiak')
    expect(h1Text).toContain('React Developer')
  })

  test('should render the paragraphs correctly', async () => {
    const paragraph1Text = await page.textContent('[data-testid="hero-paragraph-1"]')
    const paragraph2Text = await page.textContent('[data-testid="hero-paragraph-2"]')
    expect(paragraph1Text).toContain('Hi 👋 I am React Developer based in Brno, Czech Republic 🇨🇿')
    expect(paragraph2Text).toContain('I enjoy working with JavaScript, TypeScript, and React.')
  })
})
