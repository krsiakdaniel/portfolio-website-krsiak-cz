import { Browser, BrowserContext, Page, chromium, expect, test } from '@playwright/test'

import { EMAIL_HREF, LINK_GITHUB, LINK_LINKEDIN, LINK_RESUME, PHONE_HREF } from '@/utils/constants'

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
    const h1Text = await page.textContent('[data-testid="hero-heading"]')
    expect(h1Text).toContain('Daniel Krsiak')
    expect(h1Text).toContain('React Developer')
  })

  test('should render the paragraphs correctly', async () => {
    const paragraph1Text = await page.textContent('[data-testid="hero-paragraph-1"]')
    const paragraph2Text = await page.textContent('[data-testid="hero-paragraph-2"]')
    expect(paragraph1Text).toContain('Hi 👋 I am React Developer based in Brno, Czech Republic 🇨🇿')
    expect(paragraph2Text).toContain('I enjoy working with JavaScript, TypeScript, and React.')
  })
})

test.describe('Hero - Links', () => {
  test('should have the correct LinkedIn link', async () => {
    await page.goto('/')
    const linkedinLink = await page.getAttribute('[data-testid="hero-link-linkedin"]', 'href')
    expect(linkedinLink).toBe(LINK_LINKEDIN)
  })

  test('should have the correct GitHub link', async () => {
    await page.goto('/')
    const githubLink = await page.getAttribute('[data-testid="hero-link-github"]', 'href')
    expect(githubLink).toBe(LINK_GITHUB)
  })

  test('should have the correct Resume link', async () => {
    await page.goto('/')
    const resumeLink = await page.getAttribute('[data-testid="hero-link-resume"]', 'href')
    expect(resumeLink).toBe(LINK_RESUME)
  })
})

test.describe('Hero - Email & Phone', () => {
  test('should have the correct Email link', async () => {
    await page.goto('/')
    const emailLink = await page.getAttribute('[data-testid="hero-link-email"]', 'href')
    expect(emailLink).toBe(EMAIL_HREF)
  })

  test('should have the correct Phone link', async () => {
    await page.goto('/')
    const phoneLink = await page.getAttribute('[data-testid="hero-link-phone"]', 'href')
    expect(phoneLink).toBe(PHONE_HREF)
  })
})
