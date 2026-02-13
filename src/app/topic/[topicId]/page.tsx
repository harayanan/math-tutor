'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getTopic } from '@/data/topics'
import { SubtopicProgress } from '@/data/types'
import { getProgress } from '@/lib/progress'
import { SubtopicRow } from '@/components/subtopic-row'
import { createDefaultProgress } from '@/lib/progress'

export default function TopicPage() {
  const params = useParams<{ topicId: string }>()
  const topic = getTopic(params.topicId)
  const [progressMap, setProgressMap] = useState<Record<string, SubtopicProgress>>({})

  useEffect(() => {
    if (!topic) return
    const map: Record<string, SubtopicProgress> = {}
    for (const subtopic of topic.subtopics) {
      map[subtopic.id] = getProgress(subtopic.id)
    }
    setProgressMap(map)
  }, [topic])

  if (!topic) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Topic not found.</p>
        <Link href="/" className="text-indigo-600 hover:underline text-sm mt-2 inline-block">
          Back to topics
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        All Topics
      </Link>

      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">{topic.name}</h1>
        <p className="text-muted-foreground text-sm">
          Choose a subtopic to start practicing
        </p>
      </div>

      <div className="space-y-2">
        {topic.subtopics.map((subtopic) => (
          <SubtopicRow
            key={subtopic.id}
            topicId={topic.id}
            subtopic={subtopic}
            progress={progressMap[subtopic.id] ?? createDefaultProgress()}
          />
        ))}
      </div>
    </div>
  )
}
