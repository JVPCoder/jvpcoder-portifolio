import { EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import type { Dictionary } from '../content/dictionaries/index.ts'
import { profile } from '../content/profile.ts'
import styles from './Footer.module.css'

const YEAR = new Date().getFullYear()

export function Footer({ t }: { t: Dictionary }) {
  const links = [
    { href: `mailto:${profile.email}`, label: profile.email, Icon: EnvelopeSimple },
    { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedinLogo },
    { href: profile.github, label: 'GitHub', Icon: GithubLogo },
  ]

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          © {YEAR} {profile.name}. {t.footer.rights}
        </p>
        <ul className={styles.links}>
          {links.map(({ href, label, Icon }) => (
            <li key={href}>
              <a href={href} className={styles.link} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <Icon size={18} aria-hidden />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
