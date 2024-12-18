import { checkLink } from '@/__tests__/playwright/utils/checkLink'
import { EXTERNAL_URL } from '@/utils/constants/externalUrls'
import { PAGES_URL } from '@/utils/constants/pageUrls'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
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
  await page.goto(PAGES_URL.resume)
})

test.afterEach(async () => {
  await context.close()
})

test.describe('Resume page', () => {
  test('should have the correct Resume link', async () => {
    await checkLink(page, DATA_TEST_IDS.hero.linkResume, EXTERNAL_URL.resume.resumeViewPDF)
  })
})
