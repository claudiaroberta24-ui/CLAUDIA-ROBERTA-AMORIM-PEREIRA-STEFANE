import { useState } from 'react';
import { GAME_PHASES } from './data/gameData';
import { Header } from './components/Header';
import { WelcomeScreen } from './components/WelcomeScreen';
import { PhaseOpening } from './components/PhaseOpening';
import { PhaseQuiz } from './components/PhaseQuiz';
import { PhaseSynthesis } from './components/PhaseSynthesis';
import { FinalScreen } from './components/FinalScreen';
import { SourceReferenceModal } from './components/SourceReferenceModal';

type AppStage = 'welcome' | 'phase-opening' | 'phase-quiz' | 'phase-synthesis' | 'final-screen';

export default function App() {
  const [currentStage, setCurrentStage] = useState<AppStage>('welcome');
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState<number>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  // User answers tracked: phaseNumber -> questionId -> option
  const [userAnswers, setUserAnswers] = useState<Record<number, Record<number, 'A' | 'B' | 'C' | 'D'>>>({
    1: {},
    2: {},
    3: {},
    4: {},
  });

  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState<boolean>(false);
  const [completedPhases, setCompletedPhases] = useState<number[]>([]);
  const [isSourceModalOpen, setIsSourceModalOpen] = useState<boolean>(false);

  const currentPhase = GAME_PHASES[currentPhaseIndex];
  const currentQuestions = currentPhase ? currentPhase.questions : [];
  const currentQuestion = currentQuestions[currentQuestionIndex];

  // Start game from welcome screen
  const handleStartGame = () => {
    setCurrentPhaseIndex(0);
    setCurrentQuestionIndex(0);
    setIsQuestionSubmitted(false);
    setCurrentStage('phase-opening');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Direct selection from header or welcome screen
  const handleSelectPhaseDirectly = (phaseIdx: number) => {
    if (phaseIdx >= 4) {
      setCurrentStage('final-screen');
    } else {
      setCurrentPhaseIndex(phaseIdx);
      setCurrentQuestionIndex(0);
      setIsQuestionSubmitted(false);
      setCurrentStage('phase-opening');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Start quiz of current phase
  const handleStartPhaseQuiz = () => {
    setCurrentQuestionIndex(0);
    setIsQuestionSubmitted(false);
    setCurrentStage('phase-quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select option in current question
  const handleSelectOption = (optionId: 'A' | 'B' | 'C' | 'D') => {
    if (isQuestionSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentPhase.phaseNumber]: {
        ...(prev[currentPhase.phaseNumber] || {}),
        [currentQuestion.id]: optionId,
      },
    }));
  };

  // Submit answer
  const handleSubmitAnswer = () => {
    const currentAnswer = userAnswers[currentPhase.phaseNumber]?.[currentQuestion.id];
    if (!currentAnswer) return;
    setIsQuestionSubmitted(true);
  };

  // Next question or advance to phase synthesis
  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setIsQuestionSubmitted(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Mark phase as completed
      if (!completedPhases.includes(currentPhaseIndex)) {
        setCompletedPhases((prev) => [...prev, currentPhaseIndex]);
      }
      setCurrentStage('phase-synthesis');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Advance from Phase Synthesis to Next Phase or Final Screen
  const handleNextPhase = () => {
    if (currentPhaseIndex < GAME_PHASES.length - 1) {
      setCurrentPhaseIndex((prev) => prev + 1);
      setCurrentQuestionIndex(0);
      setIsQuestionSubmitted(false);
      setCurrentStage('phase-opening');
    } else {
      setCurrentStage('final-screen');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Restart the whole game
  const handleRestartGame = () => {
    setUserAnswers({ 1: {}, 2: {}, 3: {}, 4: {} });
    setCurrentPhaseIndex(0);
    setCurrentQuestionIndex(0);
    setIsQuestionSubmitted(false);
    setCompletedPhases([]);
    setCurrentStage('welcome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate scores per phase
  const calculatePhaseScore = (phaseNum: number) => {
    const phase = GAME_PHASES.find((p) => p.phaseNumber === phaseNum);
    if (!phase) return { correct: 0, total: 5 };
    const pAnswers = userAnswers[phaseNum] || {};
    let correct = 0;
    phase.questions.forEach((q) => {
      if (pAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return { correct, total: phase.questions.length };
  };

  const allScores: Record<number, { correct: number; total: number }> = {
    1: calculatePhaseScore(1),
    2: calculatePhaseScore(2),
    3: calculatePhaseScore(3),
    4: calculatePhaseScore(4),
  };

  return (
    <div className="min-h-screen bg-[#080c16] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Background ambient lighting and subtle tech grid */}
      <div className="fixed inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[380px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Navigation Header */}
      <Header
        currentStage={currentStage}
        currentPhaseIndex={currentPhaseIndex}
        onSelectPhase={handleSelectPhaseDirectly}
        onGoHome={() => setCurrentStage('welcome')}
        onOpenSourceModal={() => setIsSourceModalOpen(true)}
        completedPhases={completedPhases}
      />

      {/* Main Game Stage */}
      <main className="flex-1 relative z-10 flex flex-col justify-center">
        {currentStage === 'welcome' && (
          <WelcomeScreen
            onStartGame={handleStartGame}
            onOpenSourceModal={() => setIsSourceModalOpen(true)}
            onSelectPhaseDirectly={handleSelectPhaseDirectly}
          />
        )}

        {currentStage === 'phase-opening' && currentPhase && (
          <PhaseOpening
            phase={currentPhase}
            onStartQuiz={handleStartPhaseQuiz}
          />
        )}

        {currentStage === 'phase-quiz' && currentPhase && currentQuestion && (
          <PhaseQuiz
            phaseNumber={currentPhase.phaseNumber}
            questions={currentQuestions}
            currentQuestionIndex={currentQuestionIndex}
            userAnswer={userAnswers[currentPhase.phaseNumber]?.[currentQuestion.id] || null}
            isSubmitted={isQuestionSubmitted}
            onSelectOption={handleSelectOption}
            onSubmitAnswer={handleSubmitAnswer}
            onNextQuestion={handleNextQuestion}
            isLastQuestion={currentQuestionIndex === currentQuestions.length - 1}
          />
        )}

        {currentStage === 'phase-synthesis' && currentPhase && (
          <PhaseSynthesis
            phase={currentPhase}
            score={allScores[currentPhase.phaseNumber]}
            onNextPhase={handleNextPhase}
            isLastPhase={currentPhaseIndex === GAME_PHASES.length - 1}
          />
        )}

        {currentStage === 'final-screen' && (
          <FinalScreen
            scores={allScores}
            onRestartGame={handleRestartGame}
            onReviewPhase={handleSelectPhaseDirectly}
            onOpenSourceModal={() => setIsSourceModalOpen(true)}
          />
        )}
      </main>

      {/* Theoretical Reference Modal */}
      <SourceReferenceModal
        isOpen={isSourceModalOpen}
        onClose={() => setIsSourceModalOpen(false)}
      />

      {/* Minimal Academic Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-4 px-4 text-center text-xs text-slate-400 font-mono relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            Introdução à Computação · Aula 2 · Licenciatura em Computação
          </span>
          <span className="text-cyan-400">
            Das máquinas de calcular às máquinas programáveis
          </span>
        </div>
      </footer>
    </div>
  );
}
