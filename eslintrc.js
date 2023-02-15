module.exports = {
    extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
      'plugin:prettier/recommended'
    ],
    plugins: ['react', '@typescript-eslint', 'jest'],
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    rules: {
        "prettier/prettier": ["error", { "singleQuote": true }],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single", { "avoidEscape": true }],
        "semi": ["error", "always"],
        "no-trailing-spaces": "error",
        "no-console": "error",
        "no-unused-vars": [
          "error",
          {
            "argsIgnorePattern": "^_"
          }
        ],
        "react/no-unescaped-entities": "off",
        "react/require-default-props": "error",
        "sort-imports": [
          "error",
          {
            "ignoreCase": true,
            "ignoreDeclarationSort": true
          }
        ],
        "import/no-unresolved": ["error", { "commonjs": true, "amd": true }],
        "import/named": "error",
        "import/namespace": "error",
        "import/default": "error",
        "import/export": "error"
    },
  };