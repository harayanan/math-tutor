'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { MasteryBadge } from './mastery-badge'
import { Subtopic, SubtopicProgress } from '@/data/types'
import { getLevelLabel, getLevelColor } from '@/lib/adaptive'

interface SubtopicRowProps {
  topicId: string
  subtopic: Subtopic
  progress: SubtopicProgress
}

export function SubtopicRow({ topicId, subtopic, progress }: SubtopicRowProps) {
  const levelProgress = ((progress.currentLevel - 1) / 3) * 100
  const levelLabel = getLevelLabel(progress.currentLevel)
  const levelColor = getLevelColor(progress.currentLevel)

  // Calculate accuracy for current level
  const stats = progress.levelStats[progress.currentLevel]
  const accuracy = stats && stats.total > 0
    ? Math.round((stats.correct / stats.total) * 100)
    : 0

  return (
    <Link href={`/quiz/${topicId}/${subtopic.id}`}>
      <div className="flex items-center gap-4 p-4 rounded-lg border hover:bg-accent/50 transition-colors group cursor-pointer">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-medium text-sm">{subtopic.name}</h3>
            <MasteryBadge mastered={progress.mastered} />
          </div>
          <p className="text-xs text-muted-foreground mb-2">
            {subtopic.description}
          </p>
          <div className="flex items-center gap-3">
            <Progress value={levelProgress} className="flex-1 h-2" />
            <span className={`text-xs font-medium ${levelColor} whitespace-nowrap`}>
              {levelLabel}
            </span>
            {stats && stats.total > 0 && (
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {accuracy}% accuracy
              </span>
            )}
          </div>
        </div>
        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
      </div>
    </Link>
  )
}
