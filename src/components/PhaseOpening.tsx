import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowDown,
  Sparkles,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Cog,
  Layers,
  Shuffle,
} from 'lucide-react';
import { PhaseData } from '../data/gameData';
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

interface PhaseOpeningProps {
  phase: PhaseData;
  onStartQuiz: () => void;
}

export const PhaseOpening: React.FC<PhaseOpeningProps> = ({
  phase,
  onStartQuiz,
}) => {
  // State for Phase 1 simulation (step-by-step flow)
  const [phase1Step, setPhase1Step] = useState<number>(3);

  // State for Phase 2 simulation (clear vs ambiguous instruction testing)
  const [phase2SelectedInstruction, setPhase2SelectedInstruction] = useState<'clara' | 'ambigua'>('clara');

  // State for Phase 4 simulation
  const [phase4Card, setPhase4Card] = useState<'cardA' | 'cardB'>('cardA');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Abertura Temática · Fase {phase.phaseNumber} de 4
          </span>
          <span className="text-xs font-mono text-slate-500">
            Tempo estimado: 6 a 8 minutos
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          {phase.title}
        </h1>
        <p className="text-base sm:text-lg font-medium text-cyan-300">
          {phase.subtitle}
        </p>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
          {phase.openingDescription}
        </p>
      </div>

      {/* BESPOKE PEDAGOGICAL ILLUSTRATION / SIMULATION FOR EACH PHASE */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Ilustrações, Personagens & Dinâmica da Fase {phase.phaseNumber}
          </div>
          <span className="text-[11px] font-mono text-slate-500">
            Dimensão Pedagógica Visual
          </span>
        </div>

        {/* FASE 1: PROBLEMA → PASSOS → PROGRAMA → HARDWARE/SOFTWARE */}
        {phase.phaseNumber === 1 && (
          <div className="space-y-6">
            <div className="text-xs text-slate-400 flex flex-wrap gap-2 items-center justify-between">
              <span>Observe a construção gradual do método até a execução pela máquina:</span>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4].map((step) => (
                  <button
                    key={step}
                    onClick={() => setPhase1Step(step)}
                    className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                      phase1Step === step
                        ? 'bg-cyan-500 text-slate-950'
                        : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Passo {step}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Box 1: Problema */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  phase1Step >= 1
                    ? 'border-slate-700 bg-slate-950 text-white'
                    : 'border-slate-800/40 bg-slate-950/30 opacity-40 text-slate-500'
                }`}
              >
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase mb-1">
                  01. Desafio
                </div>
                <h4 className="text-sm font-extrabold text-white">PROBLEMA</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Ex: Ordenar 1.000 fichas de alunos por ordem alfabética.
                </p>
              </div>

              {/* Box 2: Algoritmo */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  phase1Step >= 2
                    ? 'border-cyan-500/60 bg-cyan-950/40 text-cyan-200'
                    : 'border-slate-800/40 bg-slate-950/30 opacity-40 text-slate-500'
                }`}
              >
                <div className="text-[10px] font-mono font-bold text-cyan-400 uppercase mb-1">
                  02. Método
                </div>
                <h4 className="text-sm font-extrabold text-cyan-300">ALGORITMO</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Passos ordenados e finitos concebidos pela mente humana (no papel).
                </p>
              </div>

              {/* Box 3: Programa */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  phase1Step >= 3
                    ? 'border-orange-500/60 bg-orange-950/30 text-orange-200'
                    : 'border-slate-800/40 bg-slate-950/30 opacity-40 text-slate-500'
                }`}
              >
                <div className="text-[10px] font-mono font-bold text-orange-400 uppercase mb-1">
                  03. Representação
                </div>
                <h4 className="text-sm font-extrabold text-orange-300">PROGRAMA</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Algoritmo codificado em forma compatível com a máquina.
                </p>
              </div>

              {/* Box 4: Máquina Física */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  phase1Step >= 4
                    ? 'border-emerald-500/60 bg-emerald-950/30 text-emerald-200'
                    : 'border-slate-800/40 bg-slate-950/30 opacity-40 text-slate-500'
                }`}
              >
                <div className="text-[10px] font-mono font-bold text-emerald-400 uppercase mb-1">
                  04. Suporte Físico
                </div>
                <h4 className="text-sm font-extrabold text-emerald-300">HARDWARE</h4>
                <p className="text-xs text-slate-300 mt-1">
                  A máquina concreta que executa mecanicamente o programa.
                </p>
              </div>
            </div>

            {/* Visual Dichotomy software vs hardware */}
            <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-cyan-400 shrink-0" />
                <div>
                  <strong className="text-cyan-300">SOFTWARE (Lógica):</strong>
                  <span className="text-slate-400 ml-1">
                    Compreende os programas E os algoritmos que esses programas representam.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-orange-400 shrink-0" />
                <div>
                  <strong className="text-orange-300">HARDWARE (Matéria):</strong>
                  <span className="text-slate-400 ml-1">
                    A própria máquina física concreta.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FASE 2: ELABORADOR → INSTRUÇÕES → EXECUTOR + ANIMAÇÃO DE BIFURCAÇÃO DE AMBIGUIDADE */}
        {phase.phaseNumber === 2 && (
          <div className="space-y-6">
            {/* Visual transmission animation */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-[10px] font-mono font-bold text-cyan-400 uppercase">
                  Quem elabora
                </div>
                <h4 className="text-sm font-bold text-white mt-1">Criador da Solução</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Deduz teoremas, raciocina sobre o problema e sintetiza o algoritmo.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center text-center space-y-1">
                <span className="text-[11px] font-mono text-cyan-400 font-bold px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60">
                  Transmitido via Instruções
                </span>
                <span className="text-xs text-slate-500">
                  (Devem ser claras e sem ambiguidade)
                </span>
                <ArrowRight className="w-5 h-5 text-cyan-400 hidden md:block" />
              </div>

              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-[10px] font-mono font-bold text-orange-400 uppercase">
                  Quem executa
                </div>
                <h4 className="text-sm font-bold text-white mt-1">Agente Executor</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Mero seguimento de passos (não precisa dominar a teoria de criação).
                </p>
              </div>
            </div>

            {/* Interactive Ambiguity Test with visual bifurcation */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono font-bold uppercase text-slate-400">
                  Experimento Pedagógico: Ambiguidade vs. Precisão
                </h3>
                <span className="text-[11px] text-slate-500">Selecione para testar</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPhase2SelectedInstruction('clara')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    phase2SelectedInstruction === 'clara'
                      ? 'border-emerald-500 bg-emerald-950/30 text-white shadow-md'
                      : 'border-slate-800 bg-slate-950 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Instrução Clara
                    </span>
                  </div>
                  <p className="text-xs italic text-slate-300">
                    “Aqueça o recipiente a 80°C por exatos 5 minutos e adicione 10 ml do líquido.”
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setPhase2SelectedInstruction('ambigua')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    phase2SelectedInstruction === 'ambigua'
                      ? 'border-amber-500 bg-amber-950/30 text-white shadow-md'
                      : 'border-slate-800 bg-slate-950 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Instrução Ambígua (Bifurcação)
                    </span>
                  </div>
                  <p className="text-xs italic text-slate-300">
                    “Aqueça até o ponto bom de fervura e despeje um pouco de líquido quando achar adequado.”
                  </p>
                </button>
              </div>

              {/* Simulation Result with graphic visual divergence */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs leading-relaxed">
                {phase2SelectedInstruction === 'clara' ? (
                  <div className="flex items-start gap-2.5 text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong>Resultado Determinístico Único:</strong> A instrução não deixa margem para dúvida subjetiva. Qualquer agente autômato ou executor atinge rigorosamente o mesmo resultado com precisão e reprodutibilidade.
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-start gap-2.5 text-amber-300">
                      <XCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong>Bifurcação de Interpretações (Falha Algorítmica):</strong> A mesma instrução se dividiu em duas leituras contraditórias:
                      </div>
                    </div>
                    {/* Visual branch */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
                      <div className="p-2 rounded bg-rose-950/30 border border-rose-800/40 text-rose-300">
                        Interpretação A: Aqueceu a 65°C e colocou 3 ml. (Reação incompleta)
                      </div>
                      <div className="p-2 rounded bg-amber-950/30 border border-amber-800/40 text-amber-300">
                        Interpretação B: Aqueceu a 100°C e colocou 45 ml. (Transbordou)
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* FASE 3: COMPARAÇÃO VISUAL COMPLETA (ALTERAÇÃO 4):
            ÁBACO (com operador) ↓ PASCAL (retrato + Pascalina + engrenagens) ↓ LEIBNIZ (retrato + máquina de calcular)
            Ação do operador → Mecanização de determinadas operações */}
        {phase.phaseNumber === 3 && (
          <div className="space-y-8">
            <div className="text-center space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                A Grande Transição Histórica
              </span>
              <h3 className="text-lg font-extrabold text-white">
                Da Ação do Operador à Mecanização por Engrenagens
              </h3>
              <p className="text-xs text-slate-400 max-w-xl mx-auto">
                Observe a transferência progressiva da regra aritmética: do cérebro humano para os dentes de latão.
              </p>
            </div>

            {/* A CADEIA VISUAL TRIPLA EXIGIDA NO PROMPT */}
            <div className="space-y-4">
              {/* 1. ÁBACO: imagem do ábaco + operador humano */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 shadow-md flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/3 text-center md:text-left space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                    Etapa 1 · Antiguidade
                  </span>
                  <h4 className="text-base font-black text-white">ÁBACO</h4>
                  <p className="text-xs text-cyan-300 font-mono">
                    Operador Humano
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    Ferramenta passiva de auxílio à memória. O algoritmo, o procedimento e a execução residem integralmente nas mãos e na mente do humano.
                  </p>
                </div>
                <div className="w-full md:w-2/3">
                  <AbacusIllustration caption="Contas de madeira deslizam pelas hastes: quem decide a soma é o operador humano." />
                </div>
              </div>

              {/* Seta de transição 1 */}
              <div className="flex flex-col items-center justify-center text-cyan-400 py-1">
                <span className="text-[11px] font-mono text-cyan-300 font-bold px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60">
                  Transferência do cálculo para o mecanismo mecânico ↓
                </span>
                <ArrowDown className="w-4 h-4 text-cyan-400 mt-1 animate-bounce" />
              </div>

              {/* 2. PASCAL: retrato de Pascal + Pascalina + engrenagens */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-orange-500/40 shadow-md flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/3 flex flex-col items-center text-center space-y-2">
                  <span className="text-[10px] font-mono uppercase text-orange-400 font-bold px-2 py-0.5 rounded bg-orange-950/40 border border-orange-900/50">
                    Etapa 2 · Século XVII (1642)
                  </span>
                  <PascalPortrait size="md" showLabel={true} />
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Mecanizou fisicamente o transporte decimal ("vai-um") através de catracas e engrenagens.
                  </p>
                </div>
                <div className="w-full md:w-2/3">
                  <PascalinaIllustration caption="Pascalina: Discos numéricos conectados por engrenagens que realizam a soma mecanicamente." />
                </div>
              </div>

              {/* Seta de transição 2 */}
              <div className="flex flex-col items-center justify-center text-cyan-400 py-1">
                <span className="text-[11px] font-mono text-cyan-300 font-bold px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60">
                  Expansão para multiplicação e divisão mecânicas ↓
                </span>
                <ArrowDown className="w-4 h-4 text-cyan-400 mt-1 animate-bounce" />
              </div>

              {/* 3. LEIBNIZ: retrato de Leibniz + sua máquina de calcular */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-cyan-500/40 shadow-md flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/3 flex flex-col items-center text-center space-y-2">
                  <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-900/50">
                    Etapa 3 · Século XVII (1671)
                  </span>
                  <LeibnizPortrait size="md" showLabel={true} />
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Criou o tambor escalonado com dentes graduados para realizar as 4 operações aritméticas.
                  </p>
                </div>
                <div className="w-full md:w-2/3">
                  <LeibnizMachineIllustration caption="Máquina de Leibniz: Cilindro de passos graduados para efetuar multiplicações e divisões por rotação." />
                </div>
              </div>
            </div>

            {/* Aviso Epistemológico Central */}
            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-900/50 text-xs text-amber-200/90 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-orange-300 block mb-0.5">
                  Conclusão Conceitual da Fase 3:
                </strong>
                Tanto a Pascalina quanto a Máquina de Leibniz transferiram operações aritméticas para engrenagens, mas eram <em>máquinas de propósito fixo</em>. <strong>Automatizar uma operação rígida não é o mesmo que programar uma máquina!</strong>
              </div>
            </div>
          </div>
        )}

        {/* FASE 4: PROGRAMABILIDADE (ALTERAÇÃO 5):
            Retrato de Babbage + Máquina Analítica + Retrato de Ada Lovelace + Retrato de Jacquard + Tear + Cartões
            Animação: CARTÃO A → INSTRUÇÕES A → RESULTADO A
                     depois: CARTÃO B → INSTRUÇÕES B → RESULTADO B */}
        {phase.phaseNumber === 4 && (
          <div className="space-y-8">
            <div className="text-center space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400">
                A Revolução da Programabilidade
              </span>
              <h3 className="text-lg font-extrabold text-white">
                Quando a Instrução Externa Passa a Governar a Máquina
              </h3>
              <p className="text-xs text-slate-400 max-w-xl mx-auto">
                A união da automação têxtil de Jacquard com o projeto arquitetural de Babbage e a visão de software de Ada Lovelace.
              </p>
            </div>

            {/* GALERIA DOS TRÊS PERSONAGENS HISTÓRICOS DA FASE 4 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-2xl bg-slate-950 border border-slate-800">
              {/* Joseph-Marie Jacquard */}
              <div className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <JacquardPortrait size="md" showLabel={true} />
                <p className="text-[11px] text-slate-300 font-medium">
                  <strong>Tear com Cartões (1804):</strong> Demonstrou que cartões perfurados externos podiam controlar o comportamento de uma máquina.
                </p>
              </div>

              {/* Charles Babbage */}
              <div className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <BabbagePortrait size="md" showLabel={true} />
                <p className="text-[11px] text-slate-300 font-medium">
                  <strong>Máquina Analítica (1837):</strong> Primeiro projeto conceitual de computador de uso geral com moinho (CPU) e armazém (RAM).
                </p>
              </div>

              {/* Ada Lovelace */}
              <div className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <AdaLovelacePortrait size="md" showLabel={true} />
                <p className="text-[11px] text-slate-300 font-medium">
                  <strong>Primeira Programadora (1843):</strong> Vislumbrou que a máquina operava sobre símbolos gerais e concebeu o algoritmo dos Números de Bernoulli.
                </p>
              </div>
            </div>

            {/* OS DOIS GRANDES ARTEFATOS: TEAR DE JACQUARD E MÁQUINA ANALÍTICA */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <JacquardLoomIllustration />
              <BabbageMachinesIllustration type="analytical" />
            </div>

            {/* ANIMAÇÃO CONCEITUAL EXIGIDA NO PROMPT (ALTERAÇÃO 5):
                CARTÃO A → INSTRUÇÕES A → RESULTADO A
                depois:
                CARTÃO B → INSTRUÇÕES B → RESULTADO B */}
            <ProgrammabilityConceptAnimation />
          </div>
        )}

        {/* Phase Pillars Grid */}
        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            Eixos Conceituais Desta Fase
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {phase.openingPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/90 text-xs space-y-1"
              >
                <strong className="text-cyan-300 font-semibold block">
                  {idx + 1}. {pillar.title}
                </strong>
                <p className="text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button: Start Phase Questions */}
        <div className="pt-4 flex items-center justify-between border-t border-slate-800">
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">
            5 questões avaliativas com imagens e feedback justificado
          </span>
          <button
            onClick={onStartQuiz}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-400 shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer ml-auto"
          >
            <span>INICIAR QUESTÕES DA FASE {phase.phaseNumber}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
