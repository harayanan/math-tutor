import { SubtopicProgress } from '@/data/types'

const STREAK_TO_LEVEL_UP = 3
const STREAK_TO_LEVEL_DOWN = 2
const MAX_LEVEL = 4
const MIN_LEVEL = 1
const MASTERY_ACCURACY = 0.8

export interface AdaptiveResult {
  newProgress: SubtopicProgress
  leveledUp: boolean
  leveledDown: boolean
  justMastered: boolean
}

export function processAnswer(
  progress: SubtopicProgress,
  correct: boolean
): AdaptiveResult {
  const level = progress.currentLevel
  const levelStats = { ...progress.levelStats }

  // Initialize level stats if needed
  if (!levelStats[level]) {
    levelStats[level] = { correct: 0, total: 0 }
  }

  // Update stats
  levelStats[level] = {
    correct: levelStats[level].correct + (correct ? 1 : 0),
    total: levelStats[level].total + 1,
  }

  // Update streak
  let streak: number
  if (correct) {
    streak = progress.streak >= 0 ? progress.streak + 1 : 1
  } else {
    streak = progress.streak <= 0 ? progress.streak - 1 : -1
  }

  let newLevel = level
  let leveledUp = false
  let leveledDown = false

  // Check for level up: 3 consecutive correct
  if (streak >= STREAK_TO_LEVEL_UP && level < MAX_LEVEL) {
    newLevel = level + 1
    leveledUp = true
    streak = 0 // Reset streak on level change
  }

  // Check for level down: 2 consecutive incorrect
  if (streak <= -STREAK_TO_LEVEL_DOWN && level > MIN_LEVEL) {
    newLevel = level - 1
    leveledDown = true
    streak = 0 // Reset streak on level change
  }

  // Check for mastery
  const justMastered =
    !progress.mastered &&
    newLevel === MAX_LEVEL &&
    levelStats[MAX_LEVEL] &&
    levelStats[MAX_LEVEL].total >= 3 &&
    levelStats[MAX_LEVEL].correct / levelStats[MAX_LEVEL].total >= MASTERY_ACCURACY

  return {
    newProgress: {
      currentLevel: newLevel,
      streak,
      levelStats,
      mastered: progress.mastered || justMastered,
      lastAttempted: new Date().toISOString(),
    },
    leveledUp,
    leveledDown,
    justMastered,
  }
}

export function getLevelLabel(level: number): string {
  switch (level) {
    case 1: return 'Easy'
    case 2: return 'Medium'
    case 3: return 'Hard'
    case 4: return 'Very Hard'
    default: return 'Unknown'
  }
}

export function getLevelColor(level: number): string {
  switch (level) {
    case 1: return 'text-emerald-500'
    case 2: return 'text-amber-500'
    case 3: return 'text-orange-500'
    case 4: return 'text-rose-500'
    default: return 'text-muted-foreground'
  }
}
