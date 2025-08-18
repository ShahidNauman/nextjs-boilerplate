import React from "react";
import SwitchLocale from "@/components/switch-locale";
import { type Locale } from "@/configs/i18n-config";
import { getDictionary } from "@/lib/i18n-utils";

type HomePageProps = {
  params: Promise<{ localeCode: Locale["code"] }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { localeCode } = await params;

  const dictionary = await getDictionary(localeCode);

  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-xl">{dictionary.landing.welcome}</h1>
      <SwitchLocale current={localeCode} />
    </div>
  );
}
