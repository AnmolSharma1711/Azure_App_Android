import React from 'react';
import { Question } from '../../types/quiz';

interface MCQQuestionProps {
  question: Question;
  userAnswer?: string;
  onAnswer: (answer: string) => void;
}

export function MCQQuestion({ question, userAnswer, onAnswer }: MCQQuestionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white leading-snug mb-5">
        {question.question}
      </h3>

      <div className="space-y-2.5">
        {question.options?.map((option, index) => {
          const letter    = String.fromCharCode(65 + index);
          const isSelected = userAnswer === option;
          return (
            <button
              key={index}
              id={`option-${letter}`}
              onClick={() => onAnswer(option)}
              className={`option-btn ${isSelected ? 'selected' : ''}`}
            >
              <span className="option-label">{letter}</span>
              <span className="flex-1 text-left leading-snug">{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}