module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'no-undef': 1,
    'no-unused-vars': 1,
    'no-restricted-syntax': 0,
    'no-empty': 0,
    'consistent-return': 1,
    'no-multiple-empty-lines': 0,
    'import/no-unresolved': 1,
    'no-param-reassign': 0,
    'class-methods-use-this': 1,
    'import/extensions': 1,
    'import/prefer-default-export': 1,
    'no-trailing-spaces': 1,
    'eol-last': 0,
    indent: 0,

  },
};
