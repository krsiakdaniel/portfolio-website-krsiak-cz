import { expect, test } from '@playwright/test'

const STATUS_BADGE_SELECTOR = 'img'

test.describe('Status Page', () => {
  test('Page title and status badges', async ({ page }) => {
    await test.step('Go to status page', async () => {
      await page.goto('/status-page')
    })

    await test.step('Check if the page title is correct', async () => {
      const title = await page.textContent('h1')
      expect(title).toBe('🚦 Status Page')
    })

    await test.step('Check if all status badges are present', async () => {
      const statusBadges = await page.$$eval(STATUS_BADGE_SELECTOR, (badges) => badges.length)
      expect(statusBadges).toBe(7)
    })
  })
})
