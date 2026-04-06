---
description: Generate a Jest unit test for a component or utility function
---

Write a Jest unit test for **${input:targetFile}**.

Rules:

- Place in `__tests__/jest/tests/` with `.test.ts` or `.test.tsx` extension
- Follow AAA pattern (Arrange, Act, Assert)
- Use React Testing Library for component tests (`render`, `screen`, `userEvent`)
- Mock all external dependencies, fetch calls, and Server Actions
- No real network requests
- Use `getByRole` over `getByTestId` where accessible roles exist

Structure:

```typescript
describe('ComponentName or functionName', () => {
  it('renders correctly', () => { ... })
  it('handles [specific behavior]', () => { ... })
  it('handles error state', () => { ... })
})
```

Cover:

1. Default render / happy path
2. Prop variations
3. Edge cases
4. Error or loading states (if applicable)
