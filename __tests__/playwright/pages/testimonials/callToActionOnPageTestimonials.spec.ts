import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EXTERNAL_URL, PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('CTA - Testimonials - LinkedIn', () => {
  test('should render the LinkedIn link correctly', async ({ page }) => {
    await page.goto(PAGES_URL.testimonials)
    const link = page.getByTestId(DATA_TEST_IDS.callToAction.linkLinkedIn)

    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', EXTERNAL_URL.linkedIn)
  })
})
