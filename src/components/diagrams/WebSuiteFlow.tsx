import type { Lang } from '../../lib/route.ts'
import { Flow } from './Flow.tsx'

const nodes: Record<Lang, [string, string][]> = {
  en: [
    ['Figma', 'Client designs'],
    ['React + Next.js', 'Responsive, mobile-optimized UI'],
    ['PHP + MongoDB', 'Backend and data'],
    ['Docker Compose', 'Same environment, local and prod'],
    ['GitLab', 'Branches and code review'],
  ],
  pt: [
    ['Figma', 'Designs do cliente'],
    ['React + Next.js', 'Interface responsiva para mobile'],
    ['PHP + MongoDB', 'Backend e dados'],
    ['Docker Compose', 'Mesmo ambiente, local e produção'],
    ['GitLab', 'Branches e code review'],
  ],
}

export function WebSuiteFlow({ lang, label }: { lang: Lang; label: string }) {
  return <Flow id="ws" label={label} nodes={nodes[lang]} accent={3} />
}
