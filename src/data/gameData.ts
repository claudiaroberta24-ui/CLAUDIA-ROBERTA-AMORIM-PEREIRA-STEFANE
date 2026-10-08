export interface QuestionOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface PhaseQuestion {
  id: number;
  levelBadge: string;
  topic: string;
  prompt: string;
  options: QuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  feedback: {
    correctPraise: string;
    incorrectGuidance: string;
    explanation: string;
    bookConcept: string;
  };
}

export interface PhaseSynthesisFlowItem {
  label: string;
  description: string;
  tag?: string;
}

export interface PhaseData {
  phaseNumber: number;
  id: string;
  title: string;
  subtitle: string;
  themeColor: string;
  iconName: string;
  openingDescription: string;
  openingPillars: {
    title: string;
    description: string;
  }[];
  questions: PhaseQuestion[];
  synthesis: {
    title: string;
    flow: PhaseSynthesisFlowItem[];
    comparisons?: {
      itemA: { title: string; points: string[] };
      itemB: { title: string; points: string[] };
    };
    finalQuote: string;
  };
}

export const GAME_PHASES: PhaseData[] = [
  // ==========================================
  // FASE 1: ALGORITMOS, PROGRAMAS, SOFTWARE E HARDWARE
  // ==========================================
  {
    phaseNumber: 1,
    id: 'fase-1',
    title: 'Fase 1 – O estudo de algoritmos',
    subtitle: 'Da solução de um problema à representação para a máquina',
    themeColor: 'cyan',
    iconName: 'Workflow',
    openingDescription:
      'Investigue a gênese do conceito de algoritmo: uma formulação da mente humana que precede a existência dos computadores e que precisa ser traduzida em uma representação compatível para que qualquer máquina possa executá-la.',
    openingPillars: [
      {
        title: 'Algoritmo como Método',
        description: 'Conjunto ordenado de passos não ambíguos e executáveis que define uma atividade finita.',
      },
      {
        title: 'Independência dos Computadores',
        description: 'O estudo de algoritmos já era um ramo estabelecido da Matemática séculos antes da eletrônica.',
      },
      {
        title: 'Algoritmo vs. Programa',
        description: 'O algoritmo é a solução metodológica; o programa é a representação compatível com a máquina.',
      },
      {
        title: 'Software e Hardware',
        description: 'Software abrange os programas e os algoritmos que representam; hardware é a máquina física.',
      },
    ],
    questions: [
      {
        id: 1,
        levelBadge: 'Compreensão Conceitual',
        topic: 'Conceito e raízes matemáticas do algoritmo',
        prompt:
          'Na Seção 0.1 de Brookshear, o autor esclarece que a origem dos algoritmos não coincide com o surgimento dos computadores. De acordo com o texto, qual é a caracterização precisa de um algoritmo e de sua história?',
        options: [
          {
            id: 'A',
            text: 'Trata-se de um conjunto ordenado de passos não ambíguos e executáveis que define uma atividade finita, cujo estudo já existia na Matemática muito antes do advento dos computadores.',
          },
          {
            id: 'B',
            text: 'Consiste em instruções elétricas codificadas para circuitos integrados, criadas a partir do momento em que as primeiras calculadoras mecânicas foram inventadas.',
          },
          {
            id: 'C',
            text: 'Trata-se de um processo arbitrário de tentativa e erro empregado para solucionar desafios cotidianos, desenvolvido durante a revolução industrial contemporânea.',
          },
          {
            id: 'D',
            text: 'Define-se como qualquer comando textual interpretável unicamente por processadores digitais dotados de arquitetura eletrônica binária moderna.',
          },
        ],
        correctAnswer: 'A',
        feedback: {
          correctPraise: 'Boa análise! Isso está rigorosamente de acordo com o conceito trabalhado nesta fase.',
          incorrectGuidance: 'Observe novamente a relação entre os conceitos de método matemático e máquina eletrônica.',
          explanation:
            'Brookshear demonstra que algoritmos são métodos organizados e finitos que independem de circuitos. O estudo de algoritmos era um ramo clássico da Matemática muito antes do primeiro computador existir.',
          bookConcept: 'Brookshear, Seção 0.1, p. 18-19 (PDF: p. 20-21)',
        },
      },
      {
        id: 2,
        levelBadge: 'Comparação Rigorosa',
        topic: 'Distinção entre algoritmo e programa',
        prompt:
          'Brookshear alerta que "algoritmo" e "programa" não são termos sinônimos. Qual é a relação conceitual exata estabelecida pelo autor entre esses dois elementos?',
        options: [
          {
            id: 'A',
            text: 'Algoritmo e programa são expressões idênticas na Ciência da Computação, alterando-se apenas conforme o idioma humano em que foram registradas.',
          },
          {
            id: 'B',
            text: 'O programa é a representação de um algoritmo formatada de maneira compatível com a máquina, permitindo que ela seja capaz de executá-lo.',
          },
          {
            id: 'C',
            text: 'O algoritmo representa a máquina física construída em laboratório, enquanto o programa é a teoria filosófica geral sobre os dados.',
          },
          {
            id: 'D',
            text: 'O programa é o rascunho inicial do pensamento, enquanto o algoritmo é a versão final que só adquire validade após ser impressa em papel.',
          },
        ],
        correctAnswer: 'B',
        feedback: {
          correctPraise: 'Você identificou com precisão a relação de representação entre algoritmo e programa.',
          incorrectGuidance: 'Pense no que a máquina necessita para conseguir executar um método concebido por humanos.',
          explanation:
            'Para que uma máquina execute um procedimento, o algoritmo precisa ser expresso em uma forma compatível com a sua estrutura. A essa representação formal damos o nome de programa.',
          bookConcept: 'Representação compatível com a máquina = Programa (Brookshear, p. 19)',
        },
      },
      {
        id: 3,
        levelBadge: 'Comparação Estrutural',
        topic: 'Conceituação de Software e Hardware',
        prompt:
          'Apoiando-se estritamente na terminologia apresentada por Brookshear na Seção 0.1, como se diferenciam os conceitos de "software" e "hardware"?',
        options: [
          {
            id: 'A',
            text: 'Hardware compreende os manuais de instrução impressos pelo fabricante, enquanto software reúne os dispositivos mecânicos de rotação interna.',
          },
          {
            id: 'B',
            text: 'Software e hardware são termos equivalentes utilizados para denominar os diferentes modelos físicos de equipamentos existentes no mercado.',
          },
          {
            id: 'C',
            text: 'Software refere-se aos programas e aos algoritmos que esses programas representam, ao passo que hardware corresponde à própria máquina física.',
          },
          {
            id: 'D',
            text: 'Hardware engloba as formulações matemáticas do problema, enquanto software corresponde exclusivamente às conexões elétricas e cabos do aparelho.',
          },
        ],
        correctAnswer: 'C',
        feedback: {
          correctPraise: 'Exata apreensão da terminologia de Brookshear!',
          incorrectGuidance: 'Releia as alternativas atentando para o que é lógico/representacional e o que é o aparato físico.',
          explanation:
            'O autor sintetiza: os programas e os algoritmos que eles corporificam são coletivamente denominados software, em contraste direto com o equipamento físico, denominado hardware.',
          bookConcept: 'Software (programas + algoritmos) ↔ Hardware (máquina física)',
        },
      },
      {
        id: 4,
        levelBadge: 'Aplicação a Situação-Problema',
        topic: 'A equipe e o estado do projeto',
        prompt:
          'Durante uma aula de laboratório, uma equipe de estudantes delimita um problema de ordenação e cria no papel uma sequência finita, ordenada e precisa de passos que soluciona o desafio com perfeição. Contudo, o grupo ainda não escreveu código para computador.\n\nÀ luz da Seção 0.1, o que a equipe possui neste momento?',
        options: [
          {
            id: 'A',
            text: 'Possui um algoritmo formulado que já resolve conceitualmente o problema, restando agora representá-lo como um programa compatível com a máquina.',
          },
          {
            id: 'B',
            text: 'Ainda não possui nada de válido, pois métodos lógicos só passam a ser algoritmos quando são executados na tela de um computador.',
          },
          {
            id: 'C',
            text: 'Já possui um programa executável, uma vez que o raciocínio humano no papel e a codificação para a máquina são rigorosamente iguais.',
          },
          {
            id: 'D',
            text: 'Construiu um equipamento de hardware, pois o suporte de papel com passos escritos opera mecanicamente como a máquina.',
          },
        ],
        correctAnswer: 'A',
        feedback: {
          correctPraise: 'Excelente diagnóstico pedagógico da situação-problema!',
          incorrectGuidance: 'Analise o que já foi produzido (a solução metódica) versus o que ainda falta (a representação para a máquina).',
          explanation:
            'Encontrar um algoritmo equivale a encontrar como resolver o problema. A equipe já possui o algoritmo; para que um computador o execute, o passo subsequente será codificá-lo como programa.',
          bookConcept: 'Construção da Solução = Algoritmo; Codificação para a Máquina = Programa',
        },
      },
      {
        id: 5,
        levelBadge: 'Análise de Relações',
        topic: 'Problema, Solução e Algoritmo',
        prompt:
          'Como Brookshear relaciona a atividade de "descobrir um algoritmo" com o processo geral de "solucionar um problema"?',
        options: [
          {
            id: 'A',
            text: 'Descobrir um algoritmo para realizar determinada tarefa equivale diretamente a descobrir como solucionar aquele problema.',
          },
          {
            id: 'B',
            text: 'Descobrir um algoritmo é uma etapa meramente cosmética que ocorre somente depois que a máquina já solucionou o problema autonomamente.',
          },
          {
            id: 'C',
            text: 'O algoritmo dispensa a existência de um problema prévio, consistindo em regras aleatórias executadas para ocupar o processador.',
          },
          {
            id: 'D',
            text: 'A resolução de um problema pertence à Filosofia, não tendo qualquer conexão estruturante com a criação de algoritmos na computação.',
          },
        ],
        correctAnswer: 'A',
        feedback: {
          correctPraise: 'Isso está em perfeita sintonia com a reflexão epistemológica de Brookshear.',
          incorrectGuidance: 'Considere a relação direta entre construir o método passo a passo e superar o desafio proposto.',
          explanation:
            'No texto de Brookshear, conceber um algoritmo é a própria essência da resolução de problemas: significa organizar e codificar o raciocínio necessário para cumprir a tarefa.',
          bookConcept: 'Descobrir um algoritmo = Descobrir como resolver o problema',
        },
      },
    ],
    synthesis: {
      title: 'Síntese da Fase 1 — O Trajeto da Solução à Máquina',
      flow: [
        { label: 'PROBLEMA', description: 'Desafio ou tarefa a ser realizada', tag: 'Ponto de Partida' },
        { label: 'SOLUÇÃO', description: 'Busca e formulação lógica do método', tag: 'Raciocínio' },
        { label: 'ALGORITMO', description: 'Conjunto organizado de passos ordenados e executáveis', tag: 'Método Abstrato' },
        { label: 'REPRESENTAÇÃO COMPATÍVEL', description: 'Tradução para um formato compreensível pelo dispositivo', tag: 'Codificação' },
        { label: 'PROGRAMA', description: 'A representação formal apta à execução pela máquina', tag: 'Artefato' },
      ],
      comparisons: {
        itemA: {
          title: 'SOFTWARE',
          points: [
            'Programas de computador',
            'Os algoritmos que os programas representam',
            'Dimensão lógica e metodológica',
          ],
        },
        itemB: {
          title: 'HARDWARE',
          points: [
            'A própria máquina física concreta',
            'Circuitos, mecanismos e dispositivos',
            'Suporte material da execução',
          ],
        },
      },
      finalQuote:
        '“Um algoritmo é a solução metodológica para um problema; um programa é a representação desse algoritmo compatível com a máquina.”',
    },
  },

  // ==========================================
  // FASE 2: INSTRUÇÕES, EXECUÇÃO E AMBIGUIDADE
  // ==========================================
  {
    phaseNumber: 2,
    id: 'fase-2',
    title: 'Fase 2 – Instruções e execução',
    subtitle: 'Quando uma solução precisa ser compreendida por quem vai executá-la',
    themeColor: 'cyan',
    iconName: 'Terminal',
    openingDescription:
      'Uma solução genial é inútil se não puder ser comunicada com precisão. Descubra a diferença crucial entre conceber uma solução e simplesmente seguir instruções, e entenda por que a ausência de ambiguidade é a regra de ouro da computação.',
    openingPillars: [
      {
        title: 'Criar vs. Executar',
        description: 'Construir o algoritmo requer raciocínio; executá-lo requer apenas seguir fielmente os passos prescritos.',
      },
      {
        title: 'Execução Mecânica',
        description: 'O executor (humano ou máquina) não precisa dominar a teoria matemática que gerou a solução para cumpri-la.',
      },
      {
        title: 'Codificação do Raciocínio',
        description: 'O algoritmo congela e estrutura o raciocínio para que outros agentes possam reproduzir o resultado.',
      },
      {
        title: 'Ausência de Ambiguidade',
        description: 'Cada instrução deve ter sentido único e determinado, sem margem para interpretações subjetivas divergentes.',
      },
    ],
    questions: [
      {
        id: 1,
        levelBadge: 'Interpretação de Papéis',
        topic: 'Execução vs. Domínio dos princípios da criação',
        prompt:
          'Um assistente de laboratório recebe um procedimento prescrito passo a passo para calcular a raiz quadrada por aproximações sucessivas. Ele não compreende a teoria matemática por trás da fórmula, mas obtém o valor correto apenas cumprindo a sequência de etapas.\n\nSegundo a Seção 0.1 de Brookshear, essa situação comprova que:',
        options: [
          {
            id: 'A',
            text: 'O procedimento não é um algoritmo, já que todo algoritmo exige que o executor tome decisões subjetivas e intuitivas a cada rodada.',
          },
          {
            id: 'B',
            text: 'Uma vez estabelecido o algoritmo, sua execução decorre do mero seguimento das instruções, sem que o executor precise dominar os princípios de sua criação.',
          },
          {
            id: 'C',
            text: 'O assistente necessariamente compreendeu toda a teoria matemática, pois é impossível seguir passos de cálculo sem saber demonstrá-los.',
          },
          {
            id: 'D',
            text: 'A execução de algoritmos só pode ser feita por circuitos de silício, sendo vedado a qualquer ser humano atuar como executor de passos.',
          },
        ],
        correctAnswer: 'B',
        feedback: {
          correctPraise: 'Você captou com exatidão o princípio da execução algorítmica!',
          incorrectGuidance: 'Observe o contraste que Brookshear faz entre "descobrir a solução" e "seguir instruções estabelecidas".',
          explanation:
            'Depois que o algoritmo está formulado, a tarefa resume-se a seguir as instruções. O executor não necessita compreender a base teórica da solução para atingir o resultado esperado.',
          bookConcept: 'Execução = seguimento de instruções estabelecidas (Brookshear, p. 19)',
        },
      },
      {
        id: 2,
        levelBadge: 'Compreensão Pedagógica',
        topic: 'Por que computadores podem executar algoritmos complexos?',
        prompt:
          'Se computadores não possuem consciência ou compreensão intuitiva da realidade, como conseguem resolver problemas científicos altamente complexos?',
        options: [
          {
            id: 'A',
            text: 'Porque eles deduzem teorias matemáticas do nada através de sentimentos e reflexões abstratas sobre a natureza.',
          },
          {
            id: 'B',
            text: 'Porque eles apenas seguem mecanicamente instruções não ambíguas de algoritmos cujo raciocínio foi codificado previamente por seres humanos.',
          },
          {
            id: 'C',
            text: 'Porque todo computador é dotado de hardware biológico que aprende por intuição imediata sem auxílio de programas.',
          },
          {
            id: 'D',
            text: 'Porque a execução de programas não obedece a regras, dependendo do acaso para encontrar respostas corretas.',
          },
        ],
        correctAnswer: 'B',
        feedback: {
          correctPraise: 'Isso sintetiza perfeitamente a relação entre raciocínio humano e capacidade executora das máquinas.',
          incorrectGuidance: 'Pense no papel do algoritmo como o "veículo" do raciocínio prévio do criador.',
          explanation:
            'A máquina não precisa de inteligência própria para executar a solução: ela é uma executora mecânica das instruções que codificam o raciocínio concebido pelo autor do algoritmo.',
          bookConcept: 'O algoritmo codifica o raciocínio para execução mecânica',
        },
      },
      {
        id: 3,
        levelBadge: 'Análise de Ambiguidade',
        topic: 'Identificação de ambiguidade nas instruções',
        prompt:
          'Compare duas orientações para a pesagem de substâncias em um processo químico:\n• Instrução 1: "Acrescente um pouco do composto A até que a mistura aparente uma cor razoável."\n• Instrução 2: "Acrescente 15 gramas do composto A e aguarde 120 segundos sob agitação contínua."\n\nPor que a Instrução 2 atende aos requisitos de Brookshear para a representação de algoritmos e a Instrução 1 não?',
        options: [
          {
            id: 'A',
            text: 'Porque a Instrução 2 apresenta passos precisos e sem ambiguidade, enquanto a Instrução 1 contém termos subjetivos que geram interpretações conflitantes.',
          },
          {
            id: 'B',
            text: 'Porque a Instrução 2 utiliza termos em latim que a tornam misteriosa e acessível apenas a cientistas graduados.',
          },
          {
            id: 'C',
            text: 'Porque algoritmos nunca podem envolver tempo ou massa em suas descrições procedimentais.',
          },
          {
            id: 'D',
            text: 'Porque a Instrução 1 é um programa de computador compilado, enquanto a Instrução 2 é hardware puro.',
          },
        ],
        correctAnswer: 'A',
        feedback: {
          correctPraise: 'Excelente identificação! Ausência de ambiguidade é critério fundamental.',
          incorrectGuidance: 'Analise o que acontece quando duas pessoas diferentes leem "um pouco" ou "cor razoável".',
          explanation:
            'Brookshear destaca que as instruções devem ser compreensíveis e estritamente sem ambiguidade. Expressões vagas como "um pouco" impedem que uma máquina ou outro humano execute a tarefa com determinismo.',
          bookConcept: 'Instruções sem ambiguidade garantem determinismo e repetibilidade',
        },
      },
      {
        id: 4,
        levelBadge: 'Interpretação Histórica',
        topic: 'A necessidade que motivou as linguagens de programação',
        prompt:
          'No trecho final da Seção 0.1, o autor relaciona a necessidade de instruções claras e não ambíguas ao desenvolvimento de qual marco na computação?',
        options: [
          {
            id: 'A',
            text: 'Ao abandono completo de qualquer representação textual e retorno exclusivo ao cálculo mental humano.',
          },
          {
            id: 'B',
            text: 'Ao desenvolvimento das linguagens de programação, concebidas com sintaxe e semântica rigorosas para eliminar a ambiguidade da linguagem natural.',
          },
          {
            id: 'C',
            text: 'À eliminação de todos os algoritmos na ciência, substituídos por operações físicas manuais em ábacos.',
          },
          {
            id: 'D',
            text: 'Ao surgimento de robôs autônomos com sentimentos capazes de adivinhar ordens imprecisas.',
          },
        ],
        correctAnswer: 'B',
        feedback: {
          correctPraise: 'Você articulou perfeitamente o problema da linguagem natural com a gênese das linguagens de programação!',
          incorrectGuidance: 'Lembre-se do motivo pelo qual não programamos máquinas usando termos vagos da língua cotidiana.',
          explanation:
            'A linguagem humana natural é rica em metáforas e ambiguidades. Para comunicar algoritmos às máquinas sem equívocos, a computação desenvolveu linguagens formais de programação com regras explícitas.',
          bookConcept: 'Comunicação precisa com a máquina motivou linguagens formais (Brookshear, p. 19)',
        },
      },
      {
        id: 5,
        levelBadge: 'Aplicação e Julgamento',
        topic: 'Diferença entre construir a solução e seguir instruções',
        prompt:
          'Ao corrigir tarefas da disciplina, um professor nota que o Estudante X copiou a sequência de passos de um colega e executou o cálculo na calculadora obtendo o número final, mas não soube explicar por que aquele método funciona.\n\nCom base nas reflexões de Brookshear, qual análise pedagógica está correta?',
        options: [
          {
            id: 'A',
            text: 'O Estudante X construiu autonomamente a solução do problema, pois digitar números em uma calculadora exige criação de novos algoritmos.',
          },
          {
            id: 'B',
            text: 'O Estudante X apenas atuou como executor das instruções de uma solução pré-estabelecida, não tendo participado da descoberta do algoritmo.',
          },
          {
            id: 'C',
            text: 'O ato de seguir passos numéricos impede que o procedimento seja chamado de algoritmo.',
          },
          {
            id: 'D',
            text: 'Na Ciência da Computação, descobrir a solução e seguir ordens sem pensar são processos intelectualmente indistinguíveis.',
          },
        ],
        correctAnswer: 'B',
        feedback: {
          correctPraise: 'Perfeita distinção entre a criação da solução e a execução procedimental.',
          incorrectGuidance: 'Relembre a tese de que a execução de um algoritmo estabelecido não exige domínio da autoria.',
          explanation:
            'Brookshear ressalta a assimetria: criar o algoritmo exige solucionar o problema; executá-lo exige apenas cumprir instruções prescritas.',
          bookConcept: 'Criador do algoritmo ≠ Mero executor das instruções',
        },
      },
    ],
    synthesis: {
      title: 'Síntese da Fase 2 — Da Codificação do Raciocínio à Execução',
      flow: [
        { label: 'PROBLEMA', description: 'Situação real que demanda solução lógica', tag: 'Desafio' },
        { label: 'CONSTRUÇÃO DA SOLUÇÃO', description: 'Investigação e dedução dos princípios matemáticos/lógicos', tag: 'Criação' },
        { label: 'ALGORITMO', description: 'Codificação estruturada do raciocínio em etapas ordenadas', tag: 'Método' },
        { label: 'REPRESENTAÇÃO EM INSTRUÇÕES', description: 'Formulação clara, compreensível e estritamente sem ambiguidade', tag: 'Comunicação' },
        { label: 'EXECUÇÃO', description: 'Cumprimento objetivo das instruções (humano ou máquina autômata)', tag: 'Resultado' },
      ],
      comparisons: {
        itemA: {
          title: 'INSTRUÇÃO CLARA E DETERMINÍSTICA',
          points: [
            'Sem margem para dupla interpretação',
            'Passos mensuráveis e objetivos',
            'Mesmo resultado em qualquer execução',
          ],
        },
        itemB: {
          title: 'INSTRUÇÃO AMBÍGUA OU VAGA',
          points: [
            'Depende do humor ou intuição do operador',
            'Resultados conflitantes a cada tentativa',
            'Incompatível com agentes autômatos ou computadores',
          ],
        },
      },
      finalQuote:
        '“Para que um algoritmo possa ser comunicado a outros seres humanos ou a uma máquina, suas instruções precisam ser rigorosamente compreensíveis e sem ambiguidade.”',
    },
  },

  // ==========================================
  // FASE 3: DO ÁBACO À MECANIZAÇÃO DO CÁLCULO
  // ==========================================
  {
    phaseNumber: 3,
    id: 'fase-3',
    title: 'Fase 3 – Do ábaco às máquinas de calcular',
    subtitle: 'O que muda quando parte do cálculo passa para o mecanismo?',
    themeColor: 'cyan',
    iconName: 'Cpu',
    openingDescription:
      'Acompanhe o salto epistemológico da história dos dispositivos de cálculo: do ábaco — onde todo o algoritmo está na cabeça e nas mãos do operador — até as engenhosas máquinas mecânicas de Pascal e Leibniz, que transferiram as regras aritméticas para dentes de engrenagens.',
    openingPillars: [
      {
        title: 'O Ábaco e o Operador',
        description: 'O ábaco é uma ferramenta passiva de auxílio à memória; o procedimento e o cálculo residem integralmente no humano.',
      },
      {
        title: 'A Pascalina (Blaise Pascal)',
        description: 'Primeira máquina mecânica que realizava adições e subtrações com transporte decimal ("vai-um") automatizado por engrenagens.',
      },
      {
        title: 'A Máquina de Leibniz',
        description: 'Introdução do cilindro de passos graduados, automatizando multiplicações e divisões por rotação mecânica.',
      },
      {
        title: 'Mecanização ≠ Programabilidade',
        description: 'Automatizar uma operação aritmética rígida não permite que a máquina mude seu comportamento para outras tarefas.',
      },
    ],
    questions: [
      {
        id: 1,
        levelBadge: 'Compreensão Histórica',
        topic: 'O papel do operador humano no uso do ábaco',
        prompt:
          'Ao utilizar um ábaco para efetuar cálculos complexos na antiguidade ou na idade média, onde residia o algoritmo da operação?',
        options: [
          {
            id: 'A',
            text: 'O algoritmo residia inteiramente na mente do operador humano, que conhecia as regras e manipulava manualmente as contas do ábaco.',
          },
          {
            id: 'B',
            text: 'O algoritmo estava gravado em chips de memória soldados na base de madeira do ábaco.',
          },
          {
            id: 'C',
            text: 'O ábaco movimentava suas contas de forma automática por meio de vapor e magnetismo sem interferência humana.',
          },
          {
            id: 'D',
            text: 'Não havia algoritmo, pois qualquer movimento aleatório das pedras sempre resultava no valor correto por magia.',
          },
        ],
        correctAnswer: 'A',
        feedback: {
          correctPraise: 'Exato! O ábaco é uma ferramenta de auxílio à memória, não um autômato mecânico.',
          incorrectGuidance: 'Pense em quem de fato executa as decisões de soma e transporte de contas no ábaco.',
          explanation:
            'No ábaco, o instrumento serve como registro e suporte para a contagem, mas cada passo do algoritmo (as regras da soma, o transporte mental das dezenas) é executado ativamente pelo operador humano.',
          bookConcept: 'Ábaco: ferramenta de suporte onde o algoritmo está com o operador humano',
        },
      },
      {
        id: 2,
        levelBadge: 'Análise de Inovação',
        topic: 'O que mudou com a Pascalina de Blaise Pascal (século XVII)?',
        prompt:
          'O que representou a invenção da Pascalina por Blaise Pascal em relação às ferramentas manuais anteriores como o ábaco?',
        options: [
          {
            id: 'A',
            text: 'Ela permitiu conectar o cálculo à internet e armazenar imagens digitais em alta definição.',
          },
          {
            id: 'B',
            text: 'Ela transferiu parte do cálculo — notadamente o transporte decimal ("vai-um") na adição — para o movimento físico de engrenagens mecânicas.',
          },
          {
            id: 'C',
            text: 'Ela substituiu todas as operações matemáticas por comandos verbais falados pelo usuário.',
          },
          {
            id: 'D',
            text: 'Ela não alterou nada, sendo apenas um ábaco pintado de cor diferente com as mesmas peças soltas.',
          },
        ],
        correctAnswer: 'B',
        feedback: {
          correctPraise: 'Excelente precisão histórica sobre o salto mecânico de Pascal!',
          incorrectGuidance: 'Considere o que acontecia quando uma roda completava dez rotações na máquina de Pascal.',
          explanation:
            'A Pascalina foi um marco porque automatizou fisicamente o mecanismo de transporte numérico: quando uma engrenagem completava uma volta inteira (10 unidades), uma catraca avançava automaticamente a roda vizinha das dezenas.',
          bookConcept: 'Mecanização do cálculo: o mecanismo assume operações aritméticas específicas',
        },
      },
      {
        id: 3,
        levelBadge: 'Comparação Evolutiva',
        topic: 'A contribuição mecânica de Gottfried Wilhelm Leibniz',
        prompt:
          'Ao aperfeiçoar os conceitos mecânicos de Pascal, qual foi o principal avanço incorporado por Gottfried Wilhelm Leibniz em sua calculadora mecânica (Stepped Reckoner)?',
        options: [
          {
            id: 'A',
            text: 'A substituição de engrenagens mecânicas por válvulas termiônicas eletrônicas modernas.',
          },
          {
            id: 'B',
            text: 'A invenção do cilindro de passos (roda de Leibniz), que permitiu mecanizar não apenas adições, mas também multiplicações e divisões por rotações sucessivas.',
          },
          {
            id: 'C',
            text: 'A criação de um teclado virtual touchscreen para digitação de matrizes tridimensionais.',
          },
          {
            id: 'D',
            text: 'A eliminação completa de qualquer peça móvel, passando a funcionar exclusivamente por reflexão solar.',
          },
        ],
        correctAnswer: 'B',
        feedback: {
          correctPraise: 'Você apontou com exatidão a inovação do cilindro escalonado de Leibniz!',
          incorrectGuidance: 'Lembre-se da operação que Pascal não conseguia realizar diretamente e que Leibniz conseguiu mecanizar.',
          explanation:
            'Leibniz desenvolveu o tambor cilíndrico de passos com dentes de comprimentos variados, tornando viável a realização de multiplicações e divisões mecânicas através de repetições engrenadas.',
          bookConcept: 'Máquina de Leibniz: expansão mecânica para multiplicação e divisão',
        },
      },
      {
        id: 4,
        levelBadge: 'Diferenciação Epistemológica',
        topic: 'Auxílio ao cálculo versus Cálculo mecanizado',
        prompt:
          'Qual é a diferença epistemológica fundamental entre usar uma ferramenta de auxílio ao cálculo (como o ábaco) e utilizar uma máquina mecânica (como a Pascalina ou Leibniz)?',
        options: [
          {
            id: 'A',
            text: 'No auxílio ao cálculo, o mecanismo decide as operações; na máquina mecânica, o operador faz tudo mentalmente.',
          },
          {
            id: 'B',
            text: 'No auxílio ao cálculo, o operador executa as regras do procedimento; na máquina mecânica, a própria estrutura física de engrenagens realiza a operação ao ser acionada.',
          },
          {
            id: 'C',
            text: 'Nenhuma, pois toda ferramenta de cálculo inventada na história é rigorosamente um computador digital.',
          },
          {
            id: 'D',
            text: 'O ábaco necessitava de combustível fóssil para funcionar, enquanto a Pascalina operava apenas com baterias de lítio.',
          },
        ],
        correctAnswer: 'B',
        feedback: {
          correctPraise: 'Perfeita síntese da passagem da ação humana para a ação do maquinário!',
          incorrectGuidance: 'Pense em quem carrega a responsabilidade física de fazer a conta acontecer.',
          explanation:
            'A grande transição histórica reside em embutir a lógica da operação aritmética na própria matéria física: a máquina mecânica "sabe somar" porque seus dentes e catracas foram forjados para obedecer às leis da aritmética.',
          bookConcept: 'Transição da execução humana para o mecanismo físico',
        },
      },
      {
        id: 5,
        levelBadge: 'Análise de Fronteiras',
        topic: 'Por que automatizar uma operação não é o mesmo que programar uma máquina?',
        prompt:
          'Embora as máquinas de Pascal e Leibniz fossem mecanismos automatizados admiráveis, historiadores e cientistas da computação concordam que elas NÃO eram computadores ou máquinas programáveis. Por quê?',
        options: [
          {
            id: 'A',
            text: 'Porque suas operações estavam rigidamente fixadas na montagem mecânica: girar a manivela só fazia aquela operação matemática pré-definida, sem capacidade de seguir instruções variáveis externas.',
          },
          {
            id: 'B',
            text: 'Porque elas eram pequenas demais para serem chamadas de computadores segundo as leis da física.',
          },
          {
            id: 'C',
            text: 'Porque Pascal e Leibniz não eram cientistas reconhecidos em sua época.',
          },
          {
            id: 'D',
            text: 'Porque elas só podiam calcular se fossem conectadas a geradores elétricos de alta voltagem.',
          },
        ],
        correctAnswer: 'A',
        feedback: {
          correctPraise: 'Você atingiu o ponto central da aula: automatização rígida não é programabilidade!',
          incorrectGuidance: 'Pense no que aconteceria se você quisesse que a Pascalina analisasse um texto ou tocasse uma partitura.',
          explanation:
            'A Pascalina só sabe somar; a máquina de Leibniz só sabe operar as 4 contas aritméticas. Nenhuma delas aceitava uma sequência externa de comandos variáveis para alterar seu propósito. Eram calculadoras de função fixa, não máquinas programáveis.',
          bookConcept: 'Automatizar uma operação rígida ≠ Programar uma máquina para propósitos diversos',
        },
      },
    ],
    synthesis: {
      title: 'Síntese da Fase 3 — Da Mente Humana ao Mecanismo de Engrenagens',
      flow: [
        { label: 'ÁBACO', description: 'Registro estático de posições numéricas', tag: 'Ferramenta' },
        { label: 'OPERADOR HUMANO', description: 'Conhece as regras e executa o algoritmo passo a passo', tag: 'Agente Ativo' },
        { label: 'PASCALINA (1642)', description: 'Transporte decimal mecânico automatizado por engrenagens', tag: 'Mecanização da Soma' },
        { label: 'LEIBNIZ (1671)', description: 'Cilindro de passos para multiplicação e divisão automáticas', tag: 'Mecanização das 4 Operações' },
        { label: 'MÁQUINA DE PROPÓSITO FIXO', description: 'Mecanismos rígidos: executam operações pré-fabricadas, mas não aceitam programas', tag: 'Limite Histórico' },
      ],
      comparisons: {
        itemA: {
          title: 'ÁBACO (AUXÍLIO AO CÁLCULO)',
          points: [
            'Auxilia a memória do operador',
            'O procedimento está no humano',
            'Movimento manual dependente das regras conhecidas pelo usuário',
          ],
        },
        itemB: {
          title: 'PASCAL / LEIBNIZ (MECANIZAÇÃO)',
          points: [
            'O mecanismo físico executa a operação aritmética',
            'Transfere parte do cálculo para as engrenagens',
            'Opera rigidamente; NÃO possui programabilidade',
          ],
        },
      },
      finalQuote:
        '“Automatizar uma operação rígida em dentes de engrenagem não é o mesmo que programar uma máquina para executar procedimentos diversos.”',
    },
  },

  // ==========================================
  // FASE 4: BABBAGE, ADA, JACQUARD E A MÁQUINA PROGRAMÁVEL
  // ==========================================
  {
    phaseNumber: 4,
    id: 'fase-4',
    title: 'Fase 4 – Da máquina de calcular à máquina programável',
    subtitle: 'Quando a instrução passa a organizar o que a máquina faz',
    themeColor: 'cyan',
    iconName: 'Sparkles',
    openingDescription:
      'Descubra a virada conceitual que deu origem à computação moderna: a fusão entre o tear de cartões perfurados de Jacquard, o projeto da Máquina Analítica de Charles Babbage e a genialidade de Ada Lovelace — quando a instrução externa passou a governar o comportamento da máquina.',
    openingPillars: [
      {
        title: 'O Tear de Jacquard',
        description: 'Cartões perfurados controlavam os fios: ao trocar a fita de cartões, o mesmo tear tecia um desenho completamente diferente.',
      },
      {
        title: 'A Máquina Analítica de Babbage',
        description: 'Arquitetura com separação entre moinho (processamento), armazém (memória) e leitor de cartões de instrução.',
      },
      {
        title: 'Ada Lovelace e o Primeiro Algoritmo',
        description: 'Percebeu que a máquina podia manipular qualquer símbolo com regras formais, escrevendo o primeiro programa da história.',
      },
      {
        title: 'O Princípio da Programabilidade',
        description: 'Mudar as instruções fornecidas altera o comportamento da máquina sem que seja necessário desmontar seu hardware.',
      },
    ],
    questions: [
      {
        id: 1,
        levelBadge: 'Interconexão Histórica',
        topic: 'A inspiração do Tear de Jacquard para a computação',
        prompt:
          'No início do século XIX, Joseph Marie Jacquard revolucionou a tecelagem com um tear automatizado. Por que essa invenção têxtil é considerada um marco fundamental na pré-história da computação?',
        options: [
          {
            id: 'A',
            text: 'Porque o tear era feito de microprocessadores de silício semelhantes aos celulares contemporâneos.',
          },
          {
            id: 'B',
            text: 'Porque utilizava cartões perfurados com instruções codificadas: para mudar o padrão do tecido, bastava trocar os cartões, sem reconstruir o maquinário.',
          },
          {
            id: 'C',
            text: 'Porque Jacquard inventou a primeira linguagem de programação orientada a objetos do mundo.',
          },
          {
            id: 'D',
            text: 'Porque o tear produzia apenas uniformes escolares para os estudantes de computação.',
          },
        ],
        correctAnswer: 'B',
        feedback: {
          correctPraise: 'Excelente conexão! A separação entre instrução e maquinário nasceu aí.',
          incorrectGuidance: 'Observe o que acontecia quando o tecelão trocava os cartões perfurados na máquina de Jacquard.',
          explanation:
            'O tear de Jacquard demonstrou pela primeira vez que instruções codificadas em um meio externo (furos em cartões) podiam comandar sequências de ações de uma máquina física, permitindo alterar seu produto final sem alterar suas peças mecânicas.',
          bookConcept: 'Cartões perfurados: instruções externas determinando a ação da máquina',
        },
      },
      {
        id: 2,
        levelBadge: 'Arquitetura Conceitual',
        topic: 'A inovação da Máquina Analítica de Charles Babbage',
        prompt:
          'Diferente da sua máquina anterior (a Máquina de Diferenças), a Máquina Analítica projetada por Charles Babbage é celebrada como o primeiro desenho conceitual de um computador de uso geral. O que a tornava tão revolucionária?',
        options: [
          {
            id: 'A',
            text: 'Ela era capaz de navegar na internet via conexão sem fio alimentada por energia solar.',
          },
          {
            id: 'B',
            text: 'Ela separava a unidade de cálculo ("o moinho") da unidade de armazenamento ("o armazém") e lia instruções variáveis gravadas em cartões perfurados.',
          },
          {
            id: 'C',
            text: 'Ela realizava apenas somas simples de números inteiros positivos de 1 a 10 e nada mais.',
          },
          {
            id: 'D',
            text: 'Ela dispensava qualquer tipo de entrada de dados, adivinhando o que o usuário pretendia calcular.',
          },
        ],
        correctAnswer: 'B',
        feedback: {
          correctPraise: 'Você descreveu a própria essência da arquitetura dos computadores!',
          incorrectGuidance: 'Lembre-se dos termos usados por Babbage: o "moinho" e o "armazém", acionados por cartões.',
          explanation:
            'A Máquina Analítica de Babbage antecipou os componentes estruturais de um computador moderno: o moinho (processador), o armazém (memória) e o mecanismo de entrada e controle por cartões perfurados para orientar o fluxo de operações.',
          bookConcept: 'Máquina Analítica: separação entre processamento, memória e controle por instruções',
        },
      },
      {
        id: 3,
        levelBadge: 'Pioneirismo Epistemológico',
        topic: 'O papel e a visão pioneira de Ada Lovelace',
        prompt:
          'Ada Lovelace colaborou com Babbage e é reconhecida mundialmente como a primeira programadora da história. Qual foi a sua percepção revolucionária sobre a Máquina Analítica que foi além da visão do próprio Babbage?',
        options: [
          {
            id: 'A',
            text: 'Ela acreditava que a máquina só servia para imprimir etiquetas de preço em lojas de departamento.',
          },
          {
            id: 'B',
            text: 'Ela percebeu que a máquina não manipulava apenas números, mas qualquer entidade governada por regras formais (como notas musicais), e escreveu um algoritmo completo para calcular os números de Bernoulli.',
          },
          {
            id: 'C',
            text: 'Ela propôs que a máquina fosse destruída para impedir o desenvolvimento da tecnologia na Inglaterra.',
          },
          {
            id: 'D',
            text: 'Ela considerava que as máquinas de calcular de Pascal eram infinitamente superiores e que a Máquina Analítica deveria ser abandonada.',
          },
        ],
        correctAnswer: 'B',
        feedback: {
          correctPraise: 'Sensacional! Ada Lovelace vislumbrou a computação simbólica e universal.',
          incorrectGuidance: 'Pense no salto que ela deu ao enxergar além dos meros cálculos matemáticos rígidos.',
          explanation:
            'Ada compreendeu que a máquina era um manipulador de símbolos sob regras formais. Ao detalhar o algoritmo para o cálculo dos números de Bernoulli, ela criou a primeira documentação formal de um programa concebido para uma máquina de propósito geral.',
          bookConcept: 'Ada Lovelace: manipulação simbólica universal e o primeiro algoritmo para máquina',
        },
      },
      {
        id: 4,
        levelBadge: 'Conceituação Central',
        topic: 'O que define a "Programabilidade"?',
        prompt:
          'Considerando toda a evolução estudada, como se define a ideia de "Programabilidade" que distingue a Máquina Analítica das calculadoras mecânicas anteriores de Pascal e Leibniz?',
        options: [
          {
            id: 'A',
            text: 'A capacidade de uma máquina operar indefinidamente sem necessidade de qualquer operador ou energia.',
          },
          {
            id: 'B',
            text: 'A capacidade de uma mesma máquina física desempenhar diferentes tarefas e procedimentos bastando alterar o conjunto de instruções externas fornecido a ela.',
          },
          {
            id: 'C',
            text: 'A velocidade com que os dentes de engrenagem de latão conseguem girar em um segundo.',
          },
          {
            id: 'D',
            text: 'A propriedade de um dispositivo não possuir peças móveis nem comandos de entrada.',
          },
        ],
        correctAnswer: 'B',
        feedback: {
          correctPraise: 'Você formulou com precisão cirúrgica a definição de programabilidade!',
          incorrectGuidance: 'Pense no que significa "mudar as instruções para mudar o comportamento da máquina".',
          explanation:
            'Programabilidade é a versatilidade de um mesmo hardware responder a infinitos procedimentos algorítmicos. O hardware torna-se um executor de instruções externas variáveis.',
          bookConcept: 'Programabilidade: mesmo hardware, infinitos procedimentos guiados por instruções',
        },
      },
      {
        id: 5,
        levelBadge: 'Síntese Avaliativa',
        topic: 'Mudar as instruções pode mudar o comportamento da máquina',
        prompt:
          'Ao final da aula, a professora indaga: "Por que podemos afirmar que nem toda máquina que automatiza um cálculo é um computador programável?"\n\nQual resposta sintetiza com exatidão o percurso pedagógico percorrido?',
        options: [
          {
            id: 'A',
            text: 'Porque máquinas mecânicas como a Pascalina realizam operações fixas inscritas em seu próprio maquinário, enquanto um computador programável orienta seu comportamento por instruções flexíveis que podem ser modificadas.',
          },
          {
            id: 'B',
            text: 'Porque apenas máquinas construídas após o ano 2000 têm o direito legal de serem chamadas de computadores.',
          },
          {
            id: 'C',
            text: 'Porque máquinas de engrenagem eram feitas de metal e os computadores verdadeiros só podem ser feitos de plástico e vidro.',
          },
          {
            id: 'D',
            text: 'Porque calcular é uma ação proibida aos computadores, que devem realizar exclusivamente conversas sociais.',
          },
        ],
        correctAnswer: 'A',
        feedback: {
          correctPraise: 'Fechamento perfeito! Isso consolida a tese mestra de toda a unidade pedagógica.',
          incorrectGuidance: 'Compare uma calculadora de engrenagens fixas com um computador que aceita novos programas.',
          explanation:
            'Automatizar é embutir uma operação repetitiva; programar é fornecer um repertório de instruções que comanda e remodela a sequência de ações da máquina conforme o algoritmo desejado.',
          bookConcept: 'Automatização rígida vs. Programabilidade flexível',
        },
      },
    ],
    synthesis: {
      title: 'Síntese da Fase 4 — O Nascimento da Máquina Programável',
      flow: [
        { label: 'ÁBACO', description: 'O operador humano executa o procedimento inteiro', tag: 'Humano' },
        { label: 'PASCAL / LEIBNIZ', description: 'O mecanismo executa operações aritméticas fixas e rígidas', tag: 'Mecanização' },
        { label: 'JACQUARD', description: 'Cartões perfurados orientam o padrão do tear: instruções externas', tag: 'Controle Externo' },
        { label: 'BABBAGE & ADA', description: 'A Máquina Analítica: moinho, memória e cartões para múltiplos algoritmos', tag: 'Computador Conceitual' },
        { label: 'PROGRAMABILIDADE', description: 'Mudar as instruções altera o comportamento da máquina sem trocar o hardware', tag: 'Revolução' },
      ],
      comparisons: {
        itemA: {
          title: 'MÁQUINA DE CALCULAR (PROPÓSITO FIXO)',
          points: [
            'Pascalina e Calculadora de Leibniz',
            'Engrenagens forjadas para operações fixas',
            'Para mudar a função, seria necessário reconstruir a máquina',
          ],
        },
        itemB: {
          title: 'MÁQUINA PROGRAMÁVEL (PROPÓSITO GERAL)',
          points: [
            'Máquina Analítica de Babbage e visão de Ada',
            'Hardware flexível guiado por instruções externas',
            'Basta mudar o programa (cartões/código) para executar novas tarefas',
          ],
        },
      },
      finalQuote:
        '“Mudar as instruções pode mudar o comportamento da máquina. Essa é a essência da programabilidade.”',
    },
  },
];

export const MASTER_SYNTHESIS_DATA = {
  title: 'Síntese Final — O Grande Percurso da Computação',
  subtitle: 'Das máquinas de calcular às máquinas programáveis',
  macroFlow: [
    { step: 1, name: 'PROBLEMA', desc: 'Necessidade real ou desafio matemático' },
    { step: 2, name: 'ALGORITMO', desc: 'Conjunto ordenado de passos não ambíguos e executáveis' },
    { step: 3, name: 'INSTRUÇÕES', desc: 'Representação clara para transmissão a agentes' },
    { step: 4, name: 'EXECUÇÃO', desc: 'Seguimento mecânico de passos que não exige recriação da teoria' },
    { step: 5, name: 'MECANIZAÇÃO DO CÁLCULO', desc: 'Transfere operações aritméticas para engrenagens mecânicas' },
    { step: 6, name: 'PROGRAMABILIDADE', desc: 'Instruções externas flexíveis orientam o comportamento da máquina' },
  ],
  historicalTimeline: [
    {
      era: 'Antiguidade / Idade Média',
      subject: 'Ábaco',
      status: 'Ferramenta de Auxílio',
      insight: 'O procedimento e o cálculo residem integralmente na mente e nas mãos do operador humano.',
      accent: 'border-slate-700 bg-slate-900/80',
    },
    {
      era: 'Século XVII (1642 - 1671)',
      subject: 'Pascal / Leibniz',
      status: 'Mecanização do Cálculo',
      insight: 'Engrenagens mecânicas realizam operações aritméticas automáticas, mas com função fixa e rígida.',
      accent: 'border-cyan-800/80 bg-cyan-950/40',
    },
    {
      era: 'Século XIX (1804 - 1843)',
      subject: 'Jacquard / Babbage / Ada',
      status: 'Máquina Programável',
      insight: 'Separação entre mecanismo físico e instruções externas (cartões). O mesmo hardware executa infinitos algoritmos.',
      accent: 'border-orange-500/60 bg-orange-950/30',
    },
  ],
  coreAxioms: [
    'Nem toda máquina que calcula é um computador.',
    'Nem toda máquina que automatiza uma operação é programável.',
    'Programar implica representar instruções capazes de orientar o comportamento da máquina.',
  ],
  finalDebateQuestion: 'O que realmente mudou quando as máquinas passaram a seguir instruções?',
};
