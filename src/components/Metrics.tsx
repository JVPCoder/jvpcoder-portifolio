import type { CSSProperties } from 'react'
import type { Metric } from '../content/case-studies/types.ts'
import styles from './Metrics.module.css'

export function Metrics({ items, label }: { items: Metric[]; label?: string }) {
  // Even counts sit 2-up on phones; odd counts stack so no cell is left empty.
  const mobileCols = items.length % 2 === 0 ? 2 : 1
  return (
    <dl className={styles.metrics} aria-label={label} style={{ '--n': items.length, '--m': mobileCols } as CSSProperties}>
      {items.map((m) => (
        <div key={m.label} className={styles.item}>
          <dt className={styles.label}>{m.label}</dt>
          <dd className={styles.value}>{m.value}</dd>
        </div>
      ))}
    </dl>
  )
}
