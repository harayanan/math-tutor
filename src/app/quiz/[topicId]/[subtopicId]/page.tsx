'use client'

import { useEffect, useState, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Star } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { QuizQuestion } from '@/components/quiz-question'
import { StreakIndicator } from '@/components/streak-indicator'
import { getTopic, getSubtopic } from '@/data/topics'
import { QuizSession, QuizAnswer } from '@/data/types'
import { createQuizSession } from '@/lib/quiz-engine'
import { getProgress, saveProgress } from '@/lib/progress'
import { processAnswer } from '@/lib/adaptive'
import { getLevelLabel, getLevelColor } from '@/lib/adaptive'

const DIFFICULTY_OPTIONS = [
  { level: 1, label: 'Easy', stars: 1, description: 'Warm up with the basics' },
  { level: 2, label: 'Medium', stars: 2, description: 'A solid challenge' },
  { level: 3, label: 'Hard', stars: 3, description: 'Push your limits' },
  { level: 4, label: 'Very Hard', stars: 4, description: 'Only for the brave!' },
]

export default function QuizPage() {
  const params = useParams<{ topicId: string; subtopicId: string }>()
  const router = useRouter()
  const topic = getTopic(params.topicId)
  const subtopic = getSubtopic(params.topicId, params.subtopicId)

  const [session, setSession] = useState<QuizSession | null>(null)
  const [choosingDifficulty, setChoosingDifficulty] = useState(true)
  const [streak, setStreak] = useState(0)
  const [levelUpMessage, setLevelUpMessage] = useState<string | null>(null)
  const [recommendedLevel, setRecommendedLevel] = useState(1)

  useEffect(() => {
    if (!topic || !subtopic) return
    const progress = getProgress(params.subtopicId)
    setRecommendedLevel(Math.min(progress.currentLevel, 4))
    setStreak(Math.max(0, progress.streak))
  }, [topic, subtopic, params.topicId, params.subtopicId])

  const startQuiz = useCallback((difficulty: number) => {
    const newSession = createQuizSession(params.topicId, params.subtopicId, difficulty)
    setSession(newSession)
    setChoosingDifficulty(false)
  }, [params.topicId, params.subtopicId])

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
          questions: session.questions,
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

  // Difficulty chooser screen
  if (choosingDifficulty) {
    return (
      <div>
        <Link
          href={`/topic/${params.topicId}`}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          {topic.name}
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">{subtopic.name}</h1>
          <p className="text-muted-foreground text-sm">Choose your difficulty level</p>
        </div>

        <div className="grid gap-3 max-w-md mx-auto">
          {DIFFICULTY_OPTIONS.map((opt) => {
            const isRecommended = opt.level === recommendedLevel
            const levelColor = getLevelColor(opt.level)
            return (
              <button
                key={opt.level}
                onClick={() => startQuiz(opt.level)}
                className={`relative flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                  isRecommended
                    ? 'border-indigo-400 bg-indigo-50 shadow-sm'
                    : 'border-border hover:border-indigo-200 hover:bg-accent/50'
                }`}
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: opt.stars }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 fill-current ${levelColor}`} />
                  ))}
                  {Array.from({ length: 4 - opt.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-muted-foreground/30" />
                  ))}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">Level {opt.level} — {opt.label}</div>
                  <div className="text-xs text-muted-foreground">{opt.description}</div>
                </div>
                {isRecommended && (
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full">
                    Recommended
                  </span>
                )}
              </button>
            )
          })}
        </div>
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
