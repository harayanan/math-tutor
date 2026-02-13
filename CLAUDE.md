# Math Tutor — CLAUDE.md

## Project Overview
Adaptive math tutor for ages 10–12 (grade 4–6). Teaches through Socratic quizzes with difficulty that adjusts based on performance. LLM calls used sparingly (only for personalized hints when pre-built ones aren't enough).

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
- **6 topics**, 31 subtopics total (5 each + 6 in Decimals), **4 difficulty levels** (Easy/Medium/Hard/Very Hard)
- **~620 questions** total (~100 per topic, 120 for Decimals), 5 questions per subtopic per level
- **Pre-quiz difficulty chooser**: Students pick Level 1–4 before each quiz; recommended level shown based on adaptive progress
- **10 questions per quiz session**, drawn from chosen level + adjacent levels if needed
- **Adaptive algorithm**: 3 correct in a row → level up; 2 wrong in a row → level down; Level 4 + 80% accuracy → mastery
- **Hint system**: Hint 1 & 2 are pre-built (no LLM). Hint 3 uses Gemini for Socratic guidance.
- **Progress**: All state in localStorage, keyed by subtopic ID
- **Question banks**: Static TypeScript files in `src/data/questions/`

## Key Files
- `src/data/types.ts` — shared TypeScript types (difficulty: 1–4)
- `src/data/topics.ts` — topic & subtopic metadata (31 subtopics)
- `src/data/questions/*.ts` — question banks (~100–120 questions each)
- `src/lib/adaptive.ts` — difficulty adjustment algorithm (4 levels)
- `src/lib/progress.ts` — localStorage CRUD
- `src/lib/quiz-engine.ts` — question selection with difficulty chooser support, session management
- `src/app/quiz/[topicId]/[subtopicId]/page.tsx` — quiz page with difficulty chooser UI
- `src/app/api/hint/route.ts` — only API route (Gemini Socratic hints)

## Environment Variables
- `GEMINI_API_KEY` — Google Gemini API key (only needed for Hint 3)
