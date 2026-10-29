import { EnvelopeSimple, LinkedinLogo } from '@phosphor-icons/react'
import type { Dictionary } from '../content/dictionaries/index.ts'
import { profile } from '../content/profile.ts'
import styles from './Contact.module.css'

export function Contact({ t }: { t: Dictionary }) {
  return (
    <section id="contact" className={`section ${styles.contact}`} aria-labelledby="contact-title">
      <div className={styles.panel} data-reveal>
        <h2 id="contact-title" className={styles.title}>
          {t.home.contactTitle}
        </h2>
        <p className={styles.body}>{t.home.contactBody}</p>
        <div className={styles.ctas}>
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            <EnvelopeSimple size={18} aria-hidden />
            {t.home.contactCta}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">
            <LinkedinLogo size={18} aria-hidden />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
