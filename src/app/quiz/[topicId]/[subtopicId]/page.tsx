'use client'

import { useEffect, useState, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { QuizQuestion } from '@/components/quiz-question'
import { StreakIndicator } from '@/components/streak-indicator'
import { getTopic, getSubtopic } from '@/data/topics'
import { QuizSession, QuizAnswer } from '@/data/types'
import { createQuizSession } from '@/lib/quiz-engine'
import { getProgress, saveProgress } from '@/lib/progress'
import { processAnswer } from '@/lib/adaptive'
import { getLevelLabel } from '@/lib/adaptive'

export default function QuizPage() {
  const params = useParams<{ topicId: string; subtopicId: string }>()
  const router = useRouter()
  const topic = getTopic(params.topicId)
  const subtopic = getSubtopic(params.topicId, params.subtopicId)

  const [session, setSession] = useState<QuizSession | null>(null)
  const [streak, setStreak] = useState(0)
  const [levelUpMessage, setLevelUpMessage] = useState<string | null>(null)

  useEffect(() => {
    if (!topic || !subtopic) return
    const newSession = createQuizSession(params.topicId, params.subtopicId)
    setSession(newSession)
    const progress = getProgress(params.subtopicId)
    setStreak(Math.max(0, progress.streak))
  }, [topic, subtopic, params.topicId, params.subtopicId])

  const handleAnswer = useCallback(
    (answer: string, hintsUsed: number) => {
      if (!session) return

      const currentQuestion = session.questions[session.currentIndex]
      const isCorrect =
        answer.trim().toLowerCase() === currentQuestion.answer.trim().toLowerCase()

      // Update adaptive progress
      const progress = getProgress(params.subtopicId)
      const result = processAnswer(progress, isCorrect)
      saveProgress(params.subtopicId, result.newProgress)

      // Update streak display
      setStreak(Math.max(0, result.newProgress.streak))

      // Show level-up message
      if (result.leveledUp) {
        setLevelUpMessage(`Level up! Now at ${getLevelLabel(result.newProgress.currentLevel)}`)
        setTimeout(() => setLevelUpMessage(null), 2500)
      } else if (result.justMastered) {
        setLevelUpMessage('Mastered! Amazing work!')
        setTimeout(() => setLevelUpMessage(null), 3000)
      }

      const quizAnswer: QuizAnswer = {
        questionId: currentQuestion.id,
        studentAnswer: answer,
        correct: isCorrect,
        hintsUsed,
        timeSpent: 0,
      }

      const newAnswers = [...session.answers, quizAnswer]
      const nextIndex = session.currentIndex + 1

      if (nextIndex >= session.questions.length) {
        // Quiz complete — navigate to results
        const resultsData = {
          topicId: params.topicId,
          subtopicId: params.subtopicId,
          answers: newAnswers,
          totalQuestions: session.questions.length,
        }
        sessionStorage.setItem('quiz-results', JSON.stringify(resultsData))
        router.push('/results')
      } else {
        setSession({
          ...session,
          currentIndex: nextIndex,
          answers: newAnswers,
        })
      }
    },
    [session, params.subtopicId, params.topicId, router]
  )

  if (!topic || !subtopic) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Quiz not found.</p>
        <Link href="/" className="text-indigo-600 hover:underline text-sm mt-2 inline-block">
          Back to topics
        </Link>
      </div>
    )
  }

  if (!session || session.questions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Loading questions...</p>
      </div>
    )
  }

  const currentQuestion = session.questions[session.currentIndex]
  const progressPercent = (session.currentIndex / session.questions.length) * 100

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <Link
          href={`/topic/${params.topicId}`}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {topic.name}
        </Link>
        <StreakIndicator streak={streak} />
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-lg font-semibold">{subtopic.name}</h1>
          <span className="text-xs text-muted-foreground">
            {session.currentIndex + 1} / {session.questions.length}
          </span>
        </div>
        <Progress value={progressPercent} className="h-2" />
      </div>

      {/* Level-up toast */}
      {levelUpMessage && (
        <div className="mb-4 p-3 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-800 text-sm font-medium text-center animate-in fade-in slide-in-from-top-2">
          {levelUpMessage}
        </div>
      )}

      <QuizQuestion
        key={currentQuestion.id}
        question={currentQuestion}
        questionNumber={session.currentIndex + 1}
        totalQuestions={session.questions.length}
        onAnswer={handleAnswer}
      />
    </div>
  )
}
