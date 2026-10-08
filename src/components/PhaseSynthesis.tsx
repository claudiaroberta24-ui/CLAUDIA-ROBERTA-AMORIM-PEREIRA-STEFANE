import React from 'react';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import { PhaseData } from '../data/gameData';
import {
  PascalPortrait,
  LeibnizPortrait,
  BabbagePortrait,
  AdaLovelacePortrait,
  JacquardPortrait,
} from './HistoricalIllustrations';

interface PhaseSynthesisProps {
  phase: PhaseData;
  score: { correct: number; total: number };
  onNextPhase: () => void;
  isLastPhase: boolean;
}

export const PhaseSynthesis: React.FC<PhaseSynthesisProps> = ({
  phase,
  score,
  onNextPhase,
  isLastPhase,
}) => {
  const percentage = Math.round((score.correct / score.total) * 100);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 animate-fade-in">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
            Fase {phase.phaseNumber} Concluída
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            {phase.synthesis.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Consolidação das teses trabalhadas nesta fase
          </p>
        </div>

        {/* Phase Score Pill */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
          <div className="w-12 h-12 rounded-lg bg-cyan-950 border border-cyan-500/40 flex flex-col items-center justify-center font-mono font-bold text-cyan-400">
            <span className="text-base leading-none">{score.correct}</span>
            <span className="text-[10px] text-slate-400">de {score.total}</span>
          </div>
          <div className="text-xs">
            <span className="text-slate-200 font-bold block">{percentage}% de Acerto</span>
            <span className="text-slate-400">Fase {phase.phaseNumber}</span>
          </div>
        </div>
      </div>

      {/* Main Synthesis Diagram: Flow + Comparison */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-cyan-500/30 shadow-2xl space-y-8">
        {/* Specific layout according to phase */}

        {/* FASE 1 & FASE 2: VERTICAL FLOW */}
        {(phase.phaseNumber === 1 || phase.phaseNumber === 2) && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Flow Column */}
            <div className="lg:col-span-7 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
                Fluxo Conceitual da Fase
              </h3>

              {phase.synthesis.flow.map((item, idx) => (
                <React.Fragment key={idx}>
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3 shadow-sm">
                    <div>
                      <div className="text-[10px] font-mono uppercase text-cyan-400 font-bold">
                        {item.tag}
                      </div>
                      <h4 className="text-sm font-extrabold text-white tracking-wide">
                        {item.label}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-600">
                      0{idx + 1}
                    </span>
                  </div>

                  {idx < phase.synthesis.flow.length - 1 && (
                    <div className="flex justify-center text-cyan-400 py-0.5">
                      <ArrowDown className="w-4 h-4 animate-bounce" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Comparison Column */}
            {phase.synthesis.comparisons && (
              <div className="lg:col-span-5 space-y-4 lg:border-l lg:border-slate-800 lg:pl-8">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
                  Distinção Teórica
                </h3>

                <div className="p-4 rounded-xl bg-slate-950 border border-cyan-700/50 space-y-2">
                  <h4 className="text-xs font-bold text-cyan-300 font-mono tracking-wider">
                    {phase.synthesis.comparisons.itemA.title}
                  </h4>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                    {phase.synthesis.comparisons.itemA.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-orange-500/50 space-y-2">
                  <h4 className="text-xs font-bold text-orange-300 font-mono tracking-wider">
                    {phase.synthesis.comparisons.itemB.title}
                  </h4>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                    {phase.synthesis.comparisons.itemB.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

        {/* FASE 3: ÁBACO vs PASCAL/LEIBNIZ */}
        {phase.phaseNumber === 3 && phase.synthesis.comparisons && (
          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Comparação Epistemológica: Onde reside a operação?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ÁBACO */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-700 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <h4 className="text-sm font-extrabold text-cyan-300 font-mono">
                    {phase.synthesis.comparisons.itemA.title}
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400">Auxílio</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-2 list-disc pl-4">
                  {phase.synthesis.comparisons.itemA.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>

              {/* PASCAL / LEIBNIZ */}
              <div className="p-5 rounded-xl bg-slate-950 border border-orange-500/50 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <h4 className="text-sm font-extrabold text-orange-300 font-mono">
                    {phase.synthesis.comparisons.itemB.title}
                  </h4>
                  <span className="text-[10px] font-mono text-orange-400">Mecanização</span>
                </div>
                {/* Retratos de Pascal e Leibniz */}
                <div className="flex items-center justify-around py-1 bg-slate-900/60 rounded-lg border border-slate-800/80">
                  <PascalPortrait size="sm" showLabel={true} />
                  <span className="text-slate-600 font-mono text-sm">+</span>
                  <LeibnizPortrait size="sm" showLabel={true} />
                </div>
                <ul className="text-xs text-slate-300 space-y-2 list-disc pl-4">
                  {phase.synthesis.comparisons.itemB.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* FASE 4: ÁBACO → PASCAL/LEIBNIZ → MÁQUINA ANALÍTICA → PROGRAMABILIDADE */}
        {phase.phaseNumber === 4 && (
          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              A Grande Escada da Programabilidade
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1">
                <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                  01. Antiguidade
                </div>
                <h4 className="text-sm font-extrabold text-white">ÁBACO</h4>
                <p className="text-xs text-slate-400">
                  Operador humano executa todas as regras e decisões.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-700 text-center space-y-2">
                <div className="text-[10px] font-mono uppercase text-cyan-400 font-bold">
                  02. Século XVII
                </div>
                <div className="flex justify-center gap-1.5 py-0.5">
                  <PascalPortrait size="sm" showLabel={false} />
                  <LeibnizPortrait size="sm" showLabel={false} />
                </div>
                <h4 className="text-sm font-extrabold text-cyan-300">PASCAL / LEIBNIZ</h4>
                <p className="text-xs text-slate-400">
                  Mecanismo executa operações específicas fixadas em dentes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-orange-500/60 text-center space-y-2">
                <div className="text-[10px] font-mono uppercase text-orange-400 font-bold">
                  03. Século XIX
                </div>
                <div className="flex justify-center gap-1.5 py-0.5">
                  <BabbagePortrait size="sm" showLabel={false} />
                  <AdaLovelacePortrait size="sm" showLabel={false} />
                </div>
                <h4 className="text-sm font-extrabold text-orange-300">MÁQUINA ANALÍTICA</h4>
                <p className="text-xs text-slate-400">
                  Instruções externas orientam múltiplos procedimentos.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-400 text-center space-y-1 ring-1 ring-cyan-400/40">
                <div className="text-[10px] font-mono uppercase text-cyan-300 font-bold">
                  04. Salto Conceitual
                </div>
                <h4 className="text-sm font-extrabold text-cyan-200">PROGRAMABILIDADE</h4>
                <p className="text-xs text-slate-300">
                  Mesmo hardware adaptável a infinitos algoritmos.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Phase Final Takeaway Quote Banner */}
        <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-orange-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Tese Mestra da Fase {phase.phaseNumber}
          </div>
          <p className="text-base sm:text-lg font-bold text-white italic max-w-3xl mx-auto leading-relaxed">
            {phase.synthesis.finalQuote}
          </p>
        </div>

        {/* Action Button: Next Phase or Final Synthesis */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <span className="text-xs text-slate-500 font-mono">
            {isLastPhase ? 'Última fase concluída' : `Próxima: Fase ${phase.phaseNumber + 1}`}
          </span>
          <button
            onClick={onNextPhase}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-400 shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>{isLastPhase ? 'IR PARA A SÍNTESE FINAL DO JOGO' : `AVANÇAR PARA A FASE ${phase.phaseNumber + 1}`}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
