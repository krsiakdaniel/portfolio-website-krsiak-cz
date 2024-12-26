import { expect, test } from '@playwright/test'

import { getDataTestId } from '@/__tests__/playwright/utils/helpers/getDataTestId'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'

test.describe('Links', () => {
  test('should navigate correctly', async ({ page }) => {
    await test.step('Go to Portfolio Website subpage', async () => {
      await page.goto('personal-projects/krsiak')
    })

    const breadcrumbs = page.locator(getDataTestId(DATA_TEST_IDS.breadcrumbs))

    await test.step('Check the Home link', async () => {
      const homeLink = breadcrumbs.locator('a[href="/"]')
      expect(await homeLink.count()).toBe(1)
      expect(await homeLink.getAttribute('href')).toBe('/')
    })

    await test.step('Check the Personal Projects link', async () => {
      const personalProjectsLink = breadcrumbs.locator('a[href="/personal-projects"]')
      expect(await personalProjectsLink.count()).toBe(1)
      expect(await personalProjectsLink.getAttribute('href')).toBe('/personal-projects')
    })

    await test.step('Check the Portfolio Website link', async () => {
      const portfolioWebsiteLink = breadcrumbs.locator('a[href="/personal-projects/krsiak"]')
      expect(await portfolioWebsiteLink.count()).toBe(1)
      expect(await portfolioWebsiteLink.getAttribute('href')).toBe('/personal-projects/krsiak')
    })
  })
})
