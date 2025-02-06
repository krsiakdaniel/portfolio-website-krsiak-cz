# 🎭 Playwright Testing

[![Playwright Tests](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml)

**Docs:** <https://playwright.dev/docs/intro>

Playwright is a powerful framework for End-to-End (E2E) testing and browser automation.

## Directory Structure

Tests are located in:

- Folder: `__tests__/playwright`
- Files are named: `*.spec.ts`

## Running Tests

Overview of the commands available.

### Basic E2E Tests

```bash
bun test:e2e
```

Expected result:

![playwright](/readme-images/development/testing/bun-test-e2e.webp)

### Test Modes

#### Interactive UI Mode

```bash
bun playwright test --ui
```

#### Chrome-only Testing

```bash
bun playwright test --project=chromium
```

### Test Generation

Playwright includes a powerful test generator:

```bash
bun playwright codegen
```

The generator:

- Records browser actions automatically
- Creates resilient test scripts
- Generates unique element locators
- Helps quickly bootstrap new tests

### Debugging

Launch tests in debug mode:

```bash
bun playwright test --debug
```

This mode provides:

- Step-by-step execution
- Browser inspector integration
- Detailed execution logs
