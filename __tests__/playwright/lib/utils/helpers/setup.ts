// FIXME: refactor all test, simplify and remove this file
// INFO: example file: 'projectsWorkGroupon.spec.ts'

import { BrowserContext, chromium, Page } from '@playwright/test'

import { BrowserSetup } from '@/__tests__/playwright/lib/utils/typeDefinitions/interfaces'

/**
 * Function to setup the browser, context, and page.
 * @returns {Promise<BrowserSetup>} - The browser, context, and page setup.
 */

export const setupBrowser = async (): Promise<BrowserSetup> => {
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()
  return { browser, context, page }
}

/**
 * Function to setup a new page and navigate to a specified URL.
 * @param {BrowserContext} context - The browser context.
 * @param {string} url - The URL to navigate to.
 * @returns {Promise<Page>} - The setup page.
 */

export const setupPage = async (context: BrowserContext, url: string): Promise<Page> => {
  const page = await context.newPage()
  await page.goto(url)
  return page
}

/**
 * Function to teardown the browser context.
 * @param {BrowserContext} context - The browser context to close.
 * @returns {Promise<void>} - A promise that resolves when the context is closed.
 */

export const teardownContext = async (context: BrowserContext): Promise<void> => {
  await context.close()
}
