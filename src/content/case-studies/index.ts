import { checkoutRefactor } from './checkout-refactor.ts'
import { responsiveWebSuite } from './responsive-web-suite.ts'
import { whatsappAiAutomation } from './whatsapp-ai-automation.ts'
import type { CaseStudy } from './types.ts'

export const caseStudies: CaseStudy[] = [checkoutRefactor, whatsappAiAutomation, responsiveWebSuite]

export const findCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug)

export type { CaseStudy }
