import js from '@eslint/js'
// Core ESLint recommended rules
import nextPlugin from '@next/eslint-plugin-next'
// Next.js-specific rules
import reactPlugin from 'eslint-plugin-react'
// React-specific rules
import reactHooksPlugin from 'eslint-plugin-react-hooks'
// TypeScript-specific rules
import globals from 'globals'
// React Hooks rules
import typescript from 'typescript-eslint'

// Global variables for different environments

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
    },
    settings: {
      react: {
        version: 'detect', // Auto-detect React version
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
    files: ['next.config.mjs', '*.config.js', '*.config.ts', '*.config.mjs'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]

export default eslintConfig
