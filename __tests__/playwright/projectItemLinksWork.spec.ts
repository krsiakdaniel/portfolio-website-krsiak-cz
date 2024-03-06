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

test.describe('Projects Work - Page links - React', () => {
  test('Smartsupp Dashboard - should contain "Project details", project URL, and the same URL should be on the next page', async () => {
    const pageLink = `/${projectPages.work.smartsupp.dashboard}`

    const projectDetailsLink = page.getByTestId(projectIDs.work.smartsupp.dashboard)

    const linkText = await projectDetailsLink.innerText()
    expect(linkText).toContain('Project details')

    const linkUrl = await projectDetailsLink.getAttribute('href')
    expect(linkUrl).toBe(pageLink)

    await projectDetailsLink.click()

    expect(page.url()).toContain(pageLink)
  })

  test('Komercni banka - should contain "Project details", project URL, and the same URL should be on the next page', async () => {
    const pageLink = `/${projectPages.work.komercniBanka}`

    const projectDetailsLink = page.getByTestId(projectIDs.work.komercniBanka)

    const linkText = await projectDetailsLink.innerText()
    expect(linkText).toContain('Project details')

    const linkUrl = await projectDetailsLink.getAttribute('href')
    expect(linkUrl).toBe(pageLink)

    await projectDetailsLink.click()

    expect(page.url()).toContain(pageLink)
  })
})

test.describe('Projects Work - Page links - Frontend', () => {
  test('Smartsupp Web - should contain "Project details", project URL, and the same URL should be on the next page', async () => {
    const pageLink = `/${projectPages.work.smartsupp.web}`

    const projectDetailsLink = page.getByTestId(projectIDs.work.smartsupp.web)

    const linkText = await projectDetailsLink.innerText()
    expect(linkText).toContain('Project details')

    const linkUrl = await projectDetailsLink.getAttribute('href')
    expect(linkUrl).toBe(pageLink)

    await projectDetailsLink.click()

    expect(page.url()).toContain(pageLink)
  })
})

test.describe('Projects Work - Page links - WordPress', () => {
  test('Smartsupp Help - should contain "Project details", project URL, and the same URL should be on the next page', async () => {
    const pageLink = `/${projectPages.work.smartsupp.help}`

    const projectDetailsLink = page.getByTestId(projectIDs.work.smartsupp.help)

    const linkText = await projectDetailsLink.innerText()
    expect(linkText).toContain('Project details')

    const linkUrl = await projectDetailsLink.getAttribute('href')
    expect(linkUrl).toBe(pageLink)

    await projectDetailsLink.click()

    expect(page.url()).toContain(pageLink)
  })
})

test.describe('Projects Work - Page links - Localization', () => {
  test('Moravia - should contain "Project details", project URL, and the same URL should be on the next page', async () => {
    const pageLink = `/${projectPages.work.moravia}`

    const projectDetailsLink = page.getByTestId(projectIDs.work.moravia)

    const linkText = await projectDetailsLink.innerText()
    expect(linkText).toContain('Project details')

    const linkUrl = await projectDetailsLink.getAttribute('href')
    expect(linkUrl).toBe(pageLink)

    await projectDetailsLink.click()

    expect(page.url()).toContain(pageLink)
  })
})
