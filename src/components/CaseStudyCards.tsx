import { ArrowUpRight } from '@phosphor-icons/react'
import { caseStudies } from '../content/case-studies/index.ts'
import type { Dictionary } from '../content/dictionaries/index.ts'
import { Link } from '../lib/Link.tsx'
import type { Lang } from '../lib/route.ts'
import { staggerStyle } from '../lib/reveal.ts'
import styles from './CaseStudyCards.module.css'

export function CaseStudyCards({ lang, t }: { lang: Lang; t: Dictionary }) {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <h2 id="work-title" className="section-title">
        {t.nav.work}
      </h2>
      {/* First study is featured full width; the rest share a row. */}
      <ul className={styles.grid}>
        {caseStudies.map((study, i) => {
          const c = study.content[lang]
          const metric = c.metrics[0]
          return (
            <li key={study.slug} className={i === 0 ? styles.featured : undefined} data-reveal style={staggerStyle(i)}>
              <Link href={`/${lang}/work/${study.slug}`} className={styles.card}>
                <p className={styles.meta}>
                  {study.company}, {c.period}
                </p>
                <h3 className={styles.title}>{c.title}</h3>
                <p className={styles.tagline}>{c.tagline}</p>
                <p className={styles.metric}>
                  <span className={styles.value}>{metric.value}</span> {metric.label}
                </p>
                <ul className={styles.chips} aria-label={t.caseStudy.stack}>
                  {study.stack.slice(0, 4).map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <span className={styles.read}>
                  {t.sections.readCase}
                  <ArrowUpRight size={16} aria-hidden />
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
