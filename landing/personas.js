// Dados das 4 personas operacionais do ecossistema WOW+.
// Emojis usados como ícones leves para evitar dependência externa.

window.PERSONAS = [
  {
    id: 'cliente',
    name: 'Cliente',
    role: 'Consumir e permanecer ativo',
    icon: '🛍️',
    tagline: 'Aproveite tudo o que a WOW+ tem a oferecer',
    headline: 'Vantagens, serviços e benefícios em um só lugar',
    description:
      'Como Cliente WOW+, você acessa serviços exclusivos, programas de fidelidade e benefícios contínuos enquanto permanece ativo no ecossistema.',
    isBusiness: false,
    benefits: [
      {
        title: 'Acesso a serviços exclusivos',
        description:
          'Catálogo completo de serviços com condições diferenciadas para clientes ativos.',
      },
      {
        title: 'Programa de fidelidade',
        description:
          'Acumule pontos a cada interação e troque por benefícios reais.',
      },
      {
        title: 'Suporte dedicado',
        description:
          'Atendimento prioritário com consultores treinados para resolver sua demanda.',
      },
      {
        title: 'Comunidade WOW+',
        description:
          'Conteúdo, eventos e novidades em primeira mão para quem é cliente.',
      },
    ],
    steps: [
      {
        title: 'Cadastre-se gratuitamente',
        description:
          'Preencha seus dados e crie sua conta em poucos minutos.',
      },
      {
        title: 'Escolha seus serviços',
        description:
          'Explore o catálogo e ative os serviços que combinam com você.',
      },
      {
        title: 'Aproveite as vantagens',
        description:
          'Comece a usufruir dos benefícios e do programa de fidelidade.',
      },
    ],
    audience: [
      'Pessoas que buscam soluções de saúde, bem-estar e estilo de vida',
      'Quem valoriza programas de fidelidade e benefícios contínuos',
      'Clientes indicados por consultores e especialistas WOW+',
    ],
    faq: [
      {
        question: 'O cadastro tem algum custo?',
        answer:
          'Não. O cadastro como Cliente WOW+ é gratuito e dá acesso imediato à plataforma.',
      },
      {
        question: 'Posso cancelar meus serviços a qualquer momento?',
        answer:
          'Sim. Você gerencia ativações e cancelamentos diretamente no seu painel.',
      },
      {
        question: 'Como funciona o programa de fidelidade?',
        answer:
          'Você acumula pontos a cada serviço ativo e pode trocá-los por vantagens exclusivas.',
      },
    ],
  },

  {
    id: 'consultor',
    name: 'Consultor',
    role: 'Vender e ativar clientes',
    icon: '🤝',
    tagline: 'Construa sua renda indicando e ativando clientes',
    headline: 'Renda recorrente com comissões sobre cada cliente ativo',
    description:
      'Como Consultor WOW+, você gera receita ao apresentar a plataforma, cadastrar novos clientes e mantê-los ativos no ecossistema.',
    isBusiness: false,
    benefits: [
      {
        title: 'Comissões recorrentes',
        description:
          'Ganhe a cada novo cliente cadastrado e sobre a recorrência mensal deles.',
      },
      {
        title: 'Material de vendas pronto',
        description:
          'Acesse apresentações, links e campanhas atualizadas para acelerar suas vendas.',
      },
      {
        title: 'Painel completo',
        description:
          'Acompanhe carteira, comissões, faturas e indicadores de ativação em tempo real.',
      },
      {
        title: 'Treinamentos contínuos',
        description:
          'Capacitação periódica para você dominar produtos, serviços e técnicas de venda.',
      },
    ],
    steps: [
      {
        title: 'Faça seu cadastro',
        description:
          'Preencha seus dados e aceite o termo de adesão de Consultor.',
      },
      {
        title: 'Participe da capacitação inicial',
        description: 'Acesse o onboarding e libere seu link de indicação.',
      },
      {
        title: 'Indique, ative e fature',
        description:
          'Cadastre clientes pelo seu link e acompanhe suas comissões.',
      },
    ],
    audience: [
      'Profissionais autônomos buscando renda extra ou recorrente',
      'Influenciadores e formadores de opinião com público engajado',
      'Empreendedores que querem montar uma carteira de clientes própria',
    ],
    faq: [
      {
        question: 'Quanto posso ganhar como Consultor?',
        answer:
          'A remuneração varia conforme volume de vendas e ativação. O painel mostra projeções em tempo real.',
      },
      {
        question: 'Preciso comprar algum kit para começar?',
        answer:
          'Não. O cadastro de Consultor é gratuito. Material de vendas e treinamento estão inclusos.',
      },
      {
        question: 'Quando recebo minhas comissões?',
        answer:
          'As comissões seguem o ciclo de pagamento mensal, com extrato detalhado no painel.',
      },
    ],
  },

  {
    id: 'especialista',
    name: 'Especialista',
    role: 'Estruturar e expandir rede',
    icon: '✨',
    tagline: 'Lidere consultores e escale sua operação',
    headline: 'Construa uma rede e multiplique resultados em escala',
    description:
      'Como Especialista WOW+, você estrutura, treina e expande times de consultores, ganhando sobre a performance coletiva da sua rede.',
    isBusiness: false,
    benefits: [
      {
        title: 'Comissões de rede',
        description:
          'Ganhe sobre a produção dos consultores que você cadastra e desenvolve.',
      },
      {
        title: 'Ferramentas de gestão',
        description:
          'Painel avançado com métricas de rede, ativação, churn e ranking.',
      },
      {
        title: 'Acesso direto à WOW+',
        description:
          'Relacionamento próximo com o time WOW+ para acelerar a sua operação.',
      },
      {
        title: 'Programa de reconhecimento',
        description:
          'Bonificações, prêmios e visibilidade para os especialistas de maior performance.',
      },
    ],
    steps: [
      {
        title: 'Solicite sua adesão',
        description:
          'Preencha o cadastro e passe pela qualificação como Especialista.',
      },
      {
        title: 'Monte sua rede',
        description:
          'Cadastre consultores e organize sua estrutura por região ou foco.',
      },
      {
        title: 'Gerencie e escale',
        description:
          'Use o painel para acompanhar, treinar e expandir a operação.',
      },
    ],
    audience: [
      'Lideranças comerciais com experiência em gestão de equipes',
      'Consultores WOW+ prontos para o próximo nível de carreira',
      'Empreendedores que querem construir uma operação própria de distribuição',
    ],
    faq: [
      {
        question: 'Quais são os pré-requisitos para virar Especialista?',
        answer:
          'É necessário passar por uma qualificação que avalia experiência, histórico e plano de operação.',
      },
      {
        question: 'Como funciona a comissão de rede?',
        answer:
          'Você ganha sobre a produção dos consultores cadastrados na sua estrutura, conforme o plano vigente.',
      },
      {
        question: 'Posso ser Consultor e Especialista ao mesmo tempo?',
        answer:
          'O perfil de Especialista incorpora as capacidades de Consultor, com benefícios adicionais.',
      },
    ],
  },

  {
    id: 'pdv',
    name: 'PDV',
    role: 'Distribuição física',
    icon: '🏪',
    tagline: 'Transforme seu ponto de venda em hub WOW+',
    headline: 'Expanda o portfólio do seu PDV com serviços WOW+',
    description:
      'Como Ponto de Venda parceiro, você passa a oferecer serviços WOW+ no balcão, ampliando ticket médio e fidelizando o público que já visita sua loja.',
    isBusiness: true,
    benefits: [
      {
        title: 'Novas fontes de receita',
        description:
          'Comissão sobre cada serviço ativado no balcão, sem investimento inicial.',
      },
      {
        title: 'Plataforma simples',
        description:
          'Cadastro de cliente e ativação de serviços em poucos cliques pelo painel.',
      },
      {
        title: 'Material de apoio',
        description:
          'Comunicação visual, banners e treinamento para a equipe do PDV.',
      },
      {
        title: 'Fidelização do público',
        description:
          'Aumente o motivo de retorno dos clientes ao seu ponto de venda.',
      },
    ],
    steps: [
      {
        title: 'Cadastre seu PDV',
        description: 'Envie CNPJ e dados do estabelecimento para análise.',
      },
      {
        title: 'Capacite a equipe',
        description:
          'Treine o time do balcão com nosso material e ative o painel.',
      },
      {
        title: 'Atenda e fature',
        description:
          'Ofereça serviços WOW+ aos seus clientes e receba comissões.',
      },
    ],
    audience: [
      'Farmácias, clínicas e estabelecimentos com fluxo recorrente',
      'Lojas físicas que querem ampliar portfólio sem estoque adicional',
      'Redes regionais buscando diferenciação no atendimento',
    ],
    faq: [
      {
        question: 'Preciso de CNPJ para cadastrar o PDV?',
        answer:
          'Sim. O cadastro de PDV exige CNPJ ativo e regular para liberação do painel.',
      },
      {
        question: 'Há custo de adesão?',
        answer:
          'Não. A adesão é gratuita e a WOW+ remunera o PDV por serviço ativado.',
      },
      {
        question: 'Quem dá suporte ao cliente final?',
        answer:
          'O suporte ao cliente final é da WOW+. O PDV atua na ativação e relacionamento.',
      },
    ],
  },
]

window.getPersona = function getPersona(id) {
  return window.PERSONAS.find((p) => p.id === id)
}
