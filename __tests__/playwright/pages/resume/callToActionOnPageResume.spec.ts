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
  page = await setupPage(context, '/resume')
})

// Close the context after each test
test.afterEach(async () => {
  await teardownContext(context)
})

test.describe('CTA - Resume - Download Resume, LinkedIn', () => {
  test('should render the Download Resume link correctly', async () => {
    const linkResumeDownload = page.getByTestId('call-to-action-link-resume-download')
    expect(await linkResumeDownload.isVisible()).toBe(true)
    expect(await linkResumeDownload.getAttribute('href')).toBe(
      'https://drive.google.com/file/d/1oRhPxdLv0fKnDOet2O5yEf_SSI_w3xQu/view',
    )
  })

  test('should render the LinkedIn link correctly', async () => {
    const linkResumeDownload = page.getByTestId('call-to-action-link-linkedin')
    expect(await linkResumeDownload.isVisible()).toBe(true)
    expect(await linkResumeDownload.getAttribute('href')).toBe(
      'https://www.linkedin.com/in/krsiakdaniel/',
    )
  })
})
