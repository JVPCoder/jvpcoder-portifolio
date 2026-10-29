import type { Dictionary } from '../content/dictionaries/index.ts'
import type { Lang } from '../lib/route.ts'
import { Link } from '../lib/Link.tsx'

export function NotFound({ lang, t }: { lang: Lang; t: Dictionary }) {
  return (
    <section>
      <h1>{t.notFound.title}</h1>
      <p>{t.notFound.body}</p>
      <Link href={`/${lang}`}>{t.notFound.back}</Link>
    </section>
  )
}
