export interface Question {
  id: number;
  level: 'compreensao' | 'comparacao' | 'interpretacao' | 'aplicacao' | 'analise';
  levelLabel: string;
  difficultyBadge: string;
  topic: string;
  prompt: string;
  contextScenario?: string;
  options: {
    id: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: {
    coreReason: string;
    bookExcerpt: string;
    pageRef: string;
    optionAnalysis: Record<'A' | 'B' | 'C' | 'D', string>;
  };
  groupDiscussionTip: string;
}

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    level: 'compreensao',
    levelLabel: 'Nível 1 · Compreensão',
    difficultyBadge: 'Conceito & Origem',
    topic: 'Conceito de algoritmo e raízes matemáticas',
    prompt:
      'Ao introduzir o estudo de algoritmos na Seção 0.1, J. Glenn Brookshear ressalta que o conceito de algoritmo não teve origem com o surgimento dos computadores. De acordo com o texto, qual é a caracterização fundamental de um algoritmo e sua relação histórica?',
    options: [
      {
        id: 'A',
        text: 'Trata-se de um conjunto ordenado de passos não ambíguos e executáveis que define uma atividade finita, cujo estudo já existia na Matemática muito antes do advento dos computadores.',
      },
      {
        id: 'B',
        text: 'Trata-se da escrita de instruções codificadas diretamente para circuitos eletrônicos, desenvolvida a partir do momento em que as primeiras máquinas de calcular foram construídas.',
      },
      {
        id: 'C',
        text: 'Consiste em qualquer método empírico de tentativa e erro empregado para solucionar desafios lógicos, concebido durante o surgimento da informática no século XX.',
      },
      {
        id: 'D',
        text: 'Trata-se de um mecanismo de automação restrito a processos industriais mecânicos, que apenas recentemente passou a incorporar o raciocínio matemático formal.',
      },
    ],
    correctAnswer: 'A',
    explanation: {
      coreReason:
        'Brookshear enfatiza que o estudo de algoritmos é anterior aos computadores e era um campo consolidado da Matemática. Ele define algoritmo como um conjunto de passos que descreve a execução de uma tarefa, detalhando na nota de rodapé que são passos ordenados, não ambíguos e executáveis associados a uma atividade finita.',
      bookExcerpt:
        '“O estudo de algoritmos já era uma área da Matemática muito antes de o primeiro computador eletrônico ter sido construído. [...] um algoritmo é um conjunto de passos que define como uma tarefa é executada.” (Nota: passos ordenados, não ambíguos e executáveis, associados a uma atividade finita).',
      pageRef: 'Brookshear, Cap. 0, Seção 0.1, p. 18-19 (PDF: p. 20-21)',
      optionAnalysis: {
        A: 'Correta. Sintetiza a definição conceitual precisa dada pelo autor (incluindo a nota de rodapé) e a constatação histórica de que os algoritmos precederam os computadores eletrônicos na Matemática.',
        B: 'Incorreta. O texto explicita justamente que algoritmos não nasceram com os computadores nem se restringem a circuitos eletrônicos.',
        C: 'Incorreta. Um algoritmo não é mera tentativa e erro aleatória, mas um conjunto ordenado, não ambíguo e executável de passos.',
        D: 'Incorreta. Algoritmos não são restritos a processos industriais nem foram concebidos apenas recentemente.',
      },
    },
    groupDiscussionTip:
      'Conversem sobre exemplos do dia a dia citados no texto (receitas, partituras musicais, truques de mágica) que comprovam que algoritmos independem de computadores.',
  },
  {
    id: 2,
    level: 'comparacao',
    levelLabel: 'Nível 2 · Compreensão & Comparação',
    difficultyBadge: 'Algoritmo × Programa',
    topic: 'Distinção entre o algoritmo e sua representação',
    prompt:
      'Na Seção 0.1, Brookshear estabelece uma distinção rigorosa entre os termos "algoritmo" e "programa". De acordo com a relação conceitual estabelecida pelo autor, o que diferencia um algoritmo de um programa?',
    options: [
      {
        id: 'A',
        text: 'O algoritmo e o programa são expressões sinônimas que se referem indiferentemente ao procedimento conceitual ou à sua execução em qualquer meio eletrônico.',
      },
      {
        id: 'B',
        text: 'O programa é a representação de um algoritmo formatada de maneira compatível com a máquina, permitindo que ela seja capaz de executá-lo.',
      },
      {
        id: 'C',
        text: 'O algoritmo consiste na máquina física em funcionamento, enquanto o programa é a teoria matemática abstrata que orienta o operador de computador.',
      },
      {
        id: 'D',
        text: 'O programa é a formulação verbal inicial de um problema, enquanto o algoritmo é a versão final convertida diretamente em circuitos integrados.',
      },
    ],
    correctAnswer: 'B',
    explanation: {
      coreReason:
        'Brookshear adverte que, para que uma máquina execute um procedimento, o algoritmo precisa ser traduzido em uma forma compatível com a máquina. Essa representação compatível com a máquina é denominada programa.',
      bookExcerpt:
        '“Para que uma máquina execute um procedimento, o algoritmo deve ser expresso em uma forma compatível com a máquina. Essa representação é denominada programa.”',
      pageRef: 'Brookshear, Cap. 0, Seção 0.1, p. 19 (PDF: p. 21)',
      optionAnalysis: {
        A: 'Incorreta. Algoritmo e programa não são sinônimos no texto de Brookshear; a distinção é intencional e central na obra.',
        B: 'Correta. O autor define expressamente programa como a representação do algoritmo em formato compatível com a máquina para viabilizar a sua execução.',
        C: 'Incorreta. A máquina física é denominada hardware, não algoritmo.',
        D: 'Incorreta. Inverte a ordem lógica: o algoritmo é o procedimento conceitual; o programa é a sua representação para a máquina.',
      },
    },
    groupDiscussionTip:
      'Pensem em uma analogia: uma partitura musical é o "programa" que representa a melodia pensada pelo compositor para ser executada pelos músicos?',
  },
  {
    id: 3,
    level: 'comparacao',
    levelLabel: 'Nível 3 · Comparação Conceitual',
    difficultyBadge: 'Software × Hardware',
    topic: 'Terminologia rigorosa do texto estudado',
    prompt:
      'Considerando estritamente as definições apresentadas por Brookshear na Seção 0.1, sem recorrer a classificações técnicas externas, como se diferenciam os conceitos de "software" e "hardware"?',
    options: [
      {
        id: 'A',
        text: 'Hardware refere-se aos componentes eletrônicos substituíveis, enquanto software abrange os manuais impressos e documentações de apoio do sistema.',
      },
      {
        id: 'B',
        text: 'Software e hardware são termos equivalentes que designam os diferentes tipos de equipamentos físicos empregados no processamento automático de dados.',
      },
      {
        id: 'C',
        text: 'Software refere-se aos programas e aos algoritmos que eles representam, ao passo que hardware corresponde à própria máquina física.',
      },
      {
        id: 'D',
        text: 'Hardware engloba todos os procedimentos abstratos de resolução de problemas, enquanto software refere-se exclusivamente aos circuitos físicos da máquina.',
      },
    ],
    correctAnswer: 'C',
    explanation: {
      coreReason:
        'Nas páginas 18 e 19, Brookshear define software e hardware de forma concisa e direta: os programas e os algoritmos que eles representam são conhecidos coletivamente como software; a própria máquina física é o hardware.',
      bookExcerpt:
        '“Os programas e os algoritmos que eles representam são coletivamente denominados software, em contraste com a própria máquina, que é denominada hardware.”',
      pageRef: 'Brookshear, Cap. 0, Seção 0.1, p. 19 (PDF: p. 21)',
      optionAnalysis: {
        A: 'Incorreta. A obra não define software como manuais impressos nem introduz divisão de componentes substituíveis na Seção 0.1.',
        B: 'Incorreta. Não são termos equivalentes; representam dimensões distintas (lógica/representacional vs. física).',
        C: 'Correta. Reproduz com fidelidade a terminologia exata da Seção 0.1 de Brookshear.',
        D: 'Incorreta. Houve uma inversão total entre os dois conceitos.',
      },
    },
    groupDiscussionTip:
      'Notem que, para Brookshear, o software inclui tanto o programa quanto o próprio algoritmo que o programa corporifica.',
  },
  {
    id: 4,
    level: 'interpretacao',
    levelLabel: 'Nível 4 · Interpretação & Situação-Problema',
    difficultyBadge: 'Execução de Algoritmo',
    topic: 'Seguimento de passos vs. compreensão dos princípios',
    prompt:
      'Um estudante recebe um procedimento passo a passo para calcular a raiz quadrada de números reais por aproximações sucessivas. Ele não compreende a dedução matemática por trás do método, mas consegue obter o resultado exato apenas seguindo rigorosamente a sequência de passos fornecida.\n\nCom base na Seção 0.1 de Brookshear, essa situação ilustra que:',
    options: [
      {
        id: 'A',
        text: 'A execução de um algoritmo exige que o executor domine plenamente todos os princípios lógicos e matemáticos empregados na sua criação original.',
      },
      {
        id: 'B',
        text: 'O procedimento em questão não pode ser considerado um algoritmo, pois algoritmos exigem julgamento subjetivo do operador a cada etapa.',
      },
      {
        id: 'C',
        text: 'Uma vez estabelecido o algoritmo, sua execução decorre do mero seguimento das instruções, sem necessidade de compreender os fundamentos que originaram a solução.',
      },
      {
        id: 'D',
        text: 'A capacidade de executar com sucesso as etapas de um método equivale a ter concebido autonomamente a sua solução lógica e matemática.',
      },
    ],
    correctAnswer: 'C',
    explanation: {
      coreReason:
        'Brookshear faz uma distinção fundamental: conceber a solução (construir o algoritmo) requer raciocínio e domínio do problema; contudo, uma vez que o algoritmo está pronto, sua execução pode ser realizada pelo simples cumprimento das instruções, dispensando o executor de entender os princípios que levaram à sua criação.',
      bookExcerpt:
        '“Depois que um algoritmo é estabelecido, a tarefa de executá-lo torna-se uma questão de seguir instruções, o que pode ser feito sem que se compreenda a base teórica da solução.”',
      pageRef: 'Brookshear, Cap. 0, Seção 0.1, p. 19 (PDF: p. 21)',
      optionAnalysis: {
        A: 'Incorreta. Contraria a constatação de Brookshear: o executor não precisa dominar a teoria original para seguir as instruções com sucesso.',
        B: 'Incorreta. Pelo contrário: algoritmos exigem passos objetivos e não ambíguos, não julgamentos subjetivos.',
        C: 'Correta. Retrata exatamente a diferença apontada pelo autor entre "descobrir/construir a solução" e "executar instruções estabelecidas".',
        D: 'Incorreta. Seguir instruções mecanicamente não significa que o executor foi o autor ou entendeu o raciocínio gerador.',
      },
    },
    groupDiscussionTip:
      'É exatamente essa propriedade de "seguir instruções sem dominar a teoria" que permite que computadores (máquinas sem inteligência) executem algoritmos tão complexos.',
  },
  {
    id: 5,
    level: 'aplicacao',
    levelLabel: 'Nível 5 · Aplicação & Situação-Problema',
    difficultyBadge: 'Resolução de Problemas',
    topic: 'Codificação do raciocínio e estado do projeto',
    prompt:
      'Durante um laboratório acadêmico, o Grupo 1 se dedica a encontrar uma sequência lógica e ordenada de passos para resolver um problema de ordenação de dados. Ao final da discussão, a equipe formulou e validou no papel o conjunto de passos da solução, mas ainda não escreveu nenhuma linha em linguagem compreensível por um computador.\n\nÀ luz da Seção 0.1 de Brookshear, qual é o estado atual do trabalho desenvolvido pelo grupo?',
    options: [
      {
        id: 'A',
        text: 'O grupo descobriu um algoritmo e solucionou o problema conceitualmente, restando agora representá-lo como um programa compatível com a máquina.',
      },
      {
        id: 'B',
        text: 'O grupo já desenvolveu um programa de computador completo, uma vez que o método mental e o código executável pela máquina são a mesma entidade.',
      },
      {
        id: 'C',
        text: 'O grupo construiu um novo hardware, pois a estrutura organizada de passos no papel já atua fisicamente como o dispositivo da máquina.',
      },
      {
        id: 'D',
        text: 'O grupo não produziu ainda nenhuma solução válida para o problema, pois um algoritmo só passa a existir quando é digitado em um computador.',
      },
    ],
    correctAnswer: 'A',
    explanation: {
      coreReason:
        'No texto de Brookshear, encontrar um algoritmo para resolver uma tarefa equivale a descobrir como solucionar o problema. Como a equipe já estruturou o conjunto de passos resolutivos no papel, ela possui o algoritmo. Para que a máquina possa executá-lo, o passo seguinte será criar sua representação compatível (o programa).',
      bookExcerpt:
        '“A descoberta de um algoritmo para resolver um problema equivale à descoberta de como solucionar o problema [...] depois que o algoritmo foi descoberto, resta a tarefa de expressá-lo de forma compatível com a máquina (programa).”',
      pageRef: 'Brookshear, Cap. 0, Seção 0.1, p. 19 (PDF: p. 21)',
      optionAnalysis: {
        A: 'Correta. Expressa com precisão: o algoritmo codifica o raciocínio e resolve o problema; o programa é a futura representação para a máquina.',
        B: 'Incorreta. Confunde algoritmo com programa. O programa ainda não foi feito, pois a solução ainda não foi codificada para a máquina.',
        C: 'Incorreta. Passos ordenados anotados no papel são representações conceituais, não dispositivos físicos de hardware.',
        D: 'Incorreta. Um algoritmo existe plenamente antes e independentemente de qualquer computador digital.',
      },
    },
    groupDiscussionTip:
      'Discutam com o grupo: resolver o problema é a parte conceitualmente mais desafiadora (o algoritmo), enquanto programar é a representação adequada dessa solução.',
  },
  {
    id: 6,
    level: 'analise',
    levelLabel: 'Nível 6 · Análise & Avaliação',
    difficultyBadge: 'Ausência de Ambiguidade',
    topic: 'Requisitos de representação para transmissão do algoritmo',
    prompt:
      'Ao analisar a representação de instruções destinadas a serem transmitidas a terceiros ou a uma máquina, um grupo de estudantes comparou duas formulações:\n• Formulação I: "Aqueça a mistura até que fique no ponto ideal de fervura e adicione um pouco de reagente."\n• Formulação II: "Aqueça a mistura a exatamente 80°C durante 5 minutos e adicione 10 ml do reagente X."\n\nDe acordo com as exigências apresentadas no final da Seção 0.1 de Brookshear para a representação de um algoritmo, a Formulação II é apropriada porque:',
    options: [
      {
        id: 'A',
        text: 'Utiliza terminologia rebuscada que impede interpretações equivocadas por pessoas que não sejam especialistas no assunto.',
      },
      {
        id: 'B',
        text: 'Apresenta instruções claras, compreensíveis e desprovidas de ambiguidade, permitindo a execução precisa e determinística dos passos.',
      },
      {
        id: 'C',
        text: 'Demonstra que algoritmos só podem ser representados por grandezas numéricas absolutas, excluindo termos verbais ou textuais.',
      },
      {
        id: 'D',
        text: 'Transforma automaticamente o procedimento em hardware físico, dispensando qualquer suporte computacional para sua realização.',
      },
    ],
    correctAnswer: 'B',
    explanation: {
      coreReason:
        'No desfecho da Seção 0.1, Brookshear salienta que, para comunicar um algoritmo a uma máquina ou a seres humanos, a representação deve se apoiar em instruções compreensíveis e estritamente sem ambiguidade. Expressões vagas como "ponto ideal" ou "um pouco" tornam a instrução inexecutável por um agente autômato.',
      bookExcerpt:
        '“Depois que um algoritmo é descoberto, ele precisa ser representado de maneira que possa ser comunicado a uma máquina ou a outros seres humanos. Isso requer que a representação utilize instruções compreensíveis e sem ambiguidade.”',
      pageRef: 'Brookshear, Cap. 0, Seção 0.1, p. 19 (PDF: p. 21)',
      optionAnalysis: {
        A: 'Incorreta. O texto não prega "linguagem rebuscada", e sim clareza, compreensibilidade e ausência de ambiguidade.',
        B: 'Correta. Identifica com precisão as duas qualidades capitais exigidas por Brookshear: compreensibilidade e ausência de ambiguidade nas instruções.',
        C: 'Incorreta. Algoritmos podem utilizar palavras, símbolos e textos; a exigência reside na ausência de ambiguidade das operações prescritas.',
        D: 'Incorreta. A forma de redação não transforma uma instrução conceitual em equipamento físico.',
      },
    },
    groupDiscussionTip:
      'Observem como essa necessidade rigorosa de "não ambiguidade" motivou o surgimento das linguagens de programação formais.',
  },
];

export const SOURCE_METADATA = {
  author: 'J. Glenn Brookshear',
  title: 'Ciência da Computação: uma visão abrangente',
  edition: '7. ed.',
  chapter: 'Capítulo 0 – Introdução',
  section: 'Seção 0.1 – O estudo de algoritmos',
  pagesBook: 'Páginas 18 e 19',
  pagesPdf: 'Páginas 20 e 21 do PDF da turma',
  targetAudience: 'Licenciatura em Computação · Introdução à Computação',
  group: 'Grupo 1',
};

export const SECTION_SUMMARY_POINTS = [
  {
    title: '1. O que é um Algoritmo?',
    content:
      'Um conjunto ordenado de passos não ambíguos e executáveis que define como uma tarefa é realizada, associado a uma atividade finita. Exemplos: partituras, instruções de montagem, truques de mágica e processos matemáticos.',
  },
  {
    title: '2. Algoritmos não nasceram com os computadores',
    content:
      'O estudo de algoritmos já era uma área consolidada da Matemática muitos séculos antes do advento do primeiro computador eletrônico. O computador é uma ferramenta recente para executá-los.',
  },
  {
    title: '3. Algoritmo ≠ Programa',
    content:
      'O algoritmo é a solução metodológica passo a passo para a tarefa. Para que uma máquina possa executá-lo, o algoritmo precisa ser expresso em uma forma compatível com a máquina: essa representação é chamada programa.',
  },
  {
    title: '4. Software e Hardware',
    content:
      'Os programas e os algoritmos que eles representam constituem coletivamente o software. A máquina física concreta é o hardware.',
  },
  {
    title: '5. Execução pelo seguimento de passos',
    content:
      'Conceber a solução exige raciocínio sobre o problema; contudo, uma vez que o algoritmo foi estabelecido, sua execução decorre do simples cumprimento das instruções, sem que o executor precise dominar os fundamentos matemáticos originais.',
  },
  {
    title: '6. Algoritmo como codificação do raciocínio',
    content:
      'Descobrir um algoritmo para realizar determinada tarefa equivale diretamente a descobrir como solucionar aquele problema.',
  },
  {
    title: '7. Representação clara e sem ambiguidade',
    content:
      'Para transmitir o algoritmo a máquinas ou seres humanos, as instruções devem ser compreensíveis e estritamente desprovidas de ambiguidade (requisito que fundamentou o desenvolvimento das linguagens de programação).',
  },
];
