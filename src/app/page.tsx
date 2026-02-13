'use client'

import { useEffect, useState } from 'react'
import { topics } from '@/data/topics'
import { getTopicMastery } from '@/lib/progress'
import { TopicCard } from '@/components/topic-card'
import { useGrade } from '@/lib/grade-context'

export default function HomePage() {
  const [masteryMap, setMasteryMap] = useState<Record<string, number>>({})
  const { grade } = useGrade()

  useEffect(() => {
    const map: Record<string, number> = {}
    for (const topic of topics) {
      const subtopicIds = topic.subtopics.map((s) => s.id)
      map[topic.id] = getTopicMastery(subtopicIds)
    }
    setMasteryMap(map)
  }, [])

  const filteredTopics =
    grade === 'all'
      ? topics
      : topics.filter((t) => t.grades.includes(Number(grade)))

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Choose a Topic</h1>
        <p className="text-muted-foreground">
          Pick a math topic to practice. Questions adapt to your level!
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {filteredTopics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            mastery={masteryMap[topic.id] ?? 0}
          />
        ))}
      </div>
    </div>
  )
}
