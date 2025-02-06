# 🃏 Jest Testing

[![Jest Tests](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml)

**Docs:** <https://jestjs.io/>

Jest is a JavaScript Testing Framework focused on simplicity and unit testing.

## Directory Structure

Tests are located in:

- Folder: `__tests__/jest/tests`
- Files are named: `*.test.ts`

## Running Tests

Overview of the commands available.

### Basic Test Run

```bash
bun test:jest
```

Expected result:

![jest](/readme-images/development/testing/bun-test-jest.webp)

### Coverage Report

Jest can generate a detailed code coverage report:

```bash
bun test:jest:coverage
```

The coverage report will:

- Display in the console
- Generate HTML reports in the `/coverage` directory
- Show percentage of code covered by tests
- Identify untested code sections
