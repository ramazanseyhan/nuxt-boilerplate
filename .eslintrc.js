module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'sort-keys': ['error', 'asc', { natural: true }],
        'sort-keys-fix/sort-keys-fix': 'warn'
      }
    }
  ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  plugins: ['sort-keys-fix'],
  root: true,
  rules: {
    // Best Practices
    'eqeqeq': 'error',

    // Variable
    'init-declarations': 'error',


    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // Stylistic Issues
'array-bracket-newline': ['error', { minItems: null, multiline: true }],

    
'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',


    'no-invalid-this': 'error',


    'array-bracket-spacing': 'error',


    'no-return-assign': 'error',


    'block-spacing': 'error',

    'no-unused-expressions': ['error', { allowTernary: true }],


    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-dangle': 'error',
    'no-useless-concat': 'error',
    'comma-spacing': 'error',
    'no-useless-return': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'no-use-before-define': 'error',
    'func-call-spacing': 'error',
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 2],
    'keyword-spacing': 'error',
    'no-lonely-if': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'no-tabs': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true }
    ],
    'quote-props': ['error', 'consistent'],
    // ES6
'arrow-spacing': 'error',
    
'quotes': ['error', 'single'],

    'semi': ['error', 'never'],

    'no-confusing-arrow': 'error',

    'semi-spacing': 'error',

    'no-duplicate-imports': 'error',

    'space-before-blocks': 'error',

    'no-var': 'error',


    'space-before-function-paren': 'error',
    'object-shorthand': 'error',
    'space-in-parens': 'error',
    'prefer-const': 'error',
    'space-infix-ops': 'error',
    'prefer-template': 'error',
    'space-unary-ops': 'error',


    'vue/html-closing-bracket-newline': [
      'error',
      {
        multiline: 'always',
        singleline: 'never'
      }
    ],

    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ]
      }
    ],

    'vue/html-closing-bracket-spacing': [
      'error',
      {
        endTag: 'never',
        selfClosingTag: 'always',
        startTag: 'never'
      }
    ],

    'vue/html-indent': [
      'error',
      2,
      {
        alignAttributesVertically: true,
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        ignores: []
      }
    ],
    // Vue
    'vue/html-quotes': ['error', 'double'],
    'vue/max-attributes-per-line': [
      'error',
      {
        multiline: {
          allowFirstLine: false,
          max: 1
        },
        singleline: 4
      }
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea']
      }
    ],
    'vue/no-multi-spaces': [
      'error',
      {
        ignoreProperties: false
      }
    ],
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'data',
          'computed',
          'watch',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError'
        ]
      }
    ],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        ignoreWhenNoAttributes: true,
        ignores: ['pre', 'textarea']
      }
    ]
  }
}
