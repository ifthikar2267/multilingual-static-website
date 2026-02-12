export const SUPPORTED_LOCALES = ["en", "ar"];

export function isSupportedLocale(locale) {
  return SUPPORTED_LOCALES.includes(locale);
}

export function getDirection(locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

