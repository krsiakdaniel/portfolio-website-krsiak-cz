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
  page = await setupPage(context, '/')
})

// Close the context after each test
test.afterEach(async () => {
  await teardownContext(context)
})

test.describe('CTA - Home - Work, Resume', () => {
  test('should render the Work Experience CTA link correctly', async () => {
    const linkWorkExperience = page.getByTestId('call-to-action-link-work-experience')
    expect(await linkWorkExperience.isVisible()).toBe(true)
    expect(await linkWorkExperience.getAttribute('href')).toBe('/work-experience')
  })

  test('should render the Resume CTA link correctly', async () => {
    const linkResume = page.getByTestId('call-to-action-link-resume')
    expect(await linkResume.isVisible()).toBe(true)
    expect(await linkResume.getAttribute('href')).toBe('/resume')
  })

  test('should render the LinkedIn photo inside the CTA correctly', async () => {
    const linkedInPhoto = page.getByTestId('linkedin-photo')
    expect(await linkedInPhoto.isVisible()).toBe(true)
  })
})
