// Roles from the resume, newest first.
import type { Lang } from '../lib/route.ts'

export type Role = {
  company: string
  caseStudy: string
  content: Record<Lang, { title: string; period: string; mode: string; summary: string }>
}

export const experience: Role[] = [
  {
    company: 'Fábrica do Livro',
    caseStudy: 'checkout-refactor',
    content: {
      en: { title: 'Software Engineer', period: '07/2025 - Present', mode: 'Remote', summary: 'Full stack React and Laravel work on a production e-commerce platform: checkout, repurchase and order processing.' },
      pt: { title: 'Engenheiro de Software', period: '07/2025 - Presente', mode: 'Remoto', summary: 'Trabalho full stack com React e Laravel em uma plataforma de e-commerce em produção: checkout, recompra e processamento de pedidos.' },
    },
  },
  {
    company: 'Portal Dez Seguros & Imóveis',
    caseStudy: 'whatsapp-ai-automation',
    content: {
      en: { title: 'IT Consultant', period: '01/2025 - 02/2025', mode: 'Hybrid', summary: 'WhatsApp automation with the Official API and Kommo CRM, with lead segmentation bots and SQL pipelines.' },
      pt: { title: 'Consultor de TI', period: '01/2025 - 02/2025', mode: 'Híbrido', summary: 'Automação de WhatsApp com a API Oficial e o CRM Kommo, com bots de segmentação de leads e pipelines SQL.' },
    },
  },
  {
    company: 'ESC Automações Digitais',
    caseStudy: 'whatsapp-ai-automation',
    content: {
      en: { title: 'Automation Engineer', period: '11/2024 - 01/2025', mode: 'Hybrid', summary: 'n8n and OpenAI automation flows. Sole developer of an end-to-end CRM and WhatsApp message manager prototype.' },
      pt: { title: 'Engenheiro de Automação', period: '11/2024 - 01/2025', mode: 'Híbrido', summary: 'Fluxos de automação com n8n e OpenAI. Único desenvolvedor de um protótipo de gerenciador de CRM e mensagens no WhatsApp.' },
    },
  },
  {
    company: 'Flize Tecnologia',
    caseStudy: 'responsive-web-suite',
    content: {
      en: { title: 'Software Engineer', period: '07/2024 - 10/2024', mode: 'Remote', summary: 'Three responsive sites from Figma designs with React, Next.js, PHP and MongoDB, in Docker environments.' },
      pt: { title: 'Engenheiro de Software', period: '07/2024 - 10/2024', mode: 'Remoto', summary: 'Três sites responsivos a partir de designs do Figma com React, Next.js, PHP e MongoDB, em ambientes Docker.' },
    },
  },
]
