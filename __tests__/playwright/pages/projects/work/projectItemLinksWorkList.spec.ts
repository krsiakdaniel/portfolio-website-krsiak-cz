import { test } from '@playwright/test'

import { projectLinks } from '@/__tests__/playwright/lib/__mock__/projectLinksData'
import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'
import { testProjectListRowLink } from '@/__tests__/playwright/lib/utils/helpers/testProjectListRowLink'

test.describe('Projects Work - List view links', () => {
  projectLinks.forEach(({ name, url, id }) => {
    test(`Project - ${name}`, async ({ page }) => {
      await page.goto(PAGES_URL.workExperience)

      // Switch to list view
      await page.getByTestId(DATA_TEST_IDS.layoutToggle.listView).click()

      await testProjectListRowLink(page, url, id)
    })
  })
})
