import { expect, test } from '@playwright/test'

import { getDataTestId } from '@/__tests__/playwright/utils/helpers/getDataTestId'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'

test.describe('Links', () => {
  test('should navigate correctly', async ({ page }) => {
    await test.step('Go to About Me page', async () => {
      await page.goto(PAGES_URL.aboutMe)
    })

    const breadcrumbs = page.locator(getDataTestId(DATA_TEST_IDS.breadcrumbs))

    await test.step('Check the Home link', async () => {
      const homeLink = breadcrumbs.locator('a[href="/"]')
      expect(await homeLink.count()).toBe(1)
      expect(await homeLink.getAttribute('href')).toBe('/')
    })

    await test.step('Check the About Me link', async () => {
      const aboutLink = breadcrumbs.locator(`a[href="${PAGES_URL.aboutMe}"]`)
      expect(await aboutLink.count()).toBe(1)
      expect(await aboutLink.getAttribute('href')).toBe(PAGES_URL.aboutMe)
    })
  })
})
