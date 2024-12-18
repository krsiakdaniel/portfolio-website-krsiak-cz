import { getDataTestId } from '@/__tests__/playwright/utils/helpers/getDataTestId'
import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
import { expect, test } from '@playwright/test'

test.describe('Header - Desktop Menu - About Me Link', () => {
  test('should navigate to About Me page correctly', async ({ page }) => {
    await test.step('Go to home page', async () => {
      await page.goto(PAGES_URL.home)
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
      expect(heading).toBe(TEXT.aboutMe)
    })
  })
})
