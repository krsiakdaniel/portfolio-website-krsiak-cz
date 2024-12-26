import { Browser, BrowserContext, Page, chromium, test } from '@playwright/test'

import { checkLink } from '@/__tests__/playwright/utils/helpers/checkLink'
import { DATA_TEST_IDS } from '@/lib/utils/constants/ids/dataTestIds'

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
    await checkLink(page, DATA_TEST_IDS.hero.linkLinkedIn, 'https://www.linkedin.com/in/krsiakdaniel/')
  })

  test('should have the correct GitHub link', async () => {
    await checkLink(page, DATA_TEST_IDS.hero.linkGitHub, 'https://github.com/krsiakdaniel/')
  })

  test('should have the correct Resume link', async () => {
    await checkLink(
      page,
      DATA_TEST_IDS.hero.linkResume,
      'https://drive.google.com/file/d/1NBBJJaK_zsvqtNiiF388kygQ4gqi0mLD/view',
    )
  })
})
