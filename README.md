eslint-config-eleks
===================

This package provides extensible ESLint config which follows [Eleks Style Guide](https://github.com/eleks-front-end/js-styleguide)

> This version is based on eslint@2.0.0

> In order to use it, you have to specify the `next` tag when installing.


## Usage

    $ npm i -D eslint@next @eleks/eslint-config-eleks@next

Then add ```extends: '@eleks/eleks'``` to your ```.eslintrc.*```

If your don't have one yet

    $ echo "extends: '@eleks/eleks'" > .eslintrc.yml

### Notice

> Please note that ```eslint``` and ```@eleks/eslint-config-eleks``` should be installed **locally**, as globally installed ```eslint``` will look for plugins in global scope.

> `npm`, `grunt`, `gulp`, `webpack`, `SublimeLinter` and others work fine with local installation, so you shouldn't install ```eslint``` globally at all.

> If you want to use ```eslint``` "globally" use [eslint-cli](https://www.npmjs.com/package/eslint-cli) to be able to use just ```$ eslint [file]``` in command line. Refer to above mentioned link for installation instructions.
