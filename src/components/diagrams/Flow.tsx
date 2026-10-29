import type { CSSProperties, ReactNode } from 'react'
import styles from './Diagram.module.css'

import { BOX, VIEW_W, flowHeight, rowY } from './geometry.ts'

type Props = {
  id: string
  label: string
  nodes: [title: string, sub: string][]
  accent: number
  /** Edges drawn with arrows at both ends (index = edge from node i to i+1). */
  twoWay?: number[]
  children?: ReactNode
}

export function Node({ x, y, w, title, sub, accent }: { x: number; y: number; w: number; title: string; sub: string; accent?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={BOX.h} rx="10" className={accent ? styles.boxAccent : styles.box} />
      <text x={x + 18} y={y + 26} className={styles.title}>{title}</text>
      <text x={x + 18} y={y + 45} className={styles.sub}>{sub}</text>
    </g>
  )
}

export function Flow({ id, label, nodes, accent, twoWay = [], children }: Props) {
  const midX = BOX.x + BOX.w / 2
  const head = `${id}-head`

  return (
    <svg viewBox={`0 0 ${VIEW_W} ${flowHeight(nodes.length)}`} className={styles.svg} role="img" aria-label={label}>
      <defs>
        <marker id={head} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className={styles.head} />
        </marker>
        <marker id={`${head}-accent`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className={styles.headAccent} />
        </marker>
      </defs>

      {nodes.map(([title, sub], i) => (
        <g key={title} className={styles.node} style={{ '--i': i } as CSSProperties}>
          <Node x={BOX.x} y={rowY(i)} w={BOX.w} title={title} sub={sub} accent={i === accent} />
          {i < nodes.length - 1 && (
            <line
              x1={midX}
              y1={rowY(i) + BOX.h + (twoWay.includes(i) ? 2 : 0)}
              x2={midX}
              y2={rowY(i + 1) - 2}
              className={styles.line}
              markerStart={twoWay.includes(i) ? `url(#${head})` : undefined}
              markerEnd={`url(#${head})`}
            />
          )}
        </g>
      ))}
      {children && (
        <g className={styles.node} style={{ '--i': nodes.length } as CSSProperties}>
          {children}
        </g>
      )}
    </svg>
  )
}
