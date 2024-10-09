import { Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['eslint:recommended', 'prettier', 'plugin:@typescript-eslint/recommended', 'turbo'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {},
};

module.exports = config;
