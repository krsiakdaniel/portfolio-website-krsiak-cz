# 🛠️ Development

Development environment for the project.

**Table of Contents:**

- [🛠️ Development](#️-development)
  - [💻 Commands](#-commands)
    - [Install Dependencies](#install-dependencies)
    - [Run Development Mode](#run-development-mode)
  - [📦 Update Outdated Dependencies](#-update-outdated-dependencies)
    - [Manually](#manually)
    - [Using `npm-check-updates`](#using-npm-check-updates)
      - [Install](#install)
      - [Check Outdated Packages](#check-outdated-packages)
      - [Proposed Updates](#proposed-updates)
      - [Install Updated Packages](#install-updated-packages)
  - [💅 Prettier](#-prettier)
    - [Check Code](#check-code)
    - [Format Code](#format-code)
  - [🔗 Imports Order in Files](#-imports-order-in-files)
    - [Example](#example)

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

![npm - outdated](/readme-images/development/npm/npm-outdated.webp)

### Using `npm-check-updates`

To update outdated packages, you can use the NCU tool: [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)

#### Install

First, install `npm-check-updates` globally.

```bash
npm install -g npm-check-updates
```

#### Check Outdated Packages

Run the following command to check for outdated packages.

```bash
ncu
```

![ncu - check](/readme-images/development/npm/check-updates-checking.webp)

#### Proposed Updates

Update the `package.json` with the latest versions.

```bash
ncu -u
```

![ncu - upgrade](/readme-images/development/npm/check-updates-upgrading-terminal.webp)

The result seen in `package.json`.

![package.json](/readme-images/development/npm/check-updates-upgrading-package-json.webp)

#### Install Updated Packages

Run npm to install the updated packages.

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
