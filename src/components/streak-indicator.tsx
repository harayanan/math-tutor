'use client'

import { Flame } from 'lucide-react'

interface StreakIndicatorProps {
  streak: number
}

export function StreakIndicator({ streak }: StreakIndicatorProps) {
  if (streak <= 0) return null

  return (
    <div className="flex items-center gap-1.5 text-amber-500 font-semibold">
      <Flame className={`h-5 w-5 ${streak >= 3 ? 'animate-pulse' : ''}`} />
      <span className="text-sm">{streak}</span>
    </div>
  )
}
