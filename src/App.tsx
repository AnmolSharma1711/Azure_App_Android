import React, { useState, useEffect, useCallback } from 'react';
import { QuizSetup } from './components/QuizSetup';
import { QuizInterface } from './components/QuizInterface';
import { QuizResults } from './components/QuizResults';
import { ThemeToggle } from './components/ThemeToggle';
import { SplashScreen } from './components/SplashScreen';
import { useQuiz } from './hooks/useQuiz';
import { ThemeProvider } from './contexts/ThemeContext';
import { QuizConfig } from './types/quiz';
import dakshLogo from '../icons/daksh.png';

type AppState = 'setup' | 'quiz' | 'results';

function AppHeader() {
  return (
    <header className="app-header">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-4 py-2 sm:py-2.5 min-h-[52px] sm:min-h-[56px] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
          <img src={dakshLogo} alt="Daksh Dynamics" className="w-6 h-6 sm:w-7 sm:h-7 object-contain flex-shrink-0" />
          <span
            className="font-bold text-xs sm:text-sm tracking-wide truncate select-none"
            style={{ color: '#2563EB' }}
          >
            Daksh Dynamics
          </span>
        </div>
        <div className="flex-shrink-0 flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function AppFooter() {
  return (
    <footer className="app-footer">
      <img src={dakshLogo} alt="" className="w-4 h-4 object-contain opacity-70" />
      <span>Powered by Daksh Dynamics</span>
    </footer>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [appState, setAppState] = useState<AppState>('setup');
  const [quizConfig, setQuizConfig] = useState<QuizConfig>({
    mode: 'examination',
    examType: 'AZ-900',
    questionCount: 10,
  });
  const [timeElapsed, setTimeElapsed] = useState(0);

  const { quizState, loading, error, answerQuestion, nextQuestion, completeQuiz, restartQuiz } = useQuiz(
    appState === 'quiz' ? quizConfig : { ...quizConfig, questionCount: 0 }
  );

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (appState === 'quiz' && !quizState.isCompleted) {
      interval = setInterval(() => {
        setTimeElapsed(Date.now() - quizState.startTime);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [appState, quizState.startTime, quizState.isCompleted]);

  const handleSplashFinish = useCallback(() => {
    setShowSplash(false);
  }, []);

  const handleStartQuiz = (config: QuizConfig) => {
    setQuizConfig(config);
    setAppState('quiz');
  };

  const handleAnswer = (answer: any) => {
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    answerQuestion(currentQuestion.id, answer);
  };

  const handleNext = () => {
    if (quizState.currentQuestionIndex + 1 >= quizState.questions.length) {
      completeQuiz();
      setAppState('results');
    } else {
      nextQuestion();
    }
  };

  const handleRestart = () => {
    restartQuiz();
    setTimeElapsed(0);
    setAppState('setup');
  };

  // Splash
  if (showSplash) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  // Error
  if (error) {
    return (
      <div className="app-bg min-h-screen flex flex-col">
        <AppHeader />
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="glass-card p-8 max-w-md w-full text-center animate-fadeInUp">
            <div className="w-14 h-14 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Connection Error</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Retry
            </button>
          </div>
        </div>
        <AppFooter />
      </div>
    );
  }

  // Setup
  if (appState === 'setup') {
    return (
      <div className="app-bg min-h-screen flex flex-col">
        <AppHeader />
        <div className="flex-1">
          <QuizSetup onStartQuiz={handleStartQuiz} />
        </div>
        <AppFooter />
      </div>
    );
  }

  // Quiz - loading
  if (appState === 'quiz') {
    if (loading) {
      return (
        <div className="app-bg min-h-screen flex flex-col">
          <AppHeader />
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center animate-fadeIn">
              <div className="relative w-16 h-16 mx-auto mb-5">
                <div className="w-16 h-16 rounded-full border-4 border-blue-100 dark:border-blue-900/30 absolute" />
                <div className="w-16 h-16 rounded-full border-4 border-t-blue-600 dark:border-t-blue-400 animate-spin absolute" />
              </div>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Loading questions…</p>
            </div>
          </div>
          <AppFooter />
        </div>
      );
    }

    if (quizState.questions.length === 0) {
      return (
        <div className="app-bg min-h-screen flex flex-col">
          <AppHeader />
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="glass-card p-8 max-w-md w-full text-center animate-fadeInUp">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">No Questions Found</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                No questions available for {quizConfig.examType}. Please try reloading.
              </p>
              <div className="flex gap-3 justify-center">
                <button onClick={() => window.location.reload()} className="btn-primary">Reload App</button>
                <button onClick={() => setAppState('setup')} className="btn-secondary">Back to Setup</button>
              </div>
            </div>
          </div>
          <AppFooter />
        </div>
      );
    }

    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    const userAnswer = quizState.answers[currentQuestion.id];

    return (
      <div className="app-bg min-h-screen flex flex-col">
        <AppHeader />
        <div className="flex-1">
          <QuizInterface
            question={currentQuestion}
            questionIndex={quizState.currentQuestionIndex}
            totalQuestions={quizState.questions.length}
            userAnswer={userAnswer}
            onAnswer={handleAnswer}
            onNext={handleNext}
            timeElapsed={timeElapsed}
            config={quizConfig}
          />
        </div>
        <AppFooter />
      </div>
    );
  }

  // Results
  if (appState === 'results' && quizState.result) {
    return (
      <div className="app-bg min-h-screen flex flex-col">
        <AppHeader />
        <div className="flex-1">
          <QuizResults result={quizState.result} onRestart={handleRestart} />
        </div>
        <AppFooter />
      </div>
    );
  }

  return null;
}

function AppWithTheme() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default AppWithTheme;