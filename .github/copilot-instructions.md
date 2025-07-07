# GitHub Copilot Custom Instructions

This file contains custom instructions for GitHub Copilot to help generate code that follows the project's conventions and best practices.

## Technology Stack

This is a **Next.js portfolio website** built with:

- **Language:** TypeScript (strict mode enabled)
- **Framework:** React 18 + Next.js 15
- **Styling:** Tailwind CSS
- **Component Library:** Flowbite React (transitioning away from)
- **Package Manager:** Bun (preferred) or npm as fallback
- **Testing:** Jest (unit tests) + Playwright (E2E tests)
- **Deployment:** Netlify with automated CI/CD

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

- Use **kebab-case** for file names: `my-component.tsx`
- Use **PascalCase** for component names: `MyComponent`
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

- Place test files in `__tests__` directory
- Use `.test.tsx` or `.test.ts` extensions
- Use **React Testing Library** for component testing
- Follow **AAA pattern** (Arrange, Act, Assert)

### E2E Tests (Playwright)

- Place test files in `tests` directory with `.spec.ts` extension
- Use **page object model** for better maintainability
- Test **critical user journeys**

## Development Workflow

### Commands

- `bun dev` - Start development server
- `bun build` - Build production bundle
- `bun test:jest` - Run unit tests
- `bun test:e2e` - Run E2E tests
- `bun prettier:check` - Check code formatting
- `bun prettier:write` - Format code

### Branch Naming

Use prefixes followed by descriptive names:

- `feature/branch-name` - New features
- `fix/branch-name` - Bug fixes
- `refactor/branch-name` - Code refactoring
- `docs/branch-name` - Documentation updates
- `test/branch-name` - Test additions/updates
- `chore/branch-name` - Maintenance tasks

### Commit Messages

Follow **Conventional Commits** format:

```
type(scope): emoji description

Examples:
- feature(header): ✨ Add responsive navigation menu
- fix(button): 🐛 Fix hover state styling
- docs(readme): 📝 Update installation instructions
- test(login): ✅ Add user authentication tests
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

## Project Structure

```
├── app/                    # Next.js app directory
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── layout/           # Layout components
│   └── features/         # Feature-specific components
├── lib/                  # Utility libraries
├── localization/         # Internationalization
├── public/              # Static assets
├── __tests__/           # Unit tests
├── __mocks__/           # Test mocks
└── readme-images/       # Documentation images
```

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
