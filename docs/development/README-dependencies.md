# 📦 Dependencies

This document provides a comprehensive overview of all packages used in the project, including their purpose and links to their official documentation.

**Table of Contents:**

- [📦 Dependencies](#-dependencies)
  - [🎯 Production Dependencies](#-production-dependencies)
  - [🛠️ Development Dependencies](#️-development-dependencies)
    - [Core Framework](#core-framework)
    - [UI Components](#ui-components)
    - [Progressive Web App](#progressive-web-app)
    - [Third-Party Integrations](#third-party-integrations)
    - [Utilities](#utilities)
    - [Type Definitions (Production)](#type-definitions-production)
    - [Core Development](#core-development)
    - [Testing](#testing)
    - [Code Quality](#code-quality)
    - [Styling](#styling)
    - [Build & Deployment](#build--deployment)
    - [Type Definitions (Development)](#type-definitions-development)

## 🎯 Production Dependencies

These packages are required for the application to run in production:

### Core Framework

- **[react](https://react.dev/)** - JavaScript library for building user interfaces
- **[react-dom](https://reactjs.org/)** - React package for working with the DOM

### UI Components

- **[flowbite](https://flowbite.com/)** - Tailwind CSS component library
- **[react-tooltip](https://github.com/ReactTooltip/react-tooltip)** - React tooltip component

### Progressive Web App

- **[@ducanh2912/next-pwa](https://github.com/ducanh2912/next-pwa)** - Progressive Web App (PWA) support for Next.js applications

### Third-Party Integrations

- **[@next/third-parties](https://github.com/vercel/next.js/tree/canary/packages/next-third-parties)** - Next.js third-party library integration helpers

### Utilities

- **[lunarphase-js](https://github.com/jasonsturges/lunarphase-js)** - JavaScript lunar phase calculator
- **[sharp](https://sharp.pixelplumbing.com/)** - High-performance image processing

### Type Definitions (Production)

- **[ts-jest](https://github.com/kulshekhar/ts-jest)** - TypeScript preprocessor for Jest

## 🛠️ Development Dependencies

These packages are only used during development and are not included in the production build:

### Core Development

- **[next](https://nextjs.org/)** - React framework for production
- **[typescript](https://www.typescriptlang.org/)** - TypeScript language and compiler
- **[ts-node](https://github.com/TypeStrong/ts-node)** - TypeScript execution environment for Node.js

### Testing

- **[jest](https://jestjs.io/)** - JavaScript testing framework
- **[@happy-dom/jest-environment](https://github.com/capricorn86/happy-dom)** - DOM environment for Jest testing
- **[@playwright/test](https://playwright.dev/)** - End-to-end testing framework
- **[@testing-library/jest-dom](https://github.com/testing-library/jest-dom)** - Jest DOM testing utilities
- **[@testing-library/react](https://github.com/testing-library/react-testing-library)** - React testing utilities
- **[identity-obj-proxy](https://github.com/keyz/identity-obj-proxy)** - Mock object for Jest testing

### Code Quality

- **[eslint](https://eslint.org/)** - JavaScript/TypeScript linter
- **[eslint-config-next](https://github.com/vercel/next.js/tree/canary/packages/eslint-config-next)** - ESLint configuration for Next.js
- **[prettier](https://prettier.io/)** - Code formatter
- **[prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)** - Prettier plugin for Tailwind CSS

### Styling

- **[tailwindcss](https://tailwindcss.com/)** - Utility-first CSS framework
- **[autoprefixer](https://github.com/postcss/autoprefixer)** - PostCSS plugin to add vendor prefixes
- **[postcss](https://postcss.org/)** - CSS transformation tool

### Build & Deployment

- **[@netlify/plugin-nextjs](https://github.com/netlify/netlify-plugin-nextjs)** - Netlify deployment plugin for Next.js

### Type Definitions (Development)

- **[@types/bun](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/bun)** - TypeScript definitions for Bun runtime
- **[@types/jest](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jest)** - TypeScript definitions for Jest
- **[@types/node](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/node)** - TypeScript definitions for Node.js
- **[@types/react](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react)** - TypeScript definitions for React
- **[@types/react-dom](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-dom)** - TypeScript definitions for React DOM
