import { expect, test } from '@playwright/test'

test.describe('Project Work - Smartsupp - Web', () => {
  test('Web - Link', async ({ page }) => {
    await test.step('Go to Web page', async () => {
      await page.goto('/work-experience/smartsupp-web')
    })

    await test.step('Check Web Website link', async () => {
      const link = page.getByRole('link', { name: 'Website' })
      const href = await link.getAttribute('href')
      const expectedUrl = 'https://www.smartsupp.com/'
      expect(href).toBe(expectedUrl)
    })
  })
})
