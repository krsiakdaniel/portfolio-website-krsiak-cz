import { Browser, BrowserContext, Page, test } from '@playwright/test'

import { projectLinks } from '@/__tests__/playwright/lib/__mock__/projectLinksData'

import {
  setupBrowser,
  setupPage,
  teardownContext,
} from '@/__tests__/playwright/lib/utils/helpers/setup'
import { testProjectLink } from '@/__tests__/playwright/lib/utils/helpers/testProjectLink'

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
  page = await setupPage(context, '/work-experience')
})

// Close the context after each test
test.afterEach(async () => {
  await teardownContext(context)
})

test.describe('Projects Work - Page links', () => {
  projectLinks.forEach(({ name, url, id }) => {
    test(`Project - ${name}`, async () => {
      await testProjectLink(page, url, id)
    })
  })
})
