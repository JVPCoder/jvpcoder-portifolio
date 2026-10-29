import type { Lang } from '../../lib/route.ts'
import styles from './Diagram.module.css'
import { Flow, Node } from './Flow.tsx'
import { BOX, rowY } from './geometry.ts'

const text: Record<Lang, { nodes: [string, string][]; side: [string, string] }> = {
  en: {
    nodes: [
      ['WhatsApp', 'Customer message'],
      ['WhatsApp Business API', 'Official API'],
      ['n8n + Node.js', 'Flows, lead segmentation'],
      ['Kommo CRM', 'Qualified leads'],
      ['SQL pipelines', 'Interaction data for sales'],
    ],
    side: ['OpenAI', 'AI replies'],
  },
  pt: {
    nodes: [
      ['WhatsApp', 'Mensagem do cliente'],
      ['WhatsApp Business API', 'API oficial'],
      ['n8n + Node.js', 'Fluxos, segmentação de leads'],
      ['Kommo CRM', 'Leads qualificados'],
      ['Pipelines SQL', 'Dados de interação para vendas'],
    ],
    side: ['OpenAI', 'Respostas IA'],
  },
}

const SIDE = { x: 350, w: 115, row: 2 }

export function WhatsappFlow({ lang, label }: { lang: Lang; label: string }) {
  const { nodes, side } = text[lang]
  const y = rowY(SIDE.row) + BOX.h / 2

  return (
    // Messages in and replies out travel the same path, so the top edges are two-way.
    <Flow id="wa" label={label} nodes={nodes} accent={2} twoWay={[0, 1]}>
      <line
        x1={BOX.x + BOX.w + 2}
        y1={y}
        x2={SIDE.x - 2}
        y2={y}
        className={styles.line}
        markerStart="url(#wa-head)"
        markerEnd="url(#wa-head)"
      />
      <Node x={SIDE.x} y={rowY(SIDE.row)} w={SIDE.w} title={side[0]} sub={side[1]} />
    </Flow>
  )
}
