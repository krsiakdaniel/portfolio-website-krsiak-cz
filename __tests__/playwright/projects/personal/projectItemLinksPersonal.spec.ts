import { testProjectLink } from '@/__tests__/playwright/utils/helpers/testProjectLink'
import { PROJECT_ID } from '@/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
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
  await page.goto(`${PAGES_URL.personal.mainUrl}`)
})

test.afterEach(async () => {
  await context.close()
})

test.describe('Projects Personal - Page links', () => {
  test('Project - Krsiak', async () => {
    await testProjectLink(page, `${PAGES_URL.personal.krsiak}`, PROJECT_ID.personal.krsiak)
  })

  test('Project - Cryptomania', async () => {
    await testProjectLink(page, `${PAGES_URL.personal.cryptoMania}`, PROJECT_ID.personal.cryptoMania)
  })
})
