# 🛠️ CI - Continuous Integration

The project uses workflow automation: [GitHub Actions](https://github.com/features/actions)

**Table of Contents:**

- [🛠️ CI - Continuous Integration](#️-ci---continuous-integration)
  - [Status of CI](#status-of-ci)
  - [Workflows for GitHub Actions](#workflows-for-github-actions)
  - [Workflow - Jest 🃏](#workflow---jest-)
  - [Workflow - Playwright 🎭](#workflow---playwright-)
  - [Workflow - Prettier 🎨](#workflow---prettier-)
  - [Workflow - Pull Request Labeler 🏷️](#workflow---pull-request-labeler-️)
  - [Workflow - Auto Author Assign ✍️](#workflow---auto-author-assign-️)

---

## Status of CI

The badges show the status of the workflows.

[![Jest Tests](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml) [![Playwright Tests](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml) [![Prettier Check Formatting](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/prettier-check-formatting.yml/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/prettier-check-formatting.yml) [![Pull Request Labeler](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/labeler.yml/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/labeler.yml) [![Auto Author Assign](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/auto-author-assign.yml/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/auto-author-assign.yml)

## Workflows for GitHub Actions

Workflows are defined in the directory: [.github/workflows/](.github/workflows/auto-author-assign.yml)

**Quick Links to Workflow Files:**

- [Jest Tests](.github/workflows/jest.yml)
- [Playwright Tests](.github/workflows/playwright.yml)
- [Prettier Check](.github/workflows/prettier-check-formatting.yml)
- [PR Labeler](.github/workflows/labeler.yml)
- [Auto Author Assign](.github/workflows/auto-author-assign.yml)

## Workflow - Jest 🃏

- **Workflow file:** [jest.yml](.github/workflows/jest.yml)
- **View the results on GitHub:** [actions/workflows/jest.yml](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml)

This workflow is triggered when a pull request is opened against the `master` branch.

- **Job:** `run-tests-jest`
- **Runs on:** Latest version of Ubuntu

**Steps:**

1. **Checkout the repository**:
   - Action: `actions/checkout@v4`
2. **Setup Bun environment**:
   - Action: `oven-sh/setup-bun@v1`
   - Bun version: latest
3. **Install dependencies**:
   - Command: `bun install`
4. **Run JEST tests**:
   - Command: `bun run test:jest`
5. **Upload test report**:
   - Action: `actions/upload-artifact@v4`
   - Artifact name: `jest-report`
   - Path: `jest-report/`
   - Retention: 7 days

## Workflow - Playwright 🎭

- **Workflow file:** [playwright.yml](.github/workflows/playwright.yml)
- **View the results on GitHub:** [actions/workflows/playwright.yml](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml)

This workflow is triggered when a pull request is opened against the `master` branch.

- **Job:** `run-tests-playwright`
- **Runs on:** Latest version of Ubuntu

**Steps:**

1. **Checkout the repository**:
   - Action: `actions/checkout@v4`
2. **Setup Bun environment**:
   - Action: `oven-sh/setup-bun@v1`
   - Bun version: latest
3. **Install dependencies**:
   - Command: `bun install`
4. **Build the project**:
   - Command: `bun run build`
5. **Install Playwright browsers**:
   - Command: `bunx playwright install --with-deps`
6. **Run Playwright tests**:
   - Command: `bun run test:e2e`
7. **Upload test report**:
   - Action: `actions/upload-artifact@v4`
   - Artifact name: `playwright-report`
   - Path: `playwright-report/`
   - Retention: 7 days

## Workflow - Prettier 🎨

- **Workflow file:** [prettier-check-formatting.yml](.github/workflows/prettier-check-formatting.yml)
- **View the results on GitHub:** [actions/workflows/prettier-check-formatting.yml](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/prettier-check-formatting.yml)

This workflow is triggered when a pull request is opened against the `master` branch.

- **Job:** `run-prettier`
- **Runs on:** Latest version of Ubuntu

**Steps:**

1. **Checkout the repository**:
   - Action: `actions/checkout@v4`
2. **Setup Bun environment**:
   - Action: `oven-sh/setup-bun@v1`
   - Bun version: latest
3. **Install dependencies**:
   - Command: `bun install`
4. **Run Prettier check**:
   - Command: `bun run prettier:check`

## Workflow - Pull Request Labeler 🏷️

- **Workflow file:** [labeler.yml](.github/workflows/labeler.yml)
- **View the results on GitHub:** [actions/workflows/labeler.yml](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/labeler.yml)

This workflow is triggered on `pull_request_target` events.

- **Job:** `labeler`
- **Runs on:** Latest version of Ubuntu
- **Permissions:**
  - contents: `read`
  - pull-requests: `write`

**Steps:**

1. **Checkout the repository**:
   - Action: `actions/checkout@v4`
2. **Apply labels to the pull request**:
   - Action: `actions/labeler@v5`
   - Configuration path: `.github/labeler.yml`

## Workflow - Auto Author Assign ✍️

- **Workflow file:** [auto-author-assign.yml](.github/workflows/auto-author-assign.yml)
- **View the results on GitHub:** [actions/workflows/auto-author-assign.yml](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/auto-author-assign.yml)

This workflow is triggered when an issue is opened or reopened, or when a pull request is opened or reopened.

- **Job:** `assign-author`
- **Runs on:** Latest version of Ubuntu
- **Permissions:**
  - issues: `write`
  - pull-requests: `write`

**Steps:**

1. **Assign the author to the issue or pull request**:
   - Action: `toshimaru/auto-author-assign@v2.1.1`
