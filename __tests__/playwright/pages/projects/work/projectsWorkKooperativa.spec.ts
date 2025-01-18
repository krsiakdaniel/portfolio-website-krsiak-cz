import { Browser, BrowserContext, expect, Page, test } from '@playwright/test'

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

test.describe('Project - Kooperativa', () => {
  test('Links', async () => {
    // Navigate to the Kooperativa project page
    await test.step('Go to page', async () => {
      await page.goto('/work-experience/kooperativa')
    })

    // Check the Website link
    await test.step('Check Website link', async () => {
      const link1 = page.getByRole('link', { name: 'Website', exact: true })
      const href1 = await link1.getAttribute('href')
      const expectedUrl1 = 'https://www.koop.cz/pojisteni/pojisteni-majetku'
      expect(href1).toBe(expectedUrl1)
    })
  })
})
