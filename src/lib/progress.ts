import { SubtopicProgress } from '@/data/types'

const STORAGE_KEY = 'math-tutor-progress'

function getAll(): Record<string, SubtopicProgress> {
  if (typeof window === 'undefined') return {}
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveAll(data: Record<string, SubtopicProgress>) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function getProgress(subtopicId: string): SubtopicProgress {
  const all = getAll()
  return all[subtopicId] ?? createDefaultProgress()
}

export function saveProgress(subtopicId: string, progress: SubtopicProgress) {
  const all = getAll()
  all[subtopicId] = progress
  saveAll(all)
}

export function getAllProgress(): Record<string, SubtopicProgress> {
  return getAll()
}

export function getTopicMastery(subtopicIds: string[]): number {
  const all = getAll()
  if (subtopicIds.length === 0) return 0

  let totalScore = 0
  for (const id of subtopicIds) {
    const p = all[id]
    if (!p) continue
    if (p.mastered) {
      totalScore += 100
    } else {
      // Partial credit based on level progression
      totalScore += ((p.currentLevel - 1) / 3) * 80
      // Plus accuracy bonus
      const stats = p.levelStats[p.currentLevel]
      if (stats && stats.total > 0) {
        totalScore += (stats.correct / stats.total) * 20
      }
    }
  }

  return Math.round(totalScore / subtopicIds.length)
}

export function getSubtopicAccuracy(subtopicId: string): number {
  const p = getProgress(subtopicId)
  let correct = 0
  let total = 0
  for (const stats of Object.values(p.levelStats)) {
    correct += stats.correct
    total += stats.total
  }
  return total === 0 ? 0 : Math.round((correct / total) * 100)
}

export function createDefaultProgress(): SubtopicProgress {
  return {
    currentLevel: 1,
    streak: 0,
    levelStats: {},
    mastered: false,
    lastAttempted: '',
  }
}

export function resetProgress() {
  if (typeof window === 'undefined') return
  localStorage.removeItem(STORAGE_KEY)
}
