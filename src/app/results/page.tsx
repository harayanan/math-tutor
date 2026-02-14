'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Trophy, RotateCcw, ArrowRight, Target, Flame, Lightbulb, Filter } from 'lucide-react'
import { getSessionStats, getEncouragingMessage } from '@/lib/quiz-engine'
import { getSubtopic, getTopic } from '@/data/topics'
import { QuizAnswer, Question } from '@/data/types'
import { QuestionReviewCard } from '@/components/question-review-card'

interface ResultsData {
  topicId: string
  subtopicId: string
  answers: QuizAnswer[]
  questions?: Question[]
  totalQuestions: number
}

export default function ResultsPage() {
  const router = useRouter()
  const [data, setData] = useState<ResultsData | null>(null)
  const [showOnlyWrong, setShowOnlyWrong] = useState(false)

  useEffect(() => {
    const raw = sessionStorage.getItem('quiz-results')
    if (raw) {
      setData(JSON.parse(raw))
    }
  }, [])

  if (!data) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">No results to show.</p>
        <Link href="/">
          <Button variant="outline">Back to Topics</Button>
        </Link>
      </div>
    )
  }

  const topic = getTopic(data.topicId)
  const subtopic = getSubtopic(data.topicId, data.subtopicId)
  const stats = getSessionStats(data.answers)
  const message = getEncouragingMessage(stats.accuracy)

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-4">
          <Trophy className="h-8 w-8 text-indigo-600" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Quiz Complete!</h1>
        <p className="text-muted-foreground text-sm">
          {topic?.name} — {subtopic?.name}
        </p>
      </div>

      {/* Score Card */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <div className="text-5xl font-bold text-indigo-600 mb-1">
              {stats.accuracy}%
            </div>
            <p className="text-sm text-muted-foreground">
              {stats.correct} of {stats.total} correct
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-1">
              <div className="flex items-center justify-center">
                <Target className="h-4 w-4 text-emerald-500" />
              </div>
              <div className="text-lg font-semibold">{stats.correct}</div>
              <div className="text-xs text-muted-foreground">Correct</div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center">
                <Flame className="h-4 w-4 text-amber-500" />
              </div>
              <div className="text-lg font-semibold">{stats.longestStreak}</div>
              <div className="text-xs text-muted-foreground">Best Streak</div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center">
                <Lightbulb className="h-4 w-4 text-violet-500" />
              </div>
              <div className="text-lg font-semibold">{stats.hintsUsed}</div>
              <div className="text-xs text-muted-foreground">Hints Used</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Encouraging Message */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 text-center mb-6">
        <p className="text-sm font-medium text-indigo-800">{message}</p>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button
          variant="outline"
          className="flex-1 gap-2"
          onClick={() => router.push(`/quiz/${data.topicId}/${data.subtopicId}`)}
        >
          <RotateCcw className="h-4 w-4" />
          Try Again
        </Button>
        <Button
          className="flex-1 gap-2 bg-indigo-600 hover:bg-indigo-700"
          onClick={() => router.push(`/topic/${data.topicId}`)}
        >
          Continue
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Review Section */}
      {data.questions && data.questions.length > 0 && (() => {
        const wrongCount = data.answers.filter((a) => !a.correct).length
        const reviewAnswers = showOnlyWrong
          ? data.answers.filter((a) => !a.correct)
          : data.answers

        return (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Review Your Answers</h2>
              {wrongCount > 0 && (
                <button
                  onClick={() => setShowOnlyWrong((v) => !v)}
                  className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
                    showOnlyWrong
                      ? 'bg-rose-100 text-rose-700'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Filter className="h-3 w-3" />
                  {showOnlyWrong ? 'Show All' : 'Show Mistakes Only'}
                </button>
              )}
            </div>
            <div className="space-y-3">
              {reviewAnswers.map((answer) => {
                const question = data.questions!.find((q) => q.id === answer.questionId)
                if (!question) return null
                const originalIndex = data.answers.indexOf(answer)
                return (
                  <QuestionReviewCard
                    key={answer.questionId}
                    question={question}
                    answer={answer}
                    index={originalIndex}
                  />
                )
              })}
            </div>
          </div>
        )
      })()}
    </div>
  )
}
