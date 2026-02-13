import { Question } from '../types'

export const questions: Question[] = [
  // ─────────────────────────────────────────────
  // ADDITION & SUBTRACTION (add-sub) — 10 questions
  // ─────────────────────────────────────────────

  // Level 1
  {
    id: 'arith-addsub-1',
    topicId: 'arithmetic',
    subtopicId: 'add-sub',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What is 7 + 8?',
    answer: '15',
    options: ['13', '14', '15', '16'],
    hint1: 'Try counting up from 7.',
    hint2: 'Think of it as 7 + 3 + 5. What is 7 + 3?',
    explanation:
      '7 + 8 = 15. One way to see this: 7 + 8 = 7 + 3 + 5 = 10 + 5 = 15.',
  },
  {
    id: 'arith-addsub-2',
    topicId: 'arithmetic',
    subtopicId: 'add-sub',
    difficulty: 1,
    type: 'fill-in',
    question: 'What is 14 - 6?',
    answer: '8',
    hint1: 'Start at 14 and count backwards.',
    hint2: '14 - 4 = 10. Now subtract 2 more.',
    explanation:
      '14 - 6 = 8. You can break it up: 14 - 4 = 10, then 10 - 2 = 8.',
  },

  // Level 2
  {
    id: 'arith-addsub-3',
    topicId: 'arithmetic',
    subtopicId: 'add-sub',
    difficulty: 2,
    type: 'fill-in',
    question: 'What is 47 + 36?',
    answer: '83',
    hint1: 'Add the tens first, then the ones.',
    hint2: '40 + 30 = 70. Now add 7 + 6.',
    explanation:
      '47 + 36 = 83. Break it down: 40 + 30 = 70, and 7 + 6 = 13. So 70 + 13 = 83.',
  },
  {
    id: 'arith-addsub-4',
    topicId: 'arithmetic',
    subtopicId: 'add-sub',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 83 - 29?',
    answer: '54',
    options: ['52', '54', '56', '64'],
    hint1: 'Try subtracting 30 first, then adjusting.',
    hint2: '83 - 30 = 53. But you subtracted 1 too many, so add 1 back.',
    explanation:
      '83 - 29 = 54. A shortcut: 83 - 30 = 53, then add back 1 because 29 is one less than 30. 53 + 1 = 54.',
  },

  // Level 3
  {
    id: 'arith-addsub-5',
    topicId: 'arithmetic',
    subtopicId: 'add-sub',
    difficulty: 3,
    type: 'fill-in',
    question: 'What is 456 + 278?',
    answer: '734',
    hint1: 'Line the numbers up by place value and add column by column from right to left.',
    hint2: '6 + 8 = 14 (write 4, carry 1). 5 + 7 + 1 = 13 (write 3, carry 1). 4 + 2 + 1 = ?',
    explanation:
      '456 + 278 = 734. Adding column by column: ones: 6 + 8 = 14 (carry 1), tens: 5 + 7 + 1 = 13 (carry 1), hundreds: 4 + 2 + 1 = 7.',
  },
  {
    id: 'arith-addsub-6',
    topicId: 'arithmetic',
    subtopicId: 'add-sub',
    difficulty: 3,
    type: 'multiple-choice',
    question: 'What is 803 - 467?',
    answer: '336',
    options: ['326', '336', '346', '436'],
    hint1: 'You will need to borrow since 0 is less than 6 and 3 is less than 7.',
    hint2: 'Try 800 - 467 = 333, then add the remaining 3.',
    explanation:
      '803 - 467 = 336. One approach: 800 - 467 = 333, then 333 + 3 = 336.',
  },

  // Level 4
  {
    id: 'arith-addsub-7',
    topicId: 'arithmetic',
    subtopicId: 'add-sub',
    difficulty: 4,
    type: 'fill-in',
    question: 'What is 4,567 + 3,895?',
    answer: '8462',
    hint1: 'Add column by column and watch for carries.',
    hint2: 'The ones give 12, tens give 16, hundreds give 14, thousands give 8. Remember to carry each time.',
    explanation:
      '4,567 + 3,895 = 8,462. Ones: 7 + 5 = 12 (carry 1). Tens: 6 + 9 + 1 = 16 (carry 1). Hundreds: 5 + 8 + 1 = 14 (carry 1). Thousands: 4 + 3 + 1 = 8.',
  },
  {
    id: 'arith-addsub-8',
    topicId: 'arithmetic',
    subtopicId: 'add-sub',
    difficulty: 4,
    type: 'true-false',
    question: 'Is 7,001 - 2,563 equal to 4,438?',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Try subtracting 2,563 from 7,001 step by step.',
    hint2: 'Think of it as 7,000 - 2,563 + 1. What is 7,000 - 2,563?',
    explanation:
      'True. 7,001 - 2,563 = 4,438. You can verify: 7,000 - 2,563 = 4,437, then add 1 to get 4,438.',
  },

  // Level 5
  {
    id: 'arith-addsub-9',
    topicId: 'arithmetic',
    subtopicId: 'add-sub',
    difficulty: 5,
    type: 'fill-in',
    question:
      'A school had 12,450 books. They donated 3,876 books and then received a shipment of 2,195 new books. How many books does the school have now?',
    answer: '10769',
    hint1: 'This is a two-step problem: first subtract the donated books, then add the new ones.',
    hint2: '12,450 - 3,876 = 8,574. Now add 2,195 to that.',
    explanation:
      'Start with 12,450. After donating: 12,450 - 3,876 = 8,574. After receiving: 8,574 + 2,195 = 10,769.',
  },
  {
    id: 'arith-addsub-10',
    topicId: 'arithmetic',
    subtopicId: 'add-sub',
    difficulty: 5,
    type: 'multiple-choice',
    question:
      'What number should replace the blank? 9,999 + ____ = 15,432',
    answer: '5433',
    options: ['5333', '5433', '5443', '6433'],
    hint1: 'You need to find the difference between 15,432 and 9,999.',
    hint2: 'Calculate 15,432 - 10,000 = 5,432. But the original number is 9,999, which is 1 less than 10,000...',
    explanation:
      'The blank = 15,432 - 9,999 = 5,433. A quick way: 15,432 - 10,000 = 5,432, then add 1 back (since 9,999 is 1 less than 10,000) to get 5,433.',
  },

  // ─────────────────────────────────────────────
  // MULTIPLICATION — 10 questions
  // ─────────────────────────────────────────────

  // Level 1
  {
    id: 'arith-mul-1',
    topicId: 'arithmetic',
    subtopicId: 'multiplication',
    difficulty: 1,
    type: 'fill-in',
    question: 'What is 6 x 7?',
    answer: '42',
    hint1: 'Think of 6 groups of 7.',
    hint2: 'You know 6 x 6 = 36. Now add one more 6.',
    explanation:
      '6 x 7 = 42. You can think of it as 6 x 6 = 36, plus one more 6 gives 42.',
  },
  {
    id: 'arith-mul-2',
    topicId: 'arithmetic',
    subtopicId: 'multiplication',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What is 9 x 4?',
    answer: '36',
    options: ['32', '34', '36', '38'],
    hint1: 'The 9 times table has a neat pattern: the digits of the answer always add up to 9.',
    hint2: '9 x 4 = 10 x 4 minus 1 x 4. What is 40 - 4?',
    explanation:
      '9 x 4 = 36. Shortcut: 10 x 4 = 40, subtract 4 to get 36. Notice that 3 + 6 = 9!',
  },

  // Level 2
  {
    id: 'arith-mul-3',
    topicId: 'arithmetic',
    subtopicId: 'multiplication',
    difficulty: 2,
    type: 'fill-in',
    question: 'What is 12 x 8?',
    answer: '96',
    hint1: 'Break 12 into 10 + 2 and multiply each part by 8.',
    hint2: '10 x 8 = 80. Now find 2 x 8 and add.',
    explanation:
      '12 x 8 = 96. Using distribution: (10 x 8) + (2 x 8) = 80 + 16 = 96.',
  },
  {
    id: 'arith-mul-4',
    topicId: 'arithmetic',
    subtopicId: 'multiplication',
    difficulty: 2,
    type: 'true-false',
    question: 'Is 15 x 6 equal to 80?',
    answer: 'False',
    options: ['True', 'False'],
    hint1: 'Try breaking 15 into 10 + 5 and multiplying each by 6.',
    hint2: '10 x 6 = 60 and 5 x 6 = 30. Is 60 + 30 = 80?',
    explanation:
      'False. 15 x 6 = 90, not 80. Break it down: (10 x 6) + (5 x 6) = 60 + 30 = 90.',
  },

  // Level 3
  {
    id: 'arith-mul-5',
    topicId: 'arithmetic',
    subtopicId: 'multiplication',
    difficulty: 3,
    type: 'multiple-choice',
    question: 'What is 34 x 25?',
    answer: '850',
    options: ['750', '800', '850', '900'],
    hint1: 'Multiplying by 25 is the same as multiplying by 100 and dividing by 4.',
    hint2: '34 x 100 = 3,400. Now divide 3,400 by 4.',
    explanation:
      '34 x 25 = 850. Shortcut: 34 x 25 = 34 x 100 / 4 = 3,400 / 4 = 850.',
  },
  {
    id: 'arith-mul-6',
    topicId: 'arithmetic',
    subtopicId: 'multiplication',
    difficulty: 3,
    type: 'fill-in',
    question: 'What is 123 x 7?',
    answer: '861',
    hint1: 'Multiply each digit of 123 by 7 starting from the ones.',
    hint2: '3 x 7 = 21 (write 1, carry 2). 2 x 7 = 14, plus 2 = 16. 1 x 7 = 7, plus 1 = 8.',
    explanation:
      '123 x 7 = 861. Step by step: (100 x 7) + (20 x 7) + (3 x 7) = 700 + 140 + 21 = 861.',
  },

  // Level 4
  {
    id: 'arith-mul-7',
    topicId: 'arithmetic',
    subtopicId: 'multiplication',
    difficulty: 4,
    type: 'fill-in',
    question: 'What is 48 x 52?',
    answer: '2496',
    hint1: 'Notice that 48 and 52 are both close to 50. Can you use that?',
    hint2: 'Use the identity (50 - 2)(50 + 2) = 50^2 - 2^2 = 2500 - 4.',
    explanation:
      '48 x 52 = 2,496. Using the difference of squares: (50 - 2)(50 + 2) = 2,500 - 4 = 2,496.',
  },
  {
    id: 'arith-mul-8',
    topicId: 'arithmetic',
    subtopicId: 'multiplication',
    difficulty: 4,
    type: 'multiple-choice',
    question: 'What is 256 x 11?',
    answer: '2816',
    options: ['2716', '2786', '2816', '2856'],
    hint1: 'When multiplying by 11, there is a shortcut involving adding adjacent digits.',
    hint2: 'Multiply 256 x 10 = 2,560, then add one more 256.',
    explanation:
      '256 x 11 = 2,816. Quick method: 256 x 10 = 2,560, then 2,560 + 256 = 2,816.',
  },

  // Level 5
  {
    id: 'arith-mul-9',
    topicId: 'arithmetic',
    subtopicId: 'multiplication',
    difficulty: 5,
    type: 'fill-in',
    question:
      'A theater has 28 rows with 35 seats in each row. How many seats are there in total?',
    answer: '980',
    hint1: 'You need to calculate 28 x 35.',
    hint2: 'Break it up: 28 x 35 = 28 x 30 + 28 x 5 = 840 + 140.',
    explanation:
      '28 x 35 = 980. Using distribution: (28 x 30) + (28 x 5) = 840 + 140 = 980. Or: (30 x 35) - (2 x 35) = 1,050 - 70 = 980.',
  },
  {
    id: 'arith-mul-10',
    topicId: 'arithmetic',
    subtopicId: 'multiplication',
    difficulty: 5,
    type: 'multiple-choice',
    question: 'What is 125 x 64?',
    answer: '8000',
    options: ['7500', '7800', '8000', '8200'],
    hint1: '125 x 8 = 1,000. Can you use that to simplify this?',
    hint2: '64 = 8 x 8. So 125 x 64 = 125 x 8 x 8 = 1,000 x 8.',
    explanation:
      '125 x 64 = 8,000. Since 125 x 8 = 1,000 and 64 = 8 x 8, we get 125 x 8 x 8 = 1,000 x 8 = 8,000.',
  },

  // ─────────────────────────────────────────────
  // DIVISION — 10 questions
  // ─────────────────────────────────────────────

  // Level 1
  {
    id: 'arith-div-1',
    topicId: 'arithmetic',
    subtopicId: 'division',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What is 56 / 8?',
    answer: '7',
    options: ['6', '7', '8', '9'],
    hint1: 'Think: 8 times what number equals 56?',
    hint2: '8 x 6 = 48, 8 x 7 = 56. Which one matches?',
    explanation: '56 / 8 = 7, because 8 x 7 = 56.',
  },
  {
    id: 'arith-div-2',
    topicId: 'arithmetic',
    subtopicId: 'division',
    difficulty: 1,
    type: 'fill-in',
    question: 'What is 45 / 9?',
    answer: '5',
    hint1: 'How many groups of 9 fit into 45?',
    hint2: 'Count by 9s: 9, 18, 27, 36, 45. How many times did you count?',
    explanation: '45 / 9 = 5, because 9 x 5 = 45.',
  },

  // Level 2
  {
    id: 'arith-div-3',
    topicId: 'arithmetic',
    subtopicId: 'division',
    difficulty: 2,
    type: 'fill-in',
    question: 'What is 96 / 6?',
    answer: '16',
    hint1: 'Break 96 into parts that are easy to divide by 6.',
    hint2: '60 / 6 = 10 and 36 / 6 = 6. Add those results.',
    explanation:
      '96 / 6 = 16. Split it: 60 / 6 = 10 and 36 / 6 = 6, so 10 + 6 = 16.',
  },
  {
    id: 'arith-div-4',
    topicId: 'arithmetic',
    subtopicId: 'division',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 84 / 7?',
    answer: '12',
    options: ['11', '12', '13', '14'],
    hint1: 'Think: 7 x ? = 84.',
    hint2: '7 x 10 = 70, so 84 - 70 = 14 left over. 14 / 7 = 2. Add 10 + 2.',
    explanation:
      '84 / 7 = 12. Check: 7 x 12 = 84.',
  },

  // Level 3
  {
    id: 'arith-div-5',
    topicId: 'arithmetic',
    subtopicId: 'division',
    difficulty: 3,
    type: 'fill-in',
    question: 'What is 475 / 5?',
    answer: '95',
    hint1: 'Dividing by 5 is the same as multiplying by 2 and dividing by 10.',
    hint2: '475 x 2 = 950. Now divide by 10.',
    explanation:
      '475 / 5 = 95. Shortcut: 475 x 2 = 950, then 950 / 10 = 95.',
  },
  {
    id: 'arith-div-6',
    topicId: 'arithmetic',
    subtopicId: 'division',
    difficulty: 3,
    type: 'multiple-choice',
    question: 'What is 372 / 12?',
    answer: '31',
    options: ['29', '30', '31', '32'],
    hint1: 'Try long division, or estimate: 12 x 30 = 360.',
    hint2: '12 x 30 = 360. That leaves 372 - 360 = 12. So the answer is 30 + 1.',
    explanation:
      '372 / 12 = 31. Since 12 x 30 = 360 and 372 - 360 = 12, we add 1 more to get 31. Check: 12 x 31 = 372.',
  },

  // Level 4
  {
    id: 'arith-div-7',
    topicId: 'arithmetic',
    subtopicId: 'division',
    difficulty: 4,
    type: 'fill-in',
    question: 'What is 2,744 / 14?',
    answer: '196',
    hint1: 'Use long division. Start by figuring out how many times 14 goes into 27.',
    hint2: '14 x 1 = 14, so 14 goes into 27 once (remainder 13). Bring down the 4 to get 134. 14 x 9 = 126...',
    explanation:
      '2,744 / 14 = 196. Long division: 14 into 27 = 1 R13, 14 into 134 = 9 R8, 14 into 84 = 6. Answer: 196.',
  },
  {
    id: 'arith-div-8',
    topicId: 'arithmetic',
    subtopicId: 'division',
    difficulty: 4,
    type: 'true-false',
    question: 'Does 1,368 / 24 equal 57?',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Check by multiplying: does 24 x 57 give you 1,368?',
    hint2: '24 x 50 = 1,200 and 24 x 7 = 168. Does 1,200 + 168 = 1,368?',
    explanation:
      'True. 24 x 57 = 1,368. Verification: 24 x 50 = 1,200, 24 x 7 = 168, and 1,200 + 168 = 1,368.',
  },

  // Level 5
  {
    id: 'arith-div-9',
    topicId: 'arithmetic',
    subtopicId: 'division',
    difficulty: 5,
    type: 'fill-in',
    question:
      'A factory produced 7,560 widgets in 36 hours. How many widgets were produced per hour?',
    answer: '210',
    hint1: 'Divide the total widgets by the total hours: 7,560 / 36.',
    hint2: 'Simplify: both numbers are divisible by 12. 7,560 / 12 = 630 and 36 / 12 = 3. Now divide 630 / 3.',
    explanation:
      '7,560 / 36 = 210 widgets per hour. Simplify by dividing both by 12: 630 / 3 = 210.',
  },
  {
    id: 'arith-div-10',
    topicId: 'arithmetic',
    subtopicId: 'division',
    difficulty: 5,
    type: 'multiple-choice',
    question:
      'When 5,293 is divided by 17, what is the remainder?',
    answer: '5',
    options: ['3', '4', '5', '6'],
    hint1: 'First find how many times 17 goes into 5,293 evenly, then find the leftover.',
    hint2: '17 x 311 = 5,287. What is 5,293 - 5,287?',
    explanation:
      '5,293 / 17 = 311 remainder 5. Check: 17 x 311 = 5,287, and 5,293 - 5,287 = 5. Alternatively, 17 x 312 = 5,304 which is too big.',
  },

  // ─────────────────────────────────────────────
  // ORDER OF OPERATIONS — 10 questions
  // ─────────────────────────────────────────────

  // Level 1
  {
    id: 'arith-ooo-1',
    topicId: 'arithmetic',
    subtopicId: 'order-of-ops',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What is 3 + 4 x 2?',
    answer: '11',
    options: ['10', '11', '14', '24'],
    hint1: 'Remember PEMDAS: multiplication comes before addition.',
    hint2: 'First do 4 x 2 = 8, then add 3.',
    explanation:
      '3 + 4 x 2 = 3 + 8 = 11. Multiplication is done before addition (PEMDAS/BODMAS).',
  },
  {
    id: 'arith-ooo-2',
    topicId: 'arithmetic',
    subtopicId: 'order-of-ops',
    difficulty: 1,
    type: 'true-false',
    question: 'Is 5 + 3 x 2 equal to 16?',
    answer: 'False',
    options: ['True', 'False'],
    hint1: 'Be careful about the order of operations.',
    hint2: 'Multiply first: 3 x 2 = 6. Then add: 5 + 6 = ?',
    explanation:
      'False. 5 + 3 x 2 = 5 + 6 = 11, not 16. If you got 16, you probably added first (8 x 2), but multiplication must come before addition.',
  },

  // Level 2
  {
    id: 'arith-ooo-3',
    topicId: 'arithmetic',
    subtopicId: 'order-of-ops',
    difficulty: 2,
    type: 'fill-in',
    question: 'What is 20 - 3 x 4 + 2?',
    answer: '10',
    hint1: 'Do the multiplication first, then work left to right with addition and subtraction.',
    hint2: '3 x 4 = 12. Now solve 20 - 12 + 2.',
    explanation:
      '20 - 3 x 4 + 2 = 20 - 12 + 2 = 8 + 2 = 10. Multiply first (3 x 4 = 12), then go left to right.',
  },
  {
    id: 'arith-ooo-4',
    topicId: 'arithmetic',
    subtopicId: 'order-of-ops',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is (6 + 4) x 3?',
    answer: '30',
    options: ['18', '22', '30', '42'],
    hint1: 'Parentheses come first in the order of operations.',
    hint2: 'First: 6 + 4 = 10. Then multiply by 3.',
    explanation:
      '(6 + 4) x 3 = 10 x 3 = 30. Parentheses are always evaluated first.',
  },

  // Level 3
  {
    id: 'arith-ooo-5',
    topicId: 'arithmetic',
    subtopicId: 'order-of-ops',
    difficulty: 3,
    type: 'fill-in',
    question: 'What is 2 + 3 x (8 - 2)?',
    answer: '20',
    hint1: 'Start with the parentheses, then multiplication, then addition.',
    hint2: 'Parentheses first: 8 - 2 = 6. Then 3 x 6 = 18. Finally 2 + 18 = ?',
    explanation:
      '2 + 3 x (8 - 2) = 2 + 3 x 6 = 2 + 18 = 20. Order: parentheses, multiplication, addition.',
  },
  {
    id: 'arith-ooo-6',
    topicId: 'arithmetic',
    subtopicId: 'order-of-ops',
    difficulty: 3,
    type: 'multiple-choice',
    question: 'What is 48 / (4 + 4) x 3?',
    answer: '18',
    options: ['2', '6', '18', '36'],
    hint1: 'Parentheses first, then work left to right for division and multiplication.',
    hint2: '4 + 4 = 8. Then 48 / 8 = 6. Then 6 x 3 = ?',
    explanation:
      '48 / (4 + 4) x 3 = 48 / 8 x 3 = 6 x 3 = 18. After the parentheses, division and multiplication go left to right.',
  },

  // Level 4
  {
    id: 'arith-ooo-7',
    topicId: 'arithmetic',
    subtopicId: 'order-of-ops',
    difficulty: 4,
    type: 'fill-in',
    question: 'What is 5 x (12 - 4) + 36 / 6?',
    answer: '46',
    hint1: 'Handle parentheses first. Then do multiplication and division (left to right). Finally, addition.',
    hint2: '12 - 4 = 8. Then 5 x 8 = 40 and 36 / 6 = 6. Now add them.',
    explanation:
      '5 x (12 - 4) + 36 / 6 = 5 x 8 + 6 = 40 + 6 = 46.',
  },
  {
    id: 'arith-ooo-8',
    topicId: 'arithmetic',
    subtopicId: 'order-of-ops',
    difficulty: 4,
    type: 'multiple-choice',
    question: 'What is (15 + 5) / (8 - 3) x 7?',
    answer: '28',
    options: ['20', '25', '28', '35'],
    hint1: 'Evaluate each set of parentheses first, then work left to right.',
    hint2: '15 + 5 = 20. 8 - 3 = 5. So it becomes 20 / 5 x 7. Now go left to right.',
    explanation:
      '(15 + 5) / (8 - 3) x 7 = 20 / 5 x 7 = 4 x 7 = 28.',
  },

  // Level 5
  {
    id: 'arith-ooo-9',
    topicId: 'arithmetic',
    subtopicId: 'order-of-ops',
    difficulty: 5,
    type: 'fill-in',
    question: 'What is 100 - 4 x (3 + 2 x 5) + 18 / 3?',
    answer: '54',
    hint1: 'Start with the innermost operation inside the parentheses first.',
    hint2: 'Inside the parentheses: 2 x 5 = 10, then 3 + 10 = 13. So it becomes 100 - 4 x 13 + 18 / 3.',
    explanation:
      '100 - 4 x (3 + 2 x 5) + 18 / 3. Inside parentheses: 2 x 5 = 10, then 3 + 10 = 13. Now: 100 - 4 x 13 + 6 = 100 - 52 + 6 = 54.',
  },
  {
    id: 'arith-ooo-10',
    topicId: 'arithmetic',
    subtopicId: 'order-of-ops',
    difficulty: 5,
    type: 'multiple-choice',
    question: 'What is (8 + 2) x (9 - 4) - 3 x (12 / 4)?',
    answer: '41',
    options: ['38', '41', '44', '47'],
    hint1: 'Evaluate all three sets of parentheses first, then do the multiplications, and finally the subtraction.',
    hint2: '(8 + 2) = 10, (9 - 4) = 5, (12 / 4) = 3. Now compute 10 x 5 - 3 x 3.',
    explanation:
      '(8 + 2) x (9 - 4) - 3 x (12 / 4) = 10 x 5 - 3 x 3 = 50 - 9 = 41.',
  },

  // ─────────────────────────────────────────────
  // NEGATIVE NUMBERS — 10 questions
  // ─────────────────────────────────────────────

  // Level 1
  {
    id: 'arith-neg-1',
    topicId: 'arithmetic',
    subtopicId: 'negatives',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What is 3 - 7?',
    answer: '-4',
    options: ['-4', '-3', '4', '10'],
    hint1: 'When you subtract a bigger number from a smaller one, the result is negative.',
    hint2: 'Think of a number line. Start at 3, move 7 steps to the left. Where do you land?',
    explanation:
      '3 - 7 = -4. Starting at 3 on the number line and moving 7 to the left lands you at -4.',
  },
  {
    id: 'arith-neg-2',
    topicId: 'arithmetic',
    subtopicId: 'negatives',
    difficulty: 1,
    type: 'true-false',
    question: 'Is -5 greater than -3?',
    answer: 'False',
    options: ['True', 'False'],
    hint1: 'Think about the number line. Which number is farther to the right?',
    hint2: '-3 is closer to 0 than -5. Numbers closer to 0 (on the negative side) are greater.',
    explanation:
      'False. -5 is less than -3. On the number line, -3 is to the right of -5, making it the larger number.',
  },

  // Level 2
  {
    id: 'arith-neg-3',
    topicId: 'arithmetic',
    subtopicId: 'negatives',
    difficulty: 2,
    type: 'fill-in',
    question: 'What is -8 + 13?',
    answer: '5',
    hint1: 'Adding a positive number to a negative one means moving right on the number line.',
    hint2: 'Start at -8, then move 13 steps to the right. You pass through 0 after 8 steps and have 5 more to go.',
    explanation:
      '-8 + 13 = 5. From -8, adding 8 gets to 0, then adding 5 more reaches 5.',
  },
  {
    id: 'arith-neg-4',
    topicId: 'arithmetic',
    subtopicId: 'negatives',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is -6 - 4?',
    answer: '-10',
    options: ['-10', '-2', '2', '10'],
    hint1: 'Subtracting a positive number from a negative one makes it even more negative.',
    hint2: 'Start at -6 and move 4 more to the left.',
    explanation:
      '-6 - 4 = -10. Starting at -6 and subtracting 4 moves further left to -10.',
  },

  // Level 3
  {
    id: 'arith-neg-5',
    topicId: 'arithmetic',
    subtopicId: 'negatives',
    difficulty: 3,
    type: 'fill-in',
    question: 'What is -15 + (-7) + 10?',
    answer: '-12',
    hint1: 'Add the two negatives together first, then add the positive.',
    hint2: '-15 + (-7) = -22. Now add 10.',
    explanation:
      '-15 + (-7) + 10 = -22 + 10 = -12. Combine negatives first: -15 + -7 = -22, then -22 + 10 = -12.',
  },
  {
    id: 'arith-neg-6',
    topicId: 'arithmetic',
    subtopicId: 'negatives',
    difficulty: 3,
    type: 'multiple-choice',
    question: 'What is (-4) x 6?',
    answer: '-24',
    options: ['-24', '-10', '10', '24'],
    hint1: 'A negative number times a positive number gives a negative result.',
    hint2: '4 x 6 = 24. Now apply the negative sign.',
    explanation:
      '(-4) x 6 = -24. When you multiply a negative by a positive, the result is negative. 4 x 6 = 24, so the answer is -24.',
  },

  // Level 4
  {
    id: 'arith-neg-7',
    topicId: 'arithmetic',
    subtopicId: 'negatives',
    difficulty: 4,
    type: 'fill-in',
    question: 'What is (-9) x (-8)?',
    answer: '72',
    hint1: 'What happens when you multiply two negative numbers?',
    hint2: 'Negative times negative equals positive. Just multiply 9 x 8.',
    explanation:
      '(-9) x (-8) = 72. A negative times a negative always gives a positive result. 9 x 8 = 72.',
  },
  {
    id: 'arith-neg-8',
    topicId: 'arithmetic',
    subtopicId: 'negatives',
    difficulty: 4,
    type: 'multiple-choice',
    question: 'What is -36 / (-4)?',
    answer: '9',
    options: ['-9', '-8', '8', '9'],
    hint1: 'Dividing two negatives works just like multiplying two negatives.',
    hint2: 'Negative divided by negative = positive. 36 / 4 = ?',
    explanation:
      '-36 / (-4) = 9. A negative divided by a negative is positive. 36 / 4 = 9.',
  },

  // Level 5
  {
    id: 'arith-neg-9',
    topicId: 'arithmetic',
    subtopicId: 'negatives',
    difficulty: 5,
    type: 'fill-in',
    question: 'What is (-3) x 5 + (-2) x (-8) - 10?',
    answer: '-9',
    hint1: 'Follow order of operations: do the multiplications first, then add and subtract left to right.',
    hint2: '(-3) x 5 = -15. (-2) x (-8) = 16. So it becomes -15 + 16 - 10.',
    explanation:
      '(-3) x 5 + (-2) x (-8) - 10 = -15 + 16 - 10 = 1 - 10 = -9. Multiply first, then combine.',
  },
  {
    id: 'arith-neg-10',
    topicId: 'arithmetic',
    subtopicId: 'negatives',
    difficulty: 5,
    type: 'multiple-choice',
    question:
      'The temperature at noon was 5 degrees Celsius. It dropped 12 degrees by midnight, then rose 3 degrees by 6 AM. What was the temperature at 6 AM?',
    answer: '-4',
    options: ['-8', '-4', '0', '4'],
    hint1: 'Track the temperature step by step: start at 5, subtract 12, then add 3.',
    hint2: '5 - 12 = -7 (midnight). -7 + 3 = ?',
    explanation:
      'Start at 5. Drop 12: 5 - 12 = -7. Rise 3: -7 + 3 = -4 degrees Celsius at 6 AM.',
  },
]
