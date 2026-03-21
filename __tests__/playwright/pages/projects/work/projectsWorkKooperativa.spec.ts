import { expect, test } from '@playwright/test'

import {
  PAGES_URL,
  PROJECTS_WORK_URLS,
} from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Project - Kooperativa', () => {
  test('Website link', async ({ page }) => {
    await page.goto(PAGES_URL.workKooperativa)

    const link = page.getByRole('link', { name: 'Website', exact: true })
    await expect(link).toHaveAttribute('href', PROJECTS_WORK_URLS.workKooperativaExternal)
  })
})
