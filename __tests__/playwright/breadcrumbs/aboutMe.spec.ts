import { expect, test } from '@playwright/test'

test.describe('Links', () => {
  test('should navigate correctly', async ({ page }) => {
    await test.step('Go to About Me page', async () => {
      await page.goto('http://localhost:3000/about-me')
    })

    const breadcrumbs = page.locator('[data-testid="breadcrumbs"]')

    await test.step('Check the Home link', async () => {
      const homeLink = breadcrumbs.locator('a[href="/"]')
      expect(await homeLink.count()).toBe(1)
      expect(await homeLink.getAttribute('href')).toBe('/')
    })

    await test.step('Check the About Me link', async () => {
      const aboutLink = breadcrumbs.locator(`a[href="/about-me"]`)
      expect(await aboutLink.count()).toBe(1)
      expect(await aboutLink.getAttribute('href')).toBe('/about-me')
    })
  })
})
