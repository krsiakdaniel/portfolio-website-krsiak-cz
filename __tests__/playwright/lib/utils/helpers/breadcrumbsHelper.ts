import { Page } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

export const getBreadcrumbsLocator = (page: Page) => {
  return page.locator(getDataTestId(DATA_TEST_IDS.breadcrumbs))
}
