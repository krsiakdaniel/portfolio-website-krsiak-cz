import { Browser, BrowserContext, expect, Page, test } from '@playwright/test'

import { setupBrowser, setupPage, teardownContext } from '@/__tests__/playwright/lib/utils/helpers/setup'

let browser: Browser
let context: BrowserContext
let page: Page

// Setup browser and context before all tests
test.beforeAll(async () => {
  const setup = await setupBrowser()
  browser = setup.browser
  context = setup.context
  page = setup.page
})

// Close the browser after all tests
test.afterAll(async () => {
  await browser.close()
})

// Setup a new context and page before each test
test.beforeEach(async () => {
  context = await browser.newContext()
  page = await setupPage(context, '/testimonials')
})

// Close the context after each test
test.afterEach(async () => {
  await teardownContext(context)
})

// TODO: add later when BLOG in MDX is implemented
test.describe('Baptism Testimony - Verse', () => {
  test.skip('should render the bible verse link correctly', async () => {
    const verseLink = page.getByTestId('bible-verse-link')
    expect(await verseLink.isVisible()).toBe(true)
    expect(await verseLink.getAttribute('href')).toBe('https://www.bible.com/bible/116/1PE.3.21.NLT')
  })
})

test.describe('Baptism Testimony - Photo', () => {
  test.skip('should render the baptism testimony photo correctly', async () => {
    const baptismImage = page.getByTestId('baptism-testimony-image')
    expect(await baptismImage.isVisible()).toBe(true)
    expect(await baptismImage.getAttribute('src')).toContain('krsiak-daniel-baptism-testimony')
  })
})
