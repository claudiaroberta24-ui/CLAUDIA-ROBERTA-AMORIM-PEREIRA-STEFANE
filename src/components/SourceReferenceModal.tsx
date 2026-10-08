import React from 'react';
import { X, BookOpen, Layers, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

interface SourceReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SourceReferenceModal: React.FC<SourceReferenceModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[88vh] flex flex-col overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-white">
                Fundamentação Teórica da Aula 2
              </h2>
              <p className="text-xs text-cyan-400 font-mono">
                BROOKSHEAR, J. Glenn · Ciência da Computação: uma visão abrangente (7. ed.)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm leading-relaxed">
          {/* Unit Scope */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-orange-400" />
              Eixo Epistemológico: Da Automação à Programabilidade
            </div>
            <p className="text-slate-300">
              Esta atividade universitária integra o <strong>Capítulo 0 (Seção 0.1 – O estudo de algoritmos)</strong> à discussão histórica e conceitual da <strong>Aula 2: “Das máquinas de calcular às máquinas programáveis”</strong>.
            </p>
            <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800 flex flex-wrap gap-4">
              <span>Curso: <strong>Licenciatura em Computação</strong></span>
              <span>Disciplina: <strong>Introdução à Computação</strong></span>
            </div>
          </div>

          {/* 4 Phases Map */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              Mapeamento Conceitual das 4 Fases
            </h3>

            <div className="space-y-2.5">
              <div className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800">
                <span className="font-mono font-bold text-cyan-400 block mb-1">
                  Fase 1: O estudo de algoritmos
                </span>
                <p className="text-slate-300 text-xs">
                  O algoritmo como conjunto de passos ordenados, não ambíguos e executáveis. Anterioridade matemática; distinção entre algoritmo (método) e programa (representação para máquina); software (programas + algoritmos) versus hardware (máquina física).
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800">
                <span className="font-mono font-bold text-cyan-400 block mb-1">
                  Fase 2: Instruções e execução
                </span>
                <p className="text-slate-300 text-xs">
                  A assimetria entre criar a solução (requer dedução) e executar a solução (mero seguimento mecânico de instruções). O algoritmo como codificação do raciocínio; imperativo de ausência de ambiguidade para a comunicação precisa com a máquina.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800">
                <span className="font-mono font-bold text-cyan-400 block mb-1">
                  Fase 3: Do ábaco às máquinas de calcular
                </span>
                <p className="text-slate-300 text-xs">
                  O ábaco como ferramenta de auxílio onde o algoritmo reside no operador humano. A mecanização com Pascal (transporte decimal por engrenagens) e Leibniz (cilindro de passos). A distinção crucial: automatizar uma operação fixa não é programar.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800">
                <span className="font-mono font-bold text-cyan-400 block mb-1">
                  Fase 4: Da máquina de calcular à máquina programável
                </span>
                <p className="text-slate-300 text-xs">
                  O tear de Jacquard e a separação entre maquinário e instrução externa (cartões). A Máquina Analítica de Charles Babbage (separação moinho/memória). A visão visionária de Ada Lovelace sobre símbolos e o primeiro algoritmo para máquina. O princípio da programabilidade.
                </p>
              </div>
            </div>
          </div>

          {/* Axioms Box */}
          <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-200/90 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-cyan-300 block mb-0.5">Três Axiomas Centrais da Disciplina:</strong>
              <ul className="list-disc pl-4 space-y-1 text-slate-300">
                <li>Nem toda máquina que calcula é um computador.</li>
                <li>Nem toda máquina que automatiza uma operação é programável.</li>
                <li>Programar implica representar instruções capazes de orientar o comportamento da máquina.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/70 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-lg transition-colors cursor-pointer"
          >
            Entendido, fechar consulta
          </button>
        </div>
      </div>
    </div>
  );
};
