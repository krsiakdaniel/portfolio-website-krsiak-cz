import { expect, test } from '@playwright/test'

test.describe('Links', () => {
  test('should navigate correctly', async ({ page }) => {
    await test.step('Go to Personal projects page', async () => {
      await page.goto('http://localhost:3000/personal-projects')
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
  })
})
