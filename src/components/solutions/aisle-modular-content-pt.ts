/**
 * Aisle Modular Data Center solution content — português (pt)
 * Espelho de aisle-modular-content.ts (EN): mesmos nomes de exportações, estrutura idêntica.
 * Terminologia conforme pacote Batch 3 §二 (aisle containment = contenção de corredor,
 * in-row cooling = refrigeração em linha, hot/cold aisle = corredor quente/frio).
 * Marca SOETECK mantida (pt); caminhos de imagem não são traduzidos.
 */

export const AISLE_OVERVIEW_PARAGRAPHS = [
  '<strong>Data centers modulares de corredor</strong> são salas de TI pré-fabricadas e autônomas: energia, refrigeração e monitoramento integrados em uma única unidade, permitindo operar cargas corporativas sem obra civil dedicada. Cada módulo é montado e testado em fábrica, reduzindo ao mínimo o trabalho no local.',
  'A SOETECK projeta essas salas para crescer em etapas: comece com um corredor e expanda conforme a demanda aumenta, adicionando racks e refrigeração sem alterar a área existente. A capacidade acompanha a carga real — gastos e consumo de energia permanecem sob controle.',
  'Comparado à construção sob medida, um data center modular de corredor entra em operação mais rápido e custa menos. Atende computação de borda, expansão corporativa e demandas de capacidade com prazo definido. O design plug-and-play mantém a confiabilidade de nível data center, com monitoramento remoto a partir de qualquer site.',
];

export const AISLE_HOTSPOTS = [
  { label: 'Condensadora externa', x: '14.4%', y: '51.8%' },
  { label: 'Módulo de monitoramento', x: '30.4%', y: '31.8%' },
  { label: 'Sensor de temperatura e umidade', x: '32.4%', y: '56.8%' },
  { label: 'Detecção de vazamento', x: '36.4%', y: '61.8%' },
  { label: 'Sensor de fumaça', x: '39.4%', y: '37.8%' },
  { label: 'Refrigeração em linha', x: '44.9%', y: '51.8%' },
  { label: 'Gabinete de servidores', x: '55.4%', y: '53.8%' },
  { label: 'Distribuição de energia', x: '64.4%', y: '41.8%' },
  { label: 'UPS', x: '69.4%', y: '61.8%' },
  { label: 'Bateria', x: '74.4%', y: '50.8%' },
];

export const AISLE_HOTSPOT_IMAGE: string = '/resources/4-1024x768.png';

export const AISLE_CORE_MODULES = [
  { title: 'Módulo de refrigeração eficiente', text: 'Gestão térmica e dissipação de calor', icon: 'snowflake' },
  { title: 'Distribuição de energia inteligente', text: 'Distribuição e gestão do fornecimento de energia', icon: 'bolt' },
  { title: 'Sistema de proteção e segurança', text: 'Proteção contra incêndio e segurança física', icon: 'shield' },
  { title: 'Sistema inteligente de monitoramento', text: 'Monitoramento do status operacional', icon: 'chart' },
];

export const AISLE_MODEL_VIEWS = [
  {
    title: 'Data Center Modular de Corredor Frio',
    images: [
      '/resources/4-1024x768.png',
      '',  // 待上传图片
      '',  // 待上传图片
    ],
  },
  {
    title: 'Data Center Modular de Corredor Quente',
    images: [
      '/resources/4-1024x768.png',
      '',  // 待上传图片
      '',  // 待上传图片
    ],
  },
];

// Critical Power & Thermal Management (texto compartilhado com row-modular-content.ts)
export const AISLE_CRITICAL_POWER_TEXT: string =
  'A solução de data center modular de corredor da SOETECK incorpora um sistema eficiente de distribuição de energia, com uma linha de UPS montados em rack e módulos de distribuição projetados sob medida. O cliente escolhe entre baterias de lítio ou chumbo-ácido montadas em rack, conforme a necessidade. Também oferecemos seleção de UPS personalizada, além de projeto e fabricação completos do sistema de distribuição.';

export const AISLE_CRITICAL_POWER_PRODUCTS = [
  {
    title: 'UPS Série SY-RT (1-3kVA)',
    subtitle: 'UPS online de alta frequência, 1kVA-3kVA, PF1',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-rt-series-high-frequency-online-ups-1kva-3kva-rack-tower-mounted-pf1',
    excerpt: 'A UPS Série SY-RT (1-3kVA) entrega proteção online confiável com dupla conversão: saída PF1, ampla faixa de tensão de entrada de 110-300VAC e design compacto rack/torre. Atinge 96% de eficiência no modo ECO com tempo de transferência de 0ms.',
    specs: ['Eficiência PF1', 'Tempo de transferência 0ms', 'Faixa 110-300VAC', '96% de eficiência no modo ECO'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF11.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF12.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF13.webp',
    ],
  },
  {
    title: 'UPS Série SY-RT (1-10kVA)',
    subtitle: 'UPS online de alta frequência, 1kVA-10kVA, PF0.9',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-rt-series-winner-pro-ups-high-frequency-online-ups-1kva-10kva-rack-tower-mounted-pf0-9',
    excerpt: 'A UPS SOETECK Série SY-RT Winner Pro (1-10kVA) oferece proteção online confiável com saída PF0.9, ampla faixa de tensão de entrada e montagem flexível em rack ou torre para implantações versáteis em data centers modulares de corredor.',
    specs: ['Eficiência PF0.9', 'Dupla conversão online', 'Montagem rack/torre', 'Ampla faixa de entrada'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.9-1.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.9-2.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.9-3.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.9-4.webp',
    ],
  },
  {
    title: 'UPS Série SY-RT (1-10kVA)',
    subtitle: 'UPS online de alta frequência, 1kVA-10kVA, PF0.8',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-rt-series-ups-high-frequency-online-ups-1kva-10kva-rack-tower-mounted',
    excerpt: 'A UPS Série SY-RT (1-10kVA) oferece proteção online confiável com PF0.8, eficiência de até 93% e montagem flexível em rack ou torre. Ideal para proteger equipamentos críticos em data centers e ambientes corporativos.',
    specs: ['PF0.8', 'Eficiência de até 93%', 'Montagem em rack e torre', 'Configuração flexível'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-3.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-4.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-1.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-2.webp',
    ],
  },
];

export const AISLE_THERMAL_MANAGEMENT_TEXT: string =
  'A SOETECK oferece soluções completas de refrigeração para data centers e estações-base, incluindo sistemas de ar condicionado de precisão para sala, linha e rack. Para atender às demandas térmicas da computação de alta densidade dentro de gabinetes individuais, nossos sistemas de precisão de rack e em linha foram projetados para eficiência e custo-benefício.';

export const AISLE_THERMAL_PRODUCTS = [
  {
    title: 'Refrigeração em Linha DX a Ar',
    subtitle: 'Capacidade de 5.6kW – 90.1kW',
    slug: 'thermal-management/precision-air-conditioning/soeteck-dx-air-cooled-in-row-cooling-system-5-6kw-90-1kw-capacity',
    excerpt: 'Sistema de refrigeração de precisão em linha para gestão térmica eficiente no nível da linha.',
    specs: ['Faixa 5.6kW-90.1kW', 'DX a ar', 'Instalação em linha', 'Controle de precisão'],
    images: [
      '/resources/SOETECK-air-cooled-in-row-cooling-system-5.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-6.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-3.webp',
      '/resources/SOETECK-air-cooled-in-row-cooling-system-4.webp',
    ],
  },
  {
    title: 'Refrigeração de Sala DX a Ar',
    subtitle: 'Capacidade de 32.5kW – 120kW',
    slug: 'thermal-management/precision-air-conditioning/soeteck-dx-air-cooled-room-cooling-system-32-5kw-120kw-capacity-up-down-flow',
    excerpt: 'Refrigeração de precisão para sala com configurações de fluxo superior/inferior.',
    specs: ['Faixa 32.5kW-120kW', 'Fluxo superior/inferior', 'DX a ar', 'Precisão de sala'],
    images: [
      '/resources/Soeteck-air-cooled-room-cooling-system-32.5-120kW-1.webp',
      '/resources/Soeteck-air-cooled-room-cooling-system-32.5-120kW-2.webp',
      '/resources/Soeteck-air-cooled-room-cooling-system-32.5-120kW-5.webp',
      '/resources/Soeteck-air-cooled-room-cooling-system-32.5-120kW-6.webp',
    ],
  },
  {
    title: 'Refrigeração de Rack Compacta',
    subtitle: 'Capacidade de 3.5kW, 8U',
    slug: 'thermal-management/precision-air-conditioning/soeteck-packaged-rack-cooling-system-3-5kw-capacity-8u-bottom-or-middle-mounted',
    excerpt: 'Sistema compacto de refrigeração de rack com refrigerante R410A e integração BMS.',
    specs: ['Refrigeração de 3.5kW', 'Montagem inferior ou intermediária', 'Refrigerante R410A', 'Integração BMS'],
    images: [
      '/resources/SOETECK-DX-packaged-rack-cooling-system-1.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-2.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-3.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-4.webp',
    ],
  },
];

export const AISLE_SPEC_COLUMNS = [
  { model: 'SY-AMDC-10', image: '/resources/cabinet-modular-data-center-31.webp' },
  { model: 'SY-AMDC-20', image: '/resources/cabinet-modular-data-center-41.webp' },
  { model: 'SY-AMDC-40', image: '/resources/cabinet-modular-data-center-51.webp' },
  { model: 'Personalizado', image: '/resources/cabinet-modular-data-center-61.webp' },
];

export const AISLE_SPEC_ROWS = [
  ['Configuração', '10 racks', '20 racks', '40 racks', 'Personalizado'],
  ['Tamanho do rack', '600×1000mm', '600×1000mm', '600×1000mm', 'Personalizado'],
  ['Capacidade do rack', '42U', '42U', '42U', 'Personalizado'],
  ['Potência máxima por rack', '8kW', '10kW', '12kW', 'Personalizado'],
  ['Capacidade total de TI', '80kW', '200kW', '480kW', 'Personalizado'],
  ['Tipo de refrigeração', 'Em linha DX/água gelada', 'Em linha DX/água gelada', 'Em linha DX/água gelada', 'Personalizado'],
  ['Contenção de corredor', 'Corredor quente/frio', 'Corredor quente/frio', 'Corredor quente/frio', 'Personalizado'],
  ['PUE', '≤1.4', '≤1.35', '≤1.3', 'Personalizado'],
];

export const AISLE_SCENARIOS = [
  {
    title: 'Pequenas salas de servidores',
    image: '/resources/enterprise-small-computer-room-1.webp',
    pain_points: ['Espaço limitado', 'Equipe de TI reduzida', 'Manutenção complexa'],
    benefits: ['Design compacto', 'Monitoramento integrado', 'Expansão gradual'],
    problem: 'Salas de servidores de pequenas empresas sofrem com a falta de espaço para novos equipamentos, enquanto equipes enxutas de TI enfrentam manutenção complexa; dispositivos dispersos e cabos desorganizados reduzem a eficiência da gestão.',
    solution: 'O design compacto aproveita ao máximo o espaço; o monitoramento integrado centraliza a gestão dos dispositivos e reduz o trabalho manual; a expansão gradual começa com poucos gabinetes, evitando grandes investimentos iniciais.',
    application: 'Salas de TI corporativas, filiais',
  },
  {
    title: 'Sites de computação de borda',
    image: '/resources/Edge-Computing.webp',
    pain_points: ['Localização remota', 'Ambiente severo', 'Pouco pessoal no local'],
    benefits: ['Design para ampla faixa de temperatura', 'Monitoramento remoto', 'Eficiência energética'],
    problem: 'Sites em áreas remotas têm infraestrutura precária: grandes variações de temperatura e umidade causam falhas frequentes, e a pouca equipe local atrasa o atendimento.',
    solution: 'O design de ampla faixa de temperatura garante estabilidade entre -10℃ e 40℃; o monitoramento remoto embutido permite operação não tripulada; a refrigeração otimizada reduz o consumo de energia em 30% e suporta energia solar.',
    application: 'Locais de perfuração remotos, operações de mineração',
  },
  {
    title: 'Expansão de data center',
    image: '/resources/Data-Center-Expansion.webp',
    pain_points: ['Ciclos longos de planejamento', 'Indisponibilidade na implantação', 'Problemas de compatibilidade'],
    benefits: ['Plug-and-play', 'Expansão paralela', 'Balanceamento automático'],
    problem: 'A expansão tradicional envolve planejamento e obras demorados, e a instalação de novos equipamentos muitas vezes exige indisponibilidade, colocando em risco a continuidade do negócio.',
    solution: 'Módulos pré-fabricados em fábrica permitem implantação plug-and-play, reduzindo o tempo de setup em mais de 70%; a expansão paralela não afeta as operações existentes.',
    application: 'Data centers de nuvem, expansão de TI corporativa',
  },
  {
    title: 'Escritórios com múltiplas filiais',
    image: '/resources/branch-office-1.webp',
    pain_points: ['Sem TI dedicada', 'Monitoramento apenas remoto', 'Locais dispersos'],
    benefits: ['Alarmes multinível', 'Plataforma remota', 'Design redundante'],
    problem: 'Salas de servidores de filiais não contam com equipe de TI dedicada, dificultando o monitoramento em tempo real; falhas não são tratadas a tempo, com risco de interrupção do negócio.',
    solution: 'O monitoramento abrangente dispara alarmes multiníveis para qualquer anormalidade; a plataforma remota cuida da maior parte da gestão diária e do diagnóstico.',
    application: 'Agências bancárias, redes de varejo',
  },
  {
    title: 'Eventos temporários',
    image: '/resources/Temporary-Deployment-Needs-1.webp',
    pain_points: ['Montagem rápida necessária', 'Sem infraestrutura no local', 'Desmontagem após o evento'],
    benefits: ['Setup em horas', 'Autossuficiente', 'Reutilizável'],
    problem: 'Cenários temporários exigem TI pronta rapidamente, mas a instalação tradicional é complexa e demorada; os locais frequentemente não têm energia e refrigeração estáveis.',
    solution: 'O design modular permite montar o sistema em poucas horas; as unidades integradas de energia e refrigeração operam de forma independente da infraestrutura local.',
    application: 'Exposições, resposta a emergências',
  },
  {
    title: 'Laboratórios de P&D',
    image: '/resources/Laboratory-RD-Environments.webp',
    pain_points: ['Reconfigurações frequentes', 'Necessidades de energia variáveis', 'Gestão de cabos'],
    benefits: ['Módulos flexíveis', 'Cabeamento pré-integrado', 'Interfaces padronizadas'],
    problem: 'Laboratórios de P&D precisam ajustar equipamentos e layout com frequência, algo que salas tradicionais fixas não comportam; as necessidades de energia e refrigeração variam conforme o cenário de teste.',
    solution: 'Componentes modulares permitem reconfiguração flexível e alternância de modos para cada teste; o cabeamento pré-integrado mantém o ambiente organizado.',
    application: 'Laboratórios de pesquisa, instalações de teste',
  },
];

// Títulos/resumos dos cases — de soeteck_display_title + post_excerpt dos posts de tradução do CMS
// (cases compartilhados com a família prefab, textos idênticos a PREFAB_CLIENT_CASES)
export const AISLE_CLIENT_CASES = [
  {
    imgSrc: '/resources/Qatar-containerized-data-center-768x385.webp',
    title: 'GRD Qatar Obtém Dados 24/7 Estáveis com o Data Center Containerizado Personalizado da Soeteck',
    slug: 'grd-qatar-gets-24-7-stable-data-via-soetecks-custom-containerized-data-center',
    desc: 'Em meio à onda global de digitalização, a GRD — empresa que avança em uma transformação digital completa — trata os dados como um ativo estratégico fundamental. Para isso…',
  },
  {
    imgSrc: '/resources/prefab-modular-data-center-of-Saudi-Telecom-6-768x512.webp',
    title: 'Impulsionando a Inovação: SOETECK fornece à Saudi Telecom soluções avançadas de data center containerizado móvel com OLT',
    slug: 'driving-innovation-soeteck-provides-saudi-telecom-with-advanced-mobile-olt-container-data-center-solutions',
    desc: 'O projeto DR para a Saudi Telecom foi iniciado para projetar e implementar um data center containerizado móvel com OLT (Optical Line Terminal) totalmente personalizável, melhorando as capacidades operacionais de operadoras de telecomunicações no Oriente Médio. Esta solução inovadora…',
  },
  {
    imgSrc: '/resources/Data-center-for-Satellite-Solutions-in-Singapore-1-768x441.webp',
    title: 'WebSat Media otimiza a infraestrutura do data center com as soluções de resfriamento da SOETECK',
    slug: 'websat-media-optimizes-data-center-infrastructure-with-soetecks-cooling-solutions',
    desc: 'A WebSat, fundada em 2000 e com sede em Singapura, é líder global no fornecimento de infraestrutura de telecomunicações via satélite, radiodifusão, fixa e sem fio, soluções de software e serviços de Internet. À medida que a demanda por armazenamento de dados continua crescendo…',
  },
];

// ---- Moldura da página e títulos de seção (movidos do hardcode de AisleModularPage.astro, Batch 3 i18n) ----

export const AISLE_PAGE_HERO = {
  title: 'Data Center Modular de Corredor',
  imageAlt: 'Data Center Modular de Corredor',
};

export const AISLE_OVERVIEW_HEADING: string = 'Salas de TI modulares, prontas para escalar';

export const AISLE_VIDEO = {
  playAriaLabel: 'Reproduzir vídeo do Data Center Modular de Corredor',
  imageAlt: 'Prévia do vídeo do Data Center Modular de Corredor',
  fallbackTitle: 'Vídeo de solução da Soeteck',
};

export const AISLE_ACTIONS = {
  getBrochure: 'Obter a brochura',
  contactUs: 'Fale conosco',
};

export const AISLE_CLOSER_HEADING: string = 'Por dentro do Data Center Modular de Corredor';

export const AISLE_TYPICAL_DESIGN = {
  title: 'Design típico de contenção de corredor',
  imageAlt: 'Design típico de data center modular de corredor',
  intro: 'O data center modular de corredor utiliza contenção de corredor quente/frio para otimizar o fluxo de ar e a eficiência da refrigeração. O design separa o ar quente de exaustão do ar frio de suprimento, reduzindo significativamente o consumo de energia e melhorando o desempenho geral do sistema.',
  keyFeaturesLabel: 'Principais recursos:',
  features: [
    'Contenção de corredor quente/frio: separa as correntes de ar quente e frio para máxima eficiência de refrigeração.',
    'Arquitetura escalável: o design modular permite que a capacidade cresça com a demanda.',
    'Suporte a alta densidade: acomoda equipamentos de alta potência de até 15kW+ por rack.',
    'Eficiência energética: PUE tão baixo quanto 1.3 com a configuração adequada.',
    'Monitoramento inteligente: acompanhamento ambiental e de energia em tempo real para operações otimizadas.',
  ],
};

export const AISLE_MODELS_SECTION = {
  title: 'Dois modelos típicos',
  intro: 'Os data centers modulares de corredor da SOETECK estão disponíveis em várias configurações para diferentes necessidades de capacidade: da contenção de corredor frio para implantações padrão à contenção de corredor quente para ambientes de alta densidade, com soluções flexíveis para cada necessidade.',
};

export const AISLE_MODULES_SECTION = {
  title: 'Módulos de infraestrutura principais',
  lead: 'A solução de data center modular de corredor da SOETECK é composta por diversos componentes-chave: sistema de gabinetes, sistema de controle térmico, alimentação crítica, sistema de segurança e sistema dinâmico de ambiente.',
};

export const AISLE_PRODUCT_GROUPS = {
  criticalPower: 'Energia Crítica',
  thermalManagement: 'Gerenciamento Térmico',
  galleryAria: 'galeria',
};

export const AISLE_SPECS_SECTION = {
  heading: 'Modelos em destaque',
  modelsColumn: 'Modelos',
  pdfLinkLabel: 'SOETECK Data Center Modular de Corredor.pdf',
};

export const AISLE_SCENARIOS_SECTION = {
  heading: 'Quem precisa de um data center modular?',
  subtitle: 'Cenários de aplicação: uma integração de módulos de energia, refrigeração e infraestrutura para operações de TI confiáveis — onde o data center modular de corredor entrega valor único',
  benefitsTab: 'Benefícios da solução',
  painPointsTab: 'Principais dores',
  detailsAria: 'detalhes',
};

export const AISLE_CASES_HEADING: string = 'Cases de Data Center Modular de Corredor';

export const AISLE_CTA = {
  eyebrow: 'Fale com um engenheiro',
  title: 'Entre em contato com a SOETECK',
  text: 'Conte os requisitos da sua instalação e receba um caminho prático de solução. Informe o tipo de projeto, a capacidade necessária e o prazo — nossa equipe ajuda a identificar a configuração certa.',
  checks: ['Consulta de projeto', 'Suporte de configuração técnica', 'Acompanhamento regional'],
  contactUs: 'Fale conosco',
  downloadBrochure: 'Baixar a brochura',
};
