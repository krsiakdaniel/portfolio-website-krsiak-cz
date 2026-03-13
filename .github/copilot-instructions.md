# GitHub Copilot Instructions

Copilot: use this file to understand how to assist with code contributions.

## About This Project

This is a React Next.js portfolio website written in TypeScript, using Bun as the runtime and package manager. It includes comprehensive testing with Jest and Playwright, and is deployed as a Progressive Web App. Please follow these guidelines when contributing.

## Technology Stack

- **Runtime**: Bun (preferred over npm/yarn/pnpm)
- **Framework**: Next.js 16 (App Router — not Pages Router)
- **UI Library**: React 19 (with React Compiler enabled)
- **Language**: TypeScript 5.9+ (strict mode enabled)
- **Styling**: Tailwind CSS v4
- **Testing**: Jest (unit) + Playwright (E2E)
- **Deployment**: Netlify with PWA capabilities and automated CI/CD
- **Analytics**: Google Analytics + Smartlook

### Minimum Requirements

- Node.js >= 24.0.0 (Active LTS)
- React >= 19.0.0
- TypeScript >= 5.9.0
- Bun >= 1.2.0

## Development Flow

```bash
bun dev                 # Start Next.js development server (Turbopack default)
bun build               # Create production build
bun lint                # Run ESLint (flat config)
bun prettier:check      # Check code formatting
bun prettier:write      # Apply code formatting
bun test:jest           # Run unit tests
bun test:jest:coverage  # Unit tests with coverage report
bun test:e2e            # Run Playwright end-to-end tests
bun pre-commit          # Full CI check: build + lint + format + all tests
```

> **Note**: Turbopack is now the default bundler in Next.js 16. It provides up to 10x faster Fast Refresh and 2-5x faster production builds. Do not disable it unless there is a documented reason.

## React 19 Features

This project uses **React 19** with the following modern patterns:

### React Compiler (Automatic Optimization)

- **React Compiler is enabled** — automatically optimizes components for performance
- Avoid manual `useMemo`, `useCallback`, and `React.memo` unless profiling shows a specific need
- The compiler handles memoization and re-render optimization automatically
- Focus on writing clean, readable code; let the compiler optimize

### React 19 Patterns

- Use `use` hook for reading context and promises (when needed)
- Form actions with `useActionState` for progressive enhancement
- `useOptimistic` for optimistic UI updates
- `useFormStatus` for form submission states
- Server Components are the default — use Client Components only when needed

### What's Different from React 18

- **No more forwardRef**: Use `ref` as a prop directly
- **Improved hydration**: Fewer mismatches, better error messages
- **Document metadata**: Use `<title>`, `<meta>`, `<link>` directly in components (Next.js handles this differently)
- **Asset loading**: New `preload`, `prefetch` APIs (use Next.js equivalents)

```typescript
// ✅ React 19 pattern — ref as prop (no forwardRef needed)
type ButtonProps = {
  ref?: React.Ref<HTMLButtonElement>
  children: React.ReactNode
}

const Button = ({ ref, children }: ButtonProps) => {
  return <button ref={ref}>{children}</button>
}

// ✅ Let React Compiler handle optimization
const ExpensiveComponent = ({ data }: { data: Data[] }) => {
  // No useMemo needed — compiler optimizes automatically
  const filtered = data.filter(item => item.active)
  const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name))

  return <div>{sorted.map(item => <Item key={item.id} {...item} />)}</div>
}

// ❌ Avoid manual memoization unless proven necessary
const OverOptimized = ({ data }: { data: Data[] }) => {
  const filtered = useMemo(() => data.filter(item => item.active), [data]) // unnecessary
  // ...
}
```

## Code Standards

### Required Before Each Commit

- Run `bun prettier:write` before committing any changes
- Ensure TypeScript compilation passes: `bun next build`
- Run linting: `bun lint`
- Run `bun pre-commit` for a full CI check

## Code Style & Formatting

### General Guidelines

- Use **TypeScript** with strict type checking — never use `any`, prefer `unknown` with type guards
- Follow **ESLint** flat config defined in `eslint.config.ts`
- Use **Prettier** for formatting (config in `.prettierrc`)
- Prefer **functional components** with hooks over class components
- Use **arrow functions** for component definitions
- Follow **conventional commits** format for commit messages

### TypeScript Strict Mode Patterns

```typescript
// Never use `any`
const data: any = response.json() // ❌

// Prefer `unknown` with type guards
const data: unknown = await response.json()
if (isProjectData(data)) { ... } // ✅

// Non-null assertion only when provably safe
document.getElementById('root')!  // ❌ avoid
const el = document.getElementById('root')
if (!el) throw new Error('Root element not found') // ✅

// Use `satisfies` for config objects
const config = {
  title: 'My Portfolio',
} satisfies SiteConfig // ✅
```

### Import Order

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

### Avoid Barrel Exports

```typescript
// ✅ Prefer: Direct imports
import { TextField } from '@/components/shared/TextField'
import { Button } from '@/components/ui/Button'

// ❌ Avoid: src/components/index.ts
export { Button } from './Button'
export { TextField } from './TextField'
```

Barrel exports hurt tree-shaking, slow TypeScript compilation, and make debugging harder.

## File Naming Conventions

| Type                    | Convention                  | Example               |
| ----------------------- | --------------------------- | --------------------- |
| Component files         | PascalCase                  | `ProjectCard.tsx`     |
| Component names         | PascalCase                  | `ProjectCard`         |
| Variables / functions   | camelCase                   | `formatDate`          |
| Constants               | UPPER_CASE                  | `SITE_CONFIG`         |
| Hooks                   | camelCase with `use` prefix | `useProjectData`      |
| Test files (Jest)       | `.test.ts`                  | `ProjectCard.test.ts` |
| Test files (Playwright) | `.spec.ts`                  | `navigation.spec.ts`  |

## Component Structure

### Server Components (default)

All components are Server Components by default in the App Router. Do not add `"use client"` unless the component requires browser APIs, event handlers, or React state/effects.

```typescript
// app/projects/page.tsx — Server Component, no directive needed
import { Metadata } from 'next'
import { ProjectCard } from '@/components/pages/ProjectCard'
import { projectsData } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My portfolio projects',
}

const ProjectsPage = async () => {
  return (
    <main>
      {projectsData.map(p => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </main>
  )
}

export default ProjectsPage
```

### Client Components

Keep `"use client"` boundaries as **deep in the component tree as possible**. Do not mark an entire page as a Client Component to handle one interactive element — extract only the interactive part.

```typescript
// components/shared/ThemeToggle.tsx
'use client'

import { useState } from 'react'

type ThemeToggleProps = {
  defaultTheme?: 'light' | 'dark'
}

export const ThemeToggle = ({ defaultTheme = 'light' }: ThemeToggleProps) => {
  const [theme, setTheme] = useState(defaultTheme)

  return (
    <button
      onClick={() => setTheme(t => (t === 'light' ? 'dark' : 'light'))}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme}
    </button>
  )
}
```

### Async Params — Mandatory in Next.js 16

Synchronous access to `params` and `searchParams` was removed in Next.js 16. Always await them.

```typescript
// ❌ Removed in Next.js 16 — will throw at runtime
const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params
}

// ✅ Correct pattern
const ProjectPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  return <div>{slug}</div>
}
```

## Caching

Next.js 16 uses **opt-in caching** — all dynamic code executes at request time by default. Use the `"use cache"` directive explicitly when you intend to cache a component or function. Do not assume caching is implicit.

```typescript
// ✅ Explicitly opt into caching
'use cache'

import { cacheLife } from 'next/cache'

export const getProjects = async () => {
  cacheLife('hours')
  const res = await fetch('https://api.example.com/projects')
  return res.json()
}
```

```typescript
// ✅ Cache a Server Component
'use cache'

export const ProjectList = async () => {
  const projects = await getProjects()
  return (
    <ul>
      {projects.map(p => <li key={p.id}>{p.title}</li>)}
    </ul>
  )
}
```

- Never add `"use cache"` to components with user-specific data (auth state, session, cookies)
- Prefer `cacheLife('hours')` or `cacheLife('days')` with an explicit revalidation strategy over no revalidation
- Use `revalidateTag()` or `revalidatePath()` in Server Actions to invalidate cache on mutation

## Server Actions

Use Server Actions for all data mutations (form submissions, API calls that write data). Do not use API routes for mutations that originate from the same app.

```typescript
// lib/actions/contact.ts
'use server'

import { z } from 'zod'

const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
})

export const submitContact = async (formData: FormData) => {
  const parsed = ContactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!parsed.success) {
    return { error: parsed.error.flatten() }
  }

  // perform mutation
  return { success: true }
}
```

### Server Action Security Rules

- Always validate and sanitize inputs with a schema (Zod preferred)
- Never trust `FormData` values directly
- Add authentication checks at the top of any action that accesses protected data
- Do not expose internal error messages to the client

## Testing Guidelines

### Unit Tests (Jest)

- Place test files in `__tests__/jest/`
- Use `.test.ts` extension
- Use **React Testing Library** for component tests
- Follow **AAA pattern** (Arrange, Act, Assert)
- Mock Server Actions and fetch calls — do not make real network requests in unit tests

```typescript
// __tests__/jest/ProjectCard.test.tsx
import { render, screen } from '@testing-library/react'
import { ProjectCard } from '@/components/pages/ProjectCard'
import { mockProject } from '@/__mocks__/data'

describe('ProjectCard', () => {
  it('renders the project title', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByRole('heading', { name: mockProject.title })).toBeInTheDocument()
  })
})
```

### E2E Tests (Playwright)

- Place test files in `__tests__/playwright/`
- Use `.spec.ts` extension
- Use **page object model** for maintainability
- Test **critical user journeys** only — not implementation details

## Styling Guidelines

- Use **Tailwind CSS v4** utility classes — avoid custom CSS unless unavoidable
- Follow **mobile-first** responsive design
- Use Tailwind's responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
- Use **semantic color names** from the design system
- Ensure accessible color contrast ratios (WCAG AA minimum)

```typescript
<div className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
  <h1 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
    Title
  </h1>
</div>
```

## Performance Guidelines

- Use **Next.js Image component** for all images — never raw `<img>` tags
- Use **WebP format** for images
- Implement **lazy loading** for components below the fold via `dynamic()`
- Use `"use cache"` explicitly for cacheable data — do not assume implicit caching
- Monitor **Core Web Vitals** — target LCP < 2.5s, CLS < 0.1, INP < 200ms
- **React Compiler** is enabled — avoid unnecessary manual `useMemo` and `useCallback`; the compiler handles most memoization automatically

```typescript
// Lazy load heavy components
import dynamic from 'next/dynamic'

const HeavyChart = dynamic(() => import('@/components/shared/HeavyChart'), {
  loading: () => <p>Loading...</p>,
})
```

## Accessibility (a11y)

- Use **semantic HTML** elements (`<main>`, `<nav>`, `<article>`, `<section>`)
- Include **ARIA attributes** where semantic HTML is insufficient
- Every interactive element must be keyboard-navigable
- All images must have descriptive `alt` text (empty `alt=""` for decorative images)
- Maintain **WCAG AA** color contrast
- Test with a screen reader before shipping UI changes

## Security

- Always run on the **latest patch version** of Next.js — patch releases frequently include security fixes
- **Server Actions**: validate all inputs with Zod, authenticate before accessing protected resources, never expose internal errors to the client
- Implement **Content Security Policy** (CSP) headers via `next.config.ts`
- Use **HTTPS** everywhere — enforce via Netlify redirect rules
- Sanitize all user inputs before rendering or persisting
- Keep **all dependencies up to date** — run `bun outdated` regularly
- Follow **OWASP Top 10** guidelines
- Never commit secrets — use environment variables via `.env.local` and Netlify environment config

## API and Data Handling

- Use **Server Actions** for mutations originating within the app
- Use **Next.js API routes** only for external webhook receivers or third-party integrations
- Use `fetch` with proper error handling and typed responses
- Implement **TypeScript interfaces** for all API responses
- Always handle **loading states** and **error states** in UI

```typescript
type ProjectResponse = {
  id: string
  title: string
  description: string
}

const fetchProject = async (id: string): Promise<ProjectResponse> => {
  const res = await fetch(`/api/projects/${id}`)
  if (!res.ok) throw new Error(`Failed to fetch project: ${res.status}`)
  return res.json() as Promise<ProjectResponse>
}
```

## CI/CD Notes

- The `.next` directory structure changed in Next.js 16 — a new `.next/dev` directory enables concurrent dev and build
- Update CI cache configuration to include `.next/dev` alongside `.next/cache`
- Full CI check command: `bun pre-commit`

## Branch Naming

```text
prefix/descriptive-name

Prefixes:
- build/       Changes to build system or external dependencies
- chore/       Maintenance tasks
- cicd/        CI/CD configuration changes
- docs/        Documentation only
- feature/     New features
- fix/         Bug fixes
- hotfix/      Critical immediate fixes
- localization/ i18n changes
- performance/ Performance improvements
- refactor/    Code changes without feature or fix
- revert/      Reverts a previous commit
- style/       Formatting and code style only
- test/        Test additions or updates

Examples:
  feature/responsive-navigation
  fix/button-hover-state
  performance/optimize-images
  test/contact-form-validation
```

## Commit Messages

```text
Format: type(scope): EMOJI description

Types:
  aria(scope):         ♿  Accessibility
  build(scope):        🏗️  Build system / dependencies
  chore(scope):        🛠️  Maintenance
  cicd(scope):         ⚙️  CI/CD configuration
  docs(scope):         📝  Documentation
  feature(scope):      ✨  New features
  fix(scope):          🐛  Bug fixes
  hotfix(scope):       🔥  Critical fixes
  localization(scope): 🇬🇧  i18n changes
  performance(scope):  🚀  Performance improvements
  refactor(scope):     👷  Refactoring
  revert(scope):       ⏪  Reverts
  style(scope):        🎨  Code style / formatting
  test(e2e):           🎭  Playwright tests
  test(jest):          🃏  Jest unit tests

Examples:
  feature(portfolio): ✨ Add project showcase carousel
  fix(responsive): 🐛 Fix mobile navigation collapse
  performance(images): 🚀 Convert hero images to WebP
  test(jest): 🃏 Add unit tests for formatDate utility
  docs(readme): 📝 Update Bun installation instructions
```

## Documentation

- Update `README.md` when adding new features or changing setup steps
- Add inline comments for non-obvious logic
- Document all Server Actions with their expected input shape and return type
- Keep changelog updated for releases
