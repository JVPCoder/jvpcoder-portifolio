import type { Lang } from '../../lib/route.ts'
import { en, type Dictionary } from './en.ts'
import { pt } from './pt.ts'

export const dictionaries: Record<Lang, Dictionary> = { en, pt }
export type { Dictionary }
