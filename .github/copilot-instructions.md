# GitHub Copilot Instructions

Copilot use this file to understand how to assist with your code contributions.

## About This Project

This is a React Next.js portfolio website written in TypeScript, using Bun as the runtime and package manager. It includes comprehensive testing with Jest and Playwright, and is deployed as a Progressive Web App. Please follow these guidelines when contributing:

## Code Standards

### Required Before Each Commit

- Run `bun prettier:write` before committing any changes to ensure proper code formatting
- This will format all files according to the project's Prettier configuration with Tailwind CSS plugin
- Ensure TypeScript compilation passes with `bun next build`
- Run linting with `bun next lint` to catch potential issues

### Development Flow

- **Development**: `bun dev` - Start Next.js development server
- **Build**: `bun build` - Create production build
- **Lint**: `bun lint` - Run ESLint on the codebase
- **Format**: `bun prettier:check` or `bun prettier:write` - Check/apply code formatting
- **Unit Tests**: `bun test:jest` or `bun test:jest:coverage` for coverage reports
- **E2E Tests**: `bun test:e2e` - Run Playwright end-to-end tests
- **Full CI check**: Build + lint + format check + all tests

## Repository Structure

- `app/`: Next.js App Router pages and layouts (main application structure)
- `components/`: Reusable React components organized by feature/type
  - `analytics/`: Tracking and analytics components
  - `icons/`: SVG icon components
  - `layout/`: Layout-related components (header, footer, navigation)
  - `pages/`: Page-specific components
  - `shared/`: Shared utility components
- `lib/`: Core utilities, hooks, and data management
  - `data/`: Static data and content
  - `hooks/`: Custom React hooks
  - `utils/`: Utility functions and helpers
- `localization/`: Internationalization data and configuration
- `public/`: Static assets (images, icons, manifest files)
- `__tests__/`: Test files organized by testing framework
  - `jest/`: Unit and integration tests
  - `playwright/`: End-to-end test suites
- `__mocks__/`: Jest mock files and test utilities
- `readme-images/`: Documentation images

## Code Style & Formatting

### General Guidelines

- Use **TypeScript** with strict type checking
- Follow **ESLint** configuration defined in `.eslintrc.json`
- Use **Prettier** for code formatting (config in `.prettierrc`)
- Prefer **functional components** with hooks over class components
- Use **arrow functions** for component definitions
- Follow **conventional commits** format for commit messages

### Import Order

Organize imports in this specific order:

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

### Example Import Structure

```typescript
// 1. Third-Party Library Imports
import React from 'react'
import { NextPage } from 'next'

// 2. Custom Hooks
import { useCustomHook } from '@/hooks/useCustomHook'

// 3. Components
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/layout/Header'

// 4. Data
import { projectsData } from '@/data/projects'

// 5. Utils
import { formatDate } from '@/utils/date'

// 6. Localization
import { translations } from '@/localization/en'

// 7. Utils - Constants
import { SITE_CONFIG } from '@/utils/constants'

// 8. Utils - Helpers and Interfaces
import { ProjectInterface } from '@/utils/interfaces'

// 9. Images
import heroImage from '@/public/images/hero.webp'

// 10. CSS
import styles from './Component.module.css'
```

## File Naming Conventions

- Use **PascalCase** for file names: `ScanMyContactQR.tsx`
- Use **PascalCase** for component names: `ScanMyContactQR`
- Use **camelCase** for variables and functions: `myVariable`, `myFunction`
- Use **UPPER_CASE** for constants: `MY_CONSTANT`

## Component Structure

### Functional Components

```typescript
import React from 'react'

interface ComponentProps {
  title: string
  isVisible?: boolean
}

export const MyComponent: React.FC<ComponentProps> = ({ title, isVisible = true }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  )
}
```

### Page Components (Next.js)

```typescript
import { NextPage } from 'next'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
}

const MyPage: NextPage = () => {
  return (
    <main>
      <h1>Page Content</h1>
    </main>
  )
}

export default MyPage
```

## Key Guidelines

### TypeScript & React Best Practices

1. Use TypeScript strictly - leverage the configured strict mode settings
2. Follow React functional component patterns with hooks
3. Use Next.js App Router conventions for routing and layouts
4. Implement proper component composition and prop drilling avoidance
5. Use custom hooks for shared logic and state management

### Code Quality & Testing

1. Write unit tests for new functionality using Jest and React Testing Library
2. Add E2E tests for critical user flows using Playwright
3. Use data-testid attributes for test selectors when needed
4. Follow the existing test structure and naming conventions
5. Maintain test coverage and avoid breaking existing tests

### Styling & UI

1. Use Tailwind CSS for styling - follow utility-first approach
2. Leverage Flowbite components when appropriate
3. Maintain responsive design principles (mobile-first)
4. Follow the existing design system and component patterns
5. Ensure accessibility standards (ARIA labels, semantic HTML)

### Performance & PWA

1. Optimize images using Next.js Image component
2. Follow PWA best practices - maintain manifest and service worker
3. Use proper lazy loading and code splitting techniques
4. Monitor bundle size and performance metrics
5. Implement proper SEO practices (metadata, robots.txt, sitemap)

### Development Environment

1. Use Bun for package management and script execution
2. Follow the configured ESLint and Prettier rules
3. Use the provided VS Code settings and extensions if available
4. Document complex logic and provide meaningful commit messages
5. Update documentation in `README.md` files when adding new features

## Tailwind CSS Guidelines

- Use **Tailwind CSS classes** for styling
- Prefer **utility classes** over custom CSS
- Use **responsive design** with Tailwind's responsive prefixes
- Follow **mobile-first** approach
- Use **semantic color names** from the Tailwind palette

### Example Tailwind Usage

```typescript
<div className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
  <h1 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
    Title
  </h1>
</div>
```

## Testing Guidelines

### Unit Tests (Jest)

- Place test files in `__tests__/jest` directory
- Use `.test.ts` extension
- Use **React Testing Library** for component testing
- Follow **AAA pattern** (Arrange, Act, Assert)

### E2E Tests (Playwright)

- Place test files in `__tests__/playwright` directory
- Use `.spec.ts` extension
- Use **page object model** for better maintainability
- Test **critical user journeys**

## Development Workflow

### Branch Naming

Use prefixes followed by descriptive names:

```txt
prefix/descriptive-name

Available branch prefixes:
- build/branch-name - Changes that affect the build system or external dependencies
- chore/branch-name - Maintenance tasks that don't modify src or test files
- cicd/branch-name - Changes to CI/CD configuration files and scripts
- docs/branch-name - Documentation only changes
- feature/branch-name - New features
- fix/branch-name - Bug fixes
- hotfix/branch-name - Critical fixes that need immediate attention
- localization/branch-name - Internationalization and localization changes
- performance/branch-name - Performance improvements
- refactor/branch-name - Code changes that neither fix bugs nor add features
- revert/branch-name - Reverts a previous commit
- style/branch-name - Code style changes (formatting, missing semicolons, etc.)
- test/branch-name - Test additions/updates (both unit and E2E)

Examples:
- feature/responsive-navigation - Add responsive navigation menu
- fix/button-hover-state - Fix hover state styling issue
- docs/update-readme - Update installation instructions
- test/user-authentication - Add user authentication tests
- performance/optimize-images - Optimize image loading with lazy loading
- style/format-components - Format code with Prettier
```

### Commit Messages

Follow **Conventional Commits** format:

```txt
Expected format: type(scope): EMOJI description

Available commit message types:

- aria: ♿ Website accessibility
- build: 🏗️ - Changes that affect the build system or external dependencies
- chore: 🛠️ - Maintenance tasks that don't modify src or test files
- cicd: ⚙️ - Changes to CI/CD configuration files and scripts
- docs: 📝 - Documentation only changes
- feature: ✨ - New features
- fix: 🐛 - Bug fixes
- hotfix: 🔥 - Critical fixes that need immediate attention
- localization: 🇬🇧 - Internationalization and localization changes
- performance: 🚀 - Performance improvements
- refactor: 👷 - Code changes that neither fix bugs nor add features
- revert: ⏪ - Reverts a previous commit
- style: 🎨 - Code style changes (formatting, missing semicolons, etc.)
- test(e2e): 🎭 - End-to-end test changes
- test(jest): 🃏 - Unit test changes

Examples:

- aria(navigation): ♿ Add ARIA labels to main navigation menu
- build(dependencies): 🏗️ Update Next.js to version 15.2
- chore(cleanup): 🛠️ Remove unused dependencies from package.json
- cicd(github): ⚙️ Add automated deployment workflow
- docs(readme): 📝 Update installation instructions for Bun
- feature(portfolio): ✨ Add new project showcase component
- fix(responsive): 🐛 Fix mobile navigation menu collapse issue
- hotfix(security): 🔥 Patch XSS vulnerability in contact form
- localization(czech): 🇬🇧 Add Czech language support for portfolio
- performance(images): 🚀 Optimize WebP image loading with lazy loading
- refactor(components): 👷 Extract reusable Button component
- revert(navigation): ⏪ Revert navigation changes that broke mobile layout
- style(prettier): 🎨 Format all TypeScript files with Prettier
- test(e2e): 🎭 Add Playwright tests for portfolio navigation
- test(jest): 🃏 Add unit tests for utility functions"
```

## Performance Considerations

- Use **Next.js Image component** for optimized images
- Implement **lazy loading** for components below the fold
- Use **dynamic imports** for code splitting
- Minimize **bundle size** and optimize **Core Web Vitals**
- Use **WebP format** for images when possible

## Accessibility (a11y)

- Use **semantic HTML** elements
- Include **ARIA attributes** where needed
- Ensure **keyboard navigation** works properly
- Maintain **proper color contrast**
- Use **alt text** for images
- Test with **screen readers**

## API and Data Handling

- Use **fetch** with proper error handling
- Implement **TypeScript interfaces** for all API responses
- Use **Next.js API routes** for backend functionality
- Handle **loading states** and **error states** properly

## Security Considerations

- Implement **Content Security Policy** (CSP)
- Use **HTTPS** everywhere
- Sanitize **user inputs**
- Follow **OWASP** security guidelines
- Regular **dependency updates** via Dependabot

## Documentation

- Update **README files** when adding new features
- Include **inline comments** for complex logic
- Document **API endpoints** and **component props**
- Keep **changelog** updated for releases

## Code Review Guidelines

- Follow **existing patterns** in the codebase
- Ensure **tests pass** before submitting PRs
- Use **meaningful commit messages**
- Link **related issues** in PR descriptions
- Request **code reviews** from team members

## Technology Stack

- **Runtime**: Bun
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS with Flowbite components (transitioning away from)
- **Testing**: Jest (unit) + Playwright (E2E)
- **Deployment**: Netlify with PWA capabilities and automated CI/CD
- **Analytics**: Google Analytics + Smartlook
