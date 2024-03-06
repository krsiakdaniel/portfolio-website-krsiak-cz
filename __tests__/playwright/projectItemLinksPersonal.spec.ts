import { projectIDs, projectPages } from '@/utils/constants'
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
  await page.goto('http://localhost:3000') // replace with app's url
})

test.afterEach(async () => {
  await context.close()
})

test.describe('Projects Personal - Page links', () => {
  test('project - krsiak - should contain "Project details", project URL, and the same URL should be on the next page', async () => {
    const pageLink = `/${projectPages.personal.krsiak}`

    const projectDetailsLink = page.getByTestId(projectIDs.personal.krsiak)

    const linkText = await projectDetailsLink.innerText()
    expect(linkText).toContain('Project details')

    const linkUrl = await projectDetailsLink.getAttribute('href')
    expect(linkUrl).toBe(pageLink)

    await projectDetailsLink.click()

    expect(page.url()).toContain(pageLink)
  })

  test('project - cryptomania - should contain "Project details", project URL, and the same URL should be on the next page', async () => {
    const pageLink = `/${projectPages.personal.cryptoMania}`

    const projectDetailsLink = page.getByTestId(projectIDs.personal.cryptoMania)

    const linkText = await projectDetailsLink.innerText()
    expect(linkText).toContain('Project details')

    const linkUrl = await projectDetailsLink.getAttribute('href')
    expect(linkUrl).toBe(pageLink)

    await projectDetailsLink.click()

    expect(page.url()).toContain(pageLink)
  })

  test('project - eshop - should contain "Project details", project URL, and the same URL should be on the next page', async () => {
    const pageLink = `/${projectPages.personal.eshop}`

    const projectDetailsLink = page.getByTestId(projectIDs.personal.eshop)

    const linkText = await projectDetailsLink.innerText()
    expect(linkText).toContain('Project details')

    const linkUrl = await projectDetailsLink.getAttribute('href')
    expect(linkUrl).toBe(pageLink)

    await projectDetailsLink.click()

    expect(page.url()).toContain(pageLink)
  })
})
