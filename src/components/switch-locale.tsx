"use client";

import { useRouter } from "next/navigation";
import React from "react";
import i18nConfig, { type Locale } from "@/configs/i18n-config";
import useSwitchLocaleHref from "@/hooks/use-switch-locale-href";

type SwitchLocale = {
  current?: Locale["code"];
};

export default function SwitchLocale({ current }: SwitchLocale) {
  const router = useRouter();

  const { getSwitchLocaleHref } = useSwitchLocaleHref();

  return (
    <label className="inline-flex items-center gap-1 text-xs">
      Language:
      <select
        className="border border-gray-300"
        onChange={(e) =>
          router.push(getSwitchLocaleHref(e.target.value as Locale["code"]))
        }
      >
        {i18nConfig.locales.map((aLocale) => (
          <option
            key={aLocale.code}
            value={aLocale.code}
            selected={current === aLocale.code}
          >
            {aLocale.label}
          </option>
        ))}
      </select>
    </label>
  );
}
