import type { HomeContent } from './home-content';

export const HOME_PT: HomeContent = {
  hero: {
    slides: [
      {
        image: '/hero/hero-slide-1.webp',

        eyebrow: 'SOETECK · Fornecedor de Data Centers Prefabricados',

        title: 'Entregue em semanas,',

        titleAccent: 'não em anos.',

        subtitle: 'Data centers contenedorizados, com contenimento de corredores, em fila e de gabinete único da SOETECK — com energia, refrigeração e supressão de incêndio integradas em fábrica e cada unidade pronta para operar no dia da chegada, para clústeres de IA, sites de borda e recuperação de desastres no mundo todo.',

        ctaPrimary: 'Explorar soluções',

        ctaPrimaryLink: '/pt/solutions/',

        ctaSecondary: 'Falar com um especialista',

        ctaSecondaryLink: '/pt/contact-us/',

      },
      {
        image: '/hero/hero-slide-2.webp',

        eyebrow: 'Infraestrutura de IA prefabricada de pilha completa',

        title: 'Data centers de IA,',

        titleAccent: 'projetados como um só.',

        subtitle: 'Gabinetes de GPU agora passam de 100kW, e a refrigeração a ar não acompanha. Projetamos energia, refrigeração líquida, racks e monitoramento como um stack de IA integrado, e enviamos prefabricado e turnkey, operante no dia da chegada.',

        ctaPrimary: 'Veja como é construído',

        ctaPrimaryLink: '/pt/solutions/data-center-solutions/ai-data-center/',

        ctaSecondary: 'Solicitar orçamento',

        ctaSecondaryLink: '/pt/contact-us/',

      },
      {
        image: '/hero/hero-slide-1.webp',

        eyebrow: 'Parceiro turnkey',

        title: 'Entrega de ponta a ponta,',

        titleAccent: 'responsabilidade única.',

        subtitle: 'Uma equipe cuida de tudo: engenharia, produção fabril, logística global, comissionamento e pós-venda — você recebe as chaves com um único parceiro responsável.',

        ctaPrimary: 'Falar com um especialista',

        ctaPrimaryLink: '/pt/contact-us/',

        ctaSecondary: 'Contactar vendas',

        ctaSecondaryLink: '/pt/contact-us/',

      },
      {
        image: '/hero/hero-slide-3.webp',

        eyebrow: 'Prova global',

        title: 'Implantado em',

        titleAccent: 'mais de 50 países.',

        subtitle: 'Do calor do deserto ao frio ártico, em cada padrão comum de rede elétrica, nossas unidades mantêm plataformas de treinamento de IA, nós de borda e sites críticos operando 24/7.',

        ctaPrimary: 'Ler casos de sucesso',

        ctaPrimaryLink: '/pt/news-and-insights/client-case-studies/',

        ctaSecondary: 'Contactar vendas',

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
      { icon: 'telecom', title: 'Telecomunicações', image: { path: '/home/industry-telecom.png', alt: 'Infraestrutura de data center de telecomunicações' }, ctaLink: '/pt/solutions/telecom/' },
      { icon: 'colocation', title: 'Colocação', image: { path: '/home/industry-colocation.png', alt: 'Infraestrutura de data center de colocation' }, ctaLink: '/pt/solutions/colocation/' },
      { icon: 'cloud', title: 'Nuvem e Internet', image: { path: '/home/industry-cloud.png', alt: 'Infraestrutura de provedor de serviços em nuvem' }, ctaLink: '/pt/solutions/cloud-hyperscale/' },
      { icon: 'internet', title: 'Internet', image: { path: '/home/industry-internet.png', alt: 'Infraestrutura de data center de plataformas de internet' }, ctaLink: '/pt/solutions/internet/' },
      { icon: 'finance', title: 'Finanças e Bancos', image: { path: '/home/industry-finance.png', alt: 'Confiabilidade de data center financeiro' }, ctaLink: '/pt/solutions/finance/' },
      { icon: 'government', title: 'Governo e Setor Público', image: { path: '/home/industry-government.png', alt: 'Infraestrutura segura governamental' }, ctaLink: '/pt/solutions/government/' },
      { icon: 'manufacturing', title: 'Manufatura', image: { path: '/home/industry-manufacturing.png', alt: 'Data center de manufatura industrial' }, ctaLink: '/pt/solutions/manufacturing/' },
      { icon: 'healthcare', title: 'Saúde', image: { path: '/home/industry-healthcare.png', alt: 'Infraestrutura de data center de saúde' }, ctaLink: '/pt/solutions/healthcare/' },
    ],
  },

  solutions: {
    eyebrow: 'Soluções Pré-Fabricadas e Turnkey',
    title: 'Soluções Completas de Data Center',
    text: 'De únicos gabinetes a campus de vários megawatts — pré-engenheirados, testados em fábrica e entregues como unidades integradas completas.',
    cards: [
      {
        title: 'Data Center de IA',
        text: 'Infraestrutura de IA pré-fabricada para cargas de trabalho de GPU. Os módulos de contêiner chegam com refrigeração líquida integrada e energia de alta densidade — testados em fábrica e prontos para computação na chegada.',
        image: { path: '/resources/ai-data-center/ai-data-center-hero.webp', alt: 'Data center de IA' },
        features: ['Online em 90–120 dias', 'Até 120 kW/rack', 'PUE tão baixo quanto 1.08'],
        cta: 'Ver Detalhes',
        ctaLink: '/pt/solutions/data-center-solutions/ai-data-center/',
      },
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
          { title: 'Ar-Condicionado de Gabinete Externo', image: { path: '/resources/outdoor-enclosure-cooling-home-2-768x768.webp', alt: 'Ar-condicionado de precisão de gabinete externo' }, hoverImage: { path: '/resources/outdoor-enclosure-cooling-home-1-768x768.webp', alt: 'Refrigeração de gabinete' }, ctaLink: '/pt/products/thermal-management/telecom-enclosure-air-conditioner/' },
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
    eyebrow: 'Nossos serviços',
    title: 'O que entregamos para você',
    text: 'Da primeira conversa a anos de operação — a SOETECK é dona do ciclo de vida completo. Isso significa para o seu projeto:',
    image: { path: '/resources/soeteck-factory-1.jpg', alt: 'Fábrica de manufatura SOETECK' },
    steps: [
      { num: '01', icon: 'design', title: 'Projeto gratuito', text: 'Conte-nos os requisitos de energia, refrigeração e site — receba gratuitamente uma solução de data center com layout 3D e simulação térmica.' },
      { num: '02', icon: 'manufacture', title: 'Fabricação própria', text: 'UPS, refrigeração de precisão, distribuição de energia e gabinetes projetados e fabricados em nossa própria fábrica — sem intermediários e com qualidade controlada.' },
      { num: '03', icon: 'test', title: 'Testes de aceitação', text: 'Cada unidade passa por testes de carga plena antes do envio — você pode testemunhar no local ou por vídeo: validado antes de sair da fábrica.' },
      { num: '04', icon: 'ship', title: 'Logística e alfândega', text: 'FOB, CIF ou DDP — frete, documentação e desembaraço por nossa conta; entregas em mais de 50 países cobrem todos os padrões de rede.' },
      { num: '05', icon: 'install', title: 'Instalação e treinamento', text: 'Nossos engenheiros instalam, comissionam no site e treinam sua equipe local — sem terceirização e sem lacunas de responsabilidade.' },
      { num: '06', icon: 'support', title: 'Pós-venda e peças', text: 'Garantia de 2 anos, suporte 7×24, monitoramento remoto e envio emergencial de peças — um contrato, uma equipe, responsabilidade total.' },
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
    ctaAll: 'Ver Todos os Casos de Estudo',
    projectsAllLink: '/pt/news-and-insights/client-case-studies/',
    cards: [
      {
        title: 'Saudi Telecom',
        location: 'Riad, Arábia Saudita',
        metric: '2',
        metricLabel: 'Data Centers de Contêiner 40ft',
        text: 'Dois data centers containerizados móveis OLT de 40 pés para a Saudi Telecom: alimentação DC dupla com baterias de reserva e 7 OLTs em cada unidade, para operação ininterrupta.',
        image: { path: '/resources/prefab-modular-data-center-of-Saudi-Telecom-0.webp', alt: 'Data center containerizado da Saudi Telecom' },
        cta: 'Ler História Completa',
        ctaLink: '/pt/news-and-insights/client-case-studies/driving-innovation-soeteck-provides-saudi-telecom-with-advanced-mobile-olt-container-data-center-solutions/',
        testimonial: {
          quote: 'O cliente expressou satisfação com os resultados, acreditando que o data center containerizado lançou uma base sólida para seu desenvolvimento de longo prazo.',
          author: 'Saudi Telecom',
          role: 'Projeto DR, Oriente Médio',
        },
      },
      {
        title: 'GRD Qatar',
        location: 'Catar',
        metric: '24/7',
        metricLabel: 'Operação Estável',
        text: 'Um data center containerizado personalizado para a GRD, mantendo dados críticos estáveis 24/7 em clima de calor e tempestades de areia — apoiando sua transformação digital.',
        image: { path: '/resources/soeteck-racks-and-cabinets.webp', alt: 'Data center containerizado da GRD Qatar' },
        cta: 'Ler História Completa',
        ctaLink: '/pt/news-and-insights/client-case-studies/grd-qatar-gets-24-7-stable-data-via-soetecks-custom-containerized-data-center/',
        testimonial: {
          quote: 'O data center containerizado foi implantado rapidamente e opera nossas cargas 24/7, mesmo sob calor extremo e tempestades de areia.',
          author: 'GRD',
          role: 'Operações, Filial no Catar',
        },
      },
      {
        title: 'Telecom Fiji',
        location: 'Fiji',
        metric: '45',
        metricLabel: 'kW ACs Anticorrosivos',
        text: 'Estações costeiras atualizadas com condicionadores de precisão anticorrosivos de 20kW e 45kW, substituindo unidades domésticas no ambiente salino e úmido.',
        image: { path: '/home/industry-submarine.png', alt: 'Resfriamento de precisão em estação costeira da Telecom Fiji' },
        cta: 'Ler História Completa',
        ctaLink: '/pt/news-and-insights/client-case-studies/telecom-fiji-enhances-network-stability-with-soetecks-precision-cooling-solutions-featuring-anti-corrosion-design/',
        testimonial: {
          quote: 'Os condicionadores anticorrosivos de precisão restauraram o resfriamento estável em nossas estações costeiras — equipamentos que antes falhavam no ar salino.',
          author: 'Telecom Fiji',
          role: 'Operações de Rede',
        },
      },
      {
        title: 'Open DC Malaysia',
        location: 'Malásia',
        metric: '100',
        metricLabel: 'kW Resfriamento Modular',
        text: 'Dois conjuntos de unidades modulares de resfriamento a ar de 100kW reformam as salas de servidores compactas da Open DC Malaysia — upgrade onde unidades convencionais não cabiam.',
        image: { path: '/home/industry-gpu.png', alt: 'Retrofit do data center Open DC Malaysia' },
        cta: 'Ler História Completa',
        ctaLink: '/pt/news-and-insights/client-case-studies/open-dc-malaysia-deploys-modular-100kw-air-cooled-precision-cooling-for-data-center-retrofit/',
        testimonial: {
          quote: 'As unidades modulares da SOETECK cabem onde sistemas convencionais não conseguiam, dando às nossas salas reformadas resfriamento confiável de classe 100kW.',
          author: 'Open DC Malaysia',
          role: 'Engenharia de Instalações',
        },
      },
      {
        title: 'WebSat Media',
        location: 'Singapura',
        metric: 'N+1',
        metricLabel: 'Redundância de Resfriamento',
        text: 'Cinco condicionadores de precisão de 70kW em redundância N+1 mantêm a infraestrutura de satélite e transmissão da WebSat Media online para clientes globais.',
        image: { path: '/home/scenario-remote.png', alt: 'Resfriamento do data center WebSat Media' },
        cta: 'Ler História Completa',
        ctaLink: '/pt/news-and-insights/client-case-studies/websat-media-optimizes-data-center-infrastructure-with-soetecks-cooling-solutions/',
        testimonial: {
          quote: 'Com redundância N+1 em cinco unidades de precisão, nossas plataformas de satélite e transmissão permanecem online para clientes em todos os continentes.',
          author: 'WebSat Media',
          role: 'Infraestrutura de Data Center',
        },
      },
      {
        title: 'Sinus-Dochi LLC',
        location: 'Mongólia',
        metric: 'In-Row',
        metricLabel: 'Resfriamento de Precisão',
        text: 'Um sistema de resfriamento de precisão In-Row para uma líder mongol de engenharia HVAC — compressores inverter DC, ventiladores EC e redundância N+1 reduzem o PUE do data center, com controle inteligente levando o resfriamento até a fonte de calor.',
        image: { path: '/resources/a-project-of-Sinus-Dochi-LLC-2.webp', alt: 'Resfriamento de precisão In-Row Sinus-Dochi LLC' },
        cta: 'Ler História Completa',
        ctaLink: '/pt/news-and-insights/client-case-studies/sinus-dochi-llc-reduces-pue-and-enhances-cooling-efficiency-with-soetecks-smart-precision-cooling-system/',
        testimonial: {
          quote: 'O sistema inteligente de resfriamento de precisão In-Row reduziu o PUE do nosso data center e manteve a temperatura precisa — eficiência e confiabilidade em uma única solução.',
          author: 'Sinus-Dochi LLC',
          role: 'Engenharia HVAC, Mongólia',
        },
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
      { icon: 'solutions', title: 'Obter Solução Personalizada', text: 'Receba uma recomendação sob medida para sua carga de trabalho, local e requisitos específicos de capacidade.', cta: 'Explorar Soluções', ctaLink: '/pt/solutions/' },
      { icon: 'engineering', title: 'Falar com Engenharia', text: 'Contate diretamente nossa equipe de engenharia para projetos complexos de integração personalizada e design-build.', cta: 'Enviar Consulta', ctaLink: '/pt/contact-us/' },
    ],
  },

  productsIntro: {
    eyebrow: 'Fabricação Própria',
    title: 'Energia e Refrigeração, Projetados pela SOETECK',
    text: 'Sistemas UPS, refrigeração de precisão, distribuição de energia e gabinetes — projetados e fabricados em nossa própria fábrica, para que cada componente atenda às especificações.',
  },

  transition: {
    eyebrow: 'A Solução',
    title: 'Quatro Arquiteturas Turnkey',
    text: 'Cada data center SOETECK sai de fábrica pronto para o site. De infraestrutura de IA turnkey a implantações containerizadas, micromodulares e modulares em fileira — escolha o modelo ideal para seu local, densidade e cronograma.',
  },

  newsC: {
    newsLabel: 'Notícias',
    newsLink: '/pt/news-and-insights/news-releases/',
    blogLabel: 'Blogs',
    blogLink: '/pt/news-and-insights/blogs/',
    viewAllNews: 'Ver todas as notícias →',
    viewAllBlogs: 'Ver todos os blogs →',
    newsEyebrow: 'Últimas notícias',
    newsTitle: 'Notícias e anúncios da empresa',
    blogEyebrow: 'Insights de especialistas',
    blogTitle: 'Blogs técnicos e liderança de pensamento',
  },

};
