"use client";

import { useTranslations } from "next-intl";
import Contents from "../components/Contents";
import Header from "../components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <div className="absolute top-0 left-6">
        <Link href="/fr" className="pr-6">
          Fr
        </Link>
        <Link href="/en">En</Link>
      </div>
      <Header />
      <Contents />
    </div>
  );
}
