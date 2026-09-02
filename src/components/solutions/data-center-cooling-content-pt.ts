/**
 * Data Center Cooling Solutions — conteúdo em português (tradução code-embedded, Batch 3).
 * Estrutura espelha integralmente data-center-cooling-content.ts (EN), com os mesmos nomes de export;
 * caminhos de imagem, links, modelos, números e unidades preservados sem alteração.
 * Terminologia: tmp/translation-batch3/TERMINOLOGY-AND-RULES.md (§1 / §2);
 * títulos e resumos dos cases conforme traduções confirmadas do CMS (arquivo compartilhado do prefab, 2026-09-02).
 */
import type {
  DccProductCard,
  DccApplication,
  DccService,
  DccCase,
} from './data-center-cooling-content';

export type {
  DccProductCard,
  DccApplication,
  DccService,
  DccCase,
} from './data-center-cooling-content';

export const DCC_HERO = {
  eyebrow: 'Ar condicionado de precisão para data centers',
  title: 'Soluções de Refrigeração para Data Centers',
  subtitle:
    'A Soeteck oferece soluções de gestão térmica com excelente custo-benefício para data centers, estações de telecomunicações, laboratórios e todas as instalações críticas.',
  bannerImage: '/resources/soeteck-data-center-banner-1.webp',
  bannerAlt: 'Refrigeração de precisão para data centers',
};

export const DCC_SECTION_INTRO = {
  title: 'Ar Condicionado de Precisão',
  subtitle:
    'Com uma linha completa de unidades de resfriamento de precisão, nossas soluções para ambientes de missão crítica foram criadas para atender às mais variadas necessidades de refrigeração.',
};

export const DCC_SECTION_HEADINGS = {
  applications: 'Aplicações',
  services: 'Serviços',
  cases: 'Casos de Sucesso em Destaque',
  moments: 'Momentos com Clientes',
};

export const DCC_PAC_PRODUCTS: DccProductCard[] = [
  {
    name: 'Ar Condicionado de Precisão para Sala',
    capacity: '7.5 – 265.8 kW',
    description:
      'Os ar condicionados de precisão da série DataCool (PACs) foram projetados para entregar a grande capacidade de refrigeração (7.5kW-265.8kW) exigida por salas de computadores de grande porte e data centers, com múltiplas opções de refrigeração: a ar, a água e a água gelada (chilled water). Com EER ≥ 3.0 para eficiência de custos e escalabilidade flexível (suporta sistemas simples e duplos), reduzem o investimento inicial e permitem expandir sem esforço no futuro.',
    image: '/resources/Soeteck-chilled-water-room-cooling-system-38.2-265.8kW-4.webp',
    link: '/products/thermal-management/precision-air-conditioning/room-cooling/',
  },
  {
    name: 'Ar Condicionado de Precisão em Linha',
    capacity: '7.5 – 93.2 kW',
    description:
      'Os ar condicionados de precisão da série DataRow (PACs) foram projetados para instalação entre armários de data centers modulares em linha ou modulares de corredor. Com controle inteligente avançado e capacidade de refrigeração flexível (ajustável de 20-100%), aumentam em 33.3%-50% a eficiência energética das unidades padrão a ar.',
    image: '/resources/SOETECK-Row-Mounted-Pumped-Refrigerant-Cooling-System-1.webp',
    link: '/products/thermal-management/precision-air-conditioning/in-row-cooling/',
  },
  {
    name: 'Ar Condicionado de Precisão para Rack',
    capacity: '2.5 – 12.5 kW',
    description:
      'Os ar condicionados de precisão da série DataRack (PACs) são desenvolvidos para integração direta em racks de servidores padrão de data centers modulares em armário, com capacidade de refrigeração de 3.5kW-12.5kW e altura compacta de 6U-12U. Com refrigerante ecológico R410A e controladores de precisão, otimizam a refrigeração de equipamentos de TI de alta densidade e cortam o consumo desnecessário de energia.',
    image: '/resources/SOETECK-DX-packaged-rack-cooling-system-1.webp',
    link: '/products/thermal-management/precision-air-conditioning/rack-cooling/',
  },
  {
    name: 'Ar Condicionado de Precisão para Montagem em Parede',
    capacity: '12.5 – 21.2 kW',
    description:
      'Os ar condicionados de precisão para montagem em parede da Soeteck oferecem refrigeração de alta eficiência para aplicações compactas (packaged) internas e externas. Componentes avançados, como bomba de refrigerante com inversor e controlador inteligente, garantem desempenho preciso — escolha ideal para data centers modulares em contêiner. Reduzem o PUE e oferecem operação em dois modos para otimizar a eficiência energética.',
    image: '/resources/SOETECK-Wall-Mounted-Hybrid-Refrigerant-Green-Cooling-3.webp',
    link: '/products/thermal-management/precision-air-conditioning/soeteck-wall-mounted-pumped-refrigerant-cooling-system-indoor-and-outdoor-packaged/',
  },
  {
    name: 'Ar Condicionado de Precisão para Gabinete de Telecomunicações',
    capacity: '12.5 – 21.2 kW',
    description:
      'Os ar condicionados de precisão para gabinetes da Soeteck entregam refrigeração de alta eficiência para aplicações fechadas e compactas. Componentes avançados, como bomba de refrigerante com inversor e controlador inteligente, garantem desempenho preciso — escolha ideal para data centers modulares em contêiner. Reduzem o PUE e oferecem operação em dois modos para otimizar a eficiência energética.',
    image: '/resources/DC-Powered-TEC-Air-Conditioner-3.webp',
    link: '/products/thermal-management/telecom-enclosure-air-conditioner/',
  },
  {
    name: 'Unidades Externas',
    capacity: '12.5 – 21.2 kW',
    description:
      'As unidades externas da Soeteck oferecem rejeição de calor de alta eficiência para sistemas de refrigeração de precisão. Componentes avançados, como bomba de refrigerante com inversor e controlador inteligente, garantem desempenho preciso — escolha ideal para data centers modulares em contêiner. Reduzem o PUE e oferecem operação em dois modos para otimizar a eficiência energética.',
    image: '/resources/SOETECK-Outdoor-Air-Cooled-Condenser-UprightHorizontal-Installation-8.webp',
    link: '/products/thermal-management/heat-rejection/',
  },
];

export const DCC_SECTION_FANWALL = {
  title: 'Sistema de Resfriamento de Precisão Fan Wall',
  subtitle:
    'Para necessidades de refrigeração de médio a grande porte, nosso sistema fan wall entrega soluções de precisão mais confiáveis e eficientes em energia, com capacidade que acompanha a carga de data centers novos e existentes.',
};

export const DCC_FANWALL_PRODUCTS: DccProductCard[] = [
  {
    name: 'Fan Wall Modular',
    capacity: '150.1 – 300.1 kW',
    description:
      'As unidades fan wall da série FO.GBE da Soeteck são sistemas de resfriamento de precisão econômicos, indicados para ambientes de sala de máquinas como data centers, centros de comunicação, centros de computação e centros de controle. Além da eficiência energética: baixo ruído, pré-fabricação modular e projeto com redundância de ventiladores.',
    image: '/resources/SOETECK-FO.GBE-Modular-Fanwall-Cooling-2.webp',
    link: '/products/thermal-management/precision-air-conditioning/soeteck-fo-gbe-modular-fanwall-cooling-150-1kw-300-1kw-capacity/',
  },
  {
    name: 'Fan Wall Integrado',
    capacity: '30.2 – 60.1 kW',
    description:
      'As unidades fan wall da série FO.WL da Soeteck são sistemas de controle ambiental de precisão de médio a grande porte, com estrutura integrada, capacidade de refrigeração escalável e pequena área de instalação. O ar quente dos servidores entra diretamente para refrigeração; são indicadas para salas de equipamentos ou data centers, garantindo operação confiável e segura de dispositivos de precisão.',
    image: '/resources/SOETECK-FO.WL-Fan-Wall-4.webp',
    link: '/products/thermal-management/precision-air-conditioning/soeteck-fo-wl-fan-wall-cooling-units/',
  },
];

export const DCC_APPLICATIONS_INTRO =
  'Nossas soluções PAC atuam como CRAC, refrigeração de salas de servidores, unidades de refrigeração de data center e diversos tipos de HVAC em data centers, telecomunicações, laboratórios e museus.';

export const DCC_APPLICATIONS: DccApplication[] = [
  {
    title: 'Data Centers',
    description:
      'As cargas térmicas contínuas dos servidores exigem refrigeração de precisão com alto fluxo de ar, mantendo ±1 °C e ±5 %RH, evitando pontos quentes e garantindo disponibilidade digital 24×7.',
    image: '/resources/soeteck-data-center-cooling-1.webp',
  },
  {
    title: 'Instalações de Telecomunicações',
    description:
      'Centrais de comutação e equipamentos 5G dependem do ar condicionado de precisão para controle climático rigoroso e filtração de poeira, assegurando serviço de rede ininterrupto.',
    image: '/resources/soeteck-telecom-facilities-2.webp',
  },
  {
    title: 'Laboratórios',
    description:
      'Laboratórios de análise exigem ±1 °C estável, umidade controlada e limpeza; sistemas de precisão evitam desvios térmicos, protegem reagentes e garantem experimentos repetíveis.',
    image: '/resources/Soeteck-Laboratories-2.webp',
  },
  {
    title: 'Museus e Arquivos',
    description:
      'Livros raros e obras de arte sobrevivem por décadas quando a refrigeração de precisão mantém 20 °C e 50 %RH com filtração suave, prevenindo mofo, acidez e empenamento.',
    image: '/resources/Soeteck-Museums-Archives-Cooling-2.webp',
  },
];

export const DCC_SERVICES_INTRO =
  'Nossa equipe dedicada oferece uma gama de serviços sob medida para garantir que você receba ar condicionado de precisão da mais alta qualidade, hoje e no futuro.';

export const DCC_SERVICES: DccService[] = [
  {
    title: 'OEM/ODM',
    description: 'Oferecemos serviços OEM/ODM, permitindo personalizar produtos conforme sua marca e suas especificações de projeto.',
    icon: 'factory',
  },
  {
    title: 'Consultoria',
    description:
      'Nossa equipe comercial ouve as suas necessidades e, junto com especialistas de suporte a produtos, oferece recomendações de compra personalizadas.',
    icon: 'chat',
  },
  {
    title: 'Projeto',
    description:
      'Na fase de projeto do produto, nossos especialistas colaboram com você para criar soluções de refrigeração inovadoras e eficientes, alinhadas às suas necessidades.',
    icon: 'pen',
  },
  {
    title: 'Produção',
    description:
      'Processos de manufatura de ponta asseguram a produção de alta qualidade dos sistemas de refrigeração, em conformidade com as normas do setor e com as suas especificações.',
    icon: 'gear',
  },
  {
    title: 'Garantia de Qualidade',
    description:
      'Rígidos controles de qualidade ao longo da produção garantem a confiabilidade do produto; o relatório de qualidade está disponível sob demanda.',
    icon: 'check',
  },
  {
    title: 'Suporte Pós-Venda',
    description:
      'Uma equipe de suporte experiente entrega serviços pós-venda sem preocupações, e o treinamento técnico profissional mantém o seu sistema sempre em operação.',
    icon: 'headset',
  },
];

export const DCC_WHY = {
  title: 'Por que escolher a SOETECK',
  manufacturing: {
    title: 'Instalações de Manufatura Avançadas',
    description:
      'Na SOETECK, priorizamos a inovação e o desenvolvimento de produtos, com uma estrutura que inclui laboratórios de compatibilidade eletromagnética, análise de diferença de entalpia, confiabilidade ambiental, ruído e vibração, medição de potência e proteção IP. Esses laboratórios de ponta permitem testar rigorosamente os nossos produtos, garantindo os mais altos padrões de desempenho e confiabilidade.',
    statsAria: 'SOETECK em números',
    factoryAria: 'Instalações de manufatura da SOETECK',
    icon: 'factory',
    stats: [
      { value: 11, suffix: '+', label: 'Anos de experiência' },
      { value: 500, suffix: '+', label: 'Receita (milhões)' },
      { value: 120, suffix: '+', label: 'Colaboradores na China' },
      { value: 80, suffix: '+', label: 'Países atendidos' },
    ],
    factoryImages: [
      '/resources/soeteck-factory-12-1.jpg',
      '/resources/soeteck-factory-3-1.jpg',
      '/resources/soeteck-factory-2-1.jpg',
      '/resources/soeteck-factory-7-1.jpg',
      '/resources/soeteck-factory-6-1.jpg',
      '/resources/soeteck-factory-9-1.jpg',
      '/resources/soeteck-factory-8-1.jpg',
      '/resources/soeteck-factory-10-1.jpg',
      '/resources/soeteck-factory-11-1.jpg',
      '/resources/soeteck-factory-4-1.jpg',
      '/resources/soeteck-factory-5-1.jpg',
      '/resources/soeteck-factory-1-1.jpg',
    ],
  },
  certificates: {
    title: 'Certificações em Destaque',
    description:
      'Mantemos práticas rigorosas de gestão de qualidade e ambiental, refletidas nas nossas certificações: ISO9001 para gestão de qualidade, ISO14001 para gestão ambiental e ISO45001 para saúde e segurança ocupacional. Além disso, os nossos produtos atendem a padrões internacionais e são certificados por órgãos como o CE, reforçando o nosso compromisso com segurança, sustentabilidade e excelência.',
    certsAria: 'Certificações em destaque',
    icon: 'award',
    items: [
      { image: '/resources/Soeteck-CE-Certificates-for-PAC-1.webp', label: 'CE SOETECK para PAC' },
      { image: '/resources/Soeteck-CE-Certificates-for-UPS.webp', label: 'CE SOETECK para UPS' },
      { image: '/resources/Soeteck-ISO9001-2.webp', label: 'SOETECK ISO9001' },
      { image: '/resources/Soeteck-ISO14001-12.webp', label: 'SOETECK ISO14001' },
      { image: '/resources/Soeteck-ISO45001-2.webp', label: 'SOETECK ISO45001' },
      { image: '/resources/Soeteck-UPS-IEC.webp', label: 'SOETECK UPS IEC' },
    ],
  },
};

export const DCC_CASES_INTRO =
  'Descubra, por meio de histórias reais de sucesso, como entregamos soluções PAC inovadoras. Estes estudos de caso destacam a nossa experiência em superar desafios complexos e gerar resultados mensuráveis para clientes de diversos setores.';

export const DCC_CLIENT_CASES: DccCase[] = [
  {
    imgSrc: '/resources/a-project-of-Sinus-Dochi-LLC-2.webp',
    title:
      'Sinus-Dochi LLC reduz o PUE e melhora a eficiência de refrigeração com o sistema inteligente de refrigeração de precisão da SOETECK',
    slug: 'sinus-dochi-llc-reduces-pue-and-enhances-cooling-efficiency-with-soetecks-smart-precision-cooling-system',
    desc: 'A Sinus-Dochi LLC, uma proeminente empresa de serviços de HVAC na Mongólia, é especializada em refrigeração e conta com uma equipe de engenheiros especialistas. A empresa buscou melhorar a eficiência energética e o desempenho de refrigeração de suas instalações. Para isso, a Sinus-Dochi fez parceria com a SOETECK para projetar e implementar um sistema de refrigeração de precisão de ponta, sob medida para as suas necessidades.',
  },
  {
    imgSrc: '/resources/prefab-modular-data-center-of-Saudi-Telecom-6.webp',
    title:
      'Impulsionando a Inovação: SOETECK fornece à Saudi Telecom soluções avançadas de data center containerizado móvel com OLT',
    slug: 'driving-innovation-soeteck-provides-saudi-telecom-with-advanced-mobile-olt-container-data-center-solutions',
    desc: 'O projeto DR para a Saudi Telecom foi iniciado para projetar e implementar um data center containerizado móvel com OLT (Optical Line Terminal) totalmente personalizável, melhorando as capacidades operacionais de operadoras de telecomunicações no Oriente Médio. Esta solução inovadora permite a implantação rápida de aplicações avançadas de negócios, com alta eficiência e confiabilidade.',
  },
  {
    imgSrc: '/resources/100KW-Cooling-System-Solution-In-Malaysia-0.webp',
    title:
      'Open DC Malaysia implanta resfriamento de precisão modular de 100KW a ar para retrofit de data center',
    slug: 'open-dc-malaysia-deploys-modular-100kw-air-cooled-precision-cooling-for-data-center-retrofit',
    desc: 'A Open DC Malaysia é uma empresa de tecnologia de redes e serviços em nuvem, especializada em serviços de armazenamento de servidores. A empresa realizou um retrofit do seu data center existente para atualizar a infraestrutura de resfriamento e atender às novas demandas operacionais.',
  },
  {
    imgSrc: '/resources/a-project-of-Telecom-Fiji-1.webp',
    title:
      'Telecom Fiji Reforça a Estabilidade da Rede com Soluções de Resfriamento de Precisão da SOETECK com Design Anticorrosivo',
    slug: 'telecom-fiji-enhances-network-stability-with-soetecks-precision-cooling-solutions-featuring-anti-corrosion-design',
    desc: 'A Telecom Fiji Limited, fornecedora líder de serviços de comunicação de linha fixa e redes em Fiji, enfrentou riscos operacionais críticos devido a sistemas de refrigeração inadequados em suas estações de telecomunicações costeiras. Muitas instalações dependiam de unidades de ar condicionado residenciais subdimensionadas, que não davam conta do calor dos equipamentos de telecom em operação 24/7 e eram vulneráveis à corrosão no ambiente costeiro de Fiji.',
  },
];

export const DCC_MOMENTS_INTRO =
  'Na Soeteck, valorizamos cada conexão. De visitas cheias de insights a experiências práticas, estas são as histórias que moldam o nosso futuro em conjunto. Quer fazer parte disso? Entre em contato para agendar a sua visita e vamos criar o seu momento!';

export const DCC_MOMENTS_IMAGES: { src: string; alt: string }[] = [
  { src: '/resources/Soeteck-and-Fiber-Ocean-3.webp', alt: 'Visita da equipe da Fiber Ocean à Soeteck' },
  { src: '/resources/Soeteck-and-Russian-clients-16.webp', alt: 'Soeteck com clientes russos' },
  { src: '/resources/Soeteck-and-Russian-clients-15.webp', alt: 'Soeteck com clientes russos' },
  { src: '/resources/Soeteck-and-Russian-clients-14.webp', alt: 'Soeteck com clientes russos' },
  { src: '/resources/Soeteck-and-Russian-clients-13.webp', alt: 'Soeteck com clientes russos' },
  { src: '/resources/Soeteck-and-Russian-clients-12.webp', alt: 'Soeteck com clientes russos' },
  { src: '/resources/Soeteck-and-Russian-clients-11.webp', alt: 'Soeteck com clientes russos' },
  { src: '/resources/Soeteck-and-Russian-clients-10.webp', alt: 'Soeteck com clientes russos' },
];

export const DCC_CTA = {
  eyebrow: 'Fale com um Engenheiro',
  title: 'Entre em Contato com a SOETECK',
  text: 'Estamos a poucos cliques de distância! Preencha o formulário abaixo agora para receber o nosso suporte completo e lançar as bases do seu sucesso futuro.',
};
