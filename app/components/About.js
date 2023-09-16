/* eslint-disable react/no-unescaped-entities */
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function About() {
  const t = useTranslations("Index");
  const p = usePathname();

  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          <strong>{t("about")}</strong>
        </h2>
      </div>
      <div>
        <p className="mb-4">
          {t("about1")}{" "}
          <Link
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://kadea.academy/"
            target="_blank"
          >
            <strong>KADEA Academy</strong>
          </Link>
          . {t("about2")}
        </p>
        <p className="mb-4">{t("about3")}</p>
        <p className="mb-4">{t("about4")}</p>
        <p className="mb-4">{t("about5")}</p>
      </div>
      <div className="mt-12">
        <Link
          className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
          href={
            p === "/en"
              ? "/assets/cv-EnglishKapilaJared.pdf"
              : "/assets/cv-FrenchKapilaJared.pdf"
          }
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              {t("resumesee")}{" "}
            </span>
            <span className="whitespace-nowrap">
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                <strong>{t("resume")}</strong>
              </span>
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
}
