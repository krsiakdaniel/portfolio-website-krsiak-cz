---
applyTo: '**/data/**/*.{ts,tsx}'
---

## Type Imports

Always use **inline type imports** — enforced by ESLint rule `@typescript-eslint/consistent-type-imports` (`prefer: 'type-imports'`, `fixStyle: 'inline-type-imports'`).

```typescript
// ✅ Correct — inline type import
import { type Job } from '@/lib/types/interfaces'
// ❌ Wrong — separate type import block
import type { Job } from '@/lib/types/interfaces'
import { type SkillIconType } from '@/lib/types/types'
```

Shared project-wide types and interfaces always come from:

- `@/lib/types/interfaces` — shared interfaces (e.g. `Icon`, `LinkItem`, `Job`, `SkillToIconMap`)
- `@/lib/types/types` — shared type aliases (e.g. `SkillIconType`)
