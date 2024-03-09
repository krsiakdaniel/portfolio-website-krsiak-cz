import { projectIDs, projectPages } from '@/utils/constants'
import { testProjectLink } from '@/utils/testing-playwright/testProjectLink'
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

const projectsPersonalTests = [
  { name: 'Krsiak', projectPage: projectPages.personal.krsiak, projectID: projectIDs.personal.krsiak },
  { name: 'Cryptomania', projectPage: projectPages.personal.cryptoMania, projectID: projectIDs.personal.cryptoMania },
  { name: 'Eshop', projectPage: projectPages.personal.eshop, projectID: projectIDs.personal.eshop },
]

test.describe('Projects Personal - Page links', () => {
  projectsPersonalTests.forEach(({ name, projectPage, projectID }) => {
    test(`Project - ${name}`, async () => {
      await testProjectLink(page, projectPage, projectID)
    })
  })
})
