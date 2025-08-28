import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';

import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';



export default defineConfig([
    { ignores: ['**/dist', '**/node_modules', '**/eslint.config.mjs'] },
    

    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021,
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            prettier: prettierPlugin,
            import: importPlugin,
            'jsx-a11y': jsxA11yPlugin,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            ...prettierConfig.rules,
            'prettier/prettier': 'error',

            // Ваши правила
            'import/order': [
                'error',
                {
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: false,
                    },
                    
                },
            ],
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
            '@typescript-eslint/strict-boolean-expressions': 'off',
            '@typescript-eslint/prefer-nullish-coalescing': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/restrict-template-expressions': 'off',
            '@typescript-eslint/triple-slash-reference': 'off',
            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/consistent-type-assertions': 'off',
            'jsx-a11y/anchor-is-valid': 'off',
            curly: ['error', 'all'],
            'no-irregular-whitespace': [
                'error',
                {
                    skipTemplates: true,
                    skipStrings: true,
                },
            ],
            'no-console': [
                'error',
                {
                    allow: ['info', 'error', 'warn'],
                },
            ],
            
        },
    },
]);