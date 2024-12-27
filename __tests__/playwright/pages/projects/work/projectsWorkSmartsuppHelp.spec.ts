import { expect, test } from '@playwright/test'

test.describe('Project Work - Smartsupp - HELP', () => {
  test('HELP - Link', async ({ page }) => {
    await test.step('Go to HELP page', async () => {
      await page.goto('/work-experience/smartsupp-help')
    })

    await test.step('Check HELP Website link', async () => {
      const link = page.getByRole('link', { name: 'Website →' })
      const href = await link.getAttribute('href')
      const expectedUrl = 'https://help.smartsupp.com/'
      expect(href).toBe(expectedUrl)
    })
  })
})
