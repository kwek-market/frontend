import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals"
  ),
  {
    plugins: {
      react,
      "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 12,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      indent: ["off", 2],
      "linebreak-style": ["error", "unix"],
      semi: ["error", "always"],
      "prefer-const": "off",
      "@next/next/no-duplicate-head": "off",
      "react-hooks/exhaustive-deps": "off",
      "@next/next/no-page-custom-font": "off",
      "react-hooks/rules-of-hooks": "off",

      "@typescript-eslint/no-unused-vars": [
        "off",
        {
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/explicit-module-boundary-types": "off", // Disables the rule that enforces explicit return types
      "@typescript-eslint/no-explicit-any": "off",
    },
    ignores: ["/node_modules/"],
  },
];
