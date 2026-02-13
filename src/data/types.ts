export type QuestionType = 'multiple-choice' | 'fill-in' | 'true-false'

export interface Question {
  id: string
  topicId: string
  subtopicId: string
  difficulty: 1 | 2 | 3 | 4 | 5
  type: QuestionType
  question: string
  answer: string
  options?: string[]
  hint1: string
  hint2: string
  explanation: string
}

export interface Topic {
  id: string
  name: string
  icon: string
  color: string
  subtopics: Subtopic[]
}

export interface Subtopic {
  id: string
  name: string
  description: string
}

export interface SubtopicProgress {
  currentLevel: number
  streak: number
  levelStats: Record<number, { correct: number; total: number }>
  mastered: boolean
  lastAttempted: string
}

export interface QuizSession {
  topicId: string
  subtopicId: string
  questions: Question[]
  currentIndex: number
  answers: QuizAnswer[]
  startedAt: string
}

export interface QuizAnswer {
  questionId: string
  studentAnswer: string
  correct: boolean
  hintsUsed: number
  timeSpent: number
}
