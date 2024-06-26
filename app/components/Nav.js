"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Nav() {
  const t = useTranslations("Index");
  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        <li>
          <Link className="group flex items-center py-3 active" href="#about">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              {t("about")}
            </span>
          </Link>
        </li>
        <li>
          <Link className="group flex items-center py-3 " href="#experience">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Experience
            </span>
          </Link>
        </li>
        <li>
          <Link className="group flex items-center py-3 " href="#projects">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              {t("project")}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
