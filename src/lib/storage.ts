import { Question } from '../types/quiz';
import { predefinedQuestions } from '../data/questions';
import { dragDropQuestions } from '../data/dragDropQuestions';
import { dp700Questions } from '../data/dp700Questions';

// Debug imports immediately
console.log('[Storage] Import verification:', {
  predefinedQuestionsLoaded: Array.isArray(predefinedQuestions),
  predefinedCount: predefinedQuestions ? predefinedQuestions.length : 0,
  dragDropQuestionsLoaded: Array.isArray(dragDropQuestions),
  dragDropCount: dragDropQuestions ? dragDropQuestions.length : 0,
  dp700QuestionsLoaded: Array.isArray(dp700Questions),
  dp700Count: dp700Questions ? dp700Questions.length : 0,
  predefinedAI900: predefinedQuestions ? predefinedQuestions.filter(q => q && q.exam_type === 'AI-900').length : 0,
  predefinedAZ900: predefinedQuestions ? predefinedQuestions.filter(q => q && q.exam_type === 'AZ-900').length : 0,
  dragDropAI900: dragDropQuestions ? dragDropQuestions.filter(q => q && q.exam_type === 'AI-900').length : 0,
  dragDropAZ900: dragDropQuestions ? dragDropQuestions.filter(q => q && q.exam_type === 'AZ-900').length : 0,
  dp700: dp700Questions ? dp700Questions.filter(q => q && q.exam_type === 'DP-700').length : 0,
  predefinedInvalid: predefinedQuestions ? predefinedQuestions.filter(q => !q || !q.exam_type).length : 0,
  dragDropInvalid: dragDropQuestions ? dragDropQuestions.filter(q => !q || !q.exam_type).length : 0
});

// Local storage key (bumped for renamed Azure services update)
const QUESTIONS_STORAGE_KEY = 'azure_quiz_questions_v2';

export class QuestionStorage {
  static async initializeQuestions(): Promise<void> {
    // In production environments, we might not have localStorage
    // So we'll just use the static data directly
    if (typeof window === 'undefined') return;
    
    try {
      const stored = localStorage.getItem(QUESTIONS_STORAGE_KEY);
      if (!stored) {
        // Combine all question types on first load
        console.log('Initializing with all question types...');
        const allQuestions = [...predefinedQuestions, ...dragDropQuestions, ...dp700Questions];
        this.saveQuestions(allQuestions);
        console.log(`Initialized ${allQuestions.length} total questions (${predefinedQuestions.length} MCQ + ${dragDropQuestions.length} drag-drop + ${dp700Questions.length} DP-700)`);
      }
    } catch (error) {
      console.warn('localStorage not available, using static data:', error);
    }
  }

  static async getQuestions(): Promise<Question[]> {
    // Always return static data in production to avoid localStorage issues
    if (typeof window === 'undefined') {
      const combinedQuestions = [...predefinedQuestions, ...dragDropQuestions, ...dp700Questions];
      console.log('[Storage] Server-side getQuestions:', {
        predefined: predefinedQuestions.length,
        dragDrop: dragDropQuestions.length,
        dp700: dp700Questions.length,
        total: combinedQuestions.length
      });
      return combinedQuestions;
    }
    
    try {
      // Ensure questions are initialized
      await this.initializeQuestions();
      
      const stored = localStorage.getItem(QUESTIONS_STORAGE_KEY);
      if (stored) {
        const parsedQuestions = JSON.parse(stored);
        // Ensure we have the latest questions by merging with static data
        const allQuestions = [...predefinedQuestions, ...dragDropQuestions, ...dp700Questions];
        
        console.log('[Storage] getQuestions from localStorage:', {
          stored: parsedQuestions.length,
          static: allQuestions.length,
          predefined: predefinedQuestions.length,
          dragDrop: dragDropQuestions.length,
          dp700: dp700Questions.length,
          usingStatic: allQuestions.length > parsedQuestions.length
        });
        
        return allQuestions.length > parsedQuestions.length ? allQuestions : parsedQuestions;
      }
    } catch (error) {
      console.warn('Error accessing localStorage, using static data:', error);
    }
    
    // Fallback to static data
    const safePredefinedQuestions = predefinedQuestions || [];
    const safeDragDropQuestions = dragDropQuestions || [];
    const safeDp700Questions = dp700Questions || [];
    const fallbackQuestions = [...safePredefinedQuestions, ...safeDragDropQuestions, ...safeDp700Questions];
    
    console.log('[Storage] getQuestions fallback:', {
      predefined: safePredefinedQuestions.length,
      dragDrop: safeDragDropQuestions.length,
      dp700: safeDp700Questions.length,
      total: fallbackQuestions.length,
      ai900Count: fallbackQuestions.filter(q => q.exam_type === 'AI-900').length,
      az900Count: fallbackQuestions.filter(q => q.exam_type === 'AZ-900').length,
      dp700Count: fallbackQuestions.filter(q => q.exam_type === 'DP-700').length
    });
    
    // If we still have no questions, there's a serious import issue
    if (fallbackQuestions.length === 0) {
      console.error('[Storage] CRITICAL: No questions available - import failure!');
      // Return a minimal test question to prevent app crash
      return [{
        id: 'emergency-test',
        question: 'Emergency test question - data loading failed',
        type: 'mcq',
        options: ['Option A', 'Option B'],
        correct_answer: 'Option A',
        explanation: 'This is an emergency fallback question',
        category: 'Test',
        difficulty: 'easy',
        exam_type: 'AI-900'
      }];
    }
    
    return fallbackQuestions;
  }

  static getQuestionsSync(): Question[] {
    // Always return combined static data for reliability
    if (typeof window === 'undefined') {
      return [...predefinedQuestions, ...dragDropQuestions, ...dp700Questions];
    }
    
    try {
      const stored = localStorage.getItem(QUESTIONS_STORAGE_KEY);
      if (stored) {
        const parsedQuestions = JSON.parse(stored);
        // Ensure we have the latest questions by merging with static data
        const allQuestions = [...predefinedQuestions, ...dragDropQuestions, ...dp700Questions];
        return allQuestions.length > parsedQuestions.length ? allQuestions : parsedQuestions;
      }
    } catch (error) {
      console.warn('Error accessing localStorage, using static data:', error);
    }
    
    // Fallback to static data
    return [...predefinedQuestions, ...dragDropQuestions, ...dp700Questions];
  }

  static saveQuestions(questions: Question[]): void {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(QUESTIONS_STORAGE_KEY, JSON.stringify(questions));
      }
    } catch (error) {
      console.warn('Could not save to localStorage:', error);
    }
  }

  static async getQuestionsByExamType(examType: 'AZ-900' | 'AI-900' | 'DP-700'): Promise<Question[]> {
    const questions = await this.getQuestions();
    
    console.log(`[Storage] getQuestionsByExamType DEBUG:`, {
      examType,
      totalQuestions: questions.length,
      firstFewQuestions: questions.slice(0, 3).map(q => ({
        id: q?.id || 'NO_ID',
        exam_type: q?.exam_type || 'UNDEFINED',
        hasExamType: !!q?.exam_type,
        isObject: typeof q === 'object' && q !== null
      }))
    });
    
    // Validate questions and filter out any with undefined exam_type
    const validQuestions = questions.filter(q => q && q.exam_type);
    const invalidCount = questions.length - validQuestions.length;
    
    if (invalidCount > 0) {
      console.warn(`[Storage] Found ${invalidCount} questions with undefined exam_type, clearing localStorage`);
      // Clear localStorage to force refresh from static data
      localStorage.removeItem(QUESTIONS_STORAGE_KEY);
      // Get fresh questions and validate them too
      const freshQuestions = [...predefinedQuestions, ...dragDropQuestions, ...dp700Questions];
      const validFreshQuestions = freshQuestions.filter(q => q && q.exam_type);
      this.saveQuestions(validFreshQuestions);
      return validFreshQuestions.filter(q => q && q.exam_type && q.exam_type === examType);
    }
    
    const filtered = validQuestions.filter(q => q && q.exam_type && q.exam_type === examType);
    
    console.log(`[Storage] getQuestionsByExamType(${examType}):`, {
      totalQuestions: questions.length,
      filteredQuestions: filtered.length,
      examTypes: [...new Set(questions.map(q => q.exam_type))],
      sampleFiltered: filtered.slice(0, 3).map(q => ({ 
        id: q.id, 
        type: q.type, 
        exam_type: q.exam_type,
        correct_answer: q.correct_answer,
        options: q.options?.slice(0, 2) // First 2 options for debugging
      }))
    });
    
    // Special debugging for AI-900
    if (examType === 'AI-900') {
      console.log('[Storage] AI-900 SPECIFIC DEBUG:', {
        ai900Questions: filtered.length,
        ai900Ids: filtered.map(q => q.id),
        ai900CorrectAnswers: filtered.map(q => ({ id: q.id, correct_answer: q.correct_answer })),
        sampleAI900Question: filtered[0] ? {
          id: filtered[0].id,
          question: filtered[0].question.substring(0, 100) + '...',
          options: filtered[0].options,
          correct_answer: filtered[0].correct_answer,
          type: filtered[0].type,
          exam_type: filtered[0].exam_type
        } : 'No AI-900 questions found'
      });
    }
    
    return filtered;
  }

  static getQuestionsByExamTypeSync(examType: 'AZ-900' | 'AI-900' | 'DP-700'): Question[] {
    const questions = this.getQuestionsSync();
    
    // Validate questions and filter out any with undefined exam_type
    const validQuestions = questions.filter(q => q && q.exam_type);
    const invalidCount = questions.length - validQuestions.length;
    
    if (invalidCount > 0) {
      console.warn(`[Storage] Sync: Found ${invalidCount} questions with undefined exam_type`);
      // Return fresh static data
      const freshQuestions = [...predefinedQuestions, ...dragDropQuestions, ...dp700Questions];
      return freshQuestions.filter(q => q && q.exam_type && q.exam_type === examType);
    }
    
    const filtered = validQuestions.filter(q => q && q.exam_type && q.exam_type === examType);
    
    console.log(`[Storage] getQuestionsByExamTypeSync(${examType}):`, {
      totalQuestions: questions.length,
      filteredQuestions: filtered.length,
      examTypes: [...new Set(questions.map(q => q.exam_type))],
      sampleFiltered: filtered.slice(0, 3).map(q => ({ id: q.id, type: q.type, exam_type: q.exam_type }))
    });
    
    return filtered;
  }

  // Get all questions including drag-drop questions
  static getAllQuestionsSync(): Question[] {
    // Use the improved getQuestionsSync that already includes drag-drop questions
    return this.getQuestionsSync();
  }

  static getAllQuestionsByExamTypeSync(examType: 'AZ-900' | 'AI-900' | 'DP-700'): Question[] {
    const allQuestions = this.getAllQuestionsSync();
    return allQuestions.filter(q => q.exam_type === examType);
  }

  static getAllQuestionCounts(): { total: number; az900: number; ai900: number; dp700: number; dragDrop: { total: number; az900: number; ai900: number; dp700: number } } {
    const allQuestions = this.getQuestionsSync();
    const mcqQuestions = allQuestions.filter(q => q.type === 'mcq');
    const dragDropQuestionsFiltered = allQuestions.filter(q => q.type === 'drag-drop');
    
    const mcqAz900 = mcqQuestions.filter(q => q.exam_type === 'AZ-900').length;
    const mcqAi900 = mcqQuestions.filter(q => q.exam_type === 'AI-900').length;
    const mcqDp700 = mcqQuestions.filter(q => q.exam_type === 'DP-700').length;
    
    const dragDropAz900 = dragDropQuestionsFiltered.filter(q => q.exam_type === 'AZ-900').length;
    const dragDropAi900 = dragDropQuestionsFiltered.filter(q => q.exam_type === 'AI-900').length;
    const dragDropDp700 = dragDropQuestionsFiltered.filter(q => q.exam_type === 'DP-700').length;
    
    return {
      total: allQuestions.length,
      az900: mcqAz900 + dragDropAz900,
      ai900: mcqAi900 + dragDropAi900,
      dp700: mcqDp700 + dragDropDp700,
      dragDrop: {
        total: dragDropQuestionsFiltered.length,
        az900: dragDropAz900,
        ai900: dragDropAi900,
        dp700: dragDropDp700
      }
    };
  }

  static getQuestionCounts(): { total: number; az900: number; ai900: number; dp700: number } {
    const questions = this.getQuestionsSync();
    const az900Count = questions.filter(q => q.exam_type === 'AZ-900').length;
    const ai900Count = questions.filter(q => q.exam_type === 'AI-900').length;
    const dp700Count = questions.filter(q => q.exam_type === 'DP-700').length;
    
    return {
      total: questions.length,
      az900: az900Count,
      ai900: ai900Count,
      dp700: dp700Count
    };
  }

  static async getRandomQuestions(examType: 'AZ-900' | 'AI-900' | 'DP-700', count: number): Promise<Question[]> {
    const questions = await this.getQuestionsByExamType(examType);
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }

  // Get questions by difficulty level (Practice Mode)
  static async getQuestionsByDifficulty(examType: 'AZ-900' | 'AI-900' | 'DP-700', difficulty: 'easy' | 'medium' | 'hard', count: number): Promise<Question[]> {
    const allQuestions = await this.getQuestions();
    
    // Filter by exam type and difficulty
    const filteredQuestions = allQuestions.filter(q => 
      q && q.exam_type === examType && q.difficulty === difficulty
    );
    
    console.log(`[Storage] getQuestionsByDifficulty(${examType}, ${difficulty}):`, {
      totalQuestions: allQuestions.length,
      filteredQuestions: filteredQuestions.length,
      requestedCount: count,
      availableQuestions: filteredQuestions.map(q => ({
        id: q.id,
        difficulty: q.difficulty,
        category: q.category
      }))
    });
    
    if (filteredQuestions.length === 0) {
      console.warn(`[Storage] No questions found for ${examType} with difficulty ${difficulty}`);
      return [];
    }
    
    // Shuffle and return requested count
    const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }

  // Get mixed difficulty questions (Examination Mode)
  static async getRandomMixedQuestions(examType: 'AZ-900' | 'AI-900' | 'DP-700', count: number): Promise<Question[]> {
    const allQuestions = await this.getQuestions();
    
    // Filter by exam type only
    const examQuestions = allQuestions.filter(q => 
      q && q.exam_type === examType
    );
    
    console.log(`[Storage] getRandomMixedQuestions(${examType}):`, {
      totalQuestions: allQuestions.length,
      examQuestions: examQuestions.length,
      requestedCount: count,
      difficultyBreakdown: {
        easy: examQuestions.filter(q => q.difficulty === 'easy').length,
        medium: examQuestions.filter(q => q.difficulty === 'medium').length,
        hard: examQuestions.filter(q => q.difficulty === 'hard').length
      }
    });
    
    if (examQuestions.length === 0) {
      console.warn(`[Storage] No questions found for ${examType}`);
      return [];
    }
    
    // Shuffle and return requested count
    const shuffled = [...examQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }

  // Get random questions including drag-drop questions
  static async getRandomAllQuestions(examType: 'AZ-900' | 'AI-900' | 'DP-700', count: number, includeDragDrop: boolean = true): Promise<Question[]> {
    let allQuestions: Question[];
    
    console.log('[Storage] getRandomAllQuestions called with:', { examType, count, includeDragDrop });
    
    // Safety check for imports
    if (!predefinedQuestions || !Array.isArray(predefinedQuestions)) {
      console.error('[Storage] predefinedQuestions not properly loaded!', predefinedQuestions);
      return [];
    }
    
    if (!dragDropQuestions || !Array.isArray(dragDropQuestions)) {
      console.error('[Storage] dragDropQuestions not properly loaded!', dragDropQuestions);
      // Continue with just predefined questions
    }
    
    if (includeDragDrop && dragDropQuestions && Array.isArray(dragDropQuestions)) {
      const mcqQuestions = await this.getQuestionsByExamType(examType);
      const examDragDropQuestions = dragDropQuestions.filter(q => q.exam_type === examType);
      allQuestions = [...mcqQuestions, ...examDragDropQuestions];
      console.log('[Storage] Combined questions:', { 
        mcq: mcqQuestions.length, 
        dragDrop: examDragDropQuestions.length, 
        total: allQuestions.length 
      });
    } else {
      allQuestions = await this.getQuestionsByExamType(examType);
      console.log('[Storage] MCQ questions only:', allQuestions.length);
    }
    
    if (allQuestions.length === 0) {
      console.error(`[Storage] No questions found for exam type: ${examType}`);
      console.log('[Storage] Available exam types in data:', {
        predefinedTypes: predefinedQuestions ? [...new Set(predefinedQuestions.map(q => q.exam_type))] : [],
        dragDropTypes: dragDropQuestions ? [...new Set(dragDropQuestions.map(q => q.exam_type))] : []
      });
      return [];
    }
    
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    const result = shuffled.slice(0, Math.min(count, shuffled.length));
    console.log('[Storage] Final random questions selected:', result.length);
    return result;
  }

  static async clearQuestions(): Promise<void> {
    localStorage.removeItem(QUESTIONS_STORAGE_KEY);
    // Reinitialize with predefined questions
    await this.initializeQuestions();
  }

  // Force refresh localStorage with current static data
  static forceRefreshQuestions(): void {
    console.log('[Storage] Force refreshing questions from static data...');
    localStorage.removeItem(QUESTIONS_STORAGE_KEY);
    const allQuestions = [...predefinedQuestions, ...dragDropQuestions, ...dp700Questions];
    this.saveQuestions(allQuestions);
    console.log(`[Storage] Refreshed with ${allQuestions.length} questions`);
  }
}