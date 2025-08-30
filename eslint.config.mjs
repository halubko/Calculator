import js from "@eslint/js"
import globals from "globals"
import { defineConfig } from "eslint/config"
import prettierPlugin from "eslint-plugin-prettier"
import prettierConfig from "eslint-config-prettier"

export default defineConfig([
   {
      files: ["**/*.{js,mjs,cjs}"],
      plugins: {
         js,
         prettier: prettierPlugin,
      },
      extends: ["js/recommended", prettierConfig],
      languageOptions: {
         globals: globals.browser,
         sourceType: "module",
      },
      rules: {
         ...prettierPlugin.configs.recommended.rules,
         "no-eval": "error",
         "no-implied-eval": "error",
         "no-unused-vars": "warn",
         "no-console": "off",
         "no-extra-parens": [
            "error",
            "all",
            {
               nestedBinaryExpressions: false,
            },
         ],
         curly: "error",
         eqeqeq: "error",
         "no-magic-numbers": [
            "warn",
            {
               ignore: [0, 1],
               ignoreArrayIndexes: true,
            },
         ],
      },
      ignores: ["webpack.config.js"],
   },
])
