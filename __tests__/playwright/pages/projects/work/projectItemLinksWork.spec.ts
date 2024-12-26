import { Browser, BrowserContext, Page, chromium, test } from '@playwright/test'

import { projectLinks } from '@/__tests__/playwright/lib/data/projectLinksData'
import { testProjectLink } from '@/__tests__/playwright/lib/utils/helpers/testProjectLink'

let browser: Browser
let context: BrowserContext
let page: Page

test.beforeAll(async () => {
  browser = await chromium.launch()
})

test.afterAll(async () => {
  await browser.close()
})

test.beforeEach(async () => {
  context = await browser.newContext()
  page = await context.newPage()
  await page.goto('/work-experience')
})

test.afterEach(async () => {
  await context.close()
})

test.describe('Projects Work - Page links', () => {
  projectLinks.forEach(({ name, url, id }) => {
    test(`Project - ${name}`, async () => {
      await testProjectLink(page, url, id)
    })
  })
})
