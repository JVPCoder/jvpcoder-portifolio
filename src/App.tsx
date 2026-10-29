import { useEffect, useState, type ReactNode } from 'react'
import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'
import { findCaseStudy } from './content/case-studies/index.ts'
import { dictionaries } from './content/dictionaries/index.ts'
import { preferredLang } from './lib/route.ts'
import { observeReveals } from './lib/reveal.ts'
import { hasNavigated, navigate, usePathname, useRoute } from './lib/router.ts'
import { CaseStudy } from './pages/CaseStudy.tsx'
import { Home } from './pages/Home.tsx'
import { NotFound } from './pages/NotFound.tsx'

/** Fades a page in when the visitor arrives from another page. Decided once, at mount. */
function Page({ children }: { children: ReactNode }) {
  const [animate] = useState(hasNavigated)
  return <div className={animate ? 'page-enter' : undefined}>{children}</div>
}

export default function App() {
  const route = useRoute()
  const pathname = usePathname()

  useEffect(() => {
    if (route.name === 'root') navigate(`/${preferredLang(navigator.language)}`, { replace: true })
  }, [route.name])

  const lang = route.name === 'root' ? 'en' : route.lang
  const t = dictionaries[lang]
  const study = route.name === 'work' ? findCaseStudy(route.slug) : undefined
  const missing = route.name === 'notFound' || (route.name === 'work' && !study)
  const pageTitle = study ? study.content[lang].title : missing ? t.notFound.title : undefined

  useEffect(() => {
    document.documentElement.lang = t.meta.htmlLang
    document.title = pageTitle ? `${pageTitle} | ${t.meta.title}` : t.meta.title
  }, [t, pageTitle])

  useEffect(() => observeReveals(), [pathname])

  if (route.name === 'root') return null

  return (
    <>
      <a href="#main" className="skip-link">
        {t.skipLink}
      </a>
      <Header lang={lang} t={t} pathname={pathname} />
      <main id="main" className="container">
        <Page key={pathname}>
          {route.name === 'home' && <Home lang={lang} t={t} />}
          {study && <CaseStudy study={study} lang={lang} t={t} />}
          {missing && <NotFound lang={lang} t={t} />}
        </Page>
      </main>
      <Footer t={t} />
    </>
  )
}
