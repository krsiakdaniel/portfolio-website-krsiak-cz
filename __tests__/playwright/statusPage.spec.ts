import { TEXT } from '@/localization/english'
import { expect, test } from '@playwright/test'

const STATUS_BADGE_SELECTOR = 'img'

// TODO: rethink this, does not make sense to use constants in tests for TEXT, check all tests in separate PR
// FIXME: if user makes mistake in localization, that is also in test and shows true but is error in reality
test.describe('Status Page', () => {
  test('Page title and status badges', async ({ page }) => {
    await test.step('Go to status page', async () => {
      await page.goto('/status-page')
    })

    await test.step('Check if the page title is correct', async () => {
      const title = await page.textContent('h1')
      expect(title).toBe(TEXT.statusPage)
    })

    await test.step('Check if all status badges are present', async () => {
      const statusBadges = await page.$$eval(STATUS_BADGE_SELECTOR, (badges) => badges.length)
      expect(statusBadges).toBe(7)
    })
  })
})
