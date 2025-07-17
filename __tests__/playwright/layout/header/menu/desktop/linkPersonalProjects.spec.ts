import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test.describe('Header - Desktop Menu - Personal Projects Link', () => {
  test('should navigate to Personal Projects page correctly', async ({ page }) => {
    // Set viewport to desktop size to ensure desktop menu is visible (lg breakpoint = 1024px)
    await page.setViewportSize({ width: 1280, height: 720 })

    await test.step('Go to home page', async () => {
      await page.goto('/')
    })

    await test.step('Check if the link is visible', async () => {
      const isLinkVisible = await page.isVisible(
        getDataTestId(DATA_TEST_IDS.menu.desktop.links.personalProjects),
      )
      expect(isLinkVisible).toBe(true)
    })

    await test.step('Check if the link goes to the personal projects page when clicked', async () => {
      // Wait for the element to be ready and click it
      await page.waitForSelector(getDataTestId(DATA_TEST_IDS.menu.desktop.links.personalProjects))
      await page.click(getDataTestId(DATA_TEST_IDS.menu.desktop.links.personalProjects))

      // Wait for navigation to complete
      await page.waitForURL('**/personal-projects')
      expect(page.url()).toBe('http://localhost:3000/personal-projects')
    })

    await test.step('Check if the H1 heading on the final page has the text "Personal Projects"', async () => {
      const heading = await page.textContent('h1')
      expect(heading).toBe('🚀Personal Projects')
    })
  })
})
