import { testProjectLink } from '@/__tests__/playwright/utils/testProjectLink'
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
  await page.goto('/work-experience')
})

test.afterEach(async () => {
  await context.close()
})

test.describe('Projects Work - Page links', () => {
  test('Project - Kooperativa', async () => {
    await testProjectLink(page, PAGES_URL.work.kooperativa, PROJECT_ID.work.kooperativa)
  })

  test('Project - Smartsupp Dashboard', async () => {
    await testProjectLink(page, PAGES_URL.work.smartsupp.dashboard, PROJECT_ID.work.smartsupp.dashboard)
  })

  test('Project - Komercni banka', async () => {
    await testProjectLink(page, PAGES_URL.work.komercniBanka, PROJECT_ID.work.komercniBanka)
  })

  test('Project - Smartsupp Web', async () => {
    await testProjectLink(page, PAGES_URL.work.smartsupp.web, PROJECT_ID.work.smartsupp.web)
  })

  test('Project - Smartsupp Help', async () => {
    await testProjectLink(page, PAGES_URL.work.smartsupp.help, PROJECT_ID.work.smartsupp.help)
  })

  test('Project - Groupon', async () => {
    await testProjectLink(page, PAGES_URL.work.groupon, PROJECT_ID.work.groupon)
  })

  test('Project - Moravia', async () => {
    await testProjectLink(page, PAGES_URL.work.moravia, PROJECT_ID.work.moravia)
  })
})
