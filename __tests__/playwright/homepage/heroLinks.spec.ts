import { checkLink } from '@/__tests__/playwright/utils/checkLink'
import { CONTACT, EXTERNAL_URL } from '@/utils/constants'
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
    await checkLink(page, 'hero-link-linkedin', EXTERNAL_URL.linkedin)
  })

  test('should have the correct GitHub link', async () => {
    await checkLink(page, 'hero-link-github', EXTERNAL_URL.github)
  })

  test('should have the correct Resume link', async () => {
    await checkLink(page, 'hero-link-resume', EXTERNAL_URL.resume)
  })

  test('should have the correct Email link', async () => {
    await checkLink(page, 'hero-link-email', CONTACT.email.href)
  })

  test('should have the correct Phone link', async () => {
    await checkLink(page, 'hero-link-phone', CONTACT.phone.href)
  })
})
