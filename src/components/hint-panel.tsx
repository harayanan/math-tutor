'use client'

import { useState } from 'react'
import { Lightbulb, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Question } from '@/data/types'

interface HintPanelProps {
  question: Question
  studentAnswer: string
  onHintUsed: () => void
}

export function HintPanel({ question, studentAnswer, onHintUsed }: HintPanelProps) {
  const [hintsRevealed, setHintsRevealed] = useState(0)
  const [llmHint, setLlmHint] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const revealNextHint = async () => {
    const next = hintsRevealed + 1
    setHintsRevealed(next)
    onHintUsed()

    if (next === 3 && !llmHint) {
      setLoading(true)
      try {
        const res = await fetch('/api/hint', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            question: question.question,
            correctAnswer: question.answer,
            studentAnswer: studentAnswer || 'no answer yet',
          }),
        })
        const data = await res.json()
        setLlmHint(data.hint)
      } catch {
        setLlmHint("Let's think step by step. What's the first thing you need to figure out?")
      } finally {
        setLoading(false)
      }
    }
  }

  const reset = () => {
    setHintsRevealed(0)
    setLlmHint(null)
  }

  return (
    <div className="space-y-3">
      {hintsRevealed >= 1 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm animate-in fade-in slide-in-from-top-2">
          <p className="font-medium text-amber-800 mb-1">Hint 1</p>
          <p className="text-amber-700">{question.hint1}</p>
        </div>
      )}

      {hintsRevealed >= 2 && (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-sm animate-in fade-in slide-in-from-top-2">
          <p className="font-medium text-orange-800 mb-1">Hint 2</p>
          <p className="text-orange-700">{question.hint2}</p>
        </div>
      )}

      {hintsRevealed >= 3 && (
        <div className="bg-violet-50 border border-violet-200 rounded-lg p-3 text-sm animate-in fade-in slide-in-from-top-2">
          <p className="font-medium text-violet-800 mb-1">Tutor&apos;s Hint</p>
          {loading ? (
            <div className="flex items-center gap-2 text-violet-600">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Thinking...</span>
            </div>
          ) : (
            <p className="text-violet-700">{llmHint}</p>
          )}
        </div>
      )}

      {hintsRevealed < 3 && (
        <Button
          variant="outline"
          size="sm"
          onClick={revealNextHint}
          className="gap-1.5"
        >
          <Lightbulb className="h-4 w-4" />
          {hintsRevealed === 0
            ? 'Need a hint?'
            : hintsRevealed === 1
              ? 'Another hint'
              : 'Ask the tutor'}
        </Button>
      )}
    </div>
  )

  // Expose reset for parent
  void reset
}
