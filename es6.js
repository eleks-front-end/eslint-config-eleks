module.exports = {
    extends: '@eleks/eleks',

    env: {
        es6: true
    },

    ecmaFeatures: {
        'arrowFunctions': true, // enable arrow functions
        'binaryLiterals': true, // enable binary literals
        'blockBindings': true, // enable let and const (aka block bindings)
        'classes': true, // enable classes
        'defaultParams': true, // enable default function parameters
        'destructuring': true, // enable destructuring
        'forOf': true, // enable for-of loops
        'generators': true, // enable generators
        'modules': true, // enable modules and global strict mode
        'objectLiteralComputedProperties': true, // enable computed object literal property names
        'objectLiteralDuplicateProperties': false, // enable duplicate object literal properties in strict mode
        'objectLiteralShorthandMethods': true, // enable object literal shorthand methods
        'objectLiteralShorthandProperties': true, // enable object literal shorthand properties
        'octalLiterals': true, // enable octal literals
        'regexUFlag': true, // enable the regular expression u flag
        'regexYFlag': true, // enable the regular expression y flag
        'restParams': true, // enable the rest parameters
        'spread': true, // enable the spread operator for arrays
        'superInFunctions': true, // enable super references inside of functions
        'templateStrings': true, // enable template strings
        'unicodeCodePointEscapes': true, // enable code point escapes
        'globalReturn': true, // allow return statements in the global scope
        'jsx': false, // enable JSX
        'experimentalObjectRestSpread': true // enable support for the experimental object rest/spread properties (IMPORTANT: This is an experimental feature that may change significantly in the future. It's recommended that you do not write rules relying on this functionality unless you are willing to incur maintenance cost when it changes.)
    },

    rules: {

        // ES6
        'arrow-parens': [2, 'as-needed'], // require parens in arrow function arguments
        'arrow-spacing': [2, {
            'before': true,
            'after': true
        }], // require space before/after arrow function's arrow
        'constructor-super': 2, // verify calls of super() in constructors
        'generator-star-spacing': [2, {
            'before': true,
            'after': true
        }], // enforce spacing around the * in generator functions
        'no-class-assign': 2, // disallow modifying variables of class declarations
        'no-const-assign': 2, // disallow modifying variables that are declared using const
        'no-dupe-class-members': 2, // disallow duplicate name in class members
        'no-this-before-super': 2, // disallow use of this/super before calling super() in constructors.
        'no-var': 0, // require let or const instead of var
        'object-shorthand': [2, 'always'], // require method and property shorthand syntax for object literals
        'prefer-arrow-callback': 1, // suggest using arrow functions as callbacks
        'prefer-const': 2, // suggest using const declaration for variables that are never modified after declared
        'prefer-spread': 1, // suggest using the spread operator instead of .apply().
        'prefer-reflect': 0, // suggest using Reflect methods where applicable
        'prefer-template': 1, // suggest using template literals instead of strings concatenation
        'require-yield': 2 // disallow generator functions that do not have yield
    }
};

