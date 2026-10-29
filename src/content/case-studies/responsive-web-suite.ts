// Reviewed and confirmed by João on 2026-10-29. Facts come from the resume plus his answers.
import type { CaseStudy } from './types.ts'

export const responsiveWebSuite: CaseStudy = {
  slug: 'responsive-web-suite',
  company: 'Flize Tecnologia',
  stack: ['React', 'Next.js', 'PHP', 'MongoDB', 'Docker', 'GitLab'],
  diagram: 'WebSuiteFlow',
  content: {
    en: {
      title: 'Three responsive sites from Figma to production',
      tagline: 'Client designs had to become fast, mobile-ready sites. I delivered three, pixel-perfect, with identical local and production environments.',
      role: 'Software Engineer',
      period: '07/2024 - 10/2024',
      metrics: [
        { value: '3', label: 'complete sites delivered in 4 months' },
        { value: 'Pixel-perfect', label: 'match to the Figma designs' },
        { value: '1:1', label: 'local and production environments' },
      ],
      context:
        'Flize Tecnologia builds websites and web applications for clients. During my engagement I worked remotely, turning client designs into production applications.',
      problem:
        'Each project started as a Figma design and had to ship as a complete, responsive application that works on phones as well as desktops. With several projects in parallel, each one also needed a setup that behaves the same on every machine and in production.',
      diagnosis:
        'Two things decide whether this kind of work ships cleanly: how faithfully the design is translated into components, and whether the environment a developer tests in matches the one users hit. I treated both as part of the job, not as extras.',
      decisions: [
        {
          title: 'Mobile-optimized from the first component',
          body: 'Designs were built in React and Next.js as responsive, mobile-optimized components, matched to the Figma specs at every screen size.',
        },
        {
          title: 'Docker Compose for every project',
          body: 'Each application ran in containerized environments with Docker and Docker Compose, so local development and production stayed in parity and setup bugs did not reach users.',
        },
        {
          title: 'Branches and code review in GitLab',
          body: 'All work went through version-controlled GitLab workflows with structured branching and code review, with CI/CD-ready pipelines on each project.',
        },
      ],
      results:
        'Three complete, pixel-perfect responsive sites delivered within the engagement, built with React, Next.js, PHP and MongoDB, each with a containerized environment and a CI/CD-ready pipeline. All three were hand-coded, with no AI assistance.',
      next:
        'Add automated visual regression tests against the Figma designs, so pixel-perfect stays true after every change.',
      diagramLabel:
        'Diagram of the delivery flow: Figma designs become responsive React and Next.js interfaces backed by PHP and MongoDB, all running in Docker Compose so local and production match, with every change reviewed in GitLab.',
    },
    pt: {
      title: 'Três sites responsivos do Figma para produção',
      tagline: 'Designs de clientes precisavam virar sites rápidos e prontos para mobile. Entreguei três, pixel-perfect, com ambientes local e de produção idênticos.',
      role: 'Engenheiro de Software',
      period: '07/2024 - 10/2024',
      metrics: [
        { value: '3', label: 'sites completos entregues em 4 meses' },
        { value: 'Pixel-perfect', label: 'fiéis aos designs do Figma' },
        { value: '1:1', label: 'ambientes local e de produção' },
      ],
      context:
        'A Flize Tecnologia desenvolve sites e aplicações web para clientes. Durante o contrato trabalhei de forma remota, transformando designs de clientes em aplicações em produção.',
      problem:
        'Cada projeto começava como um design no Figma e precisava virar uma aplicação completa e responsiva, que funcionasse tanto no celular quanto no desktop. Com vários projetos em paralelo, cada um também precisava de um ambiente que se comportasse igual em qualquer máquina e em produção.',
      diagnosis:
        'Duas coisas decidem se esse tipo de trabalho é entregue sem problemas: a fidelidade com que o design vira componentes, e se o ambiente onde o desenvolvedor testa é o mesmo que o usuário acessa. Tratei as duas como parte do trabalho, não como extras.',
      decisions: [
        {
          title: 'Otimizado para mobile desde o primeiro componente',
          body: 'Os designs foram construídos em React e Next.js como componentes responsivos e otimizados para mobile, fiéis às specs do Figma em todos os tamanhos de tela.',
        },
        {
          title: 'Docker Compose em todo projeto',
          body: 'Cada aplicação rodava em ambientes conteinerizados com Docker e Docker Compose, mantendo paridade entre desenvolvimento local e produção para que bugs de ambiente não chegassem aos usuários.',
        },
        {
          title: 'Branches e code review no GitLab',
          body: 'Todo o trabalho passou por fluxos versionados no GitLab, com branching estruturado e code review, e pipelines prontos para CI/CD em cada projeto.',
        },
      ],
      results:
        'Três sites completos, responsivos e pixel-perfect entregues dentro do contrato, construídos com React, Next.js, PHP e MongoDB, cada um com ambiente conteinerizado e pipeline pronto para CI/CD. Os três foram codados à mão, sem assistência de IA.',
      next:
        'Adicionar testes automatizados de regressão visual comparando com os designs do Figma, para que o pixel-perfect continue verdadeiro a cada mudança.',
      diagramLabel:
        'Diagrama do fluxo de entrega: designs do Figma viram interfaces responsivas em React e Next.js com backend em PHP e MongoDB, tudo rodando em Docker Compose para que local e produção sejam iguais, com cada mudança revisada no GitLab.',
    },
  },
}
