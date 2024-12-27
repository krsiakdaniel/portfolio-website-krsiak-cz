import { Browser, BrowserContext, expect, Page, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'
import { setupBrowser, setupPage, teardownContext } from '@/__tests__/playwright/lib/utils/helpers/setup'

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
    const h1Text = await page.textContent(getDataTestId(DATA_TEST_IDS.hero.heading))
    expect(h1Text).toContain('Daniel Kršiak')
    expect(h1Text).toContain('React Developer')
  })

  // Test to check if the paragraphs are rendered correctly
  test('should render the paragraphs correctly', async () => {
    const paragraph1Text = await page.textContent(getDataTestId(DATA_TEST_IDS.hero.paragraph))
    expect(paragraph1Text).toContain('Hi 👋 I am React Developer based in Brno, Czech\u00A0Republic 🇨🇿')
  })
})
