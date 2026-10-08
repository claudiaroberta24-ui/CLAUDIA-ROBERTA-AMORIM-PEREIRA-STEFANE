import React, { useState, useEffect } from 'react';
import {
  Play,
  ArrowDown,
  Sparkles,
  Workflow,
  Cpu,
  Layers,
  ChevronRight,
  BookOpen,
  Terminal,
} from 'lucide-react';
import { GAME_PHASES } from '../data/gameData';

interface WelcomeScreenProps {
  onStartGame: () => void;
  onOpenSourceModal: () => void;
  onSelectPhaseDirectly: (phaseIndex: number) => void;
}

const OPENING_SEQUENCE = [
  {
    step: 1,
    title: 'PROBLEMA',
    desc: 'O desafio prático ou conceitual que demanda resolução.',
    icon: '✦',
    color: 'from-slate-800 to-slate-900 border-slate-700 text-slate-200',
  },
  {
    step: 2,
    title: 'ALGORITMO',
    desc: 'Conjunto ordenado de passos não ambíguos para solucionar a tarefa.',
    icon: '⚡',
    color: 'from-cyan-950/80 to-slate-900 border-cyan-500/50 text-cyan-300',
  },
  {
    step: 3,
    title: 'INSTRUÇÕES',
    desc: 'Representação precisa e compreensível para transmissão a agentes.',
    icon: '◈',
    color: 'from-cyan-900/60 to-slate-900 border-cyan-400/60 text-cyan-200',
  },
  {
    step: 4,
    title: 'MÁQUINAS DE CALCULAR',
    desc: 'Mecanização do cálculo: engrenagens executam operações fixas.',
    icon: '⚙',
    color: 'from-amber-950/40 to-slate-900 border-amber-500/50 text-amber-300',
  },
  {
    step: 5,
    title: 'MÁQUINAS PROGRAMÁVEIS',
    desc: 'Instruções flexíveis (cartões/código) governam o comportamento do maquinário.',
    icon: '★',
    color: 'from-orange-950/50 to-slate-900 border-orange-500/70 text-orange-300 ring-1 ring-orange-500/30',
  },
];

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onStartGame,
  onOpenSourceModal,
  onSelectPhaseDirectly,
}) => {
  // Step-by-step sequential build animation
  const [activeStep, setActiveStep] = useState<number>(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev < 5 ? prev + 1 : 5));
    }, 900);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 animate-fade-in relative">
      {/* Decorative background vectors: gears, punchcards, circuits */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
        {/* Subtle punchcard motif */}
        <div className="absolute top-10 right-4 w-48 h-32 border border-slate-700/60 rounded-md p-2 grid grid-cols-8 gap-1.5 opacity-30">
          {Array.from({ length: 32 }).map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-sm ${
                i % 3 === 0 ? 'bg-cyan-400' : 'bg-slate-800'
              }`}
            />
          ))}
        </div>
        {/* Subtle gear motif */}
        <div className="absolute bottom-20 left-4 w-40 h-40 border border-dashed border-orange-500/30 rounded-full animate-spin [animation-duration:60s]" />
      </div>

      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-400 font-mono text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          Licenciatura em Computação · Atividade Interativa de Aula
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          Introdução à Computação
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 mt-2">
            Jogo Interativo – Das máquinas de calcular às máquinas programáveis
          </span>
        </h1>

        <p className="text-base sm:text-lg font-medium text-slate-300 leading-relaxed">
          4 fases para compreender como a ideia de algoritmo se conecta à história das máquinas e à programação
        </p>

        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Neste jogo, você percorrerá quatro fases. Em cada uma, investigará conceitos fundamentais da Computação, desde os algoritmos até a ideia de máquina programável.
        </p>

        {/* CTA Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartGame}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl font-black text-base uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Play className="w-5 h-5 fill-slate-950" />
            INICIAR JOGO
          </button>

          <button
            onClick={onOpenSourceModal}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Consultar Síntese Teórica</span>
          </button>
        </div>
      </div>

      {/* MANDATORY OPENING ANIMATED SEQUENCE:
          PROBLEMA ↓ ALGORITMO ↓ INSTRUÇÕES ↓ MÁQUINAS DE CALCULAR ↓ MÁQUINAS PROGRAMÁVEIS */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl relative z-10 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <h2 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-cyan-400">
              O Percurso Conceitual Construído Gradualmente
            </h2>
          </div>
          <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
            Passo {activeStep} de 5
          </span>
        </div>

        {/* Sequence chain */}
        <div className="flex flex-col items-center space-y-2 max-w-xl mx-auto py-2">
          {OPENING_SEQUENCE.map((node, idx) => {
            const isVisible = node.step <= activeStep;
            const isCurrent = node.step === activeStep;

            return (
              <React.Fragment key={node.step}>
                {/* Node Box */}
                <div
                  className={`w-full p-4 rounded-xl border bg-gradient-to-r transition-all duration-500 flex items-center justify-between gap-4 ${
                    node.color
                  } ${
                    isVisible
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-20 scale-95 translate-y-2'
                  } ${isCurrent ? 'shadow-lg shadow-cyan-950/60' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-slate-950/70 border border-current/30 flex items-center justify-center font-mono text-sm font-bold shrink-0">
                      {node.icon}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-extrabold tracking-wider">
                        {node.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-normal mt-0.5">
                        {node.desc}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold opacity-60">
                    0{node.step}
                  </span>
                </div>

                {/* Arrow connector */}
                {idx < OPENING_SEQUENCE.length - 1 && (
                  <div
                    className={`transition-all duration-500 py-0.5 flex flex-col items-center ${
                      node.step < activeStep ? 'text-cyan-400 opacity-100' : 'text-slate-700 opacity-30'
                    }`}
                  >
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Replay or advance sequence */}
        <div className="text-center pt-2">
          <button
            onClick={() => setActiveStep(5)}
            className="text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            {activeStep < 5 ? 'Expandir sequência completa →' : 'Sequência pedagógica completa'}
          </button>
        </div>
      </div>

      {/* 4 Phases Overview Grid */}
      <div className="space-y-4 relative z-10">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            As 4 Fases do Jogo
          </h2>
          <span className="text-xs text-slate-500 font-mono">
            4 a 5 questões avaliativas por fase
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {GAME_PHASES.map((phase, idx) => (
            <div
              key={phase.id}
              onClick={() => onSelectPhaseDirectly(idx)}
              className="p-5 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer group flex flex-col justify-between space-y-4 shadow-md"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700 group-hover:border-cyan-500/40">
                    Fase {phase.phaseNumber}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    5 Questões
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {phase.title}
                </h3>
                <p className="text-xs text-cyan-400/90 font-medium">
                  {phase.subtitle}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {phase.openingDescription}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-cyan-300">
                <span>Explorar Fase {phase.phaseNumber}</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
