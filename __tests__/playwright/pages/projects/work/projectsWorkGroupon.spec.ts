import { expect, test } from '@playwright/test'

import {
  PAGES_URL,
  PROJECTS_WORK_URLS,
} from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Project - Groupon', () => {
  test('Website link', async ({ page }) => {
    await page.goto(PAGES_URL.workGroupon)

    const link = page.getByRole('link', { name: 'Website' })
    await expect(link).toHaveAttribute('href', PROJECTS_WORK_URLS.workGrouponExternal)
  })
})
