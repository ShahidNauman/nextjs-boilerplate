const i18nConfig = {
  defaultLocaleCode: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English (United States)",
    },
    {
      code: "de-DE",
      label: "German (Germany)",
    },
  ],
} as const;

export type Locale = (typeof i18nConfig)["locales"][number];

export default i18nConfig;
