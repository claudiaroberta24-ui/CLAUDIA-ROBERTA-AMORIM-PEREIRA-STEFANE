import React from 'react';
import {
  PascalPortrait,
  LeibnizPortrait,
  BabbagePortrait,
  AdaLovelacePortrait,
  JacquardPortrait,
  AbacusIllustration,
  PascalinaIllustration,
  LeibnizMachineIllustration,
  BabbageMachinesIllustration,
  JacquardLoomIllustration,
  ProgrammabilityConceptAnimation,
} from './HistoricalIllustrations';
import { ArrowRight, CheckCircle2, AlertTriangle, Cog, Layers } from 'lucide-react';

interface QuestionVisualProps {
  phaseNumber: number;
  questionId: number;
}

export const QuestionHistoricalVisual: React.FC<QuestionVisualProps> = ({
  phaseNumber,
  questionId,
}) => {
  // FASE 3: DO ÁBACO À MECANIZAÇÃO DO CÁLCULO
  if (phaseNumber === 3) {
    if (questionId === 1) {
      // Q1: Papel do operador humano no ábaco
      return (
        <div className="my-4 animate-fade-in">
          <AbacusIllustration caption="No ábaco, cada conta movida depende do raciocínio e da decisão do operador humano." />
        </div>
      );
    }
    if (questionId === 2) {
      // Q2: Pascalina de Blaise Pascal
      return (
        <div className="my-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center p-4 rounded-xl bg-slate-950 border border-orange-500/30 animate-fade-in">
          <div className="sm:col-span-4 flex justify-center">
            <PascalPortrait size="md" showLabel={true} />
          </div>
          <div className="sm:col-span-8">
            <PascalinaIllustration caption="Pascalina (1642): O movimento das engrenagens transfere a dezena automaticamente ('vai-um')." />
          </div>
        </div>
      );
    }
    if (questionId === 3) {
      // Q3: Máquina de Leibniz (Stepped Reckoner)
      return (
        <div className="my-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center p-4 rounded-xl bg-slate-950 border border-cyan-500/30 animate-fade-in">
          <div className="sm:col-span-4 flex justify-center">
            <LeibnizPortrait size="md" showLabel={true} />
          </div>
          <div className="sm:col-span-8">
            <LeibnizMachineIllustration caption="Leibniz (1671): Cilindro de passos graduados para somas sucessivas de multiplicação." />
          </div>
        </div>
      );
    }
    if (questionId === 4) {
      // Q4: Auxílio ao cálculo vs cálculo mecanizado
      return (
        <div className="my-4 p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 animate-fade-in">
          <div className="text-xs font-mono font-bold text-cyan-400 uppercase flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            Comparação Visual: Onde reside a execução?
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
              <strong className="text-cyan-300 block mb-1">ÁBACO (AUXÍLIO)</strong>
              <p className="text-slate-400 text-[11px]">
                O instrumento apoia a memória; o procedimento está no humano.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-slate-900 border border-orange-500/40">
              <strong className="text-orange-300 block mb-1">MÁQUINA MECÂNICA (MECANIZAÇÃO)</strong>
              <p className="text-slate-400 text-[11px]">
                O mecanismo de engrenagens executa a operação aritmética fisicamente.
              </p>
            </div>
          </div>
        </div>
      );
    }
    if (questionId === 5) {
      // Q5: Automatizar não é programar
      return (
        <div className="my-4 p-4 rounded-xl bg-amber-950/20 border border-amber-900/40 text-xs text-amber-200 animate-fade-in space-y-2">
          <div className="flex items-center gap-2 text-orange-400 font-mono font-bold text-[11px] uppercase">
            <Cog className="w-4 h-4 animate-spin [animation-duration:10s]" />
            Limitação Mecânica das Calculadoras Rígidas
          </div>
          <p className="text-slate-300 text-xs">
            A Pascalina e a máquina de Leibniz foram forjadas para operações fixas. Para mudar o que faziam, era necessário desmontar o maquinário. Elas não aceitavam instruções externas.
          </p>
        </div>
      );
    }
  }

  // FASE 4: BABBAGE, ADA, JACQUARD E A PROGRAMABILIDADE
  if (phaseNumber === 4) {
    if (questionId === 1) {
      // Q1: Tear de Jacquard e cartões perfurados
      return (
        <div className="my-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center p-4 rounded-xl bg-slate-950 border border-orange-500/30 animate-fade-in">
          <div className="sm:col-span-4 flex justify-center">
            <JacquardPortrait size="md" showLabel={true} />
          </div>
          <div className="sm:col-span-8">
            <JacquardLoomIllustration caption="Tear de Jacquard (1804): Cartões perfurados como controle externo da máquina." />
          </div>
        </div>
      );
    }
    if (questionId === 2) {
      // Q2: Máquina Analítica e Máquina das Diferenças de Babbage
      return (
        <div className="my-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center p-4 rounded-xl bg-slate-950 border border-cyan-500/30 animate-fade-in">
          <div className="sm:col-span-4 flex justify-center">
            <BabbagePortrait size="md" showLabel={true} />
          </div>
          <div className="sm:col-span-8">
            <BabbageMachinesIllustration type="analytical" caption="Máquina Analítica: Separação arquitetural entre o Moinho (CPU) e o Armazém (Memória)." />
          </div>
        </div>
      );
    }
    if (questionId === 3) {
      // Q3: Ada Lovelace e o Primeiro Algoritmo
      return (
        <div className="my-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center p-4 rounded-xl bg-slate-950 border border-cyan-400/40 animate-fade-in">
          <div className="sm:col-span-4 flex justify-center">
            <AdaLovelacePortrait size="md" showLabel={true} />
          </div>
          <div className="sm:col-span-8 space-y-2">
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-700 space-y-1">
              <span className="text-[10px] font-mono text-cyan-300 font-bold uppercase">
                Nota G de Lovelace (1843)
              </span>
              <h4 className="text-xs font-bold text-white">Algoritmo dos Números de Bernoulli</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Ada concebeu instruções precisas com laços e desvios condicionais para a Máquina Analítica processar entidades simbólicas e numéricas.
              </p>
            </div>
          </div>
        </div>
      );
    }
    if (questionId === 4) {
      // Q4: O que define Programabilidade
      return (
        <div className="my-4 animate-fade-in">
          <ProgrammabilityConceptAnimation />
        </div>
      );
    }
    if (questionId === 5) {
      // Q5: Automatização vs Programabilidade
      return (
        <div className="my-4 p-4 rounded-xl bg-slate-950 border border-cyan-500/30 space-y-2 animate-fade-in">
          <div className="text-[11px] font-mono font-bold text-cyan-400 uppercase">
            A Fronteira entre Calcular e Programar
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
              <strong className="text-orange-300 block mb-0.5">Cálculo Fixo:</strong>
              <span className="text-slate-400 text-[11px]">A máquina faz apenas o que suas peças mecânicas pré-definem.</span>
            </div>
            <div className="p-2.5 rounded bg-slate-900 border border-cyan-800/60">
              <strong className="text-cyan-300 block mb-0.5">Programabilidade:</strong>
              <span className="text-slate-400 text-[11px]">A máquina segue instruções externas flexíveis para realizar qualquer tarefa lógica.</span>
            </div>
          </div>
        </div>
      );
    }
  }

  // FASE 2: INSTRUÇÕES, EXECUÇÃO E AMBIGUIDADE
  if (phaseNumber === 2) {
    if (questionId === 3) {
      // Q3: Identificação de ambiguidade nas instruções (visual bifurcation)
      return (
        <div className="my-4 p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 animate-fade-in">
          <div className="text-[11px] font-mono font-bold text-orange-400 uppercase flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5" />
            Visualização da Bifurcação de Ambiguidade
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-emerald-200">
              <div className="font-bold font-mono text-[11px] flex items-center gap-1 text-emerald-400 mb-1">
                <CheckCircle2 className="w-3 h-3" />
                Instrução Clara
              </div>
              <p className="text-[11px] text-slate-300">
                80°C por 5 minutos + 10 ml $\rightarrow$ <span className="text-emerald-300 font-bold">1 único resultado idêntico.</span>
              </p>
            </div>
            <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-800/40 text-rose-200">
              <div className="font-bold font-mono text-[11px] flex items-center gap-1 text-rose-400 mb-1">
                <AlertTriangle className="w-3 h-3" />
                Instrução Vaga ("um pouco")
              </div>
              <p className="text-[11px] text-slate-300">
                Divide-se em interpretações contraditórias $\rightarrow$ <span className="text-rose-300 font-bold">Falha no autômato.</span>
              </p>
            </div>
          </div>
        </div>
      );
    }
    if (questionId === 1 || questionId === 2 || questionId === 5) {
      return (
        <div className="my-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3 text-xs text-slate-300 animate-fade-in">
          <span className="text-cyan-400 font-mono font-bold">Criador do Algoritmo</span>
          <span className="text-slate-500 font-mono">→ [Instruções Precisas] →</span>
          <span className="text-orange-400 font-mono font-bold">Executor Autômato</span>
        </div>
      );
    }
  }

  // FASE 1: ALGORITMOS, PROGRAMAS, SOFTWARE E HARDWARE
  if (phaseNumber === 1) {
    if (questionId === 2 || questionId === 3) {
      return (
        <div className="my-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-around gap-2 text-xs font-mono animate-fade-in">
          <div className="text-center">
            <span className="text-cyan-400 font-bold block">SOFTWARE</span>
            <span className="text-[10px] text-slate-400">Algoritmos + Programas</span>
          </div>
          <span className="text-slate-600 font-bold">↔</span>
          <div className="text-center">
            <span className="text-orange-400 font-bold block">HARDWARE</span>
            <span className="text-[10px] text-slate-400">Máquina física concreta</span>
          </div>
        </div>
      );
    }
    if (questionId === 4) {
      return (
        <div className="my-3 p-3 rounded-xl bg-slate-950/80 border border-cyan-800/40 text-xs animate-fade-in text-center">
          <span className="text-slate-400 text-[11px] font-mono block">
            Estado da Equipe no Laboratório:
          </span>
          <span className="text-cyan-300 font-bold text-xs">
            Solução ordenada no papel = ALGORITMO CONCEBIDO
          </span>
        </div>
      );
    }
  }

  return null;
};
