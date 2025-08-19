/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 * @type {import("@trivago/prettier-plugin-sort-imports").PluginConfig}
 * @type {import("prettier-plugin-tailwindcss").PluginOptions}
 */

export default {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],

  // Import Sorting Options
  importOrder: [
    "<THIRD_PARTY_MODULES>", // node_modules first
    "^@/(.*)$", // Then all @/ imports (Next.js alias)
    "^[./]", // Then relative imports last
  ],

  // TailwindCSS Plugin Options
  tailwindFunctions: ["clsx", "cn"], // (Optional) className helpers
};
