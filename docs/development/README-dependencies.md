# 📦 Dependencies

This document provides a comprehensive overview of all packages used in the project, including their purpose and links to their official documentation.

**Table of Contents:**

- [📦 Find Outdated Dependencies](#-find-outdated-dependencies)
- [🎯 Production Dependencies](#-production-dependencies)
- [🛠️ Development Dependencies](#️-development-dependencies)

## 📦 Find Outdated Dependencies

Find out which dependencies are outdated.

```bash
bun outdated
```

![bun - outdated](/readme-images/development/bun/bun-outdated-result.webp)

## 🎯 Production Dependencies

These packages are essential for the application to run in production and are included in the final bundle:

### Core Framework & React

- **[react](https://react.dev/)** - JavaScript library for building user interfaces with the latest React 19 features
- **[react-dom](https://react.dev/)** - React package for working with the DOM, enabling React components to render in web browsers

### Progressive Web App (PWA)

- **[@ducanh2912/next-pwa](https://github.com/ducanh2912/next-pwa)** - Next.js plugin that adds Progressive Web App capabilities including service workers, offline support, and app manifest generation

### Third-Party Integrations

- **[@next/third-parties](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)** - Official Next.js library for optimized third-party script loading (Google Analytics, Google Maps, etc.)

### UI Components & Interactions

- **[react-tooltip](https://react-tooltip.com/)** - Modern React tooltip component with TypeScript support and customizable styling options

### Utilities & Tools

- **[lunarphase-js](https://github.com/jasonsturges/lunarphase-js)** - JavaScript library for calculating lunar phases and moon position data
- **[sharp](https://sharp.pixelplumbing.com/)** - High-performance image processing library for Node.js, used by Next.js for image optimization

### Testing Support (Production)

- **[ts-jest](https://kulshekhar.github.io/ts-jest/)** - TypeScript preprocessor for Jest testing framework, enabling TypeScript test files

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
