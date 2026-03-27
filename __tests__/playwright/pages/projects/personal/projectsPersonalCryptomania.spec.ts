import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import {
  EXTERNAL_URL,
  PAGES_URL,
  PROJECTS_PERSONAL_URLS,
} from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Project - Cryptomania', () => {
  test('Links', async ({ page }) => {
    await page.goto(PAGES_URL.personalCryptoMania)

    await test.step('Alert GitHub link', async () => {
      const alertLink = page.getByTestId(DATA_TEST_IDS.alert.alertLinkGitHub)
      await expect(alertLink).toHaveAttribute('href', EXTERNAL_URL.gitHub)
    })

    await test.step('Website link', async () => {
      const link = page.getByTestId('project-link-website-cryptomania')
      await expect(link).toHaveAttribute('href', PROJECTS_PERSONAL_URLS.personalCryptoManiaExternal)
    })
  })
})
