import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

// Define data test IDs for GitHub and LinkedIn links
const dataTestIdGitHub = `desktop-${DATA_TEST_IDS.menu.socialLinks.gitHubRepo}`
const dataTestIdLinkedIn = `desktop-${DATA_TEST_IDS.menu.socialLinks.linkedInProfile}`

test.describe('Header - Desktop Menu - Social Links', () => {
  test('should render GitHub link correctly', async ({ page }) => {
    // Set viewport to desktop size to ensure desktop menu is visible (lg breakpoint = 1024px)
    await page.setViewportSize({ width: 1280, height: 720 })

    // Navigate to the home page
    await test.step('Go to home page', async () => {
      await page.goto('/')
    })

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
    // Set viewport to desktop size to ensure desktop menu is visible (lg breakpoint = 1024px)
    await page.setViewportSize({ width: 1280, height: 720 })

    // Navigate to the home page
    await test.step('Go to home page', async () => {
      await page.goto('/')
    })

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
