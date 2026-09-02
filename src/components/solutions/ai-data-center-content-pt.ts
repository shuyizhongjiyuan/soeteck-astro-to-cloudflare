/**
 * AI Data Center solution page — conteúdo em português (modo translate-code-embedded, Batch 3).
 * Estrutura idêntica a ai-data-center-content.ts (EN); nomes de exportação espelham o EN.
 * Marca SOETECK mantida; siglas técnicas (kW, MW, PUE, CDU, GPU, UPS, PDU, N+1, SNMP,
 * FAT, NOC, SLA, ISO, BMS, DCIM) permanecem em inglês conforme o pacote de terminologia.
 */
import type { AIDCConfig, AIDCClient, AIDCRelated, AIDCFaq } from './ai-data-center-content';

// Config não traduzida (cópia do EN): ao publicar o folheto, atualizar junto com o EN
export const BROCHURE_URL: string | null = null;

export const AIDC_HERO = {
  eyebrow: 'Infraestrutura de Data Center AI',
  title: 'Projetado para a era da GPU',
  titlePrefix: 'Infraestrutura de Data Center AI',
  subtitle:
    'Da inferência de borda aos clusters de GPU hiperscale — prefabricado, com refrigeração líquida, envio global e operacional em 120 dias.',
  bannerImage: '/resources/ai-data-center/ai-data-center-hero.webp',
  ctaPrimary: { label: 'Obtenha seu orçamento personalizado', href: '/contact-us/' },
  ctaSecondary: { label: 'Baixe o folheto técnico', href: BROCHURE_URL },
};

export const AIDC_PROBLEM = {
  eyebrow: 'O desafio',
  title: 'Sua infraestrutura de AI não pode ser o gargalo',
  intro:
    'A revolução das GPUs superou o design tradicional de data centers. As GPUs H100 e B200 exigem densidades de potência que rompem os limites do resfriamento convencional — e prazos de construção que não acompanham a velocidade da inovação em AI.',
  points: [
    { icon: 'calendar', stat: '2–3', unit: 'anos para construir', text: 'Data centers tradicionais levam de 24 a 36 meses do planejamento ao comissionamento. Quando sua instalação estiver pronta, a arquitetura de GPU já estará uma geração atrás.' },
    { icon: 'temp', stat: '25', unit: 'kW — limite do ar', text: 'Acima de 25kW por rack, o resfriamento a ar forçado simplesmente não remove calor rápido o suficiente. Clusters NVIDIA H100 passam de 40kW com frequência — e o B200 ultrapassa 100kW. Resfriamento a ar não é mais uma opção.' },
    { icon: 'cost', stat: '$50M+', unit: 'de capital antes da primeira GPU', text: 'A construção convencional exige capital inicial massivo — aquisição de terreno, licenças, obras civis, infraestrutura MEP — tudo antes de instalar um único servidor. Isso adia o ROI e prende capital por anos.' },
  ],
};

export const AIDC_PLATFORM = {
  eyebrow: 'A plataforma',
  title: 'A plataforma de infraestrutura de AI da SOETECK',
  intro:
    'Uma plataforma integrada que entrega o data center de AI completo — térmica, energia, estrutura e controle — construída em torno da sua carga de trabalho de GPU.',
  pillars: [
    { icon: 'container', title: 'Prefabricado e contenedorizado', text: 'Cada data center de AI da SOETECK é construído em fábrica dentro de contêineres marítimos ISO padrão. 95% pré-montado, testado em nossa fábrica e enviado para todo o mundo. Conecte energia, rede e água — a computação começa.' },
    { icon: 'cool', title: 'Refrigeração líquida integrada', text: 'A tecnologia de cold plates direto ao chip remove o calor na fonte. Unidades de Distribuição de Refrigerante (CDU) integradas suportam até 1.5MW de carga térmica por módulo. PUE tão baixo quanto 1.08.' },
    { icon: 'power', title: 'Distribuição de energia de alta densidade', text: 'De quadros de média tensão a PDUs de rack inteligentes — projetado para 40–120kW por rack. UPS modulares de Li-Ion, busway de 800A, medição por tomada.' },
    { icon: 'gpu', title: 'Arquitetura agnóstica de GPU', text: 'Sem vendor lock-in. Suporte total a NVIDIA H100/H200/B200, AMD MI300X, Huawei Ascend 910B/C e Intel Gaudi. Escolha a GPU que atenda sua carga de trabalho e seu orçamento.' },
  ],
};

export const AIDC_CONFIGS: AIDCConfig[] = [
  {
    id: 'edge',
    name: 'AI-Edge',
    tagline: 'Inferência de borda',
    inquireLabel: 'Consultar AI-Edge',
    bestFor: 'Inferência de AI na borda, manufatura inteligente, edge 5G de telecom, AI no varejo',
    specs: [
      { label: 'Contêiner', value: '20ft ISO padrão' },
      { label: 'Potência', value: '80–200 kW total' },
      { label: 'Capacidade de GPU', value: '8–16 GPUs (L40S, A10, A100)' },
      { label: 'Refrigeração', value: 'Resfriado a ar padrão, refrigeração líquida opcional' },
      { label: 'Densidade por rack', value: 'Até 30 kW/rack' },
      { label: 'PUE', value: '1.15–1.25' },
      { label: 'Implantação', value: '60–90 dias' },
    ],
  },
  {
    id: 'core',
    name: 'AI-Core',
    tagline: 'Treinamento e fine-tuning',
    inquireLabel: 'Consultar AI-Core',
    bestFor: 'Treinamento de LLM corporativo, fine-tuning de modelos de AI, clusters de pesquisa universitária',
    specs: [
      { label: 'Contêiner', value: '40ft High-Cube ISO padrão' },
      { label: 'Potência', value: '300–600 kW total' },
      { label: 'Capacidade de GPU', value: '32–64 GPUs (H100, H200, B200, MI300X)' },
      { label: 'Refrigeração', value: 'Refrigeração líquida direto ao chip (CDU integrado)' },
      { label: 'Densidade por rack', value: 'Até 100 kW/rack' },
      { label: 'PUE', value: '1.08–1.15' },
      { label: 'Implantação', value: '90–120 dias' },
    ],
  },
  {
    id: 'flex',
    name: 'AI-Flex',
    tagline: 'Clusters hiperscale',
    inquireLabel: 'Consultar AI-Flex',
    bestFor: 'Treinamento de AI hiperscale, provedores de nuvem de AI, centros nacionais de computação de AI',
    specs: [
      { label: 'Configuração', value: '4–20+ módulos 40ft interconectados' },
      { label: 'Potência', value: '2–20 MW total' },
      { label: 'Capacidade de GPU', value: '256–2048+ GPUs' },
      { label: 'Refrigeração', value: 'Refrigeração líquida centralizada com CDUs distribuídos + módulos de imersão opcionais' },
      { label: 'Densidade por rack', value: 'Até 120 kW/rack' },
      { label: 'PUE', value: '< 1.10 (1.03 com imersão)' },
      { label: 'Implantação', value: '120–180 dias' },
    ],
  },
];

// Cabeçalhos da tabela = [coluna de especificação, AI-Edge, AI-Core, AI-Flex]
export const AIDC_CONFIG_TABLE = {
  title: 'Uma plataforma. Três configurações. Escala infinita.',
  subtitle: 'Uma única plataforma de infraestrutura de AI que escala da inferência de borda aos clusters hiperscale.',
  headers: ['Especificação', 'AI-Edge', 'AI-Core', 'AI-Flex'],
  rows: [
    { label: 'Contêiner', values: ['20ft ISO padrão', '40ft High-Cube ISO padrão', '4–20+ módulos 40ft interconectados'] },
    { label: 'Potência', values: ['80–200 kW', '300–600 kW', '2–20 MW'] },
    { label: 'Capacidade de GPU', values: ['8–16 GPUs', '32–64 GPUs', '256–2048+ GPUs'] },
    { label: 'Refrigeração', values: ['Resfriado a ar padrão, líquido opcional', 'Líquido direto ao chip com CDU integrado', 'Líquido centralizado + imersão opcional'] },
    { label: 'Densidade por rack', values: ['Até 30 kW', 'Até 100 kW', 'Até 120 kW'] },
    { label: 'PUE', values: ['1.15–1.25', '1.08–1.15', '< 1.10 (1.03 imersão)'] },
    { label: 'Implantação', values: ['60–90 dias', '90–120 dias', '120–180 dias'] },
    { label: 'Ideal para', values: ['Inferência de borda, manufatura inteligente, edge 5G', 'Treinamento de LLM, fine-tuning, clusters de pesquisa', 'AI hiperscale, nuvens de AI, computação nacional'] },
  ],
};

export const AIDC_COOLING = {
  eyebrow: 'Refrigeração',
  title: 'Refrigeração que acompanha o ritmo das GPUs',
  intro:
    'A física é simples: refrigerantes líquidos oferecem mais de 3000× a capacidade de remoção de calor por unidade de volume que o ar. Todo hyperscaler está migrando para a refrigeração líquida. A única questão é a velocidade.',
  tabs: [
    {
      id: 'cold-plate',
      label: 'Cold Plates direto ao chip',
      image: '/resources/ai-data-center/ai-cold-plate-gpu-diagram.webp',
      text: 'A refrigeração líquida direto ao chip é a força de trabalho da infraestrutura moderna de AI. As cold plates são montadas diretamente sobre os heat spreaders das GPUs e CPUs, circulando um refrigerante dielétrico por aletas de microcanais para remover o calor na fonte.',
      bullets: [
        'Remove 85–90% do calor da GPU na cold plate — os ventiladores cuidam dos 10–15% restantes',
        'Suporta densidades de rack de até 120 kW em um gabinete padrão 42U',
        'Usa refrigerante PG25 de propilenoglicol — não condutivo, não tóxico, protegido contra congelamento',
        'Tecnologia comprovada: implantada em supercomputadores Top500 e clusters de AI hiperscale',
        'Retrofit: racks refrigerados a ar existentes podem ser atualizados com tempo mínimo de inatividade',
        'CDU em linha: 300 kW/unidade · CDU de sala: 800–1500 kW/unidade',
        'Configurações de bombas redundantes (N+1 ou 2N) com monitoramento remoto SNMP/Modbus',
      ],
    },
    {
      id: 'immersion',
      label: 'Refrigeração por imersão',
      image: '/resources/ai-data-center/ai-cooling-methods-comparison.webp',
      text: 'Para as implantações de maior densidade, a refrigeração por imersão monofásica submerge servidores de GPU inteiros em um fluido dielétrico que absorve calor 1200× mais eficientemente que o ar.',
      bullets: [
        'PUE tão baixo quanto 1.03 — o método de refrigeração mais eficiente disponível',
        'Elimina todos os ventiladores do servidor — reduz o consumo de energia do servidor em 10–15%',
        'Refrigeração uniforme em todos os componentes — sem pontos quentes',
        'Operação silenciosa — sem ruído de ventiladores',
        'Fluido dielétrico não corrosivo dura mais de 10 anos sem substituição',
        'Disponível como módulo de imersão dedicado dentro da plataforma AI-Flex',
      ],
    },
    {
      id: 'air-fails',
      label: 'Por que o ar fica aquém',
      image: '/resources/ai-data-center/ai-cooling-methods-comparison.webp',
      text: 'O ar tem capacidade térmica volumétrica de ~1.2 kJ/m³·K. Refrigerantes líquidos oferecem 3500–4200 kJ/m³·K — mais de 3000× a capacidade de remoção de calor por unidade de volume.',
      bullets: [
        'Resfriamento a ar: teto prático de 20–25 kW por rack com contenção de corredor quente',
        'Líquido direto ao chip: opera com folga a 60–120 kW por rack',
        'Imersão: capacidade de 100+ kW por rack sem derating',
        'Trajetória de potência das GPUs: H100 (700W) → B200 (1000W) → Rubin (1500W+) deixa a decisão clara',
      ],
    },
  ],
};

export const AIDC_POWER = {
  eyebrow: 'Energia',
  title: 'Entrega de energia projetada para densidade de GPU',
  intro:
    'Clusters de GPU não precisam apenas de mais energia — precisam de energia entregue de forma diferente. Nossa cadeia integrada de distribuição de energia é projetada desde o início para cargas de trabalho de AI de alta densidade e missão crítica.',
  image: '/resources/ai-data-center/ai-power-flow-diagram.webp',
  modules: [
    { icon: 'ups', title: 'UPS Modular', text: 'Tecnologia de baterias Li-Ion, redundância N+1 ou 2N, eficiência de 98% em modo eco. Escalável de 100kW a 2MW por módulo. Módulos de bateria com troca a quente e Sistema de Gerenciamento de Baterias (BMS) integrado.' },
    { icon: 'busway', title: 'Busway Plug-In', text: 'Busway aéreo de 160A–800A com caixas de derivação a cada 600mm. Elimina a complexidade do cabeamento sob o piso. Derivações com troca a quente permitem adicionar ou realocar racks de GPU sem desligamentos.' },
    { icon: 'pdu', title: 'PDU de Rack Inteligente', text: 'Medição de energia por tomada (precisão de ±1%), comutação remota de tomadas, sensores ambientais integrados (temperatura, umidade, contato da porta). SNMP v3 + REST API para integração com plataformas DCIM e BMS.' },
  ],
};

export const AIDC_TIMELINE = {
  eyebrow: 'Velocidade até a computação',
  title: 'Do pedido ao online — em 120 dias',
  intro: 'Do pedido às GPUs operacionais em 90–120 dias, contra 24–36 meses de uma construção tradicional.',
  steps: [
    { month: 'Mês 1', title: 'Congelamento do design', text: 'Requisitos confirmados. Seleção de GPU finalizada. Projeto de energia aprovado.' },
    { month: 'Mês 2', title: 'Construção em fábrica e FAT', text: 'Contêiner fabricado. CDU de refrigeração integrado. Sistema completo testado em nossa fábrica.' },
    { month: 'Mês 3', title: 'Frete marítimo', text: 'Logística do porto ao site gerenciada. Desalfandegamento conduzido por nossos parceiros globais de frete.' },
    { month: 'Mês 4', title: 'Comissionamento e go live', text: 'Conecte energia, rede e água. Testes de aceitação. Treinamento de operadores. A computação começa.' },
  ],
  compareTraditional: '24–36 meses',
  compareSoeteck: '90–120 dias',
};

export const AIDC_GLOBAL = {
  eyebrow: 'Logística global',
  title: 'Fabricado na China. Implantado no mundo todo.',
  text: 'Os data centers de AI da SOETECK são projetados para a logística global. Construídos em contêineres marítimos ISO padrão, viajam na infraestrutura de frete existente — navios contêiner, carretas e aeronaves de carga. Cada unidade passa por testes de aceitação em fábrica (FAT) completos antes de deixar nossa planta. Quando chega ao seu site, está pronta para o comissionamento — não para a montagem.',
  image: '/resources/ai-data-center/ai-global-deployment-map.webp',
  facts: [
    { value: 'ISO 668', label: 'Formato de contêiner padrão — compatível com remessa global' },
    { value: '12.2×2.44×2.9m', label: 'Dimensões da unidade 40ft padrão (C×L×A)' },
    { value: '18–25 t', label: 'Peso totalmente carregado — dentro dos limites de guindastes padrão' },
    { value: '30–45', label: 'Dias de frete marítimo: Ásia → Oriente Médio / Europa / África' },
  ],
  deploymentFlags: ['Arábia Saudita', 'Catar', 'Egito', 'Nepal', 'Vanuatu', 'França'],
};

export const AIDC_CLIENTS: AIDCClient[] = [
  {
    name: 'GRD Qatar',
    description: 'Data center contenedorizado personalizado para operação estável 24/7 no clima do Oriente Médio.',
    path: '/news-and-insights/client-case-studies/grd-qatar-gets-24-7-stable-data-via-soetecks-custom-containerized-data-center/',
  },
  {
    name: 'Governo Egípcio',
    description: 'Auditoria de fábrica e grande projeto de infraestrutura digital para a modernização de data centers do governo.',
    path: '/news-and-insights/news-releases/egyptian-government-project-delegation-visits-soeteck-for-factory-audit/',
  },
  {
    name: 'Saudi Telecom',
    description: 'Solução de data center contenedorizado de OLT móvel que viabiliza rápida implantação de infraestrutura 5G.',
    path: '/news-and-insights/client-case-studies/driving-innovation-soeteck-provides-saudi-telecom-with-advanced-mobile-olt-container-data-center-solutions/',
  },
  {
    name: 'WebSat Media',
    description: 'Otimização da infraestrutura de refrigeração de data center com ganhos de eficiência e confiabilidade.',
    path: '/news-and-insights/client-case-studies/websat-media-optimizes-data-center-infrastructure-with-soetecks-cooling-solutions/',
  },
];

// Deep-links da plataforma para o ecossistema de linhas de produto.
export const AIDC_RELATED: AIDCRelated[] = [
  { icon: 'cool', title: 'Refrigeração de Precisão para Data Center', description: 'Portfólio completo de refrigeração crítica: ar-condicionado de precisão em toda a linha, fan wall e refrigeração de sala/linha/rack.', path: '/solutions/data-center-cooling-solutions/' },
  { icon: 'container', title: 'Data Center Modular em Contêiner', description: 'Data centers modulares construídos em fábrica e enviados em ISO, entregues prontos para comissionamento.', path: '/solutions/data-center-solutions/prefabricated-container-data-center/' },
  { icon: 'grid', title: 'Família de Plataformas Modulares', description: 'Data centers modulares de corredor, armário e linha para capacidade on-premise flexível e escalável.', path: '/solutions/' },
  { icon: 'gpu', title: 'Série de Refrigeração Líquida AICoolit', description: 'Contêineres de refrigeração líquida e CDUs projetados para clusters de GPU de alta densidade.', path: '/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/' },
];

export const AIDC_FAQ: AIDCFaq[] = [
  {
    q: 'Qual densidade de potência seu data center de AI contenedorizado suporta?',
    a: [
      'Nossos contêineres com refrigeração líquida direto ao chip suportam até 120 kW por rack. Módulos de imersão suportam 100+ kW por rack sem derating. Configurações refrigeradas a ar estão disponíveis até 25 kW por rack para cargas de trabalho mais leves.',
    ],
  },
  {
    q: 'Quais GPUs são compatíveis com os data centers de AI da SOETECK?',
    a: [
      'Nossa infraestrutura é agnóstica de GPU por design. Suportamos NVIDIA H100, H200, B200 (NVL72), AMD MI300X, Huawei Ascend 910B/C e Intel Gaudi 3. Power shelves e kits de montagem de cold plates são personalizados para a plataforma de GPU escolhida.',
    ],
  },
  {
    q: 'Quão rápido vocês entregam um data center de AI totalmente operacional?',
    a: [
      '90–120 dias do pedido ao comissionamento para configurações padrão de até 5 MW. Configurações personalizadas e implantações hiperscale AI-Flex podem levar de 120 a 180 dias. Em comparação, a construção tradicional de data centers leva de 24 a 36 meses.',
    ],
  },
  {
    q: 'Quais medidas de segurança protegem contra vazamentos de refrigeração líquida?',
    a: [
      'Aplicamos uma abordagem de defesa em profundidade: (1) loops de refrigerante com pressão negativa (o fluido retorna ao sistema em caso de qualquer rompimento); (2) cabos de detecção de vazamento tipo corda ao longo de todas as tubulações; (3) bandejas de gotejamento de aço inoxidável sob todas as conexões; (4) sensores de condutividade monitorados 24/7 com válvulas de fechamento automático; (5) refrigerante PG25 de propilenoglicol não condutivo que não danifica a eletrônica em caso de contato.',
    ],
  },
  {
    q: 'Qual é o PUE típico dos seus data centers de AI?',
    a: [
      'Refrigeração líquida direto ao chip: PUE de 1.08–1.15 dependendo do clima. Refrigeração por imersão: PUE tão baixo quanto 1.03. Ambos os valores assumem free cooling com dry coolers onde o clima permite.',
    ],
  },
  {
    q: 'Seus data centers de AI operam em climas extremos?',
    a: [
      'Sim. Nossos contêineres são especificados para temperaturas ambientes de -40°C a +55°C (+131°F). Já implantamos com sucesso em ambientes desérticos do Oriente Médio (Arábia Saudita, Catar, Egito) e em condições de ilhas tropicais (Vanuatu). Cada implantação inclui configurações de refrigeração específicas para o clima.',
    ],
  },
  {
    q: 'Vocês oferecem instalação e suporte no local?',
    a: [
      'Sim. Nossa equipe global de comissionamento viaja até o seu site para supervisão de instalação, partida do sistema, testes de aceitação e treinamento de operadores. Também oferecemos contratos anuais de manutenção opcionais com monitoramento remoto (NOC 24/7), visitas preventivas de manutenção e SLAs de resposta a emergências.',
    ],
  },
];

// Strings de UI no nível do template (antes fixas em AiDataCenterPage.astro)
export const AIDC_UI = {
  heroImageAlt: 'Infraestrutura de data center de AI',
  powerImageAlt: 'Cadeia de distribuição de energia do data center de AI',
  globalImageAlt: 'Mapa de implantação global de data centers de AI da SOETECK',
  coolingTablistAria: 'Soluções de refrigeração',
  bestForLabel: 'Ideal para:',
  compareTraditionalLabel: 'Construção tradicional de DC',
  compareSoeteckLabel: 'Implantação de AI DC da SOETECK',
  clientsTitle: 'A confiança de empresas, governos e operadoras de telecom no mundo todo',
  readCaseStudy: 'Leia o caso de sucesso →',
  relatedTitle: 'Parte do ecossistema de Data Center AI da SOETECK',
  relatedSubtitle: 'Explore como a SOETECK entrega a infraestrutura completa de data center de AI — térmica, energia, estrutura e controle.',
  learnMore: 'Saiba mais →',
  faqTitle: 'Data Center AI — perguntas frequentes',
};

export const AIDC_CTA = {
  eyebrow: 'Fale com um engenheiro',
  title: 'O data center de AI da próxima geração começa com uma conversa',
  text: 'Descreva sua carga de trabalho de AI — nós projetamos a infraestrutura. Entrega em 120 dias. Em qualquer lugar do mundo.',
  actions: [
    { label: 'Solicitar orçamento personalizado', href: '/contact-us/', variant: 'primary' },
    { label: 'Agendar consultoria de 30 minutos', href: '/contact-us/', variant: 'outline' },
  ],
};
