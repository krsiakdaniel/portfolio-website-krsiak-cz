# React Developer - Portfolio Website | krsiak.cz

React Developer portfolio website 👨‍💻

[![Jest](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml) [![Build Status](https://badges.netlify.com/api/portfolio-website-krsiak-cz.svg?branch=master)](https://app.netlify.com/sites/portfolio-website-krsiak-cz/deploys)

## ⚡ Project Website

Website: <https://krsiak.cz>

## 🛠️ Tech Stack

Using the following technologies.

![My Skills](https://skillicons.dev/icons?i=js,ts,react,next,tailwind,jest,githubactions,netlify)

Website built with:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/) - JavaScript library
- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [JEST](https://jestjs.io/) - UNIT testing
- [Playwright](https://playwright.dev/) - E2E testing
- [GitHub Actions](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions) - CI - Continuous Integration
- [Netlify](https://www.netlify.com/) - CD - Continuous Deployment

## 📝 Features

The website contains the following sections and pages.

**Links:**

- 👉 LinkedIn, GitHub, Resume

**Sections:**

- 👉 skills
- 👉 about
- 👉 work projects
- 👉 personal projects
- 👉 contact

**Project pages:**

- 👉 page for each project
- 👉 project image gallery

## 💻 Scripts

Install dependencies.

```bash
npm i
```

Runs the app in the development mode.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 💅 Prettier

This project uses Prettier for code formatting.

Check if the code is formatted correctly.

```bash
npm run prettier:check
```

Format the code via Prettier.

```bash
npm run prettier:fix
```

## 🐛 Testing

This app uses **Jest** for unit testing and **Playwright** for E2E testing.

### JEST 🃏

Jest is JavaScript Testing Framework.

- Test are located folder in `__tests__/jest`
- If file name is `getSkillBadgeColor.ts`, then test name is `getSkillBadgeColor.test.ts`.

Runs the unit tests.

```bash
npm run test
```

#### Test coverage - Jest

Jest will generate a code coverage report.

- The report will be output to the console.
- It will also be saved to a `/coverage` directory in project root as HTML file.

```bash
npm run test:coverage
```

### Playwright 🎭

Playwright is library for browser automation E2E testing.

- Test are located folder in `__tests__/playwright`

Runs the E2E tests.

```bash
npx playwright test
```

Runs the E2E tests using alias for `npx playwright test`

```bash
npm run test:e2e
```

#### Test coverage - Playwright

Playwright will generate a code coverage report.

- It serves HTML report on new localhost port.

```bash
  npx playwright show-report
```

#### Other Playwright commands

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
npx playwright test file_name.spec.ts
```

Runs the tests in debug mode.

```bash
npx playwright test --debug
```

Auto generate tests with Codegen.

```bash
npx playwright codegen
```

## 🚀 Deployment CI / CD

This app uses GitHub Actions for CI and Netlify for CD.

### CI - Continuous Integration · [![Jest](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml)

This app uses GitHub Actions for CI.

#### GitHub Actions - Workflow "Jest"

- Workflow file: [jest.yml](.github/workflows/jest.yml)
- View the results on GitHub: [actions/workflows/playwright.yml](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml)

<details>
<summary>👀 Read workflow description ...</summary>

---

This GitHub Actions workflow is named **"Jest"**.

It is triggered in 2 scenarios:

1. When a push is made to the `master` branch.
2. When a pull request is opened against the `master` branch.

The workflow consists of a single job named `build`, which is executed on the latest version of Ubuntu.

The `build` job follows these steps:

1. Checkout the repository using the `actions/checkout@v3` action.
2. Setup Node.js environment using the `actions/setup-node@v3` action with Node.js version 18.
3. It installs the dependencies of your project using `npm ci`. This command is similar to `npm install`, but it's designed to be used in automated environments such as this one.
4. Run JEST tests using `npm test`.
5. Upload the test report as an artifact:
   - Using the `actions/upload-artifact@v3` action.
   - This step is always executed regardless of the success or failure of previous steps.
   - The artifact is named `jest-report`
   - It is located at path `jest-report/`
   - It is retained for 7 days.

</details>

#### GitHub Actions - Workflow "Playwright"

- Workflow files in project root: [playwright.yml](.github/workflows/playwright.yml)
- View the results on GitHub: [actions/workflows/playwright.yml](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml)

<details>
<summary>👀 Read workflow description ...</summary>

---

It is triggered in 2 scenarios:

1. When a push is made to the `master` branch.
2. When a pull request is opened against `master` branch.

The workflow consists of a single job named `test`, which is executed on the latest version of Ubuntu.

The `test` job follows these steps:

1. Checkout the repository using the `actions/checkout@v3` action.
2. Setup Node.js environment using the `actions/setup-node@v3` action with Node.js version 18.
3. It installs the dependencies of your project using `npm ci`. This command is similar to `npm install`, but it's designed to be used in automated environments such as this one.
4. Install Playwright browsers using `npx playwright install --with-deps`.
5. Run Playwright tests using `npx playwright test`.
6. Upload the test report as an artifact:
   - Using the `actions/upload-artifact@v3` action.
   - This step is always executed regardless of the success or failure of previous steps.
   - The artifact is named `playwright-report`
   - It is located at path `playwright-report/`
   - It is retained for 7 days.

</details>

### CD - Continuous Deployment · [![Build Status](https://badges.netlify.com/api/portfolio-website-krsiak-cz.svg?branch=master)](https://app.netlify.com/sites/portfolio-website-krsiak-cz/deploys)

This app is deployed on Netlify.

#### Netlify

Build starts when a new commit is pushed to the `master` branch.

Using build plugin:

- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) to automatically run audit on website after every build.

Deploys:

- Netlify page [portfolio-website-krsiak-cz/deploys](https://app.netlify.com/sites/portfolio-website-krsiak-cz/deploys)
- You can click on the last 2 deploys to see the details.

## 🖼️ Screenshots

Project screenshots.

![screenshot-1](/screenshots/screenshot-1.png)

![screenshot-2](/screenshots/screenshot-2.png)
