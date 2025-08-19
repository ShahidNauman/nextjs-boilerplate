"use client";

import { usePathname } from "next/navigation";
import { type Locale } from "@/configs/i18n-config";

export default function useSwitchLocaleHref() {
  const pathName = usePathname();

  function getSwitchLocaleHref(localeCode: Locale["code"]) {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = localeCode;
    return segments.join("/");
  }

  return { getSwitchLocaleHref };
}
