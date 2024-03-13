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

test.describe('Projects Work - Page links', () => {
  test('Project - Smartsupp Dashboard', async () => {
    await testProjectLink(page, projectPages.work.smartsupp.dashboard, projectIDs.work.smartsupp.dashboard)
  })

  test('Project - Komercni banka', async () => {
    await testProjectLink(page, projectPages.work.komercniBanka, projectIDs.work.komercniBanka)
  })

  test('Project - Smartsupp Web', async () => {
    await testProjectLink(page, projectPages.work.smartsupp.web, projectIDs.work.smartsupp.web)
  })

  test('Project - Smartsupp Help', async () => {
    await testProjectLink(page, projectPages.work.smartsupp.help, projectIDs.work.smartsupp.help)
  })

  test('Project - Moravia', async () => {
    await testProjectLink(page, projectPages.work.moravia, projectIDs.work.moravia)
  })
})
