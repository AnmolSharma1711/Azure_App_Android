import React, { useState, useEffect } from 'react';
import { BookOpen, Play, Target, GraduationCap, AlignCenter, Lock } from 'lucide-react';
import { QuestionStorage } from '../lib/storage';
import { QuizConfig } from '../types/quiz';

interface QuizSetupProps {
  onStartQuiz: (config: QuizConfig) => void;
}

export function QuizSetup({ onStartQuiz }: QuizSetupProps) {
  const [mode, setMode] = useState<'practice' | 'examination'>('practice'); // Default to practice mode
  const [examType, setExamType] = useState<'AZ-900' | 'AI-900' | 'DP-700'>('AZ-900');
  const [questionCount, setQuestionCount] = useState(10);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [isLoading, setIsLoading] = useState(true);
  const [lockMessage, setLockMessage] = useState<string>('');

  // Lock configuration - define what's locked (ALL UNLOCKED)
  const locks = {
    examinationMode: false,
    mediumDifficulty: false,
    hardDifficulty: false
  };

  const showLockMessage = (message: string) => {
    setLockMessage(message);
    setTimeout(() => setLockMessage(''), 3000); // Clear message after 3 seconds
  };

  useEffect(() => {
    const initializeQuestions = async () => {
      try {
        // Initialize questions (this will load CSV data on first run)
        await QuestionStorage.initializeQuestions();
      } catch (error) {
        console.error('Error initializing questions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeQuestions();
  }, []);

  const handleStartQuiz = () => {
    const config: QuizConfig = {
      mode,
      examType,
      questionCount,
      ...(mode === 'practice' && { difficulty })
    };
    onStartQuiz(config);
  };
  
  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading questions from CSV files...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 relative">
      {/* Lock Message Toast */}
      {lockMessage && (
        <div className="fixed top-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-auto z-50 bg-orange-100 dark:bg-orange-900 border border-orange-300 dark:border-orange-700 text-orange-800 dark:text-orange-200 px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-lg transition-all duration-300 animate-in slide-in-from-top sm:slide-in-from-right">
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="font-medium text-sm sm:text-base">{lockMessage}</span>
          </div>
        </div>
      )}

      <div className="text-center mb-8 sm:mb-12">
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center transition-colors duration-300">
            <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">
          Azure Certification Quiz
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 px-4 sm:px-0 transition-colors duration-300">
          Test your knowledge and prepare for Azure certification exams
        </p>
        <p className="text-sm sm:text-base font-medium text-blue-700 dark:text-blue-300">
          Powered by Daksh Dynamics
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Quiz Setup */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-2xl p-4 sm:p-6 lg:p-8 transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800 dark:text-white transition-colors duration-300 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Play className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
              <span>Start Quiz</span>
            </div>
          </h2>
          
          <div className="space-y-4 sm:space-y-6">
            {/* Quiz Mode Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 transition-colors duration-300">
                Select Quiz Mode
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setMode('practice')}
                  className={`p-3 sm:p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                    mode === 'practice'
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                      : 'border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-500 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <div className="font-semibold text-sm sm:text-base">Practice Mode</div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    Select difficulty level for focused practice
                  </div>
                </button>
                <button
                  onClick={() => {
                    if (locks.examinationMode) {
                      showLockMessage('🔒 Examination Mode is locked. Complete Easy practice questions first!');
                    } else {
                      setMode('examination');
                    }
                  }}
                  className={`p-3 sm:p-4 rounded-lg border-2 text-left transition-all duration-200 relative ${
                    locks.examinationMode
                      ? 'border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-500 cursor-not-allowed'
                      : mode === 'examination'
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300'
                      : 'border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-500 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <div className="font-semibold text-sm sm:text-base flex items-center space-x-2">
                      <span>Examination Mode</span>
                      {locks.examinationMode && <Lock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />}
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    Mixed difficulty questions like real exam
                  </div>
                </button>
              </div>
            </div>

            {/* Exam Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 transition-colors duration-300">
                Select Exam Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setExamType('AZ-900')}
                  className={`p-3 sm:p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                    examType === 'AZ-900'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                      : 'border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  <div className="font-semibold text-sm sm:text-base">AZ-900</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    Azure Fundamentals
                  </div>
                </button>
                <button
                  onClick={() => setExamType('AI-900')}
                  className={`p-3 sm:p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                    examType === 'AI-900'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                      : 'border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  <div className="font-semibold text-sm sm:text-base">AI-900</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    AI Fundamentals
                  </div>
                </button>
                <button
                  onClick={() => setExamType('DP-700')}
                  className={`p-3 sm:p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                    examType === 'DP-700'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                      : 'border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  <div className="font-semibold text-sm sm:text-base">DP-700</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    Fabric Data Engineer
                  </div>
                </button>
              </div>
            </div>

            {/* Difficulty Selection (Only for Practice Mode) */}
            {mode === 'practice' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 transition-colors duration-300">
                  Select Difficulty Level
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => setDifficulty('easy')}
                    className={`p-3 sm:p-4 rounded-lg border-2 text-center transition-all duration-200 ${
                      difficulty === 'easy'
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                        : 'border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-500 text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    <div className="font-semibold text-sm sm:text-base">Easy</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Basic concepts
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      if (locks.mediumDifficulty) {
                        showLockMessage('🔒 Medium difficulty is locked. Master Easy questions first!');
                      } else {
                        setDifficulty('medium');
                      }
                    }}
                    className={`p-3 sm:p-4 rounded-lg border-2 text-center transition-all duration-200 relative ${
                      locks.mediumDifficulty
                        ? 'border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-500 cursor-not-allowed'
                        : difficulty === 'medium'
                        ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
                        : 'border-gray-200 dark:border-gray-600 hover:border-yellow-300 dark:hover:border-yellow-500 text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    <div className="font-semibold text-sm sm:text-base flex items-center justify-center space-x-1">
                      <span>Medium</span>
                      {locks.mediumDifficulty && <Lock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Intermediate
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      if (locks.hardDifficulty) {
                        showLockMessage('🔒 Hard difficulty is locked. Complete Medium questions first!');
                      } else {
                        setDifficulty('hard');
                      }
                    }}
                    className={`p-3 sm:p-4 rounded-lg border-2 text-center transition-all duration-200 relative ${
                      locks.hardDifficulty
                        ? 'border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-500 cursor-not-allowed'
                        : difficulty === 'hard'
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                        : 'border-gray-200 dark:border-gray-600 hover:border-red-300 dark:hover:border-red-500 text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    <div className="font-semibold text-sm sm:text-base flex items-center justify-center space-x-1">
                      <span>Hard</span>
                      {locks.hardDifficulty && <Lock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Advanced
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Number of Questions */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 transition-colors duration-300">
                Number of Questions
              </label>
              <select
                value={questionCount}
                onChange={(e) => setQuestionCount(Number(e.target.value))}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300 text-sm sm:text-base"
              >
                <option value={5}>5 Questions (Quick)</option>
                <option value={10}>10 Questions (Standard)</option>
                <option value={20}>20 Questions (Extended)</option>
                <option value={50}>50 Questions (Full Practice)</option>
              </select>
            </div>

            <button
              onClick={handleStartQuiz}
              disabled={mode === 'examination' && locks.examinationMode}
              className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base ${
                mode === 'examination' && locks.examinationMode
                  ? 'bg-gray-400 dark:bg-gray-600 text-gray-200 cursor-not-allowed'
                  : mode === 'practice'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 dark:from-green-500 dark:to-emerald-500 dark:hover:from-green-600 dark:hover:to-emerald-600'
                  : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 dark:from-purple-500 dark:to-indigo-500 dark:hover:from-purple-600 dark:hover:to-indigo-600'
              } text-white`}
            >
              {mode === 'practice' ? <Target className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> : <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
              <span>Start {mode === 'practice' ? 'Practice' : 'Examination'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}