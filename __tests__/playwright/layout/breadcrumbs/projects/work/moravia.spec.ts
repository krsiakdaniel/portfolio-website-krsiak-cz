import { expect, test } from '@playwright/test'

import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'
import { getBreadcrumbsLocator } from '@/__tests__/playwright/lib/utils/helpers/breadcrumbsHelper'

test.describe('Links', () => {
  test('should navigate correctly', async ({ page }) => {
    await test.step('Go to Moravia subpage', async () => {
      await page.goto('/work-experience/moravia')
    })

    const breadcrumbs = getBreadcrumbsLocator(page)

    await test.step('Check the Home link', async () => {
      const homeLink = breadcrumbs.locator('a[href="/"]')
      await expect(homeLink).toHaveCount(1)
      await expect(homeLink).toHaveAttribute('href', PAGES_URL.home)
    })

    await test.step('Check the Work Experience link', async () => {
      const workExperienceLink = breadcrumbs.locator('a[href="/work-experience"]')
      await expect(workExperienceLink).toHaveCount(1)
      await expect(workExperienceLink).toHaveAttribute('href', PAGES_URL.workExperience)
    })

    await test.step('Check the Moravia link', async () => {
      const moraviaLink = breadcrumbs.locator('a[href="/work-experience/moravia"]')
      await expect(moraviaLink).toHaveCount(1)
      await expect(moraviaLink).toHaveAttribute('href', PAGES_URL.workMoravia)
    })
  })
})
