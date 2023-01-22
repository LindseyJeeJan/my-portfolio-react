module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'react-app',
    'react-app/jest'
  ],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'arrow-body-style': ['error', 'as-needed']
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
