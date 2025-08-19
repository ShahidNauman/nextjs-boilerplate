import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { type NextRequest, NextResponse } from "next/server";
import i18nConfig, { type Locale } from "@/configs/i18n-config";

function getLocaleCode(request: NextRequest): Locale["code"] {
  const headers = {
    "accept-language": request.headers.get("accept-language") ?? "",
  };
  const languages = new Negotiator({ headers }).languages();
  return match(
    languages,
    i18nConfig.locales.map((aLocale) => aLocale.code),
    i18nConfig.defaultLocaleCode,
  ) as Locale["code"];
}

export default function i18nMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = i18nConfig.locales.some(
    (aLocale) =>
      pathname.startsWith(`/${aLocale.code}/`) ||
      pathname === `/${aLocale.code}`,
  );

  // `/_next/` and `/api/` are ignored by the watcher,
  // but we need to ignore files in `public` manually.
  if (
    pathnameHasLocale ||
    [
      "/manifest.json",
      "/favicon.ico",
      // Your other files in `public`.
    ].includes(pathname)
  ) {
    return;
  }

  const localeCode = getLocaleCode(request);
  request.nextUrl.pathname = `/${localeCode}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}
