# 🐕 Pre-Commit Setup with Husky

This document explains the comprehensive pre-commit setup implemented to catch TypeScript errors, linting issues, and other quality problems before code is committed to the repository.

**Table of Contents:**

- [🔧 Setup Overview](#-setup-overview)
- [🚀 Available Commands](#-available-commands)
- [🔍 Pre-Commit Workflow](#-pre-commit-workflow)
- [📝 Manual Validation](#-manual-validation)
- [🛠️ Configuration Files](#️-configuration-files)
- [🚨 TypeScript Error Example](#-typescript-error-example)
- [🔄 Troubleshooting](#-troubleshooting)
- [🎯 Benefits](#-benefits)
- [📋 Best Practices](#-best-practices)

## 🔧 Setup Overview

The pre-commit workflow consists of multiple layers of checks:

1. **Automatic Git Hooks** (via Husky)
2. **Lint-staged** for file-specific checks
3. **TypeScript type checking** for the entire project
4. **Manual validation scripts** for on-demand testing

**Scripts to run for quality checks:**

1. `bun run pre-commit` - fast check for staged files only
2. `bun run integrate` - full validation including JEST and E2E tests

## 🚀 Available Commands

### Core Commands

- `bun type-check` - Run TypeScript type checking
- `bun validate` - Run type-check + lint + jest tests
- `bun integrate` - Full integration testing (type-check + lint + jest + e2e)
- `bun pre-commit-check` - Manual pre-commit validation script

### Development Commands

- `bun dev` - Start development server
- `bun build` - Build the application
- `bun start` - Start production server

### Test Commands

- `bun test:jest` - Run unit tests
- `bun test:jest:coverage` - Run unit tests with coverage
- `bun test:jest:watch` - Run unit tests in watch mode
- `bun test:e2e` - Run end-to-end tests
- `bun test:e2e:chrome` - Run Playwright tests in Chrome only
- `bun test:e2e:ui` - Run Playwright tests with UI
- `bun test:e2e:debug` - Run Playwright tests in debug mode

### Code Quality Commands

- `bun lint` - Run ESLint
- `bun lint --fix` - Run ESLint with auto-fix
- `bun prettier:check` - Check code formatting
- `bun prettier:write` - Format code with Prettier

### Dependency Management

- `bun deps:outdated` - Check outdated dependencies
- `bun clean` - Remove `node_modules`
- `bun clean:install` - Remove `node_modules` and reinstall dependencies

## 🔍 Pre-Commit Workflow

### Automatic Pre-Commit (via Husky)

When you run `git commit`, the following quality checks run automatically:

1. **Lint Staged Files** - `bun lint-staged`
   - Runs ESLint with auto-fix (`--max-warnings=0`) on staged files
   - Applies Prettier formatting to staged files
   - Automatically fixes formatting issues where possible

2. **TypeScript Type Checking**:
   - Runs `bun tsc --noEmit` on the entire codebase
   - Catches type errors like missing properties, incorrect imports
   - Validates TypeScript compilation without emitting files

3. **Unit Tests** - `bun test:jest`
   - Runs Jest test suite
   - Ensures all tests pass before allowing commit

4. **End-to-End Tests** - `bun test:e2e:chrome`
   - Runs Playwright E2E tests in Chrome
   - Validates critical user journeys

5. **Commit Message Validation** (Optional)
   - Provides helpful reminders for commit message format
   - Can be configured via commit-msg hook

**Commit is blocked** if any of these checks fail.

### Emergency Bypass

In emergency situations, you can bypass the pre-commit hooks using:

```bash
git commit --no-verify
```

⚠️ **Use sparingly!** This should only be used when:

- Urgent hotfix is needed
- CI is temporarily broken
- You're committing work-in-progress for collaboration

### Local Commands to Replicate CI

To manually run the same checks that happen in CI:

```bash
# Run lint-staged (same as pre-commit)
bun lint-staged

# TypeScript type checking
bun type-check

# Unit tests
bun test:jest

# E2E tests
bun test:e2e:chrome

# Full validation (recommended before committing)
bun validate

# Complete integration testing
bun integrate
```

## 📝 Manual Validation

### Before Committing

Run the manual pre-commit check script:

```bash
bun pre-commit-check
# or
./scripts/pre-commit-check.sh
```

**This script:**

- Checks for staged files
- Shows what will be committed
- Runs TypeScript type checking
- Runs ESLint
- Runs Prettier
- Runs Jest unit tests

### Integration Testing

For comprehensive testing before pushing:

```bash
bun integrate
```

This runs the full test suite including E2E tests.

## 🛠️ Configuration Files

### Scripts in `package.json`

```json
{
  "type-check": "bun tsc --noEmit",
  "validate": "bun type-check && bun lint && bun test:jest",
  "integrate": "bun type-check && bun lint && bun test:jest && bun test:e2e",
  "pre-commit-check": "./scripts/pre-commit-check.sh"
}
```

### Configuration of `lint-staged`

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["bun eslint --fix --max-warnings=0", "bun prettier --write"],
    "*.{css,scss,md,json,yml}": ["bun prettier --write"],
    "*.{ts,tsx}": ["bash -c 'bun tsc --noEmit'"]
  }
}
```

### Husky Hooks

- `.husky/pre-commit` - Runs `lint-staged` + TypeScript type checking
- `.husky/post-commit` - Runs quality gates (informational)

## 🚨 TypeScript Error Example

The setup catches errors like:

```typescript
// ❌ This would be caught by pre-commit
const alert: AlertTypeEnum = AlertTypeEnum.Neutral // Error: Property 'Neutral' does not exist

// ✅ This would pass
const alert: AlertTypeEnum = AlertTypeEnum.Info
```

## 🔄 Troubleshooting

### If Pre-Commit Fails

1. **TypeScript errors**: Fix the type issues in your code
   - Run `bun type-check` to see specific errors
   - Check for missing properties, incorrect imports, or type mismatches

2. **Lint errors**:
   - Run `bun lint` to see issues
   - Run `bun lint --fix` for auto-fixable issues
   - Fix remaining issues manually

3. **Test failures**:
   - Run `bun test:jest` to see failing tests
   - Fix failing tests before committing

4. **Prettier formatting issues**:
   - Run `bun prettier:write` to format all files
   - Individual files can be formatted in your editor

5. **E2E test failures**:
   - Run `bun test:e2e:chrome` to reproduce locally
   - Check for UI changes or functionality issues

### 🔄 Development Workflow

The recommended development workflow:

1. Create a new branch from `master`
2. Make your changes
3. Run tests locally (optional, but recommended): `bun validate`
4. Stage your changes: `git add .`
5. Commit: `git commit -m "your message"`
   - Pre-commit hooks will run automatically
   - Fix any issues that arise
6. Push your branch and create a PR

## 🎯 Benefits

1. **Catch errors early**: TypeScript and lint errors are caught before commit
2. **Consistent formatting**: Prettier ensures consistent code style
3. **Quality assurance**: Automated testing prevents regressions
4. **Team consistency**: Everyone follows the same quality standards
5. **CI/CD reliability**: Fewer build failures in CI/CD pipelines

## 📋 Best Practices

1. **Run validation before committing**: Use `bun pre-commit-check`
2. **Keep commits focused**: Small, focused commits are easier to validate
3. **Fix issues immediately**: Don't bypass pre-commit hooks unless absolutely necessary
4. **Use conventional commits**: Follow the project's commit message conventions
5. **Test thoroughly**: Use `bun integrate` before pushing important changes
