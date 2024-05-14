import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import importOrderPlugin from "eslint-plugin-import";
import prettierConfig from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";
import i18nPlugin from "eslint-plugin-i18next";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  prettierConfig,
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
      import: importOrderPlugin,
      prettier: eslintPluginPrettier,
      i18next: i18nPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { varsIgnorePattern: "_" }],
      "i18next/no-literal-string": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prefer-stateless-function": "error",
      "react/no-unused-prop-types": "error",
      "react/jsx-pascal-case": "error",
      "react/jsx-no-script-url": "error",
      "react/no-children-prop": "error",
      "react/no-danger": "error",
      "react/no-danger-with-children": "error",
      "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
      "react/destructuring-assignment": [
        "error",
        "always",
        { destructureInSignature: "always" },
      ],
      "react/function-component-definition": [
        "warn",
        { namedComponents: "arrow-function" },
      ],
      "react/jsx-key": [
        "error",
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
          warnOnDuplicates: true,
        },
      ],
      "react/jsx-no-useless-fragment": "warn",
      "react/jsx-curly-brace-presence": "warn",
      "react/no-typos": "warn",
      "react/display-name": "warn",
      "react/self-closing-comp": "warn",
      "react/jsx-sort-props": "warn",
      "react/react-in-jsx-scope": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/prop-types": "off",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["sibling", "parent"],
            "index",
            "unknown",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    rules: {
      "i18next/no-literal-string": "off",
      "react-hooks/rules-of-hooks": "off",
    },
  },
];
