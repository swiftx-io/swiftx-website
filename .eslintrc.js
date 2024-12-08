module.exports = {
  ignorePatterns: ['node_modules', 'dist', 'public', '.next'],
  overrides: [
    {
      files: ['**/*.{js,mjs,cjs,ts,tsx}'],
      parser: '@typescript-eslint/parser',
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'next/core-web-vitals',
        'prettier',
        'plugin:prettier/recommended',
      ],
      plugins: ['@typescript-eslint', 'jest', 'unused-imports'],
      env: {
        node: true,
        browser: true,
        jest: true,
      },
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      env: {
        'jest/globals': true,
      },
      extends: ['plugin:jest/recommended'],
      plugins: ['jest'],
    },
  ],
}
