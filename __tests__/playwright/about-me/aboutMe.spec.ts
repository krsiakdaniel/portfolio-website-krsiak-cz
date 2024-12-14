import { getDataTestId } from '@/__tests__/playwright/utils/getDataTestId'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import { expect, test } from '@playwright/test'

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
        'I am React Developer, who knows QA Automation and is capable of leading people as Team Leader.',
      )
    })
  })
})
