/**
 * ESLint flat config dependencies:
 * - `@eslint/js` — core ESLint recommended rules
 * - `@next/eslint-plugin-next` — Next.js-specific rules
 * - `eslint-plugin-react` — React-specific rules
 * - `eslint-plugin-react-hooks` — React Hooks rules
 * - `globals` — global variables for different environments
 * - `typescript-eslint` — TypeScript-specific rules
 */
import js from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import globals from 'globals'
import typescript from 'typescript-eslint'

const eslintConfig = [
  {
    ignores: [
      '.next/**',
      'build/**',
      'coverage/**',
      'next-env.d.ts',
      'node_modules/**',
      'out/**',
      'playwright-report/**',
      'test-results/**',
      '~/**', // Bun cache directory
    ],
  },
  js.configs.recommended,
  ...typescript.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules, // React best practices
      ...reactHooksPlugin.configs.recommended.rules, // Hooks rules
      ...nextPlugin.configs.recommended.rules, // Next.js routing, Image, Link rules
      ...nextPlugin.configs['core-web-vitals'].rules, // Performance rules
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' }, // Enforces `import { type X }` pattern
      ],
      '@typescript-eslint/no-explicit-any': 'error', // Never use `any` — use `unknown` with type guards instead
      '@typescript-eslint/no-non-null-assertion': 'warn', // Avoid `!` assertions — prefer explicit null checks
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Allow unused params prefixed with _
      'no-console': 'warn', // Catches leftover debug console.log statements
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'ignore' }], // No unnecessary braces on props: label="text" not label={"text"}
      'react/prop-types': 'off', // Using TypeScript instead
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js 13+
      'react/self-closing-comp': 'error', // Enforce <Component /> over <Component></Component>
    },
    settings: {
      react: {
        version: '19.0', // Hardcoded to avoid scanning node_modules on every lint run
      },
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  // Node.js configuration for config files
  {
    files: ['*.config.js', '*.config.ts'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]

export default eslintConfig
