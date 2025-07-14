# 📦 Dependencies

This document provides a comprehensive overview of all packages used in the project, including their purpose and links to their official documentation.

**Table of Contents:**

- [📦 Dependencies](#-dependencies)
  - [🎯 Production Dependencies](#-production-dependencies)
  - [🛠️ Development Dependencies](#️-development-dependencies)
  - [📋 Package Categories](#-package-categories)
    - [Core Framework](#core-framework)
    - [MDX & Content](#mdx--content)
    - [UI Components](#ui-components)
    - [Utilities](#utilities)
    - [Testing](#testing)
    - [Development Tools](#development-tools)
    - [Build Tools](#build-tools)

---

## 🎯 Production Dependencies

These packages are required for the application to run in production:

### Core Framework

**[react](https://reactjs.org/)** - JavaScript library for building user interfaces

**[react-dom](https://reactjs.org/)** - React package for working with the DOM

**[next](https://nextjs.org/)** - React framework for production _(in devDependencies but used in production)_

### MDX & Content

**[@mdx-js/loader](https://github.com/mdx-js/mdx)** - Webpack loader for MDX files (Markdown + JSX)

**[@mdx-js/react](https://github.com/mdx-js/mdx)** - React components for MDX content

**[@next/mdx](https://github.com/vercel/next.js/tree/canary/packages/next-mdx)** - Official Next.js MDX plugin

**[next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)** - Remote MDX content loading for Next.js

**[gray-matter](https://github.com/jonschlinkert/gray-matter)** - Front matter parser for Markdown files

**[remark-frontmatter](https://github.com/remarkjs/remark-frontmatter)** - Remark plugin for frontmatter support

**[remark-mdx-frontmatter](https://github.com/remcohaszing/remark-mdx-frontmatter)** - Remark plugin for MDX frontmatter

**[rehype-pretty-code](https://github.com/rehypejs/rehype-pretty-code)** - Syntax highlighting for code blocks

**[shiki](https://github.com/shikijs/shiki)** - Syntax highlighter using VS Code themes

### UI Components

**[flowbite](https://flowbite.com/)** - Tailwind CSS component library

**[flowbite-react](https://github.com/themesberg/flowbite-react)** - React components for Flowbite

**[react-tooltip](https://github.com/ReactTooltip/react-tooltip)** - React tooltip component

### Progressive Web App

**[@ducanh2912/next-pwa](https://github.com/ducanh2912/next-pwa)** - Progressive Web App (PWA) support for Next.js applications

### Third-Party Integrations

**[@next/third-parties](https://github.com/vercel/next.js/tree/canary/packages/next-third-parties)** - Next.js third-party library integration helpers

### Utilities

**[braces](https://github.com/micromatch/braces)** - Bash-style brace expansion utilities

**[browserslist](https://github.com/browserslist/browserslist)** - Browser compatibility configuration

**[cross-spawn](https://github.com/moxystudio/node-cross-spawn)** - Cross-platform child process spawning

**[lunarphase-js](https://github.com/jasonsturges/lunarphase-js)** - JavaScript lunar phase calculator

**[micromatch](https://github.com/micromatch/micromatch)** - Glob pattern matching for JavaScript

**[sharp](https://sharp.pixelplumbing.com/)** - High-performance image processing

### Type Definitions

**[@types/hast](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/hast)** - TypeScript definitions for HAST (Hypertext Abstract Syntax Tree)

**[@types/mdx](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mdx)** - TypeScript definitions for MDX

**[ts-jest](https://github.com/kulshekhar/ts-jest)** - TypeScript preprocessor for Jest

---

## 🛠️ Development Dependencies

These packages are only used during development and are not included in the production build:

### Core Development

**[next](https://nextjs.org/)** - React framework for production

**[typescript](https://www.typescriptlang.org/)** - TypeScript language and compiler

**[ts-node](https://github.com/TypeStrong/ts-node)** - TypeScript execution environment for Node.js

### Testing Framework

**[jest](https://jestjs.io/)** - JavaScript testing framework

**[jest-environment-jsdom](https://github.com/jsdom/jsdom)** - JSDOM environment for Jest

**[@happy-dom/jest-environment](https://github.com/capricorn86/happy-dom)** - DOM environment for Jest testing

**[@playwright/test](https://playwright.dev/)** - End-to-end testing framework

### Testing Libraries

**[@testing-library/jest-dom](https://github.com/testing-library/jest-dom)** - Jest DOM testing utilities

**[@testing-library/react](https://github.com/testing-library/react-testing-library)** - React testing utilities

**[identity-obj-proxy](https://github.com/keyz/identity-obj-proxy)** - Mock object for Jest testing

### Code Quality

**[eslint](https://eslint.org/)** - JavaScript/TypeScript linter

**[eslint-config-next](https://github.com/vercel/next.js/tree/canary/packages/eslint-config-next)** - ESLint configuration for Next.js

**[prettier](https://prettier.io/)** - Code formatter

**[prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)** - Prettier plugin for Tailwind CSS

### Styling

**[tailwindcss](https://tailwindcss.com/)** - Utility-first CSS framework

**[autoprefixer](https://github.com/postcss/autoprefixer)** - PostCSS plugin to add vendor prefixes

**[postcss](https://postcss.org/)** - CSS transformation tool

### Build & Deployment

**[@netlify/plugin-nextjs](https://github.com/netlify/netlify-plugin-nextjs)** - Netlify deployment plugin for Next.js

### Type Definitions

**[@types/bun](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/bun)** - TypeScript definitions for Bun runtime

**[@types/jest](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jest)** - TypeScript definitions for Jest

**[@types/node](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/node)** - TypeScript definitions for Node.js

**[@types/react](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react)** - TypeScript definitions for React

**[@types/react-dom](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-dom)** - TypeScript definitions for React DOM

### MDX Components

**[mdx-components](https://github.com/mdx-js/mdx/tree/main/packages/mdx-components)** - MDX component utilities

---

## 📋 Package Categories

### Core Framework

- **React ecosystem**: `react`, `react-dom`, `next`
- **TypeScript**: `typescript`, `ts-node`, `ts-jest`

### MDX & Content

- **MDX processing**: `@mdx-js/loader`, `@mdx-js/react`, `@next/mdx`, `next-mdx-remote`
- **Content parsing**: `gray-matter`, `remark-frontmatter`, `remark-mdx-frontmatter`
- **Syntax highlighting**: `rehype-pretty-code`, `shiki`

### UI Components

- **Component library**: `flowbite`, `flowbite-react`
- **Interactive components**: `react-tooltip`

### Utilities

- **File processing**: `braces`, `micromatch`, `sharp`
- **System utilities**: `cross-spawn`, `browserslist`
- **Specialized**: `lunarphase-js`

### Testing

- **Framework**: `jest`, `@playwright/test`
- **Environment**: `jest-environment-jsdom`, `@happy-dom/jest-environment`
- **Libraries**: `@testing-library/jest-dom`, `@testing-library/react`
- **Utilities**: `identity-obj-proxy`

### Development Tools

- **Linting**: `eslint`, `eslint-config-next`
- **Formatting**: `prettier`, `prettier-plugin-tailwindcss`
- **Build**: `autoprefixer`, `postcss`

### Build Tools

- **Styling**: `tailwindcss`
- **Deployment**: `@netlify/plugin-nextjs`
- **PWA**: `@ducanh2912/next-pwa`

---

**Note**: All packages are regularly updated to their latest stable versions. Use `bun deps:outdated` to check for available updates.
