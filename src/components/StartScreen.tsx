import React from 'react';
import { Play, BookOpen, Users, Compass, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { SOURCE_METADATA } from '../data/quizData';

interface StartScreenProps {
  onStart: () => void;
  onOpenSourceModal: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({
  onStart,
  onOpenSourceModal,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-in">
      {/* Top Banner / Academic Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Disciplina: Introdução à Computação · Licenciatura
        </div>
        <div className="inline-flex items-center gap-1.5 text-xs text-orange-400 font-mono bg-orange-950/40 px-3 py-1 rounded-full border border-orange-900/50">
          <Users className="w-3.5 h-3.5" />
          {SOURCE_METADATA.group} · Leitura Dirigida
        </div>
      </div>

      {/* Main Hero Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 shadow-2xl p-6 sm:p-10 mb-8">
        {/* Subtle decorative code/flow graph in background */}
        <div className="absolute -top-12 -right-12 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-5">
          {/* Tag */}
          <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400">
            <Layers className="w-4 h-4 text-cyan-400" />
            Atividade Avaliativa & Formativa
          </div>

          {/* Mandatory Titles */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Núcleo 1 – O estudo de algoritmos
            </h1>
            <p className="text-lg sm:text-xl font-medium text-cyan-300 mt-2 tracking-normal">
              Da solução de um problema à representação para a máquina
            </p>
          </div>

          {/* Mandatory Short Text */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-950/80 border border-slate-800/90 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p className="flex items-start gap-3">
              <span className="text-orange-400 font-bold text-lg leading-none shrink-0 mt-0.5">
                ✦
              </span>
              <span>
                Este quiz retoma as ideias centrais da seção 0.1 de Brookshear.
                Conversem com o grupo antes de responder: mais importante que acertar
                é conseguir justificar a escolha com base na leitura.
              </span>
            </p>
          </div>

          {/* Source Box */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800/70 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>
                Fonte obrigatória:{' '}
                <strong className="text-slate-200">
                  BROOKSHEAR, J. Glenn.
                </strong>{' '}
                <em>Ciência da Computação: uma visão abrangente</em>, 7. ed., Cap. 0, Seção 0.1 (p. 20-21 do PDF).
              </span>
            </div>
            <button
              onClick={onOpenSourceModal}
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 font-mono flex items-center gap-1 cursor-pointer"
            >
              Consultar síntese conceitual
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* Start Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onStart}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-base uppercase tracking-wider"
            >
              <Play className="w-5 h-5 fill-slate-950" />
              INICIAR
            </button>

            <span className="text-xs text-slate-400 flex items-center justify-center gap-1 font-mono">
              <span>6 questões progressivas</span>
              <span>•</span>
              <span>1 pergunta por tela</span>
              <span>•</span>
              <span>Feedback justificado</span>
            </span>
          </div>
        </div>
      </div>

      {/* Conceptual Roadmap / Pedagogy Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1.5 font-semibold uppercase">
            <Compass className="w-4 h-4 text-cyan-400" />
            1. Compreensão & Origem
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Algoritmos na Matemática antes dos computadores; passos ordenados, não ambíguos e finitos.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
          <div className="flex items-center gap-2 text-xs font-mono text-orange-400 mb-1.5 font-semibold uppercase">
            <Layers className="w-4 h-4 text-orange-400" />
            2. Algoritmo × Programa
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            A máquina necessita de uma representação compatível (programa). Software e hardware no texto.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1.5 font-semibold uppercase">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            3. Aplicação & Rigor
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Diferença entre criar e executar; solução no papel vs. computador; e exigência de ausência de ambiguidade.
          </p>
        </div>
      </div>
    </div>
  );
};
