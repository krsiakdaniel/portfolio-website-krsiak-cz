import { Page, expect } from '@playwright/test'

/**
 * Checks that a link with a given data-testid attribute has the expected href value.
 */
export const checkLink = async (
  page: Page,
  dataTestId: string,
  expectedHref: string,
): Promise<void> => {
  const link = page.getByTestId(dataTestId)
  await expect(link).toHaveAttribute('href', expectedHref)
}
