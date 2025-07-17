import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test.describe('Header - Desktop Menu - Who I Am Link', () => {
  test('should navigate to Who I Am page correctly', async ({ page }) => {
    // Set viewport to desktop size to ensure desktop menu is visible (lg breakpoint = 1024px)
    await page.setViewportSize({ width: 1280, height: 720 })

    await test.step('Go to home page', async () => {
      await page.goto('/')
    })

    const isLinkVisible = await page.isVisible(
      getDataTestId(DATA_TEST_IDS.menu.desktop.links.whoIAm),
    )
    expect(isLinkVisible).toBe(true)

    await test.step('Check if the link goes to the who I am page when clicked', async () => {
      // Wait for the element to be ready and click it
      await page.waitForSelector(getDataTestId(DATA_TEST_IDS.menu.desktop.links.whoIAm))
      await page.click(getDataTestId(DATA_TEST_IDS.menu.desktop.links.whoIAm))

      // Wait for navigation to complete
      await page.waitForURL('**/who-i-am')
      expect(page.url()).toBe('http://localhost:3000/who-i-am')
    })

    await test.step('Check if the H1 heading on the final page has the text "Who I Am"', async () => {
      const heading = await page.textContent('h1')
      expect(heading).toBe('👋Who I\u00A0Am')
    })
  })
})
