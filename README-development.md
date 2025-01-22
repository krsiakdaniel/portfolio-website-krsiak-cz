# Development

Development environment for the project.

**Table of Contents:**

- [Development](#development)
  - [💻 Commands](#-commands)
    - [Install Dependencies](#install-dependencies)
    - [Run Development Mode](#run-development-mode)
  - [📦 Update Outdated Dependencies](#-update-outdated-dependencies)
    - [Manually](#manually)
    - [Using `npm-check-updates`](#using-npm-check-updates)
  - [💅 Prettier](#-prettier)
    - [Check Code](#check-code)
    - [Format Code](#format-code)
  - [🔗 Imports Order in Files](#-imports-order-in-files)
    - [Example](#example)
  - [🔀 Pull Requests](#-pull-requests)
    - [Link Board Issue](#link-board-issue)
    - [Generate Summary with GitHub Copilot](#generate-summary-with-github-copilot)
    - [Empty Description in PR](#empty-description-in-pr)
    - [Use Copilot to Generate Summary](#use-copilot-to-generate-summary)
    - [Copilot Generates Summary](#copilot-generates-summary)
    - [Save Comment with the Summary](#save-comment-with-the-summary)

---

## 💻 Commands

Miscellaneous commands for the terminal.

### Install Dependencies

Run npm to install the necessary packages.

```bash
npm install
```

### Run Development Mode

Run the app in development mode.

```bash
npm run dev
```

To view the project in the browser, open: [http://localhost:3000](http://localhost:3000)

## 📦 Update Outdated Dependencies

There are two ways to update outdated dependencies.

### Manually

Find outdated packages and upgrade to the latest version if possible.

```bash
npm outdated
```

### Using `npm-check-updates`

To update outdated packages, you can use the NCU tool: [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)

First, install `npm-check-updates` globally.

```bash
npm install -g npm-check-updates
```

Check for outdated packages.

```bash
ncu
```

![ncu](/readme-images/development/npm/check-updates-checking.png)

Update the `package.json` with the latest versions.

```bash
ncu -u
```

![ncu](/readme-images/development/npm/check-updates-upgrading.png)

Install the updated packages.

```bash
npm install
```

## 💅 Prettier

This project uses Prettier for code formatting.

### Check Code

Check if the code is formatted correctly.

```bash
npm run prettier:check
```

### Format Code

Format the code in files using Prettier.

```bash
npm run prettier:fix
```

## 🔗 Imports Order in Files

Order for imports in files:

1. Third-Party Library Imports
2. Custom Hooks
3. Components
4. Data
5. Utils
6. Localization
7. Utils - Constants
8. Utils - Helpers and Interfaces
9. Images
10. CSS

### Example

Here is an example of how the imports should be ordered in a file.

```ts
// Third-Party Library Imports
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

// Custom Hooks
import { useScrollProgress } from '@/lib/hooks/useScrollProgress'

// Components
import PageContainer from '@/components/layout/PageContainer'
import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'

// Data
import { metaDataShared } from '@/lib/data/metadata/shared/metaDataShared'
import { mindset } from '@/lib/data/pages/home/expertise/mindset'

// Localization
import { TEXT } from '@/localization/english'

// Utils - Constants
import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

// Utils - Helpers and Interfaces
import { getGoBackLinkID } from '@/lib/utils/helpers/getGoBackLink'
import { ArrowDirectionEnum } from '@/lib/utils/typeDefinitions/enums'

// Component Props
import { HeaderSectionProps } from '@/lib/utils/typeDefinitions/props'
import { SkillCardProps } from '@/lib/utils/typeDefinitions/props'

// Images
import logo from '@/public/icons/png/icon-64x64.png'

// CSS
import '@/app/custom.css'
```

## 🔀 Pull Requests

When creating a pull request, follow these guidelines:

### Link Board Issue

Always link a related issue in the pull request description.

![Linked Board Issue](/readme-images/development/pull-request/linked-board-issue.png)

### Generate Summary with GitHub Copilot

This can happen for small refactoring changes or quick README updates.

Follow these steps:

- Add in the PR description - Issue: `n/a`.
- Use the GitHub Copilot feature inside the comment.
- Generate a summary of the code changes done in the PR.

### Empty Description in PR

Edit the description.

![PR summary 1](/readme-images/development/pull-request/changes-copilot-summary-1.png)

### Use Copilot to Generate Summary

Click on the Copilot icon.

![PR summary 2](/readme-images/development/pull-request/changes-copilot-summary-2.png)

### Copilot Generates Summary

Wait for the generated summary made from the code changes.

![PR summary 3](/readme-images/development/pull-request/changes-copilot-summary-3.png)

### Save Comment with the Summary

Review the text and save the comment.

![PR summary 4](/readme-images/development/pull-request/changes-copilot-summary-4.png)
