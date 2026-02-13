# Math Tutor — CLAUDE.md

## Project Overview
Adaptive math tutor for grade 4–6 students. Teaches through Socratic quizzes with difficulty that adjusts based on performance. LLM calls used sparingly (only for personalized hints when pre-built ones aren't enough).

## Tech Stack
- Next.js 16, React 19, TypeScript
- Tailwind CSS 4 (CSS variables, no config file)
- shadcn/ui (new-york style) + Lucide icons
- Google Gemini 2.0 Flash (hint API only)
- localStorage for progress persistence (no database)

## Commands
```bash
npm run dev       # Dev server (localhost:3000)
npm run build     # Production build
npm run lint      # ESLint
```

## Architecture
- **6 topics**, 5 subtopics each, 5 difficulty levels per subtopic
- **Adaptive algorithm**: 3 correct in a row → level up; 2 wrong in a row → level down; Level 5 + 80% accuracy → mastery
- **Hint system**: Hint 1 & 2 are pre-built (no LLM). Hint 3 uses Gemini for Socratic guidance.
- **Progress**: All state in localStorage, keyed by subtopic ID
- **Question banks**: Static TypeScript files in `src/data/questions/`

## Key Files
- `src/data/types.ts` — shared TypeScript types
- `src/data/topics.ts` — topic & subtopic metadata
- `src/data/questions/*.ts` — question banks (~50 questions each)
- `src/lib/adaptive.ts` — difficulty adjustment algorithm
- `src/lib/progress.ts` — localStorage CRUD
- `src/lib/quiz-engine.ts` — question selection, session management
- `src/app/api/hint/route.ts` — only API route (Gemini Socratic hints)

## Environment Variables
- `GEMINI_API_KEY` — Google Gemini API key (only needed for Hint 3)
