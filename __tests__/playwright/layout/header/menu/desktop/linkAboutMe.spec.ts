import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test.describe('Header - Desktop Menu - About Me Link', () => {
  test('should navigate to About Me page correctly', async ({ page }) => {
    await test.step('Go to home page', async () => {
      await page.goto('/')
    })

    const isLinkVisible = await page.isVisible(getDataTestId(DATA_TEST_IDS.menu.desktop.links.aboutMe))
    expect(isLinkVisible).toBe(true)

    await test.step('Check if the link redirects to the about me page when clicked', async () => {
      await page.click(getDataTestId(DATA_TEST_IDS.menu.desktop.links.aboutMe))
      await page.waitForLoadState('networkidle')
      expect(page.url()).toBe('http://localhost:3000/about-me')
    })

    await test.step('Check if the H1 heading on the final page has the text "About Me"', async () => {
      const heading = await page.textContent('h1')
      expect(heading).toBe('👨‍💻 About Me')
    })
  })
})
