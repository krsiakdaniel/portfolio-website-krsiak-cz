import { getDataTestId } from '@/__tests__/playwright/utils/getDataTestId'
import { TEXT } from '@/localization/texts_en'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import { Browser, BrowserContext, Page, chromium, expect, test } from '@playwright/test'

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
    expect(h1Text).toContain(TEXT.nameDanielKrsiak)
    expect(h1Text).toContain(TEXT.reactDeveloper)
  })

  test('should render the paragraphs correctly', async () => {
    const paragraph1Text = await page.textContent(getDataTestId(DATA_TEST_IDS.hero.paragraph))
    expect(paragraph1Text).toContain(TEXT.heroText)
  })
})
