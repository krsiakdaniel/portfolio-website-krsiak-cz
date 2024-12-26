import { Browser, BrowserContext, Page, chromium, expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

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

test.describe('Hero - Heading and texts', () => {
  test('should render the h1 heading correctly', async () => {
    const h1Text = await page.textContent(getDataTestId(DATA_TEST_IDS.hero.heading))
    expect(h1Text).toContain('Daniel Kršiak')
    expect(h1Text).toContain('React Developer')
  })

  test('should render the paragraphs correctly', async () => {
    const paragraph1Text = await page.textContent(getDataTestId(DATA_TEST_IDS.hero.paragraph))
    expect(paragraph1Text).toContain('Hi 👋 I am React Developer based in Brno, Czech\u00A0Republic 🇨🇿')
  })
})
