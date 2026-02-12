import { notFound } from "next/navigation";
import { isSupportedLocale } from "@/utils/i18n";
import { getAboutUsRaw } from "@/services/aboutUsService";
import { normalizeAboutUsResponse } from "@/utils/normalizeAboutUs";
import AboutUsContent from "@/components/about-us/AboutUsContent";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale || "en";
  if (!isSupportedLocale(locale)) return {};

  const raw = await getAboutUsRaw(locale);
  const data = normalizeAboutUsResponse(raw);

  const title = data?.meta?.title || "About Us";
  const description = data?.meta?.description || "";
  const ogImage = data?.hero?.image?.url || null;

  return {
    title,
    description,
    alternates: { canonical: `/${locale}/about-us` },
    openGraph: {
      title,
      description,
      type: "website",
      locale,
      images: ogImage ? [{ url: ogImage }] : [],
    },
  };
}

export default async function AboutUsPage({ params }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale || "en";
  if (!isSupportedLocale(locale)) notFound();

  const raw = await getAboutUsRaw(locale);
  const initialData = normalizeAboutUsResponse(raw);

  return <AboutUsContent data={initialData} locale={locale} />;
}

