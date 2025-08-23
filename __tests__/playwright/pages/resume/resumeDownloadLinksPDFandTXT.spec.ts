import { Browser, BrowserContext, expect, Page, test } from '@playwright/test'

import {
  setupBrowser,
  setupPage,
  teardownContext,
} from '@/__tests__/playwright/lib/utils/helpers/setup'

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
  page = await setupPage(context, '/resume')
})

// Close the context after each test
test.afterEach(async () => {
  await teardownContext(context)
})

test.describe('Resume - Download links - PDF Format', () => {
  test('should render - image - Download Resume PDF link correctly', async () => {
    const linkImageDownloadResumePDF = page.getByTestId('link-image-download-resume-pdf')
    expect(await linkImageDownloadResumePDF.isVisible()).toBe(true)
    expect(await linkImageDownloadResumePDF.getAttribute('href')).toBe(
      'https://drive.google.com/file/d/1oRhPxdLv0fKnDOet2O5yEf_SSI_w3xQu/view',
    )
  })

  test('should render - button - Download Resume PDF link correctly', async () => {
    const linkButtonDownloadResumePDF = page.getByTestId('link-button-download-resume-pdf')
    expect(await linkButtonDownloadResumePDF.isVisible()).toBe(true)
    expect(await linkButtonDownloadResumePDF.getAttribute('href')).toBe(
      'https://drive.google.com/file/d/1oRhPxdLv0fKnDOet2O5yEf_SSI_w3xQu/view',
    )
  })
})

test.describe('Resume - Download links - DOCX Format', () => {
  test('should render - image - Download Resume DOCX link correctly', async () => {
    const linkImageDownloadResumeDOCX = page.getByTestId('link-image-download-resume-docx')
    expect(await linkImageDownloadResumeDOCX.isVisible()).toBe(true)
    expect(await linkImageDownloadResumeDOCX.getAttribute('href')).toBe(
      'https://docs.google.com/document/d/1n9i3mHUMvgpDzWZ8DYKGIi48FAV9rrTH/edit?usp=sharing&ouid=103683273055670815184&rtpof=true&sd=true',
    )
  })

  test('should render - button - Download Resume DOCX link correctly', async () => {
    const linkButtonDownloadResumeDOCX = page.getByTestId('link-button-download-resume-docx')
    expect(await linkButtonDownloadResumeDOCX.isVisible()).toBe(true)
    expect(await linkButtonDownloadResumeDOCX.getAttribute('href')).toBe(
      'https://docs.google.com/document/d/1n9i3mHUMvgpDzWZ8DYKGIi48FAV9rrTH/edit?usp=sharing&ouid=103683273055670815184&rtpof=true&sd=true',
    )
  })
})
