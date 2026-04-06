---
description: Scaffold a new feature following the features/ architecture
---

Create a new feature called **${input:featureName}** under `features/`.

Follow this structure:

```
features/${input:featureName}/
  index.tsx                              ← main feature component (Server Component by default)
  ${input:featureName}.types.ts          ← exported types (only if needed)
  ${input:featureName}.constants.ts      ← exported constants (only if needed)
  components/                            ← sub-components (only if needed)
```

Rules:

- Server Component by default — only add `"use client"` if the component requires browser APIs, event handlers, or state
- Do NOT create companion files if they would be empty
- Use Tailwind v4 utility classes only — no custom CSS unless unavoidable
- Export the main component as a named export (no default export)
- Follow mobile-first responsive design with `sm:`, `md:`, `lg:`, `xl:` prefixes
- Use semantic HTML elements (`<section>`, `<article>`, `<main>` etc.)
- If images are needed, use Next.js `<Image>` component with WebP format
