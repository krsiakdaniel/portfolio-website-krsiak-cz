import { testProjectLink } from '@/__tests__/playwright/utils/testProjectLink'
import { projectIDs, projectPages } from '@/utils/constants'
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
  await page.goto('/')
})

test.afterEach(async () => {
  await context.close()
})

test.describe('Projects Personal - Page links', () => {
  test('Project - Krsiak', async () => {
    await testProjectLink(page, projectPages.personal.krsiak, projectIDs.personal.krsiak)
  })

  test('Project - Cryptomania', async () => {
    await testProjectLink(page, projectPages.personal.cryptoMania, projectIDs.personal.cryptoMania)
  })

  test('Project - Eshop', async () => {
    await testProjectLink(page, projectPages.personal.eshop, projectIDs.personal.eshop)
  })
})
