@leptonite/eslint-config
========================

Merge this into your `package.json`:

```json
{
   "devDependencies": {
      "@leptonite/eslint-config": "git+https://github.com/leptonite/eslint-config.git",
      "@typescript-eslint/eslint-plugin": "5.31.0",
      "@typescript-eslint/parser": "5.31.0",
      "eslint": "8.20.0"
   }
}
```

Add the file `.eslintrc.js`:

```javascript
module.exports = {
   root: true,
   ignorePatterns: ['/*', '!/src'],
   extends: [
      '@leptonite/eslint-config',
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      project: './tsconfig.json',
   },
   plugins: [
      '@typescript-eslint',
   ],
   rules: {
      // project specific rule configuration goes here
   },
};
```


Show only warnings
------------------

You want eslint to report all issues as warnings?

* Add `eslint-plugin-only-warn` to `devDependencies` in your `package.json`.
* Add `only-warn` to `plugins` in your `.eslintrc.js`.
