import React from 'react';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { PhaseQuestion } from '../data/gameData';
import { QuestionHistoricalVisual } from './QuestionHistoricalVisual';

interface PhaseQuizProps {
  phaseNumber: number;
  questions: PhaseQuestion[];
  currentQuestionIndex: number;
  userAnswer: ('A' | 'B' | 'C' | 'D') | null;
  isSubmitted: boolean;
  onSelectOption: (optionId: 'A' | 'B' | 'C' | 'D') => void;
  onSubmitAnswer: () => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
}

export const PhaseQuiz: React.FC<PhaseQuizProps> = ({
  phaseNumber,
  questions,
  currentQuestionIndex,
  userAnswer,
  isSubmitted,
  onSelectOption,
  onSubmitAnswer,
  onNextQuestion,
  isLastQuestion,
}) => {
  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = userAnswer === currentQuestion.correctAnswer;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 animate-fade-in space-y-6">
      {/* Top Question Tracker & Progress */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-slate-800 text-cyan-400 font-mono font-bold border border-slate-700">
              Fase {phaseNumber} · Questão {currentQuestionIndex + 1} de {questions.length}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-cyan-950/70 text-cyan-300 font-medium border border-cyan-800/50">
              {currentQuestion.levelBadge}
            </span>
          </div>

          <div className="text-slate-400 font-mono text-[11px] uppercase tracking-wider">
            Tema: <strong className="text-slate-200">{currentQuestion.topic}</strong>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 transition-all duration-300 ease-out"
            style={{
              width: `${((currentQuestionIndex + (isSubmitted ? 1 : 0.5)) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Main Question Card */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
        {/* Question Header */}
        <div className="px-6 py-3.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Análise e Julgamento Conceitual
          </span>
          <span className="text-slate-500">Aula 2 · Introdução à Computação</span>
        </div>

        {/* Question Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-white leading-relaxed whitespace-pre-line">
              {currentQuestion.prompt}
            </h2>
          </div>

          {/* Contextual Historical Illustration & Portrait */}
          <QuestionHistoricalVisual
            phaseNumber={phaseNumber}
            questionId={currentQuestion.id}
          />

          {/* Options */}
          <div className="space-y-3 pt-2">
            {currentQuestion.options.map((option) => {
              const isSelected = userAnswer === option.id;
              const isOptionCorrect = option.id === currentQuestion.correctAnswer;

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
                    'border-orange-500/80 bg-orange-950/30 text-orange-200 ring-1 ring-orange-500/30';
                  badgeStyle =
                    'bg-orange-500 text-slate-950 border-orange-400 font-bold';
                } else {
                  optionStyle = 'border-slate-800/60 bg-slate-950/30 text-slate-400 opacity-60';
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
                    <XCircle className="w-5 h-5 text-orange-400 ml-auto shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Submit Action prior to answer */}
          {!isSubmitted && (
            <div className="pt-4 flex items-center justify-end">
              <button
                type="button"
                disabled={!userAnswer}
                onClick={onSubmitAnswer}
                className={`px-6 py-3 rounded-xl font-semibold text-sm uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  userAnswer
                    ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20 active:translate-y-0.5'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/50'
                }`}
              >
                <span>Confirmar Resposta</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* CONCEPTUAL FEEDBACK (Mandatory formatting) */}
          {isSubmitted && (
            <div className="mt-8 space-y-4 pt-6 border-t border-slate-800 animate-fade-in">
              {/* Feedback status banner */}
              <div
                className={`p-4 rounded-xl border flex items-start gap-3.5 ${
                  isCorrect
                    ? 'bg-emerald-950/40 border-emerald-800/80 text-emerald-200'
                    : 'bg-orange-950/30 border-orange-800/70 text-orange-200'
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
                      ? currentQuestion.feedback.correctPraise
                      : currentQuestion.feedback.incorrectGuidance}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentQuestion.feedback.explanation}
                  </p>
                </div>
              </div>

              {/* Bibliographic / Conceptual Anchor */}
              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-xs font-mono text-cyan-400">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  Conceito-Chave:
                </span>
                <span className="text-slate-300">{currentQuestion.feedback.bookConcept}</span>
              </div>

              {/* Next Question / Advance to Synthesis */}
              <div className="pt-4 flex items-center justify-end">
                <button
                  type="button"
                  onClick={onNextQuestion}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-400 shadow-lg shadow-cyan-500/20 flex items-center gap-2 cursor-pointer transition-all transform hover:-translate-y-0.5"
                >
                  <span>
                    {isLastQuestion
                      ? `Concluir Fase ${phaseNumber} e Ver Síntese`
                      : 'Próxima Questão'}
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
