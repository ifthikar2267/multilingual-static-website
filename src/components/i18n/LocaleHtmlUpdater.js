"use client";

import * as React from "react";

export default function LocaleHtmlUpdater({ locale }) {
  React.useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale || "en";
    document.documentElement.dir = dir;
  }, [locale]);

  return null;
}

