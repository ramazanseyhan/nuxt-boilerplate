module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@nuxtjs",
    "plugin:nuxt/recommended"
  ],
  plugins: ["sort-keys-fix"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    // Best Practices
    eqeqeq: "error",
    "no-invalid-this": "error",
    "no-return-assign": "error",
    "no-unused-expressions": ["error", { allowTernary: true }],
    "no-useless-concat": "error",
    "no-useless-return": "error",

    // Variable
    "init-declarations": "error",
    "no-use-before-define": "error",

    // Stylistic Issues
    "array-bracket-newline": ["error", { multiline: true, minItems: null }],
    "array-bracket-spacing": "error",
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "block-spacing": "error",
    "comma-dangle": "error",
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "func-call-spacing": "error",
    "implicit-arrow-linebreak": ["error", "beside"],
    indent: ["error", 2],
    "keyword-spacing": "error",
    "no-lonely-if": "error",
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
    "no-tabs": "error",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "error",
    "object-property-newline": [
      "error",
      { allowAllPropertiesOnSameLine: true }
    ],
    "quote-props": ["error", "consistent"],
    quotes: ["error", "single"],
    semi: ["error", "never"],
    "semi-spacing": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": "error",
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",

    // ES6
    "arrow-spacing": "error",
    "no-confusing-arrow": "error",
    "no-duplicate-imports": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-const": "error",
    "prefer-template": "error",

    // Vue
    "vue/html-quotes": ["error", "double"],
    "vue/html-indent": [
      "error",
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "always"
      }
    ],
    "vue/html-closing-bracket-spacing": [
      "error",
      {
        startTag: "never",
        endTag: "never",
        selfClosingTag: "always"
      }
    ],
    "vue/no-multi-spaces": [
      "error",
      {
        ignoreProperties: false
      }
    ],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 4,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    "vue/multiline-html-element-content-newline": [
      "error",
      {
        ignoreWhenEmpty: true,
        ignores: ["pre", "textarea"]
      }
    ],
    "vue/singleline-html-element-content-newline": [
      "error",
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ["pre", "textarea"]
      }
    ],
    "vue/attributes-order": [
      "error",
      {
        order: [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          "UNIQUE",
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT"
        ]
      }
    ],
    "vue/order-in-components": [
      "error",
      {
        order: [
          "el",
          "name",
          "parent",
          "functional",
          ["delimiters", "comments"],
          ["components", "directives", "filters"],
          "extends",
          "mixins",
          "inheritAttrs",
          "model",
          ["props", "propsData"],
          "data",
          "computed",
          "watch",
          "LIFECYCLE_HOOKS",
          "methods",
          ["template", "render"],
          "renderError"
        ]
      }
    ]
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "sort-keys-fix/sort-keys-fix": "warn",
        "sort-keys": ["error", "asc", { natural: true }]
      }
    }
  ],
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  }
};
