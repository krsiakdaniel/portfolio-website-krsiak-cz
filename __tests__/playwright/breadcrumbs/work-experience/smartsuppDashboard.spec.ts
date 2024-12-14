import { getDataTestId } from '@/__tests__/playwright/utils/getDataTestId'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import { expect, test } from '@playwright/test'

test.describe('Links', () => {
  test('should navigate correctly', async ({ page }) => {
    await test.step('Go to Smartsupp dashboard subpage', async () => {
      await page.goto('http://localhost:3000/work-experience/smartsupp-dashboard')
    })

    const breadcrumbs = page.locator(getDataTestId(DATA_TEST_IDS.breadcrumbs))

    await test.step('Check the Home link', async () => {
      const homeLink = breadcrumbs.locator('a[href="/"]')
      expect(await homeLink.count()).toBe(1)
      expect(await homeLink.getAttribute('href')).toBe('/')
    })

    await test.step('Check the Work Experience link', async () => {
      const workExperienceLink = breadcrumbs.locator(`a[href="/work-experience"]`)
      expect(await workExperienceLink.count()).toBe(1)
      expect(await workExperienceLink.getAttribute('href')).toBe('/work-experience')
    })

    await test.step('Check the Smartsupp Dashboard link', async () => {
      const smartsuppDashboardLink = breadcrumbs.locator(`a[href="/work-experience/smartsupp-dashboard"]`)
      expect(await smartsuppDashboardLink.count()).toBe(1)
      expect(await smartsuppDashboardLink.getAttribute('href')).toBe('/work-experience/smartsupp-dashboard')
    })
  })
})
