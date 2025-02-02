import { Browser, BrowserContext, Page, test } from '@playwright/test'

import { checkLink } from '@/__tests__/playwright/lib/utils/helpers/checkLink'
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
  page = await setupPage(context, '/resume')
})

// Close the context after each test
test.afterEach(async () => {
  await teardownContext(context)
})

test.describe('Resume page', () => {
  // Test to check if the Resume link is correct
  test('should have the correct Resume link', async () => {
    await checkLink(
      page,
      'call-to-action-link-resume-download',
      'https://drive.google.com/file/d/1iq41KRaiwTjyCxYrGXEFcbsq5rKbQkBm/view',
    )
  })
})
