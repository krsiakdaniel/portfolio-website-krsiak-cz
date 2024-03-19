import { expect, test } from '@playwright/test'

test.describe('Links', () => {
  test('should navigate correctly', async ({ page }) => {
    await test.step('Go to Smartsupp HELP subpage', async () => {
      await page.goto('http://localhost:3000/work-experience/smartsupp-help')
    })

    const breadcrumbs = page.locator('[data-testid="breadcrumbs"]')

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

    await test.step('Check the Smartsupp Help link', async () => {
      const smartsuppHelpLink = breadcrumbs.locator(`a[href="/work-experience/smartsupp-help"]`)
      expect(await smartsuppHelpLink.count()).toBe(1)
      expect(await smartsuppHelpLink.getAttribute('href')).toBe('/work-experience/smartsupp-help')
    })
  })
})
