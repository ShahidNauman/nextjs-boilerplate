import { NextRequest } from "next/server";
import i18nMiddleware from "./middlewares/i18n-middleware";

export function middleware(request: NextRequest) {
  return i18nMiddleware(request);
}

// Matcher ignoring `/_next/` and `/api/` and svg files.
export const config = {
  matcher: ["/((?!api|_next|.*.svg$).*)"],
};
