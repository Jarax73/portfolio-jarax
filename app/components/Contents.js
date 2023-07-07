/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

export default function Contents() {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">
      <About />
      {/* <Experience /> */}
      <Projects />
      <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
        <p>
          J'ai travaillé à la création de ce portfolio en me basant sur le
          travail de
          <Link
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://brittanychiang.com/"
          >
            {" "}
            Brittany Chiang
          </Link>
          , car je l'ai beaucoup apprécié.
          <br /> Je vais prendre le temps dans l'avenir de designer mon propre
          modèle
        </p>
      </footer>
    </main>
  );
}
