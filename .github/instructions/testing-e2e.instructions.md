---
applyTo: '**/__tests__/playwright/**'
---

## Playwright E2E Test Rules

- Use `.spec.ts` extension
- Use page object model for maintainability — place page objects in `__tests__/playwright/lib/`
- Test critical user journeys only — not implementation details
- Use `data-testid` attributes for selectors, referencing constants from `__tests__/playwright/lib/utils/constants/ids/`
- Never hardcode URLs — use base URL from Playwright config

## File Locations

- Test specs: `__tests__/playwright/pages/` or `__tests__/playwright/layout/`
- Page objects and helpers: `__tests__/playwright/lib/`
- Fixtures: `__tests__/playwright/fixtures/`

## Commands

```bash
bun test:e2e    # run all Playwright E2E tests
```
