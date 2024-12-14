import { checkLink } from '@/__tests__/playwright/utils/checkLink'
import { EXTERNAL_URL } from '@/utils/constants'
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
  await page.goto('/')
})

test.afterEach(async () => {
  await context.close()
})

test.describe('Hero Links', () => {
  test('should have the correct LinkedIn link', async () => {
    await checkLink(page, DATA_TEST_IDS.hero.linkLinkedIn, EXTERNAL_URL.linkedin)
  })

  test('should have the correct GitHub link', async () => {
    await checkLink(page, DATA_TEST_IDS.hero.linkGitHub, EXTERNAL_URL.github)
  })

  test('should have the correct Resume link', async () => {
    await checkLink(page, DATA_TEST_IDS.hero.linkResume, EXTERNAL_URL.resume.resumeViewPDF)
  })
})
