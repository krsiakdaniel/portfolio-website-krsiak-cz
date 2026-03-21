import { test } from '@playwright/test'

import { projectLinks } from '@/__tests__/playwright/lib/__mock__/projectLinksData'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'
import { testProjectLink } from '@/__tests__/playwright/lib/utils/helpers/testProjectLink'

test.describe('Projects Work - Page links', () => {
  projectLinks.forEach(({ name, url, id }) => {
    test(`Project - ${name}`, async ({ page }) => {
      await page.goto(PAGES_URL.workExperience)
      await testProjectLink(page, url, id)
    })
  })
})
