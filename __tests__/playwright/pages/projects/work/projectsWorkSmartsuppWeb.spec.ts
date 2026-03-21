import { expect, test } from '@playwright/test'

import {
  PAGES_URL,
  PROJECTS_WORK_URLS,
} from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Project Work - Smartsupp - Web', () => {
  test('Website link', async ({ page }) => {
    await page.goto(PAGES_URL.workSmartsuppWeb)

    const link = page.getByRole('link', { name: 'Website' })
    await expect(link).toHaveAttribute('href', PROJECTS_WORK_URLS.workSmartsuppWebExternal)
  })
})
