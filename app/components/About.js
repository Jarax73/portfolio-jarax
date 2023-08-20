/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          <strong>À Propos</strong>
        </h2>
      </div>
      <div>
        <p className="mb-4">
          J'aime le développement informatique, et depuis longtemps, j'ai
          toujours cherché à me former dans ce domaine. Jusqu'à ce que je suis
          tombé sur une formation à la{" "}
          <Link
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://kadea.academy/"
            target="_blank"
          >
            <strong>KADEA Academy</strong>
          </Link>
          . Et là j'ai appris les bases du développement web et mobile. Les
          exercices sous-formes de projets m'ont aidés à assimiler facilement
          les nouvelles notions.
        </p>
        <p className="mb-4">
          Grâce à cette formation, j'ai appris à ne pas se concentrer à une
          technologie donnée, mais plutôt à appréhender la logique derrière la
          technologie. Ainsi je ne serai pas esclave d'un outil
        </p>
        <p className="mb-4">
          Pour mon temps libre, j'aime apprendre sur les nouveautés dans le
          monde du développement.
        </p>
        <p className="mb-4">
          Quand je ne suis pas devant mon laptop, je joue à la guitare ou je
          suis de la musique. J'aime aussi jouer au foot et suivre des series
          scientifiques
        </p>
      </div>
      <div className="mt-12">
        <Link
          className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
          href="/assets/cv-FrenchKapilaJared.pdf"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              Voir mon{" "}
            </span>
            <span className="whitespace-nowrap">
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                <strong>CV</strong>
              </span>
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
}
