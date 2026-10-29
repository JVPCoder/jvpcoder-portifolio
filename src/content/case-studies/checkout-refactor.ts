// Reviewed and corrected by João on 2026-10-29. Facts come from the resume plus his answers.
import type { CaseStudy } from './types.ts'

export const checkoutRefactor: CaseStudy = {
  slug: 'checkout-refactor',
  company: 'Fábrica do Livro',
  stack: ['React', 'Laravel', 'PHP', 'MySQL'],
  diagram: 'CheckoutFlow',
  content: {
    en: {
      title: 'Fixing a broken checkout and making it faster',
      tagline: 'Customers could not complete repeat purchases. I found the cause, fixed it, and made order processing faster.',
      role: 'Software Engineer, sole engineer on the fix',
      period: '07/2025 - Present',
      metrics: [
        { value: 'Restored', label: 'repeat purchases completing again' },
        { value: '~1s', label: 'faster average API response' },
        { value: '30%', label: 'more system stability' },
      ],
      context:
        'Fábrica do Livro runs a production e-commerce platform built on React and Laravel, with around 12 years of legacy PHP behind it. Checkout and repurchase are the flows that turn visits into revenue.',
      problem:
        'A bug in the repurchase cycle stopped orders from completing. Returning customers could start a purchase but the order never finished, so the business was losing revenue for as long as the bug stayed live.',
      diagnosis:
        'As the only engineer on the issue, I started from the screenshots attached to the task and traced the checkout cycle backwards, from the React checkout through the Laravel services to the order records in MySQL, until I found where the cycle broke. Fixing it at that point restored the whole flow instead of patching one symptom.',
      decisions: [
        {
          title: 'Service layer over controller logic',
          body: 'Order rules lived inside legacy PHP components. I moved them into service-layer abstractions following Clean Architecture, so checkout logic has one home and the coupling between old components dropped.',
        },
        {
          title: 'One reusable query layer for orders',
          body: 'Instead of separate hand-written queries per endpoint, I built dynamic, reusable query logic shared across the order processing services. Fewer queries to maintain, and each one tuned once.',
        },
        {
          title: 'Leaner validation on the hot path',
          body: 'Backend validation and database queries on the order path were optimized together, which is where most of the response time was going.',
        },
      ],
      results:
        'Repeat purchases complete again and the revenue leak stopped. Average API response time dropped by about one second, and system stability improved by 30%. Changes shipped through GitHub code review and CI/CD in an Agile/Scrum team.',
      next:
        'Add automated end-to-end tests around the repurchase flow, so a regression like this fails in CI instead of in production.',
      diagramLabel:
        'Diagram of the repurchase flow: the React checkout calls Laravel API endpoints, which go through a service layer and a shared query layer to MySQL. Completed orders loop back as repeat purchases, the cycle that was broken and is now restored.',
    },
    pt: {
      title: 'Corrigindo um checkout quebrado e deixando ele mais rápido',
      tagline: 'Clientes não conseguiam concluir recompras. Encontrei a causa, corrigi e deixei o processamento de pedidos mais rápido.',
      role: 'Engenheiro de Software, único engenheiro na correção',
      period: '07/2025 - Presente',
      metrics: [
        { value: 'Restaurado', label: 'recompras voltaram a ser concluídas' },
        { value: '~1s', label: 'a menos no tempo médio de resposta da API' },
        { value: '30%', label: 'mais estabilidade do sistema' },
      ],
      context:
        'A Fábrica do Livro opera uma plataforma de e-commerce em produção construída com React e Laravel, com cerca de 12 anos de PHP legado por trás. Checkout e recompra são os fluxos que transformam visitas em receita.',
      problem:
        'Um bug no ciclo de recompra impedia que os pedidos fossem concluídos. Clientes recorrentes iniciavam a compra, mas o pedido nunca finalizava, e a empresa perdia receita enquanto o bug estivesse no ar.',
      diagnosis:
        'Como único engenheiro no problema, comecei pelos prints anexados à tarefa e rastreei o ciclo de checkout de trás para frente, do checkout em React passando pelos serviços em Laravel até os registros de pedido no MySQL, até encontrar onde o ciclo quebrava. Corrigir nesse ponto restaurou o fluxo inteiro, em vez de remendar um sintoma.',
      decisions: [
        {
          title: 'Camada de serviço em vez de lógica nos controllers',
          body: 'As regras de pedido viviam dentro de componentes PHP legados. Movi essas regras para abstrações de camada de serviço seguindo Clean Architecture, então a lógica do checkout tem um lugar só e o acoplamento entre componentes antigos caiu.',
        },
        {
          title: 'Uma camada de queries reutilizável para pedidos',
          body: 'Em vez de queries escritas à mão para cada endpoint, construí uma lógica de queries dinâmica e reutilizável, compartilhada pelos serviços de processamento de pedidos. Menos queries para manter, e cada uma otimizada uma vez.',
        },
        {
          title: 'Validação mais enxuta no caminho crítico',
          body: 'A validação no backend e as queries do fluxo de pedido foram otimizadas juntas, que era onde a maior parte do tempo de resposta estava indo.',
        },
      ],
      results:
        'As recompras voltaram a ser concluídas e a perda de receita parou. O tempo médio de resposta da API caiu cerca de um segundo, e a estabilidade do sistema melhorou 30%. As mudanças passaram por code review no GitHub e CI/CD, em um time Agile/Scrum.',
      next:
        'Adicionar testes automatizados de ponta a ponta no fluxo de recompra, para que uma regressão como essa falhe no CI e não em produção.',
      diagramLabel:
        'Diagrama do fluxo de recompra: o checkout em React chama endpoints da API em Laravel, que passam por uma camada de serviço e uma camada de queries compartilhada até o MySQL. Pedidos concluídos voltam como recompras, o ciclo que estava quebrado e agora foi restaurado.',
    },
  },
}
