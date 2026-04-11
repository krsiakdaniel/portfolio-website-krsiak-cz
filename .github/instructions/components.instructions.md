---
applyTo: '**/{components,features}/**/*.{tsx,ts}'
---

## Component Rules

- Server Components by default — only add `"use client"` for browser APIs, event handlers, state, or effects
- Keep `"use client"` boundaries as deep in the tree as possible
- No `forwardRef` — use `ref` as a prop directly (React 19)
- No manual `useMemo`, `useCallback`, or `React.memo` — React Compiler handles this automatically

## Companion Files

Every component with exported types must have `ComponentName.types.ts` alongside it.
Every component with exported non-CSS constants must have `ComponentName.constants.ts` alongside it.
Do NOT create a companion file if it would be empty.

- CSS/Tailwind class strings stay inline in `.tsx` — never extract to companion file
- Shared project-wide types belong in `lib/types/`, not component-level companion files
- Reused constants belong in `lib/utils/constants/`, not companion files

## Type Imports

Always use **inline type imports** — enforced by ESLint rule `@typescript-eslint/consistent-type-imports` (`prefer: 'type-imports'`, `fixStyle: 'inline-type-imports'`).

```typescript
// ✅ Correct — inline type import
import { type Icon } from '@/lib/types/interfaces'
// ❌ Wrong — separate type import block
import type { Icon } from '@/lib/types/interfaces'
import { type SkillIconType } from '@/lib/types/types'
```

Shared project-wide types and interfaces always come from:

- `@/lib/types/interfaces` — shared interfaces (e.g. `Icon`, `LinkItem`)
- `@/lib/types/types` — shared type aliases (e.g. `SkillIconType`)

## Next.js Image

Always use the Next.js `<Image>` component — never a raw `<img>` tag.

## Accessibility

- Use semantic HTML elements (`<main>`, `<nav>`, `<article>`, `<section>`)
- Include ARIA attributes where semantic HTML is insufficient
- Every interactive element must be keyboard-navigable
- All images must have descriptive `alt` text (empty `alt=""` for decorative images)
