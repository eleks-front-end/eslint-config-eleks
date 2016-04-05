module.exports = {

    // Environment should be set by each project explicitly
    // We're setting only "browser" and "es6"
    env: {
        browser: true, // browser global variables.
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
        nashorn: false, // Java 8 Nashorn global variables.
        serviceworker: false, // Service Worker global variables.
        embertest: false, // Ember test helper globals.
        webextensions: false, // WebExtensions globals.
        es6: true // enable all ECMAScript 6 features except for modules.
    },

    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",

        ecmaFeatures: {
            'globalReturn': false, // allow return statements in the global scope
            'jsx': false, // enable JSX
            'experimentalObjectRestSpread': true // enable support for the experimental object rest/spread properties (IMPORTANT: This is an experimental feature that may change significantly in the future. It's recommended that you do not write rules relying on this functionality unless you are willing to incur maintenance cost when it changes.)
        }
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
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,
        'use-isnan': 2,
        'valid-jsdoc': 1,
        'require-jsdoc': 0,
        'valid-typeof': 2,

        // Best Practices
        'accessor-pairs': [ 2, {
            'getWithoutSet': true,
            'setWithoutGet': false
        }],
        'array-callback-return': 2,
        'block-scoped-var': 0,
        'complexity': 0,
        'consistent-return': 2, // @ended
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
        'no-case-declarations': 2,
        'no-div-regex': 2,
        'no-else-return': 2,
        'no-empty-function': 1,
        'no-empty-pattern': 2,
        'no-eq-null': 0,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-fallthrough': 1,
        'no-floating-decimal': 1,
        'no-implicit-coercion': 0,
        'no-implicit-globals': 2,
        'no-implied-eval': 2,
        'no-invalid-this': 2,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-magic-numbers': [1, {
            'ignore': [-1, 0, 1]
        }],
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
        'no-unmodified-loop-condition': 1,
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
        'keyword-spacing': 2,
        'linebreak-style': 0,
        'lines-around-comment': 0,
        'max-depth': 0,
        'max-len': 0,
        'max-nested-callbacks': 0,
        'max-params': 0,
        'max-statements': 0,
        'new-cap': 2,
        'new-parens': 0,
        'newline-after-var': [1, 'always'],
        'no-array-constructor': 2,
        'no-bitwise': 0,
        'no-continue': 0,
        'no-inline-comments': 0,
        'no-lonely-if': 1,
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': [1, {
            'max': 2
        }],
        'no-nested-ternary': 1,
        'no-negated-condition': 0,
        'no-new-object': 2,
        'no-spaced-func': 2,
        'no-plusplus': 0,
        'no-whitespace-before-property': 2,
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
        'sort-imports': 0,
        'space-before-blocks': [2, 'always'],
        'space-before-function-paren': [2, 'always'],

        'space-in-parens': [2, 'never'],
        'space-infix-ops': [2, {
            'int32Hint': true
        }],
        'space-unary-ops': 2,
        'spaced-comment': 1,
        'wrap-regex': 0,

        // ES6
        'arrow-body-style': [2, 'as-needed'], //require braces in arrow function body
        'arrow-parens': [2, 'as-needed'], //require parens in arrow function arguments
        'arrow-spacing': [2, {
            'before': true,
            'after': true
        }], // require space before/after arrow function's arrow
        'constructor-super': 2, //verify calls of super() in constructors (recommended)
        'generator-star-spacing': [2, {
            'before': true,
            'after': true
        }], // enforce spacing around the * in generator functions
        'no-class-assign': 2, //disallow modifying variables of class declarations (recommended)
        'no-confusing-arrow': 0, //disallow arrow functions where they could be confused with comparisons
        'no-const-assign': 2, //disallow modifying variables that are declared using const (recommended)
        'no-dupe-class-members': 2, //disallow duplicate name in class members (recommended)
        'no-new-symbol': 2, //disallow use of the new operator with the Symbol object (recommended)
        'no-this-before-super': 2, //disallow use of this/super before calling super() in constructors (recommended)
        'no-var': 0, //require let or const instead of var
        'no-useless-constructor': 1, //disallow unnecessary constructor
        'object-shorthand': [2, 'always'], // require method and property shorthand syntax for object literals
        'prefer-arrow-callback': 1, //suggest using arrow functions as callbacks
        'prefer-const': 1, //suggest using const declaration for variables that are never modified after declared
        'prefer-reflect': 0, //suggest using Reflect methods where applicable
        'prefer-rest-params': 0, //suggest using the rest parameters instead of arguments
        'prefer-spread': 1, //suggest using the spread operator instead of .apply().
        'prefer-template': 1, //suggest using template literals instead of strings concatenation
        'require-yield': 2, //disallow generator functions that do not have yield
        "yield-star-spacing": [2, {"before": true, "after": true}], //enforce spacing around the * in yield* expressions (fixable)
    }
};
