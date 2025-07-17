import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test.describe('Header - Desktop Menu - Blog Link', () => {
  test('should navigate to Blog page correctly', async ({ page }) => {
    // Set viewport to desktop size to ensure desktop menu is visible (lg breakpoint = 1024px)
    await page.setViewportSize({ width: 1280, height: 720 })

    await test.step('Go to home page', async () => {
      await page.goto('/')
    })

    const isLinkVisible = await page.isVisible(getDataTestId(DATA_TEST_IDS.menu.desktop.links.blog))
    expect(isLinkVisible).toBe(true)

    await test.step('Check if the link goes to the blog page when clicked', async () => {
      // Wait for the element to be ready and click it
      await page.waitForSelector(getDataTestId(DATA_TEST_IDS.menu.desktop.links.blog))
      await page.click(getDataTestId(DATA_TEST_IDS.menu.desktop.links.blog))

      // Wait for navigation to complete
      await page.waitForURL('**/blog')
      expect(page.url()).toBe('http://localhost:3000/blog')
    })

    await test.step('Check if the H1 heading on the final page has the text "Blog"', async () => {
      const heading = await page.textContent('h1')
      expect(heading).toBe('✍️Blog')
    })
  })
})
