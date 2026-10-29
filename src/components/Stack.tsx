import { ArrowUpRight } from '@phosphor-icons/react'
import type { Dictionary } from '../content/dictionaries/index.ts'
import { stack, stackGroups } from '../content/stack.ts'
import { Link } from '../lib/Link.tsx'
import type { Lang } from '../lib/route.ts'
import styles from './Stack.module.css'

export function Stack({ lang, t }: { lang: Lang; t: Dictionary }) {
  const s = t.sections
  return (
    <section id="stack" className="section" aria-labelledby="stack-title">
      <h2 id="stack-title" className="section-title">
        {t.nav.stack}
      </h2>
      <p className={styles.intro}>{s.stackIntro}</p>
      <div className={styles.legend} aria-hidden>
        <span className={`${styles.chip} ${styles.production}`}>
          {s.production}
          <ArrowUpRight size={12} />
        </span>
        <span className={`${styles.chip} ${styles.personal}`}>{s.personal}</span>
      </div>

      <div className={styles.groups} data-reveal>
        {stackGroups.map((group) => (
          <div key={group} className={styles.group}>
            <h3 className={styles.groupTitle}>{s.groups[group]}</h3>
            <ul className={styles.chips}>
              {stack
                .filter((item) => item.group === group)
                .map((item) => (
                  <li key={item.name}>
                    {item.level === 'production' ? (
                      <Link
                        href={`/${lang}/work/${item.caseStudy}`}
                        className={`${styles.chip} ${styles.production}`}
                        aria-label={`${item.name}, ${s.production}`}
                      >
                        {item.name}
                        <ArrowUpRight size={12} aria-hidden />
                      </Link>
                    ) : (
                      <span className={`${styles.chip} ${styles.personal}`} aria-label={`${item.name}, ${s.personal}`}>
                        {item.name}
                      </span>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
