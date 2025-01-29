# 🃏🎭 Testing

This project uses the following tools for testing.

**Table of Contents:**

- [🃏🎭 Testing](#-testing)
  - [🃏 JEST](#-jest)
    - [Runs Unit Tests](#runs-unit-tests)
    - [Test Coverage For Jest](#test-coverage-for-jest)
  - [🎭 Playwright](#-playwright)
    - [Runs E2E tests](#runs-e2e-tests)
    - [Test Coverage For Playwright](#test-coverage-for-playwright)
    - [Interactive Mode](#interactive-mode)
    - [Run Specific File](#run-specific-file)
    - [Codegen To Generate Tests](#codegen-to-generate-tests)
    - [Debug Tests](#debug-tests)

---

## 🃏 JEST

[![Jest Tests](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml)

**Docs:** <https://jestjs.io/>

Jest is JavaScript Testing Framework.

- Test are located folder in `__tests__/jest`
- Naming is `file.test.ts`

### Runs Unit Tests

```bash
npm run test
```

Expected result after running tests.

![jest](/readme-images/development/testing/jest-passing.webp)

### Test Coverage For Jest

Jest will generate a code coverage report.

- The report will be output to the console.
- It will also be saved to a `/coverage` directory in project root as HTML file.

```bash
npm run test:coverage
```

## 🎭 Playwright

[![Playwright Tests](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml)

**Docs:** <https://playwright.dev/docs/intro>

Playwright is library for browser automation E2E testing.

- Test are located folder in `__tests__/playwright`
- Naming is `file.spec.ts`

### Runs E2E tests

```bash
npm run test:e2e
```

Expected result after running tests.

![playwright](/readme-images/development/testing/e2e-playwright-passing.webp)

### Test Coverage For Playwright

Playwright will generate a code coverage report.

- It serves HTML report on new localhost port.

```bash
  npx playwright show-report
```

### Interactive Mode

Starts the interactive UI mode.

```bash
npx playwright test --ui
```

Runs the tests only on Desktop Chrome.

```bash
npx playwright test --project=chromium
```

### Run Specific File

Runs the tests in a specific file.

```bash
npx playwright test file.spec.ts
```

### Codegen To Generate Tests

**Docs:** <https://playwright.dev/docs/codegen>

Playwright comes with the ability to generate tests.

```bash
npx playwright codegen
```

When you perform actions in the browser it records them and it is a great way to quickly get started with testing.

Playwright will look at your page and figure out the best locator, prioritizing role, text and test id locators. If the generator finds multiple elements matching the locator, it will improve the locator to make it resilient that uniquely identify the target element.

### Debug Tests

Runs the tests in debug mode.

```bash
npx playwright test --debug
```
