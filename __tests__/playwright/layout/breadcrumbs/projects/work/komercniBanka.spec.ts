import { expect, test } from '@playwright/test'

import { getBreadcrumbsLocator } from '@/__tests__/playwright/lib/utils/helpers/breadcrumbsHelper'

test.describe('Links', () => {
  test('should navigate correctly', async ({ page }) => {
    await test.step('Go to Komercni Banka subpage', async () => {
      await page.goto('/work-experience/komercni-banka')
    })

    const breadcrumbs = getBreadcrumbsLocator(page)

    await test.step('Check the Home link', async () => {
      const homeLink = breadcrumbs.locator('a[href="/"]')
      expect(await homeLink.count()).toBe(1)
      expect(await homeLink.getAttribute('href')).toBe('/')
    })

    await test.step('Check the Work Experience link', async () => {
      const workExperienceLink = breadcrumbs.locator('a[href="/work-experience"]')
      expect(await workExperienceLink.count()).toBe(1)
      expect(await workExperienceLink.getAttribute('href')).toBe('/work-experience')
    })

    await test.step('Check the Komercni Banka link', async () => {
      const komercniBankaLink = breadcrumbs.locator('a[href="/work-experience/komercni-banka"]')
      expect(await komercniBankaLink.count()).toBe(1)
      expect(await komercniBankaLink.getAttribute('href')).toBe('/work-experience/komercni-banka')
    })
  })
})
