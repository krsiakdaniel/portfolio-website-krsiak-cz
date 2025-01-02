import { Page } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

/**
 * Gets the locator for the breadcrumbs element using the data-testid attribute.
 *
 * @param {Page} page - The Playwright page object.
 * @returns {Locator} - The locator for the breadcrumbs element.
 */

export const getBreadcrumbsLocator = (page: Page) => {
  return page.locator(getDataTestId(DATA_TEST_IDS.breadcrumbs))
}
