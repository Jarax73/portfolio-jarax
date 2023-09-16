/* eslint-disable react/no-unescaped-entities */
import { useTranslations } from "next-intl";
import Nav from "./Nav";
import SocialMedias from "./SocialMedias";
import Link from "next/link";

export default function Header() {
  const t = useTranslations("Index");
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <h1 className="font-bold tracking-tight text-slate-200 text-4xl sm:text-5xl">
        <strong>Kapila Jared</strong>
      </h1>
      <h2 className="mt-3 text-lg font-medium trackng-tight text-slate-200 sm:text-xl">
        <strong>{t("fonction")}</strong>
      </h2>
      <p className="mt-4 max-w-xs text-slate-400 leading-normal">
        {t("description")}
      </p>
      <Nav />
      <SocialMedias />
    </header>
  );
}
