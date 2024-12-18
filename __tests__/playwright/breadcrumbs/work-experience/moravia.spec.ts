import { getDataTestId } from '@/__tests__/playwright/utils/getDataTestId'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
import { expect, test } from '@playwright/test'

test.describe('Links', () => {
  test('should navigate correctly', async ({ page }) => {
    await test.step('Go to Moravia subpage', async () => {
      await page.goto(PAGES_URL.work.moravia)
    })

    const breadcrumbs = page.locator(getDataTestId(DATA_TEST_IDS.breadcrumbs))

    await test.step('Check the Home link', async () => {
      const homeLink = breadcrumbs.locator('a[href="/"]')
      expect(await homeLink.count()).toBe(1)
      expect(await homeLink.getAttribute('href')).toBe('/')
    })

    await test.step('Check the Work Experience link', async () => {
      const workExperienceLink = breadcrumbs.locator(`a[href="${PAGES_URL.work.mainUrl}"]`)
      expect(await workExperienceLink.count()).toBe(1)
      expect(await workExperienceLink.getAttribute('href')).toBe(PAGES_URL.work.mainUrl)
    })

    await test.step('Check the Moravia link', async () => {
      const moraviaLink = breadcrumbs.locator(`a[href="${PAGES_URL.work.moravia}"]`)
      expect(await moraviaLink.count()).toBe(1)
      expect(await moraviaLink.getAttribute('href')).toBe(PAGES_URL.work.moravia)
    })
  })
})
