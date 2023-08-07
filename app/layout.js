import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jared Kapila portfolio",
  description: "Une idée de ce que j'ai pu faire",
  manifest: "/manifest.json",
  icons: { apple: "/icon.png", android: "/icon.png" },
  themeColor: "#0f172a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-400">
      <body className={inter.className}>
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          {children}
        </div>
      </body>
    </html>
  );
}
