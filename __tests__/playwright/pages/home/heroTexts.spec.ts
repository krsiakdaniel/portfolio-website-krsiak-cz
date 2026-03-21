import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { HERO_TEXTS } from '@/__tests__/playwright/lib/utils/constants/texts/e2eTexts'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Hero - Heading and texts', () => {
  test('should render the h1 heading correctly', async ({ page }) => {
    await page.goto(PAGES_URL.home)
    await expect(page.getByTestId(DATA_TEST_IDS.hero.heading)).toContainText(HERO_TEXTS.heading)
  })

  test('should render small text inside h1 heading correctly', async ({ page }) => {
    await page.goto(PAGES_URL.home)
    await expect(page.getByTestId(DATA_TEST_IDS.hero.headingSmall)).toContainText(
      HERO_TEXTS.headingSmall,
    )
  })

  test('should render the paragraphs correctly', async ({ page }) => {
    await page.goto(PAGES_URL.home)
    await expect(page.getByTestId(DATA_TEST_IDS.hero.paragraph)).toContainText(HERO_TEXTS.paragraph)
  })
})
