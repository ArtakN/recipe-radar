/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
    ecmaVersion: "latest",
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "unused-imports",
    "jest",
    "playwright",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",                 // TS basic rules
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // rules that need type info
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:playwright/playwright-test",
  ],
  settings: {
    "import/resolver": {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  rules: {
    // General rules
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "prefer-const": "warn",
    "no-var": "error",

    // TypeScript-specific
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",

    // Import
    "import/order": ["warn", {
      "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
      "newlines-between": "always",
    }],

    // Unused imports cleanup
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": ["warn", { args: "none", vars: "all" }],

    // Jest / Vitest (unit / integration)
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",

    // Playwright (E2E)
    "playwright/no-skipped-tests": "warn",
    "playwright/test-property-missing-leading-underscore": "off",
  },
  overrides: [
    {
      // Lint test files differently
      files: ["**/*.test.ts", "**/*.spec.ts", "**/*.test.tsx", "**/*.spec.tsx"],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
    {
      // Lint configuration files as JS
      files: [".eslintrc.js", "vite.config.ts", "playwright.config.ts"],
      parserOptions: {
        project: null,
      },
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      // For Playwright test files
      files: ["tests/e2e/**/*.ts", "src/**/*.e2e.ts", "**/*.pw.ts"],
      env: {
        "node": true,
      },
      extends: [
        "plugin:playwright/playwright-test"
      ],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
};