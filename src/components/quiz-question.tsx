'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { HintPanel } from './hint-panel'
import { Question } from '@/data/types'
import { CheckCircle, XCircle } from 'lucide-react'

interface QuizQuestionProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  onAnswer: (answer: string, hintsUsed: number) => void
}

export function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [fillAnswer, setFillAnswer] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [hintsUsed, setHintsUsed] = useState(0)

  const currentAnswer =
    question.type === 'fill-in' ? fillAnswer : selectedAnswer

  const isCorrect = submitted
    ? currentAnswer.trim().toLowerCase() === question.answer.trim().toLowerCase()
    : null

  const handleSubmit = () => {
    if (!currentAnswer.trim()) return
    setSubmitted(true)
  }

  const handleNext = () => {
    onAnswer(currentAnswer, hintsUsed)
    setSelectedAnswer('')
    setFillAnswer('')
    setSubmitted(false)
    setHintsUsed(0)
  }

  return (
    <div className="space-y-6">
      {/* Question */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-muted-foreground">
              Question {questionNumber} of {totalQuestions}
            </span>
            <span className="text-xs text-muted-foreground capitalize">
              {question.type.replace('-', ' ')}
            </span>
          </div>
          <p className="text-lg font-medium leading-relaxed">
            {question.question}
          </p>
        </CardContent>
      </Card>

      {/* Answer Area */}
      <div className="space-y-3">
        {question.type === 'multiple-choice' && question.options && (
          <div className="grid gap-2">
            {question.options.map((option) => {
              let optionStyle = 'border hover:bg-accent/50'
              if (submitted) {
                if (option === question.answer) {
                  optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900'
                } else if (option === selectedAnswer && !isCorrect) {
                  optionStyle = 'border-rose-500 bg-rose-50 text-rose-900'
                } else {
                  optionStyle = 'border opacity-50'
                }
              } else if (option === selectedAnswer) {
                optionStyle = 'border-indigo-500 bg-indigo-50'
              }

              return (
                <button
                  key={option}
                  onClick={() => !submitted && setSelectedAnswer(option)}
                  disabled={submitted}
                  className={`text-left p-3 rounded-lg text-sm transition-all ${optionStyle}`}
                >
                  {option}
                </button>
              )
            })}
          </div>
        )}

        {question.type === 'true-false' && (
          <div className="grid grid-cols-2 gap-3">
            {['True', 'False'].map((option) => {
              let optionStyle = 'border hover:bg-accent/50'
              if (submitted) {
                if (option === question.answer) {
                  optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900'
                } else if (option === selectedAnswer && !isCorrect) {
                  optionStyle = 'border-rose-500 bg-rose-50 text-rose-900'
                } else {
                  optionStyle = 'border opacity-50'
                }
              } else if (option === selectedAnswer) {
                optionStyle = 'border-indigo-500 bg-indigo-50'
              }

              return (
                <button
                  key={option}
                  onClick={() => !submitted && setSelectedAnswer(option)}
                  disabled={submitted}
                  className={`p-3 rounded-lg text-sm font-medium transition-all ${optionStyle}`}
                >
                  {option}
                </button>
              )
            })}
          </div>
        )}

        {question.type === 'fill-in' && (
          <input
            type="text"
            value={fillAnswer}
            onChange={(e) => setFillAnswer(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !submitted && handleSubmit()}
            disabled={submitted}
            placeholder="Type your answer..."
            className="w-full p-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-60"
          />
        )}
      </div>

      {/* Feedback */}
      {submitted && (
        <div
          className={`flex items-start gap-3 p-4 rounded-lg animate-in fade-in slide-in-from-bottom-2 ${
            isCorrect
              ? 'bg-emerald-50 border border-emerald-200'
              : 'bg-rose-50 border border-rose-200'
          }`}
        >
          {isCorrect ? (
            <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
          ) : (
            <XCircle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
          )}
          <div className="text-sm">
            <p className={`font-medium mb-1 ${isCorrect ? 'text-emerald-800' : 'text-rose-800'}`}>
              {isCorrect ? 'Correct!' : `Not quite. The answer is: ${question.answer}`}
            </p>
            <p className={isCorrect ? 'text-emerald-700' : 'text-rose-700'}>
              {question.explanation}
            </p>
          </div>
        </div>
      )}

      {/* Hints (only before submitting) */}
      {!submitted && (
        <HintPanel
          question={question}
          studentAnswer={currentAnswer}
          onHintUsed={() => setHintsUsed((h) => h + 1)}
        />
      )}

      {/* Actions */}
      <div className="flex justify-end">
        {!submitted ? (
          <Button
            onClick={handleSubmit}
            disabled={!currentAnswer.trim()}
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            Check Answer
          </Button>
        ) : (
          <Button onClick={handleNext} className="bg-indigo-600 hover:bg-indigo-700">
            {questionNumber === totalQuestions ? 'See Results' : 'Next Question'}
          </Button>
        )}
      </div>
    </div>
  )
}
