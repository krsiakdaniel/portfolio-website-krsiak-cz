import { testProjectLink } from '@/__tests__/playwright/utils/testProjectLink'
import { PAGES_URL, PROJECT_ID } from '@/utils/constants'
import { Browser, BrowserContext, Page, chromium, test } from '@playwright/test'

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
    await testProjectLink(page, PAGES_URL.personal.krsiak, PROJECT_ID.personal.krsiak)
  })

  test('Project - Cryptomania', async () => {
    await testProjectLink(page, PAGES_URL.personal.cryptoMania, PROJECT_ID.personal.cryptoMania)
  })

  test('Project - Eshop', async () => {
    await testProjectLink(page, PAGES_URL.personal.eshop, PROJECT_ID.personal.eshop)
  })
})
