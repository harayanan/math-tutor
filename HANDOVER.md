# Math Tutor — HANDOVER.md

## Current Status: Deployed (v4 — 5 new topics + grade filter)

## What Was Done

### Session 1 (v1 — Initial Build)
- Scaffolded Next.js 16.1.6 project with React 19, Tailwind 4, shadcn/ui
- Installed shadcn/ui components: button, card, progress, badge, dialog
- Created complete data layer, core logic, API route, UI components, all pages
- Committed to GitHub and deployed to Vercel

### Session 2 (v2 — Difficulty & Content Overhaul)
1. **Harder problems for ages 10–12**: Rewrote all 6 question bank files from scratch. Problems now match 10–12 year old level (e.g., multi-digit arithmetic, complex fractions, multi-step word problems). Total questions: ~620 (up from ~300).
2. **Difficulty chooser**: Added a pre-quiz difficulty selection screen (Level 1–4: Easy/Medium/Hard/Very Hard) with star ratings and a recommended level based on adaptive progress. Reduced difficulty levels from 5 to 4.
3. **10-question quizzes**: Already was 10 per session (no change needed). Quiz engine now pulls from adjacent levels if the chosen level doesn't have enough questions.
4. **Unit Conversion subtopic**: Added under Decimals — covers km/m/cm/mm, kg/g/mg, L/mL conversions with 20 questions across 4 difficulty levels.

**Files changed:**
- `src/data/types.ts` — difficulty type narrowed to 1–4
- `src/lib/adaptive.ts` — MAX_LEVEL=4, updated labels/colors
- `src/lib/quiz-engine.ts` — accepts chosen difficulty, widens pool search
- `src/lib/progress.ts` — mastery calculation updated for 4 levels
- `src/components/subtopic-row.tsx` — progress bar updated for 4 levels
- `src/data/topics.ts` — added unit-conversion subtopic
- `src/app/quiz/[topicId]/[subtopicId]/page.tsx` — difficulty chooser UI
- `src/data/questions/*.ts` — all 6 files rewritten (~620 questions total)

### Session 3 (v3 — Animations)
1. **Correct answer feedback**: Bounce + green glow on question card with confetti burst (16 CSS particles).
2. **Incorrect answer feedback**: Shake + red flash on card and answer area. Fill-in inputs get colored borders.
3. **Question transitions**: Each new question fades in with a slide-up animation.
4. **Streak celebrations**: Streak indicator bounces on increment, turns orange with "FIRE!" badge at milestones (5/10/15).
5. All pure CSS animations — no new dependencies added.

**Files changed:**
- `src/app/globals.css` — 8 keyframe animations + utility classes
- `src/components/quiz-question.tsx` — animation states, confetti component, per-answer-type feedback styling
- `src/components/streak-indicator.tsx` — bump animation on increment, milestone celebrations

### Session 4 (v4 — 5 New Topics + Grade Filter)
1. **5 new math topics** (500 new questions, 25 new subtopics):
   - **Factors & Multiples** (Grid3x3/teal) — factors, multiples, primes, HCF, LCM
   - **Data Handling** (BarChart2/cyan) — tables, mean/median/mode, bar graphs, pie charts, probability
   - **Percentage** (Percent/orange) — basics, % of number, increase/decrease, profit & loss, applications
   - **Symmetry** (FlipHorizontal2/fuchsia) — line symmetry, reflection, rotational, 2D shapes, 3D shapes
   - **Logical Reasoning** (BrainCircuit/lime) — number patterns, analogies, operations, spatial, deduction
2. **Grade/Class filter**: Dropdown in the header nav to filter topics by Class 4, 5, or 6. Selection persists in localStorage. Uses React context for shared state. Pre-Algebra and Percentage only appear for Class 5+; all other topics available for all grades.
3. Total questions: ~1,120 (up from ~620). Total topics: 11 (up from 6). Total subtopics: 56 (up from 31).

**Files created:**
- `src/data/questions/factors-multiples.ts` — 100 questions (5 subtopics × 4 levels × 5 each)
- `src/data/questions/data-handling.ts` — 100 questions
- `src/data/questions/percentage.ts` — 100 questions
- `src/data/questions/symmetry.ts` — 100 questions
- `src/data/questions/logical-reasoning.ts` — 100 questions
- `src/lib/grade-context.tsx` — React context provider for grade filter state
- `src/components/ui/select.tsx` — shadcn/ui Select component

**Files modified:**
- `src/data/types.ts` — added `grades: number[]` to Topic interface
- `src/data/topics.ts` — added 5 new topics with grade assignments, added grades to existing topics
- `src/components/topic-card.tsx` — added 5 Lucide icons + 5 Tailwind color mappings
- `src/lib/quiz-engine.ts` — imported 5 new question banks into allQuestions
- `src/components/header.tsx` — added grade filter dropdown (Select component)
- `src/app/layout.tsx` — wrapped app with GradeProvider
- `src/app/page.tsx` — filters topics by selected grade

## Links
- **GitHub**: https://github.com/harayanan/math-tutor
- **Vercel**: https://math-tutor-rouge.vercel.app

## Architecture
- 11 topics × 56 subtopics × 4 difficulty levels
- ~1,120 questions with pre-built hints and explanations
- Grade/class filter (4, 5, 6) in header — persisted in localStorage
- Pre-quiz difficulty chooser (Level 1–4) with recommended level
- Adaptive algorithm adjusts difficulty per-subtopic based on streaks
- 3-tier hint system: hint1 (free) → hint2 (free) → Gemini Socratic hint (LLM)
- All progress persisted in localStorage (no database needed)

## Blockers
- None

## Next Steps
- Add more questions to reach ~1,500+ total (currently ~1,120)
- Set GEMINI_API_KEY env var in Vercel for LLM hint functionality
- Consider adding a "Reset Progress" button in settings
- Consider dark mode support
- Consider per-subtopic grade tagging (currently grades are per-topic)

## Last Reviewed
2026-02-13
