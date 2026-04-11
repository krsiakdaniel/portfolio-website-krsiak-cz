---
applyTo: '**/localization/**/*.ts'
---

## Type Imports

Always use **inline type imports** — enforced by ESLint rule `@typescript-eslint/consistent-type-imports` (`prefer: 'type-imports'`, `fixStyle: 'inline-type-imports'`).

```typescript
// ✅ Correct — inline type import
import { type LocalizationKey } from '@/lib/types/interfaces'
// ❌ Wrong — separate type import block
import type { LocalizationKey } from '@/lib/types/interfaces'
import { type LocaleType } from '@/lib/types/types'
```

Shared project-wide types and interfaces always come from:

- `@/lib/types/interfaces` — shared interfaces
- `@/lib/types/types` — shared type aliases
