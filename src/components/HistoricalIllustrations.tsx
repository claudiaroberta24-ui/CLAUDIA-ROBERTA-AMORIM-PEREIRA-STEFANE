import React, { useState, useEffect } from 'react';
import { Cog, ArrowRight, Sparkles, CheckCircle2, AlertTriangle, Layers, Shuffle } from 'lucide-react';

// ============================================================================
// RETRATOS HISTÓRICOS ESTILIZADOS E ACADÊMICOS (SVG de alta fidelidade)
// ============================================================================

export interface HistoricalFigureProps {
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

// 1. BLAISE PASCAL (1623–1662)
export const PascalPortrait: React.FC<HistoricalFigureProps> = ({ size = 'md', showLabel = true }) => {
  const dim = size === 'sm' ? 'w-16 h-16' : size === 'lg' ? 'w-32 h-32' : 'w-24 h-24';
  return (
    <div className="flex flex-col items-center text-center group">
      <div className={`relative ${dim} rounded-2xl p-1 bg-gradient-to-b from-cyan-500/40 via-slate-800 to-slate-950 border border-cyan-500/50 shadow-lg shadow-cyan-950/50 overflow-hidden`}>
        <svg viewBox="0 0 100 100" className="w-full h-full rounded-xl bg-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Fundo com aura clássica */}
          <radialGradient id="pascalGlow" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#083344" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>
          <rect width="100" height="100" fill="url(#pascalGlow)" />
          
          {/* Cabelo barroco longo francês (castanho escuro / grafite) */}
          <path d="M24 38C22 48 22 62 26 72C28 66 30 52 30 46C30 34 40 22 52 22C64 22 72 32 72 44C72 52 74 64 76 72C80 62 80 48 76 38C72 26 62 18 50 18C38 18 28 26 24 38Z" fill="#334155" />
          <path d="M22 50C20 62 22 75 28 82C29 76 28 64 26 55Z" fill="#1e293b" />
          <path d="M78 50C80 62 78 75 72 82C71 76 72 64 74 55Z" fill="#1e293b" />
          
          {/* Rosto */}
          <path d="M35 40C35 32 42 28 50 28C58 28 65 32 65 40C65 52 62 64 50 66C38 64 35 52 35 40Z" fill="#fed7aa" />
          {/* Nariz aquilino característico de Pascal */}
          <path d="M50 36L48 48L52 50" stroke="#ca8a04" strokeWidth="1.5" strokeLinecap="round" />
          {/* Olhos pensativos */}
          <circle cx="43" cy="38" r="2" fill="#0f172a" />
          <circle cx="57" cy="38" r="2" fill="#0f172a" />
          <path d="M40 34Q43 32 46 34" stroke="#78350f" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M54 34Q57 32 60 34" stroke="#78350f" strokeWidth="1.2" strokeLinecap="round" />
          {/* Boca séria e filosófica */}
          <path d="M46 56Q50 58 54 56" stroke="#9a3412" strokeWidth="1.2" strokeLinecap="round" />
          
          {/* Colarinho branco clerical/jansenista típico de Pascal */}
          <path d="M40 68L34 78L44 80L50 72L56 80L66 78L60 68L50 71Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
          
          {/* Manto acadêmico preto */}
          <path d="M34 78L18 96C32 99 68 99 82 96L66 78C60 84 40 84 34 78Z" fill="#090d16" stroke="#334155" strokeWidth="1" />
        </svg>
      </div>
      {showLabel && (
        <div className="mt-2 text-center">
          <span className="text-xs font-bold text-slate-200 block font-sans">Blaise Pascal</span>
          <span className="text-[10px] text-cyan-400 font-mono">1623 – 1662</span>
        </div>
      )}
    </div>
  );
};

// 2. GOTTFRIED WILHELM LEIBNIZ (1646–1716)
export const LeibnizPortrait: React.FC<HistoricalFigureProps> = ({ size = 'md', showLabel = true }) => {
  const dim = size === 'sm' ? 'w-16 h-16' : size === 'lg' ? 'w-32 h-32' : 'w-24 h-24';
  return (
    <div className="flex flex-col items-center text-center group">
      <div className={`relative ${dim} rounded-2xl p-1 bg-gradient-to-b from-cyan-500/40 via-slate-800 to-slate-950 border border-cyan-500/50 shadow-lg shadow-cyan-950/50 overflow-hidden`}>
        <svg viewBox="0 0 100 100" className="w-full h-full rounded-xl bg-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <radialGradient id="leibnizGlow" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>
          <rect width="100" height="100" fill="url(#leibnizGlow)" />
          
          {/* Peruca monumental barroca alemã (volumosa, cheia de cachos) */}
          <path d="M18 40C16 28 26 14 50 14C74 14 84 28 82 40C86 52 86 68 80 84C76 76 74 62 72 52C70 38 64 26 50 26C36 26 30 38 28 52C26 62 24 76 20 84C14 68 14 52 18 40Z" fill="#475569" />
          <circle cx="22" cy="46" r="6" fill="#334155" />
          <circle cx="24" cy="58" r="6" fill="#334155" />
          <circle cx="23" cy="70" r="5" fill="#1e293b" />
          <circle cx="78" cy="46" r="6" fill="#334155" />
          <circle cx="76" cy="58" r="6" fill="#334155" />
          <circle cx="77" cy="70" r="5" fill="#1e293b" />
          
          {/* Rosto erudito */}
          <path d="M36 38C36 30 42 26 50 26C58 26 64 30 64 38C64 50 62 62 50 64C38 62 36 50 36 38Z" fill="#fed7aa" />
          <circle cx="44" cy="38" r="2" fill="#0f172a" />
          <circle cx="56" cy="38" r="2" fill="#0f172a" />
          <path d="M50 36L50 48L53 49" stroke="#ca8a04" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M46 55Q50 56 54 55" stroke="#9a3412" strokeWidth="1.2" strokeLinecap="round" />
          
          {/* Babado de renda barroco no pescoço */}
          <path d="M42 66C38 72 44 78 50 82C56 78 62 72 58 66C54 68 46 68 42 66Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
          <path d="M46 72C42 76 46 80 50 82C54 80 58 76 54 72Z" fill="#e2e8f0" />
          
          {/* Casaca nobre */}
          <path d="M32 76L16 96C32 99 68 99 84 96L68 76C62 82 38 82 32 76Z" fill="#0f172a" stroke="#334155" strokeWidth="1" />
        </svg>
      </div>
      {showLabel && (
        <div className="mt-2 text-center">
          <span className="text-xs font-bold text-slate-200 block font-sans">G. W. Leibniz</span>
          <span className="text-[10px] text-cyan-400 font-mono">1646 – 1716</span>
        </div>
      )}
    </div>
  );
};

// 3. CHARLES BABBAGE (1791–1871)
export const BabbagePortrait: React.FC<HistoricalFigureProps> = ({ size = 'md', showLabel = true }) => {
  const dim = size === 'sm' ? 'w-16 h-16' : size === 'lg' ? 'w-32 h-32' : 'w-24 h-24';
  return (
    <div className="flex flex-col items-center text-center group">
      <div className={`relative ${dim} rounded-2xl p-1 bg-gradient-to-b from-orange-500/40 via-slate-800 to-slate-950 border border-orange-500/50 shadow-lg shadow-orange-950/50 overflow-hidden`}>
        <svg viewBox="0 0 100 100" className="w-full h-full rounded-xl bg-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <radialGradient id="babbageGlow" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#431407" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>
          <rect width="100" height="100" fill="url(#babbageGlow)" />
          
          {/* Cabelo grisalho vitoriano revolto */}
          <path d="M26 36C26 22 36 16 50 16C64 16 74 22 74 36C78 44 76 54 74 60C70 54 70 42 66 32C62 26 40 26 34 32C30 42 30 54 26 60C24 54 22 44 26 36Z" fill="#94a3b8" />
          {/* Costeletas vitorianas proeminentes */}
          <path d="M28 44C26 50 28 62 34 68C33 60 32 52 32 46Z" fill="#64748b" />
          <path d="M72 44C74 50 72 62 66 68C67 60 68 52 68 46Z" fill="#64748b" />
          
          {/* Rosto enérgico e determinado */}
          <path d="M35 34C35 26 42 22 50 22C58 22 65 26 65 34C65 52 62 64 50 66C38 64 35 52 35 34Z" fill="#fed7aa" />
          {/* Sobrancelhas franzidas de inventor */}
          <path d="M40 32L46 34" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <path d="M54 34L60 32" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <circle cx="43" cy="37" r="2" fill="#0f172a" />
          <circle cx="57" cy="37" r="2" fill="#0f172a" />
          <path d="M50 36L48 48L53 49" stroke="#ca8a04" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M46 56Q50 57 54 56" stroke="#9a3412" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Colarinho alto vitoriano com gravata plastron */}
          <path d="M42 66L36 78L50 84L64 78L58 66L50 72Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
          <path d="M46 72L50 82L54 72Z" fill="#0f172a" />
          
          {/* Casaco de fraque escuro */}
          <path d="M32 78L14 96C32 99 68 99 86 96L68 78C60 84 40 84 32 78Z" fill="#090d16" stroke="#334155" strokeWidth="1" />
        </svg>
      </div>
      {showLabel && (
        <div className="mt-2 text-center">
          <span className="text-xs font-bold text-slate-200 block font-sans">Charles Babbage</span>
          <span className="text-[10px] text-orange-400 font-mono">1791 – 1871</span>
        </div>
      )}
    </div>
  );
};

// 4. ADA LOVELACE (1815–1852)
export const AdaLovelacePortrait: React.FC<HistoricalFigureProps> = ({ size = 'md', showLabel = true }) => {
  const dim = size === 'sm' ? 'w-16 h-16' : size === 'lg' ? 'w-32 h-32' : 'w-24 h-24';
  return (
    <div className="flex flex-col items-center text-center group">
      <div className={`relative ${dim} rounded-2xl p-1 bg-gradient-to-b from-cyan-400/50 via-slate-800 to-slate-950 border border-cyan-400/60 shadow-lg shadow-cyan-950/60 overflow-hidden`}>
        <svg viewBox="0 0 100 100" className="w-full h-full rounded-xl bg-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <radialGradient id="adaGlow" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#164e63" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>
          <rect width="100" height="100" fill="url(#adaGlow)" />
          
          {/* Penteado vitoriano clássico com trança enrolada nas orelhas */}
          <path d="M30 32C30 18 40 14 50 14C60 14 70 18 70 32C76 34 80 44 80 54C80 62 76 68 70 66C68 54 68 40 64 32C60 26 40 26 36 32C32 40 32 54 30 66C24 68 20 62 20 54C20 44 24 34 30 32Z" fill="#1e1b4b" />
          {/* Enfeite / tiara de flores delicadas vitoriana */}
          <circle cx="28" cy="40" r="3" fill="#f43f5e" />
          <circle cx="72" cy="40" r="3" fill="#f43f5e" />
          <circle cx="50" cy="18" r="2.5" fill="#f43f5e" />
          <circle cx="44" cy="19" r="2" fill="#fbbf24" />
          <circle cx="56" cy="19" r="2" fill="#fbbf24" />
          
          {/* Rosto nobre e expressivo */}
          <path d="M36 34C36 26 42 22 50 22C58 22 64 26 64 34C64 50 62 62 50 64C38 62 36 50 36 34Z" fill="#ffedd5" />
          {/* Olhos perspicazes da primeira programadora */}
          <circle cx="43" cy="38" r="2" fill="#0f172a" />
          <circle cx="57" cy="38" r="2" fill="#0f172a" />
          <path d="M40 34Q43 33 46 34" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M54 34Q57 33 60 34" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M50 36L49 46L52 47" stroke="#ca8a04" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M46 54Q50 56 54 54" stroke="#e11d48" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Colar fino e decote vitoriano elegante */}
          <path d="M44 68Q50 72 56 68" stroke="#fbbf24" strokeWidth="1.5" />
          <circle cx="50" cy="71" r="1.5" fill="#38bdf8" />
          
          {/* Vestido de cetim oitocentista azul-marinho e renda */}
          <path d="M34 76L16 96C32 99 68 99 84 96L66 76C60 80 40 80 34 76Z" fill="#0369a1" stroke="#0284c7" strokeWidth="1" />
          <path d="M36 76Q50 82 64 76" stroke="#f8fafc" strokeWidth="2" strokeDasharray="2 2" />
        </svg>
      </div>
      {showLabel && (
        <div className="mt-2 text-center">
          <span className="text-xs font-bold text-slate-200 block font-sans">Ada Lovelace</span>
          <span className="text-[10px] text-cyan-300 font-mono">1815 – 1852</span>
        </div>
      )}
    </div>
  );
};

// 5. JOSEPH-MARIE JACQUARD (1752–1834)
export const JacquardPortrait: React.FC<HistoricalFigureProps> = ({ size = 'md', showLabel = true }) => {
  const dim = size === 'sm' ? 'w-16 h-16' : size === 'lg' ? 'w-32 h-32' : 'w-24 h-24';
  return (
    <div className="flex flex-col items-center text-center group">
      <div className={`relative ${dim} rounded-2xl p-1 bg-gradient-to-b from-orange-400/40 via-slate-800 to-slate-950 border border-orange-400/50 shadow-lg shadow-orange-950/50 overflow-hidden`}>
        <svg viewBox="0 0 100 100" className="w-full h-full rounded-xl bg-slate-900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <radialGradient id="jacquardGlow" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#451a03" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>
          <rect width="100" height="100" fill="url(#jacquardGlow)" />
          
          {/* Cabelo branco penteado para trás estilo império francês */}
          <path d="M30 36C30 22 40 18 50 18C60 18 70 22 70 36C74 46 72 58 68 64C66 56 66 42 62 32C58 26 42 26 38 32C34 42 34 56 32 64C28 58 26 46 30 36Z" fill="#cbd5e1" />
          
          {/* Rosto do tecelão e inventor de Lyon */}
          <path d="M36 34C36 26 42 22 50 22C58 22 64 26 64 34C64 52 62 64 50 66C38 64 36 52 36 34Z" fill="#fed7aa" />
          <circle cx="43" cy="38" r="2" fill="#0f172a" />
          <circle cx="57" cy="38" r="2" fill="#0f172a" />
          <path d="M50 36L48 48L52 49" stroke="#ca8a04" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M46 56Q50 57 54 56" stroke="#9a3412" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Camisa branca e lenço de pescoço francês */}
          <path d="M42 68L36 78L50 84L64 78L58 68L50 72Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
          
          {/* Colete e paletó de alfaiataria */}
          <path d="M32 78L14 96C32 99 68 99 86 96L68 78C62 82 38 82 32 78Z" fill="#1c1917" stroke="#44403c" strokeWidth="1" />
        </svg>
      </div>
      {showLabel && (
        <div className="mt-2 text-center">
          <span className="text-xs font-bold text-slate-200 block font-sans">J.-M. Jacquard</span>
          <span className="text-[10px] text-orange-300 font-mono">1752 – 1834</span>
        </div>
      )}
    </div>
  );
};


// ============================================================================
// ILUSTRAÇÕES DE ARTEFATOS HISTÓRICOS COM ANIMAÇÕES PEDAGÓGICAS
// ============================================================================

// 1. ÁBACO TRADICIONAL (Com contas deslizando discretamente + operador humano)
export const AbacusIllustration: React.FC<{ interactive?: boolean; caption?: string }> = ({
  interactive = true,
  caption = 'Ábaco: O algoritmo e as decisões residem integralmente no operador humano.',
}) => {
  const [beadPositions, setBeadPositions] = useState<number[]>([1, 0, 2, 1, 3]);

  // Animação pedagógica de deslizamento sutil de contas
  useEffect(() => {
    const interval = setInterval(() => {
      setBeadPositions((prev) =>
        prev.map((val) => (val >= 3 ? 0 : val + 1))
      );
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 shadow-md space-y-3">
      <div className="flex items-center justify-between text-xs font-mono text-cyan-400 border-b border-slate-800/80 pb-2">
        <span className="flex items-center gap-1.5 font-bold">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          ÁBACO CLÁSSICO (Suporte à Memória)
        </span>
        <span className="text-[11px] text-slate-400">Ação Manual do Operador</span>
      </div>

      <div className="relative p-3 rounded-lg bg-slate-900 border-2 border-amber-900/60 shadow-inner overflow-hidden">
        {/* Moldura de madeira nobre do ábaco */}
        <div className="absolute inset-0 border-4 border-amber-950/80 pointer-events-none rounded-md" />

        {/* Barra divisória horizontal (trave superior e inferior) */}
        <div className="relative flex justify-around py-1">
          {/* 5 hastes metálicas */}
          {beadPositions.map((pos, colIdx) => (
            <div key={colIdx} className="flex flex-col items-center relative w-12">
              {/* Haste metálica vertical */}
              <div className="absolute top-0 bottom-0 w-1 bg-slate-600 rounded-full shadow-inner" />

              {/* Seção Superior (Contas Superiores - Quinas) */}
              <div className="h-9 w-full flex items-center justify-center z-10">
                <div
                  className={`w-7 h-3.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-700 shadow-md border border-amber-300 transition-all duration-700 ${
                    pos % 2 === 1 ? 'translate-y-2' : '-translate-y-1'
                  }`}
                />
              </div>

              {/* Trave divisória de madeira */}
              <div className="w-full h-2 bg-amber-950 border-y border-amber-800 z-20 shadow-sm" />

              {/* Seção Inferior (Contas Inferiores - Unidades) */}
              <div className="h-16 w-full flex flex-col justify-end items-center gap-1 py-1 z-10">
                {[0, 1, 2, 3].map((beadIdx) => {
                  const isShifted = pos > beadIdx;
                  return (
                    <div
                      key={beadIdx}
                      className={`w-7 h-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600 shadow-md border border-amber-200 transition-all duration-500 ${
                        isShifted ? '-translate-y-1 bg-cyan-400' : 'translate-y-0'
                      }`}
                    />
                  );
                })}
              </div>

              <span className="text-[9px] font-mono text-slate-400 mt-1">Col {colIdx + 1}</span>
            </div>
          ))}
        </div>

        {/* Indicador pedagógico do Operador Humano */}
        <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-300">
          <div className="flex items-center gap-1.5 text-cyan-300 font-mono">
            <span>✋ Mão do Operador Humano move as contas</span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono">Sem engrenagens</span>
        </div>
      </div>

      <p className="text-[11px] text-slate-400 leading-relaxed italic">
        {caption}
      </p>
    </div>
  );
};


// 2. PASCALINA (Com disco rotativo, engrenagens e transporte decimal mecânico "vai-um")
export const PascalinaIllustration: React.FC<{ interactive?: boolean; caption?: string }> = ({
  caption = 'Pascalina (1642): Engrenagens executam mecanicamente o transporte decimal ("vai-um").',
}) => {
  const [dialStep, setDialStep] = useState<number>(0);
  const [isRotating, setIsRotating] = useState<boolean>(true);

  useEffect(() => {
    if (!isRotating) return;
    const interval = setInterval(() => {
      setDialStep((prev) => (prev + 1) % 10);
    }, 1800);
    return () => clearInterval(interval);
  }, [isRotating]);

  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 shadow-md space-y-3">
      <div className="flex items-center justify-between text-xs font-mono text-orange-400 border-b border-slate-800/80 pb-2">
        <span className="flex items-center gap-1.5 font-bold">
          <Cog className="w-4 h-4 text-orange-400 animate-spin [animation-duration:8s]" />
          PASCALINA DE BLAISE PASCAL (1642)
        </span>
        <span className="text-[11px] text-slate-400">Transporte Mecânico</span>
      </div>

      {/* Caixa de latão dourado clássica da Pascalina */}
      <div className="p-4 rounded-xl bg-gradient-to-b from-amber-950/60 via-slate-900 to-slate-950 border-2 border-amber-600/60 shadow-xl space-y-3">
        {/* Janelas superiores de visualização dos dígitos calculados */}
        <div className="flex items-center justify-around py-1.5 px-3 bg-slate-950 rounded-lg border border-amber-500/40">
          <span className="text-[10px] font-mono text-amber-400 uppercase">Visor de Dígitos:</span>
          <div className="flex gap-3 font-mono font-bold text-amber-300">
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-amber-600/50">0</span>
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-amber-600/50">
              {dialStep === 9 ? '1' : '0'}
            </span>
            <span className="px-2 py-0.5 rounded bg-amber-500/20 border border-amber-400 text-amber-200">
              {dialStep}
            </span>
          </div>
        </div>

        {/* Discos circulares de entrada operados por estilete */}
        <div className="flex items-center justify-around py-2">
          {/* Roda das Centenas */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-dashed border-amber-500/60 flex items-center justify-center font-mono text-xs text-amber-400/80">
              <Cog className="w-6 h-6 text-amber-600" />
            </div>
            <span className="text-[9px] font-mono text-slate-400 mt-1">Centenas</span>
          </div>

          {/* Roda das Dezenas (acionada pela catraca) */}
          <div className="flex flex-col items-center">
            <div className={`w-14 h-14 rounded-full border-2 border-amber-500 flex items-center justify-center font-mono text-xs font-bold text-amber-300 bg-amber-950/40 transition-transform duration-500 ${dialStep === 9 ? 'rotate-36' : ''}`}>
              <Cog className="w-8 h-8 text-amber-500" />
            </div>
            <span className="text-[9px] font-mono text-slate-400 mt-1">Dezenas (+1)</span>
          </div>

          {/* Roda das Unidades (girando) */}
          <div className="flex flex-col items-center">
            <div
              style={{ transform: `rotate(${dialStep * 36}deg)` }}
              className="w-16 h-16 rounded-full border-2 border-amber-400 flex items-center justify-center font-mono text-sm font-extrabold text-amber-200 bg-gradient-to-br from-amber-600/30 to-amber-950 transition-transform duration-500 shadow-md ring-2 ring-amber-500/30"
            >
              <span className="absolute -top-1 font-mono text-[9px] text-amber-300">▲</span>
              <Cog className="w-9 h-9 text-amber-400" />
            </div>
            <span className="text-[9px] font-mono text-orange-400 font-bold mt-1">Unidades</span>
          </div>
        </div>

        {/* Catraca de transporte decimal (Le Sautoir) */}
        <div className="p-2.5 rounded-lg bg-slate-950/80 border border-orange-500/40 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-orange-300 font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
            Mecanismo "Le Sautoir": Transporte decimal por gravidade
          </div>
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="text-[10px] font-mono text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800 cursor-pointer"
          >
            {isRotating ? 'Pausar' : 'Girar'}
          </button>
        </div>
      </div>

      <p className="text-[11px] text-slate-400 leading-relaxed italic">
        {caption}
      </p>
    </div>
  );
};


// 3. MÁQUINA DE LEIBNIZ (Stepped Reckoner com cilindro de passos)
export const LeibnizMachineIllustration: React.FC<{ caption?: string }> = ({
  caption = 'Máquina de Leibniz (1671): Cilindro de passos escalonados para mecanizar a multiplicação e divisão.',
}) => {
  const [crankTurn, setCrankTurn] = useState<number>(0);

  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 shadow-md space-y-3">
      <div className="flex items-center justify-between text-xs font-mono text-cyan-400 border-b border-slate-800/80 pb-2">
        <span className="flex items-center gap-1.5 font-bold">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          MÁQUINA DE LEIBNIZ (Stepped Reckoner - 1671)
        </span>
        <span className="text-[11px] text-slate-400">Cilindro de Passos</span>
      </div>

      <div className="p-4 rounded-xl bg-slate-900 border border-slate-700/80 space-y-3">
        {/* Visual do cilindro escalonado (dentes de comprimentos variados de 1 a 9) */}
        <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-slate-950 border border-cyan-800/40">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">
              Tambor Escalonado (Roda de Leibniz)
            </span>
            <p className="text-xs text-slate-300">
              9 dentes com comprimentos progressivos: cada volta da manivela engata o número de dentes configurado.
            </p>
          </div>

          {/* Ilustração do cilindro com dentes */}
          <div
            onClick={() => setCrankTurn((prev) => prev + 1)}
            className="w-24 h-14 rounded-lg bg-gradient-to-r from-amber-700 via-amber-500 to-amber-800 border border-amber-300 flex flex-col justify-around px-1 cursor-pointer shadow-md group shrink-0"
            title="Clique para girar a manivela"
          >
            {[9, 7, 5, 3].map((len, idx) => (
              <div
                key={idx}
                style={{ width: `${len * 10}%` }}
                className="h-1.5 bg-slate-950 rounded-sm shadow-sm group-hover:bg-cyan-400 transition-colors"
              />
            ))}
          </div>
        </div>

        {/* Manivela e Carro Deslizante */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
            <strong className="text-slate-200 block font-mono text-[11px]">Carro Móvel:</strong>
            <span className="text-slate-400 text-[11px]">Desloca as ordens de grandeza (unidades, dezenas, centenas) para a multiplicação.</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
            <strong className="text-slate-200 block font-mono text-[11px]">Manivela de Giro:</strong>
            <span className="text-slate-400 text-[11px]">Somas sucessivas mecanizadas acionadas manualmente pelo operador.</span>
          </div>
        </div>
      </div>

      <p className="text-[11px] text-slate-400 leading-relaxed italic">
        {caption}
      </p>
    </div>
  );
};


// 4. MÁQUINA ANALÍTICA & MÁQUINA DAS DIFERENÇAS (Babbage)
export const BabbageMachinesIllustration: React.FC<{ type?: 'analytical' | 'difference'; caption?: string }> = ({
  type = 'analytical',
  caption,
}) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 shadow-md space-y-3">
      <div className="flex items-center justify-between text-xs font-mono text-orange-400 border-b border-slate-800/80 pb-2">
        <span className="flex items-center gap-1.5 font-bold">
          <Cog className="w-4 h-4 text-orange-400 animate-spin [animation-duration:12s]" />
          {type === 'analytical' ? 'MÁQUINA ANALÍTICA (Charles Babbage)' : 'MÁQUINA DAS DIFERENÇAS (Babbage)'}
        </span>
        <span className="text-[11px] text-cyan-400 font-mono">
          {type === 'analytical' ? 'Uso Geral & Programável' : 'Tabelas de Polinômios'}
        </span>
      </div>

      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
        {type === 'analytical' ? (
          <div className="space-y-3">
            {/* Diagrama da Arquitetura de Babbage: Moinho (Mill), Armazém (Store), Entrada (Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-lg bg-slate-950 border border-orange-500/40">
                <span className="text-[10px] font-mono text-orange-400 uppercase font-bold">Entrada</span>
                <h4 className="text-xs font-bold text-white mt-0.5">Leitor de Cartões</h4>
                <p className="text-[10px] text-slate-400 mt-1">Cartões de operação e variáveis inspirados em Jacquard.</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 border border-cyan-500/50">
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">Processador</span>
                <h4 className="text-xs font-bold text-white mt-0.5">O Moinho ("The Mill")</h4>
                <p className="text-[10px] text-slate-400 mt-1">Centenas de colunas de engrenagens para efetuar as 4 operações.</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 border border-emerald-500/40">
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">Memória</span>
                <h4 className="text-xs font-bold text-white mt-0.5">O Armazém ("The Store")</h4>
                <p className="text-[10px] text-slate-400 mt-1">Capacidade teórica para 1.000 números de 50 dígitos decimais.</p>
              </div>
            </div>

            <div className="p-2.5 rounded bg-cyan-950/30 border border-cyan-800/40 text-[11px] text-cyan-200">
              <strong>Antecipação Genial:</strong> Babbage concebeu a separação clássica entre Processamento (CPU) e Memória (RAM) 100 anos antes do computador eletrônico!
            </div>
          </div>
        ) : (
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
            <p>
              A <strong>Máquina das Diferenças</strong> foi desenhada por Babbage para calcular e tabular funções polinomiais pelo método das diferenças finitas, eliminando os erros humanos das tabelas de navegação.
            </p>
            <p className="text-slate-400 text-[11px]">
              Embora complexa, era de propósito fixo: calculava polinômios, mas não aceitava programas variáveis externos.
            </p>
          </div>
        )}
      </div>

      <p className="text-[11px] text-slate-400 leading-relaxed italic">
        {caption ||
          (type === 'analytical'
            ? 'A Máquina Analítica separava a unidade de cálculo da memória e recebia instruções de cartões perfurados.'
            : 'A Máquina das Diferenças automatizava o cálculo de polinômios sem capacidade de programação geral.')}
      </p>
    </div>
  );
};


// 5. TEAR DE JACQUARD & CARTÕES PERFURADOS COM TROCA INTERATIVA
export const JacquardLoomIllustration: React.FC<{ caption?: string }> = ({
  caption = 'Tear de Jacquard (1804): A corrente de cartões perfurados determina o desenho do tecido.',
}) => {
  const [activePattern, setActivePattern] = useState<'geometric' | 'floral'>('geometric');

  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 shadow-md space-y-3">
      <div className="flex items-center justify-between text-xs font-mono text-orange-400 border-b border-slate-800/80 pb-2">
        <span className="flex items-center gap-1.5 font-bold">
          <Layers className="w-4 h-4 text-orange-400" />
          TEAR DE JACQUARD & CARTÕES PERFURADOS (1804)
        </span>
        <span className="text-[11px] text-slate-400">Controle por Instrução Externa</span>
      </div>

      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
        {/* Seletor de Cartão Perfurado */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-mono text-slate-300">Trocar Fita de Cartões:</span>
          <div className="flex gap-2">
            <button
              onClick={() => setActivePattern('geometric')}
              className={`px-3 py-1 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                activePattern === 'geometric'
                  ? 'bg-orange-500 text-slate-950 shadow-md'
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              Cartão A (Padrão Xadrez)
            </button>
            <button
              onClick={() => setActivePattern('floral')}
              className={`px-3 py-1 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                activePattern === 'floral'
                  ? 'bg-cyan-400 text-slate-950 shadow-md'
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              Cartão B (Padrão Floral)
            </button>
          </div>
        </div>

        {/* Visualização: Cartão Perfurado sendo lido -> Tecido sendo produzido */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          {/* Cartão perfurado */}
          <div className="p-3.5 rounded-lg bg-slate-950 border border-orange-500/40 text-center space-y-2">
            <div className="text-[10px] font-mono text-orange-400 font-bold uppercase">
              {activePattern === 'geometric' ? 'FITA DE CARTÕES A (Furos Alternados)' : 'FITA DE CARTÕES B (Furos Florais)'}
            </div>
            <div className="p-2 rounded bg-amber-950/20 border border-dashed border-amber-600/50 flex flex-col items-center gap-1.5">
              <div className="grid grid-cols-8 gap-1.5 py-1">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      (activePattern === 'geometric' ? (i + Math.floor(i / 8)) % 2 === 0 : i % 3 === 0 || i % 5 === 0)
                        ? 'bg-orange-400 shadow-sm shadow-orange-400'
                        : 'bg-slate-800'
                    }`}
                  />
                ))}
              </div>
            </div>
            <span className="text-[10px] text-slate-400">Agulhas passam nos furos e levantam fios específicos</span>
          </div>

          {/* Tecido resultante */}
          <div className="p-3.5 rounded-lg bg-slate-950 border border-cyan-500/40 text-center space-y-2">
            <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase">
              Tecido Produzido no Tear
            </div>
            <div className="h-16 rounded-lg overflow-hidden border border-slate-700 flex items-center justify-center relative">
              {activePattern === 'geometric' ? (
                <div className="w-full h-full bg-[repeating-conic-gradient(#083344_0%_25%,#0f172a_0%_50%)] [background-size:16px_16px] animate-fade-in" />
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-cyan-900 via-sky-800 to-indigo-900 flex items-center justify-center animate-fade-in">
                  <span className="text-xs font-mono text-cyan-200">✿ Padrão Damasco Floral ✿</span>
                </div>
              )}
            </div>
            <span className="text-[10px] text-emerald-400 font-mono">Mesmo tear, tecidos totalmente distintos!</span>
          </div>
        </div>
      </div>

      <p className="text-[11px] text-slate-400 leading-relaxed italic">
        {caption}
      </p>
    </div>
  );
};


// 6. ANIMAÇÃO CONCEITUAL DE PROGRAMABILIDADE (Exigida na Alteração 5):
// CARTÃO A → INSTRUÇÕES A → RESULTADO A
// depois:
// CARTÃO B → INSTRUÇÕES B → RESULTADO B
export const ProgrammabilityConceptAnimation: React.FC = () => {
  const [activeCartridge, setActiveCartridge] = useState<'A' | 'B'>('A');

  return (
    <div className="p-5 rounded-2xl bg-slate-950 border-2 border-cyan-500/50 shadow-2xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          Animação Conceitual: A Essência da Programabilidade
        </div>
        <button
          onClick={() => setActiveCartridge(activeCartridge === 'A' ? 'B' : 'A')}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 cursor-pointer shadow-sm transition-all"
        >
          <Shuffle className="w-3.5 h-3.5" />
          Trocar para Cartão {activeCartridge === 'A' ? 'B' : 'A'}
        </button>
      </div>

      {/* Sequência Visual Pedagógica */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Caixa 1: O Cartão */}
        <div
          className={`p-4 rounded-xl border text-center transition-all duration-500 ${
            activeCartridge === 'A'
              ? 'bg-amber-950/30 border-amber-500/60 text-amber-200'
              : 'bg-cyan-950/30 border-cyan-500/60 text-cyan-200'
          }`}
        >
          <span className="text-[10px] font-mono uppercase font-bold block mb-1">
            01. Entrada de Controle
          </span>
          <h4 className="text-sm font-extrabold tracking-wider">
            CARTÃO {activeCartridge}
          </h4>
          <p className="text-xs mt-1 text-slate-300">
            {activeCartridge === 'A'
              ? 'Fita perfurada: Padrão de Tecelagem A'
              : 'Fita perfurada: Algoritmo de Ada (Bernoulli) B'}
          </p>
        </div>

        {/* Caixa 2: A Instrução */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 text-center relative">
          <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block mb-1">
            02. Tradução
          </span>
          <h4 className="text-sm font-extrabold text-white">
            INSTRUÇÕES {activeCartridge}
          </h4>
          <p className="text-xs mt-1 text-slate-400">
            {activeCartridge === 'A'
              ? 'Levantar urdiduras ímpares do tear'
              : 'Alocar variáveis e realizar multiplicação no moinho'}
          </p>
          <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-cyan-400 font-mono font-bold">
            →
          </div>
        </div>

        {/* Caixa 3: O Resultado */}
        <div
          className={`p-4 rounded-xl border text-center transition-all duration-500 ${
            activeCartridge === 'A'
              ? 'bg-emerald-950/30 border-emerald-500/60 text-emerald-200'
              : 'bg-indigo-950/30 border-indigo-500/60 text-indigo-200'
          }`}
        >
          <span className="text-[10px] font-mono uppercase font-bold block mb-1">
            03. Comportamento Gerado
          </span>
          <h4 className="text-sm font-extrabold tracking-wider">
            RESULTADO {activeCartridge}
          </h4>
          <p className="text-xs mt-1 text-slate-300">
            {activeCartridge === 'A'
              ? 'Tecido Jacquard com padrão geométrico'
              : 'Tabela de Números de Bernoulli calculada'}
          </p>
        </div>
      </div>

      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 text-center font-medium">
        <strong className="text-cyan-400 font-mono">Princípio Fundamental:</strong> O maquinário físico permanece exatamente o mesmo; <em>mudar as instruções altera o comportamento da máquina</em>.
      </div>
    </div>
  );
};
