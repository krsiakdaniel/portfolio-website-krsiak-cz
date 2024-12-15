import { getDataTestId } from '@/__tests__/playwright/utils/getDataTestId'
import { PAGES_URL } from '@/utils/constants'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import { expect, test } from '@playwright/test'

test.describe('Links', () => {
  test('should navigate correctly', async ({ page }) => {
    await test.step('Go to Cryptomania subpage', async () => {
      await page.goto(PAGES_URL.personal.cryptoMania)
    })

    const breadcrumbs = page.locator(getDataTestId(DATA_TEST_IDS.breadcrumbs))

    await test.step('Check the Home link', async () => {
      const homeLink = breadcrumbs.locator('a[href="/"]')
      expect(await homeLink.count()).toBe(1)
      expect(await homeLink.getAttribute('href')).toBe('/')
    })

    await test.step('Check the Personal Projects link', async () => {
      const personalProjectsLink = breadcrumbs.locator(`a[href="${PAGES_URL.personal.mainUrl}"]`)
      expect(await personalProjectsLink.count()).toBe(1)
      expect(await personalProjectsLink.getAttribute('href')).toBe(PAGES_URL.personal.mainUrl)
    })

    await test.step('Check the Cryptomania link', async () => {
      const cryptomaniaLink = breadcrumbs.locator(`a[href="${PAGES_URL.personal.cryptoMania}"]`)
      expect(await cryptomaniaLink.count()).toBe(1)
      expect(await cryptomaniaLink.getAttribute('href')).toBe(PAGES_URL.personal.cryptoMania)
    })
  })
})
