import React, { useState } from 'react';
import { QuizResult, Question } from '../types/quiz';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Trophy, Clock, Target, RotateCcw, BookOpen, ChevronDown, ChevronUp, X, CheckCircle, XCircle } from 'lucide-react';
import { ResultReaction } from './ResultReaction';

interface QuizResultsProps {
  result: QuizResult;
  onRestart: () => void;
}

export function QuizResults({ result, onRestart }: QuizResultsProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const formatTime = (ms: number) => {
    const m = Math.floor(ms / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    return `${m}m ${s}s`;
  };

  const getScoreGrade = (score: number) => {
    if (score >= 80) return { label: 'Excellent', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/25', ring: '#10B981' };
    if (score >= 60) return { label: 'Good',      color: 'text-amber-600 dark:text-amber-400',   bg: 'bg-amber-50 dark:bg-amber-900/25',   ring: '#F59E0B' };
    return              { label: 'Keep Going',  color: 'text-red-600 dark:text-red-400',     bg: 'bg-red-50 dark:bg-red-900/25',     ring: '#EF4444' };
  };

  const getScoreMessage = (score: number) => {
    if (score >= 80) return "You're well-prepared for the certification exam. 🎉";
    if (score >= 60) return "Good job! Review the missed areas to level up.";
    return "Keep studying! Focus on understanding core concepts.";
  };

  const getFeedback = (score: number, breakdown: Record<string, any>) => ({
    strengths:   Object.entries(breakdown).filter(([, d]) => d.correct / d.total >= 0.8).map(([c]) => c),
    improvements:Object.entries(breakdown).filter(([, d]) => d.correct / d.total < 0.7).map(([c]) => c),
    recommendations:
      score < 60 ? ['Review Azure fundamentals documentation', 'Take practice tests regularly', 'Focus on hands-on Azure experience', 'Join study groups'] :
      score < 80 ? ['Review lower-scoring categories', 'Practice scenario-based questions', 'Revisit Azure pricing & support'] :
                   ["You're ready for the exam!", 'Review any topics you missed', 'Schedule your certification now'],
  });

  const checkAnswer = (question: Question, userAnswer: any): boolean => {
    if (userAnswer === null || userAnswer === undefined || userAnswer === '') return false;
    if (Array.isArray(userAnswer) && userAnswer.length === 0) return false;
    switch (question.type) {
      case 'mcq': {
        const us = String(userAnswer).trim(), cs = String(question.correct_answer).trim();
        if (cs.length === 1 && /^[A-D]$/i.test(cs)) return us.charAt(0).toUpperCase() === cs.toUpperCase();
        return us === cs;
      }
      case 'drag-drop': {
        const ua = Array.isArray(userAnswer) ? userAnswer.filter(Boolean).map(String) : [];
        const ca = Array.isArray(question.correct_answer) ? question.correct_answer.map(String) : [];
        return ua.length === ca.length && ua.every((v, i) => v === ca[i]);
      }
      default:
        return JSON.stringify(userAnswer) === JSON.stringify(parseAnswer(question.correct_answer));
    }
  };

  const parseAnswer = (a: any) => { try { return typeof a === 'string' ? JSON.parse(a) : a; } catch { return a; } };

  const getFullAnswerText = (question: Question, answer: any): string => {
    if (answer == null || answer === '') return 'No answer';
    if (question.type === 'mcq' && question.options) {
      const s = String(answer).trim();
      if (s.length === 1 && /^[A-D]$/i.test(s)) {
        const idx = s.toUpperCase().charCodeAt(0) - 65;
        if (idx >= 0 && idx < question.options.length) return question.options[idx];
      }
      return s;
    }
    return formatAnswer(question, answer);
  };

  const getCorrectAnswerText = (question: Question): string => {
    if (question.type === 'mcq' && question.options) {
      const cs = String(question.correct_answer).trim();
      if (cs.length === 1 && /^[A-D]$/i.test(cs)) {
        const idx = cs.toUpperCase().charCodeAt(0) - 65;
        if (idx >= 0 && idx < question.options.length) return question.options[idx];
      }
      return cs;
    }
    return formatAnswer(question, question.correct_answer);
  };

  const formatAnswer = (question: Question, answer: any): string => {
    const p = parseAnswer(answer);
    if (p == null || p === '') return 'No answer';
    if (Array.isArray(p)) return p.filter(Boolean).map(String).join(' → ');
    if (typeof p === 'object') {
      const keys = question.type === 'dropdown-fill' ? question.blanks?.map(b => b.id)
                 : question.type === 'drag-drop-matching' ? question.matchingPairs?.left
                 : undefined;
      return (keys?.filter(k => k in p) ?? Object.keys(p))
        .map(k => p[k]).filter(Boolean).map(String).join(' → ') || 'No answer';
    }
    return String(p);
  };

  const getWrongQuestions = (category: string): Question[] => {
    if (!result.questions || !result.answers) return [];
    return result.questions.filter(q => q.category === category && !checkAnswer(q, result.answers![q.id]));
  };

  const grade    = getScoreGrade(result.score);
  const feedback = getFeedback(result.score, result.categoryBreakdown);

  const chartData = [
    { name: 'Correct',   value: result.correctAnswers,                             color: '#10B981' },
    { name: 'Incorrect', value: result.totalQuestions - result.correctAnswers, color: '#3B82F6' },
  ];

  const categoryData = Object.entries(result.categoryBreakdown).map(([category, data]) => ({
    category,
    percentage: Math.round((data.correct / data.total) * 100),
    correct: data.correct,
    total:   data.total,
  }));

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 sm:py-10">
      <ResultReaction percentage={(result.correctAnswers / result.totalQuestions) * 100} />

      {/* ── Score hero ── */}
      <div className="glass-card p-6 sm:p-8 text-center mb-5 animate-fadeInUp">
        <div className={`score-ring inline-flex w-24 h-24 rounded-full items-center justify-center mb-4 ${grade.bg}`}>
          <Trophy className={`w-10 h-10 ${grade.color}`} />
        </div>
        <div className={`text-5xl font-extrabold mb-1 ${grade.color}`}>{result.score}%</div>
        <div className={`text-sm font-bold uppercase tracking-widest mb-2 ${grade.color}`}>{grade.label}</div>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs mx-auto">{getScoreMessage(result.score)}</p>

        <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-blue-100 dark:border-blue-900/30">
          {[
            { label: 'Correct',   val: result.correctAnswers,                             col: 'text-emerald-600 dark:text-emerald-400' },
            { label: 'Incorrect', val: result.totalQuestions - result.correctAnswers, col: 'text-red-500 dark:text-red-400' },
            { label: 'Total',     val: result.totalQuestions,                             col: 'text-blue-600 dark:text-blue-400' },
          ].map((s) => (
            <div key={s.label}>
              <div className={`text-2xl font-extrabold ${s.col}`}>{s.val}</div>
              <div className="text-xs text-gray-400 dark:text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Time info + Chart row ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        {/* Time */}
        <div className="glass-card p-5 animate-fadeInUp delay-100">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" /> Time Stats
          </h2>
          <div className="space-y-3">
            {[
              { label: 'Total Time',     val: formatTime(result.timeSpent) },
              { label: 'Per Question',   val: formatTime(result.timeSpent / result.totalQuestions) },
            ].map((r) => (
              <div key={r.label} className="flex justify-between items-center text-sm">
                <span className="text-gray-500 dark:text-gray-400">{r.label}</span>
                <span className="font-semibold text-gray-800 dark:text-white">{r.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="glass-card p-5 animate-fadeInUp delay-150">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Breakdown
          </h2>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={chartData} cx="50%" cy="50%" innerRadius={38} outerRadius={60} paddingAngle={4} dataKey="value">
                  {chartData.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '0.75rem', border: '1px solid #BFDBFE', fontSize: '12px' }} />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ── Category breakdown ── */}
      <div className="glass-card p-5 mb-5 animate-fadeInUp delay-200">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5" /> Category Performance
        </h2>
        <div className="space-y-3">
          {categoryData.map((cat) => {
            const wrong     = getWrongQuestions(cat.category);
            const expanded  = expandedCategory === cat.category;
            const hasWrong  = wrong.length > 0;
            const pct       = cat.percentage;
            const barColor  = pct >= 80 ? 'bg-emerald-500' : pct >= 60 ? 'bg-amber-400' : 'bg-red-400';
            const pctColor  = pct >= 80 ? 'text-emerald-600 dark:text-emerald-400' : pct >= 60 ? 'text-amber-600 dark:text-amber-400' : 'text-red-600 dark:text-red-400';

            return (
              <div key={cat.category} className="border border-blue-100 dark:border-blue-900/30 rounded-xl overflow-hidden">
                <div
                  className={`p-3.5 ${hasWrong ? 'cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20' : ''} transition-colors`}
                  onClick={() => hasWrong && setExpandedCategory(expanded ? null : cat.category)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-sm text-gray-800 dark:text-white">{cat.category}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-bold ${pctColor}`}>{pct}%</span>
                      {hasWrong && (expanded
                        ? <ChevronUp className="w-4 h-4 text-gray-400" />
                        : <ChevronDown className="w-4 h-4 text-gray-400" />)}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 mb-2">
                    {cat.correct}/{cat.total} correct
                    {hasWrong && <span className="text-red-400 ml-1.5">· {wrong.length} to review</span>}
                  </div>
                  <div className="progress-track" style={{ height: '5px' }}>
                    <div className={`h-full rounded-full transition-all duration-700 ${barColor}`} style={{ width: `${pct}%` }} />
                  </div>
                </div>

                {expanded && hasWrong && (
                  <div className="border-t border-blue-100 dark:border-blue-900/30 bg-blue-50/50 dark:bg-blue-950/30 p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-red-600 dark:text-red-400">
                        Questions to Review
                      </h3>
                      <button onClick={(e) => { e.stopPropagation(); setExpandedCategory(null); }}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-thin pr-1">
                      {wrong.map((q, i) => (
                        <div key={q.id} className="glass-card p-4">
                          <div className="flex gap-2 mb-3">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center text-[10px] font-bold">{i + 1}</span>
                            <p className="text-xs font-medium text-gray-800 dark:text-white leading-snug">{q.question}</p>
                          </div>
                          <div className="ml-7 space-y-1.5">
                            <div className="flex items-start gap-1.5 text-xs">
                              <XCircle className="w-3.5 h-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-500 dark:text-gray-400">
                                <span className="font-semibold text-red-600 dark:text-red-400">Your answer: </span>
                                {getFullAnswerText(q, result.answers![q.id])}
                              </span>
                            </div>
                            <div className="flex items-start gap-1.5 text-xs">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-500 dark:text-gray-400">
                                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Correct: </span>
                                {getCorrectAnswerText(q)}
                              </span>
                            </div>
                            {q.explanation && (
                              <div className="mt-2 text-xs p-2.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30 text-gray-600 dark:text-gray-400">
                                <span className="font-semibold text-blue-700 dark:text-blue-400">Explanation: </span>
                                {q.explanation}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Feedback ── */}
      <div className="glass-card p-5 mb-6 animate-fadeInUp delay-300">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">
          Personalised Feedback
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {feedback.strengths.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-2">Strong Areas 💪</h3>
              <ul className="space-y-1.5">
                {feedback.strengths.map((s, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {feedback.improvements.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-red-700 dark:text-red-400 mb-2">Areas to Improve 📚</h3>
              <ul className="space-y-1.5">
                {feedback.improvements.map((s, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <h3 className="text-xs font-bold text-blue-700 dark:text-blue-400 mb-2">Recommendations 🎯</h3>
          <ul className="space-y-1.5">
            {feedback.recommendations.map((r, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="flex justify-center animate-fadeInUp delay-400">
        <button id="restart-quiz-btn" onClick={onRestart} className="btn-primary px-8 py-3.5 text-base">
          <RotateCcw className="w-5 h-5" />
          <span>Take Another Quiz</span>
        </button>
      </div>
    </div>
  );
}