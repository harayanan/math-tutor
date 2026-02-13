import { GoogleGenerativeAI } from '@google/generative-ai'

let genAI: GoogleGenerativeAI | null = null

function getClient(): GoogleGenerativeAI {
  if (!genAI) {
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is not set')
    }
    genAI = new GoogleGenerativeAI(apiKey)
  }
  return genAI
}

export async function generateSocraticHint(
  question: string,
  correctAnswer: string,
  studentAnswer: string
): Promise<string> {
  const client = getClient()
  const model = client.getGenerativeModel({ model: 'gemini-2.0-flash' })

  const prompt = `You are a kind, encouraging math tutor helping a 10-year-old student. The student got a question wrong and needs a gentle guiding question to help them discover their mistake.

Question: ${question}
Correct answer: ${correctAnswer}
Student's answer: ${studentAnswer}

Rules:
- Ask ONE short guiding question (1-2 sentences max)
- Do NOT reveal the correct answer
- Help them see WHERE they went wrong
- Be warm and encouraging
- Use simple language a 10-year-old understands
- If the student's answer is close, acknowledge what they did right`

  const result = await model.generateContent(prompt)
  const response = result.response
  return response.text()
}
