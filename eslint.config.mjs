import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unicorn from "eslint-plugin-unicorn";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = [
  ...fixupConfigRules(
    compat.extends(
      "next/core-web-vitals",
      "next/typescript",
      "plugin:import/recommended",
      "plugin:playwright/recommended",
      "plugin:prettier/recommended",
    ),
  ),
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      unicorn: unicorn,
    },
  },
  {
    rules: {
      // Suppress import/no-unresolved for Next.js virtual modules
      "import/no-unresolved": ["error", { ignore: ["server-only"] }],
    },
  },
];

export default eslintConfig;
