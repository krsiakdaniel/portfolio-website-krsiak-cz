import nextJest from 'next/jest.js'

// https://nextjs.org/docs/app/building-your-application/testing/jest
const createJestConfig = nextJest({
  dir: './',
})

const config = {
  clearMocks: true, // Clear mock calls and instances before every test
  collectCoverage: false, // Only collect coverage when explicitly requested via `bun test:jest:coverage`
  collectCoverageFrom: [
    'app/**/*.{js,jsx,ts,tsx}',
    'components/**/*.{js,jsx,ts,tsx}',
    'features/**/*.{js,jsx,ts,tsx}',
    'lib/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/*.stories.{js,jsx,ts,tsx}',
    '!**/*.test.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/coverage/**',
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8', // Faster and more accurate than babel
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg|webp|avif|ico|bmp)$': '<rootDir>/__mocks__/fileMock.ts',
    '^@/(.*)$': '<rootDir>/$1', // Resolves `@/` path alias
  },
  modulePathIgnorePatterns: [
    '<rootDir>/~/.bun/',
    '<rootDir>/.next/',
    '<rootDir>/node_modules/.cache/',
  ],
  setupFilesAfterEnv: ['<rootDir>/__tests__/jest/setup/setupTests.ts'],
  testEnvironment: '@happy-dom/jest-environment', // Faster than jsdom
  testMatch: ['**/__tests__/jest/**/*.test.[jt]s?(x)'], // Only Jest tests, not Playwright specs
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/playwright/',
    '/__tests__/playwright/',
    '/~/.bun/',
    '/coverage/',
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!(nanoid|@testing-library/user-event|next|@next|@swc|@babel)/)',
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
