import { Browser, BrowserContext, expect, Page, test } from '@playwright/test'

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
  page = await setupPage(context, '/testimonials')
})

// Close the context after each test
test.afterEach(async () => {
  await teardownContext(context)
})

test.describe('Testimonials - Link - Grace Church', () => {
  test('should render the Grace Community Church link correctly', async () => {
    const graceChurchLink = page.getByText('Grace Community Church')
    expect(await graceChurchLink.isVisible()).toBe(true)
    expect(await graceChurchLink.getAttribute('href')).toBe(
      'https://www.gracechurch.org/about/gospel',
    )
  })
})
