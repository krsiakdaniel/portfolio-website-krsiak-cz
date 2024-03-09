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

const projectsWorkTests = [
  {
    name: 'Smartsupp Dashboard',
    projectPage: projectPages.work.smartsupp.dashboard,
    projectID: projectIDs.work.smartsupp.dashboard,
  },
  { name: 'Komercni banka', projectPage: projectPages.work.komercniBanka, projectID: projectIDs.work.komercniBanka },
  { name: 'Smartsupp Web', projectPage: projectPages.work.smartsupp.web, projectID: projectIDs.work.smartsupp.web },
  { name: 'Smartsupp Help', projectPage: projectPages.work.smartsupp.help, projectID: projectIDs.work.smartsupp.help },
  { name: 'Moravia', projectPage: projectPages.work.moravia, projectID: projectIDs.work.moravia },
]

test.describe('Projects Work - Page links', () => {
  projectsWorkTests.forEach(({ name, projectPage, projectID }) => {
    test(`Project - ${name}`, async () => {
      await testProjectLink(page, projectPage, projectID)
    })
  })
})
