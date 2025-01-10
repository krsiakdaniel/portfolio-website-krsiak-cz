# 🛠️ CI - Continuous Integration

This project uses CI = GitHub Actions.

**Table of Contents:**

- [🛠️ CI - Continuous Integration](#️-ci---continuous-integration)
  - [🚀 CI and CD - Process](#-ci-and-cd---process)
  - [🛠️ CI - Continuous Integration - ℹ️ Info](#️-ci---continuous-integration---ℹ️-info)
    - [Status of CI](#status-of-ci)
    - [GitHub Actions](#github-actions)
      - [Workflow for Jest 🃏](#workflow-for-jest-)
      - [Workflow for Playwright 🎭](#workflow-for-playwright-)
      - [Workflow for Prettier 🎨](#workflow-for-prettier-)
      - [Workflow for Pull Request Labeler 🏷️](#workflow-for-pull-request-labeler-️)
      - [Workflow for Auto Author Assign ✍️](#workflow-for-auto-author-assign-️)

---

## 🚀 CI and CD - Process

- [README-ci-cd-process.md](README-ci-cd-process.md)

## 🛠️ CI - Continuous Integration - ℹ️ Info

This app uses GitHub Actions for CI.

### Status of CI

The badges show the status of the workflows.

[![Jest Tests](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml) [![Playwright Tests](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml)

### GitHub Actions

Workflows are defined in `.github/workflows` directory.

#### Workflow for Jest 🃏

- Workflow file: [jest.yml](.github/workflows/jest.yml)
- View the results on GitHub: [actions/workflows/jest.yml](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml)

<details>
<summary>Click to read workflow description 👀</summary>

---

This workflow is triggered:

- When a pull request is opened against the `master` branch.
- The workflow consists of a single job named `run-tests-jest`.
- The job is executed on the latest version of Ubuntu.

The `run-tests-jest` job follows these steps:

1. Checkout the repository using the `actions/checkout@v4` action.
2. Setup Node.js environment using the `actions/setup-node@v4` action with Node.js version 18.
3. It installs the dependencies of your project using `npm ci`. This command is similar to `npm install`, but it's designed to be used in automated environments such as this one.
4. Run JEST tests using `npm test`.
5. Upload the test report as an artifact:
   - Using the `actions/upload-artifact@v4` action.
   - This step is always executed regardless of the success or failure of previous steps.
   - The artifact is named `jest-report`
   - It is located at path `jest-report/`
   - It is retained for 7 days.

</details>

#### Workflow for Playwright 🎭

- Workflow file: [playwright.yml](.github/workflows/playwright.yml)
- View the results on GitHub: [actions/workflows/playwright.yml](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml)

<details>
<summary>Click to read workflow description 👀</summary>

---

This workflow is triggered:

- When a pull request is opened against the `master` branch.
- The workflow consists of a single job named `run-tests-playwright`.
- The job is executed on the latest version of Ubuntu.

The `run-tests-playwright` job follows these steps:

1. Checkout the repository using the `actions/checkout@v4` action.
2. Setup Node.js environment using the `actions/setup-node@v4` action with Node.js version 18.
3. It installs the dependencies of your project using `npm ci`. This command is similar to `npm install`, but it's designed to be used in automated environments such as this one.
4. Install Playwright browsers using `npx playwright install --with-deps`.
5. Run Playwright tests using `npx playwright test`.
6. Upload the test report as an artifact:
   - Using the `actions/upload-artifact@v4` action.
   - This step is always executed regardless of the success or failure of previous steps.
   - The artifact is named `playwright-report`
   - It is located at path `playwright-report/`
   - It is retained for 7 days.

</details>

#### Workflow for Prettier 🎨

- Workflow file: [prettier-check-formatting.yml](.github/workflows/prettier-check-formatting.yml)
- View the results on GitHub: [actions/workflows/prettier-check-formatting.yml](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/prettier-check-formatting.yml)

<details>
<summary>Click to read workflow description 👀</summary>

---

This workflow is triggered:

- When a pull request is opened against the `master` branch.
- The workflow consists of a single job named `run-prettier`.
- The job is executed on the latest version of Ubuntu.

The `run-prettier` job follows these steps:

1. Checkout the repository using the `actions/checkout@v4` action.
2. Setup Node.js environment using the `actions/setup-node@v4` action with Node.js version 20.
3. It installs the dependencies of your project using `npm ci`. This command is similar to `npm install`, but it's designed to be used in automated environments such as this one.
4. Run Prettier check using `npm run prettier:check`.

</details>

#### Workflow for Pull Request Labeler 🏷️

- Workflow file: [labeler.yml](.github/workflows/labeler.yml)
- View the results on GitHub: [actions/workflows/labeler.yml](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/labeler.yml)

<details>
<summary>Click to read workflow description 👀</summary>

---

This workflow is triggered:

- When a pull request is opened against the `master` branch.

The `labeler` job follows these steps:

1. Checkout the repository using the `actions/checkout@v4` action.
2. Apply labels to the pull request using the `actions/labeler@v5` action with the configuration specified in `.github/labeler.yml`.

</details>

#### Workflow for Auto Author Assign ✍️

- Workflow file: [auto-author-assign.yml](.github/workflows/auto-author-assign.yml)
- View the results on GitHub: [actions/workflows/auto-author-assign.yml](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/auto-author-assign.yml)

<details>
<summary>Click to read workflow description 👀</summary>

---

This workflow is triggered:

- When an issue is opened or reopened.
- When a pull request is opened or reopened against the `master` branch.

The `assign-author` job follows these steps:

1. Assign the author to the issue or pull request using the `toshimaru/auto-author-assign@v2.1.1` action.

</details>
