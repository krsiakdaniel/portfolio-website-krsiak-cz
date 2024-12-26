import { expect, test } from '@playwright/test'

import { getDataTestId } from '@/__tests__/playwright/utils/helpers/getDataTestId'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'

test.describe('About Me Page - Tests', () => {
  test('Heading + text', async ({ page }) => {
    await test.step('Go to page About me', async () => {
      await page.goto('/about-me')
    })

    await test.step('Check that the Heading text is correct', async () => {
      const heading = await page.textContent('h1')
      expect(heading).toBe('👨‍💻 About Me')
    })

    await test.step('Check that the paragraph text is correct', async () => {
      const paragraph = await page.textContent(getDataTestId(DATA_TEST_IDS.page.aboutMe.introduction))
      expect(paragraph).toContain(
        'I am a React Developer with expertise in QA Automation and experience in leading teams as a Team Leader',
      )
    })
  })
})
