import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('CTA - Work Experience - Resume', () => {
  test('should render the Resume CTA link correctly', async ({ page }) => {
    await page.goto(PAGES_URL.workExperience)
    const link = page.getByTestId(DATA_TEST_IDS.callToAction.linkResumeWorkExperience)

    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', PAGES_URL.resume)
  })
})
