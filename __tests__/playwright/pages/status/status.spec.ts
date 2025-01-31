import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

const STATUS_BADGES_DIV_SELECTOR = `div[data-testid=${DATA_TEST_IDS.footer.statusBadges}] img`
const EXPECTED_NUMBER_OF_BADGES = 10

test.describe('Status', () => {
  test('Page title is correct', async ({ page }) => {
    await test.step('Go to status', async () => {
      await page.goto('/status')
    })

    await test.step('Check if the page title is correct', async () => {
      const title = await page.textContent('h1')
      expect(title).toBe('🚦Status')
    })
  })

  test('All status badges are present', async ({ page }) => {
    await test.step('Go to status', async () => {
      await page.goto('/status')
    })

    await test.step('Check if all status badges are present', async () => {
      const statusBadges = await page.$$eval(STATUS_BADGES_DIV_SELECTOR, (badges) => badges.length)
      expect(statusBadges).toBe(EXPECTED_NUMBER_OF_BADGES)
    })
  })

  test('Uptime Monitor - Link is correct', async ({ page }) => {
    await test.step('Go to status', async () => {
      await page.goto('/status')
    })

    await test.step(`Check if the external link for 'Uptime Monitor' is correct`, async () => {
      const uptimeMonitor = await page.$('[data-testid="uptime-monitor"]')
      const href = await uptimeMonitor?.getAttribute('href')
      expect(href).toContain('https://status.krsiak.cz')
    })
  })
})
