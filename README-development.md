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
  - [🔗 Imports Order](#-imports-order)
    - [Example](#example)

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

## 🔗 Imports Order

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

```ts
// Third-Party Library Imports
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
```

```ts
// Custom Hooks
import { useScrollProgress } from '@/lib/hooks/useScrollProgress'
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
import { metaDataShared } from '@/lib/utils/metadata/metaDataShared'
import { mindset } from '@/lib/data/expertise/mindset'
```

```ts
// Localization
import { TEXT } from '@/localization/english'
```

```ts
// Utils - Constants
import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
```

```ts
// Utils - Helpers and Interfaces
import { getGoBackLinkID } from '@/lib/utils/helpers/getGoBackLink'
import { HeaderSectionProps } from '@/lib/utils/interfaces/componentProps'
import { NavigationDirectionEnum } from '@/lib/utils/interfaces/enums'
```

```ts
// Images
import logo from '@/public/images/webp/logo.webp'
```

```ts
// CSS
import '@/app/custom.css'
```
