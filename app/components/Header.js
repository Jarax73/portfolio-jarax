/* eslint-disable react/no-unescaped-entities */
import Nav from "./Nav";
import SocialMedias from "./SocialMedias";

export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <h1 className="font-bold tracking-tight text-slate-200 text-4xl sm:text-5xl">
        <strong>Kapila Jared</strong>
      </h1>
      <h2 className="mt-3 text-lg font-medium trackng-tight text-slate-200 sm:text-xl">
        <strong>Développeur web et mobile</strong>
      </h2>
      <p className="mt-4 max-w-xs text-slate-400 leading-normal">
        Je conçois des <strong className="text-slate-400">applications</strong>{" "}
        web et mobiles accessibles pour tous types d'écrans.
      </p>
      <Nav />
      <SocialMedias />
    </header>
  );
}
