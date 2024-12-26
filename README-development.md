# Development

Development environment for the project.

**Table of Contents:**

- [Development](#development)
  - [💻 Commands](#-commands)
    - [Install dependencies](#install-dependencies)
  - [Update outdated dependencies](#update-outdated-dependencies)
    - [Manually](#manually)
    - [Using tool `npm-check-updates`](#using-tool-npm-check-updates)
  - [💅 Prettier](#-prettier)
  - [Imports Sorting Order](#imports-sorting-order)
  - [Import Example](#import-example)

---

## 💻 Commands

Misc commands for terminal.

### Install dependencies

Runs npm to install packages needed.

```bash
npm install
```

Runs the app in the development mode.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view project in browser.

## Update outdated dependencies

There are 2 ways to do this.

### Manually

Find what packages are outdated and upgrade to latest version if possible.

```bash
npm outdated
```

### Using tool `npm-check-updates`

To update the outdated packages in package.json, you can use the NCU tool: [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)

Install `npm-check-updates` globally.

```bash
npm install -g npm-check-updates
```

Check for outdated packages.

```bash
ncu
```

![ncu](/readme-images/npm-check-updates-checking.jpg)

Run cmd to update the package.json with the latest versions.

```bash
ncu -u
```

![ncu](/readme-images/npm-check-updates-upgrading.jpg)

Install the updated packages.

```bash
npm install
```

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

## Imports Sorting Order

Sorting order for imports in files:

1. Third-Party Library Imports
2. Custom Hooks
3. Components
4. Data
5. Utils
6. Interfaces and Helpers
7. Images
8. CSS

## Import Example

```ts
// Third-Party Library Imports
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
```

```ts
// Custom Hooks
import { useScrollProgress } from '@/hooks/useScrollProgress'
```

```ts
// Components
import PageContainer from '@/components/layout/PageContainer'
import PageNavigation from '@/components/page-navigation/PageNavigation'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
```

```ts
// Data
import { mindset } from '@/lib/data/expertise/mindset'
import { iconsSkills1 } from '@/lib/data/skills/skillsMain'
```

```ts
// Utils
import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
```

```ts
// Interfaces and Helpers
import { getGoBackLinkID } from '@/utils/helpers/getGoBackLink'
import { HeaderSectionProps } from '@/utils/interfaces/componentProps'
import { NavigationDirectionEnum } from '@/utils/interfaces/enums'
```

```ts
// Images
import logo from '@/public/images/webp/logo.webp'
```

```ts
// CSS
import '@/app/custom.css'
```
