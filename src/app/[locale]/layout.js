import { notFound } from "next/navigation";
import AppShell from "@/components/layout/AppShell";
import Providers from "@/app/providers";
import LocaleHtmlUpdater from "@/components/i18n/LocaleHtmlUpdater";
import { isSupportedLocale } from "@/utils/i18n";
import { getDirection } from "@/utils/i18n";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();

  const dir = getDirection(locale);

  return (
    <Providers direction={dir} key={dir}>
      {/* Ensure correct documentElement attributes during client navigations */}
      <LocaleHtmlUpdater locale={locale} />

      {/* Ensure correct direction during SSR (even if <html dir> is wrong) */}
      <div dir={dir} lang={locale} style={{ minHeight: "100dvh" }}>
        <AppShell locale={locale}>{children}</AppShell>
      </div>
    </Providers>
  );
}

