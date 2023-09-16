import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jared Kapila",
  manifest: "/manifest.json",
  icons: { apple: "/icon.png", android: "/icon.png" },
  themeColor: "#0f172a",
};

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
}

export default async function RootLayout({ children, params: { locale } }) {
  let content;
  try {
    content = (await import(`../../content/${locale}.json`)).default;
  } catch (error) {
    // notFound();
    console.log("error", error);
  }
  return (
    <html lang="en" className="bg-slate-900 text-slate-400">
      <body className={inter.className}>
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <NextIntlClientProvider locale={locale} messages={content}>
            {children}
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
