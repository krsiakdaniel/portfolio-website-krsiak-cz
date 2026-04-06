---
name: component-audit
description: >
  Audits a React component or page file against krsiak.cz project conventions.
  Use when asked to audit, review, or check a component before committing.
  Checks TypeScript strictness, React 19 patterns, Server/Client boundaries,
  companion files, images, Tailwind styling, accessibility, and Next.js App Router rules.
---

When asked to audit a component or page file, follow these steps:

1. Read the target file(s) the user is referring to
2. Work through every item in [checklist.md](./checklist.md) against the actual code
3. For each item, mark it as ✅ pass, ❌ fail, or ⚠️ warning
4. Output a prioritized report grouped by category
5. Include file and line references for every issue found
6. End with a summary: total issues, total warnings, total passed

Do NOT make any file changes during the audit. Only report findings.
After the report, ask: "Would you like me to fix the issues found?"
