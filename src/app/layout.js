import "./globals.css";
import { headers } from "next/headers";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Multilingual Static Website",
    template: "%s | Multilingual Static Website",
  },
  description: "Next.js App Router + MUI SSR + MobX",
};

export default async function RootLayout({ children }) {
  const h = await headers();
  const locale = h.get("x-locale") || "en";
  const dir = h.get("x-dir") || "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
