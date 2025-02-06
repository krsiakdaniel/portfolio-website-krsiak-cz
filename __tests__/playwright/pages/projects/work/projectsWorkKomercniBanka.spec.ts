import { Browser, BrowserContext, expect, Page, test } from '@playwright/test'

import {
  setupBrowser,
  setupPage,
  teardownContext,
} from '@/__tests__/playwright/lib/utils/helpers/setup'
import { NB_HYPHEN } from '@/lib/utils/constants/specialCharacters'

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

test.describe('Project - Komercni Banka', () => {
  test('Links', async () => {
    // Navigate to the Komercni Banka project page
    await test.step('Go to page', async () => {
      await page.goto('/work-experience/komercni-banka')
    })

    // Check Branches & ATMs link
    await test.step('Check Branches & ATMs link', async () => {
      const link1 = page.getByRole('link', { name: 'Branches &\u00A0ATMs', exact: true })
      const href1 = await link1.getAttribute('href')
      const expectedUrl1 = 'https://www.kb.cz/en/branches-and-atms'
      expect(href1).toBe(expectedUrl1)
    })

    // Check Branches & ATMs - Details link
    await test.step('Check Branches & ATMs - Details link', async () => {
      const link2 = page.getByRole('link', {
        name: `Branches &\u00A0ATMs ${NB_HYPHEN}\u00A0Details`,
        exact: true,
      })
      const href2 = await link2.getAttribute('href')
      const expectedUrl2 = 'https://www.kb.cz/en/branches-and-atms/branches/brno-nam-svobody-1'
      expect(href2).toBe(expectedUrl2)
    })

    // Check Exchange Rates link
    await test.step('Check Exchange Rates link', async () => {
      const link3 = page.getByRole('link', { name: 'Exchange Rates', exact: true })
      const href3 = await link3.getAttribute('href')
      const expectedUrl3 = 'https://www.kb.cz/en/exchange-rates'
      expect(href3).toBe(expectedUrl3)
    })

    // Check Exchange Rates - Details link
    await test.step('Check Exchange Rates - Details link', async () => {
      const link4 = page.getByRole('link', {
        name: `Exchange Rates ${NB_HYPHEN}\u00A0Details`,
        exact: true,
      })
      const href4 = await link4.getAttribute('href')
      const expectedUrl4 =
        'https://www.kb.cz/en/exchange-rates/exchange-detail?curr=CHF&date=2024-12-27T07:00:00'
      expect(href4).toBe(expectedUrl4)
    })
  })
})
