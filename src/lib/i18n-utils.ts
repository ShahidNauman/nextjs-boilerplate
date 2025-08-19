import "server-only";
import { type Locale } from "@/configs/i18n-config";

// Enumerate all dictionaries for better linting and TypeScript support.
// Also get the default import for cleaner types.
const dictionaries = {
  "en-US": () =>
    import("../dictionaries/en-US.json").then((module) => module.default),
  "de-DE": () =>
    import("../dictionaries/de-DE.json").then((module) => module.default),
};

export const getDictionary = async (localeCode: Locale["code"]) =>
  dictionaries[localeCode]?.() ?? dictionaries["en-US"]();
