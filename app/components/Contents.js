/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import { useTranslations } from "next-intl";

export default function Contents() {
  const t = useTranslations("Index");
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">
      <About />
      <Experience />
      <Projects />
      <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
        <p>
          {t("footerdesc1")}{" "}
          <Link
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://brittanychiang.com/"
          >
            Brittany Chiang
          </Link>
          , {t("footerdesc2")}
          <br /> {t("footerdesc3")}
        </p>
      </footer>
    </main>
  );
}
