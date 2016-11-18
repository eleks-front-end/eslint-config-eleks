eslint-config-eleks
===================

This package provides extensible ESLint config which follows [Eleks Style Guide](https://github.com/eleks-front-end/js-styleguide)


## Usage

    $ npm i -D eslint @eleks/eslint-config-eleks
    $ touch .eslintrc.js

Then paste the following to ```.eslintrc.js``` file

```javascript
module.exports = {
  extends: [
    '@eleks/eleks',
  ],

  // project specific configurations
  environment: {
    // ...
  },
  plugins: [
    // ...
  ],
  rules: {
    // ...
  }
}
```
