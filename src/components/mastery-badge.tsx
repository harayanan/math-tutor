'use client'

import { Trophy } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface MasteryBadgeProps {
  mastered: boolean
  className?: string
}

export function MasteryBadge({ mastered, className = '' }: MasteryBadgeProps) {
  if (!mastered) return null

  return (
    <Badge
      className={`bg-amber-100 text-amber-700 border-amber-200 gap-1 ${className}`}
    >
      <Trophy className="h-3 w-3" />
      Mastered
    </Badge>
  )
}
