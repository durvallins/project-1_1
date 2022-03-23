/* eslint-disable prettier/prettier */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // eslint-disable-next-line prettier/prettier
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
};
