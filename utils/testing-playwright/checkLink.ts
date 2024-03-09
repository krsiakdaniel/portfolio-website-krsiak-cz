import { Page, expect } from '@playwright/test'

export const checkLink = async (page: Page, testId: string, expectedHref: string) => {
  const link = await page.getAttribute(`[data-testid="${testId}"]`, 'href')
  expect(link).toBe(expectedHref)
}
