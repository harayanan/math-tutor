import type { Question } from '../types'

export const questions: Question[] = [
  // ============================================================
  // PATTERNS & SEQUENCES (pa-patterns-1 through pa-patterns-10)
  // ============================================================

  // --- Difficulty 1 ---
  {
    id: 'pa-patterns-1',
    topicId: 'pre-algebra',
    subtopicId: 'patterns',
    difficulty: 1,
    type: 'fill-in',
    question: 'What comes next in the pattern? 2, 4, 6, 8, ___',
    answer: '10',
    hint1: 'Each number goes up by the same amount. What is that amount?',
    hint2: 'You are adding 2 each time. What is 8 + 2?',
    explanation:
      'This is a pattern where you add 2 each time. 8 + 2 = 10, so the next number is 10.',
  },
  {
    id: 'pa-patterns-2',
    topicId: 'pre-algebra',
    subtopicId: 'patterns',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'Which pattern shows counting by 5s?',
    answer: '5, 10, 15, 20, 25',
    options: [
      '5, 10, 15, 20, 25',
      '5, 10, 20, 25, 30',
      '1, 5, 10, 15, 20',
      '5, 15, 25, 35, 45',
    ],
    hint1: 'Counting by 5s means you add 5 to get the next number.',
    hint2: 'Start at 5 and keep adding 5. Does each step in the answer go up by exactly 5?',
    explanation:
      'Counting by 5s: 5, 10, 15, 20, 25. Each number is 5 more than the one before it.',
  },

  // --- Difficulty 2 ---
  {
    id: 'pa-patterns-3',
    topicId: 'pre-algebra',
    subtopicId: 'patterns',
    difficulty: 2,
    type: 'fill-in',
    question: 'Find the missing number: 3, 6, ___, 12, 15',
    answer: '9',
    hint1: 'Look at the jump between 3 and 6. What is the pattern?',
    hint2: 'The pattern adds 3 each time. What is 6 + 3?',
    explanation:
      'The pattern adds 3 each time: 3, 6, 9, 12, 15. The missing number is 9.',
  },
  {
    id: 'pa-patterns-4',
    topicId: 'pre-algebra',
    subtopicId: 'patterns',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is the 8th number in the pattern that starts at 4 and adds 3 each time?',
    answer: '25',
    options: ['22', '24', '25', '28'],
    hint1: 'Write out the first few: 4, 7, 10, 13, ... Keep going until you reach the 8th number.',
    hint2: 'The pattern is 4, 7, 10, 13, 16, 19, 22, ___. What comes next?',
    explanation:
      'Starting at 4 and adding 3: 4, 7, 10, 13, 16, 19, 22, 25. The 8th number is 25.',
  },

  // --- Difficulty 3 ---
  {
    id: 'pa-patterns-5',
    topicId: 'pre-algebra',
    subtopicId: 'patterns',
    difficulty: 3,
    type: 'fill-in',
    question: 'What comes next? 1, 4, 9, 16, 25, ___',
    answer: '36',
    hint1: 'These are special numbers. Try to see what you multiply to get each one.',
    hint2: 'These are perfect squares: 1x1, 2x2, 3x3, 4x4, 5x5, ... What is 6x6?',
    explanation:
      'These are perfect squares: 1, 4, 9, 16, 25, 36. Each number is n x n where n goes 1, 2, 3, 4, 5, 6.',
  },
  {
    id: 'pa-patterns-6',
    topicId: 'pre-algebra',
    subtopicId: 'patterns',
    difficulty: 3,
    type: 'multiple-choice',
    question: 'The pattern doubles each time: 3, 6, 12, 24, ___. What comes next?',
    answer: '48',
    options: ['36', '42', '48', '30'],
    hint1: 'Doubling means multiplying by 2.',
    hint2: 'What is 24 x 2?',
    explanation:
      'Each number is doubled (multiplied by 2): 3, 6, 12, 24, 48. So 24 x 2 = 48.',
  },

  // --- Difficulty 4 ---
  {
    id: 'pa-patterns-7',
    topicId: 'pre-algebra',
    subtopicId: 'patterns',
    difficulty: 4,
    type: 'fill-in',
    question:
      'In this pattern, you add an increasing amount: 2, 3, 5, 8, 12, ___. What comes next?',
    answer: '17',
    hint1: 'Find the differences between consecutive numbers: 1, 2, 3, 4, ... See the pattern in the differences?',
    hint2: 'The differences are 1, 2, 3, 4, so the next difference is 5. What is 12 + 5?',
    explanation:
      'The differences between terms are 1, 2, 3, 4, 5, ... So 12 + 5 = 17.',
  },
  {
    id: 'pa-patterns-8',
    topicId: 'pre-algebra',
    subtopicId: 'patterns',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'The Fibonacci-like pattern starts with 1, 1. Each new number is the sum of the two before it. What is the 8th number?',
    answer: '21',
    options: ['13', '18', '21', '34'],
    hint1: 'Write out the sequence: 1, 1, 2, 3, 5, 8, ... Keep adding the last two numbers.',
    hint2: 'The sequence is 1, 1, 2, 3, 5, 8, 13, ___. What is 8 + 13?',
    explanation:
      'The sequence is: 1, 1, 2, 3, 5, 8, 13, 21. Each number is the sum of the two before it, so 8 + 13 = 21.',
  },

  // --- Difficulty 5 ---
  {
    id: 'pa-patterns-9',
    topicId: 'pre-algebra',
    subtopicId: 'patterns',
    difficulty: 5,
    type: 'fill-in',
    question:
      'A pattern follows the rule: start at 2, then multiply by 2 and subtract 1 to get the next term. What is the 5th term? (The 1st term is 2.)',
    answer: '17',
    hint1: 'Apply the rule step by step. Term 1 = 2, Term 2 = 2x2 - 1 = 3, Term 3 = 3x2 - 1 = 5, ...',
    hint2: 'Term 4 = 5x2 - 1 = 9. Now apply the rule one more time for Term 5.',
    explanation:
      'Term 1 = 2. Term 2 = 2(2) - 1 = 3. Term 3 = 2(3) - 1 = 5. Term 4 = 2(5) - 1 = 9. Term 5 = 2(9) - 1 = 17.',
  },
  {
    id: 'pa-patterns-10',
    topicId: 'pre-algebra',
    subtopicId: 'patterns',
    difficulty: 5,
    type: 'multiple-choice',
    question:
      'A sequence uses two alternating rules: add 3, then multiply by 2. Starting from 1: 1, 4, 8, 11, 22, ___. What comes next?',
    answer: '25',
    options: ['44', '25', '24', '33'],
    hint1: 'The rules alternate: +3, x2, +3, x2, +3, ... Which rule applies to get the next number after 22?',
    hint2: 'After 22, the next operation is +3. What is 22 + 3?',
    explanation:
      'The pattern alternates: +3 then x2. 1 +3 = 4, 4 x2 = 8, 8 +3 = 11, 11 x2 = 22, 22 +3 = 25.',
  },

  // ============================================================
  // VARIABLES & EXPRESSIONS (pa-expr-1 through pa-expr-10)
  // ============================================================

  // --- Difficulty 1 ---
  {
    id: 'pa-expr-1',
    topicId: 'pre-algebra',
    subtopicId: 'expressions',
    difficulty: 1,
    type: 'fill-in',
    question: 'If x = 3, what is x + 5?',
    answer: '8',
    hint1: 'Replace the letter x with the number 3.',
    hint2: 'You get 3 + 5. What is that?',
    explanation: 'Substitute x = 3 into x + 5: 3 + 5 = 8.',
  },
  {
    id: 'pa-expr-2',
    topicId: 'pre-algebra',
    subtopicId: 'expressions',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'If a = 7, what is a - 4?',
    answer: '3',
    options: ['3', '4', '11', '7'],
    hint1: 'The letter "a" stands for the number 7. Swap it in!',
    hint2: 'Calculate 7 - 4.',
    explanation: 'Replace a with 7: 7 - 4 = 3.',
  },

  // --- Difficulty 2 ---
  {
    id: 'pa-expr-3',
    topicId: 'pre-algebra',
    subtopicId: 'expressions',
    difficulty: 2,
    type: 'fill-in',
    question: 'If n = 4, what is 3n? (3n means 3 times n)',
    answer: '12',
    hint1: '3n means 3 multiplied by n.',
    hint2: 'Replace n with 4: 3 x 4 = ?',
    explanation: '3n means 3 x n. When n = 4: 3 x 4 = 12.',
  },
  {
    id: 'pa-expr-4',
    topicId: 'pre-algebra',
    subtopicId: 'expressions',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'Which expression means "5 more than a number y"?',
    answer: 'y + 5',
    options: ['5y', 'y + 5', 'y - 5', '5 - y'],
    hint1: '"More than" means you are adding something.',
    hint2: 'You start with y and add 5 to it.',
    explanation: '"5 more than y" translates to y + 5. We start with y and add 5.',
  },

  // --- Difficulty 3 ---
  {
    id: 'pa-expr-5',
    topicId: 'pre-algebra',
    subtopicId: 'expressions',
    difficulty: 3,
    type: 'fill-in',
    question: 'If x = 5, what is 2x + 3?',
    answer: '13',
    hint1: 'First calculate 2x (2 times x), then add 3.',
    hint2: '2 x 5 = 10. Now add 3: 10 + 3 = ?',
    explanation: 'Substitute x = 5: 2(5) + 3 = 10 + 3 = 13.',
  },
  {
    id: 'pa-expr-6',
    topicId: 'pre-algebra',
    subtopicId: 'expressions',
    difficulty: 3,
    type: 'true-false',
    question: 'True or False: If y = 6, then 3y - 4 = 14.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Plug in y = 6 and calculate 3y - 4.',
    hint2: '3 x 6 = 18. Then 18 - 4 = ?',
    explanation: '3(6) - 4 = 18 - 4 = 14. The statement is True.',
  },

  // --- Difficulty 4 ---
  {
    id: 'pa-expr-7',
    topicId: 'pre-algebra',
    subtopicId: 'expressions',
    difficulty: 4,
    type: 'fill-in',
    question: 'Simplify: 3x + 2x + 7 - 3',
    answer: '5x + 4',
    hint1: 'Combine the terms that have x together, and combine the plain numbers together.',
    hint2: '3x + 2x = 5x. And 7 - 3 = 4. Put them together.',
    explanation:
      'Combine like terms: 3x + 2x = 5x, and 7 - 3 = 4. The simplified expression is 5x + 4.',
  },
  {
    id: 'pa-expr-8',
    topicId: 'pre-algebra',
    subtopicId: 'expressions',
    difficulty: 4,
    type: 'multiple-choice',
    question: 'If a = 3 and b = 2, what is 4a - 3b + 1?',
    answer: '7',
    options: ['5', '7', '9', '6'],
    hint1: 'Replace a with 3 and b with 2, then calculate step by step.',
    hint2: '4(3) = 12. 3(2) = 6. So 12 - 6 + 1 = ?',
    explanation: '4(3) - 3(2) + 1 = 12 - 6 + 1 = 7.',
  },

  // --- Difficulty 5 ---
  {
    id: 'pa-expr-9',
    topicId: 'pre-algebra',
    subtopicId: 'expressions',
    difficulty: 5,
    type: 'fill-in',
    question: 'Simplify: 2(3x + 4) - (x + 5)',
    answer: '5x + 3',
    hint1: 'First distribute the 2 into (3x + 4), then distribute the minus sign into (x + 5).',
    hint2: '2(3x + 4) = 6x + 8. -(x + 5) = -x - 5. Now combine: 6x - x + 8 - 5.',
    explanation:
      '2(3x + 4) = 6x + 8. -(x + 5) = -x - 5. Combine like terms: 6x - x = 5x, 8 - 5 = 3. Answer: 5x + 3.',
  },
  {
    id: 'pa-expr-10',
    topicId: 'pre-algebra',
    subtopicId: 'expressions',
    difficulty: 5,
    type: 'multiple-choice',
    question: 'If x = 2 and y = -1, what is x² + 3xy - y²?',
    answer: '-3',
    options: ['-3', '1', '-5', '3'],
    hint1: 'Remember: x² means x times x, and xy means x times y. Substitute carefully with the negative number.',
    hint2: 'x² = 4. 3xy = 3(2)(-1) = -6. y² = (-1)² = 1. So 4 + (-6) - 1 = ?',
    explanation:
      'x² = 4, 3xy = 3(2)(-1) = -6, y² = 1. So 4 + (-6) - 1 = 4 - 6 - 1 = -3.',
  },

  // ============================================================
  // SIMPLE EQUATIONS (pa-eq-1 through pa-eq-10)
  // ============================================================

  // --- Difficulty 1 ---
  {
    id: 'pa-eq-1',
    topicId: 'pre-algebra',
    subtopicId: 'equations',
    difficulty: 1,
    type: 'fill-in',
    question: 'Solve for x: x + 3 = 10',
    answer: '7',
    hint1: 'What number plus 3 gives you 10?',
    hint2: 'Subtract 3 from both sides: x = 10 - 3.',
    explanation: 'x + 3 = 10. Subtract 3 from both sides: x = 10 - 3 = 7.',
  },
  {
    id: 'pa-eq-2',
    topicId: 'pre-algebra',
    subtopicId: 'equations',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'Solve for n: n - 5 = 8',
    answer: '13',
    options: ['3', '13', '8', '5'],
    hint1: 'What number minus 5 gives you 8?',
    hint2: 'Add 5 to both sides: n = 8 + 5.',
    explanation: 'n - 5 = 8. Add 5 to both sides: n = 8 + 5 = 13.',
  },

  // --- Difficulty 2 ---
  {
    id: 'pa-eq-3',
    topicId: 'pre-algebra',
    subtopicId: 'equations',
    difficulty: 2,
    type: 'fill-in',
    question: 'Solve for x: 4x = 20',
    answer: '5',
    hint1: '4 times what number equals 20?',
    hint2: 'Divide both sides by 4: x = 20 / 4.',
    explanation: '4x = 20. Divide both sides by 4: x = 20 / 4 = 5.',
  },
  {
    id: 'pa-eq-4',
    topicId: 'pre-algebra',
    subtopicId: 'equations',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'Solve for y: y / 3 = 6',
    answer: '18',
    options: ['2', '9', '18', '3'],
    hint1: 'What number divided by 3 gives you 6?',
    hint2: 'Multiply both sides by 3: y = 6 x 3.',
    explanation: 'y / 3 = 6. Multiply both sides by 3: y = 6 x 3 = 18.',
  },

  // --- Difficulty 3 ---
  {
    id: 'pa-eq-5',
    topicId: 'pre-algebra',
    subtopicId: 'equations',
    difficulty: 3,
    type: 'fill-in',
    question: 'Solve for x: 2x + 5 = 17',
    answer: '6',
    hint1: 'First get rid of the +5 by subtracting 5 from both sides.',
    hint2: '2x = 12. Now divide both sides by 2.',
    explanation: '2x + 5 = 17. Subtract 5: 2x = 12. Divide by 2: x = 6.',
  },
  {
    id: 'pa-eq-6',
    topicId: 'pre-algebra',
    subtopicId: 'equations',
    difficulty: 3,
    type: 'multiple-choice',
    question: 'Solve for m: 3m - 7 = 14',
    answer: '7',
    options: ['5', '6', '7', '8'],
    hint1: 'First add 7 to both sides to get rid of the -7.',
    hint2: '3m = 21. Now divide both sides by 3.',
    explanation: '3m - 7 = 14. Add 7: 3m = 21. Divide by 3: m = 7.',
  },

  // --- Difficulty 4 ---
  {
    id: 'pa-eq-7',
    topicId: 'pre-algebra',
    subtopicId: 'equations',
    difficulty: 4,
    type: 'fill-in',
    question: 'Solve for x: 5x + 3 = 2x + 18',
    answer: '5',
    hint1: 'Get all the x terms on one side. Subtract 2x from both sides first.',
    hint2: '3x + 3 = 18. Now subtract 3: 3x = 15. Divide by 3.',
    explanation:
      '5x + 3 = 2x + 18. Subtract 2x: 3x + 3 = 18. Subtract 3: 3x = 15. Divide by 3: x = 5.',
  },
  {
    id: 'pa-eq-8',
    topicId: 'pre-algebra',
    subtopicId: 'equations',
    difficulty: 4,
    type: 'true-false',
    question: 'True or False: The solution to 4(x + 2) = 20 is x = 3.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Try plugging x = 3 into the equation, or solve it yourself.',
    hint2: 'Distribute: 4x + 8 = 20. Then 4x = 12, so x = 3. Does this match?',
    explanation: '4(x + 2) = 20. Distribute: 4x + 8 = 20. Subtract 8: 4x = 12. Divide by 4: x = 3. True!',
  },

  // --- Difficulty 5 ---
  {
    id: 'pa-eq-9',
    topicId: 'pre-algebra',
    subtopicId: 'equations',
    difficulty: 5,
    type: 'fill-in',
    question: 'Solve for x: 3(x + 4) = 2(2x + 1) + 5',
    answer: '5',
    hint1: 'Distribute on both sides first: left side becomes 3x + 12, right side becomes 4x + 2 + 5.',
    hint2: '3x + 12 = 4x + 7. Subtract 3x from both sides: 12 = x + 7. Now subtract 7.',
    explanation:
      '3(x + 4) = 2(2x + 1) + 5. Left: 3x + 12. Right: 4x + 2 + 5 = 4x + 7. So 3x + 12 = 4x + 7. Subtract 3x: 12 = x + 7. Subtract 7: x = 5.',
  },
  {
    id: 'pa-eq-10',
    topicId: 'pre-algebra',
    subtopicId: 'equations',
    difficulty: 5,
    type: 'multiple-choice',
    question:
      'Maya has some stickers. If she triples her stickers and adds 4, she has the same as if she doubled them and added 13. How many stickers does she have?',
    answer: '9',
    options: ['7', '8', '9', '10'],
    hint1: 'Let s = number of stickers. Write the equation: 3s + 4 = 2s + 13.',
    hint2: 'Subtract 2s from both sides: s + 4 = 13. Now subtract 4.',
    explanation:
      '3s + 4 = 2s + 13. Subtract 2s: s + 4 = 13. Subtract 4: s = 9. Maya has 9 stickers.',
  },

  // ============================================================
  // INEQUALITIES (pa-ineq-1 through pa-ineq-10)
  // ============================================================

  // --- Difficulty 1 ---
  {
    id: 'pa-ineq-1',
    topicId: 'pre-algebra',
    subtopicId: 'inequalities',
    difficulty: 1,
    type: 'true-false',
    question: 'True or False: 5 > 3',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'The symbol ">" means "is greater than."',
    hint2: 'Is 5 greater than 3?',
    explanation: '5 is greater than 3, so 5 > 3 is True.',
  },
  {
    id: 'pa-ineq-2',
    topicId: 'pre-algebra',
    subtopicId: 'inequalities',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'Which symbol goes in the blank? 8 ___ 12',
    answer: '<',
    options: ['<', '>', '=', 'none of these'],
    hint1: 'Is 8 bigger or smaller than 12?',
    hint2: '8 is less than 12. The symbol for "less than" opens toward the bigger number.',
    explanation: '8 is less than 12, so we write 8 < 12.',
  },

  // --- Difficulty 2 ---
  {
    id: 'pa-ineq-3',
    topicId: 'pre-algebra',
    subtopicId: 'inequalities',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'If x > 5, which of these could NOT be a value of x?',
    answer: '4',
    options: ['6', '10', '4', '100'],
    hint1: 'x must be greater than 5. Which number is not greater than 5?',
    hint2: 'Check each option: is 6 > 5? Is 10 > 5? Is 4 > 5? Is 100 > 5?',
    explanation: '4 is not greater than 5, so x cannot be 4.',
  },
  {
    id: 'pa-ineq-4',
    topicId: 'pre-algebra',
    subtopicId: 'inequalities',
    difficulty: 2,
    type: 'true-false',
    question: 'True or False: If x + 2 > 7, then x could be 5.',
    answer: 'False',
    options: ['True', 'False'],
    hint1: 'Plug in x = 5 and check: is 5 + 2 > 7?',
    hint2: '5 + 2 = 7. Is 7 > 7? Remember, ">" means strictly greater.',
    explanation: '5 + 2 = 7, and 7 is NOT greater than 7 (they are equal). So x = 5 does not work. False.',
  },

  // --- Difficulty 3 ---
  {
    id: 'pa-ineq-5',
    topicId: 'pre-algebra',
    subtopicId: 'inequalities',
    difficulty: 3,
    type: 'fill-in',
    question:
      'Solve the inequality: x + 4 < 10. What is the largest whole number x can be?',
    answer: '5',
    hint1: 'Subtract 4 from both sides to find what x must be less than.',
    hint2: 'x < 6. What is the largest whole number less than 6?',
    explanation: 'x + 4 < 10 means x < 6. The largest whole number less than 6 is 5.',
  },
  {
    id: 'pa-ineq-6',
    topicId: 'pre-algebra',
    subtopicId: 'inequalities',
    difficulty: 3,
    type: 'multiple-choice',
    question: 'Solve: 2x > 10. What values of x work?',
    answer: 'x > 5',
    options: ['x > 5', 'x > 10', 'x < 5', 'x > 20'],
    hint1: 'Divide both sides by 2.',
    hint2: '2x > 10 becomes x > 10/2. What is 10 divided by 2?',
    explanation: 'Divide both sides by 2: x > 5.',
  },

  // --- Difficulty 4 ---
  {
    id: 'pa-ineq-7',
    topicId: 'pre-algebra',
    subtopicId: 'inequalities',
    difficulty: 4,
    type: 'fill-in',
    question:
      'Solve: 3x - 2 > 13. What is the smallest whole number that x can be?',
    answer: '6',
    hint1: 'First add 2 to both sides, then divide by 3.',
    hint2: '3x > 15, so x > 5. What is the smallest whole number greater than 5?',
    explanation:
      '3x - 2 > 13. Add 2: 3x > 15. Divide by 3: x > 5. The smallest whole number greater than 5 is 6.',
  },
  {
    id: 'pa-ineq-8',
    topicId: 'pre-algebra',
    subtopicId: 'inequalities',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A movie ticket costs $9. You have $50 and also need to buy a $5 drink. What is the maximum number of tickets you can buy? (Set up an inequality.)',
    answer: '5',
    options: ['4', '5', '6', '3'],
    hint1: 'Let t = tickets. The total cost is 9t + 5, and it must be at most 50.',
    hint2: '9t + 5 <= 50. So 9t <= 45. What is 45 / 9?',
    explanation:
      '9t + 5 <= 50. Subtract 5: 9t <= 45. Divide by 9: t <= 5. You can buy at most 5 tickets.',
  },

  // --- Difficulty 5 ---
  {
    id: 'pa-ineq-9',
    topicId: 'pre-algebra',
    subtopicId: 'inequalities',
    difficulty: 5,
    type: 'fill-in',
    question:
      'Find all whole numbers that satisfy BOTH inequalities: x > 2 AND x < 8. How many whole numbers work?',
    answer: '5',
    hint1: 'List the whole numbers greater than 2 and less than 8.',
    hint2: 'The numbers are 3, 4, 5, 6, 7. How many is that?',
    explanation:
      'x must be greater than 2 and less than 8. The whole numbers are 3, 4, 5, 6, 7 -- that is 5 numbers.',
  },
  {
    id: 'pa-ineq-10',
    topicId: 'pre-algebra',
    subtopicId: 'inequalities',
    difficulty: 5,
    type: 'multiple-choice',
    question:
      'Ravi is saving for a $120 game. He already has $45 and earns $15 per day. After how many days will he have enough? (Find the smallest number of days.)',
    answer: '5',
    options: ['4', '5', '6', '7'],
    hint1: 'Set up: 45 + 15d >= 120, where d is the number of days.',
    hint2: '15d >= 75. So d >= 5. The smallest whole number is?',
    explanation:
      '45 + 15d >= 120. Subtract 45: 15d >= 75. Divide by 15: d >= 5. He needs at least 5 days.',
  },

  // ============================================================
  // COORDINATE BASICS (pa-coord-1 through pa-coord-10)
  // ============================================================

  // --- Difficulty 1 ---
  {
    id: 'pa-coord-1',
    topicId: 'pre-algebra',
    subtopicId: 'coordinates',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'In the coordinate pair (3, 5), which number tells you how far to go to the right?',
    answer: '3',
    options: ['3', '5', '8', '15'],
    hint1: 'A coordinate pair is written as (x, y). The first number is x.',
    hint2: 'The x-coordinate (first number) tells you left-right position. What is the first number?',
    explanation:
      'In (3, 5), the first number 3 is the x-coordinate, which tells you to go 3 units to the right.',
  },
  {
    id: 'pa-coord-2',
    topicId: 'pre-algebra',
    subtopicId: 'coordinates',
    difficulty: 1,
    type: 'true-false',
    question: 'True or False: The point (0, 0) is called the origin.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'The origin is where the x-axis and y-axis cross.',
    hint2: 'Both coordinates are 0 at the crossing point of the axes.',
    explanation:
      'The origin is the point where the x-axis and y-axis meet, which is at (0, 0). True!',
  },

  // --- Difficulty 2 ---
  {
    id: 'pa-coord-3',
    topicId: 'pre-algebra',
    subtopicId: 'coordinates',
    difficulty: 2,
    type: 'fill-in',
    question:
      'A point is 4 units to the right of the origin and 7 units up. What are its coordinates? Write your answer as (x, y).',
    answer: '(4, 7)',
    hint1: 'Right means positive x. Up means positive y.',
    hint2: 'x = 4 (right), y = 7 (up). Write it as (x, y).',
    explanation:
      '4 units right means x = 4. 7 units up means y = 7. The coordinates are (4, 7).',
  },
  {
    id: 'pa-coord-4',
    topicId: 'pre-algebra',
    subtopicId: 'coordinates',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'Which point is located on the y-axis?',
    answer: '(0, 6)',
    options: ['(3, 0)', '(0, 6)', '(2, 2)', '(6, 6)'],
    hint1: 'Points on the y-axis have a special x-coordinate.',
    hint2: 'On the y-axis, x = 0. Which option has x = 0?',
    explanation:
      'Points on the y-axis always have an x-coordinate of 0. The point (0, 6) is on the y-axis.',
  },

  // --- Difficulty 3 ---
  {
    id: 'pa-coord-5',
    topicId: 'pre-algebra',
    subtopicId: 'coordinates',
    difficulty: 3,
    type: 'fill-in',
    question:
      'A point is 3 units to the LEFT of the origin and 2 units DOWN. What are its coordinates? Write as (x, y).',
    answer: '(-3, -2)',
    hint1: 'Left means negative x. Down means negative y.',
    hint2: 'x = -3 (left), y = -2 (down).',
    explanation:
      '3 units left means x = -3. 2 units down means y = -2. The coordinates are (-3, -2).',
  },
  {
    id: 'pa-coord-6',
    topicId: 'pre-algebra',
    subtopicId: 'coordinates',
    difficulty: 3,
    type: 'multiple-choice',
    question: 'In which quadrant is the point (-4, 5)?',
    answer: 'Quadrant II',
    options: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
    hint1: 'Check the signs: x is negative, y is positive.',
    hint2: 'Negative x (left) and positive y (up) is the upper-left area of the graph.',
    explanation:
      'The point (-4, 5) has negative x and positive y. That puts it in Quadrant II (upper-left).',
  },

  // --- Difficulty 4 ---
  {
    id: 'pa-coord-7',
    topicId: 'pre-algebra',
    subtopicId: 'coordinates',
    difficulty: 4,
    type: 'fill-in',
    question:
      'What is the distance between the points (1, 3) and (1, 8)? (They share the same x-coordinate.)',
    answer: '5',
    hint1: 'Since both points have x = 1, they are on the same vertical line. Just look at the y-values.',
    hint2: 'The distance is |8 - 3|. What is that?',
    explanation:
      'Both points have x = 1, so the distance is just the difference in y-values: |8 - 3| = 5 units.',
  },
  {
    id: 'pa-coord-8',
    topicId: 'pre-algebra',
    subtopicId: 'coordinates',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'If you reflect the point (3, -2) across the x-axis, what are the new coordinates?',
    answer: '(3, 2)',
    options: ['(-3, -2)', '(-3, 2)', '(3, 2)', '(2, -3)'],
    hint1: 'Reflecting across the x-axis flips the point up or down. Which coordinate changes?',
    hint2: 'The x stays the same, and the y flips sign: -2 becomes 2.',
    explanation:
      'Reflecting across the x-axis changes the sign of y. (3, -2) becomes (3, 2).',
  },

  // --- Difficulty 5 ---
  {
    id: 'pa-coord-9',
    topicId: 'pre-algebra',
    subtopicId: 'coordinates',
    difficulty: 5,
    type: 'fill-in',
    question:
      'Three corners of a rectangle are (1, 2), (1, 6), and (5, 6). What is the fourth corner? Write as (x, y).',
    answer: '(5, 2)',
    hint1: 'A rectangle has opposite sides that are equal and parallel. Sketch the three points and figure out where the fourth must go.',
    hint2: 'The x-values used are 1 and 5. The y-values used are 2 and 6. The missing corner combines the unused pair.',
    explanation:
      'The rectangle has corners at x = 1 and x = 5, and y = 2 and y = 6. The missing corner is (5, 2).',
  },
  {
    id: 'pa-coord-10',
    topicId: 'pre-algebra',
    subtopicId: 'coordinates',
    difficulty: 5,
    type: 'multiple-choice',
    question:
      'A point starts at (2, 3). It moves 4 units left and 5 units down. Then it is reflected across the y-axis. What are the final coordinates?',
    answer: '(2, -2)',
    options: ['(2, -2)', '(-2, -2)', '(2, 2)', '(-6, -2)'],
    hint1: 'First apply the move: subtract 4 from x and 5 from y.',
    hint2: 'After moving: (2-4, 3-5) = (-2, -2). Reflecting across the y-axis flips the sign of x.',
    explanation:
      'Move: (2-4, 3-5) = (-2, -2). Reflect across y-axis: x flips sign, so (-2, -2) becomes (2, -2).',
  },
]
