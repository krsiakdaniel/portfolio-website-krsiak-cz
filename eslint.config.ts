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
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'coverage/**',
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
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@next/next': nextPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules, // React best practices
      ...reactHooksPlugin.configs.recommended.rules, // Hooks rules (like the one we fixed)
      ...nextPlugin.configs.recommended.rules, // Next.js routing, Image, Link rules
      ...nextPlugin.configs['core-web-vitals'].rules, // Performance rules
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js 13+
      'react/prop-types': 'off', // Using TypeScript instead
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
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
