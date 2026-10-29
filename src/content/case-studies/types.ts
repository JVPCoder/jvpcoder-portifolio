import type { Lang } from '../../lib/route.ts'

export type DiagramId = 'CheckoutFlow' | 'WhatsappFlow' | 'WebSuiteFlow'

export type Metric = { value: string; label: string }
export type Decision = { title: string; body: string }

/** Everything a reader sees, per language. Skim fields first, deep fields after. */
export type CaseStudyCopy = {
  // Skim layer (recruiters)
  title: string
  tagline: string
  role: string
  period: string
  metrics: Metric[]
  // Deep layer (engineers)
  context: string
  problem: string
  diagnosis: string
  decisions: Decision[]
  results: string
  next: string
  diagramLabel: string
}

export type CaseStudy = {
  slug: string
  company: string
  stack: string[]
  diagram: DiagramId
  content: Record<Lang, CaseStudyCopy>
}
