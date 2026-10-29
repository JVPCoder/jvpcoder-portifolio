// Every skill on the resume, once. `production` items link to the case study that proves them.
export type StackGroup = 'frontend' | 'backend' | 'databases' | 'devops' | 'ai' | 'practices'

export type StackItem =
  | { name: string; group: StackGroup; level: 'production'; caseStudy: string }
  | { name: string; group: StackGroup; level: 'personal' }

const CHECKOUT = 'checkout-refactor'
const WHATSAPP = 'whatsapp-ai-automation'
const WEB = 'responsive-web-suite'

const prod = (name: string, group: StackGroup, caseStudy: string): StackItem => ({ name, group, level: 'production', caseStudy })
const personal = (name: string, group: StackGroup): StackItem => ({ name, group, level: 'personal' })

export const stackGroups: StackGroup[] = ['frontend', 'backend', 'databases', 'devops', 'ai', 'practices']

export const stack: StackItem[] = [
  prod('React', 'frontend', CHECKOUT),
  prod('Next.js', 'frontend', WEB),
  prod('JavaScript', 'frontend', WHATSAPP),
  prod('HTML5', 'frontend', WEB),
  prod('CSS3', 'frontend', WEB),
  personal('TypeScript', 'frontend'),
  personal('Vue.js', 'frontend'),
  personal('Angular', 'frontend'),

  prod('Laravel', 'backend', CHECKOUT),
  prod('PHP', 'backend', CHECKOUT),
  prod('Node.js', 'backend', WHATSAPP),
  personal('Java (Spring Boot)', 'backend'),
  personal('Python', 'backend'),

  prod('MySQL', 'databases', CHECKOUT),
  prod('MongoDB', 'databases', WEB),
  personal('PostgreSQL', 'databases'),
  personal('Supabase', 'databases'),

  prod('Docker', 'devops', WEB),
  prod('Docker Compose', 'devops', WEB),
  prod('Git', 'devops', CHECKOUT),
  prod('GitHub', 'devops', CHECKOUT),
  prod('GitLab', 'devops', WEB),
  prod('CI/CD', 'devops', CHECKOUT),
  prod('REST APIs', 'devops', CHECKOUT),
  prod('n8n', 'devops', WHATSAPP),

  prod('OpenAI API', 'ai', WHATSAPP),
  prod('Conversational AI', 'ai', WHATSAPP),
  prod('CRM Automation', 'ai', WHATSAPP),
  prod('WhatsApp Business API', 'ai', WHATSAPP),

  prod('Clean Architecture', 'practices', CHECKOUT),
  prod('Agile/Scrum', 'practices', CHECKOUT),
  prod('Code Review', 'practices', CHECKOUT),
  personal('DDD', 'practices'),
  personal('Microservices', 'practices'),
  personal('TDD', 'practices'),
]
