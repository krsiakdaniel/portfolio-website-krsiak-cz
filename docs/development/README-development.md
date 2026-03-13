# 🛠️ Development

Complete guide for setting up and working with the development environment for this Next.js portfolio website.

**Table of Contents:**

- [🎯 Technology Stack](#-technology-stack)
- [📋 Prerequisites](#-prerequisites)
- [💻 Commands](#-commands)
- [💅 Prettier](#-prettier)
- [🤖 GitHub Copilot Instructions](#-github-copilot-instructions)
- [🔗 Imports Order in Files](#-imports-order-in-files)
- [🌍 Environment Variables](#-environment-variables)
- [🔄 Development Workflow](#-development-workflow)
- [🐕 Husky and Pre-commit Hook](#-husky-and-pre-commit-hook)

---

## 🎯 Technology Stack

This project uses modern web technologies with the following stack:

- **Runtime**: Bun (preferred over npm/yarn/pnpm)
- **Framework**: Next.js 16 (App Router — not Pages Router)
- **UI Library**: React 19 (with React Compiler enabled)
- **Language**: TypeScript 5.9+ (strict mode enabled)
- **Styling**: Tailwind CSS v4
- **Testing**: Jest (unit) + Playwright (E2E)
- **Deployment**: Netlify with PWA capabilities and automated CI/CD
- **Analytics**: Google Analytics + Smartlook

### Key Features

- **Turbopack**: Default bundler in Next.js 16 (up to 10x faster Fast Refresh)
- **React Compiler**: Automatic component optimization enabled
- **TypeScript Strict Mode**: Enhanced type safety and code quality
- **Automated Formatting**: Prettier with import sorting plugin
- **Pre-commit Hooks**: Quality gates run automatically on every commit

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your development machine:

### Software Requirements

#### Required

- **Node.js**: >= `24.0.0` (Active LTS) — managed via Volta
  - Latest: `v24.14.0`
  - Download from [nodejs.org](https://nodejs.org/)
  - Or use Volta (recommended) or Node Version Manager (NVM)
- **Bun**: >= `1.2.0`
  - Install from [bun.sh](https://bun.sh/)
  - Used as package manager and runtime
- **Git**: For version control
  - Download from [git-scm.com](https://git-scm.com/)

#### Optional but Recommended

- **Volta** (Node.js version manager) - currently in use:
  - Link to [volta.sh](https://volta.sh/)
- **NVM (Node Version Manager)** - alternative:
  - Link to [nvm-sh/nvm](https://github.com/nvm-sh/nvm)
- **VS Code**: For development
  - Download from [code.visualstudio.com](https://code.visualstudio.com/)
  - Recommended extensions: TypeScript, React, Tailwind CSS

### Installation Steps

1. **Install Node.js using Volta** (currently in use):

   ```bash
   # Install Volta (if not already installed)
   curl https://get.volta.sh | bash

   # Install Node.js 24 LTS
   volta install node@24

   # Verify installation
   node --version  # Should show v24.x.x
   ```

   Or using NVM:

   ```bash
   # Install NVM (if not already installed)
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

   # Use the project's Node version from .nvmrc
   nvm install
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
node --version    # Should output: v24.x.x (LTS)
bun --version     # Should output: 1.x.x (latest)
git --version     # Should output: git version 2.x.x
```

### Troubleshooting

- **Node version issues**: Use `volta install node@24` or `nvm use` to switch to the correct version
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
bun dev                 # Start Next.js development server (Turbopack default)
bun build               # Create production build
bun start               # Start production server

# Code Quality
bun lint                # Run ESLint checks
bun lint:fix            # Run ESLint with auto-fix
bun prettier:check      # Check code formatting
bun prettier:write      # Fix code formatting
bun type-check          # Run TypeScript type checking

# Testing - Unit
bun test:jest           # Run Jest tests
bun test:jest:coverage  # Run Jest tests with coverage
bun test:jest:watch     # Run Jest tests in watch mode

# Testing - E2E
bun test:e2e            # Run Playwright tests
bun test:e2e:ui         # Run Playwright tests with UI
bun test:e2e:chrome     # Run Playwright tests in Chrome only
bun test:e2e:codegen    # Generate Playwright tests
bun test:e2e:debug      # Run Playwright tests in debug mode

# CI/CD Workflows
bun validate            # Run type-check + lint + unit tests
bun integrate           # Run full integration (includes E2E tests)
bun pre-commit          # Run pre-commit hooks
bun pre-commit-check    # Run pre-commit validation script

# Utilities
bun clean               # Remove node_modules
bun clean:install       # Remove node_modules and reinstall dependencies
bun deps:outdated       # Check outdated dependencies
```

### Install Dependencies

Use `bun` to install the necessary packages.

```bash
bun install
```

### Specify Node Version

Ensure the correct [Node](https://nodejs.org/en) version is used for the project. The `.nvmrc` file in the root directory specifies the version.

File `.nvmrc` content:

```bash
24
```

If using NVM, use the `nvm` command to switch to the specified Node version:

```bash
nvm use
```

If using Volta (currently in use), it will automatically use the correct version when you `cd` into the project directory.

### Run Development Mode

Run the app in development mode.

```bash
bun dev
```

To view the project in the browser, open: [http://localhost:3000](http://localhost:3000)

> **Note**: Turbopack is now the default bundler in Next.js 16. It provides up to 10x faster Fast Refresh and 2-5x faster production builds. Do not disable it unless there is a documented reason.

## 💅 Prettier

This project uses [Prettier](https://prettier.io/) for code formatting.

### Check Code

Check if the code is formatted correctly.

```bash
bun prettier:check
```

The files that are not formatted correctly will be listed in the terminal as `[warn], error`.

![bun - prettier check - error](/readme-images/development/bun/prettier-error.webp)

If all files are formatted correctly, terminal will show this message.

![bun - prettier check - ok](/readme-images/development/bun/prettier-ok.webp)

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

Import organization is **automated** via `@trivago/prettier-plugin-sort-imports` configured in `.prettierrc`. Imports are automatically sorted and grouped with blank lines on save.

**Automated grouping order:**

1. **React & Next.js** - Core framework imports
2. **Third-Party Modules** - External dependencies
3. **Custom Hooks** - `@/lib/hooks/`
4. **Components** - `@/components/`
5. **Data** - `@/lib/data/`
6. **Utils** - `@/lib/utils/` (includes constants, helpers, interfaces)
7. **Localization** - `@/localization/`
8. **Test Utilities** - `@/__tests__/`
9. **Public Assets** - `@/public/` (images, icons)
10. **Types** - `@/types/`
11. **Catch-all** - Other `@/` imports
12. **Relative Imports** - `./` or `../`
13. **Styles** - `.css` or `.scss` files

### Example Import Structure

```typescript
// Automatically formatted by Prettier on save:
import React from 'react'

import { NextPage } from 'next'

import { useCustomHook } from '@/lib/hooks/useCustomHook'

import { Header } from '@/components/layout/Header'
import { Button } from '@/components/ui/Button'

import { projectsData } from '@/lib/data/projects'

import { formatDate } from '@/lib/utils/date'

import { translations } from '@/localization/en'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import heroImage from '@/public/images/hero.webp'

import styles from './Component.module.css'
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

Next.js documentation: [environment variables](https://nextjs.org/docs/pages/guides/environment-variables)

## 🔄 Development Workflow

The recommended development workflow:

1. Create a new branch from `master`
2. Make your changes
3. Run tests locally (optional, but recommended): `bun validate`
4. Stage your changes: `git add .`
5. Commit: `git commit -m "your message"`
   - Pre-commit hooks will run automatically
   - Fix any issues that arise
6. Push your branch and create a PR

### Pre-commit Requirements

Before committing changes, ensure the following quality checks pass:

- **Format code**: `bun prettier:write`
- **Type checking**: `bun type-check` (or build with `bun build`)
- **Linting**: `bun lint`
- **Full validation**: `bun pre-commit` (runs all checks including tests)

> **Note**: Pre-commit hooks are configured to run automatically, but you can manually run these commands to catch issues early.

### CI/CD Notes

- The `.next` directory structure changed in Next.js 16 — a new `.next/dev` directory enables concurrent dev and build
- Update CI cache configuration to include `.next/dev` alongside `.next/cache`
- Full CI check command: `bun pre-commit`

## 🐕 Husky and Pre-commit Hook

This guide explains the development workflow and quality gates that run automatically on every commit.

- 📁 [README-pre-commit-setup.md](./README-pre-commit-setup.md)
