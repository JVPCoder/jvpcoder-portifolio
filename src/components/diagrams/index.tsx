import type { DiagramId } from '../../content/case-studies/types.ts'
import type { Lang } from '../../lib/route.ts'
import { CheckoutFlow } from './CheckoutFlow.tsx'
import styles from './Diagram.module.css'
import { WebSuiteFlow } from './WebSuiteFlow.tsx'
import { WhatsappFlow } from './WhatsappFlow.tsx'

const diagrams: Record<DiagramId, typeof CheckoutFlow> = { CheckoutFlow, WhatsappFlow, WebSuiteFlow }

export function Diagram({ id, lang, label }: { id: DiagramId; lang: Lang; label: string }) {
  const Component = diagrams[id]
  return (
    <figure className={styles.figure} data-reveal>
      <Component lang={lang} label={label} />
    </figure>
  )
}
