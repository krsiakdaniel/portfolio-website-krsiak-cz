---
applyTo: '**/__tests__/jest/**'
---

## Jest Unit Test Rules

- Follow AAA pattern: Arrange, Act, Assert
- Place test files in `__tests__/jest/tests/` with `.test.ts` extension
- Use React Testing Library for component tests
- Mock all fetch calls and Server Actions — no real network requests in unit tests
- Mock file imports via `__mocks__/fileMock.ts`

## What to Test

- Test behavior, not implementation details
- Use `getByRole` over `getByTestId` where possible
- One `describe` block per component or function
- Cover: renders correctly, handles props, handles edge cases, handles error states

## Commands

```bash
bun test:jest              # run all unit tests
bun test:jest:coverage     # run with coverage report
```
