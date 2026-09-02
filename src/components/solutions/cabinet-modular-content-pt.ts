/**
 * Cabinet Modular Data Center solution content — português (pt)
 * Espelho de cabinet-modular-content.ts (EN): todos os exports com nomes idênticos.
 * Marca SOETECK mantida; nomes de página e termos conforme glossário do Batch 3.
 */

// Hero
export const CABINET_HERO_TITLE = 'Data Center Modular em Armário';
export const CABINET_HERO_SUBTITLE =
  'Eleve a infraestrutura de TI com a solução de data center modular da SOETECK — escalabilidade e desempenho incomparáveis, a qualquer hora e em qualquer lugar.';
export const CABINET_HERO_IMAGE_ALT = 'Data center modular em armário';

// Overview
export const CABINET_OVERVIEW_IMAGE = '/resources/cabinet-dc-1-1024x798.webp';
export const CABINET_OVERVIEW_TITLE = 'Micro Data Centers para 5G, IoT e IA';
export const CABINET_OVERVIEW_IMAGE_ALT = 'Visão geral do data center modular em armário';
export const CABINET_OVERVIEW_PARAGRAPHS = [
  '<p>O <strong>Data Center Modular em Armário (CMDC) da SOETECK</strong> reúne energia, refrigeração e monitoramento em um único gabinete selado. Ele atende à demanda de rede por trás de 5G, IoT e IA sem a longa implantação e o alto custo operacional de uma instalação tradicional, e escala de um a dez armários.</p>',
  '<p>Cada unidade é selada com grau IP5X: os fluxos de ar quente e frio permanecem separados e o ruído fica abaixo de 49 dB. O monitoramento inteligente acompanha temperatura, umidade e energia em tempo real, enquanto UPS de alta eficiência e refrigeração de velocidade variável mantêm o PUE em cerca de 1.4.</p>',
  '<p>O CMDC é usado em bancos, educação, saúde, manufatura e governo. Em relação a uma obra convencional, reduz o custo de construção em 30%, o tempo de implantação em 90% e o espaço em até 80%. Uma plataforma unificada de gestão oferece monitoramento e manutenção remotos em um único painel, com forte resistência sísmica incorporada.</p>',
];

// Closer Look
export const CABINET_CLOSER_TITLE = 'Dentro do Data Center Modular em Armário';
export const CABINET_DETAIL_TITLES = [
  'Projetos típicos de CMDCs',
  'Modelos em destaque',
  'Módulos de infraestrutura central',
];
export const CABINET_HOTSPOT_IMAGE = '/resources/cabinet-modular-data-center-2.webp';

// Hotspot positions from Bricks data (desktop values)
export const CABINET_HOTSPOTS = [
  { label: 'Sistema de monitoramento', x: '16%', y: '31%' },
  { label: 'Sistema de segurança', x: '8%', y: '45%' },
  { label: 'Sistema de armários', x: '51.5%', y: '35%' },
  { label: 'Módulo de distribuição de energia', x: '71%', y: '62%' },
  { label: 'UPS', x: '64%', y: '66%' },
  { label: 'Bateria', x: '70%', y: '69%' },
  { label: 'Sistema de refrigeração de rack', x: '68%', y: '76%' },
  { label: 'Área de TI', x: '68%', y: '25%' },
];

export const CABINET_HOTSPOT_IMAGE_ALT = 'Projeto típico de um data center modular em armário';
export const CABINET_DESIGN_TEXT =
  'O data center modular em armário oferece uma solução integrada para distribuição de energia, gestão de refrigeração, segurança contra incêndio e cabeamento estruturado. Foi projetado para oferecer segurança, confiabilidade e eficiência em formato compacto.';
export const CABINET_KEY_FEATURES_LABEL = 'Principais características:';

export const CABINET_KEY_FEATURES = [
  'Segurança e confiabilidade: construído conforme altos padrões de segurança, com múltiplas proteções, incluindo resistência ao fogo, à água e recursos reforçados de segurança.',
  'Implantação rápida: o projeto permite instalação e configuração ágeis, com prontidão operacional em pouco tempo.',
  'Escalabilidade flexível: a arquitetura modular facilita a expansão conforme as necessidades mudam.',
  'Alta densidade e eficiência: o uso eficiente do espaço viabiliza alto poder computacional com consumo mínimo de recursos.',
  'Gestão inteligente: equipado com sistemas de monitoramento e gestão para supervisão e manutenção eficazes.',
];

export const CABINET_FEATURED_MODELS = [
  {
    hotspotLabel: 'Refrigeração de rack monobloco',
    image: '/resources/cabinet-data-center-7.webp',
    accordionTitle: 'com refrigeração de rack superior',
    hotspotPin: { x: '47%', y: '10%' },
    integrated_systems: ['UPS de 3-6 kVA', 'Distribuição de energia', 'Backup de baterias', 'Monitoramento e segurança'],
    key_advantages: ['Plug and play de verdade (sem unidade externa)', 'Design all-in-one que economiza espaço', 'Implantação rápida'],
  },
  {
    hotspotLabel: 'Refrigeração de rack Split',
    image: '/resources/cabinet-data-center-5.webp',
    accordionTitle: 'com refrigeração de rack',
    hotspotPin: { x: '48%', y: '83%' },
    integrated_systems: ['UPS de 3-10 kVA', 'Distribuição de energia', 'Backup de baterias', 'Monitoramento e segurança'],
    key_advantages: ['Design split reduz a ocupação de espaço U', 'Operação com baixo ruído', 'Escalabilidade modular'],
  },
  {
    hotspotLabel: 'Refrigeração em linha',
    image: '/resources/cabinet-data-center-6.webp',
    accordionTitle: 'com refrigeração em linha',
    hotspotPin: { x: '33%', y: '40%' },
    integrated_systems: ['UPS de 6-20 kVA', 'Distribuição de energia', 'Backup de baterias', 'Monitoramento e segurança'],
    key_advantages: ['Refrigeração em linha economiza espaço U', 'Desempenho térmico aprimorado', 'Densidade de nível corporativo'],
  },
];

export const CABINET_ACCORDION_INTEGRATED = 'Sistemas integrados:';
export const CABINET_ACCORDION_ADVANTAGES = 'Principais vantagens:';
export const CABINET_MODULES_LEAD =
  'A solução de data center modular em armário da SOETECK é composta por vários componentes essenciais: sistema de armários, sistema de controle térmico, alimentação crítica, sistema de segurança e sistema dinâmico de ambiente. A seguir, confira os detalhes de alguns módulos centrais.';

export const CABINET_MODELS_INTRO =
  'Nosso sistema de armários integrado para data centers compreende três soluções modulares: a versão com ar-condicionado superior (3-6 kVA), a versão com ar-condicionado em rack (3-10 kVA) e a versão em linha (6-20 kVA). Cada sistema unifica UPS, distribuição de energia e monitoramento inteligente, entregando infraestrutura eficiente e escalável para data centers de todos os portes.';

export const CABINET_MODELS_OUTRO =
  'Como peças de LEGO, esses armários são projetados para implantação rápida. Nossas soluções podem ser personalizadas para atender a requisitos específicos, alcançando PUE de apenas 1.4 e implantação em somente 10 minutos. O armário selado com grau IP5X conta com porta de abertura de emergência, controle de acesso três em um (impressão digital, cartão, senha), interface de monitoramento com tela touch e suporte a vários protocolos northbound.';

export const CABINET_CORE_MODULES = [
  { title: 'Módulo de refrigeração eficiente', text: 'Gestão térmica e dissipação de calor', icon: 'snowflake' },
  { title: 'Distribuição de energia inteligente', text: 'Distribuição e gestão de energia', icon: 'bolt' },
  { title: 'Sistema de proteção e segurança', text: 'Proteção contra incêndio e segurança física', icon: 'shield' },
  { title: 'Sistema de monitoramento inteligente', text: 'Monitoramento do status operacional', icon: 'chart' },
];

export const CABINET_CRITICAL_POWER_TITLE = 'Energia Crítica';
export const CABINET_CRITICAL_POWER_TEXT =
  'A solução de data center em armário da SOETECK incorpora um sistema eficiente de distribuição de energia, com uma gama de UPS de rack e módulos de distribuição sob medida. Os clientes podem escolher entre baterias de lítio ou chumbo-ácido para rack, conforme a necessidade. Também oferecemos serviços de seleção de UPS, além de projeto e fabricação completos de distribuição. Conforme o tempo de backup necessário, disponibilizamos diversas opções de baterias: conjuntos de baterias, armários de baterias e racks de baterias.';

export const CABINET_CRITICAL_POWER_PRODUCTS = [
  {
    title: 'UPS Série SY-RT (1-3kVA)',
    subtitle: 'UPS on-line de alta frequência, 1kVA-3kVA, PF1',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-rt-series-high-frequency-online-ups-1kva-3kva-rack-tower-mounted-pf1',
    excerpt: 'A UPS Série SY-RT, 1-3kVA, oferece proteção on-line confiável de dupla conversão com saída PF1, ampla faixa de tensão de entrada e design compacto rack/torre.',
    specs: ['Eficiência PF1', 'Tempo de transferência 0ms', 'Faixa de 110-300VAC', '96% de eficiência no modo ECO'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF11.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF12.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-3kVA-PF13.webp',
    ],
  },
  {
    title: 'UPS Série SY-RT (1-10kVA)',
    subtitle: 'UPS on-line de alta frequência, 1kVA-10kVA, PF0.8',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-sy-rt-series-ups-high-frequency-online-ups-1kva-10kva-rack-tower-mounted',
    excerpt: 'A UPS Série SY-RT, 1-10kVA, oferece proteção on-line confiável com PF0.8, eficiência de até 93% e montagem flexível em rack ou torre para implantação versátil.',
    specs: ['PF0.8', 'Eficiência de até 93%', 'Montagem em rack e torre', 'Configuração flexível'],
    images: [
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-3.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-4.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-1.webp',
      '/resources/Soeteck-Online-High-frequency-UPS-1kVA-10kVA-PE0.8-2.webp',
    ],
  },
  {
    title: 'UPS Série ST-RT (10-60kVA)',
    subtitle: 'UPS on-line de alta frequência, 10kVA-60kVA, trifásica',
    slug: 'critical-power/uninterruptible-power-supplies/soeteck-st-rt-series-high-frequency-online-ups-10kva-60kva-rack-tower-mounted-3-phase-in-out',
    excerpt: 'A UPS Série ST-RT, de 10-60kVA, proporciona proteção on-line de dupla conversão real com eficiência PF1. Conversível entre rack e torre, entrada/saída trifásicas e modo ECO com 95.5% para economizar energia.',
    specs: ['Dupla conversão real', 'Entrada / saída trifásicas', 'Eficiência PF1', 'Modo ECO 95.5%'],
    images: [
      '/resources/online-High-Frequency-UPSR.webp',
      '/resources/online-High-Frequency-UPSR-20KVA.webp',
      '/resources/online-High-Frequency-UPSR-40KVA.webp',
      '/resources/online-High-Frequency-UPSR-60KVA.webp',
    ],
  },
];

export const CABINET_THERMAL_TITLE = 'Gestão Térmica';
export const CABINET_THERMAL_MANAGEMENT_TEXT =
  'A SOETECK oferece soluções completas de refrigeração para data centers e estações-base, incluindo sistemas de ar condicionado de precisão de nível de sala, de linha e de rack. Para atender com eficácia às demandas de refrigeração da computação de alta densidade dentro dos armários, nossos sistemas de nível de rack e de linha são projetados para eficiência e custo-benefício.';

export const CABINET_THERMAL_PRODUCTS = [
  {
    title: 'Refrigeração de rack monobloco superior',
    subtitle: 'Capacidade de 2.5kW – 5.5kW',
    slug: 'soeteck-top-mount-packaged-rack-cooling-system-2-5kw-5-5kw-capacity-suitable-for-micro-mini-modular-data-center',
    excerpt: 'Sistema de refrigeração de rack monobloco superior, capacidade de 2.5-5.5kW. Design all-in-one economiza espaço U sem unidade externa — ideal para micro data centers.',
    specs: ['Refrigeração de 2.5kW a 5.5kW', 'Refrigerante R410A', 'Integração com BMS', 'Suporte a SNMP'],
    images: [
      '/resources/SOETECK-DX-top-mounted-rack-cooling-system-3.webp',
      '/resources/SOETECK-DX-top-mounted-rack-cooling-system-4.webp',
      '/resources/SOETECK-DX-top-mounted-rack-cooling-system-1.webp',
      '/resources/SOETECK-DX-top-mounted-rack-cooling-system-5.webp',
    ],
  },
  {
    title: 'Refrigeração de rack monobloco',
    subtitle: 'Capacidade de 3.5kW, 8U',
    slug: 'soeteck-packaged-rack-cooling-system-3-5kw-capacity-8u-bottom-or-middle-mounted',
    excerpt: 'Sistema de refrigeração de rack monobloco, 3.5kW de capacidade e 8U de altura. Design compacto para instalação inferior ou intermediária, com refrigerante R410A e integração com BMS.',
    specs: ['Refrigeração de 3.5kW', 'Instalação inferior ou intermediária', 'Refrigerante R410A', 'Integração com BMS'],
    images: [
      '/resources/SOETECK-DX-packaged-rack-cooling-system-1.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-2.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-3.webp',
      '/resources/SOETECK-DX-packaged-rack-cooling-system-4.webp',
    ],
  },
  {
    title: 'Refrigeração de rack Split',
    subtitle: '3.5kW-12.5kW, tipo split',
    slug: 'soeteck-rack-cooling-system-3-5kw-12-5kw-capacity-split-type-cooling-unit',
    excerpt: 'Sistema de refrigeração de rack split com faixa de 3.9-12.8kW. Compressor inversor, ventilador EC e unidade compressora externa proporcionam gestão térmica eficiente.',
    specs: ['Faixa de 3.9kW-12.8kW', 'Compressor inversor', 'Ventilador EC', 'Unidade compressora externa'],
    images: [
      '/resources/SOETECK-Rack-Cooling-System-3.5kW-12.5kW-1.webp',
      '/resources/SOETECK-Rack-Cooling-System-3.5kW-12.5kW-4.webp',
      '/resources/SOETECK-Rack-Cooling-System-3.5kW-12.5kW-2.webp',
      '/resources/SOETECK-Rack-Cooling-System-3.5kW-12.5kW-5.webp',
      '/resources/SOETECK-Rack-Cooling-System-3.5kW-12.5kW-3.webp',
    ],
  },
];

export const CABINET_GALLERY_ARIA = 'galeria';

// Specs table
export const CABINET_SPECS_TITLE = 'Modelos em destaque';
export const CABINET_SPEC_COLUMNS = [
  { model: 'SY-MDC-03N', image: '/resources/cabinet-data-center-8-734x1024.webp' },
  { model: 'SY-MDC-06T', image: '/resources/cabinet-data-center-9-734x1024.webp' },
  { model: 'SY-MDC-10R', image: '/resources/cabinet-data-center-8-734x1024.webp' },
  { model: 'Personalizado', image: '/resources/cabinet-data-center-9-734x1024.webp' },
];
export const CABINET_SPEC_TABLE_MODELS = 'Modelos';
export const CABINET_SPEC_ROWS = [
  ['Espaço utilizável (U)', '18U', '31U', '27U', 'Personalizado'],
  ['Tipo de redundância', 'N', 'N', 'N', 'N, N+1, 2N'],
  ['Tipo de refrigeração', 'AC integrado', 'AC split', 'AC split', 'Integrado ou split'],
  ['Localização do AC', 'Superior', 'Em rack', 'Em rack', 'Conforme necessário'],
  ['Capacidade de refrigeração (kW)', '3.5', '3.5', '6.5', 'Personalizado'],
  ['Capacidade da UPS (kVA)', '3', '6', '10', '3–20'],
  ['Portas do PDU', 'Padrão 8', 'Padrão 16', 'Padrão 16', 'Padrão ou inteligente'],
  ['Ventilação de emergência', 'Porta de abertura automática', 'Porta de abertura automática', 'Porta de abertura automática', 'Porta de abertura automática'],
];
export const CABINET_PDF_LINK_TEXT = 'Solução de Data Center em Armário SOETECK.pdf';

// Transport
export const CABINET_TRANSPORT = [
  {
    title: 'Transporte da unidade completa',
    text: 'O produto é pré-ajustado em fábrica, com design reforçado contra vibrações. Exceto o ar-condicionado externo, todos os demais equipamentos são transportados como unidade completa.',
  },
  {
    title: 'No local, instalação apenas dos PACs',
    text: 'Custos de transporte, construção e comissionamento no local são significativamente reduzidos, encurtando o prazo e diminuindo a taxa de falhas.',
  },
];

export const CABINET_TRANSPORT_IMAGES = [
  '/resources/cabinet-dc-1-1.webp',
  '/resources/transportation-package-1.webp',
];

// Scenarios
export const CABINET_SCENARIOS_TITLE = 'Quem precisa de um Data Center Modular em Armário?';
export const CABINET_SCENARIOS_SUBTITLE =
  'Cenários de aplicação: integração de módulos de energia, refrigeração e infraestrutura para operações de TI confiáveis — onde o data center modular em armário entrega valor único';
export const CABINET_SCENARIO_DETAILS_ARIA = 'detalhes';
export const CABINET_TAB_BENEFITS = 'Benefícios da solução';
export const CABINET_TAB_PAIN = 'Principais dores';

export const CABINET_SCENARIOS = [
  {
    title: 'Agências bancárias',
    image: '/resources/Bank-Branches.webp',
    pain_points: ['Sem pessoal no local', 'Alta segurança', 'Espaço limitado'],
    benefits: ['Gabinete protegido', 'Monitoramento remoto', 'Economia de espaço'],
    problem: 'As salas de servidores de agências bancárias costumam ser apertadas, sem espaço para equipamentos padrão de data center, e enfrentam exigências rígidas de segurança. Sem profissionais de TI no local, falhas de equipamento podem interromper negócios e prejudicar a experiência dos clientes e a reputação da instituição.',
    solution: 'Nosso design de rack integrado combina servidores, energia e refrigeração no espaço padrão de rack, economizando 60% da área. Com controle de acesso por impressão digital, videomonitoramento e plataforma de operação remota, permite operação 7×24 sem pessoal no local, com tempo de resposta a falhas reduzido a minutos.',
    application: 'Recuperação de desastres naturais, ajuda emergencial',
  },
  {
    title: 'Escritórios de pequenas empresas',
    image: '/resources/Small-Business-Offices.webp',
    pain_points: ['Gestão simples', 'Pouco pessoal de TI', 'Ambiente de escritório'],
    benefits: ['Operação silenciosa', 'Plug & play', 'Baixa manutenção'],
    problem: 'Pequenas empresas não dispõem de equipe de TI dedicada e enfrentam dificuldades na manutenção da sala de servidores. Ambientes de escritório impõem limites rígidos de ruído, e orçamentos restritos exigem infraestrutura de TI confiável a custos menores.',
    solution: 'O design integrado simplifica a gestão diária, permitindo operação fácil por não especialistas. A redução otimizada de ruído mantém a operação abaixo de 50 decibéis, sem perturbar o escritório. A alta integração corta o custo total de propriedade em mais de 40% em relação a montagens tradicionais.',
    application: 'Locais remotos de perfuração, operações de mineração',
  },
  {
    title: 'Estações-base de telecom',
    image: '/resources/Telecom-Base-Stations.webp',
    pain_points: ['Temperaturas extremas', 'Localização remota', 'Exterior / condições adversas'],
    benefits: ['Ampla faixa de temperatura', 'Resistente ao clima', 'Gestão remota'],
    problem: 'Estações-base externas enfrentam condições severas — temperaturas extremas, poeira, chuvas fortes — e alimentação elétrica instável. A dispersão das localizações encarece as inspeções manuais, e falhas podem derrubar o serviço de comunicação.',
    solution: 'Nossos armários com grau IP55 resistem a condições climáticas severas. Dupla entrada de energia mais backup de bateria de lítio garante 99.999% de confiabilidade elétrica. Uma plataforma remota centralizada monitora o status em tempo real, reduzindo em 80% a necessidade de manutenção no local.',
    application: 'Eventos esportivos, festivais, conferências',
  },
  {
    title: 'Instalações de saúde',
    image: '/resources/Healthcare-Facilities.webp',
    pain_points: ['Sistemas críticos', 'Ambiente limpo', 'Alta disponibilidade'],
    benefits: ['Energia redundante', 'Baixo ruído', 'Fácil higienização'],
    problem: 'As salas de servidores de hospitais sustentam sistemas críticos, como equipamentos de diagnóstico e prontuários de pacientes — qualquer interrupção coloca em risco a segurança do paciente. O ambiente médico exige alta limpeza e baixo ruído, enquanto o espaço limitado restringe áreas dedicadas de sala técnica.',
    solution: 'A redundância N+1 elimina pontos únicos de falha na energia e na refrigeração, permitindo manutenção on-line. O design totalmente fechado com filtragem de ar atende aos padrões de limpeza médica, e o tamanho compacto permite implantação flexível em estações de enfermagem ou cantos de setores.',
    application: 'Operações de campo, bases militares, instalações de defesa',
  },
  {
    title: 'Hubs de transporte inteligente',
    image: '/resources/Smart-Transportation-Hubs.webp',
    pain_points: ['Segurança crítica', 'Espaço público', 'Operação 24/7'],
    benefits: ['Resistente a vandalismo', 'Operação contínua', 'Eficiência de espaço'],
    problem: 'Aeroportos, estações e hubs exigem operação de TI 24/7 — falhas causam caos operacional. Ambientes públicos trazem riscos de vandalismo, e os espaços disponíveis para salas técnicas são dispersos e limitados.',
    solution: 'A redundância de grau industrial assegura disponibilidade acima de 99.99%. Armários à prova de arrombamento e controle de acesso reforçam a segurança física. Racks miniaturizados são implantados próximos às áreas funcionais, com gestão centralizada via colaboração em rede.',
    application: 'Redes IoT, cidades inteligentes, edge industrial',
  },
  {
    title: 'Centros de comando de emergência',
    image: '/resources/Emergency-Command-Centers.webp',
    pain_points: ['Missão crítica', 'Montagem temporária', 'Prazo curto'],
    benefits: ['Montagem rápida', 'Design portátil', 'Energia de backup'],
    problem: 'Emergências exigem rápida montagem temporária de TI, que equipamentos tradicionais não conseguem entregar. O local de comando pode mudar, exigindo mobilidade do sistema, e ambientes de campo carecem de energia estável.',
    solution: 'O armário integrado está pronto para uso logo após a abertura da caixa, com implantação em 15 minutos após conectar a energia. As rodas permitem deslocamentos curtos, e as baterias integradas fornecem 4-8 horas de energia de emergência para operação contínua.',
    application: 'Data centers em nuvem, expansão de TI corporativa',
  },
];

// Client cases section
export const CABINET_CASES_TITLE = 'Estudos de caso de Data Center Modular em Armário';

// Bottom contact CTA
export const CABINET_CONTACT_EYEBROW = 'Fale com um engenheiro';
export const CABINET_CONTACT_TITLE = 'Entre em contato com a SOETECK';
export const CABINET_CONTACT_TEXT =
  'Compartilhe os requisitos da sua instalação e receba um caminho prático de solução. Conte o tipo de projeto, as necessidades de capacidade e o cronograma — nossa equipe ajudará a identificar a configuração certa.';
export const CABINET_CONTACT_CHECKS = [
  'Consultoria de projeto',
  'Suporte técnico de configuração',
  'Acompanhamento regional',
];
export const CABINET_CONTACT_BUTTON = 'Fale conosco';
export const CABINET_CONTACT_BROCHURE = 'Baixar brochura';

// Overview CTA row
export const CABINET_CTA_BROCHURE = 'OBTER BROCHURA';
export const CABINET_CTA_CONTACT = 'FALE CONOSCO';

// Reuse client cases from prefab-content.ts - import via PREFAB_CLIENT_CASES