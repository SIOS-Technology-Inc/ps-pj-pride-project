module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'tailwindcss',
    'import',
    'unused-imports',
  ],
  rules: {
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: 'react**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
  },
  overrides: [
    {
      // or whatever matches stories specified in .storybook/main.js
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        // example of overriding a rule
        'storybook/hierarchy-separator': 'error',
        // example of disabling a rule
        'storybook/default-exports': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    tailwindcss: {
      config: 'tailwind.config.cjs',
    },
  },
};
