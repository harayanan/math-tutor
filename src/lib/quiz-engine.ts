import { Question, QuizSession, QuizAnswer } from '@/data/types'
import { getProgress } from './progress'

// Import all question banks
import { questions as arithmeticQuestions } from '@/data/questions/arithmetic'
import { questions as fractionsQuestions } from '@/data/questions/fractions'
import { questions as decimalsQuestions } from '@/data/questions/decimals'
import { questions as geometryQuestions } from '@/data/questions/geometry'
import { questions as wordProblemsQuestions } from '@/data/questions/word-problems'
import { questions as preAlgebraQuestions } from '@/data/questions/pre-algebra'

const allQuestions: Question[] = [
  ...arithmeticQuestions,
  ...fractionsQuestions,
  ...decimalsQuestions,
  ...geometryQuestions,
  ...wordProblemsQuestions,
  ...preAlgebraQuestions,
]

const QUESTIONS_PER_SESSION = 10

export function getQuestionsForSubtopic(
  topicId: string,
  subtopicId: string,
  difficulty: number
): Question[] {
  return allQuestions.filter(
    q =>
      q.topicId === topicId &&
      q.subtopicId === subtopicId &&
      q.difficulty === difficulty
  )
}

export function createQuizSession(
  topicId: string,
  subtopicId: string,
  chosenDifficulty?: number
): QuizSession {
  const progress = getProgress(subtopicId)
  const level = chosenDifficulty ?? progress.currentLevel

  // Get questions at chosen difficulty
  let pool = getQuestionsForSubtopic(topicId, subtopicId, level)

  // Supplement with adjacent levels to reach 10 questions
  if (pool.length < QUESTIONS_PER_SESSION) {
    const adjacentLevels = [level - 1, level + 1].filter(l => l >= 1 && l <= 4)
    for (const adjLevel of adjacentLevels) {
      if (pool.length >= QUESTIONS_PER_SESSION) break
      const extra = getQuestionsForSubtopic(topicId, subtopicId, adjLevel)
      pool = [...pool, ...extra]
    }
  }

  // If still not enough, widen the search to all levels
  if (pool.length < QUESTIONS_PER_SESSION) {
    const allLevels = [1, 2, 3, 4].filter(l => l !== level && !([level - 1, level + 1].includes(l)))
    for (const l of allLevels) {
      if (pool.length >= QUESTIONS_PER_SESSION) break
      const extra = getQuestionsForSubtopic(topicId, subtopicId, l)
      pool = [...pool, ...extra]
    }
  }

  // Shuffle and take up to QUESTIONS_PER_SESSION
  const shuffled = shuffleArray(pool)
  const selected = shuffled.slice(0, QUESTIONS_PER_SESSION)

  return {
    topicId,
    subtopicId,
    questions: selected,
    currentIndex: 0,
    answers: [],
    startedAt: new Date().toISOString(),
  }
}

export function checkAnswer(question: Question, studentAnswer: string): boolean {
  const normalize = (s: string) =>
    s.trim().toLowerCase().replace(/\s+/g, ' ')

  return normalize(question.answer) === normalize(studentAnswer)
}

export function getSessionStats(answers: QuizAnswer[]) {
  const total = answers.length
  const correct = answers.filter(a => a.correct).length
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0
  const hintsUsed = answers.reduce((sum, a) => sum + a.hintsUsed, 0)

  // Calculate longest streak
  let longestStreak = 0
  let currentStreak = 0
  for (const answer of answers) {
    if (answer.correct) {
      currentStreak++
      longestStreak = Math.max(longestStreak, currentStreak)
    } else {
      currentStreak = 0
    }
  }

  return { total, correct, accuracy, hintsUsed, longestStreak }
}

export function getEncouragingMessage(accuracy: number): string {
  if (accuracy === 100) return "Perfect score! You're a math superstar!"
  if (accuracy >= 80) return "Excellent work! You really know your stuff!"
  if (accuracy >= 60) return "Good effort! You're getting stronger!"
  if (accuracy >= 40) return "Keep practicing — you're making progress!"
  return "Don't give up! Every mistake is a chance to learn!"
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
