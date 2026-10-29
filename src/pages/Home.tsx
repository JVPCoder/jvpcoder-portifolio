import { CaseStudyCards } from '../components/CaseStudyCards.tsx'
import { Contact } from '../components/Contact.tsx'
import { Hero } from '../components/Hero.tsx'
import { Stack } from '../components/Stack.tsx'
import { Timeline } from '../components/Timeline.tsx'
import type { Dictionary } from '../content/dictionaries/index.ts'
import type { Lang } from '../lib/route.ts'

export function Home({ lang, t }: { lang: Lang; t: Dictionary }) {
  return (
    <>
      <Hero lang={lang} t={t} />
      <CaseStudyCards lang={lang} t={t} />
      <Stack lang={lang} t={t} />
      <Timeline lang={lang} t={t} />
      <Contact t={t} />
    </>
  )
}
