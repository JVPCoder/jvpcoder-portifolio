// Reviewed and confirmed by João on 2026-10-29. Facts come from the resume plus his answers.
import type { CaseStudy } from './types.ts'

export const whatsappAiAutomation: CaseStudy = {
  slug: 'whatsapp-ai-automation',
  company: 'ESC Automações Digitais & Portal Dez',
  stack: ['Node.js', 'n8n', 'OpenAI API', 'WhatsApp Business API', 'Kommo CRM', 'SQL'],
  diagram: 'WhatsappFlow',
  content: {
    en: {
      title: 'Turning WhatsApp leads into instant, AI-assisted replies',
      tagline: 'Leads waited about 15 minutes for a human to sort them. I built bots that reply in near real time and qualify leads automatically.',
      role: 'Automation Engineer at ESC, IT Consultant at Portal Dez',
      period: '11/2024 - 02/2025',
      metrics: [
        { value: '94%', label: 'of leads handled successfully' },
        { value: '20%', label: 'conversion rate' },
        { value: '~15min', label: 'response time cut to near real time' },
        { value: '40%', label: 'less manual work for the team' },
      ],
      context:
        'At ESC Automações Digitais I was the sole developer of an end-to-end CRM and WhatsApp message manager prototype, and I owned every architecture and implementation decision. I then applied the same approach at Portal Dez, an insurance and real estate business handling about 30 customer conversations a day.',
      problem:
        'Customers reached out on WhatsApp, and an agent had to read each message and decide who should handle it. Average response time was around 15 minutes, and the team spent a large share of its day on manual triage instead of selling.',
      diagnosis:
        'The slow step was the manual triage itself: every lead waited for a person to classify it before anything else could happen. Removing that dependency, not working faster, was the way to cut response time.',
      decisions: [
        {
          title: 'Structured segmentation plus AI replies',
          body: 'Bots use structured lead segmentation logic to sort each conversation, and OpenAI models generate the automated replies. Clear rules decide where a lead goes, and the model handles the conversation.',
        },
        {
          title: 'Official APIs over workarounds',
          body: 'Flows run on the Official WhatsApp Business API and connect to Kommo CRM, so the integration is supported long term and every conversation lands in the CRM.',
        },
        {
          title: 'n8n flows backed by REST and SQL',
          body: 'Automation flows are built in n8n with REST API integrations and JSON data handling. CRM data, REST APIs and SQL pipelines were integrated in JavaScript to centralize customer interaction data for the sales team.',
        },
      ],
      results:
        'Lead handling reached a 94% success rate with a 20% conversion rate across about 30 daily conversations. Response time dropped from around 15 minutes to near real time, manual overhead fell by 40%, and lead qualification became fully automated. At ESC, the prototype consolidated the company\'s automation product offering.',
      next:
        'Track how often conversations need a human handoff and review those cases regularly, to keep improving the segmentation rules and the AI replies.',
      diagramLabel:
        'Diagram of the automation: a customer message on WhatsApp goes through the WhatsApp Business API to n8n and Node.js flows, which segment the lead and ask OpenAI for a reply. Qualified leads go to Kommo CRM, and SQL pipelines centralize interaction data for sales.',
    },
    pt: {
      title: 'Transformando leads do WhatsApp em respostas instantâneas com IA',
      tagline: 'Leads esperavam cerca de 15 minutos por uma triagem manual. Criei bots que respondem quase em tempo real e qualificam leads automaticamente.',
      role: 'Engenheiro de Automação na ESC, Consultor de TI na Portal Dez',
      period: '11/2024 - 02/2025',
      metrics: [
        { value: '94%', label: 'de taxa de atendimento de leads' },
        { value: '20%', label: 'de conversão' },
        { value: '~15min', label: 'de tempo de resposta reduzidos para quase tempo real' },
        { value: '40%', label: 'menos trabalho manual para o time' },
      ],
      context:
        'Na ESC Automações Digitais fui o único desenvolvedor de um protótipo de gerenciador de CRM e mensagens no WhatsApp de ponta a ponta, responsável por todas as decisões de arquitetura e implementação. Depois apliquei a mesma abordagem na Portal Dez, uma empresa de seguros e imóveis com cerca de 30 conversas com clientes por dia.',
      problem:
        'Os clientes chamavam no WhatsApp e um atendente precisava ler cada mensagem e decidir quem cuidaria dela. O tempo médio de resposta era de cerca de 15 minutos, e o time gastava boa parte do dia com triagem manual em vez de vender.',
      diagnosis:
        'O passo lento era a própria triagem manual: cada lead esperava uma pessoa classificá-lo antes de qualquer outra coisa acontecer. Remover essa dependência, e não trabalhar mais rápido, era o caminho para reduzir o tempo de resposta.',
      decisions: [
        {
          title: 'Segmentação estruturada com respostas por IA',
          body: 'Os bots usam uma lógica estruturada de segmentação de leads para classificar cada conversa, e modelos da OpenAI geram as respostas automáticas. Regras claras decidem para onde o lead vai, e o modelo conduz a conversa.',
        },
        {
          title: 'APIs oficiais em vez de gambiarras',
          body: 'Os fluxos rodam na API Oficial do WhatsApp Business e se conectam ao CRM Kommo, então a integração tem suporte a longo prazo e toda conversa chega ao CRM.',
        },
        {
          title: 'Fluxos no n8n apoiados por REST e SQL',
          body: 'Os fluxos de automação foram construídos no n8n com integrações de APIs REST e tratamento de dados em JSON. Dados do CRM, APIs REST e pipelines SQL foram integrados em JavaScript para centralizar os dados de interação com clientes para o time comercial.',
        },
      ],
      results:
        'O atendimento de leads chegou a 94% de sucesso, com 20% de conversão em cerca de 30 conversas diárias. O tempo de resposta caiu de cerca de 15 minutos para quase tempo real, o trabalho manual caiu 40% e a qualificação de leads ficou totalmente automatizada. Na ESC, o protótipo consolidou a oferta de produtos de automação da empresa.',
      next:
        'Medir com que frequência as conversas precisam passar para um humano e revisar esses casos regularmente, para continuar melhorando as regras de segmentação e as respostas da IA.',
      diagramLabel:
        'Diagrama da automação: a mensagem do cliente no WhatsApp passa pela WhatsApp Business API até os fluxos em n8n e Node.js, que segmentam o lead e pedem uma resposta à OpenAI. Leads qualificados vão para o CRM Kommo, e pipelines SQL centralizam os dados de interação para vendas.',
    },
  },
}
