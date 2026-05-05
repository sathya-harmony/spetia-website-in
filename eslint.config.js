import js from '@eslint/js';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores([
    '.next',
    'dist',
    'node_modules',
    'src/legacy-pages',
    'src/components',
    'src/assets',
    'research',
  ]),
  {
    files: ['app/**/*.{js,jsx}', 'next.config.mjs'],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^[A-Z_]' }],
    },
  },
]);
