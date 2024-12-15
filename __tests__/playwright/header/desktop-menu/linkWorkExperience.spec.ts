import { getDataTestId } from '@/__tests__/playwright/utils/getDataTestId'
import { TEXT } from '@/localization/texts_en'
import { PAGES_URL } from '@/utils/constants'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import { expect, test } from '@playwright/test'

test.describe('Header - Desktop Menu - Work Experience Link', () => {
  test('should navigate to Work Experience page correctly', async ({ page }) => {
    await test.step('Go to home page', async () => {
      await page.goto(PAGES_URL.home)
    })

    const isLinkVisible = await page.isVisible(getDataTestId(DATA_TEST_IDS.menu.desktop.links.workExperience))
    expect(isLinkVisible).toBe(true)

    await test.step('Check if the link redirects to the work experience page when clicked', async () => {
      await page.click(getDataTestId(DATA_TEST_IDS.menu.desktop.links.workExperience))
      await page.waitForLoadState('networkidle')
      expect(page.url()).toBe('http://localhost:3000/work-experience')
    })

    await test.step('Check if the H1 heading on the final page has the text "Work Experience"', async () => {
      const heading = await page.textContent('h1')
      expect(heading).toBe(TEXT.workExperience)
    })
  })
})
