# 🐛 Testing

This project uses the following tools.

**Table of Contents:**

- [🐛 Testing](#-testing)
  - [🃏 JEST](#-jest)
    - [Test Coverage for Jest](#test-coverage-for-jest)
  - [🎭 Playwright](#-playwright)
    - [Test Coverage for Playwright](#test-coverage-for-playwright)
    - [Other Commands](#other-commands)

---

## 🃏 JEST

Jest is JavaScript Testing Framework.

- Test are located folder in `__tests__/jest`
- Naming is `file.test.ts`

Runs the unit tests.

```bash
npm run test
```

### Test Coverage for Jest

Jest will generate a code coverage report.

- The report will be output to the console.
- It will also be saved to a `/coverage` directory in project root as HTML file.

```bash
npm run test:coverage
```

## 🎭 Playwright

Playwright is library for browser automation E2E testing.

- Test are located folder in `__tests__/playwright`
- Naming is `file.spec.ts`

Runs the E2E tests.

```bash
npx playwright test
```

Runs the E2E tests using alias for `npx playwright test`

```bash
npm run test:e2e
```

### Test Coverage for Playwright

Playwright will generate a code coverage report.

- It serves HTML report on new localhost port.

```bash
  npx playwright show-report
```

### Other Commands

Starts the interactive UI mode.

```bash
npx playwright test --ui
```

Runs the tests only on Desktop Chrome.

```bash
npx playwright test --project=chromium
```

Runs the tests in a specific file.

```bash
npx playwright test file.spec.ts
```

Runs the tests in debug mode.

```bash
npx playwright test --debug
```

Auto generate tests with Codegen.

```bash
npx playwright codegen
```
