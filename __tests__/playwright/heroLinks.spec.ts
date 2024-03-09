import { EMAIL_HREF, LINK_GITHUB, LINK_LINKEDIN, LINK_RESUME, PHONE_HREF } from '@/utils/constants'
import { checkLink } from '@/utils/testing-playwright/checkLink'
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
    await checkLink(page, 'hero-link-linkedin', LINK_LINKEDIN)
  })

  test('should have the correct GitHub link', async () => {
    await checkLink(page, 'hero-link-github', LINK_GITHUB)
  })

  test('should have the correct Resume link', async () => {
    await checkLink(page, 'hero-link-resume', LINK_RESUME)
  })

  test('should have the correct Email link', async () => {
    await checkLink(page, 'hero-link-email', EMAIL_HREF)
  })

  test('should have the correct Phone link', async () => {
    await checkLink(page, 'hero-link-phone', PHONE_HREF)
  })
})
