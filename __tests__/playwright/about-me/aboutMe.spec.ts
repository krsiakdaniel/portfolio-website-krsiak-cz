import { getDataTestId } from '@/__tests__/playwright/utils/helpers/getDataTestId'
import { TEXT } from '@/localization/texts_en'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
import { expect, test } from '@playwright/test'

test.describe('About Me Page - Tests', () => {
  test('Heading + text', async ({ page }) => {
    await test.step('Go to page About me', async () => {
      await page.goto(PAGES_URL.aboutMe)
    })

    await test.step('Check that the Heading text is correct', async () => {
      const heading = await page.textContent('h1')
      expect(heading).toBe(TEXT.aboutMe)
    })

    await test.step('Check that the paragraph text is correct', async () => {
      const paragraph = await page.textContent(getDataTestId(DATA_TEST_IDS.page.aboutMe.introduction))
      expect(paragraph).toContain(
        'I am React Developer, who knows QA Automation and is capable of leading people as Team Leader.',
      )
    })
  })
})
