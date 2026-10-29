// Pure URL <-> route mapping. No React, so node --test can import it directly.

export const LANGS = ['en', 'pt'] as const
export type Lang = (typeof LANGS)[number]

export type Route =
  | { name: 'root' }
  | { name: 'home'; lang: Lang }
  | { name: 'work'; lang: Lang; slug: string }
  | { name: 'notFound'; lang: Lang }

export const isLang = (value: string | undefined): value is Lang =>
  LANGS.includes(value as Lang)

export function parseRoute(pathname: string): Route {
  const parts = pathname.split('/').filter(Boolean)
  if (parts.length === 0) return { name: 'root' }

  const [first, second, third, ...rest] = parts
  if (!isLang(first)) return { name: 'notFound', lang: 'en' }
  if (parts.length === 1) return { name: 'home', lang: first }
  if (second === 'work' && third && rest.length === 0) {
    return { name: 'work', lang: first, slug: third }
  }
  return { name: 'notFound', lang: first }
}

/** Same page, other language. Falls back to that language's home. */
export function switchLangPath(pathname: string, lang: Lang): string {
  const route = parseRoute(pathname)
  if (route.name === 'work') return `/${lang}/work/${route.slug}`
  return `/${lang}`
}

export const preferredLang = (browserLang: string | undefined): Lang =>
  browserLang?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
