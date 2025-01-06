import { Browser, BrowserContext, Page, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { checkLink } from '@/__tests__/playwright/lib/utils/helpers/checkLink'
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

test.describe('Footer - Main Links', () => {
  // Test to check if the LinkedIn link in footer is correct
  test('should have the correct LinkedIn link', async () => {
    await checkLink(page, DATA_TEST_IDS.footer.linkFooterLinkedIn, 'https://www.linkedin.com/in/krsiakdaniel/')
  })

  // Test to check if the GitHub link in footer is correct
  test('should have the correct GitHub link', async () => {
    await checkLink(
      page,
      DATA_TEST_IDS.footer.linkFooterGitHub,
      'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz',
    )
  })
})
