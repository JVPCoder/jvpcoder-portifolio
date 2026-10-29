import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import type { CaseStudy as CaseStudyData } from '../content/case-studies/index.ts'
import { caseStudies } from '../content/case-studies/index.ts'
import type { Dictionary } from '../content/dictionaries/index.ts'
import { Diagram } from '../components/diagrams/index.tsx'
import { Metrics } from '../components/Metrics.tsx'
import { Link } from '../lib/Link.tsx'
import type { Lang } from '../lib/route.ts'
import styles from './CaseStudy.module.css'

type Props = { study: CaseStudyData; lang: Lang; t: Dictionary }

export function CaseStudy({ study, lang, t }: Props) {
  const c = study.content[lang]
  const s = t.caseStudy
  const index = caseStudies.indexOf(study)
  const next = caseStudies.length > 1 ? caseStudies[(index + 1) % caseStudies.length] : undefined

  const prose: [string, string][] = [
    [s.context, c.context],
    [s.problem, c.problem],
    [s.diagnosis, c.diagnosis],
  ]

  return (
    <article className={styles.page}>
      {/* Skim layer: everything a recruiter needs, above the fold. */}
      <header className={styles.intro}>
        <Link href={`/${lang}#work`} className={styles.back}>
          <ArrowLeft size={16} aria-hidden />
          {s.back}
        </Link>
        <p className={styles.meta}>
          {study.company}, {c.period}
        </p>
        <h1 className={styles.title}>{c.title}</h1>
        <p className={styles.tagline}>{c.tagline}</p>
      </header>

      <Metrics items={c.metrics} />

      <dl className={styles.facts}>
        <div>
          <dt>{s.role}</dt>
          <dd>{c.role}</dd>
        </div>
        <div>
          <dt>{s.stack}</dt>
          <dd>
            <ul className={styles.chips}>
              {study.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>

      {/* Deep layer: the engineering story. */}
      <div className={styles.body}>
        {prose.map(([heading, text]) => (
          <section key={heading} className={styles.section}>
            <h2>{heading}</h2>
            <p>{text}</p>
          </section>
        ))}

        <section className={`${styles.section} ${styles.wide}`}>
          <h2>{s.architecture}</h2>
          <Diagram id={study.diagram} lang={lang} label={c.diagramLabel} />
        </section>

        <section className={`${styles.section} ${styles.wide}`}>
          <h2>{s.decisions}</h2>
          <ul className={styles.decisions}>
            {c.decisions.map((d) => (
              <li key={d.title}>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>{s.results}</h2>
          <p>{c.results}</p>
        </section>

        <section className={styles.section}>
          <h2>{s.next}</h2>
          <p>{c.next}</p>
        </section>
      </div>

      {next && (
        <Link href={`/${lang}/work/${next.slug}`} className={styles.next}>
          <span className={styles.nextLabel}>{s.nextCase}</span>
          <span className={styles.nextTitle}>
            {next.content[lang].title}
            <ArrowRight size={20} aria-hidden />
          </span>
        </Link>
      )}
    </article>
  )
}
