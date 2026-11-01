import React, { useState } from 'react';
import { QuizResult, Question } from '../types/quiz';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Trophy, Clock, Target, RotateCcw, BookOpen, ChevronDown, ChevronUp, X, CheckCircle } from 'lucide-react';
import { ResultReaction } from './ResultReaction';

interface QuizResultsProps {
  result: QuizResult;
  onRestart: () => void;
}

export function QuizResults({ result, onRestart }: QuizResultsProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}m ${seconds}s`;
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 dark:text-green-400';
    if (score >= 60) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getScoreMessage = (score: number) => {
    if (score >= 80) return "Excellent! You're well-prepared for the certification exam.";
    if (score >= 60) return "Good job! Review the areas where you missed questions.";
    return "Keep studying! Focus on understanding the core concepts.";
  };

  const getFeedback = (score: number, categoryBreakdown: Record<string, any>) => {
    const weakAreas = Object.entries(categoryBreakdown)
      .filter(([_, data]) => (data.correct / data.total) < 0.7)
      .map(([category]) => category);

    return {
      strengths: Object.entries(categoryBreakdown)
        .filter(([_, data]) => (data.correct / data.total) >= 0.8)
        .map(([category]) => category),
      improvements: weakAreas,
      recommendations: score < 60 ? [
        'Review Azure fundamentals documentation',
        'Take practice tests regularly',
        'Focus on hands-on experience with Azure services',
        'Join study groups or forums'
      ] : score < 80 ? [
        'Review specific service categories where you scored lower',
        'Practice scenario-based questions',
        'Review Azure pricing and support options'
      ] : [
        'You\'re ready for the exam!',
        'Review any specific topics you missed',
        'Schedule your certification exam'
      ]
    };
  };

  const chartData = [
    { name: 'Correct', value: result.correctAnswers, color: '#10B981' },
    { name: 'Incorrect', value: result.totalQuestions - result.correctAnswers, color: '#EF4444' },
  ];

  const categoryData = Object.entries(result.categoryBreakdown).map(([category, data]) => ({
    category,
    percentage: Math.round((data.correct / data.total) * 100),
    correct: data.correct,
    total: data.total,
  }));

  const feedback = getFeedback(result.score, result.categoryBreakdown);

  const getWrongQuestionsByCategory = (category: string): Question[] => {
    if (!result.questions || !result.answers) return [];
    
    return result.questions.filter(question => {
      if (question.category !== category) return false;
      const userAnswer = result.answers![question.id];
      return !checkAnswer(question, userAnswer);
    });
  };

  const checkAnswer = (question: Question, userAnswer: any): boolean => {
    if (userAnswer === null || userAnswer === undefined || userAnswer === '') {
      return false;
    }
    
    if (Array.isArray(userAnswer) && userAnswer.length === 0) {
      return false;
    }
    
    switch (question.type) {
      case 'mcq':
        const userStr = String(userAnswer).trim();
        const correctStr = String(question.correct_answer).trim();
        
        if (correctStr.length === 1 && /^[A-D]$/i.test(correctStr)) {
          const userLetter = userStr.charAt(0).toUpperCase();
          const correctLetter = correctStr.toUpperCase();
          return userLetter === correctLetter;
        }
        return userStr === correctStr;
        
      case 'drag-drop':
        const compactUserAnswer = Array.isArray(userAnswer)
          ? userAnswer.filter(item => item !== undefined && item !== null && item !== '').map(item => String(item).trim())
          : [];
        const correctAnswer = Array.isArray(question.correct_answer)
          ? question.correct_answer.map(item => String(item).trim())
          : [];
        return compactUserAnswer.length === correctAnswer.length && 
               compactUserAnswer.every((item, index) => item === correctAnswer[index]);
        
      default:
        return JSON.stringify(userAnswer) === JSON.stringify(parseAnswer(question.correct_answer));
    }
  };

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const parseAnswer = (answer: any): any => {
    if (typeof answer !== 'string') return answer;

    try {
      return JSON.parse(answer);
    } catch {
      return answer;
    }
  };

  const formatAnswer = (question: Question, answer: any): string => {
    const parsedAnswer = parseAnswer(answer);

    if (parsedAnswer === undefined || parsedAnswer === null || parsedAnswer === '') {
      return 'No answer';
    }

    if (Array.isArray(parsedAnswer)) {
      return parsedAnswer
        .filter(item => item !== undefined && item !== null && item !== '')
        .map(item => String(item))
        .join(' → ');
    }

    if (typeof parsedAnswer === 'object') {
      const keys = question.type === 'dropdown-fill'
        ? question.blanks?.map(blank => blank.id)
        : question.type === 'drag-drop-matching'
          ? question.matchingPairs?.left
          : undefined;
      const orderedKeys = keys?.filter(key => Object.prototype.hasOwnProperty.call(parsedAnswer, key))
        ?? Object.keys(parsedAnswer);

      return orderedKeys
        .map(key => parsedAnswer[key])
        .filter(value => value !== undefined && value !== null && value !== '')
        .map(value => String(value))
        .join(' → ') || 'No answer';
    }

    return String(parsedAnswer);
  };

  const getFullAnswerText = (question: Question, answer: any): string => {
    if (answer === undefined || answer === null || answer === '') return 'No answer';
    
    // For MCQ questions, try to get the full option text
    if (question.type === 'mcq' && question.options) {
      const answerStr = String(answer).trim();
      
      // If answer is just a letter (A, B, C, D), find the full option text
      if (answerStr.length === 1 && /^[A-D]$/i.test(answerStr)) {
        const letter = answerStr.toUpperCase();
        const optionIndex = letter.charCodeAt(0) - 'A'.charCodeAt(0);
        if (optionIndex >= 0 && optionIndex < question.options.length) {
          return question.options[optionIndex];
        }
      }
      
      // If answer already contains the full text, return it
      return answerStr;
    }
    
    // For other question types, use the regular format
    return formatAnswer(question, answer);
  };

  const getCorrectAnswerText = (question: Question): string => {
    if (question.type === 'mcq' && question.options) {
      const correctStr = String(question.correct_answer).trim();
      
      // If correct answer is just a letter, find the full option text
      if (correctStr.length === 1 && /^[A-D]$/i.test(correctStr)) {
        const letter = correctStr.toUpperCase();
        const optionIndex = letter.charCodeAt(0) - 'A'.charCodeAt(0);
        if (optionIndex >= 0 && optionIndex < question.options.length) {
          return question.options[optionIndex];
        }
      }
      
      // If correct answer already contains full text, return it
      return correctStr;
    }
    
    // For other question types
    return formatAnswer(question, question.correct_answer);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Result Reaction with Party Poppers */}
      <ResultReaction percentage={(result.correctAnswers / result.totalQuestions) * 100} />

      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-colors duration-300 ${
            result.score >= 80 ? 'bg-green-100 dark:bg-green-900/30' : 
            result.score >= 60 ? 'bg-yellow-100 dark:bg-yellow-900/30' : 
            'bg-red-100 dark:bg-red-900/30'
          }`}>
            <Trophy className={`w-10 h-10 ${getScoreColor(result.score)} transition-colors duration-300`} />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">Quiz Completed!</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">{getScoreMessage(result.score)}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Score Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-2xl p-6 transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-6 flex items-center space-x-2 text-gray-800 dark:text-white transition-colors duration-300">
            <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span>Score Overview</span>
          </h2>
          
          <div className="text-center mb-6">
            <div className={`text-6xl font-bold mb-2 ${getScoreColor(result.score)} transition-colors duration-300`}>
              {result.score}%
            </div>
            <div className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
              {result.correctAnswers} out of {result.totalQuestions} correct
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors duration-300">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="font-medium text-gray-800 dark:text-gray-200">Time Taken</span>
              </div>
              <span className="text-gray-800 dark:text-gray-200">{formatTime(result.timeSpent)}</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors duration-300">
              <span className="font-medium text-gray-800 dark:text-gray-200">Average per Question</span>
              <span className="text-gray-800 dark:text-gray-200">{formatTime(result.timeSpent / result.totalQuestions)}</span>
            </div>
          </div>
        </div>

        {/* Results Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-2xl p-6 transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white transition-colors duration-300">Results Breakdown</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Category Performance */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-2xl p-6 mb-8 transition-all duration-300 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-6 flex items-center space-x-2 text-gray-800 dark:text-white transition-colors duration-300">
          <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <span>Category Performance</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryData.map((category) => {
            const wrongQuestions = getWrongQuestionsByCategory(category.category);
            const isExpanded = expandedCategory === category.category;
            const hasWrongQuestions = wrongQuestions.length > 0;
            
            return (
              <div key={category.category} className="border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-300">
                <div 
                  className={`p-4 ${hasWrongQuestions ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700' : ''} transition-colors duration-200`}
                  onClick={() => hasWrongQuestions && toggleCategory(category.category)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-800 dark:text-white transition-colors duration-300">{category.category}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`font-bold ${getScoreColor(category.percentage)} transition-colors duration-300`}>
                        {category.percentage}%
                      </span>
                      {hasWrongQuestions && (
                        isExpanded ? 
                          <ChevronUp className="w-4 h-4 text-gray-600 dark:text-gray-400" /> : 
                          <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      )}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2 transition-colors duration-300">
                    {category.correct}/{category.total} correct
                    {hasWrongQuestions && (
                      <span className="text-red-600 dark:text-red-400 ml-2">
                        ({wrongQuestions.length} wrong)
                      </span>
                    )}
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 transition-colors duration-300">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        category.percentage >= 80 ? 'bg-green-500 dark:bg-green-400' :
                        category.percentage >= 60 ? 'bg-yellow-500 dark:bg-yellow-400' : 'bg-red-500 dark:bg-red-400'
                      }`}
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                </div>
                
                {/* Expanded Wrong Questions */}
                {isExpanded && hasWrongQuestions && (
                  <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-red-600 dark:text-red-400 transition-colors duration-300">
                        Questions to Review:
                      </h3>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedCategory(null);
                        }}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {wrongQuestions.map((question, index) => (
                        <div key={question.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                          <div className="flex items-start space-x-2 mb-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center text-sm font-semibold">
                              {index + 1}
                            </span>
                            <p className="text-sm font-medium text-gray-800 dark:text-white flex-1 transition-colors duration-300">
                              {question.question}
                            </p>
                          </div>
                          
                          <div className="ml-8 space-y-2">
                            <div className="text-sm">
                              <span className="font-semibold text-red-600 dark:text-red-400">Your Answer: </span>
                              <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                                {getFullAnswerText(question, result.answers![question.id])}
                              </span>
                            </div>
                            
                            <div className="text-sm flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <span className="font-semibold text-green-600 dark:text-green-400">Correct Answer: </span>
                                <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                                  {getCorrectAnswerText(question)}
                                </span>
                              </div>
                            </div>
                            
                            {question.explanation && (
                              <div className="text-xs text-gray-600 dark:text-gray-400 mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded transition-colors duration-300">
                                <span className="font-semibold">Explanation: </span>
                                {question.explanation}
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

      {/* Feedback */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-2xl p-6 mb-8 transition-all duration-300 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white transition-colors duration-300">Personalized Feedback</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {feedback.strengths.length > 0 && (
            <div>
              <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3 transition-colors duration-300">Strong Areas 💪</h3>
              <ul className="space-y-2">
                {feedback.strengths.map((strength, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full" />
                    <span className="text-gray-700 dark:text-black transition-colors duration-300">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {feedback.improvements.length > 0 && (
            <div>
              <h3 className="font-semibold text-red-700 dark:text-red-400 mb-3 transition-colors duration-300">Areas for Improvement 📚</h3>
              <ul className="space-y-2">
                {feedback.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full" />
                    <span className="text-gray-700 dark:text-black transition-colors duration-300">{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-3 transition-colors duration-300">Recommendations 🎯</h3>
          <ul className="space-y-2">
            {feedback.recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700 dark:text-black transition-colors duration-300">{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Actions */}
      <div className="text-center">
        <button
          onClick={onRestart}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white rounded-lg font-semibold flex items-center space-x-2 mx-auto transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Take Another Quiz</span>
        </button>
      </div>
    </div>
  );
}