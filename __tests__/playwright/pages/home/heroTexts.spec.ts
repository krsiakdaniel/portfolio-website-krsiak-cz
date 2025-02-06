import { Browser, BrowserContext, expect, Page, test } from '@playwright/test'

import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'
import {
  setupBrowser,
  setupPage,
  teardownContext,
} from '@/__tests__/playwright/lib/utils/helpers/setup'

let browser: Browser
let context: BrowserContext
let page: Page

// Setup browser and context before all tests
test.beforeAll(async () => {
  const setup = await setupBrowser()
  browser = setup.browser
  context = setup.context
  page = setup.page
})

// Close the browser after all tests
test.afterAll(async () => {
  await browser.close()
})

// Setup a new context and page before each test
test.beforeEach(async () => {
  context = await browser.newContext()
  page = await setupPage(context, '/')
})

// Close the context after each test
test.afterEach(async () => {
  await teardownContext(context)
})

test.describe('Hero - Heading and texts', () => {
  // Test to check if the h1 heading is rendered correctly
  test('should render the h1 heading correctly', async () => {
    const h1Text = await page.textContent(getDataTestId('hero-heading'))
    expect(h1Text).toContain('Daniel Kršiak')
  })

  // Test to check if the small text inside h1 heading is rendered correctly
  test('should render small text inside h1 heading correctly', async () => {
    const h1Text = await page.textContent(getDataTestId('hero-heading-small'))
    expect(h1Text).toContain('React Developer—TypeScript &\u00A0Next.js')
  })

  // Test to check if the paragraphs are rendered correctly
  test('should render the paragraphs correctly', async () => {
    const paragraph1Text = await page.textContent(getDataTestId('hero-paragraph'))
    expect(paragraph1Text).toContain('Hi! I\u00A0am from Czech\u00A0Republic\u00A0🇨🇿')
  })
})
