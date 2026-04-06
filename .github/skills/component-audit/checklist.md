# Component Audit Checklist

## TypeScript

- [ ] No `any` — `unknown` with type guards used where needed
- [ ] All props typed explicitly (no implicit types)
- [ ] `satisfies` used for config objects where applicable
- [ ] No unsafe non-null assertions (`!`) unless provably safe

## React 19

- [ ] No `forwardRef` — `ref` passed as a prop directly
- [ ] No manual `useMemo` — React Compiler handles this
- [ ] No manual `useCallback` — React Compiler handles this
- [ ] No `React.memo` wrapping

## Server / Client Boundary

- [ ] No unnecessary `"use client"` directive
- [ ] `"use client"` boundary is as deep in the tree as possible
- [ ] No entire page marked as Client Component for a single interactive element

## Companion Files

- [ ] Exported types live in `ComponentName.types.ts` alongside the component
- [ ] Exported non-CSS constants live in `ComponentName.constants.ts` alongside the component
- [ ] No companion file exists if it would be empty
- [ ] CSS/Tailwind class strings stay inline in `.tsx` — not extracted to companion file
- [ ] Shared project-wide types are in `lib/types/`, not in component-level companion files
- [ ] Reused cross-component constants are in `lib/utils/constants/`, not companion files

## Images & Performance

- [ ] Next.js `<Image>` component used — no raw `<img>` tags
- [ ] Images use WebP format
- [ ] Components below the fold are lazy-loaded with `dynamic()`

## Styling

- [ ] Tailwind v4 utility classes only — no custom CSS unless unavoidable
- [ ] Mobile-first: `sm:` before `md:` before `lg:` before `xl:`
- [ ] No inline `style` prop unless unavoidable

## Accessibility

- [ ] Semantic HTML used (`<main>`, `<nav>`, `<section>`, `<article>`)
- [ ] ARIA attributes present where semantic HTML alone is insufficient
- [ ] All images have descriptive `alt` text (empty `alt=""` for decorative only)
- [ ] All interactive elements are keyboard-navigable

## Next.js App Router _(page files only)_

- [ ] `params` and `searchParams` are awaited and typed as `Promise<{ ... }>`
- [ ] `metadata` or `generateMetadata` exported from the page
- [ ] `"use cache"` used explicitly when caching — not assumed implicit
- [ ] `"use cache"` not applied to components with user-specific data
