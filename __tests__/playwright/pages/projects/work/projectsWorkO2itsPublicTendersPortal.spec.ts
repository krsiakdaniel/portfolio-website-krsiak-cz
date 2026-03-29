import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import {
  EXTERNAL_URL,
  PAGES_URL,
  PROJECTS_WORK_URLS,
} from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Project Work - O2 ITS - Public Tenders Portal', () => {
  test('Links', async ({ page }) => {
    await page.goto(PAGES_URL.workO2itsPublicTendersPortal)

    await test.step('Alert LinkedIn link', async () => {
      const alertLink = page.getByTestId(DATA_TEST_IDS.alert.alertLinkLinkedIn)
      await expect(alertLink).toHaveAttribute('href', EXTERNAL_URL.linkedIn)
    })

    await test.step('Website link', async () => {
      const link = page.getByRole('link', { name: 'Website', exact: true })
      await expect(link).toHaveAttribute('href', PROJECTS_WORK_URLS.workO2itsExternal)
    })
  })
})
