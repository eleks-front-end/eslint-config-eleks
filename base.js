module.exports = {
    env: {
        browser: false, // browser global variables.
        node: false, // Node.js global variables and Node.js scoping.
        commonjs: false, // CommonJS global variables and CommonJS scoping (use this for browse: false, //only code that uses Browserify/WebPack).
        worker: false, // web workers global variables.
        amd: false, // defines require() and define() as global variables as per the amd spec.
        mocha: false, // adds all of the Mocha testing global variables.
        jasmine: false, // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
        jest: false, // Jest global variables.
        phantomjs: false, // PhantomJS global variables.
        protractor: false, // Protractor global variables.
        qunit: false, // QUnit global variables.
        jquery: false, // jQuery global variables.
        prototypejs: false, // Prototype.js global variables.
        shelljs: false, // ShellJS global variables.
        meteor: false, // Meteor global variables.
        mongo: false, // MongoDB global variables.
        applescript: false, // AppleScript global variables.
        serviceworker: false, // Service Worker global variables.
        embertest: false, // Ember test helper globals.
        es6: false // enable all ECMAScript 6 features except for modules.
    },

    rules: {

        // Possible Errors
        'comma-dangle': [1, 'never'],
        'no-cond-assign': [ 2, 'except-parens'],
        'no-console': 1,
        'no-constant-condition': 2,
        'no-control-regex': 2,
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty-character-class': 2,
        'no-empty': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-parens': 1,
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-inner-declarations': 2,
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-negated-in-lhs': 2,
        'no-obj-calls': 2,
        'no-regex-spaces': 1,
        'no-sparse-arrays': 2,
        'no-unreachable': 2,
        'use-isnan': 2,
        'valid-jsdoc': 1,
        'valid-typeof': 2,
        'no-unexpected-multiline': 2,

        // Best Practices
        'accessor-pairs': [ 2, {
            'getWithoutSet': true,
            'setWithoutGet': false
        }],
        'block-scoped-var': 0,
        'complexity': 0,
        'consistent-return': 2,
        'curly': [2, 'multi'],
        'default-case': 2,
        'dot-notation': [2, {
            'allowPattern': '^[a-z]+(_[a-z]+)+$'
        }],
        'dot-location': [1, 'property'],
        'eqeqeq': [2, 'allow-null'],
        'guard-for-in': 1,
        'no-alert': 2,
        'no-caller': 2,
        'no-div-regex': 2,
        'no-else-return': 2,
        'no-empty-label': 2,
        'no-eq-null': 0,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-fallthrough': 1,
        'no-floating-decimal': 1,
        'no-implicit-coercion': 0,
        'no-implied-eval': 2,
        'no-invalid-this': 2,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-native-reassign': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-new': 2,
        'no-octal-escape': 2,
        'no-octal': 2,
        'no-param-reassign': 0,
        'no-process-env': 0,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-return-assign': 2,
        'no-script-url': 2,
        'no-self-compare': 2,
        'no-sequences': 1,
        'no-throw-literal': 2,
        'no-unused-expressions': 2,
        'no-useless-call': 1,
        'no-useless-concat': 2,
        'no-void': 2,
        'no-warning-comments': 0,
        'no-with': 2,
        'radix': 2,
        'vars-on-top': 2,
        'wrap-iife': [2, 'any'],
        'yoda': 0,

        // Strict Mode
        'strict': 2,

        // Variables
        'init-declarations': 0,
        'no-catch-shadow': 2,
        'no-delete-var': 2,
        'no-label-var': 2,
        'no-shadow-restricted-names': 2,
        'no-shadow': 1,
        'no-undef-init': 2,
        'no-undef': 2,
        'no-undefined': 2,
        'no-unused-vars': 2,
        'no-use-before-define': [2, 'nofunc'],

        // Stylistic
        'array-bracket-spacing': [2, 'never'],
        'block-spacing': [2, 'always'],
        'brace-style': [2, '1tbs'],
        'camelcase': 2,
        'comma-spacing': [2, {
            'before': false,
            'after': true
        }],
        'comma-style': [2, 'last'],
        'computed-property-spacing': [2, 'never'],
        'consistent-this': [1, 'root'],
        'eol-last': 2,
        'func-names': 0,
        'func-style': 0,
        'id-length': 0,
        'id-match': 0,
        'indent': [2, 4, {
            'SwitchCase': 1
        }],
        'key-spacing': 0,
        'lines-around-comment': 0,
        'linebreak-style': 0,
        'max-nested-callbacks': 0,
        'new-cap': 2,
        'new-parens': 0,
        'newline-after-var': [1, 'always'],
        'no-array-constructor': 2,
        'no-continue': 0,
        'no-inline-comments': 0,
        'no-lonely-if': 1,
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': [1, {
            'max': 2
        }],
        'no-nested-ternary': 1,
        'no-new-object': 2,
        'no-spaced-func': 2,
        'no-ternary': 0,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': 0,
        'no-unneeded-ternary': 2,
        'object-curly-spacing': 0,
        'one-var': 2,
        'operator-assignment': 1,
        'operator-linebreak': [2, 'before'],
        'padded-blocks': [2, 'never'],
        'quote-props': 0,
        'quotes': [2, 'single'],
        'semi-spacing': [2, {
            'before': false,
            'after': true
        }],
        'semi': [2, 'always'],
        'sort-vars': 0,
        'space-after-keywords': 2,
        'space-before-blocks': [2, 'always'],
        'space-before-function-paren': [2, 'always'],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': [2, {
            'int32Hint': true
        }],
        'space-return-throw-case': 2,
        'space-unary-ops': 2,
        'spaced-comment': 1,
        'wrap-regex': 0
    }
};
