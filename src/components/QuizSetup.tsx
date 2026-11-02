import React, { useState, useEffect } from 'react';
import { BookOpen, Play, Target, GraduationCap, Lock, Zap, Brain, Award } from 'lucide-react';
import { QuestionStorage } from '../lib/storage';
import { QuizConfig } from '../types/quiz';
import dakshLogo from '../../icons/daksh.png';

interface QuizSetupProps {
  onStartQuiz: (config: QuizConfig) => void;
}

const EXAM_TYPES = [
  { id: 'AZ-900', name: 'AZ-900', label: 'Azure Fundamentals', icon: '☁️' },
  { id: 'AI-900', name: 'AI-900', label: 'AI Fundamentals',    icon: '🤖' },
  { id: 'DP-700', name: 'DP-700', label: 'Fabric Data Eng.',   icon: '📊' },
] as const;

const QUESTION_COUNTS = [
  { value: 5,  label: '5',  sub: 'Quick' },
  { value: 10, label: '10', sub: 'Standard' },
  { value: 20, label: '20', sub: 'Extended' },
  { value: 50, label: '50', sub: 'Full' },
];

export function QuizSetup({ onStartQuiz }: QuizSetupProps) {
  const [mode, setMode]               = useState<'practice' | 'examination'>('practice');
  const [examType, setExamType]       = useState<'AZ-900' | 'AI-900' | 'DP-700'>('AZ-900');
  const [questionCount, setQuestionCount] = useState(10);
  const [difficulty, setDifficulty]   = useState<'easy' | 'medium' | 'hard'>('easy');
  const [isLoading, setIsLoading]     = useState(true);
  const [lockMessage, setLockMessage] = useState<string>('');

  const locks = { examinationMode: false, mediumDifficulty: false, hardDifficulty: false };

  const showLockMessage = (msg: string) => {
    setLockMessage(msg);
    setTimeout(() => setLockMessage(''), 3000);
  };

  useEffect(() => {
    QuestionStorage.initializeQuestions()
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  const handleStartQuiz = () => {
    onStartQuiz({ mode, examType, questionCount, ...(mode === 'practice' && { difficulty }) });
  };

  // ── Loading ──────────────────────────────────────────────
  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center py-24">
        <div className="text-center animate-fadeIn">
          <div className="relative w-14 h-14 mx-auto mb-4">
            <div className="w-14 h-14 rounded-full border-4 border-blue-100 dark:border-blue-900/30 absolute" />
            <div className="w-14 h-14 rounded-full border-4 border-t-blue-600 animate-spin absolute" />
          </div>
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Initialising question bank…</p>
        </div>
      </div>
    );
  }

  // ── Main setup screen ─────────────────────────────────────
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 sm:py-10">

      {/* Toast */}
      {lockMessage && (
        <div className="fixed top-20 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 z-50
                        bg-amber-50 dark:bg-amber-900/60 border border-amber-200 dark:border-amber-700
                        text-amber-800 dark:text-amber-200 px-4 py-3 rounded-2xl shadow-xl
                        animate-fadeInUp flex items-center gap-2 text-sm"
             style={{ top: 'calc(4.5rem + env(safe-area-inset-top, 0px))' }}>
          <Lock className="w-4 h-4 flex-shrink-0" />
          <span className="font-medium">{lockMessage}</span>
        </div>
      )}

      {/* Hero */}
      <div className="text-center mb-8 animate-fadeInUp">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full
                        bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700
                        text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-widest mb-5">
          <img src={dakshLogo} alt="" className="w-3.5 h-3.5 object-contain" />
          Powered by Daksh Dynamics
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-3">
          Azure{' '}
          <span className="text-shimmer">Certification</span>
          <br />Quiz
        </h1>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
          Master AZ-900 · AI-900 · DP-700 with intelligent practice & exam simulations
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 mb-6 animate-fadeInUp delay-100">
        {[
          { icon: <Brain className="w-4 h-4" />, label: 'Smart Questions', val: '1000+' },
          { icon: <Award className="w-4 h-4" />, label: 'Certifications',  val: '3' },
          { icon: <Zap   className="w-4 h-4" />, label: 'Difficulty Tiers', val: '3' },
        ].map((s) => (
          <div key={s.label} className="glass-card p-3 text-center">
            <div className="flex justify-center text-blue-500 dark:text-blue-400 mb-1">{s.icon}</div>
            <div className="text-lg font-bold text-gray-800 dark:text-white leading-none">{s.val}</div>
            <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Config card */}
      <div className="glass-card p-5 sm:p-6 space-y-6 animate-fadeInUp delay-200">

        {/* Quiz Mode */}
        <section>
          <label className="block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
            Quiz Mode
          </label>
          <div className="grid grid-cols-2 gap-3">
            {/* Practice */}
            <button
              id="mode-practice"
              onClick={() => setMode('practice')}
              className={`sel-card ${mode === 'practice' ? 'active' : ''}`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Target className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="font-bold text-sm text-gray-800 dark:text-white">Practice</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Choose difficulty for focused learning</p>
            </button>

            {/* Examination */}
            <button
              id="mode-examination"
              onClick={() => {
                if (locks.examinationMode) showLockMessage('🔒 Complete Easy practice first!');
                else setMode('examination');
              }}
              className={`sel-card ${mode === 'examination' ? 'active' : ''} ${locks.examinationMode ? 'locked' : ''}`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <GraduationCap className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="font-bold text-sm text-gray-800 dark:text-white flex items-center gap-1">
                  Examination {locks.examinationMode && <Lock className="w-3 h-3" />}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Mixed difficulty like the real exam</p>
            </button>
          </div>
        </section>

        {/* Exam Type */}
        <section>
          <label className="block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
            Exam Type
          </label>
          <div className="grid grid-cols-3 gap-2">
            {EXAM_TYPES.map((et) => (
              <button
                key={et.id}
                id={`exam-${et.id}`}
                onClick={() => setExamType(et.id as any)}
                className={`sel-card text-center ${examType === et.id ? 'active' : ''}`}
              >
                <div className="text-lg mb-1">{et.icon}</div>
                <div className="font-bold text-sm text-gray-800 dark:text-white">{et.name}</div>
                <div className="text-[10px] text-gray-400 dark:text-gray-500 leading-tight">{et.label}</div>
              </button>
            ))}
          </div>
        </section>

        {/* Difficulty (Practice only) */}
        {mode === 'practice' && (
          <section className="animate-fadeInUp">
            <label className="block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
              Difficulty
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(
                [
                  { id: 'easy',   label: 'Easy',   emoji: '🌱', desc: 'Basics', locked: false },
                  { id: 'medium', label: 'Medium', emoji: '🔥', desc: 'Intermediate', locked: locks.mediumDifficulty },
                  { id: 'hard',   label: 'Hard',   emoji: '⚡', desc: 'Advanced',     locked: locks.hardDifficulty },
                ] as const
              ).map((d) => (
                <button
                  key={d.id}
                  id={`difficulty-${d.id}`}
                  onClick={() => {
                    if (d.locked) showLockMessage(`🔒 ${d.label} is locked!`);
                    else setDifficulty(d.id);
                  }}
                  className={`sel-card text-center ${difficulty === d.id ? 'active' : ''} ${d.locked ? 'locked' : ''}`}
                >
                  <div className="text-lg mb-1">{d.emoji}</div>
                  <div className="font-bold text-sm text-gray-800 dark:text-white flex items-center justify-center gap-1">
                    {d.label} {d.locked && <Lock className="w-3 h-3" />}
                  </div>
                  <div className="text-[10px] text-gray-400 dark:text-gray-500">{d.desc}</div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Question count */}
        <section>
          <label className="block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
            Number of Questions
          </label>
          <div className="grid grid-cols-4 gap-2">
            {QUESTION_COUNTS.map((q) => (
              <button
                key={q.value}
                id={`count-${q.value}`}
                onClick={() => setQuestionCount(q.value)}
                className={`sel-card text-center py-2.5 ${questionCount === q.value ? 'active' : ''}`}
              >
                <div className="font-bold text-base text-gray-800 dark:text-white">{q.label}</div>
                <div className="text-[10px] text-gray-400 dark:text-gray-500">{q.sub}</div>
              </button>
            ))}
          </div>
        </section>

        {/* Start Button */}
        <button
          id="start-quiz-btn"
          onClick={handleStartQuiz}
          disabled={mode === 'examination' && locks.examinationMode}
          className="btn-primary w-full py-3.5 text-base justify-center"
        >
          {mode === 'practice'
            ? <><Target className="w-5 h-5" /> Start Practice</>
            : <><GraduationCap className="w-5 h-5" /> Start Examination</>}
        </button>
      </div>
    </div>
  );
}