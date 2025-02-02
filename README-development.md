# 🛠️ Development

Development environment for the project.

**Table of Contents:**

- [🛠️ Development](#️-development)
  - [🚀 Website Version `2.48.23`](#-website-version-24823)
  - [💻 Commands](#-commands)
    - [🔧 Bun Commands](#-bun-commands)
    - [Available Scripts](#available-scripts)
    - [Install Dependencies](#install-dependencies)
    - [Run Development Mode](#run-development-mode)
  - [📦 Find Outdated Dependencies](#-find-outdated-dependencies)
  - [💅 Prettier](#-prettier)
    - [Check Code](#check-code)
    - [Format Code](#format-code)
  - [🔗 Imports Order in Files](#-imports-order-in-files)
    - [Example](#example)

---

## 🚀 Website Version `2.48.23`

As of **Feb 2, 2025**, the website is `"version": "2.48.23"`.

- `2` - represents major redesign
- `48` - new features added
- `23` - bug fixes implemented

## 💻 Commands

Commands for the terminal using `bun` as the package manager: <https://bun.sh/>

### 🔧 Bun Commands

Common Bun CLI commands for package management:

```bash
bun install           # Install all dependencies
bun add <package>     # Add a dependency
bun remove <package>  # Remove a dependency
bun update            # Update dependencies to their latest versions
```

For more details, see the official Bun documentation:

- [bun install](https://bun.sh/docs/cli/install)
- [bun add](https://bun.sh/docs/cli/add)
- [bun remove](https://bun.sh/docs/cli/remove)
- [bun update](https://bun.sh/docs/cli/update)

### Available Scripts

All commands in scripts are available in: [package.json](/package.json)

```bash
# Development
bun dev                 # Start development server
bun build               # Build the application
bun start               # Start production server
bun lint                # Run ESLint checks

# Formatting
bun prettier:check      # Check code formatting
bun prettier:write      # Fix code formatting

# Testing
bun test:jest           # Run Jest tests
bun test:jest:coverage  # Run Jest tests with coverage
bun test:jest:watch     # Run Jest tests in watch mode

# E2E Testing
bun test:e2e            # Run Playwright tests
bun test:e2e:ui         # Run Playwright tests with UI
bun test:e2e:chrome     # Run Playwright tests in Chrome only
bun test:e2e:codegen    # Generate Playwright tests
bun test:e2e:debug      # Run Playwright tests in debug mode

# Dependencies
bun deps:outdated       # Check outdated dependencies
bun clean               # Remove node_modules
bun clean:install       # Remove node_modules and reinstall dependencies
```

### Install Dependencies

Use `bun` to install the necessary packages.

```bash
bun install
```

### Run Development Mode

Run the app in development mode.

```bash
bun dev
```

To view the project in the browser, open: [http://localhost:3000](http://localhost:3000)

## 📦 Find Outdated Dependencies

Find out which dependencies are outdated.

```bash
bun outdated
```

![bun - outdated](/readme-images/development/bun/bun-outdated.webp)

## 💅 Prettier

This project uses [Prettier](https://prettier.io/) for code formatting.

### Check Code

Check if the code is formatted correctly.

```bash
bun prettier:check
```

The files that are not formatted correctly will be listed in the terminal as `[warn], error`.

![bun - prettier check - warn](/readme-images/development/bun/bun-prettier-check-warn.webp)

If all files are formatted correctly, terminal will show this message.

![bun - prettier check - ok](/readme-images/development/bun/bun-prettier-check-ok.webp)

### Format Code

In case there are files that are not formatted correctly:

- There will be a warning in the terminal: `[warn], error`
- Format the code in files using the Prettier command.

```bash
bun prettier:write
```

Once done, you can check the code formatting running again the command: `bun prettier:check`

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
