import { Translate } from '@phosphor-icons/react'
import { dictionaries, type Dictionary } from '../content/dictionaries/index.ts'
import { profile } from '../content/profile.ts'
import { Link } from '../lib/Link.tsx'
import { switchLangPath, type Lang } from '../lib/route.ts'
import styles from './Header.module.css'

type Props = { lang: Lang; t: Dictionary; pathname: string }

export function Header({ lang, t, pathname }: Props) {
  const otherLang: Lang = lang === 'en' ? 'pt' : 'en'
  const home = `/${lang}`
  const sections = [
    { id: 'work', label: t.nav.work },
    { id: 'stack', label: t.nav.stack },
    { id: 'experience', label: t.nav.experience },
    { id: 'contact', label: t.nav.contact },
  ]

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href={home} className={styles.brand}>
          {profile.name}
        </Link>
        <nav aria-label={t.nav.label} className={styles.nav}>
          <ul className={styles.links}>
            {sections.map((s) => (
              <li key={s.id}>
                <Link href={`${home}#${s.id}`} className={styles.link}>
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={switchLangPath(pathname, otherLang)}
            hrefLang={dictionaries[otherLang].meta.htmlLang}
            aria-label={t.nav.switchLang}
            title={t.nav.switchLang}
            className={styles.lang}
          >
            <Translate size={16} weight="bold" aria-hidden />
            {t.nav.switchLangShort}
          </Link>
        </nav>
      </div>
    </header>
  )
}
