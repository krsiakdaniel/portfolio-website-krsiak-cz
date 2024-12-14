import { getDataTestId } from '@/__tests__/playwright/utils/getDataTestId'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import { expect, test } from '@playwright/test'

test.describe('Desktop Menu', () => {
  test('Link - Personal Projects', async ({ page }) => {
    await test.step('Go to home page', async () => {
      await page.goto('/')
    })

    await test.step('Check if the link is visible', async () => {
      const isLinkVisible = await page.isVisible(getDataTestId(DATA_TEST_IDS.menu.desktop.links.personalProjects))
      expect(isLinkVisible).toBe(true)
    })

    await test.step('Check if the link redirects to the personal projects page when clicked', async () => {
      await page.click(getDataTestId(DATA_TEST_IDS.menu.desktop.links.personalProjects))
      await page.waitForLoadState('networkidle')
      expect(page.url()).toBe('http://localhost:3000/personal-projects')
    })

    await test.step('Check if the H1 heading on the final page has the text "Personal Projects"', async () => {
      const heading = await page.textContent('h1')
      expect(heading).toBe('🚀 Personal Projects')
    })
  })
})
