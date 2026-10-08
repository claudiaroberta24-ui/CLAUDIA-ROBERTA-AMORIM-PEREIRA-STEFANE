import React from 'react';
import {
  Sparkles,
  MessageSquare,
  Award,
  RotateCcw,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { MASTER_SYNTHESIS_DATA, GAME_PHASES } from '../data/gameData';
import {
  PascalPortrait,
  LeibnizPortrait,
  BabbagePortrait,
  AdaLovelacePortrait,
  JacquardPortrait,
} from './HistoricalIllustrations';

interface FinalScreenProps {
  scores: Record<number, { correct: number; total: number }>;
  onRestartGame: () => void;
  onReviewPhase: (phaseIndex: number) => void;
  onOpenSourceModal: () => void;
}

export const FinalScreen: React.FC<FinalScreenProps> = ({
  scores,
  onRestartGame,
  onReviewPhase,
  onOpenSourceModal,
}) => {
  // Compute global score
  let totalCorrect = 0;
  let totalQuestions = 0;

  Object.values(scores).forEach((s) => {
    totalCorrect += s.correct;
    totalQuestions += s.total;
  });

  const overallPercentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 100;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 animate-fade-in">
      {/* Top Completion Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-700/60 text-cyan-300 font-mono text-xs font-semibold">
          <Award className="w-4 h-4 text-cyan-400" />
          4 Fases Concluídas com Sucesso · Introdução à Computação
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          {MASTER_SYNTHESIS_DATA.title}
        </h1>
        <p className="text-base sm:text-lg font-medium text-cyan-300 max-w-2xl mx-auto">
          {MASTER_SYNTHESIS_DATA.subtitle}
        </p>
      </div>

      {/* Global Performance Overview Banner */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-2xl bg-cyan-950 border border-cyan-500/40 flex flex-col items-center justify-center font-mono text-cyan-400 shadow-lg">
            <span className="text-3xl font-extrabold leading-none">{totalCorrect}</span>
            <span className="text-[11px] text-slate-400 mt-0.5">de {totalQuestions}</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">
              Aproveitamento Global: {overallPercentage}%
            </h2>
            <p className="text-xs text-slate-300 max-w-md mt-1 leading-relaxed">
              {overallPercentage >= 80
                ? 'Excelente domínio conceitual! Você percorreu com rigor da teoria do algoritmo até a gênese da máquina programável.'
                : overallPercentage >= 50
                ? 'Bom desempenho na atividade! Recomendamos revisar a distinção entre automatização mecânica rígida e programabilidade.'
                : 'Recomendamos revisitar as sínteses conceituais de cada fase para solidificar os eixos da aula.'}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onRestartGame}
            className="px-4 py-2.5 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reiniciar Jogo
          </button>
        </div>
      </div>

      {/* Performance by phase quick badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {GAME_PHASES.map((phase, idx) => {
          const phaseScore = scores[phase.phaseNumber] || { correct: 5, total: 5 };
          const pct = Math.round((phaseScore.correct / phaseScore.total) * 100);

          return (
            <div
              key={phase.id}
              onClick={() => onReviewPhase(idx)}
              className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer group text-left"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Fase {phase.phaseNumber}</span>
                <span className="text-cyan-400 font-bold">{pct}%</span>
              </div>
              <div className="text-xs font-bold text-white group-hover:text-cyan-300 mt-1 truncate">
                {phase.title.replace(`Fase ${phase.phaseNumber} – `, '')}
              </div>
              <div className="text-[11px] text-slate-500 font-mono mt-1">
                {phaseScore.correct}/{phaseScore.total} acertos
              </div>
            </div>
          );
        })}
      </div>

      {/* MANDATORY MACRO FLOW:
          PROBLEMA ↓ ALGORITMO ↓ INSTRUÇÕES ↓ EXECUÇÃO ↓ MECANIZAÇÃO DO CÁLCULO ↓ PROGRAMABILIDADE */}
      <div className="rounded-2xl bg-slate-900 border border-cyan-500/40 shadow-2xl p-6 sm:p-8 space-y-8">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            O Grande Fluxo Visual da Disciplina
          </div>
          <button
            onClick={onOpenSourceModal}
            className="text-xs text-slate-400 hover:text-cyan-300 font-mono flex items-center gap-1 cursor-pointer"
          >
            Fundamentação teórica
          </button>
        </div>

        {/* 6-step chain */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {MASTER_SYNTHESIS_DATA.macroFlow.map((node, i) => (
            <div
              key={node.step}
              className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-2 relative"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono font-bold text-cyan-400 mb-1">
                  <span>ETAPA {node.step}</span>
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-white tracking-wide">
                  {node.name}
                </h3>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  {node.desc}
                </p>
              </div>

              {i < MASTER_SYNTHESIS_DATA.macroFlow.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-cyan-500 z-10">
                  <ChevronRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* MANDATORY HISTORICAL COMPARISON:
          ÁBACO → PASCAL / LEIBNIZ → BABBAGE / ADA / JACQUARD */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-orange-400">
          <Layers className="w-4 h-4 text-orange-400" />
          Comparação Histórica: Onde está o cálculo e a instrução?
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {MASTER_SYNTHESIS_DATA.historicalTimeline.map((item, index) => (
            <div
              key={index}
              className={`p-5 rounded-xl border space-y-3 ${item.accent}`}
            >
              <div className="text-[10px] font-mono text-slate-400 uppercase">
                {item.era}
              </div>

              {/* Retratos históricos correspondentes a cada era */}
              {index === 1 && (
                <div className="flex justify-center gap-2 py-1 bg-slate-900/60 rounded-lg border border-slate-800">
                  <PascalPortrait size="sm" showLabel={true} />
                  <LeibnizPortrait size="sm" showLabel={true} />
                </div>
              )}

              {index === 2 && (
                <div className="flex justify-center gap-1.5 py-1 bg-slate-900/60 rounded-lg border border-slate-800">
                  <JacquardPortrait size="sm" showLabel={true} />
                  <BabbagePortrait size="sm" showLabel={true} />
                  <AdaLovelacePortrait size="sm" showLabel={true} />
                </div>
              )}

              <div>
                <h3 className="text-lg font-black text-white">
                  {item.subject}
                </h3>
                <span className="text-xs font-mono text-cyan-400 font-semibold block">
                  {item.status}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800/80">
                {item.insight}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MANDATORY FINAL AXIOMS */}
      <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          Axiomas Pedagógicos para a Licenciatura em Computação
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {MASTER_SYNTHESIS_DATA.coreAxioms.map((axiom, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-slate-900/80 border border-cyan-800/40 text-xs text-slate-200 leading-relaxed font-semibold flex items-start gap-2.5"
            >
              <span className="text-orange-400 font-mono text-sm leading-none shrink-0 mt-0.5">
                ✦
              </span>
              <span>{axiom}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MANDATORY LAST QUESTION ON SCREEN:
          "O que realmente mudou quando as máquinas passaram a seguir instruções?" */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-orange-950/40 border-2 border-orange-500/60 shadow-2xl p-6 sm:p-8 space-y-4">
        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider">
            <MessageSquare className="w-4 h-4 text-orange-400" />
            Pergunta Final para Discussão Coletiva em Aula
          </div>

          <blockquote className="text-xl sm:text-2xl font-black text-white leading-snug">
            “{MASTER_SYNTHESIS_DATA.finalDebateQuestion}”
          </blockquote>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-1">
            <strong className="text-cyan-400 block font-mono">
              Orientação para o Debate com o Professor e a Turma:
            </strong>
            <p className="text-slate-400">
              Esta questão fecha o ciclo da aula. Pensem na passagem da máquina de engrenagens fixas (que só sabia somar) para o computador universal: a máquina não precisa ser reconstruída a cada nova tarefa; basta fornecer um novo conjunto de instruções codificadas (o programa).
            </p>
          </div>
        </div>
      </div>

      {/* MANDATORY CONCLUIR BUTTON */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
        <div className="text-xs text-slate-400 font-mono">
          BROOKSHEAR, J. Glenn · Ciência da Computação: uma visão abrangente (7. ed.)
        </div>

        <button
          onClick={onRestartGame}
          className="w-full sm:w-auto px-10 py-4 rounded-xl font-black text-base uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-400 shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          CONCLUIR
        </button>
      </div>
    </div>
  );
};
