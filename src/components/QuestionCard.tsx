import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  BookOpen,
  MessageSquare,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Question } from '../data/quizData';

interface QuestionCardProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  selectedAnswer: ('A' | 'B' | 'C' | 'D') | null;
  isSubmitted: boolean;
  onSelectOption: (optionId: 'A' | 'B' | 'C' | 'D') => void;
  onSubmitAnswer: () => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  isSubmitted,
  onSelectOption,
  onSubmitAnswer,
  onNextQuestion,
  isLastQuestion,
}) => {
  const [showDetailedBreakdown, setShowDetailedBreakdown] = useState(false);

  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 animate-fade-in">
      {/* Top Question Tracker & Progress */}
      <div className="mb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-slate-800 text-cyan-400 font-mono font-bold border border-slate-700">
              Questão {question.id} de {totalQuestions}
            </span>
            <span className="px-2.5 py-1 rounded bg-cyan-950/70 text-cyan-300 font-medium border border-cyan-800/50">
              {question.levelLabel}
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-slate-400">
            <span className="text-[11px] uppercase tracking-wider text-orange-400/90 font-semibold">
              Eixo: {question.difficultyBadge}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 transition-all duration-300 ease-out"
            style={{
              width: `${((questionIndex + (isSubmitted ? 1 : 0.5)) / totalQuestions) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Main Question Card */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
        {/* Topic Header */}
        <div className="px-6 py-3.5 bg-slate-950/70 border-b border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Tema: <strong className="text-slate-200">{question.topic}</strong>
          </span>
          <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
            Seção 0.1 · p. 20-21 (PDF)
          </span>
        </div>

        {/* Question Statement */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-white leading-relaxed whitespace-pre-line">
              {question.prompt}
            </h2>
          </div>

          {/* Group Discussion Reminder banner prior to submitting */}
          {!isSubmitted && (
            <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-orange-400 shrink-0" />
                <span>
                  <strong className="text-slate-300">Momento de discussão:</strong> Conversem em equipe e formulem o argumento textual antes de confirmar.
                </span>
              </div>
            </div>
          )}

          {/* Options List */}
          <div className="space-y-3 pt-2">
            {question.options.map((option) => {
              const isSelected = selectedAnswer === option.id;
              const isOptionCorrect = option.id === question.correctAnswer;

              let optionStyle =
                'border-slate-800 bg-slate-950/50 hover:bg-slate-800/60 hover:border-slate-700 text-slate-200';
              let badgeStyle = 'bg-slate-800 text-slate-300 border-slate-700';

              if (!isSubmitted && isSelected) {
                optionStyle =
                  'border-cyan-500 bg-cyan-950/40 text-white shadow-md shadow-cyan-950/40 ring-1 ring-cyan-500/50';
                badgeStyle = 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold';
              } else if (isSubmitted) {
                if (isOptionCorrect) {
                  optionStyle =
                    'border-emerald-500 bg-emerald-950/40 text-emerald-100 ring-1 ring-emerald-500/40';
                  badgeStyle =
                    'bg-emerald-500 text-slate-950 border-emerald-400 font-bold';
                } else if (isSelected && !isOptionCorrect) {
                  optionStyle =
                    'border-rose-500/80 bg-rose-950/30 text-rose-200 ring-1 ring-rose-500/30';
                  badgeStyle =
                    'bg-rose-500 text-white border-rose-400 font-bold';
                } else {
                  optionStyle = 'border-slate-800/60 bg-slate-950/30 text-slate-400 opacity-70';
                  badgeStyle = 'bg-slate-900 text-slate-500 border-slate-800';
                }
              }

              return (
                <button
                  key={option.id}
                  type="button"
                  disabled={isSubmitted}
                  onClick={() => onSelectOption(option.id)}
                  className={`w-full p-4 rounded-xl border text-left flex items-start gap-3.5 transition-all cursor-pointer ${optionStyle} ${
                    isSubmitted ? 'cursor-default' : ''
                  }`}
                >
                  <span
                    className={`shrink-0 w-7 h-7 rounded-lg border flex items-center justify-center font-mono text-xs font-semibold ${badgeStyle}`}
                  >
                    {option.id}
                  </span>
                  <span className="text-sm leading-relaxed pt-0.5 font-normal">
                    {option.text}
                  </span>
                  {isSubmitted && isOptionCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 ml-auto shrink-0 mt-0.5" />
                  )}
                  {isSubmitted && isSelected && !isOptionCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400 ml-auto shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Button: Confirm Answer */}
          {!isSubmitted && (
            <div className="pt-4 flex items-center justify-end">
              <button
                type="button"
                disabled={!selectedAnswer}
                onClick={onSubmitAnswer}
                className={`px-6 py-3 rounded-xl font-semibold text-sm uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  selectedAnswer
                    ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20 active:translate-y-0.5'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/50'
                }`}
              >
                <span>Confirmar Resposta do Grupo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Conceptual Explanation Panel (Appears after submission) */}
          {isSubmitted && (
            <div className="mt-8 space-y-4 pt-6 border-t border-slate-800 animate-fade-in">
              {/* Feedback status banner */}
              <div
                className={`p-4 rounded-xl border flex items-start gap-3.5 ${
                  isCorrect
                    ? 'bg-emerald-950/40 border-emerald-800/80 text-emerald-200'
                    : 'bg-amber-950/30 border-amber-800/70 text-amber-200'
                }`}
              >
                {isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <HelpCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                )}
                <div className="space-y-1">
                  <div className="font-semibold text-sm">
                    {isCorrect
                      ? 'Excelente análise do Grupo! Resposta correta com base na Seção 0.1.'
                      : `Atenção à leitura: A resposta compatível com Brookshear é a alternativa (${question.correctAnswer}).`}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {question.explanation.coreReason}
                  </p>
                </div>
              </div>

              {/* Book Excerpt Citation Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <BookOpen className="w-3.5 h-3.5" />
                    Fundamentação Bibliográfica
                  </span>
                  <span className="text-slate-400">{question.explanation.pageRef}</span>
                </div>
                <blockquote className="text-xs sm:text-sm italic text-slate-300 border-l-2 border-cyan-500 pl-3 py-0.5">
                  {question.explanation.bookExcerpt}
                </blockquote>
              </div>

              {/* Group Discussion Prompt */}
              <div className="p-3.5 rounded-lg bg-orange-950/20 border border-orange-900/40 text-xs text-orange-200/90 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-orange-300">Ponto de reflexão para o Grupo 1:</strong>{' '}
                  {question.groupDiscussionTip}
                </div>
              </div>

              {/* Toggle detailed analysis of all alternatives */}
              <div>
                <button
                  type="button"
                  onClick={() => setShowDetailedBreakdown(!showDetailedBreakdown)}
                  className="w-full py-2.5 px-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs text-slate-400 hover:text-slate-200 flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span className="font-mono">
                    {showDetailedBreakdown
                      ? 'Ocultar justificativa detalhada de cada alternativa'
                      : 'Ver análise de cada alternativa (A, B, C e D)'}
                  </span>
                  {showDetailedBreakdown ? (
                    <ChevronUp className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  )}
                </button>

                {showDetailedBreakdown && (
                  <div className="mt-3 p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-3 text-xs animate-fade-in">
                    {(['A', 'B', 'C', 'D'] as const).map((letter) => (
                      <div
                        key={letter}
                        className={`p-2.5 rounded-lg border ${
                          letter === question.correctAnswer
                            ? 'bg-emerald-950/20 border-emerald-900/50 text-slate-200'
                            : 'bg-slate-900/50 border-slate-800/70 text-slate-400'
                        }`}
                      >
                        <strong
                          className={
                            letter === question.correctAnswer
                              ? 'text-emerald-400 font-mono mr-2'
                              : 'text-slate-300 font-mono mr-2'
                          }
                        >
                          Alternativa ({letter}):
                        </strong>
                        <span>{question.explanation.optionAnalysis[letter]}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Next Question / Finish Button */}
              <div className="pt-4 flex items-center justify-end">
                <button
                  type="button"
                  onClick={onNextQuestion}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-400 shadow-lg shadow-cyan-500/20 flex items-center gap-2 cursor-pointer transition-all transform hover:-translate-y-0.5"
                >
                  <span>
                    {isLastQuestion ? 'Avançar para Síntese Final' : 'Próxima Questão'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
