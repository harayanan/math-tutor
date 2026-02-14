import { CheckCircle, XCircle } from 'lucide-react'
import { Question, QuizAnswer } from '@/data/types'

interface QuestionReviewCardProps {
  question: Question
  answer: QuizAnswer
  index: number
}

export function QuestionReviewCard({ question, answer, index }: QuestionReviewCardProps) {
  const isCorrect = answer.correct

  return (
    <div
      className={`rounded-lg border-l-4 border bg-card p-4 ${
        isCorrect
          ? 'border-l-emerald-500'
          : 'border-l-rose-500'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-muted-foreground">
          Question {index + 1}
        </span>
        <span
          className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${
            isCorrect
              ? 'bg-emerald-100 text-emerald-700'
              : 'bg-rose-100 text-rose-700'
          }`}
        >
          {isCorrect ? (
            <CheckCircle className="h-3 w-3" />
          ) : (
            <XCircle className="h-3 w-3" />
          )}
          {isCorrect ? 'Correct' : 'Incorrect'}
        </span>
      </div>

      {/* Question text */}
      <p className="text-sm font-medium mb-3">{question.question}</p>

      {/* Answers */}
      <div className="space-y-1.5 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground w-20 shrink-0">Your answer:</span>
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded ${
              isCorrect
                ? 'bg-emerald-50 text-emerald-700'
                : 'bg-rose-50 text-rose-700'
            }`}
          >
            {answer.studentAnswer}
          </span>
        </div>
        {!isCorrect && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground w-20 shrink-0">Correct answer:</span>
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
              {question.answer}
            </span>
          </div>
        )}
      </div>

      {/* Explanation */}
      <div className="bg-slate-50 rounded-md p-3">
        <p className="text-xs text-slate-600">{question.explanation}</p>
      </div>
    </div>
  )
}
