import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

export default [
  js.configs.recommended,
  ...svelte.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    // Disable rules that produce false positives in Svelte templates
    // or are inapplicable for a static adapter-static site with no base path
    files: ['**/*.svelte'],
    rules: {
      'no-useless-assignment': 'off' // variables used in templates look unused to ESLint's JS analysis
    }
  },
  {
    rules: {
      'svelte/no-navigation-without-resolve': 'off' // no base path configured; rule not relevant
    }
  },
  {
    ignores: ['build/', '.svelte-kit/', 'dist/', 'node_modules/']
  }
];
