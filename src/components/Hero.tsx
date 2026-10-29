import { ArrowDown, DownloadSimple } from '@phosphor-icons/react'
import { useState } from 'react'
import photoSmall from '../assets/profile-240.jpg'
import photo from '../assets/profile-800.jpg'
import type { Dictionary } from '../content/dictionaries/index.ts'
import { profile } from '../content/profile.ts'
import { Link } from '../lib/Link.tsx'
import type { Lang } from '../lib/route.ts'
import { hasNavigated } from '../lib/router.ts'
import { Metrics } from './Metrics.tsx'
import styles from './Hero.module.css'

export function Hero({ lang, t }: { lang: Lang; t: Dictionary }) {
  const h = t.home
  // Entrance plays on the first visit only, not when coming back from a case study.
  const [entering] = useState(() => !hasNavigated())
  return (
    <section className={entering ? `${styles.hero} ${styles.entering}` : styles.hero} aria-labelledby="hero-title">
      <div className={styles.grid}>
        <div className={styles.copy}>
          <p className={styles.role}>{h.role}</p>
          <h1 id="hero-title" className={styles.name}>
            {profile.name}
          </h1>
          <p className={styles.intro}>{h.intro}</p>
          <div className={styles.ctas}>
            <Link href={`/${lang}#work`} className="btn btn-primary">
              {h.ctaWork}
              <ArrowDown size={16} aria-hidden />
            </Link>
            <a href={h.resumeHref} download className="btn btn-secondary" aria-label={h.resumeLabel}>
              <DownloadSimple size={16} aria-hidden />
              {h.ctaResume}
            </a>
          </div>
        </div>
        <img
          src={photo}
          srcSet={`${photoSmall} 240w, ${photo} 800w`}
          sizes="(min-width: 900px) 344px, 104px"
          alt={h.photoAlt}
          width={800}
          height={979}
          className={styles.photo}
          fetchPriority="high"
        />
      </div>
      <Metrics items={h.metrics} label={h.metricsLabel} />
    </section>
  )
}
