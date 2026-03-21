import { expect, test } from '@playwright/test'

import { EXTERNAL_URL, PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Testimonials - Link - Bony to Beastly', () => {
  test('should render the Bony to Beastly link correctly', async ({ page }) => {
    await page.goto(PAGES_URL.testimonials)
    const link = page.getByRole('link', { name: 'Bony to Beastly' }).first()

    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', EXTERNAL_URL.bonyToBeastly)
  })
})
