import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EXTERNAL_URL, PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Project - Korean Easy', () => {
  test('Links', async ({ page }) => {
    await page.goto(PAGES_URL.personalKoreanEasy)

    await test.step('Alert LinkedIn link', async () => {
      const alertLink = page.getByTestId(DATA_TEST_IDS.alert.alertLinkLinkedIn)
      await expect(alertLink).toHaveAttribute('href', EXTERNAL_URL.linkedIn)
    })
  })
})
