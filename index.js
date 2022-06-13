const namingConvention = [
   'error',
   {
      selector: 'default',
      format: ['camelCase'],
      leadingUnderscore: 'allow',
      trailingUnderscore: 'allow',
   },
   {
      selector: 'objectLiteralProperty',
      format: null,
   },
   {
      selector: 'typeLike',
      format: ['PascalCase'],
   },
];

module.exports = {

   parser: '@typescript-eslint/parser',

   extends: [
      'eslint:all',
      'plugin:@typescript-eslint/all',
   ],

   rules: {
      // ESLint Possible Problems
      'no-await-in-loop': 'off',
      'no-template-curly-in-string': 'off',
      'no-use-before-define': 'off', // extended by @typescript-eslint/no-use-before-define

      // ESLint Suggestions
      'capitalized-comments': 'off',
      'complexity': 'off',
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'guard-for-in': 'off',
      'id-length': 'off',
      'init-declarations': 'off', // extended by @typescript-eslint/init-declarations
      'max-classes-per-file': 'off',
      'max-depth': 'off',
      'max-lines-per-function': 'off',
      'max-params': 'off',
      'max-statements': 'off',
      'multiline-comment-style': 'off',
      'no-inline-comments': 'off',
      'no-magic-numbers': 'off', // extended by @typescript-eslint/no-magic-numbers
      'no-plusplus': 'off',
      'no-return-await': 'off', // extended by @typescript-eslint/return-await
      'no-ternary': 'off',
      'no-undefined': 'off',
      'one-var': ['error', 'never'],
      'prefer-destructuring': 'off',
      'prefer-template': 'off',
      'quote-props': 'off',
      'sort-imports': ['error', { allowSeparatedGroups: true }],
      'sort-keys': 'off',

      // ESLint Layout & Formatting
      'array-element-newline': ['error', 'consistent'],
      'comma-dangle': 'off', // extended by @typescript-eslint/comma-dangle
      'function-call-argument-newline': ['error', 'consistent'],
      'function-paren-newline': ['error', 'consistent'],
      'indent': ['error', 3, { SwitchCase: 1 }],
      'line-comment-position': 'off',
      'max-len': 'off',
      'multiline-ternary': 'off',
      'object-curly-spacing': 'off', // extended by @typescript-eslint/object-curly-spacing
      'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
      'padded-blocks': 'off',
      'quotes': 'off', // extended by @typescript-eslint/quotes
      'space-before-function-paren': 'off', // extended by @typescript-eslint/space-before-function-paren
      'wrap-regex': 'off',

      // Typescript
      '@typescript-eslint/array-type': ['error', { default: 'generic' }],
      '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
      '@typescript-eslint/consistent-indexed-object-style': 'off',
      '@typescript-eslint/indent': 'off', // rule is broken, see https://github.com/typescript-eslint/typescript-eslint/issues/1824
      '@typescript-eslint/init-declarations': 'off',
      '@typescript-eslint/naming-convention': namingConvention,
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/no-parameter-properties': 'off',
      '@typescript-eslint/no-type-alias': 'off',
      '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true, variables: true, enums: true, typedefs: false, ignoreTypeReferences: false }],
      '@typescript-eslint/object-curly-spacing': ['error', 'always'],
      '@typescript-eslint/parameter-properties': ['error', { "prefer": "parameter-property" }],
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      '@typescript-eslint/quotes': ['error', 'single'],
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/return-await': 'off',
      '@typescript-eslint/sort-type-union-intersection-members': 'off',
      '@typescript-eslint/space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
      '@typescript-eslint/strict-boolean-expressions': ['error', { allowNullableObject: true }],
   },

};
