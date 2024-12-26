import { Browser, BrowserContext, Page, chromium, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { checkLink } from '@/__tests__/playwright/lib/utils/helpers/checkLink'

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
  await page.goto('/resume')
})

test.afterEach(async () => {
  await context.close()
})

test.describe('Resume page', () => {
  test('should have the correct Resume link', async () => {
    await checkLink(
      page,
      DATA_TEST_IDS.hero.linkResume,
      'https://drive.google.com/file/d/1NBBJJaK_zsvqtNiiF388kygQ4gqi0mLD/view',
    )
  })
})
