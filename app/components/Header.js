
import Nav from './Nav'
import SocialMedias from './SocialMedias'

export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <h1 className="font-bold tracking-tight text-slate-200 text-4xl sm:text-5xl">Kapila Jared</h1>
      <h2 className="mt-3 text-lg font-medium trackng-tight text-slate-200 sm:text-xl">Développeur web et mobile</h2>
      <p className="mt-4 text-slate-400">Je conçois des applications web et mobiles</p>
      <Nav />
      <SocialMedias />
    </header>
  )
}
