import { getDataTestId } from '@/__tests__/playwright/utils/helpers/getDataTestId'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
import { expect, test } from '@playwright/test'

test.describe('Links', () => {
  test('should navigate correctly', async ({ page }) => {
    await test.step('Go to Resume page', async () => {
      await page.goto(PAGES_URL.resume)
    })

    const breadcrumbs = page.locator(getDataTestId(DATA_TEST_IDS.breadcrumbs))

    await test.step('Check the Home link', async () => {
      const homeLink = breadcrumbs.locator('a[href="/"]')
      expect(await homeLink.count()).toBe(1)
      expect(await homeLink.getAttribute('href')).toBe('/')
    })

    await test.step('Check the Resume link', async () => {
      const aboutLink = breadcrumbs.locator(`a[href="${PAGES_URL.resume}"]`)
      expect(await aboutLink.count()).toBe(1)
      expect(await aboutLink.getAttribute('href')).toBe(PAGES_URL.resume)
    })
  })
})
