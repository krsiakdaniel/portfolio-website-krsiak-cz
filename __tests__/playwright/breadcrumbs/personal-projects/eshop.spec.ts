import { expect, test } from '@playwright/test'

test.describe('Links', () => {
  test('should navigate correctly', async ({ page }) => {
    await test.step('Go to Eshop subpage', async () => {
      await page.goto('http://localhost:3000/personal-projects/eshop')
    })

    const breadcrumbs = page.locator('[data-testid="breadcrumbs"]')

    await test.step('Check the Home link', async () => {
      const homeLink = breadcrumbs.locator('a[href="/"]')
      expect(await homeLink.count()).toBe(1)
      expect(await homeLink.getAttribute('href')).toBe('/')
    })

    await test.step('Check the Personal Projects link', async () => {
      const personalProjectsLink = breadcrumbs.locator(`a[href="/personal-projects"]`)
      expect(await personalProjectsLink.count()).toBe(1)
      expect(await personalProjectsLink.getAttribute('href')).toBe('/personal-projects')
    })

    await test.step('Check the Eshop link', async () => {
      const eshopLink = breadcrumbs.locator(`a[href="/personal-projects/eshop"]`)
      expect(await eshopLink.count()).toBe(1)
      expect(await eshopLink.getAttribute('href')).toBe('/personal-projects/eshop')
    })
  })
})
