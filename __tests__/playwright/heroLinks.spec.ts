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

const heroLinksTests = [
  { name: 'LinkedIn', id: 'hero-link-linkedin', link: LINK_LINKEDIN },
  { name: 'GitHub', id: 'hero-link-github', link: LINK_GITHUB },
  { name: 'Resume', id: 'hero-link-resume', link: LINK_RESUME },
  { name: 'Email', id: 'hero-link-email', link: EMAIL_HREF },
  { name: 'Phone', id: 'hero-link-phone', link: PHONE_HREF },
]

heroLinksTests.forEach(({ name, id, link }) => {
  test(`should have the correct ${name} link`, async () => {
    await checkLink(page, id, link)
  })
})
