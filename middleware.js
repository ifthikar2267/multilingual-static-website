import { NextResponse } from "next/server";

const SUPPORTED_LOCALES = ["en", "ar"];
const isSupportedLocale = (locale) => SUPPORTED_LOCALES.includes(locale);
const getDirection = (locale) => (locale === "ar" ? "rtl" : "ltr");

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1] || "";

  const locale = isSupportedLocale(firstSegment) ? firstSegment : "en";
  const dir = getDirection(locale);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);
  requestHeaders.set("x-dir", dir);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};

