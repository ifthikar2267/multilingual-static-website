import { redirect } from "next/navigation";

export default async function LocaleIndexPage({ params }) {
  const { locale } = await params;
  redirect(`/${locale}/about-us`);
}

