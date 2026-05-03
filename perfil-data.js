/**
 * perfil-data.js — Dados do perfil técnico de Marcos Santos da Silva
 *
 * Para atualizar em 2027 (ou qualquer ano):
 *   - Nova experiência: adicione um objeto ao array `timeline`
 *   - Nova tecnologia: adicione ao array `stack`
 *   - Nova certificação: adicione ao array `certs`
 *   - Novo diferencial: adicione ao array `uniques`
 *   - Anos de experiência e contagem de certs são calculados automaticamente
 */

const profileConfig = {
  startYear: 1997,           // Ano de início da carreira (calcula anos automaticamente)
  companiesCount: 15,        // Atualizar ao mudar de empresa
  stackCountExtra: 18,       // Tecnologias extras além das listadas em `stack`
};

// ─────────────────────────────────────────────────────────────────────────────
// TRAJETÓRIA — adicione novas experiências ao final do array
// ─────────────────────────────────────────────────────────────────────────────
const timeline = [
  {
    era: 'era-cobol',
    period: '1997–1999',
    company: 'Banrisul · Departamento de Câmbio',
    role: 'Estagiário Desenvolvedor',
    tags: [
      { l: 'COBOL',        c: 'tag-legacy' },
      { l: 'VBA',          c: 'tag-legacy' },
      { l: 'PLI',          c: 'tag-legacy' },
      { l: 'Access',       c: 'tag-db'     },
      { l: 'Visual Basic', c: 'tag-legacy' },
    ],
    detail: 'Primeiro contato com sistemas críticos reais — câmbio bancário, onde erro tem custo imediato. Desenvolvimento e manutenção de rotinas com <span class="tl-highlight">COBOL, VBA, PLI e Access</span> no Banrisul. Ponto de partida que moldou permanentemente a mentalidade de sistemas críticos. Atuação em meio-turno, conciliando com freelance na Meta IT.',
  },
  {
    era: 'era-cobol',
    period: '1998–1999',
    company: 'Meta IT',
    role: 'Desenvolvedor Freelance',
    tags: [
      { l: 'Visual Basic', c: 'tag-legacy' },
      { l: 'VBA',          c: 'tag-legacy' },
      { l: 'Access',       c: 'tag-db'     },
    ],
    detail: 'Primeiro trabalho freelance, no contra-turno do estágio no Banrisul. Sistemas financeiros com Visual Basic, VBA e Access. Demonstração precoce de <span class="tl-highlight">autonomia e capacidade de atuar em múltiplos projetos simultaneamente</span>.',
  },
  {
    era: 'era-vb',
    period: '2001–2002',
    company: 'Puras do Brasil',
    role: 'Desenvolvedor Visual Basic',
    tags: [
      { l: 'Visual Basic', c: 'tag-legacy' },
      { l: 'SQL Server',   c: 'tag-db'     },
      { l: 'Access',       c: 'tag-db'     },
      { l: '3 camadas',    c: 'tag-net'    },
    ],
    detail: 'Desenvolvimento do sistema "PURAS" em <span class="tl-highlight">arquitetura de 3 camadas</span> — estrutura que antecipava os padrões modernos de separação de responsabilidades. Visual Basic, SQL Server e Access.',
  },
  {
    era: 'era-vb',
    period: '2002–2009',
    company: 'Data Cempro Informática',
    role: 'Técnico de Suporte N3 · ERP',
    tags: [
      { l: 'Oracle',     c: 'tag-db'     },
      { l: 'SQL Server', c: 'tag-db'     },
      { l: 'ERP',        c: 'tag-net'    },
      { l: 'Suporte N3', c: 'tag-legacy' },
    ],
    detail: '7 anos como Suporte Nível 3 em sistemas ERP críticos integrados com <span class="tl-highlight">Oracle e SQL Server</span>. Treinamento e coordenação de equipes de suporte. Período que consolidou o domínio profundo de banco de dados e visão sistêmica de negócio.',
  },
  {
    era: 'era-vb',
    period: '2009–2014',
    company: 'Sispro Software Empresarial',
    role: 'Dev .NET · Visual Basic · ERP',
    tags: [
      { l: '.NET',         c: 'tag-net'    },
      { l: 'Visual Basic', c: 'tag-legacy' },
      { l: 'Oracle',       c: 'tag-db'     },
      { l: 'SQL Server',   c: 'tag-db'     },
      { l: 'ERP',          c: 'tag-net'    },
    ],
    detail: 'Quase 5 anos desenvolvendo e sustentando <span class="tl-highlight">ERP para grandes clientes</span> com alta criticidade operacional. Migração de módulos legados para .NET sem ruptura de serviço — experiência rara em transições tecnológicas seguras.',
  },
  {
    era: 'era-net',
    period: '2014–2019',
    company: 'Lydians · M&B · Avacon · JobSystem',
    role: 'Dev .NET · WMS · ERP · PL/SQL',
    tags: [
      { l: '.NET',          c: 'tag-net'    },
      { l: 'WMS',           c: 'tag-net'    },
      { l: 'PL/SQL',        c: 'tag-db'     },
      { l: 'PostgreSQL',    c: 'tag-db'     },
      { l: 'Crystal Reports', c: 'tag-legacy' },
      { l: 'ZPL/ESC-POS',  c: 'tag-devops' },
    ],
    detail: 'Múltiplas empresas, múltiplos setores: financeiro, logística, construção civil. Consolidação em <span class="tl-highlight">WMS de alta complexidade</span>, integração com ferramentas de terceiros e automação de impressoras via ZPL/ESC-POS — diferencial técnico raro.',
  },
  {
    era: 'era-net',
    period: '2020–2021',
    company: 'Brazpine · Outsourcing',
    role: 'Dev .NET · Visual Basic → Analista N2',
    tags: [
      { l: '.NET',         c: 'tag-net'    },
      { l: 'Visual Basic', c: 'tag-legacy' },
      { l: 'Oracle',       c: 'tag-db'     },
      { l: 'PostgreSQL',   c: 'tag-db'     },
      { l: 'Azure DevOps', c: 'tag-devops' },
      { l: 'ERP',          c: 'tag-net'    },
    ],
    detail: 'ERP em modelo outsourcing + papel de <span class="tl-highlight">"Agilista"</span>: conduzia dailies, priorização e gestão de sprints no Azure DevOps — papel híbrido que combina desenvolvimento com gestão ágil. Scripts SQL para análise e suporte N2.',
  },
  {
    era: 'era-net',
    period: '2021–2023',
    company: 'PRODATA Mobility Brasil',
    role: 'Desenvolvedor .NET',
    tags: [
      { l: '.NET',            c: 'tag-net'    },
      { l: 'Angular',         c: 'tag-front'  },
      { l: 'Node.js',         c: 'tag-front'  },
      { l: 'Oracle',          c: 'tag-db'     },
      { l: 'Crystal Reports', c: 'tag-legacy' },
    ],
    detail: 'Primeiro contato sólido com <span class="tl-highlight">Angular em ambiente híbrido</span>. Integração de tecnologias modernas com base legada Oracle, garantindo continuidade operacional em cenário de alta demanda.',
  },
  {
    era: 'era-net',
    period: '2023–2024',
    company: 'Grupo Apisul',
    role: 'Desenvolvedor .NET',
    tags: [
      { l: '.NET',         c: 'tag-net'    },
      { l: 'SQL Server',   c: 'tag-db'     },
      { l: 'CI/CD',        c: 'tag-devops' },
      { l: 'Azure DevOps', c: 'tag-devops' },
      { l: 'xUnit',        c: 'tag-net'    },
      { l: 'Agile',        c: 'tag-legacy' },
    ],
    detail: '<span class="tl-highlight">Cultura DevOps incorporada</span>: estruturou repositório de documentação CI/CD no Azure DevOps, unit testing recorrente e rituais ágeis. Entrega de valor em ciclos curtos sem comprometer estabilidade.',
  },
  {
    era: 'era-ai',
    period: 'Dez 2024 – Mar 2026',
    company: 'Octafy LAD · operação Perto S.A.',
    role: 'Dev .NET Sênior → Full Stack (Promovido)',
    tags: [
      { l: 'Angular',     c: 'tag-front'  },
      { l: '.NET C#',     c: 'tag-net'    },
      { l: 'Python',      c: 'tag-devops' },
      { l: 'Docker',      c: 'tag-devops' },
      { l: 'Azure',       c: 'tag-devops' },
      { l: 'TCR',         c: 'tag-ai'     },
      { l: 'Claude AI',   c: 'tag-ai'     },
      { l: '.NET MAUI',   c: 'tag-net'    },
    ],
    detail: 'Ciclo completo <span class="tl-highlight">ponta a ponta</span>: Angular → WebAPI RESTful → WebServices SOAP → SQL Server → hardware TCR físico. 25 componentes Angular (84% das rotas). Scripts Python para dashboards. Setup Installer automatizado NSIS+PowerShell. POC em .NET MAUI. <span class="tl-highlight">Promovido internamente</span>. Uso estratégico de GitHub Copilot e Claude AI para análise de arquitetura e decisões técnicas complexas.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// STACK — adicione novas tecnologias aqui
// ─────────────────────────────────────────────────────────────────────────────
const stack = [
  { icon: '⬛', name: '.NET C#',           years: 17, pct: 95, color: '#60a5fa' },
  { icon: '🔺', name: 'Angular',           years: 4,  pct: 82, color: '#f87171' },
  { icon: '🐍', name: 'Python',            years: 2,  pct: 65, color: '#34d399' },
  { icon: '🗄️', name: 'SQL Server',        years: 20, pct: 94, color: '#6ee7b7' },
  { icon: '🔶', name: 'Oracle / PL/SQL',   years: 15, pct: 86, color: '#fcd34d' },
  { icon: '🐘', name: 'PostgreSQL',        years: 8,  pct: 75, color: '#a78bfa' },
  { icon: '☁️', name: 'Azure DevOps',      years: 5,  pct: 78, color: '#93c5fd' },
  { icon: '🐳', name: 'Docker',            years: 3,  pct: 70, color: '#67e8f9' },
  { icon: '🌿', name: 'Git / GitHub',      years: 7,  pct: 88, color: '#c4b5fd' },
  { icon: '📐', name: 'Clean Architecture',years: 10, pct: 85, color: '#f59e0b' },
  { icon: '🧪', name: 'xUnit / TDD',       years: 4,  pct: 72, color: '#86efac' },
  { icon: '🤖', name: 'GitHub Copilot · AI',years: 2, pct: 80, color: '#00d4ff' },
];

// ─────────────────────────────────────────────────────────────────────────────
// CERTIFICAÇÕES — adicione novas certificações ao final do array
// ─────────────────────────────────────────────────────────────────────────────
const certs = [
  { icon: '🏅', name: 'SFPC® — Scrum Foundation',      issuer: 'CertiProf'                       },
  { icon: '⚙️', name: 'DEPC® — DevOps Essentials',     issuer: 'CertiProf'                       },
  { icon: '📋', name: 'KIKF™ — Kanban Foundation',     issuer: 'CertiProf'                       },
  { icon: '🌐', name: 'ASP.NET Core',                  issuer: 'Iniciando com ASP.NET Core'      },
  { icon: '🎨', name: 'HTML & CSS Fundamentals',       issuer: 'Certificate of Completion'       },
  { icon: '💻', name: 'Programação Back-End',          issuer: 'Programação Básica em Back-End'  },
];

// ─────────────────────────────────────────────────────────────────────────────
// DIFERENCIAIS ÚNICOS — atualize conforme a evolução da carreira
// ─────────────────────────────────────────────────────────────────────────────
const uniques = [
  {
    icon: '🔌',
    title: 'Do COBOL ao Claude AI — trajetória contínua sem gaps',
    desc: `Trajetória desde 1997: de sistemas bancários com COBOL no Banrisul até o uso estratégico de IA generativa. Nenhum reset de carreira — evolução orgânica que representa o histórico mais amplo e consistente que um desenvolvedor pode apresentar.`,
  },
  {
    icon: '⚙️',
    title: 'Integração ponta a ponta com hardware físico',
    desc: 'Projeto Tesoureiro: Angular → WebAPI RESTful → WebServices SOAP → SQL Server → terminais TCR físicos. Ciclo completo incluindo hardware é diferencial raro para desenvolvedores de software — a maioria para na camada de banco de dados.',
  },
  {
    icon: '🏦',
    title: 'Mentalidade de sistemas críticos formada no bancário',
    desc: 'O primeiro projeto foi câmbio bancário no Banrisul em 1997. Essa mentalidade de "erro tem custo real" é formativa, não adquirida em curso. Vinte e sete anos depois, ainda atua em ambientes de alta criticidade operacional.',
  },
  {
    icon: '🤖',
    title: 'IA como aliada estratégica, não como dependência',
    desc: 'Usa GitHub Copilot e Claude AI para revisar arquitetura, analisar lógica complexa e estruturar decisões técnicas — não para gerar código às cegas. Profissional que domina a ferramenta e sabe exatamente quando e como aplicá-la.',
  },
  {
    icon: '📦',
    title: 'Visão full-cycle: do código ao deploy em campo',
    desc: 'Desenvolveu Setup Installer automatizado (NSIS + PowerShell) que instala Frontend, WebAPI, WebServices, SQL Server, IIS e conta Windows em um único fluxo. Compreensão da jornada completa do software até o usuário final.',
  },
];
