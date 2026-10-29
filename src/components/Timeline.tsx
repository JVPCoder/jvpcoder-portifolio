import type { Dictionary } from '../content/dictionaries/index.ts'
import { experience } from '../content/experience.ts'
import { Link } from '../lib/Link.tsx'
import type { Lang } from '../lib/route.ts'
import styles from './Timeline.module.css'

export function Timeline({ lang, t }: { lang: Lang; t: Dictionary }) {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <h2 id="experience-title" className="section-title">
        {t.nav.experience}
      </h2>
      <ol className={styles.list}>
        {experience.map((role) => {
          const r = role.content[lang]
          return (
            <li key={role.company} className={styles.item} data-reveal>
              <p className={styles.period}>
                {r.period}
                <span className={styles.mode}>{r.mode}</span>
              </p>
              <div className={styles.body}>
                <h3 className={styles.role}>
                  {r.title}, <span className={styles.company}>{role.company}</span>
                </h3>
                <p className={styles.summary}>{r.summary}</p>
                <Link href={`/${lang}/work/${role.caseStudy}`} className={styles.link} aria-label={`${t.sections.readCase}: ${role.company}`}>
                  {t.sections.readCase}
                </Link>
              </div>
            </li>
          )
        })}
      </ol>
      <div className={styles.education} data-reveal>
        <p className={styles.period}>{t.sections.degreeDate}</p>
        <div className={styles.body}>
          <h3 className={styles.role}>{t.sections.degree}</h3>
          <p className={styles.summary}>
            {t.sections.education}: {t.sections.school}
          </p>
        </div>
      </div>
    </section>
  )
}
