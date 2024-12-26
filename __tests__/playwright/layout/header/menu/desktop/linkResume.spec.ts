import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test.describe('Header - Desktop Menu - Resume Link', () => {
  test('should navigate to Resume page correctly', async ({ page }) => {
    await test.step('Go to home page', async () => {
      await page.goto('/')
    })

    const isLinkVisible = await page.isVisible(getDataTestId(DATA_TEST_IDS.menu.desktop.links.resume))
    expect(isLinkVisible).toBe(true)

    await test.step('Check if the link redirects to the resume page when clicked', async () => {
      await page.click(getDataTestId(DATA_TEST_IDS.menu.desktop.links.resume))
      await page.waitForLoadState('networkidle')
      expect(page.url()).toBe('http://localhost:3000/resume')
    })

    await test.step('Check if the H1 heading on the final page has the text "Resume"', async () => {
      const heading = await page.textContent('h1')
      expect(heading).toBe('📝 Resume')
    })
  })
})
