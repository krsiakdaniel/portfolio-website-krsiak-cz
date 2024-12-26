import { Browser, BrowserContext, Page, chromium, test } from '@playwright/test'

import { testProjectLink } from '@/__tests__/playwright/utils/helpers/testProjectLink'

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
  await page.goto('/personal-projects')
})

test.afterEach(async () => {
  await context.close()
})

test.describe('Projects Personal - Page links', () => {
  test('Project - Krsiak', async () => {
    await testProjectLink(page, '/personal-projects/krsiak', 'link-project-personal-krsiak')
  })

  test('Project - Cryptomania', async () => {
    await testProjectLink(page, '/personal-projects/cryptomania', 'link-project-personal-cryptomania')
  })
})
