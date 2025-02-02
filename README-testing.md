# 🃏🎭 Testing

This project uses the following tools for testing.

**Table of Contents:**

- [🃏🎭 Testing](#-testing)
  - [🃏 JEST](#-jest)
    - [Runs Unit Tests](#runs-unit-tests)
    - [Test Coverage For Jest](#test-coverage-for-jest)
  - [🎭 Playwright](#-playwright)
    - [Runs E2E tests](#runs-e2e-tests)
    - [Interactive Mode](#interactive-mode)
    - [Codegen To Generate Tests](#codegen-to-generate-tests)
    - [Debug Tests](#debug-tests)

---

## 🃏 JEST

[![Jest Tests](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml)

**Docs:** <https://jestjs.io/>

Jest is JavaScript Testing Framework.

- Test are located folder in `__tests__/jest/tests`
- Naming is `file.test.ts`

### Runs Unit Tests

```bash
bun test:jest
```

Expected result after running tests.

![jest](/readme-images/development/testing/bun-test-jest.webp)

### Test Coverage For Jest

Jest will generate a code coverage report.

- The report will be output to the console.
- It will also be saved to a `/coverage` directory in project root as HTML file.

```bash
bun test:jest:coverage
```

## 🎭 Playwright

[![Playwright Tests](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml)

**Docs:** <https://playwright.dev/docs/intro>

Playwright is library for browser automation E2E testing.

- Test are located folder in `__tests__/playwright`
- Naming is `file.spec.ts`

### Runs E2E tests

```bash
bun test:e2e
```

Expected result after running tests.

![playwright](/readme-images/development/testing/bun-test-e2e.webp)

### Interactive Mode

Starts the interactive UI mode.

```bash
bun playwright test --ui
```

Runs the tests only on Desktop Chrome.

```bash
bun playwright test --project=chromium
```

### Codegen To Generate Tests

**Docs:** <https://playwright.dev/docs/codegen>

Playwright comes with the ability to generate tests.

```bash
bun playwright codegen
```

When you perform actions in the browser it records them and it is a great way to quickly get started with testing.

Playwright will look at your page and figure out the best locator, prioritizing role, text and test id locators. If the generator finds multiple elements matching the locator, it will improve the locator to make it resilient that uniquely identify the target element.

### Debug Tests

Runs the tests in debug mode.

```bash
bun playwright test --debug
```
