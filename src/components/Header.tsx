import React from 'react';
import { GraduationCap, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { GAME_PHASES } from '../data/gameData';

interface HeaderProps {
  currentStage: 'welcome' | 'phase-opening' | 'phase-quiz' | 'phase-synthesis' | 'final-screen';
  currentPhaseIndex: number;
  onSelectPhase: (index: number) => void;
  onGoHome: () => void;
  onOpenSourceModal: () => void;
  completedPhases: number[];
}

export const Header: React.FC<HeaderProps> = ({
  currentStage,
  currentPhaseIndex,
  onSelectPhase,
  onGoHome,
  onOpenSourceModal,
  completedPhases,
}) => {
  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        {/* Course & App Brand */}
        <button
          onClick={onGoHome}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors shadow-sm">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-cyan-400">
                Introdução à Computação · Aula 2
              </span>
            </div>
            <h1 className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors truncate max-w-[200px] sm:max-w-xs">
              Das máquinas de calcular às máquinas programáveis
            </h1>
          </div>
        </button>

        {/* Phase Pill Navigation (for quick jumping during classroom debate) */}
        <div className="hidden md:flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800">
          {GAME_PHASES.map((phase, idx) => {
            const isCurrent =
              currentStage !== 'welcome' &&
              currentStage !== 'final-screen' &&
              currentPhaseIndex === idx;
            const isCompleted = completedPhases.includes(idx);

            return (
              <button
                key={phase.id}
                onClick={() => onSelectPhase(idx)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm shadow-cyan-500/30'
                    : isCompleted
                    ? 'bg-slate-800/80 text-cyan-300 hover:bg-slate-800'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
                title={phase.title}
              >
                {isCompleted && !isCurrent ? (
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                ) : (
                  <span className="opacity-75">{idx + 1}.</span>
                )}
                <span>Fase {idx + 1}</span>
              </button>
            );
          })}

          <button
            onClick={() => onSelectPhase(4)}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
              currentStage === 'final-screen'
                ? 'bg-orange-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-orange-300 hover:bg-slate-800/40'
            }`}
          >
            Síntese Final
          </button>
        </div>

        {/* Reference & Modal trigger */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSourceModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-800/60 hover:border-cyan-500 rounded-lg transition-all cursor-pointer"
            title="Consultar fundamentação bibliográfica e conceitos"
          >
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Fundamentação:</span>
            <span>Brookshear</span>
          </button>
        </div>
      </div>
    </header>
  );
};
