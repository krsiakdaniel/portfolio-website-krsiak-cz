# 🛠️ CI - Continuous Integration

This project uses CI = GitHub Actions.

**Table of Contents:**

- [🛠️ CI - Continuous Integration](#️-ci---continuous-integration)
  - [ℹ️ Info](#ℹ️-info)
    - [Status of CI](#status-of-ci)
  - [GitHub Actions](#github-actions)
    - [Workflow for Jest 🃏](#workflow-for-jest-)
    - [Workflow for Playwright 🎭](#workflow-for-playwright-)
    - [Workflow for Prettier 🎨](#workflow-for-prettier-)
    - [Workflow for Pull Request Labeler 🏷️](#workflow-for-pull-request-labeler-️)
    - [Workflow for Auto Author Assign ✍️](#workflow-for-auto-author-assign-️)

---

## ℹ️ Info

This app uses workflow automation: [GitHub Actions](https://github.com/features/actions)

### Status of CI

The badges show the status of the workflows.

[![Jest Tests](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml)
[![Playwright Tests](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml)

## GitHub Actions

Workflows are defined in the `.github/workflows` directory.

### Workflow for Jest 🃏

- **Workflow file:** [jest.yml](.github/workflows/jest.yml)
- **View the results on GitHub:** [actions/workflows/jest.yml](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml)

This workflow is triggered when a pull request is opened against the `master` branch.

- **Job:** `run-tests-jest`
- **Runs on:** Latest version of Ubuntu

**Steps:**

1. **Checkout the repository**:
   - Action: `actions/checkout@v4`
2. **Setup Node.js environment**:
   - Action: `actions/setup-node@v4`
   - Node.js version: 18
3. **Install dependencies**:
   - Command: `npm ci`
4. **Run JEST tests**:
   - Command: `npm test`
5. **Upload test report**:
   - Action: `actions/upload-artifact@v4`
   - Artifact name: `jest-report`
   - Path: `jest-report/`
   - Retention: 7 days

### Workflow for Playwright 🎭

- **Workflow file:** [playwright.yml](.github/workflows/playwright.yml)
- **View the results on GitHub:** [actions/workflows/playwright.yml](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml)

This workflow is triggered when a pull request is opened against the `master` branch.

- **Job:** `run-tests-playwright`
- **Runs on:** Latest version of Ubuntu

**Steps:**

1. **Checkout the repository**:
   - Action: `actions/checkout@v4`
2. **Setup Node.js environment**:
   - Action: `actions/setup-node@v4`
   - Node.js version: 18
3. **Install dependencies**:
   - Command: `npm ci`
4. **Install Playwright browsers**:
   - Command: `npx playwright install --with-deps`
5. **Run Playwright tests**:
   - Command: `npx playwright test`
6. **Upload test report**:
   - Action: `actions/upload-artifact@v4`
   - Artifact name: `playwright-report`
   - Path: `playwright-report/`
   - Retention: 7 days

### Workflow for Prettier 🎨

- **Workflow file:** [prettier-check-formatting.yml](.github/workflows/prettier-check-formatting.yml)
- **View the results on GitHub:** [actions/workflows/prettier-check-formatting.yml](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/prettier-check-formatting.yml)

This workflow is triggered when a pull request is opened against the `master` branch.

- **Job:** `run-prettier`
- **Runs on:** Latest version of Ubuntu

**Steps:**

1. **Checkout the repository**:
   - Action: `actions/checkout@v4`
2. **Setup Node.js environment**:
   - Action: `actions/setup-node@v4`
   - Node.js version: 20
3. **Install dependencies**:
   - Command: `npm ci`
4. **Run Prettier check**:
   - Command: `npm run prettier:check`

### Workflow for Pull Request Labeler 🏷️

- **Workflow file:** [labeler.yml](.github/workflows/labeler.yml)
- **View the results on GitHub:** [actions/workflows/labeler.yml](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/labeler.yml)

This workflow is triggered when a pull request is opened against the `master` branch.

- **Job:** `labeler`
- **Runs on:** Latest version of Ubuntu

**Steps:**

1. **Checkout the repository**:
   - Action: `actions/checkout@v4`
2. **Apply labels to the pull request**:
   - Action: `actions/labeler@v5`
   - Configuration: `.github/labeler.yml`

### Workflow for Auto Author Assign ✍️

- **Workflow file:** [auto-author-assign.yml](.github/workflows/auto-author-assign.yml)
- **View the results on GitHub:** [actions/workflows/auto-author-assign.yml](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/auto-author-assign.yml)

This workflow is triggered when an issue is opened or reopened, or when a pull request is opened or reopened against the `master` branch.

- **Job:** `assign-author`
- **Runs on:** Latest version of Ubuntu

**Steps:**

1. **Assign the author to the issue or pull request**:
   - Action: `toshimaru/auto-author-assign@v2.1.1`
