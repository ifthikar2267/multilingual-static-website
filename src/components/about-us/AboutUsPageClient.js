"use client";

import * as React from "react";
import { AboutUsStoreProvider } from "@/stores/AboutUsStoreProvider";
import AboutUsScreen from "@/components/about-us/AboutUsScreen";

export default function AboutUsPageClient({ initialData, locale }) {
  return (
    <AboutUsStoreProvider initialData={initialData}>
      <AboutUsScreen locale={locale} />
    </AboutUsStoreProvider>
  );
}

