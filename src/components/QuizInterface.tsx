import React from 'react';
import { Question, QuizConfig } from '../types/quiz';
import { MCQQuestion } from './questions/MCQQuestion';
import { DragDropQuestion } from './questions/DragDropQuestion';
import { TrueFalseTableQuestion } from './questions/TrueFalseTableQuestion';
import { DropdownFillQuestion } from './questions/DropdownFillQuestion';
import { DragDropMatchingQuestion } from './questions/DragDropMatchingQuestion';
import { ChevronRight, Clock, Target, GraduationCap, Tag } from 'lucide-react';

interface QuizInterfaceProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  userAnswer?: any;
  onAnswer: (answer: any) => void;
  onNext: () => void;
  timeElapsed: number;
  config?: QuizConfig;
}

export function QuizInterface({
  question,
  questionIndex,
  totalQuestions,
  userAnswer,
  onAnswer,
  onNext,
  timeElapsed,
  config,
}: QuizInterfaceProps) {
  const formatTime = (ms: number) => {
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    return `${m}:${(s % 60).toString().padStart(2, '0')}`;
  };

  const difficultyBadge = (d: string) => {
    if (d === 'easy')   return 'badge badge-green';
    if (d === 'medium') return 'badge badge-yellow';
    if (d === 'hard')   return 'badge badge-red';
    return 'badge badge-blue';
  };

  const renderQuestion = () => {
    switch (question.type) {
      case 'mcq':
        return <MCQQuestion question={question} userAnswer={userAnswer} onAnswer={onAnswer} />;
      case 'drag-drop':
        return <DragDropQuestion question={question} userAnswer={userAnswer} onAnswer={onAnswer} />;
      case 'true-false-table':
        return <TrueFalseTableQuestion question={question} userAnswer={userAnswer} onAnswer={onAnswer} />;
      case 'dropdown-fill':
        return <DropdownFillQuestion question={question} userAnswer={userAnswer} onAnswer={onAnswer} />;
      case 'drag-drop-matching':
        return <DragDropMatchingQuestion question={question} userAnswer={userAnswer} onAnswer={onAnswer} />;
      default:
        return <div className="text-gray-500 dark:text-gray-400">Unsupported question type</div>;
    }
  };

  const isAnswered = () => {
    if (question.type === 'mcq') return !!userAnswer;
    if (question.type === 'drag-drop') {
      return Array.isArray(userAnswer) && userAnswer.some(i => i !== undefined && i !== null);
    }
    if (question.type === 'true-false-table') {
      const stmts = question.options || [];
      if (!userAnswer || typeof userAnswer !== 'object') return false;
      return stmts.every((_, idx) =>
        userAnswer.hasOwnProperty(idx.toString()) &&
        typeof userAnswer[idx.toString()] === 'boolean'
      );
    }
    if (question.type === 'dropdown-fill') {
      const blanks = question.blanks || [];
      if (!userAnswer || typeof userAnswer !== 'object') return false;
      return blanks.every(b => userAnswer[b.id] && userAnswer[b.id] !== '');
    }
    if (question.type === 'drag-drop-matching') {
      const left = question.matchingPairs?.left || [];
      if (!userAnswer || typeof userAnswer !== 'object') return false;
      return left.every(item => userAnswer[item] && userAnswer[item] !== '');
    }
    return false;
  };

  const progress = ((questionIndex + 1) / totalQuestions) * 100;
  const answered = isAnswered();
  const isLast   = questionIndex + 1 === totalQuestions;

  return (
    <div className="max-w-2xl mx-auto px-4 py-5 sm:py-8 animate-fadeInUp">

      {/* ── Top meta row ── */}
      <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
        <div className="flex items-center gap-2.5">
          {/* Mode badge */}
          {config && (
            <span className={`badge ${config.mode === 'practice' ? 'badge-green' : 'badge-purple'}`}>
              {config.mode === 'practice'
                ? <><Target className="w-3 h-3" /> Practice</>
                : <><GraduationCap className="w-3 h-3" /> Exam</>}
              {config.mode === 'practice' && config.difficulty && ` · ${config.difficulty}`}
            </span>
          )}
          {/* Exam type badge */}
          <span className="badge badge-blue">{question.exam_type}</span>
          {/* Difficulty (exam mode only) */}
          {config?.mode === 'examination' && (
            <span className={difficultyBadge(question.difficulty)}>{question.difficulty}</span>
          )}
        </div>

        {/* Timer */}
        <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400">
          <Clock className="w-4 h-4" />
          <span>{formatTime(timeElapsed)}</span>
        </div>
      </div>

      {/* ── Progress ── */}
      <div className="mb-5">
        <div className="flex justify-between text-xs font-medium text-gray-400 dark:text-gray-500 mb-1.5">
          <span>Question {questionIndex + 1} of {totalQuestions}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* ── Question card ── */}
      <div className="glass-card p-5 sm:p-6 mb-5">
        {renderQuestion()}
      </div>

      {/* ── Category tag ── */}
      <div className="flex items-center justify-center gap-1.5 mb-5">
        <Tag className="w-3 h-3 text-gray-400 dark:text-gray-500" />
        <span className="text-xs text-gray-400 dark:text-gray-500">{question.category}</span>
      </div>

      {/* ── Next button ── */}
      <div className="flex justify-center">
        <button
          id="next-question-btn"
          onClick={onNext}
          disabled={!answered}
          className={`btn-primary px-8 py-3 ${!answered ? 'opacity-40 cursor-not-allowed hover:transform-none hover:shadow-none' : ''}`}
        >
          <span>{isLast ? 'Finish Quiz' : 'Next Question'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}