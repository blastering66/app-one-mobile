/**
 * ESLint Configuration
 *
 * Extends React Native's ESLint config with:
 * - React Hooks rules (exhaustive-deps)
 * - Single quotes enforcement
 * - Console warnings
 * - TypeScript best practices
 */

module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['react-hooks', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // React Hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Code style
    quotes: ['error', 'single', {avoidEscape: true}],
    'jsx-quotes': ['error', 'prefer-double'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],

    // Console warnings (allow in dev, warn for production awareness)
    'no-console': ['warn', {allow: ['warn', 'error']}],

    // TypeScript specific
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'error',

    // React specific
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',

    // Import ordering
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'never',
      },
    ],

    // Disable import/no-unresolved for aliases (handled by TS)
    'import/no-unresolved': 'off',

    // Best practices
    'no-var': 'error',
    'prefer-const': 'warn',
    eqeqeq: ['error', 'always'],
    curly: ['error', 'all'],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      'babel-module': {},
    },
  },
  ignorePatterns: [
    'node_modules/',
    'android/',
    'ios/',
    'vendor/',
    '*.config.js',
    'babel.config.js',
    'metro.config.js',
    'jest.config.js',
  ],
};
