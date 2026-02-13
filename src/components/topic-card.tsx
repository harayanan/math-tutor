'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { ProgressRing } from './progress-ring'
import { Topic } from '@/data/types'
import {
  Calculator,
  PieChart,
  Hash,
  Triangle,
  BookOpen,
  Variable,
} from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calculator,
  PieChart,
  Hash,
  Triangle,
  BookOpen,
  Variable,
}

const colorMap: Record<string, { bg: string; border: string; icon: string }> = {
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', icon: 'text-indigo-600' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-200', icon: 'text-violet-600' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', icon: 'text-emerald-600' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-200', icon: 'text-amber-600' },
  rose: { bg: 'bg-rose-50', border: 'border-rose-200', icon: 'text-rose-600' },
  sky: { bg: 'bg-sky-50', border: 'border-sky-200', icon: 'text-sky-600' },
}

interface TopicCardProps {
  topic: Topic
  mastery: number
}

export function TopicCard({ topic, mastery }: TopicCardProps) {
  const Icon = iconMap[topic.icon] ?? Calculator
  const colors = colorMap[topic.color] ?? colorMap.indigo

  return (
    <Link href={`/topic/${topic.id}`}>
      <Card
        className={`${colors.border} hover:shadow-md transition-all duration-200 cursor-pointer group`}
      >
        <CardContent className="p-6 flex items-center gap-4">
          <div className={`${colors.bg} rounded-xl p-3 group-hover:scale-105 transition-transform`}>
            <Icon className={`h-7 w-7 ${colors.icon}`} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base">{topic.name}</h3>
            <p className="text-sm text-muted-foreground">
              {topic.subtopics.length} subtopics
            </p>
          </div>
          <ProgressRing percentage={mastery} />
        </CardContent>
      </Card>
    </Link>
  )
}
