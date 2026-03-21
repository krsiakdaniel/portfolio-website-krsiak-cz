import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EXTERNAL_URL, PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

const EXPECTED_NUMBER_OF_BADGES = 9

test.describe('Status', () => {
  test('Page title is correct', async ({ page }) => {
    await page.goto(PAGES_URL.status)
    await expect(page.locator('h1')).toContainText('Status')
  })

  test('All status badges are present', async ({ page }) => {
    await page.goto(PAGES_URL.status)
    const badges = page.getByTestId(DATA_TEST_IDS.footer.statusBadges).locator('img')
    await expect(badges).toHaveCount(EXPECTED_NUMBER_OF_BADGES)
  })

  test('Uptime Monitor - Link is correct', async ({ page }) => {
    await page.goto(PAGES_URL.status)
    const uptimeLink = page.getByTestId(DATA_TEST_IDS.externalLinks.uptimeMonitorStatusExternal)
    await expect(uptimeLink).toHaveAttribute('href', EXTERNAL_URL.uptimeMonitorStatus)
  })
})
