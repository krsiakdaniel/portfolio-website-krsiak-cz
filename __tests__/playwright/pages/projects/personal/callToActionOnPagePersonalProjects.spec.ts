import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EXTERNAL_URL, PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('CTA - Personal Projects - GitHub', () => {
  test('should render the GitHub link correctly', async ({ page }) => {
    await page.goto(PAGES_URL.personalProjects)
    const link = page.getByTestId(DATA_TEST_IDS.callToAction.linkGitHub)

    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', EXTERNAL_URL.gitHub)
  })
})
