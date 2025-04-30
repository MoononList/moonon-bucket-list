import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";
import pluginPrettier from "eslint-plugin-prettier";
import emotion from "@emotion/eslint-plugin";
import prettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: pluginReact,
      import: pluginImport,
      prettier: pluginPrettier,
      emotion: emotion,
    },
    rules: {
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off", // React 17+
      "react/jsx-uses-react": "off",
      "emotion/jsx-import": "off",
      "emotion/syntax-preference": ["error", "styled"],
      "import/order": [
        "warn",
        {
          groups: [
            ["builtin", "external"],
            "internal",
            ["parent", "sibling", "index"],
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "no-console": "warn",
      "no-unused-vars": "warn",
    },
  },

  ...tseslint.configs.recommended,
  ...pluginReact.configs.flat.recommended,

  {
    name: "prettier-overrides",
    rules: prettier.rules,
  },
]);
