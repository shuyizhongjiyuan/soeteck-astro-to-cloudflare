/**
 * AICoolit Liquid Cooling Data Center — Portuguese content (translate-code-embedded, Batch 3).
 * Structure mirrors aicoolit-content.ts (EN) export-for-export.
 * Terminology per tmp/translation-batch3/TERMINOLOGY-AND-RULES.md: CDU = unidade de distribuição
 * de refrigerante, cold plate = placa fria (cold plate), immersion = resfriamento por imersão, etc.
 * Brand SOETECK/Soeteck, AICoolit™, ISO, IP65, UQD, HGX kept as-is.
 */
export const AICOOLIT_NAV_SECTIONS = [
  { id: 'aicoolit-why', label: 'Por que AICoolit' },
  { id: 'aicoolit-models', label: 'Modelos' },
  { id: 'aicoolit-components', label: 'Componentes' },
  { id: 'aicoolit-faq', label: 'FAQ' },
  { id: 'aicoolit-contact', label: 'Contato' },
];

export const AICOOLIT_STATS = [
  { value: '100', unit: 'kW', label: 'Densidade máxima por rack' },
  { value: '1.15', unit: '', label: 'PUE ultrabaixo' },
  { value: '4', unit: 'semanas', label: 'Prazo típico de entrega' },
  { value: 'IP65', unit: '', label: 'Execução industrial' },
];

export const AICOOLIT_COMPARISON_CARDS = [
  {
    title: 'VS. contêineres com refrigeração a ar',
    description: 'Contêineres com refrigeração a ar esbarram nos limites físicos do fluxo de ar: a densidade por rack fica em 10-15kW — insuficiente para clusters NVIDIA H100.',
    features: [
      { title: 'Salto em densidade', text: 'A refrigeração líquida rompe o limite térmico: mais de 100kW por rack na mesma pegada ISO.' },
      { title: 'Resiliência ambiental', text: 'Circuito líquido totalmente selado. Imune a poeira, umidade e calor ambiente de 50°C.' },
    ],
  },
  {
    title: 'VS. data centers convencionais',
    description: 'Obras tradicionais enfrentam questões de zoneamento, licenças lentas e prazos de 12-24 meses — enquanto o negócio de IA não pode esperar.',
    features: [
      { title: 'Time-to-market acelerado', text: 'Pré-fabricado em fábrica. No local, basta conectar energia e água. A entrega passa de "anos" para "semanas".' },
      { title: 'CAPEX escalável', text: 'Sem grande investimento inicial. Expanda a capacidade em módulos conforme a demanda computacional cresce.' },
    ],
  },
];

export const AICOOLIT_PRODUCT_SERIES = [
  {
    label: 'SERIES I (40FT)',
    title: 'Módulo de Cluster de Alta Densidade',
    description: 'Projetado para clusters de treinamento de LLM em larga escala. Com UPS e baterias em unidade externa, todo o espaço interno fica dedicado à computação. Com 900kW totais em CDUs de refrigeração líquida em rack, um único contêiner suporta um supercluster de 1MW.',
    image: '/resources/1-40-Foot-AI-Container-Data-Center-100kW-per-Rack.webp',
    specs: [
      { label: 'Carga total', value: '1 MW' },
      { label: 'Densidade por rack', value: '100 kW' },
      { label: 'Fonte de refrigeração', value: 'CDU em rack ×8' },
      { label: 'Configuração', value: 'Alimentação externa' },
    ],
    features: [
      'Proporção líquido/ar 9:1 para eficiência extrema.',
      'Suporta 3+1 ACs em linha redundantes para eliminar pontos quentes.',
    ],
  },
  {
    label: 'SERIES II (40FT)',
    title: 'Módulo Padrão Integrado',
    description: 'O campeão do "plug & play". UPS, baterias de lítio e sistemas de refrigeração líquida totalmente integrados em uma única carroceria de 40 pés. A definição de implantação rápida — ideal quando a infraestrutura elétrica externa é limitada ou a demanda por computação é urgente.',
    image: '/resources/2-40-Foot-AI-Container-Data-Center-60kW-per-Rack.webp',
    specs: [
      { label: 'Carga total', value: '480 kW' },
      { label: 'Densidade por rack', value: '60 kW' },
      { label: 'Fonte de refrigeração', value: 'CDU em linha ×1' },
      { label: 'Configuração', value: 'Alimentação interna' },
    ],
    features: [
      'Proporção líquido/ar 8:2 — refrigeração equilibrada.',
      'UPS modular de 600kVA integrado + baterias de apoio.',
    ],
  },
  {
    label: 'SERIES III (20FT)',
    title: 'Módulo Compacto de Borda',
    description: 'Pouco espaço, muita potência. Este módulo de 20 pés foi feito para computação de borda, cidades inteligentes e laboratórios de pesquisa onde o espaço é escasso. Implante 200kW de computação líquida de alto desempenho em qualquer lugar — de estacionamentos a telhados.',
    image: '/resources/3-20-Foot-AI-Container-Data-Center-50kW-per-Rack.webp',
    specs: [
      { label: 'Carga total', value: '200 kW' },
      { label: 'Densidade por rack', value: '50 kW' },
      { label: 'Fonte de refrigeração', value: 'CDU em rack ×4' },
      { label: 'Configuração', value: 'Alimentação interna' },
    ],
    features: [
      'Alta integração: todos os subsistemas em 20 pés.',
      'Inclui UPS de 300kVA + bateria de apoio para 15 minutos.',
    ],
  },
  {
    label: 'SERIES IV (40FT)',
    title: 'Módulo de Refrigeração por Imersão',
    description: 'A solução definitiva para ambientes hostis. Os servidores ficam submersos diretamente em fluido dielétrico, eliminando ventiladores, poeira e ruído. É a única escolha para desertos, áreas de mineração ou regiões tropicais, com PUE extremo e estabilidade para computação de alto desempenho.',
    image: '/resources/4-40-Foot-AI-Container-Data-Center-50kW-per-Rack-Immersion-Cooling.webp',
    specs: [
      { label: 'Carga total', value: '~700 kW' },
      { label: 'Densidade por rack', value: '50 kW' },
      { label: 'Fonte de refrigeração', value: 'CDU 400kW ×2' },
      { label: 'Configuração', value: 'Alimentação externa' },
    ],
    features: [
      '100% do calor removido via líquido (sem ventiladores), ultra silencioso.',
      'Ideal para mineração de cripto ou HPC extremo.',
    ],
  },
];

export const AICOOLIT_LAYER_SPECS = [
  { label: 'PROTEÇÃO', value: 'Classe IP65', icon: 'shield' },
  { label: 'ISOLAMENTO', value: 'Paredes R-30', icon: 'temperature' },
  { label: 'LOGÍSTICA', value: 'Certificação CSC', icon: 'globe' },
];

// 4th spec rendered separately after the Layer 01 image (matching production layout)
export const AICOOLIT_LAYER_EXTRA_SPEC = { label: 'INTEGRIDADE ESTRUTURAL', value: 'Vida útil de 10 anos', icon: 'structure' };

export const AICOOLIT_CDU_TABS = [
  {
    id: 'intelligent-cdu',
    title: 'CDU Inteligente',
    subtitle: 'Unidade central de refrigeração',
    badge: 'NÚCLEO',
    description: 'O "coração" do sistema de refrigeração líquida. Os CDUs em linha contam com bombas redundantes 1+1 e controle de vazão VFD inteligente: pressão e fluxo se equilibram dinamicamente conforme a carga real dos servidores, garantindo 100% de disponibilidade e desempenho térmico ideal.',
    tags: ['Redundância de bombas dupla', 'Autobalanceamento', 'HMI touchscreen', 'Testado a 1.5x de pressão'],
    products: [
      { image: '/resources/Soeteck-Rack-CDU-Coolant-Distribution-Unit-1-300x210.webp', alt: 'CDU (unidade de distribuição de refrigerante) de rack Soeteck', title: 'CDU em rack', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-aicooli-rack-cdu-coolant-distribution-unit/' },
      { image: '/resources/Soeteck-In-Row-CDU-Coolant-Distribution-Unit-1-300x210.webp', alt: 'CDU (unidade de distribuição de refrigerante) em linha Soeteck', title: 'CDU em linha', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-aicoolit-in-row-cdu-coolant-distribution-unit/' },
      { image: '/resources/Soeteck-Room-CDU-Coolant-Distribution-Unit-1.webp', alt: 'CDU (unidade de distribuição de refrigerante) de sala Soeteck', title: 'CDU de sala', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-aicoolit-room-cdu-coolant-distribution-unit/' },
      { image: '/resources/Soeteck-Liquid-to-Air-In-Row-CDU-Coolant-Distribution-Unit-1-300x210.webp', alt: 'CDU híbrido Soeteck', title: 'CDU híbrido', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-aicoolit-hybrid-cdu-coolant-distribution-unit/' },
    ],
    contentTitle: 'Unidade de Distribuição de Refrigerante (CDU) Inteligente',
    contentUrl: '/products/thermal-management/liquid-cooling-solutions/?category%5B%5D=coolant-distribution-units',
  },
  {
    id: 'orbital-manifolds',
    title: 'Coletores com Solda Orbital',
    subtitle: 'Aço inoxidável 316L',
    badge: 'DISTRIBUIÇÃO',
    description: 'As artérias principais de distribuição em aço inoxidável 316L grau médico. A solda orbital avançada garante juntas sem vazamento e resistência superior à corrosão ao longo de 10 anos de vida útil.',
    tags: ['Detecção de vazamentos', 'Tratamento de passivação', 'Solda orbital', 'Resistência química'],
    products: [
      { image: '/resources/Soeteck-Rack-Manifold-for-Liquid-Cooling-Solutions-4-1024x717.webp', alt: 'Coletor de rack Soeteck para refrigeração líquida', title: 'Coletores', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-rack-manifold-for-liquid-cooling-solutions/' },
    ],
    contentTitle: 'Coletores com Solda Orbital',
    contentUrl: '/products/thermal-management/liquid-cooling-solutions/soeteck-rack-manifold-for-liquid-cooling-solutions/',
  },
  {
    id: 'uqd-connectors',
    title: 'Conectores UQD',
    subtitle: 'Conexão cega',
    badge: 'INTERFACE',
    description: 'Conexões rápidas universais blind-mate em total conformidade com os padrões OCP. Projetadas para a troca a quente de lâminas de servidor com segurança e sem respingos — mesmo com o sistema pressurizado.',
    tags: ['Conforme OCP', 'Conexão cega', 'Tecnologia sem respingos', 'Longa vida de ciclos'],
    products: [
      { image: '/resources/Soeteck-Quick-Disconnect-Coupling-for-Liquid-Cooling-Solutions-1-1024x717.webp', alt: 'Acoplamento de desconexão rápida Soeteck', title: 'Conectores UQD', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-quick-disconnect-coupling-for-liquid-cooling-solutions/' },
    ],
    contentTitle: 'Conectores UQD',
    contentUrl: '/products/thermal-management/liquid-cooling-solutions/soeteck-quick-disconnect-coupling-for-liquid-cooling-solutions/',
  },
  {
    id: 'secondary-loop',
    title: 'Circuito Secundário',
    subtitle: 'EPDM / Cobre',
    badge: 'TRANSPORTE',
    description: 'Transporte robusto de fluido no nível do rack. Mangueiras trançadas flexíveis de EPDM para versatilidade ou tubulações rígidas de cobre para instalações permanentes. Compatibilidade química total com PG25 e diversos fluidos dielétricos.',
    tags: ['Opções EPDM / cobre', 'Design à prova de dobras', 'Alta pressão nominal', 'Resistência química'],
    products: [
      { image: '/resources/Soeteck-Secondary-Loop-for-Liquid-Cooling-Solutions-1-1024x717.webp', alt: 'Circuito secundário Soeteck', title: 'Circuito Secundário', url: '/products/thermal-management/liquid-cooling-solutions/soeteck-secondary-loop-for-liquid-cooling-solutions/' },
    ],
    contentTitle: 'Circuito Secundário',
    contentUrl: '/products/thermal-management/liquid-cooling-solutions/soeteck-secondary-loop-for-liquid-cooling-solutions/',
  },
  {
    id: 'heat-rejection',
    title: 'Rejeição de Calor',
    subtitle: 'Dry Coolers / Torre de Resfriamento',
    badge: 'EXTERNO',
    description: 'Sistemas eficientes de rejeição de calor ao ar livre. Os dry coolers adiabáticos usam aspersão inteligente para manter alta capacidade de refrigeração mesmo nos picos do verão, economizando água em relação às torres tradicionais.',
    tags: ['Economia de água', 'Baixo ruído', 'Controles inteligentes', 'Ventiladores EC'],
    products: [
      { image: '/resources/SOETECK-V-Shaped-Integrated-Outdoor-Air-Cooled-Condenser-1.webp', alt: 'Condensador externo em V Soeteck', title: 'Dry Coolers', url: '/products/thermal-management/heat-rejection/soeteck-v-shaped-integrated-outdoor-air-cooled-condenser/' },
    ],
    contentTitle: 'Dry Coolers & Torres de Resfriamento',
    contentUrl: '/products/thermal-management/heat-rejection/soeteck-v-shaped-integrated-outdoor-air-cooled-condenser/',
  },
];

// DEPRECATED: merged into AICOOLIT_CDU_TABS above (now 5 tabs)
// Keep exports for backward compatibility but no longer rendered separately
export const AICOOLIT_HEAT_REJECTION = {
  title: 'Dry Coolers & Torres de Resfriamento',
  subtitle: 'EXTERNO',
  description: 'Sistemas eficientes de rejeição de calor ao ar livre. Os dry coolers adiabáticos usam aspersão inteligente para manter alta capacidade de refrigeração mesmo nos picos do verão, economizando água em relação às torres tradicionais.',
  tags: ['Economia de água', 'Baixo ruído', 'Controles inteligentes', 'Ventiladores EC'],
};

export const AICOOLIT_SECONDARY_LOOP = {
  title: 'Circuito Secundário',
  subtitle: 'TRANSPORTE',
  description: 'Transporte robusto de fluido no nível do rack. Mangueiras trançadas flexíveis de EPDM para versatilidade ou tubulações rígidas de cobre para instalações permanentes. Compatibilidade química total com PG25 e diversos fluidos dielétricos.',
  tags: ['Opções EPDM / cobre', 'Design à prova de dobras', 'Alta pressão nominal', 'Resistência química'],
};

export const AICOOLIT_TRUST_BADGES = [
  { icon: 'medal', label: 'Membro da OCP' },
  { icon: 'check', label: 'ISO 9001' },
  { icon: 'lightbulb', label: 'Certificação CE' },
  { icon: 'trending', label: 'Uptime TIER III' },
];

export const AICOOLIT_SUPPLY_CHAIN = [
  { title: 'Fábrica inteligente de 50,000 m²', text: 'Linhas de produção automatizadas com capacidade para entregar mais de 500 módulos por ano.' },
  { title: 'Rede logística global', text: 'Parcerias estratégicas com grandes linhas de navegação garantem implantação rápida nas Américas, EMEA e Ásia-Pacífico.' },
  { title: 'Segurança de cadeia de suprimentos', text: 'Integração vertical — da caldeiraria à montagem do circuito líquido de precisão — garante capacidade quando você mais precisa.' },
];

export const AICOOLIT_FAQ = [
  {
    question: 'O que acontece em caso de vazamento de líquido?',
    answer: 'Adotamos uma estratégia de "defesa em profundidade". Primeiro, o design de <strong>pressão negativa</strong> garante que, em caso de microvazamento, o ar é aspirado para dentro em vez de o fluido ser expelido. Segundo, sensores inteligentes de detecção de vazamento (cabos e pontuais) são instalados em cada junta do coletor e nos CDUs. Ao detectar umidade, o sistema isola imediatamente o circuito afetado e alerta os operadores, protegendo os equipamentos de TI.',
  },
  {
    question: 'Preciso de pessoal especializado para manter o circuito líquido?',
    answer: 'Não. O sistema AICoolit foi projetado para "instalar e esquecer": a manutenção de rotina é mínima — basicamente verificar níveis de fluido e filtros uma vez ao ano. Os CDUs têm autodiagnóstico. Para a manutenção dos servidores, os <strong>conectores UQD</strong> sem respingos permitem que a equipe de TI troque lâminas a quente com a mesma facilidade de racks refrigerados a ar, sem habilidades especiais de encanamento.',
  },
  {
    question: 'É compatível com GPUs NVIDIA H100/Blackwell?',
    answer: 'Totalmente. Nossa arquitetura de refrigeração líquida foi projetada para chips de alto TDP (mais de 1000W por soquete). Suportamos placas frias (cold plates) padrão OCP para aceleradores NVIDIA, AMD e Intel. Seja com clusters HGX H100 ou com as futuras arquiteturas Blackwell, a densidade de 100kW por rack oferece ampla margem térmica.',
  },
  {
    question: 'As unidades operam em climas extremos?',
    answer: 'Sim. A carroceria do contêiner tem classe IP65 e isolamento R-30, separando o ambiente interno do externo. Para a rejeição de calor, os dry coolers adiabáticos mantêm a eficiência mesmo com temperaturas ambiente de até <strong>50°C (122°F)</strong>. Temos implantações bem-sucedidas em desertos do Oriente Médio e em regiões tropicais do Sudeste Asiático.',
  },
  {
    question: 'Quão rápido podemos implantar um cluster de 1MW?',
    answer: 'Obras tradicionais levam de 18 a 24 meses. Com a AICoolit, entregamos um módulo de 1MW testado em fábrica em <strong>5-10 semanas</strong>. No local, a instalação se resume a conexões de energia e água, com comissionamento geralmente em menos de uma semana — você começa a treinar seus modelos meses antes da concorrência.',
  },
];

export const AICOOLIT_CTA_OFFERS = [
  { label: 'Relatório gratuito de análise de TCO' },
  { label: 'Layout 3D personalizado' },
  { label: 'Folha de especificações técnicas' },
];

export const AICOOLIT_GPU_BADGES = ['NVIDIA HGX', 'INTEL Gaudi', 'AMD Instinct'];

// ─── Page-level template copy (moved out of AICoolitPage.astro hardcode) ───

export const AICOOLIT_NAV = {
  ariaLabel: 'Seções da página',
  brandSubtitle: 'Data Center de Refrigeração Líquida',
};

export const AICOOLIT_HERO = {
  title: 'Data Center<br>de Refrigeração Líquida',
  subtitle: 'Entregue <em>em qualquer lugar.</em>',
  intro: 'A refrigeração líquida é a solução de gestão térmica de nova geração para data centers na era da IA. A Soeteck <strong>AICoolit&trade;</strong> integra refrigeração direta ao chip (Direct-to-Chip) ou por imersão em contêineres padrão ISO, permitindo densidade de 100kW por rack. Dispense longos ciclos de obra: seu cluster de computação entra em operação em semanas.',
  ctaModels: 'Ver modelos',
  ctaWhitepaper: 'Baixar white paper',
  badgesLabel: 'Validado em engenharia para',
  imgAlt: 'Série AICoolit de Data Center de Refrigeração Líquida',
};

export const AICOOLIT_WHY = {
  eyebrow: 'A vantagem competitiva',
  title: 'Por que líquido + contêiner?',
  lead: 'No boom da IA, a infraestrutura tradicional virou o gargalo. A AICoolit une a "flexibilidade do contêiner" à "densidade da refrigeração líquida" — uma terceira opção superior.',
};

export const AICOOLIT_MODELS = {
  eyebrow: 'Portfólio de produtos',
  title: 'Escolha a sua escala',
  badges: ['Contêineres padrão ISO', 'Pré-fabricado em fábrica'],
  downloadSpecs: 'Baixar especificações {series}',
};

export const AICOOLIT_COMPONENTS = {
  eyebrow: 'Componentes em destaque',
  title: 'Núcleo de engenharia',
  lead: 'Integração perfeita de robustez industrial e precisão microscópica. Projetado como um sistema unificado, não como uma coleção de peças.',
};

export const AICOOLIT_SHELL = {
  layer1Badge: 'CAMADA 01: A FORTALEZA',
  layer1Title: 'Carcaça ISO de Grau Industrial',
  layer1Desc: 'O contêiner não é apenas uma caixa — é a linha de defesa primária. Reengenhamos contêineres ISO padrão com aço reforçado, criando um ambiente hermeticamente selado que protege ativos de computação de alto valor contra condições externas extremas.',
  layer1ImgAlt: 'Data center em contêiner',
  divider: 'DENTRO DA CARCAÇA',
  layer2Badge: 'CAMADA 02: O SISTEMA INTERNO',
  layer2Title: 'Circuito Líquido de Precisão',
  layer2Desc: 'Com a fabricação de CDUs, coletores e tanques sob controle próprio, a série <strong>AICoolit&trade;</strong> garante compatibilidade perfeita e segurança de cadeia de suprimentos para sua infraestrutura crítica.',
  tabsAriaLabel: 'Detalhes dos componentes',
};

export const AICOOLIT_TRUST_HEAD = {
  ariaLabel: 'Certificações e normas',
  heading: 'A confiança de líderes globais e normas internacionais',
};

export const AICOOLIT_SUPPLY_HEAD = {
  eyebrow: 'Segurança de cadeia de suprimentos',
  title: 'Feito para escalar.<br />Entregue globalmente.',
  lead: 'Na corrida da IA, certeza de cadeia de suprimentos é tudo. A SOETECK domina todo o processo de fabricação — da caldeiraria à montagem do circuito líquido de precisão. Garantimos capacidade quando você mais precisa.',
  imgAlt: 'Linha de produção da fábrica SOETECK',
};

export const AICOOLIT_FAQ_HEAD = {
  eyebrow: 'Perguntas frequentes',
  title: 'Respostas de especialistas',
  lead: 'Tudo o que você precisa saber sobre a implantação de data centers modulares com refrigeração líquida.',
};

export const AICOOLIT_CTA = {
  title: 'Seu data center de IA começa com uma conversa',
  lead: 'Não deixe a infraestrutura limitar seu crescimento. Configure seu data center com refrigeração líquida e receba um layout preliminar de engenharia em até 24 horas.',
};

export const AICOOLIT_FORM = {
  title: 'Solicitar orçamento',
  nameLabel: 'Seu nome:',
  namePlaceholder: 'Digite seu nome',
  emailLabel: 'E-mail:',
  emailPlaceholder: 'your@email.com',
  companyLabel: 'Empresa:',
  companyPlaceholder: 'Nome da empresa',
  phoneLabel: 'Telefone:',
  phonePlaceholder: 'Telefone / WhatsApp',
  subjectLabel: 'Assunto:',
  subjectPlaceholder: 'Ex.: solicitação de orçamento AICoolit Series I',
  messageLabel: 'Sua mensagem:',
  messagePlaceholder: 'Conte-nos sobre os requisitos do seu projeto…',
  submit: 'Enviar',
};
