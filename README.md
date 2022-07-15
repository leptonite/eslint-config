@leptonite/eslint-config
========================

Add this to your `package.json`:

```
   "devDependencies": {
      "@leptonite/eslint-config": "git+https://github.com/leptonite/eslint-config.git",
      "@typescript-eslint/eslint-plugin": "5.30.6",
      "@typescript-eslint/parser": "5.30.6",
      "eslint": "8.19.0",
   },
```

Add the file `.eslintrc.js`:

```
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
