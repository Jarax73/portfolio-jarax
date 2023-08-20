/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          <strong>Projets</strong>
        </h2>
      </div>
      <div>
        <ul className="group/list">
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <Link
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    href="https://jrx-music-platform.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Une <strong>application</strong> musicale basée sur
                      Spotify
                    </span>
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Cette application, je l'ai créée dans le but de maîtriser la
                  nouvelle technologie que je venais d'apprendre, Reactjs.
                  <br />
                  J'ai aussi eu à m'exercer avec les APIs, grâce à l'API de
                  Spotify que j'ai utilisé dans cette application.
                </p>
              </div>
              <Image
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                src="/assets/musicapp.png"
                width={300}
                height={148}
                alt="Music app"
              />
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <Link
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    href="https://quiz-app-jakaps.kda-dev-web-2022-classe-a.repl.co"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Une <strong>application</strong> de test de niveau{" "}
                      <strong>JavaScript</strong>
                    </span>
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Pour maîtriser les bases de JavaScript, j'ai eu à faire cet
                  exercice, qui consistait à créer une SPA avec Vanilla
                  JavaScript. <br />
                  L'application a pour but de tester le niveau élémentaire du
                  langage par des questions qui ont un trait avec les bases du
                  langage.
                </p>
              </div>
              <Image
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                src="/assets/spajavascript.png"
                width={300}
                height={148}
                alt="Music app"
              />
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <Link
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    href="https://creer-une-landing-page-pour-une-agence-jakaps.kda-dev-web-2022-classe-a.repl.co/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>Représentation d'une landing page</span>
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Pour comprendre et maîtriser le HTML et CSS. Il m'a été confié
                  une landing page que je devait représenter fidèlement. Il
                  fallait que la représentation puisse être identique à
                  l'original. Elle devait aussi être accessible pour différents
                  types d'écrans.
                </p>
              </div>
              <Image
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                src="/assets/landingpage.png"
                width={300}
                height={148}
                alt="Music app"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
