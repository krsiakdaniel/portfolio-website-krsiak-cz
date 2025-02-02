import { expect, test } from '@playwright/test'

test.describe('Project - Groupon', () => {
  test('Link', async ({ page }) => {
    // Navigate to the Groupon project page
    await test.step('Go to page', async () => {
      await page.goto('/work-experience/groupon')
    })

    // Check the Website link
    await test.step('Check Website link', async () => {
      const link = page.getByRole('link', { name: 'Website' })
      const href = await link.getAttribute('href')
      const expectedUrl = 'https://www.groupon.com/'
      expect(href).toBe(expectedUrl)
    })
  })
})
