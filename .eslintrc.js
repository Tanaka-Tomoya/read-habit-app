module.exports = {
  env: {
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  parserOptions: {
    version: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['prettier/react', 'airbnb', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ]
  },
  globals: {
    document: false
  },
  settings: {
    'import/resolver': 'webpack'
  }
};
