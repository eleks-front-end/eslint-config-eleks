eslint-config-eleks
===================

This package provides extensible ESLint config which follows [Eleks Style Guide](https://github.com/eleks-front-end/js-styleguide)


## Usage

    $ npm i -D eslint @eleks/eslint-config-eleks

> ### Note! **ESLint v2**

> If you're using ESLint v1, you will have to upgrade to latest v2, in order to use this config

> ` npm i eslint@latest `

> For additional instructions please refer to:
  * [release notes](http://eslint.org/blog/2016/02/eslint-v2.0.0-released)
  * [migration guide](http://eslint.org/docs/user-guide/migrating-to-2.0.0)

Then add ```extends: '@eleks/eleks'``` to your ```.eslintrc.*```

If your don't have one yet

    $ echo "extends: '@eleks/eleks'" > .eslintrc.yml

### Notice on ESLint Installation

> Please note that ```eslint``` and ```@eleks/eslint-config-eleks``` should be installed **locally**, as globally installed ```eslint``` will look for plugins and configs in global scope.

> `npm`, `grunt`, `gulp`, `webpack`, `SublimeLinter` and others work fine with local installation, so you shouldn't install ```eslint``` globally at all.

> If you want to use ```eslint``` "globally" use [eslint-cli](https://www.npmjs.com/package/eslint-cli) to be able to use just ```$ eslint [file]``` in command line. Refer to above mentioned link for installation instructions.
