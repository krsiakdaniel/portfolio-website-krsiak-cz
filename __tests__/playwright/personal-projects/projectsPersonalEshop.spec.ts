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

test.describe('Project - Eshop', () => {
  test('Links', async () => {
    await page.goto('/personal-projects/eshop')

    const link = page.getByRole('link', { name: 'Website →' })
    const href = await link.getAttribute('href')

    const expectedUrl = 'https://ecommerce-vue-nuxt.onrender.com/'
    expect(href).toBe(expectedUrl)

    const linkGitHub = page.getByRole('link', { name: 'GitHub repository →' })
    const hrefGitHub = await linkGitHub.getAttribute('href')

    const expectedUrlGitHub = 'https://github.com/krsiakdaniel/ecommerce-website-vuejs-nuxtjs-vuetify'
    expect(hrefGitHub).toBe(expectedUrlGitHub)
  })
})
