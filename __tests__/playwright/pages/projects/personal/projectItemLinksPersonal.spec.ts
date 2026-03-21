import { test } from '@playwright/test'

import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'
import { testProjectLink } from '@/__tests__/playwright/lib/utils/helpers/testProjectLink'

test.describe('Projects Personal - Page links', () => {
  test('Project - Krsiak', async ({ page }) => {
    await page.goto(PAGES_URL.personalProjects)
    await testProjectLink(page, PAGES_URL.personalKrsiak, 'link-project-personal-krsiak')
  })

  test('Project - Cryptomania', async ({ page }) => {
    await page.goto(PAGES_URL.personalProjects)
    await testProjectLink(page, PAGES_URL.personalCryptoMania, 'link-project-personal-cryptomania')
  })
})
