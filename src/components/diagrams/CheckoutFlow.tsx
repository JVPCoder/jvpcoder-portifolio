import type { Lang } from '../../lib/route.ts'
import styles from './Diagram.module.css'
import { Flow } from './Flow.tsx'
import { BOX, flowHeight, rowY } from './geometry.ts'

const text: Record<Lang, { nodes: [string, string][]; loop: [string, string] }> = {
  en: {
    nodes: [
      ['React checkout', 'Customer buys again'],
      ['Laravel API', 'REST endpoints'],
      ['Service layer', 'Order rules, Clean Architecture'],
      ['Query layer', 'Shared, reusable order queries'],
      ['MySQL', 'Orders'],
    ],
    loop: ['Repurchase', 'cycle restored'],
  },
  pt: {
    nodes: [
      ['Checkout React', 'Cliente compra de novo'],
      ['API Laravel', 'Endpoints REST'],
      ['Camada de serviço', 'Regras de pedido, Clean Architecture'],
      ['Camada de queries', 'Queries de pedido reutilizáveis'],
      ['MySQL', 'Pedidos'],
    ],
    loop: ['Ciclo de recompra', 'restaurado'],
  },
}

export function CheckoutFlow({ lang, label }: { lang: Lang; label: string }) {
  const { nodes, loop } = text[lang]
  const last = nodes.length - 1
  const loopX = 410
  const right = BOX.x + BOX.w

  return (
    <Flow id="co" label={label} nodes={nodes} accent={0}>
      {/* Completed order loops back to checkout as the next repeat purchase. */}
      <path
        d={`M${right} ${rowY(last) + BOX.h / 2} H${loopX} V${rowY(0) + BOX.h / 2} H${right + 4}`}
        className={styles.lineAccent}
        markerEnd="url(#co-head-accent)"
      />
      <g transform={`translate(${loopX} ${flowHeight(nodes.length) / 2})`}>
        <rect x="-62" y="-24" width="124" height="48" rx="24" className={styles.badge} />
        <text textAnchor="middle" y="-4" className={styles.badgeText}>{loop[0]}</text>
        <text textAnchor="middle" y="13" className={styles.badgeText}>{loop[1]}</text>
      </g>
    </Flow>
  )
}
