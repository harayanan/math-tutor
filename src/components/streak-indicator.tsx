'use client'

import { useEffect, useRef, useState } from 'react'
import { Flame } from 'lucide-react'

interface StreakIndicatorProps {
  streak: number
}

export function StreakIndicator({ streak }: StreakIndicatorProps) {
  const prevStreak = useRef(streak)
  const [bumping, setBumping] = useState(false)

  useEffect(() => {
    if (streak > prevStreak.current && streak > 0) {
      setBumping(true)
      const timer = setTimeout(() => setBumping(false), 450)
      prevStreak.current = streak
      return () => clearTimeout(timer)
    }
    prevStreak.current = streak
  }, [streak])

  if (streak <= 0) return null

  const isMilestone = streak >= 5 && streak % 5 === 0
  const isHot = streak >= 3

  return (
    <div
      className={`flex items-center gap-1.5 font-semibold transition-colors ${
        isMilestone ? 'text-orange-500' : 'text-amber-500'
      } ${bumping ? 'animate-streak-bump' : ''}`}
    >
      <Flame
        className={`h-5 w-5 ${isHot ? 'animate-pulse' : ''} ${
          isMilestone ? 'h-6 w-6' : ''
        }`}
      />
      <span className="text-sm tabular-nums">{streak}</span>
      {isMilestone && (
        <span className="text-xs font-bold animate-in fade-in zoom-in">
          FIRE!
        </span>
      )}
    </div>
  )
}
