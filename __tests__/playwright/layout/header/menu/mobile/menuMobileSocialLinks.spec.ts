import { Browser, BrowserContext, chromium, expect, Page, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

// Define data test IDs for GitHub and LinkedIn links
const dataTestIdGitHub = `mobile-${DATA_TEST_IDS.menu.socialLinks.gitHubRepo}`
const dataTestIdLinkedIn = `mobile-${DATA_TEST_IDS.menu.socialLinks.linkedInProfile}`

// Define the variables for the browser, context, and page
let browser: Browser
let context: BrowserContext
let page: Page

test.beforeAll(async () => {
  browser = await chromium.launch()
  context = await browser.newContext({ viewport: { width: 500, height: 600 } })
  page = await context.newPage()
})

test.beforeEach(async () => {
  // Set the viewport size to a smaller size to simulate a mobile device
  await page.setViewportSize({ width: 500, height: 600 })

  // Go to the home page
  await test.step('Go to home page', async () => {
    await page.goto('/')
  })
})

test.afterAll(async () => {
  await browser.close()
})

test.describe('Header - Mobile Menu - Social Links', () => {
  test('should render GitHub link correctly', async ({ page }) => {
    await test.step('GitHub - link is visible and has correct URL', async () => {
      // Check if the GitHub link is visible
      const gitHubLink = await page.isVisible(getDataTestId(dataTestIdGitHub))
      expect(gitHubLink).toBe(true)

      // Check if the GitHub link has the correct href attribute
      const gitHubHref = await page.getAttribute(getDataTestId(dataTestIdGitHub), 'href')
      expect(gitHubHref).toBe('https://github.com/krsiakdaniel/portfolio-website-krsiak-cz')
    })
  })

  test('should render LinkedIn link correctly', async ({ page }) => {
    await test.step('LinkedIn - link is visible and has correct URL', async () => {
      // Check if the LinkedIn link is visible
      const linkedInLink = await page.isVisible(getDataTestId(dataTestIdLinkedIn))
      expect(linkedInLink).toBe(true)

      // Check if the LinkedIn link has the correct href attribute
      const linkedInHref = await page.getAttribute(getDataTestId(dataTestIdLinkedIn), 'href')
      expect(linkedInHref).toBe('https://www.linkedin.com/in/krsiakdaniel/')
    })
  })
})
