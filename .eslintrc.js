module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'indent': ['error', 4],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-useless-rename': 'off',
    'object-curly-spacing': ['error', 'always'],
    'padded-blocks': 'off',
    'quote-props': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'space-before-function-paren': ['error', 'never']
    // "react/jsx-curly-spacing": ["error", "always"]
    // 'quotes': ['error', 'single', { 'allowTemplateLiterals': true }]
    // "key-spacing": "off",
  }
}
