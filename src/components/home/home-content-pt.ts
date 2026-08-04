import type { HomeContent } from './home-content';

export const HOME_PT: HomeContent = {
  hero: {
    slides: [
      {
        image: '/hero/hero-slide-1.png',
        eyebrow: 'Soluções Turnkey',
        title: 'Construído em Fábrica.',
        titleAccent: 'Pronto no Local.',
        subtitle: 'Data centers em contêineres pré-fabricados completos — energia, refrigeração, supressão de incêndio e monitoramento — tudo integrado, tudo testado em fábrica, entregue como uma única unidade turnkey em semanas, não meses.',
        ctaPrimary: 'Explorar Soluções',
        ctaPrimaryLink: '/pt/solutions/',
        ctaSecondary: 'Falar com um Especialista',
        ctaSecondaryLink: '/pt/contact-us/',
      },
      {
        image: '/hero/hero-slide-2.png',
        eyebrow: 'Refrigeração Pronta para IA',
        title: 'Refrigeração a Líquido para',
        titleAccent: 'Cargas de Trabalho de IA',
        subtitle: 'A refrigeração a líquido direto no chip elimina o throttling térmico em densidades de rack de 100kW+. Projetado especificamente para clusters de treinamento com GPU.',
        ctaPrimary: 'Ver AICoolit',
        ctaPrimaryLink: '/pt/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/',
        ctaSecondary: 'Solicitar Orçamento',
        ctaSecondaryLink: '/pt/contact-us/',
      },
      {
        image: '/hero/hero-slide-3.png',
        eyebrow: 'Entrega Global',
        title: 'Testado em Fábrica.',
        titleAccent: 'Plug-and-Play.',
        subtitle: 'Da nossa fábrica ao seu local em semanas — não meses. Implantado em mais de 50 países, em todos os climas e todos os padrões de rede elétrica.',
        ctaPrimary: 'Ver Produtos',
        ctaPrimaryLink: '/pt/products/',
        ctaSecondary: 'Contactar Vendas',
        ctaSecondaryLink: '/pt/contact-us/',
      },
    ],
  },

  aiInsights: {
    eyebrow: 'A Mudança da IA',
    title: 'A IA Está Reescrevendo as Regras da Infraestrutura',
    subtitle: 'Os data centers construídos para as cargas de trabalho de ontem não conseguem atender às demandas de IA de amanhã. As densidades de potência triplicaram. As cargas térmicas mudaram fundamentalmente. A indústria precisa de uma nova abordagem — e a SOETECK está construindo-a.',
    points: [
      { title: 'Densidade de Rack de 100kW+', text: 'Os clusters de treinamento de IA exigem densidades de potência que a infraestrutura convencional nunca foi projetada para suportar.' },
      { title: 'Imperativo da Refrigeração a Líquido', text: 'A refrigeração a ar atingiu seus limites físicos. A refrigeração a líquido direto no chip não é mais opcional — é um pré-requisito para a viabilidade da IA.' },
      { title: 'Velocidade de Implantação', text: 'A demanda de capacidade de IA dobra mais rápido do que os ciclos de construção. Módulos pré-fabricados e testados em fábrica comprimem os prazos de anos para semanas.' },
    ],
    cta: 'Explorar Nossas Soluções de IA',
    ctaLink: '/pt/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/',
  },

  industries: {
    eyebrow: 'A Quem Servimos',
    title: 'Confiança em Indústrias Críticas',
    text: 'De operadoras de telecomunicações a hiperscaladores de IA, as organizações mais exigentes do mundo dependem da SOETECK para infraestrutura crítica de energia e refrigeração.',
    items: [
      { icon: 'telecom', title: 'Telecomunicações', image: { path: '/home/industry-telecom.png', alt: 'Infraestrutura de data center de telecomunicações' }, ctaLink: '/pt/solutions/' },
      { icon: 'finance', title: 'Finanças e Bancos', image: { path: '/home/industry-finance.png', alt: 'Confiabilidade de data center financeiro' }, ctaLink: '/pt/solutions/' },
      { icon: 'government', title: 'Governo e Setor Público', image: { path: '/home/industry-government.png', alt: 'Infraestrutura segura governamental' }, ctaLink: '/pt/solutions/' },
      { icon: 'cloud', title: 'Nuvem e Internet', image: { path: '/home/industry-cloud.png', alt: 'Infraestrutura de provedor de serviços em nuvem' }, ctaLink: '/pt/solutions/' },
      { icon: 'ai', title: 'IA e Grandes Modelos', image: { path: '/home/industry-gpu.png', alt: 'Infraestrutura de computação de IA' }, ctaLink: '/pt/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/' },
      { icon: 'manufacturing', title: 'Manufatura', image: { path: '/home/industry-manufacturing.png', alt: 'Data center de manufatura industrial' }, ctaLink: '/pt/solutions/' },
      { icon: 'submarine', title: 'Estações de Pouso de Cabos Submarinos', image: { path: '/home/industry-submarine.png', alt: 'Infraestrutura de estação de pouso de cabo submarino' }, ctaLink: '/pt/solutions/' },
    ],
  },

  solutions: {
    eyebrow: 'Soluções Turnkey',
    title: 'Soluções Completas de Data Center',
    text: 'De únicos gabinetes a campus de vários megawatts — pré-engenheirados, testados em fábrica e entregues como unidades integradas completas.',
    cards: [
      {
        title: 'Data Center Containerizado',
        text: 'Um data center completo selado dentro de um contêiner ISO de 20ft ou 40ft. Energia, refrigeração, supressão de incêndio e monitoramento — tudo integrado, tudo testado em fábrica.',
        image: { path: '/resources/prefabricated-container-data-center-solution-home.webp', alt: 'Data center containerizado' },
        features: ['Entrega em 8–12 semanas', 'Uso interno e externo', 'Redundância N+1 padrão'],
        cta: 'Ver Detalhes',
        ctaLink: '/pt/solutions/data-center-solutions/prefabricated-container-data-center/',
      },
      {
        title: 'Data Center Micromódulo',
        text: 'Arquitetura modular e expansível para implantações internas de média densidade. Os módulos pré-fabricados são entregues com refrigeração e distribuição de energia integradas.',
        image: { path: '/resources/cabinet-data-center-solution-home.webp', alt: 'Data center micromódulo' },
        features: ['Colocação interna flexível', 'Expansão modular gradual', 'Monitoramento integrado'],
        cta: 'Ver Detalhes',
        ctaLink: '/pt/solutions/data-center-solutions/cabinet-modular-data-center/',
      },
      {
        title: 'Soluções Modulares em Fileira',
        text: 'Sistemas de gabinete único e gabinetes em fileira projetados para edge computing, pequenas salas de TI e infraestrutura distribuída.',
        image: { path: '/resources/row-modular-data-center-solution-1.webp', alt: 'Data center modular em fileira' },
        features: ['Pegada ultra-compacta', 'Refrigeração energeticamente eficiente', 'Gestão remota 24/7'],
        cta: 'Ver Detalhes',
        ctaLink: '/pt/solutions/data-center-solutions/row-modular-data-center/',
      },
    ],
  },

  productLines: {
    eyebrow: 'Categorias de Produtos',
    title: 'O Que Fabricamos',
    items: [
      { icon: 'ups', title: 'Sistemas UPS', ctaLink: '/pt/products/critical-power/' },
      { icon: 'cooling', title: 'Refrigeração de Precisão', ctaLink: '/pt/products/thermal-management/' },
      { icon: 'pdu', title: 'Distribuição de Energia', ctaLink: '/pt/products/critical-power/' },
      { icon: 'monitoring', title: 'DCIM e Monitoramento', ctaLink: '/pt/products/' },
      { icon: 'enclosure', title: 'Racks e Gabinetes', ctaLink: '/pt/products/' },
      { icon: 'battery', title: 'Armazenamento de Energia', ctaLink: '/pt/products/critical-power/' },
    ],
  },

  productCategories: {
    eyebrow: 'O Que Vendemos',
    title: 'Produtos',
    groups: [
      {
        label: 'Refrigeração de Precisão',
        items: [
          { title: 'Ar-Condicionado de Precisão de Sala', image: { path: '/resources/room-chilled-water-cooling-home-11-768x768.webp', alt: 'Ar-condicionado de precisão montado em sala' }, hoverImage: { path: '/resources/room-chilled-water-cooling-home-3-768x768.webp', alt: 'Refrigeração a água gelada de sala' }, ctaLink: '/pt/products/thermal-management/precision-air-conditioning/room-cooling/' },
          { title: 'Ar-Condicionado de Precisão em Fileira', image: { path: '/resources/Inrow-cooling-split-DX-home-2-768x768.webp', alt: 'Ar-condicionado de precisão em fileira' }, hoverImage: { path: '/resources/Inrow-cooling-split-DX-home-1-768x768.webp', alt: 'Refrigeração em fileira' }, ctaLink: '/pt/products/thermal-management/precision-air-conditioning/in-row-cooling/' },
          { title: 'Ar-Condicionado de Precisão de Rack', image: { path: '/resources/rack-cooling-1.webp', alt: 'Ar-condicionado de precisão de rack' }, hoverImage: { path: '/resources/rack-cooling-4-768x768.webp', alt: 'Refrigeração de rack' }, ctaLink: '/pt/products/thermal-management/precision-air-conditioning/rack-cooling/' },
          { title: 'Ar-Condicionado de Gabinete Externo', image: { path: '/resources/outdoor-enclosure-cooling-home-2-768x768.webp', alt: 'Ar-condicionado de precisão de gabinete externo' }, hoverImage: { path: '/resources/outdoor-enclosure-cooling-home-1-768x768.webp', alt: 'Refrigeração de gabinete' }, ctaLink: '/pt/products/thermal-management/precision-air-conditioning/telecom-enclosure-air-conditioner/' },
        ],
      },
      {
        label: 'Energia Crítica',
        items: [
          { title: 'Fontes de Energia Ininterrupta', image: { path: '/resources/UPS-homepage-1-768x768.webp', alt: 'Sistema UPS' }, hoverImage: { path: '/resources/UPS-homepage-2-768x768.webp', alt: 'Sistema UPS' }, ctaLink: '/pt/products/critical-power/uninterruptible-power-supplies/' },
          { title: 'Sistema de Energia CC', image: { path: '/resources/dc-power-system-1-768x768.webp', alt: 'Sistema de energia CC' }, hoverImage: { path: '/resources/dc-power-system-2-768x768.webp', alt: 'Sistema de energia CC' }, ctaLink: '/pt/products/critical-power/dc-power-systems/' },
          { title: 'PDUs', image: { path: '/resources/PDU-home-1-768x768.webp', alt: 'Unidade de distribuição de energia' }, hoverImage: { path: '/resources/PDU-home-2-768x768.webp', alt: 'PDU' }, ctaLink: '/pt/products/critical-power/power-distribution/' },
          { title: 'Baterias', image: { path: '/resources/SOETECK-Gel-Battery-home-1-768x768.png', alt: 'Bateria de armazenamento de energia' }, hoverImage: { path: '/resources/SOETECK-Gel-Battery-home-2-768x768.webp', alt: 'Bateria' }, ctaLink: '/pt/products/critical-power/battery/' },
        ],
      },
    ],
  },

  services: {
    eyebrow: 'Entrega End-to-End',
    title: 'Do Projeto à Comissionamento',
    text: 'Um parceiro, um contrato, uma equipe. A SOETECK assume toda a entrega — desde o design colaborativo até os testes em fábrica e o comissionamento no local.',
    image: { path: '/resources/soeteck-factory-1.jpg', alt: 'Fábrica de manufatura SOETECK' },
    steps: [
      { num: '01', title: 'Projeto', text: 'Engenharia colaborativa com modelagem 3D e simulação térmica CFD.' },
      { num: '02', title: 'Fabricação', text: 'Produção interna de UPS, refrigeração, PDUs e gabinetes.' },
      { num: '03', title: 'Integração', text: 'Montagem e configuração em nível de sistema em nossa fábrica.' },
      { num: '04', title: 'Teste', text: 'Testes em carga total, validação térmica e verificação de failover.' },
      { num: '05', title: 'Transporte', text: 'Logística global segura com supervisão porta a porta.' },
      { num: '06', title: 'Comissionamento', text: 'Instalação no local, comissionamento e treinamento dos operadores.' },
    ],
  },

  scenarios: {
    eyebrow: 'Cenários de Aplicação',
    title: 'Projetado para os Ambientes Mais Exigentes',
    text: 'Seja a umidade de uma estação de pouso de cabo submarino ou o calor de um local no deserto, a SOETECK entrega infraestrutura confiável onde for necessário.',
    items: [
      { title: 'Estações de Pouso de Cabos Submarinos', text: 'Infraestrutura de alta confiabilidade e resistente à corrosão para junções críticas de cabos submarinos.', image: { path: '/home/scenario-submarine.png', alt: 'Estação de pouso de cabo submarino' }, tags: ['Alta Confiabilidade', 'Resistente à Corrosão'] },
      { title: 'Edge Computing e 5G', text: 'Micromodulos de data center compactos e de rápida implantação para inferência de baixa latência na borda.', image: { path: '/home/scenario-edge.png', alt: 'Implantação de edge computing' }, tags: ['Compacto', 'Implantação Rápida'] },
      { title: 'Climas Extremos', text: 'Resistente ao deserto, ao clima tropical e ao ártico — projetado para cada ambiente na Terra.', image: { path: '/home/scenario-climate.png', alt: 'Data center em clima extremo' }, tags: ['Deserto', 'Tropical', 'Ártico'] },
      { title: 'Emergência e Recuperação de Desastres', text: 'Módulos testados em fábrica implantados em semanas, não meses, quando o tempo de inatividade não é uma opção.', image: { path: '/home/scenario-emergency.png', alt: 'Data center de recuperação de desastres' }, tags: ['Recuperação Rápida', 'Pré-testado'] },
      { title: 'Locais com Espaço Limitado', text: 'Soluções para telhados, ambientes urbanos e internos que maximizam a capacidade em mínima pegada.', image: { path: '/home/scenario-rooftop.png', alt: 'Data center com espaço limitado' }, tags: ['Telhado', 'Urbano', 'Compacto'] },
      { title: 'Remoto e Off-Grid', text: 'Infraestrutura autónoma para mineração, petróleo e gás, e operações remotas.', image: { path: '/home/scenario-remote.png', alt: 'Data center remoto off-grid' }, tags: ['Off-grid', 'Autónomo'] },
    ],
  },

  timeline: {
    eyebrow: 'Entrega End-to-End',
    title: 'Um Parceiro. Do Projeto ao Comissionamento.',
    text: 'Projeto, fabricação, integração, teste, transporte, instalação — cada etapa conduzida pela SOETECK. Sem disputas entre fornecedores.',
    steps: [
      { num: '01', icon: 'design', title: 'Projeto', text: 'Engenharia colaborativa com modelagem 3D e simulação térmica CFD.' },
      { num: '02', icon: 'manufacture', title: 'Fabricação', text: 'Produção interna de UPS, refrigeração, PDUs e gabinetes.' },
      { num: '03', icon: 'integrate', title: 'Integração', text: 'Montagem e configuração em nível de sistema em nossa fábrica.' },
      { num: '04', icon: 'test', title: 'Teste', text: 'Testes em carga total, validação térmica e verificação de failover.' },
      { num: '05', icon: 'ship', title: 'Transporte', text: 'Logística global segura com supervisão porta a porta.' },
      { num: '06', icon: 'install', title: 'Comissionamento', text: 'Instalação no local, comissionamento e treinamento dos operadores.' },
    ],
  },

  projects: {
    eyebrow: 'Histórico Global',
    title: 'Confiança Onde o Uptime é Inegociável',
    text: 'Dos desertos do Oriente Médio aos trópicos do Sudeste Asiático, os data centers da SOETECK mantêm a infraestrutura crítica funcionando 24 horas.',
    cards: [
      {
        title: 'Recuperação de Desastres da Saudi Telecom',
        location: 'Riad, Arábia Saudita',
        metric: '10',
        metricLabel: 'Semanas para Implantar',
        text: 'Um data center de recuperação de desastres totalmente containerizado para as operações críticas da Saudi Telecom. Carga de TI de 400kW com redundância N+1.',
        image: { path: '/resources/prefab-modular-data-center-of-Saudi-Telecom-0.webp', alt: 'Data center de recuperação de desastres da Saudi Telecom' },
        cta: 'Ver Caso de Estudo',
        ctaLink: '/pt/case-studies/',
      },
      {
        title: 'Rede Regional de Edge',
        location: 'Sudeste Asiático',
        metric: '12',
        metricLabel: 'Locais Implantados',
        text: 'Data centers micromódulo distribuídos em 12 locais para uma operadora de telecomunicações regional.',
        image: { path: '/resources/soeteck-racks-and-cabinets.webp', alt: 'Implantação de edge computing no Sudeste Asiático' },
        cta: 'Ver Caso de Estudo',
        ctaLink: '/pt/case-studies/',
      },
    ],
  },

  whySoeteck: {
    eyebrow: 'A Diferença SOETECK',
    title: 'Por Que os Operadores Mais Exigentes do Mundo Escolhem a Nós',
    text: 'Não é apenas o que construímos — é como construímos, e quem está por trás disso.',
    items: [
      { icon: 'factory', title: 'Fabricante, Não Intermediário', text: 'Projetamos e fabricamos os componentes críticos nós mesmos. Sem cadeias de suprimento opacas, sem camadas de markup.' },
      { icon: 'accountability', title: 'Responsabilidade Única', text: 'Um contrato, uma equipe, uma única parte responsável. Do projeto ao comissionamento, a SOETECK assume toda a entrega.' },
      { icon: 'global', title: 'DNA de Implantação Global', text: 'Mais de 50 países, todos os climas, todos os padrões de rede. Já resolvemos os desafios que inviabilizam outros projetos.' },
      { icon: 'speed', title: 'Velocidade Sem Compromisso', text: 'A pré-montagem e os testes em fábrica comprimem anos de construção no local em semanas.' },
    ],
    stats: [
      { value: '2000', suffix: '+', label: 'Projetos Entregues' },
      { value: '50', suffix: '+', label: 'Países Atendidos' },
      { value: '20', suffix: '+', label: 'Anos de Inovação' },
      { value: '8', suffix: '–12S', label: 'Prazo de Entrega' },
    ],
    certs: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'Certificação CE', '20+ Patentes'],
  },

  news: {
    eyebrow: 'Notícias e Insights',
    title: 'Insights da Indústria e Notícias da Empresa',
    viewAllLabel: 'Ver Todos os Artigos',
    viewAllLink: '/pt/news-and-insights/',
  },

  cta: {
    eyebrow: 'Inicie Seu Projeto',
    title: 'Pronto para Construir Seu Data Center Pronto para IA?',
    text: 'Conte-nos seus requisitos — energia, refrigeração, área, prazo. Vamos projetar a solução ideal e entregá-la turnkey.',
    cards: [
      { icon: 'products', title: 'Consultar Catálogo', text: 'Explore a gama completa de produtos de energia, refrigeração e gabinetes que fabricamos internamente.', cta: 'Ver Produtos', ctaLink: '/pt/products/' },
      { icon: 'solutions', title: 'Obter Solução Personalizada', text: 'Receba uma recomendação sob medida para sua carga de trabalho, local e requisitos específicos de capacidade.', cta: 'Consultar Especialista', ctaLink: '/pt/contact-us/' },
      { icon: 'engineering', title: 'Falar com Engenharia', text: 'Contate diretamente nossa equipe de engenharia para projetos complexos de integração personalizada e design-build.', cta: 'Enviar Consulta', ctaLink: '/pt/contact-us/' },
    ],
  },
};
