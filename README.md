# React Developer - Portfolio Website | krsiak.cz

React Developer portfolio website 👨‍💻

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

This app uses Jest for unit testing.

### JEST 🃏

Jest is JavaScript Testing Framework.

- Test are located in the same folder next to each file being tested.
- If there is file `getSkillBadgeColor.ts`, the test file will be `getSkillBadgeColor.test.tsx`.

Run tests in command line.

```bash
npm run test
```

#### Test coverage

Jest will generate a code coverage report.

- The report will be output to the console.
- It will also be saved to a `/coverage` directory in project root as HTML file.

```bash
npm run test:coverage
```

## 🚀 Deployment CI / CD

This app uses GitHub Actions for CI and Netlify for CD.

### CI - Continuous Integration 🚦

This app uses GitHub Actions for CI.

#### GitHub Actions - Workflow "Jest"

File location: [.github/workflows/jest.yml](.github/workflows/jest.yml)

This workflow is triggered in 2 scenarios:

1. When a push is made to the `master` branch.
2. When a pull request is opened against the `master` branch.

The workflow consists of a single job named `build`, which is executed on the latest version of Ubuntu.

The `build` job follows these steps:

1. It checks out your repository using the `actions/checkout@v2` action.
2. It sets up a Node.js environment using the `actions/setup-node@v2` action, specifically using Node.js version 14.x.
3. It installs the dependencies of your project using `npm ci`. This command is similar to `npm install`, but it's designed to be used in automated environments such as this one. It's faster and more reliable because it bypasses a package's `package.json` to install modules from a package's `npm-shrinkwrap.json` or `package-lock.json`, and it doesn't modify these `lock` files.
4. It runs your Jest tests using `npm test`.

This workflow ensures that tests are run in a clean environment for every push and pull request to the `master` branch. You can view the results of the workflow in the **["Actions"](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions) tab of GitHub repository**.

### CD - Continuous Deployment 🚦

This app is deployed on [Netlify](https://www.netlify.com/).

**Build plugin:**

- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) to automatically run a Lighthouse audit on website after every build.

**Deploys:**

- [portfolio-website-krsiak-cz/deploys](https://app.netlify.com/sites/portfolio-website-krsiak-cz/deploys)
- You can click on the last 2 deploys to see the details.

## 🖼️ Screenshots

Project screenshots.

![screenshot-1](/screenshots/screenshot-1.png)

![screenshot-2](/screenshots/screenshot-2.png)
