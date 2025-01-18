import { expect, test } from '@playwright/test'

test.describe('Project Work - Smartsupp - Dashboard', () => {
  test('Dashboard - Link', async ({ page }) => {
    await test.step('Go to Dashboard page', async () => {
      await page.goto('/work-experience/smartsupp-dashboard')
    })

    await test.step('Check Dashboard Website link', async () => {
      const link = page.getByRole('link', { name: 'Website' })
      const href = await link.getAttribute('href')
      const expectedUrl = 'https://www.smartsupp.com/live-chat-for-customer-care-teams/'
      expect(href).toBe(expectedUrl)
    })
  })
})
