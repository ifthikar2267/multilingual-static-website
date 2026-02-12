import { notFound } from "next/navigation";
import AppShell from "@/components/layout/AppShell";
import { isSupportedLocale } from "@/utils/i18n";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();

  return <AppShell locale={locale}>{children}</AppShell>;
}

