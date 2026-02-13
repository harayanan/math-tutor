import { NextRequest, NextResponse } from 'next/server'
import { generateSocraticHint } from '@/lib/gemini'

export async function POST(request: NextRequest) {
  try {
    const { question, correctAnswer, studentAnswer } = await request.json()

    if (!question || !correctAnswer || !studentAnswer) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const hint = await generateSocraticHint(question, correctAnswer, studentAnswer)

    return NextResponse.json({ hint })
  } catch (error) {
    console.error('Hint generation error:', error)

    if (error instanceof Error && error.message.includes('GEMINI_API_KEY')) {
      return NextResponse.json(
        { error: 'API key not configured', hint: "Hmm, let's think about this differently. Can you try breaking the problem into smaller steps?" },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to generate hint', hint: "Let's try a different approach. What do you think the first step should be?" },
      { status: 200 }
    )
  }
}
