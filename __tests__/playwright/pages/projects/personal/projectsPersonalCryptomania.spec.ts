import { Browser, BrowserContext, expect, Page, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

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

test.describe('Project - Cryptomania', () => {
  test('Links', async () => {
    // Navigate to the personal project page
    await test.step('Go to page', async () => {
      await page.goto('/personal-projects/cryptomania')
    })

    // Check the Alert link
    await test.step('Check Alert link', async () => {
      const alertLink = await page.getByTestId(DATA_TEST_IDS.alert.alertLinkGitHub)
      const hrefAlertLink = await alertLink.getAttribute('href')
      const expectedUrlAlertLink = 'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz'
      expect(hrefAlertLink).toBe(expectedUrlAlertLink)
    })

    // Check the Website link
    await test.step('Check Website link', async () => {
      const link = page.getByRole('link', { name: 'Website' })
      const href = await link.getAttribute('href')
      const expectedUrl = 'https://cryptocurrency-prices-one.vercel.app/'
      expect(href).toBe(expectedUrl)
    })

    // Check the GitHub link
    await test.step('Check GitHub link', async () => {
      const linkGitHub = page.getByRole('link', { name: 'GitHub repository →' })
      const hrefGitHub = await linkGitHub.getAttribute('href')
      const expectedUrlGitHub = 'https://github.com/krsiakdaniel/cryptocurrency-prices'
      expect(hrefGitHub).toBe(expectedUrlGitHub)
    })
  })
})
