/**
 * Páginas de soluções por indústria — conteúdo em português (modo translate-code-embedded).
 * Estrutura idêntica a industry-content.ts (EN); nomes de produtos/técnica mantidos em inglês.
 */
import type { IndustryContent } from './industry-content';

export const INDUSTRY_CONTENT_PT: Record<string, IndustryContent> = {
  telecom: {
    hero: {
      eyebrow: 'Telecom e infraestrutura de rede',
      title: 'Soluções de Data Center e Edge para Telecom',
      subtitle: 'Sites de edge e OLT prefabricados e resistentes à corrosão da SOETECK — implantados em semanas, feitos para operadoras, torres e estações de cabos submarinos.',
      bannerImage: '/industry/industry-telecom-1920.webp',
      alt: 'Infraestrutura de rede de telecomunicações',
      ctaPrimary: 'Falar com um especialista',
      ctaSecondary: 'Conhecer Data Centers Prefabricados',
      ctaSecondaryLink: '/solutions/data-center-solutions/prefabricated-container-data-center/',
    },
    pains: {
      eyebrow: 'O desafio',
      title: 'O que as operadoras de telecom enfrentam',
      text: 'Implantar e operar sites de rede traz três desafios recorrentes — cada um deles é alvo da nossa engenharia.',
      items: [
        { title: 'Investimento inicial alto', text: 'Construções em etapa única arriscam payback longo. A implantação prefabricada em fases reduz o CAPEX inicial e cresce com o tráfego.' },
        { title: 'Pressão de energia e carbono', text: 'Reguladores e metas ESG empurram operadoras para sites verdes e eficientes. Refrigeração de alta eficiência e energia DC inteligente ajudam.' },
        { title: 'Disponibilidade inegociável', text: 'O uptime da rede é o negócio. Infraestrutura testada em fábrica, pronta para N+1, com monitoramento remoto mantém os serviços online.' },
      ],
    },
    products: {
      eyebrow: 'O que entregamos',
      title: 'Produtos e soluções de grau telecom',
      text: 'Sistemas de energia, refrigeração e gabinetes projetados para sites de rede e data centers de borda.',
      ctaLabel: 'Ver detalhes',
      items: [
        { title: 'Ares acondicionados para gabinetes de telecom', text: 'Refrigeração de precisão resistente à corrosão para gabinetes e shelters externos — mais de 30 modelos.', path: '/products/thermal-management/telecom-enclosure-air-conditioner/' },
        { title: 'DCs de borda contenedorizados', text: 'Contêineres móveis de OLT e edge com energia, refrigeração e supressão de incêndio integradas.', path: '/solutions/data-center-solutions/prefabricated-container-data-center/' },
        { title: 'Energia DC e baterias', text: 'Sistemas de energia DC -48V e backup de baterias para confiabilidade de grau operadora.', path: '/products/critical-power/dc-power-systems/' },
      ],
    },
    need: {
      title: 'Implante seu próximo site de telecom em semanas',
      text: 'Conte-nos os requisitos do site — energia, refrigeração, espaço. Nossos engenheiros entregam uma solução prefabricada, testada em fábrica, pronta para operar na chegada.',
      cta: 'Inicie seu projeto',
    },
  },

  colocation: {
    hero: {
      eyebrow: 'Operadores de data center',
      title: 'Capacidade modular para operadores de data center',
      subtitle: 'Capacidade rápida e em fases para provedores de colocation e IDC — halls prefabricados, módulos de borda e expansão turnkey sem atrasos de obra.',
      bannerImage: '/industry/industry-colocation-1920.webp',
      alt: 'Campus de data center de colocation',
      ctaPrimary: 'Falar com um especialista',
      ctaSecondary: 'Ver DC Contenedorizado',
      ctaSecondaryLink: '/solutions/data-center-solutions/prefabricated-container-data-center/',
    },
    pains: {
      eyebrow: 'O desafio',
      title: 'O que os provedores de colocation enfrentam',
      text: 'A demanda por capacidade cresce mais rápido do que a construção. Essas são as pressões que todo operador sente.',
      items: [
        { title: 'Velocidade de entrega', text: 'A demanda dos clientes supera o ritmo de obra. Módulos prefabricados entregam capacidade vendável em semanas, não anos.' },
        { title: 'Expansão em fases', text: 'Construir tudo de uma vez compromete capital. Expansão modular por etapas alinha capacidade com receita.' },
        { title: 'CAPEX previsível', text: 'Preço de fábrica e entrega turnkey eliminam surpresas no site e comprimem o custo total de propriedade.' },
      ],
    },
    products: {
      eyebrow: 'O que entregamos',
      title: 'Soluções de capacidade para operadores',
      text: 'De gabinetes de borda individuais a halls prefabricados de múltiplos megawatts — entregues como unidades integradas e testadas em fábrica.',
      ctaLabel: 'Ver detalhes',
      items: [
        { title: 'Data centers contenedorizados', text: 'Contêineres ISO de 20/40 pés com energia, refrigeração e monitoramento integrados.', path: '/solutions/data-center-solutions/prefabricated-container-data-center/' },
        { title: 'DCs micromodulares', text: 'Módulos compactos tudo-em-um para pequenas salas de TI e microcapacidade.', path: '/solutions/data-center-solutions/cabinet-modular-data-center/' },
        { title: 'Refrigeração de precisão', text: 'Refrigeração de sala, fila e rack para cada faixa de densidade.', path: '/solutions/data-center-cooling-solutions/' },
      ],
    },
    need: {
      title: 'Adicione capacidade antes da demanda chegar',
      text: 'Compartilhe seu plano de expansão — as soluções prefabricadas da SOETECK escalam com você, rateando o CAPEX e encurtando o tempo até a receita.',
      cta: 'Planeje sua expansão',
    },
  },

  'cloud-hyperscale': {
    hero: {
      eyebrow: 'Nuvem e hiperescala',
      title: 'Infraestrutura para nuvem e hiperescala',
      subtitle: 'Capacidade pronta para IA para provedores de nuvem e hiperescaladores — módulos com refrigeração líquida, energia de alta densidade e fornecimento OEM.',
      bannerImage: '/industry/industry-cloud-1920.webp',
      alt: 'Visualização de infraestrutura de nuvem',
      ctaPrimary: 'Falar com um especialista',
      ctaSecondary: 'Conhecer Data Centers de IA',
      ctaSecondaryLink: '/solutions/data-center-solutions/ai-data-center/',
    },
    pains: {
      eyebrow: 'O desafio',
      title: 'O que os construtores de nuvem e hiperescala enfrentam',
      text: 'As cargas de IA reescrevem as regras de densidade, velocidade e suprimentos — eis a realidade dos construtores.',
      items: [
        { title: 'Demandas de densidade de IA', text: 'Clústeres de GPU passam de 100kW por rack. Refrigeração a ar já não basta — a líquida é pré-requisito.' },
        { title: 'Ciclos rápidos de capacidade', text: 'A capacidade dobra mais rápido que a construção. Módulos prefabricados com refrigeração líquida comprimem prazos.' },
        { title: 'Certeza na cadeia de suprimentos', text: 'Parceiros OEM/ODM precisam entregar equipamento consistente e testado em escala, com prazos previsíveis.' },
      ],
    },
    products: {
      eyebrow: 'O que entregamos',
      title: 'Infraestrutura pronta para IA',
      text: 'Energia de alta densidade, refrigeração líquida e halls modulares projetados para cargas de IA.',
      ctaLabel: 'Ver detalhes',
      items: [
        { title: 'Data Centers de IA', text: 'Infraestrutura de IA prefabricada com refrigeração líquida de até 120kW/rack.', path: '/solutions/data-center-solutions/ai-data-center/' },
        { title: 'AICoolit — refrigeração líquida', text: 'Soluções direct-to-chip e CDU para clústeres de GPU.', path: '/solutions/liquid-cooling-solutions/aicoolit-liquid-cooling-data-center/' },
        { title: 'UPS e energia', text: 'UPS de alta eficiência e distribuição de energia para computação densa.', path: '/products/critical-power/uninterruptible-power-supplies/' },
      ],
    },
    need: {
      title: 'Construa capacidade de IA em velocidade de hiperescala',
      text: 'Diga-nos a densidade por rack e o cronograma — entregamos capacidade com refrigeração líquida, testada em fábrica, pronta para computar na chegada.',
      cta: 'Solicitar orçamento',
    },
  },

  internet: {
    hero: {
      eyebrow: 'Plataformas de internet',
      title: 'Infraestrutura para plataformas de internet',
      subtitle: 'Data centers próprios e nós de borda para empresas de internet e tecnologia — rápidos, eficientes e escaláveis.',
      bannerImage: '/industry/industry-internet-1920.webp',
      alt: 'Conectividade global da internet',
      ctaPrimary: 'Falar com um especialista',
      ctaSecondary: 'Ver DC Modular em Fila',
      ctaSecondaryLink: '/solutions/data-center-solutions/row-modular-data-center/',
    },
    pains: {
      eyebrow: 'O desafio',
      title: 'O que as plataformas de internet enfrentam',
      text: 'O crescimento da plataforma testa a infraestrutura todos os dias. Estas são as restrições reais.',
      items: [
        { title: 'Escalonamento rápido', text: 'O crescimento de usuários exige capacidade em ciclos curtos. Módulos prefabricados implantam em semanas.' },
        { title: 'Eficiência operacional', text: 'O custo de energia é a maior alavanca. Refrigeração eficiente e energia inteligente reduzem o OPEX.' },
        { title: 'Borda distribuída', text: 'Conteúdo e serviços migram para a borda. Módulos compactos cabem em POPs e nós regionais.' },
      ],
    },
    products: {
      eyebrow: 'O que entregamos',
      title: 'Infraestrutura de plataformas',
      text: 'Data centers modulares e soluções de borda para empresas de internet construindo capacidade própria.',
      ctaLabel: 'Ver detalhes',
      items: [
        { title: 'DCs modulares em fila', text: 'Sistemas de gabinete único e em fila para borda e pequenas salas de TI.', path: '/solutions/data-center-solutions/row-modular-data-center/' },
        { title: 'DCs contenedorizados', text: 'Contêineres de rápida implantação para capacidade e expansão de POPs.', path: '/solutions/data-center-solutions/prefabricated-container-data-center/' },
        { title: 'Racks e gabinetes', text: 'Racks de servidores e gabinetes externos para todo tipo de site.', path: '/products/racks-enclosures/racks-cabinets/' },
      ],
    },
    need: {
      title: 'Escale a plataforma sem atrasos de obra',
      text: 'Descreva suas necessidades de capacidade — entregamos infraestrutura modular, testada em fábrica, que entra em operação em semanas.',
      cta: 'Inicie seu projeto',
    },
  },

  finance: {
    hero: {
      eyebrow: 'Serviços financeiros',
      title: 'Infraestrutura resiliente para serviços financeiros',
      subtitle: 'Energia e refrigeração de alta disponibilidade para bancos, bolsas e sistemas de negociação — onde um segundo de downtime tem preço.',
      bannerImage: '/industry/industry-finance-1920.webp',
      alt: 'Skyline de distrito financeiro',
      ctaPrimary: 'Falar com um especialista',
      ctaSecondary: 'Ver sistemas UPS',
      ctaSecondaryLink: '/products/critical-power/uninterruptible-power-supplies/',
    },
    pains: {
      eyebrow: 'O desafio',
      title: 'O que as instituições financeiras enfrentam',
      text: 'Em serviços financeiros, a falha de infraestrutura é medida em dinheiro. Este é o tamanho do risco.',
      items: [
        { title: 'Tolerância zero a downtime', text: 'Transações e negociação rodam 24/7. Redundância N+1 e topologia de alta disponibilidade são a base.' },
        { title: 'Conformidade regulatória', text: 'Auditorias exigem infraestrutura resiliente documentada. Sistemas testados em fábrica simplificam a certificação.' },
        { title: 'Latência e densidade', text: 'Negociação e análises de IA elevam a densidade. Refrigeração de precisão protege cargas sensíveis à latência.' },
      ],
    },
    products: {
      eyebrow: 'O que entregamos',
      title: 'Energia e refrigeração de missão crítica',
      text: 'Infraestrutura redundante e eficiente para cargas financeiras sempre ativas.',
      ctaLabel: 'Ver detalhes',
      items: [
        { title: 'Sistemas UPS', text: 'UPS de dupla conversão com configurações N+1 e 2N.', path: '/products/critical-power/uninterruptible-power-supplies/' },
        { title: 'Refrigeração de precisão', text: 'Refrigeração de sala e fila para ambientes térmicos previsíveis.', path: '/solutions/data-center-cooling-solutions/' },
        { title: 'Monitoramento e gestão', text: 'DCIM e monitoramento para visibilidade total da infraestrutura.', path: '/products/monitoring-management/' },
      ],
    },
    need: {
      title: 'Projete para o uptime que o seu negócio exige',
      text: 'Compartilhe a meta de disponibilidade — configuramos energia e refrigeração redundantes que mantêm seus sistemas negociando.',
      cta: 'Falar com um engenheiro',
    },
  },

  government: {
    hero: {
      eyebrow: 'Governo e setor público',
      title: 'Infraestrutura segura para o governo',
      subtitle: 'Data centers confiáveis e controlados para serviços públicos e cargas sensíveis — em conformidade, seguros e confiáveis.',
      bannerImage: '/industry/industry-government-1920.webp',
      alt: 'Prédio administrativo governamental',
      ctaPrimary: 'Falar com um especialista',
      ctaSecondary: 'Ver DC Micromodular',
      ctaSecondaryLink: '/solutions/data-center-solutions/cabinet-modular-data-center/',
    },
    pains: {
      eyebrow: 'O desafio',
      title: 'O que o setor público enfrenta',
      text: 'Os serviços públicos dependem de infraestrutura que simplesmente não falha. Estes são os requisitos.',
      items: [
        { title: 'Segurança e controle', text: 'Dados sensíveis exigem ambientes controlados e cadeias de suprimento documentadas.' },
        { title: 'Confiabilidade para serviços públicos', text: 'Serviços ao cidadão não podem cair. Infraestrutura N+1 e testes em fábrica garantem continuidade.' },
        { title: 'Disciplina orçamentária', text: 'Compras públicas preferem soluções previsíveis, em conformidade, com custo total claro.' },
      ],
    },
    products: {
      eyebrow: 'O que entregamos',
      title: 'Infraestrutura governamental confiável',
      text: 'Data centers compactos e confiáveis para cargas do setor público.',
      ctaLabel: 'Ver detalhes',
      items: [
        { title: 'DCs micromodulares', text: 'Módulos autônomos para salas de servidores e pequenos data centers governamentais.', path: '/solutions/data-center-solutions/cabinet-modular-data-center/' },
        { title: 'DCs contenedorizados', text: 'Capacidade segura e em fases para ministérios e agências.', path: '/solutions/data-center-solutions/prefabricated-container-data-center/' },
        { title: 'UPS e energia', text: 'Energia redundante para a continuidade dos serviços públicos.', path: '/products/critical-power/uninterruptible-power-supplies/' },
      ],
    },
    need: {
      title: 'Entregue serviços públicos confiáveis',
      text: 'Conte-nos os requisitos — fornecemos infraestrutura em conformidade e confiável, com entrega previsível.',
      cta: 'Iniciar uma conversa',
    },
  },

  manufacturing: {
    hero: {
      eyebrow: 'Manufatura',
      title: 'Infraestrutura de borda para manufatura',
      subtitle: 'Computação de piso resiliente e infraestrutura de IoT industrial — feita para rodar na planta, não apenas na sala de servidores.',
      bannerImage: '/industry/industry-manufacturing-1920.webp',
      alt: 'Linha de produção inteligente',
      ctaPrimary: 'Falar com um especialista',
      ctaSecondary: 'Ver refrigeração de rack',
      ctaSecondaryLink: '/products/thermal-management/precision-air-conditioning/rack-cooling/',
    },
    pains: {
      eyebrow: 'O desafio',
      title: 'O que os fabricantes enfrentam',
      text: 'O piso de fábrica é o ambiente mais severo para TI. Estas são as condições a superar.',
      items: [
        { title: 'Ambientes severos', text: 'Poeira, variações de temperatura e vibração exigem gabinetes de TI robustos e protegidos.' },
        { title: 'Parada custa produção', text: 'Paradas de linha custam dinheiro. Energia e refrigeração confiáveis mantêm os dados de produção fluindo.' },
        { title: 'Adoção de borda e IA', text: 'IA industrial e IoT precisam de computação local na borda — compacta e eficiente.' },
      ],
    },
    products: {
      eyebrow: 'O que entregamos',
      title: 'Infraestrutura de piso de fábrica',
      text: 'Energia, refrigeração e gabinetes robustos projetados para ambientes industriais.',
      ctaLabel: 'Ver detalhes',
      items: [
        { title: 'Refrigeração de racks e gabinetes', text: 'Refrigeração para racks e gabinetes externos em condições severas.', path: '/products/thermal-management/precision-air-conditioning/rack-cooling/' },
        { title: 'Gabinetes externos', text: 'Gabinetes protegidos para computação de borda em sites severos.', path: '/products/racks-enclosures/outdoor-enclosures/' },
        { title: 'DCs modulares em fila', text: 'Sistemas compactos para TI de planta e borda.', path: '/solutions/data-center-solutions/row-modular-data-center/' },
      ],
    },
    need: {
      title: 'Mantenha a produção rodando',
      text: 'Descreva o ambiente da planta — entregamos infraestrutura de borda robusta que sobrevive ao piso de fábrica.',
      cta: 'Falar com um engenheiro',
    },
  },

  healthcare: {
    hero: {
      eyebrow: 'Saúde',
      title: 'Infraestrutura para a saúde',
      subtitle: 'Soluções confiáveis de borda e data center para hospitais e nuvens regionais de saúde — onde a disponibilidade protege o paciente.',
      bannerImage: '/industry/industry-healthcare-1920.webp',
      alt: 'Hospital moderno',
      ctaPrimary: 'Falar com um especialista',
      ctaSecondary: 'Ver DC Micromodular',
      ctaSecondaryLink: '/solutions/data-center-solutions/cabinet-modular-data-center/',
    },
    pains: {
      eyebrow: 'O desafio',
      title: 'O que as instituições de saúde enfrentam',
      text: 'Os sistemas clínicos rodam 24/7. Esta é a realidade da TI em saúde.',
      items: [
        { title: 'Dados de pacientes devem estar disponíveis', text: 'Sistemas clínicos operam 24/7. Infraestrutura confiável faz parte da segurança do paciente.' },
        { title: 'Governança de dados', text: 'Dados de saúde exigem processamento local e ambientes controlados.' },
        { title: 'Espaço e integração', text: 'Hospitais têm espaço limitado. Módulos compactos se encaixam em prédios existentes sem grandes obras.' },
      ],
    },
    products: {
      eyebrow: 'O que entregamos',
      title: 'Infraestrutura de grau hospitalar',
      text: 'Energia e refrigeração compactas e confiáveis para hospitais e nuvens regionais de saúde.',
      ctaLabel: 'Ver detalhes',
      items: [
        { title: 'DCs micromodulares', text: 'Data centers compactos para salas de servidores hospitalares.', path: '/solutions/data-center-solutions/cabinet-modular-data-center/' },
        { title: 'Sistemas UPS', text: 'Energia contínua para aplicações clínicas.', path: '/products/critical-power/uninterruptible-power-supplies/' },
        { title: 'Refrigeração de precisão', text: 'Refrigeração previsível para ambientes de TI médicos.', path: '/solutions/data-center-cooling-solutions/' },
      ],
    },
    need: {
      title: 'Proteja o cuidado que você entrega',
      text: 'Conte sobre a sua instalação — fornecemos infraestrutura confiável e compacta para os seus sistemas clínicos.',
      cta: 'Inicie seu projeto',
    },
  },
};
