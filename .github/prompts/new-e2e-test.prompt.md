---
description: Generate a Playwright E2E test for a page or layout component
---

Write a Playwright E2E test for **${input:targetArea}**.

## File location

- Page tests: `__tests__/playwright/pages/<pageName>/<testName>.spec.ts`
- Layout tests: `__tests__/playwright/layout/<componentName>/<testName>.spec.ts`

## Import pattern

```typescript
import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'
```

Import text constants only if testing visible text content:

```typescript
import { SOME_TEXTS } from '@/__tests__/playwright/lib/utils/constants/texts/e2eTexts'
```

## Structure

```typescript
test.describe('<Area> - <what is being tested>', () => {
  test('should <expected behavior>', async ({ page }) => {
    await page.goto(PAGES_URL.<pageName>)
    await expect(page.getByTestId(DATA_TEST_IDS.<selector>)).<assertion>
  })
})
```

## Rules

- Use `getByTestId` with constants from `DATA_TEST_IDS` — never hardcode test ID strings
- Use URL constants from `PAGES_URL` — never hardcode URLs
- Use text constants from the texts constants file — never hardcode visible text
- Test critical user journeys only — not implementation details
- For page object model (complex interactions), place the class in `__tests__/playwright/lib/page-objects/`
- Each `test.describe` block covers one focused area (one element, one user journey)
- Keep each test independent — no shared state between tests

## What to test

1. Element is visible / rendered
2. Text content is correct
3. Links navigate to the correct URL
4. Interactive elements respond correctly (click, hover)
