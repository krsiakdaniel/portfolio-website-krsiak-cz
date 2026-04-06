---
applyTo: '**/app/**/*.{tsx,ts}'
---

## Next.js App Router Rules

- Async params are mandatory — always `await params` and `await searchParams`
- Type params as `Promise<{ slug: string }>`, not `{ slug: string }`
- Export `metadata` or `generateMetadata` from every page
- Use `"use cache"` directive explicitly when caching — do not assume implicit caching
- Never add `"use cache"` to components with user-specific data (auth, session, cookies)

## Async Params Pattern

```typescript
// ✅ Correct — Next.js 16
const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  return <div>{slug}</div>
}

// ❌ Removed in Next.js 16 — will throw at runtime
const Page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params
}
```

## Caching Pattern

```typescript
'use cache'
import { cacheLife } from 'next/cache'

export const getData = async () => {
  cacheLife('hours') // always specify revalidation strategy
  // ...
}
```

## Metadata

Every page must export metadata:

```typescript
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
}
```
