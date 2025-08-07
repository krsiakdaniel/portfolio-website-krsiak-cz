# 🛠️ Development

Development environment for the project.

**Table of Contents:**

- [🛠️ Development](#-development)
  - [📋 Prerequisites](#-prerequisites)
    - [Software Requirements](#software-requirements)
    - [Installation Steps](#installation-steps)
    - [Verification](#verification)
    - [Troubleshooting](#troubleshooting)
  - [💻 Commands](#-commands)
    - [Bun Commands](#bun-commands)
    - [Bun Configuration](#bun-configuration)
    - [Available Scripts](#available-scripts)
    - [Install Dependencies](#install-dependencies)
    - [Specify Node Version](#specify-node-version)
    - [Run Development Mode](#run-development-mode)
  - [📦 Find Outdated Dependencies](#-find-outdated-dependencies)
  - [💅 Prettier](#-prettier)
    - [Check Code](#check-code)
    - [Format Code](#format-code)
  - [🤖 GitHub Copilot Instructions](#-github-copilot-instructions)
  - [🔗 Imports Order in Files](#-imports-order-in-files)
    - [Example](#example)
  - [🌍 Environment Variables](#-environment-variables)
    - [Local Environment Setup](#local-environment-setup)
    - [Environment Variables Usage](#environment-variables-usage)
    - [Accessing Environment Variables](#accessing-environment-variables)
    - [Environment Files Precedence](#environment-files-precedence)
  - [🐕 Husky and Pre-commit Hook](#-husky-and-pre-commit-hook)
    - [What Runs on Every Commit](#what-runs-on-every-commit)
    - [Emergency Bypass](#emergency-bypass)
    - [Local Commands to Replicate CI](#local-commands-to-replicate-ci)
    - [Development Workflow](#development-workflow)

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your development machine:

### Software Requirements

#### Required

- **Node.js**: `v23.8.0` (specified in `.nvmrc`)
  - Download from [nodejs.org](https://nodejs.org/)
  - Or use Node Version Manager (NVM) - recommended
- **Bun**: Latest stable version
  - Install from [bun.sh](https://bun.sh/)
  - Used as package manager and runtime
- **Git**: For version control
  - Download from [git-scm.com](https://git-scm.com/)

#### Optional but Recommended

- **NVM (Node Version Manager)**:
  - Link to [nvm-sh/nvm](https://github.com/nvm-sh/nvm)
- **VS Code**: For development
  - Download from [code.visualstudio.com](https://code.visualstudio.com/)
  - Recommended extensions: TypeScript, React, Tailwind CSS

### Installation Steps

1. **Install Node.js using NVM** (recommended):

   ```bash
   # Install NVM (if not already installed)
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

   # Use the project's Node version
   nvm install 23.8.0
   nvm use 23.8.0

   # Or simply use the .nvmrc file
   nvm use
   ```

2. **Install Bun**:

   ```bash
   # macOS/Linux
   curl -fsSL https://bun.sh/install | bash

   # Verify installation
   bun --version
   ```

3. **Clone the repository**:

   ```bash
   git clone https://github.com/krsiakdaniel/portfolio-website-krsiak-cz.git
   cd portfolio-website-krsiak-cz
   ```

4. **Install dependencies**:

   ```bash
   bun install
   ```

5. **Start development server**:

   ```bash
   bun dev
   ```

6. **Open in browser**:
   - Navigate to [http://localhost:3000](http://localhost:3000)

### Verification

Run these commands to verify your setup:

```bash
node --version    # Should output: v23.8.0
bun --version     # Should output: 1.x.x (latest)
git --version     # Should output: git version 2.x.x
```

### Troubleshooting

- **Node version issues**: Use `nvm use 23.8.0` to switch to the correct version
- **Permission errors**: Avoid using `sudo` with Bun commands
- **Port 3000 busy**: Use `bun dev -- --port 3001` to run on a different port
- **Dependencies issues**: Try `bun clean:install` to reinstall dependencies

## 💻 Commands

This project uses `bun` as package manager: <https://bun.sh/>

![bun - logo](/readme-images/development/bun/bun-logo.webp)

### Bun Commands

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

### Bun Configuration

The project includes a [bunfig.toml](/bunfig.toml) file that configures Bun's behavior:

- **JSX Configuration**: Configured for React with TypeScript
- **Log Level**: Set to debug for better development experience
- **Package Management**: Includes optional and dev dependencies

For more details about Bun configuration, see: [Bun Configuration](https://bun.sh/docs/runtime/bunfig)

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

### Specify Node Version

Ensure the correct [Node](https://nodejs.org/en) version is used for the project by creating `.nvmrc` file in the root directory with the desired version.

File `.nvmrc` content:

```bash
v23.8.0
```

Use `nvm` command to switch to the specified Node version before running the project.

```bash
nvm use 23
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

## 🤖 GitHub Copilot Instructions

When working with GitHub Copilot, these instructions help ensure generated code follows the project's conventions and maintains high code quality standards.

📁 **File Location:** [.github/copilot-instructions.md](/.github/copilot-instructions.md)

The instructions file contains:

- **Code Standards**: Pre-commit requirements and development workflow
- **Project Structure**: Detailed repository organization
- **Coding Guidelines**: TypeScript, React, and Next.js best practices
- **Import Order**: Standardized import organization with examples
- **Component Structure**: Templates for functional and page components
- **Branch Naming**: Consistent naming conventions with prefixes
- **Commit Messages**: Conventional commits format with emojis
- **Testing Guidelines**: Jest and Playwright testing standards
- **Performance & Accessibility**: Optimization and a11y best practices

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

## 🌍 Environment Variables

This project uses environment variables for configuration of various services and features.

### Local Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```bash
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-google-analytics-id
NEXT_PUBLIC_SMARTLOOK_ID=your-smartlook-id

# CI/CD
CI=true|false  # Used in Playwright testing configuration
```

### Environment Variables Usage

- **Development**: Variables in `.env.local` are used during local development
- **Production**: Environment variables should be set in your hosting platform (e.g., Netlify)
- **CI/CD**: Variables for CI workflows are defined in GitHub Actions workflow files

### Accessing Environment Variables

In Next.js, environment variables can be accessed in different ways:

```typescript
// Server Components/Pages
// Available only on the server
const apiKey = process.env.API_SECRET_KEY

// Client Components
// Must be prefixed with NEXT_PUBLIC_
const analyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
```

### Environment Files Precedence

Next.js loads environment variables from the following files, in order:

1. `.env.$(NODE_ENV).local` (e.g. `.env.development.local`)
2. `.env.local` (except in test environment)
3. `.env.$(NODE_ENV)` (e.g. `.env.production`)
4. `.env`

> **Note**: `.env*.local` files should be included in your `.gitignore` to avoid exposing sensitive information.

For more information, see the [Next.js documentation on environment variables](https://nextjs.org/docs/basic-features/environment-variables).

## 🐕 Husky and Pre-commit Hook

This guide explains the development workflow and quality gates that run automatically on every commit.

### What Runs on Every Commit

Our pre-commit hooks automatically run the following quality checks:

1. **Lint Staged Files** - `bun lint-staged`
   - Runs ESLint and Prettier on staged files
   - Automatically fixes formatting issues where possible

2. **Unit Tests** - `bun test:jest`
   - Runs Jest test suite
   - Ensures all tests pass before allowing commit

3. **End-to-End Tests** - `bun run test:e2e:chrome`
   - Runs Playwright E2E tests in Chrome
   - Validates critical user journeys

4. **Optional Commit Message Reminder**
   - Provides helpful reminders for commit message format
   - Can be configured via commit-msg hook

### Emergency Bypass

In emergency situations, you can bypass the pre-commit hooks using:

```bash
git commit --no-verify
```

⚠️ **Use sparingly!** This should only be used when:

- Urgent hotfix is needed
- CI is temporarily broken
- You're committing work-in-progress for collaboration

### Local Commands to Replicate CI

To manually run the same checks that happen in CI:

```bash
# Run lint-staged (same as pre-commit)
bun lint-staged

# Unit tests
bun test:jest

# E2E tests
bun test:e2e:chrome
```

### Development Workflow

1. Create a new branch from `master`
2. Make your changes
3. Run tests locally (optional, but recommended)
4. Stage your changes: `git add .`
5. Commit: `git commit -m "your message"`
   - Pre-commit hooks will run automatically
   - Fix any issues that arise
6. Push your branch and create a PR
