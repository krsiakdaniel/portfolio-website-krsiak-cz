import { expect, test } from '@playwright/test'

import { EXTERNAL_URL, PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Testimonials - Link - Grace Church', () => {
  test('should render the Grace Community Church link correctly', async ({ page }) => {
    await page.goto(PAGES_URL.testimonials)
    const link = page.getByText('Grace Community Church')

    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', EXTERNAL_URL.graceChurch)
  })
})
