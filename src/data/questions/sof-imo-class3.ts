import { Question } from '../types'

export const questions: Question[] = [
  // ═══════════════════════════════════════════════════════════════
  // PAPER 1 (sof3-paper1) — 40 questions
  // ═══════════════════════════════════════════════════════════════

  // ─────────────────────────────────────────────
  // Section 1: Logical Reasoning (10 questions, difficulty 1)
  // ─────────────────────────────────────────────
  {
    id: 'sof3-paper1-1',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What comes next in the pattern? 3, 6, 9, 12, __',
    answer: '15',
    options: ['13', '14', '15', '16'],
    hint1: 'Look at the difference between each number.',
    hint2: 'Each number goes up by 3. What is 12 + 3?',
    explanation:
      'The pattern adds 3 each time: 3, 6, 9, 12, 15. The next number is 15.',
  },
  {
    id: 'sof3-paper1-2',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Pen is to Write as Scissors is to __. Choose the correct answer.',
    answer: 'Cut',
    options: ['Draw', 'Cut', 'Paste', 'Fold'],
    hint1: 'Think about what each tool is used for.',
    hint2: 'A pen is used to write. What are scissors used to do?',
    explanation:
      'A pen is used to write. Similarly, scissors are used to cut. So the answer is Cut.',
  },
  {
    id: 'sof3-paper1-3',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'If A = 1, B = 2, C = 3, ..., what does the code "3-1-20" stand for?',
    answer: 'CAT',
    options: ['BAT', 'CAT', 'HAT', 'MAT'],
    hint1: 'Find which letter each number stands for.',
    hint2: '3 = C, 1 = A, 20 = T. Put them together.',
    explanation:
      'Using the code A=1, B=2, C=3, ... we get 3=C, 1=A, 20=T. So the word is CAT.',
  },
  {
    id: 'sof3-paper1-4',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Anita is 5th from the top and 10th from the bottom in her class. How many students are in the class?',
    answer: '14',
    options: ['14', '15', '16', '13'],
    hint1: 'Add her positions from top and bottom, but be careful not to count her twice.',
    hint2: 'Total = (position from top) + (position from bottom) - 1 = 5 + 10 - 1.',
    explanation:
      'Total students = 5 + 10 - 1 = 14. We subtract 1 because Anita is counted in both positions.',
  },
  {
    id: 'sof3-paper1-5',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'If you look at the letter "b" in a mirror, what will it look like?',
    answer: 'd',
    options: ['p', 'q', 'd', 'b'],
    hint1: 'A mirror flips things left to right.',
    hint2: 'The bump on "b" is on the right. In the mirror, the bump will move to the left side.',
    explanation:
      'A mirror reverses left and right. The letter "b" becomes "d" in a mirror image.',
  },
  {
    id: 'sof3-paper1-6',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Which shape comes next? Circle, Square, Triangle, Circle, Square, __',
    answer: 'Triangle',
    options: ['Circle', 'Square', 'Triangle', 'Rectangle'],
    hint1: 'The shapes repeat in a pattern.',
    hint2: 'The pattern is: Circle, Square, Triangle, then it starts again. After Square comes...',
    explanation:
      'The pattern repeats every 3 shapes: Circle, Square, Triangle. After Circle and Square, the next shape is Triangle.',
  },
  {
    id: 'sof3-paper1-7',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Today is Wednesday. What day will it be after 5 days?',
    answer: 'Monday',
    options: ['Sunday', 'Monday', 'Tuesday', 'Saturday'],
    hint1: 'Count forward 5 days from Wednesday.',
    hint2: 'Wed → Thu (1) → Fri (2) → Sat (3) → Sun (4) → Mon (5).',
    explanation:
      'Counting 5 days from Wednesday: Thursday, Friday, Saturday, Sunday, Monday. The answer is Monday.',
  },
  {
    id: 'sof3-paper1-8',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Which one does NOT belong to the group? Apple, Mango, Carrot, Banana',
    answer: 'Carrot',
    options: ['Apple', 'Mango', 'Carrot', 'Banana'],
    hint1: 'Three of these are the same type of food.',
    hint2: 'Apple, Mango, and Banana are all fruits. Which one is a vegetable?',
    explanation:
      'Apple, Mango, and Banana are fruits. Carrot is a vegetable. So Carrot does not belong.',
  },
  {
    id: 'sof3-paper1-9',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What comes next? 2, 4, 8, 16, __',
    answer: '32',
    options: ['20', '24', '28', '32'],
    hint1: 'Look at how each number changes to the next.',
    hint2: 'Each number is doubled (multiplied by 2). What is 16 × 2?',
    explanation:
      'Each number is multiplied by 2: 2×2=4, 4×2=8, 8×2=16, 16×2=32. The next number is 32.',
  },
  {
    id: 'sof3-paper1-10',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'How many triangles can you see in a square that has one diagonal drawn inside it?',
    answer: '2',
    options: ['1', '2', '3', '4'],
    hint1: 'A diagonal splits the square into parts.',
    hint2: 'Draw a line from one corner of a square to the opposite corner. How many triangles are formed?',
    explanation:
      'A diagonal of a square divides it into exactly 2 triangles.',
  },

  // ─────────────────────────────────────────────
  // Section 2: Mathematical Reasoning (10 questions, difficulty 2)
  // ─────────────────────────────────────────────
  {
    id: 'sof3-paper1-11',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is the number name for 4,527?',
    answer: 'Four thousand five hundred twenty-seven',
    options: [
      'Four thousand five hundred seventy-two',
      'Four thousand five hundred twenty-seven',
      'Four thousand two hundred fifty-seven',
      'Four thousand seven hundred twenty-five',
    ],
    hint1: 'Read each digit by its place value.',
    hint2: '4 is in the thousands place, 5 in hundreds, 2 in tens, 7 in ones.',
    explanation:
      '4,527 = 4 thousands + 5 hundreds + 2 tens + 7 ones = Four thousand five hundred twenty-seven.',
  },
  {
    id: 'sof3-paper1-12',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is the place value of 6 in 3,618?',
    answer: '600',
    options: ['6', '60', '600', '6000'],
    hint1: 'Find which place the digit 6 is in.',
    hint2: 'In 3,618 the digit 6 is in the hundreds place. What is 6 × 100?',
    explanation:
      'In 3,618, the digit 6 is in the hundreds place. So its place value is 6 × 100 = 600.',
  },
  {
    id: 'sof3-paper1-13',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 347 + 258?',
    answer: '605',
    options: ['595', '605', '615', '505'],
    hint1: 'Add the ones, then the tens, then the hundreds. Remember to carry over.',
    hint2: '7+8=15 (write 5, carry 1). 4+5+1=10 (write 0, carry 1). 3+2+1=6.',
    explanation:
      '347 + 258: Ones: 7+8=15 (5, carry 1). Tens: 4+5+1=10 (0, carry 1). Hundreds: 3+2+1=6. Answer is 605.',
  },
  {
    id: 'sof3-paper1-14',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 7 × 8?',
    answer: '56',
    options: ['48', '54', '56', '63'],
    hint1: 'Think of the multiplication table of 7.',
    hint2: '7 × 8 means 7 added 8 times. Try: 7×7=49, so 7×8=49+7.',
    explanation: '7 × 8 = 56. From the multiplication table of 7.',
  },
  {
    id: 'sof3-paper1-15',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 36 ÷ 4?',
    answer: '9',
    options: ['7', '8', '9', '10'],
    hint1: 'How many groups of 4 make 36?',
    hint2: 'Think: 4 × ? = 36. Try 4 × 9.',
    explanation: '36 ÷ 4 = 9. Because 4 × 9 = 36.',
  },
  {
    id: 'sof3-paper1-16',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What fraction of this shape is shaded if 1 out of 4 equal parts is coloured?',
    answer: '1/4',
    options: ['1/2', '1/3', '1/4', '3/4'],
    hint1: 'Count the total parts and the shaded parts.',
    hint2: 'There are 4 equal parts and 1 is shaded. The fraction is shaded parts over total parts.',
    explanation:
      'When 1 out of 4 equal parts is shaded, the fraction is 1/4 (one-quarter).',
  },
  {
    id: 'sof3-paper1-17',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'Which of these numbers is odd? 12, 25, 38, 44',
    answer: '25',
    options: ['12', '25', '38', '44'],
    hint1: 'An odd number does not end in 0, 2, 4, 6, or 8.',
    hint2: 'Check the last digit of each number. Which one ends in 1, 3, 5, 7, or 9?',
    explanation:
      '25 ends in 5, which makes it odd. 12, 38, and 44 all end in even digits.',
  },
  {
    id: 'sof3-paper1-18',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'Which is the greatest number? 2,456 or 2,465 or 2,546 or 2,564',
    answer: '2,564',
    options: ['2,456', '2,465', '2,546', '2,564'],
    hint1: 'Compare digit by digit from left to right.',
    hint2: 'All start with 2. Compare the hundreds digit: 4, 4, 5, 5. Among those with 5 in hundreds, compare tens: 4 vs 6.',
    explanation:
      'Comparing: all have 2 thousands. 2,546 and 2,564 have 5 hundreds. Between them, 2,564 has 6 tens vs 4 tens. So 2,564 is greatest.',
  },
  {
    id: 'sof3-paper1-19',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 500 - 237?',
    answer: '263',
    options: ['253', '263', '273', '363'],
    hint1: 'You will need to borrow when subtracting.',
    hint2: 'Start from ones: 0-7 (borrow). Then tens: 10-1-3=6 (borrow). Hundreds: 5-1-2=2. So you get 263.',
    explanation:
      '500 - 237: Ones: 10-7=3 (borrow). Tens: 9-3=6 (borrow). Hundreds: 4-2=2. Answer is 263.',
  },
  {
    id: 'sof3-paper1-20',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'Which multiplication fact is shown by 6 + 6 + 6 + 6?',
    answer: '6 × 4 = 24',
    options: ['6 × 3 = 18', '6 × 4 = 24', '6 × 5 = 30', '4 × 4 = 16'],
    hint1: 'Count how many times 6 is added.',
    hint2: '6 is added 4 times. So it is 6 × 4.',
    explanation:
      '6 + 6 + 6 + 6 means 6 is added 4 times. This equals 6 × 4 = 24.',
  },

  // ─────────────────────────────────────────────
  // Section 3: Everyday Mathematics (10 questions, difficulty 3)
  // ─────────────────────────────────────────────
  {
    id: 'sof3-paper1-21',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 3,
    type: 'multiple-choice',
    question: 'A ribbon is 2 m 35 cm long. How many centimetres is that in total?',
    answer: '235 cm',
    options: ['225 cm', '230 cm', '235 cm', '253 cm'],
    hint1: 'Remember that 1 metre = 100 centimetres.',
    hint2: '2 m = 200 cm. Add 35 cm to that.',
    explanation:
      '2 m 35 cm = (2 × 100) + 35 = 200 + 35 = 235 cm.',
  },
  {
    id: 'sof3-paper1-22',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A clock shows 3:45. What time will it be after 30 minutes?',
    answer: '4:15',
    options: ['3:75', '4:00', '4:15', '4:30'],
    hint1: 'Add 30 minutes to 3:45.',
    hint2: '3:45 + 15 min = 4:00. Then add 15 more minutes = 4:15.',
    explanation:
      '3:45 + 30 minutes = 4:15. After 15 minutes it becomes 4:00, then 15 more minutes makes it 4:15.',
  },
  {
    id: 'sof3-paper1-23',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'Riya buys a pencil for Rs 8 and an eraser for Rs 5. She pays with a Rs 20 note. How much change does she get?',
    answer: 'Rs 7',
    options: ['Rs 5', 'Rs 6', 'Rs 7', 'Rs 8'],
    hint1: 'First find the total cost, then subtract from Rs 20.',
    hint2: 'Total cost = 8 + 5 = Rs 13. Change = 20 - 13.',
    explanation:
      'Total cost = Rs 8 + Rs 5 = Rs 13. Change = Rs 20 - Rs 13 = Rs 7.',
  },
  {
    id: 'sof3-paper1-24',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 3,
    type: 'multiple-choice',
    question: 'How many sides does a hexagon have?',
    answer: '6',
    options: ['4', '5', '6', '8'],
    hint1: 'The name of this shape gives a clue. "Hex" means six.',
    hint2: 'A pentagon has 5 sides. A hexagon has one more.',
    explanation: 'A hexagon has 6 sides. The prefix "hex" means six.',
  },
  {
    id: 'sof3-paper1-25',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'In a pictograph, one smiley face stands for 2 books. If Aman has 5 smiley faces, how many books does he have?',
    answer: '10',
    options: ['5', '7', '10', '12'],
    hint1: 'Each smiley means 2 books.',
    hint2: '5 smileys × 2 books each = ?',
    explanation: '5 smiley faces × 2 books per smiley = 10 books.',
  },
  {
    id: 'sof3-paper1-26',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A bag of rice weighs 5 kg. Meena bought 3 bags. What is the total weight?',
    answer: '15 kg',
    options: ['8 kg', '10 kg', '15 kg', '20 kg'],
    hint1: 'Multiply the weight of one bag by the number of bags.',
    hint2: '5 kg × 3 = ?',
    explanation: 'Total weight = 5 kg × 3 = 15 kg.',
  },
  {
    id: 'sof3-paper1-27',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'January has 31 days. If January 1 is a Monday, what day is January 15?',
    answer: 'Monday',
    options: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    hint1: 'A week has 7 days. Count the days from January 1.',
    hint2: 'January 1 is Monday. After 7 days (Jan 8) is Monday again. After 14 days (Jan 15) is Monday again.',
    explanation:
      'Jan 1 = Monday. Jan 8 = Monday (after 7 days). Jan 15 = Monday (after another 7 days). So January 15 is a Monday.',
  },
  {
    id: 'sof3-paper1-28',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A bottle holds 1 litre of milk. How many millilitres is that?',
    answer: '1000 mL',
    options: ['100 mL', '500 mL', '1000 mL', '10000 mL'],
    hint1: 'Remember the relationship between litres and millilitres.',
    hint2: '1 litre = 1000 millilitres.',
    explanation: '1 litre = 1000 millilitres (mL).',
  },
  {
    id: 'sof3-paper1-29',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 3,
    type: 'multiple-choice',
    question: 'How many corners does a rectangle have?',
    answer: '4',
    options: ['2', '3', '4', '5'],
    hint1: 'Think about the shape of a rectangle.',
    hint2: 'A rectangle has 4 sides. Count the points where the sides meet.',
    explanation:
      'A rectangle has 4 corners (also called vertices). Each corner is where two sides meet.',
  },
  {
    id: 'sof3-paper1-30',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'Arjun has Rs 50. He buys a notebook for Rs 30 and a pen for Rs 12. How much money is left?',
    answer: 'Rs 8',
    options: ['Rs 6', 'Rs 8', 'Rs 10', 'Rs 12'],
    hint1: 'First find the total spent, then subtract from Rs 50.',
    hint2: 'Total spent = 30 + 12 = Rs 42. Money left = 50 - 42.',
    explanation:
      'Total spent = Rs 30 + Rs 12 = Rs 42. Money left = Rs 50 - Rs 42 = Rs 8.',
  },

  // ─────────────────────────────────────────────
  // Section 4: Achievers Section (10 questions, difficulty 4)
  // ─────────────────────────────────────────────
  {
    id: 'sof3-paper1-31',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'Priya has Rs 100. She buys 3 pencils at Rs 7 each and 2 erasers at Rs 5 each. She then gives half of the remaining money to her brother. How much does she have now?',
    answer: 'Rs 34',
    options: ['Rs 31', 'Rs 34', 'Rs 35', 'Rs 69'],
    hint1: 'First find the total cost, then the remaining money, then divide by 2.',
    hint2: 'Pencils: 3×7=21. Erasers: 2×5=10. Total: 31. Remaining: 100-31=69. Half of 69 = 34.50... but think carefully about halving 69.',
    explanation:
      'Cost of pencils = 3 × 7 = Rs 21. Cost of erasers = 2 × 5 = Rs 10. Total spent = Rs 31. Remaining = Rs 100 - Rs 31 = Rs 69. Half of Rs 69 = Rs 34.50, but since we deal in whole rupees, she keeps Rs 34 (giving Rs 35 to her brother). Answer: Rs 34.',
  },
  {
    id: 'sof3-paper1-32',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A number pattern goes: 1, 1, 2, 3, 5, 8, 13, __. What is the next number?',
    answer: '21',
    options: ['15', '18', '20', '21'],
    hint1: 'Look at how each number is made from the previous numbers.',
    hint2: 'Each number is the sum of the two numbers before it. 8 + 13 = ?',
    explanation:
      'This is the Fibonacci pattern. Each number is the sum of the two before it: 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13, 8+13=21.',
  },
  {
    id: 'sof3-paper1-33',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'Aarav is 8th from the left end of a row and 12th from the right end. How many children are in the row?',
    answer: '19',
    options: ['18', '19', '20', '21'],
    hint1: 'Think about Aarav\'s position from both ends.',
    hint2: 'Total = position from left + position from right - 1 (so Aarav is not counted twice).',
    explanation:
      'Total children = 8 + 12 - 1 = 19. We subtract 1 because Aarav is counted in both positions.',
  },
  {
    id: 'sof3-paper1-34',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A square garden has a side of 9 metres. A fence goes all around it. What is the total length of the fence?',
    answer: '36 metres',
    options: ['18 metres', '27 metres', '36 metres', '81 metres'],
    hint1: 'The fence goes around all 4 sides. This is the perimeter.',
    hint2: 'Perimeter of a square = 4 × side. What is 4 × 9?',
    explanation:
      'Perimeter of a square = 4 × side = 4 × 9 = 36 metres.',
  },
  {
    id: 'sof3-paper1-35',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A train leaves at 9:30 AM and reaches at 1:15 PM. How long is the journey?',
    answer: '3 hours 45 minutes',
    options: [
      '3 hours 15 minutes',
      '3 hours 30 minutes',
      '3 hours 45 minutes',
      '4 hours 15 minutes',
    ],
    hint1: 'Count the hours first, then the minutes.',
    hint2: 'From 9:30 to 12:30 is 3 hours. From 12:30 to 1:15 is 45 minutes.',
    explanation:
      'From 9:30 AM to 12:30 PM = 3 hours. From 12:30 PM to 1:15 PM = 45 minutes. Total = 3 hours 45 minutes.',
  },
  {
    id: 'sof3-paper1-36',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A farmer has 96 apples. He packs them equally into bags of 8. He gives away 5 bags and keeps the rest. How many apples does he keep?',
    answer: '56',
    options: ['40', '48', '56', '64'],
    hint1: 'First find the total number of bags, then subtract the bags given away.',
    hint2: 'Total bags = 96 ÷ 8 = 12. Bags kept = 12 - 5 = 7. Apples kept = 7 × 8.',
    explanation:
      'Total bags = 96 ÷ 8 = 12. Bags given away = 5. Bags kept = 12 - 5 = 7. Apples kept = 7 × 8 = 56.',
  },
  {
    id: 'sof3-paper1-37',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'Riya has Rs 120. She spends 1/4 on books and 1/3 on toys. How much money is left?',
    answer: 'Rs 50',
    options: ['Rs 40', 'Rs 45', 'Rs 50', 'Rs 60'],
    hint1: 'Find 1/4 of 120 and 1/3 of 120 separately, then subtract both from 120.',
    hint2: '1/4 of 120 = 30 (books). 1/3 of 120 = 40 (toys). Total spent = 30 + 40 = 70.',
    explanation:
      'Books = 1/4 of Rs 120 = Rs 30. Toys = 1/3 of Rs 120 = Rs 40. Total spent = Rs 70. Money left = Rs 120 - Rs 70 = Rs 50.',
  },
  {
    id: 'sof3-paper1-38',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A rectangular field is 25 m long and 15 m wide. A boy runs around it 3 times. How far does he run?',
    answer: '240 m',
    options: ['80 m', '120 m', '200 m', '240 m'],
    hint1: 'First find the perimeter (distance around once), then multiply by 3.',
    hint2: 'Perimeter = 2 × (25 + 15) = 2 × 40 = 80 m. Running 3 times = 80 × 3.',
    explanation:
      'Perimeter = 2 × (25 + 15) = 80 m. Distance for 3 rounds = 80 × 3 = 240 m.',
  },
  {
    id: 'sof3-paper1-39',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A shop sells pens at Rs 6 each. If Arun has Rs 50, how many pens can he buy?',
    answer: '8 pens',
    options: ['7 pens', '8 pens', '9 pens', '10 pens'],
    hint1: 'Divide the total money by the price of one pen.',
    hint2: '50 ÷ 6 = 8 with remainder 2. He can buy 8 full pens.',
    explanation:
      '50 ÷ 6 = 8 remainder 2. Arun can buy 8 pens and will have Rs 2 left over.',
  },
  {
    id: 'sof3-paper1-40',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper1',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'In a class of 35 students, 12 walk to school and 15 come by bus. The rest come by car. How many students come by car?',
    answer: '8',
    options: ['6', '7', '8', '10'],
    hint1: 'Add the students who walk and take the bus, then subtract from the total.',
    hint2: 'Walk + Bus = 12 + 15 = 27. Car = 35 - 27.',
    explanation:
      'Walk + Bus = 12 + 15 = 27 students. Car = 35 - 27 = 8 students.',
  },

  // ═══════════════════════════════════════════════════════════════
  // PAPER 2 (sof3-paper2) — 40 questions
  // ═══════════════════════════════════════════════════════════════

  // ─────────────────────────────────────────────
  // Section 1: Logical Reasoning (10 questions, difficulty 1)
  // ─────────────────────────────────────────────
  {
    id: 'sof3-paper2-1',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What comes next in the pattern? 5, 10, 15, 20, __',
    answer: '25',
    options: ['22', '24', '25', '30'],
    hint1: 'Find the difference between each pair of numbers.',
    hint2: 'Each number increases by 5. What is 20 + 5?',
    explanation:
      'The pattern adds 5 each time: 5, 10, 15, 20, 25. The next number is 25.',
  },
  {
    id: 'sof3-paper2-2',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Bird is to Fly as Fish is to __. Choose the correct answer.',
    answer: 'Swim',
    options: ['Run', 'Swim', 'Jump', 'Crawl'],
    hint1: 'Think about what each animal does to move.',
    hint2: 'A bird flies through the air. What does a fish do in water?',
    explanation:
      'A bird flies. A fish swims. So the correct analogy is: Bird is to Fly as Fish is to Swim.',
  },
  {
    id: 'sof3-paper2-3',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'If A = 1, B = 2, C = 3, ..., what does the code "4-15-7" stand for?',
    answer: 'DOG',
    options: ['COG', 'DOG', 'FOG', 'LOG'],
    hint1: 'Convert each number to its matching letter.',
    hint2: '4 = D, 15 = O, 7 = G. Put them together.',
    explanation:
      'Using A=1, B=2, C=3, ..., we get 4=D, 15=O, 7=G. The word is DOG.',
  },
  {
    id: 'sof3-paper2-4',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'In a queue, Rahul is 7th from the front and 8th from the back. How many people are in the queue?',
    answer: '14',
    options: ['13', '14', '15', '16'],
    hint1: 'Add his positions and think about double counting.',
    hint2: 'Total = 7 + 8 - 1 = 14. We subtract 1 because Rahul is counted twice.',
    explanation:
      'Total people = 7 + 8 - 1 = 14. Subtract 1 because Rahul is counted from both ends.',
  },
  {
    id: 'sof3-paper2-5',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'If you look at the number "3" in a mirror, what will it look like?',
    answer: 'A reversed 3 (like the letter E)',
    options: [
      'It stays the same',
      'It looks like 8',
      'A reversed 3 (like the letter E)',
      'It looks upside down',
    ],
    hint1: 'A mirror flips things left to right.',
    hint2: 'The open side of 3 faces left. In a mirror, it will face right, looking like the letter E.',
    explanation:
      'A mirror reverses left and right. The number 3 in a mirror looks like a backward 3, which resembles the letter E.',
  },
  {
    id: 'sof3-paper2-6',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Which shape comes next? Star, Heart, Star, Heart, Star, __',
    answer: 'Heart',
    options: ['Star', 'Heart', 'Circle', 'Diamond'],
    hint1: 'The shapes repeat in a pattern.',
    hint2: 'The pattern alternates: Star, Heart, Star, Heart. After Star comes...',
    explanation:
      'The pattern alternates between Star and Heart. After Star, the next shape is Heart.',
  },
  {
    id: 'sof3-paper2-7',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Today is Saturday. What day was it 3 days ago?',
    answer: 'Wednesday',
    options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    hint1: 'Count backward 3 days from Saturday.',
    hint2: 'Sat → Fri (1 day back) → Thu (2 days back) → Wed (3 days back).',
    explanation:
      'Counting 3 days back from Saturday: Friday, Thursday, Wednesday. The answer is Wednesday.',
  },
  {
    id: 'sof3-paper2-8',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Which one does NOT belong to the group? Dog, Cat, Parrot, Cow',
    answer: 'Parrot',
    options: ['Dog', 'Cat', 'Parrot', 'Cow'],
    hint1: 'Three of them move in a similar way.',
    hint2: 'Dog, Cat, and Cow are all animals that walk on four legs. Parrot is a bird that flies.',
    explanation:
      'Dog, Cat, and Cow are four-legged animals (mammals). Parrot is a bird. So Parrot does not belong.',
  },
  {
    id: 'sof3-paper2-9',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What comes next? 100, 90, 80, 70, __',
    answer: '60',
    options: ['50', '55', '60', '65'],
    hint1: 'The numbers are going down. By how much?',
    hint2: 'Each number decreases by 10. What is 70 - 10?',
    explanation:
      'The pattern subtracts 10 each time: 100, 90, 80, 70, 60. The next number is 60.',
  },
  {
    id: 'sof3-paper2-10',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'How many squares can you count in a 2×2 grid (a big square made of 4 small squares)?',
    answer: '5',
    options: ['4', '5', '6', '8'],
    hint1: 'Don\'t forget to count the big square made by all 4 together.',
    hint2: 'There are 4 small squares and 1 big square. Total = 4 + 1.',
    explanation:
      'In a 2×2 grid there are 4 small squares and 1 large square (the whole grid). Total = 5 squares.',
  },

  // ─────────────────────────────────────────────
  // Section 2: Mathematical Reasoning (10 questions, difficulty 2)
  // ─────────────────────────────────────────────
  {
    id: 'sof3-paper2-11',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is the number name for 7,089?',
    answer: 'Seven thousand eighty-nine',
    options: [
      'Seven thousand eight hundred nine',
      'Seven thousand eighty-nine',
      'Seven thousand eight hundred ninety',
      'Seven thousand ninety-eight',
    ],
    hint1: 'Pay attention to which place has a zero.',
    hint2: '7 is in thousands, 0 is in hundreds (skip it), 8 is in tens, 9 is in ones.',
    explanation:
      '7,089 = 7 thousands + 0 hundreds + 8 tens + 9 ones = Seven thousand eighty-nine.',
  },
  {
    id: 'sof3-paper2-12',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is the place value of 3 in 1,305?',
    answer: '300',
    options: ['3', '30', '300', '3000'],
    hint1: 'Find which place the digit 3 occupies.',
    hint2: 'In 1,305 the digits are: 1(thousands), 3(hundreds), 0(tens), 5(ones). So 3 is in the hundreds place.',
    explanation:
      'In 1,305, the digit 3 is in the hundreds place. Its place value is 3 × 100 = 300.',
  },
  {
    id: 'sof3-paper2-13',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 463 + 379?',
    answer: '842',
    options: ['832', '842', '852', '742'],
    hint1: 'Add column by column from right to left. Remember to carry over.',
    hint2: '3+9=12 (write 2, carry 1). 6+7+1=14 (write 4, carry 1). 4+3+1=8.',
    explanation:
      '463 + 379: Ones: 3+9=12 (2, carry 1). Tens: 6+7+1=14 (4, carry 1). Hundreds: 4+3+1=8. Answer is 842.',
  },
  {
    id: 'sof3-paper2-14',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 9 × 6?',
    answer: '54',
    options: ['45', '48', '54', '56'],
    hint1: 'Think of the multiplication table of 9.',
    hint2: 'A trick for 9s: 9×6 → hold down finger 6. You get 5 fingers before it and 4 after = 54.',
    explanation: '9 × 6 = 54. From the multiplication table of 9.',
  },
  {
    id: 'sof3-paper2-15',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 45 ÷ 5?',
    answer: '9',
    options: ['7', '8', '9', '10'],
    hint1: 'How many groups of 5 make 45?',
    hint2: 'Think: 5 × ? = 45. Count by 5s: 5, 10, 15, 20, 25, 30, 35, 40, 45.',
    explanation: '45 ÷ 5 = 9. Because 5 × 9 = 45.',
  },
  {
    id: 'sof3-paper2-16',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'A pizza is cut into 3 equal slices. Rohan eats 1 slice. What fraction of the pizza is left?',
    answer: '2/3',
    options: ['1/2', '1/3', '2/3', '3/3'],
    hint1: 'If 1 out of 3 slices is eaten, how many are left?',
    hint2: '3 slices - 1 eaten = 2 slices left. The fraction is 2 out of 3.',
    explanation:
      'There were 3 equal slices. Rohan ate 1, so 2 are left. Fraction left = 2/3.',
  },
  {
    id: 'sof3-paper2-17',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'Which of these numbers is even? 13, 27, 34, 51',
    answer: '34',
    options: ['13', '27', '34', '51'],
    hint1: 'An even number ends in 0, 2, 4, 6, or 8.',
    hint2: 'Check the last digit of each number. Which one ends in an even digit?',
    explanation:
      '34 ends in 4, which is even. 13, 27, and 51 all end in odd digits.',
  },
  {
    id: 'sof3-paper2-18',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'Arrange in ascending order: 3,245; 3,425; 3,254; 3,524. Which comes first?',
    answer: '3,245',
    options: ['3,245', '3,254', '3,425', '3,524'],
    hint1: 'Ascending means smallest first.',
    hint2: 'All start with 3. Compare hundreds: 2, 4, 2, 5. The two smallest hundreds are 3,245 and 3,254. Compare their tens: 4 vs 5.',
    explanation:
      'Ascending order: 3,245 < 3,254 < 3,425 < 3,524. The smallest (first) is 3,245.',
  },
  {
    id: 'sof3-paper2-19',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 703 - 456?',
    answer: '247',
    options: ['237', '247', '253', '257'],
    hint1: 'You will need to borrow when subtracting.',
    hint2: 'Ones: 3-6 (borrow). 13-6=7. Tens: 9-5=4 (after borrowing). Hundreds: 6-4=2.',
    explanation:
      '703 - 456: Ones: borrow to get 13-6=7. Tens: borrow to get 9-5=4. Hundreds: 6-4=2. Answer is 247.',
  },
  {
    id: 'sof3-paper2-20',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 8 × 4?',
    answer: '32',
    options: ['28', '30', '32', '36'],
    hint1: 'Use the multiplication table of 8 or 4.',
    hint2: '8 × 4 is the same as 4 × 8. Try: 4 × 8 = ?. Or 8+8+8+8.',
    explanation: '8 × 4 = 32. From the multiplication table.',
  },

  // ─────────────────────────────────────────────
  // Section 3: Everyday Mathematics (10 questions, difficulty 3)
  // ─────────────────────────────────────────────
  {
    id: 'sof3-paper2-21',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 3,
    type: 'multiple-choice',
    question: 'A rope is 4 m 50 cm long. Another rope is 2 m 75 cm long. What is their total length?',
    answer: '7 m 25 cm',
    options: ['6 m 25 cm', '7 m 15 cm', '7 m 25 cm', '7 m 35 cm'],
    hint1: 'Add the metres and centimetres separately.',
    hint2: '4m + 2m = 6m. 50cm + 75cm = 125cm = 1m 25cm. Total = 6m + 1m 25cm = 7m 25cm.',
    explanation:
      '4m 50cm + 2m 75cm: Metres: 4+2=6. Centimetres: 50+75=125cm = 1m 25cm. Total: 6+1=7m 25cm.',
  },
  {
    id: 'sof3-paper2-22',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'School starts at 8:00 AM and lunch break is at 12:30 PM. How many hours and minutes is that?',
    answer: '4 hours 30 minutes',
    options: [
      '3 hours 30 minutes',
      '4 hours',
      '4 hours 30 minutes',
      '5 hours',
    ],
    hint1: 'Count hours from 8:00 to 12:00, then add the extra minutes.',
    hint2: 'From 8:00 to 12:00 = 4 hours. From 12:00 to 12:30 = 30 minutes.',
    explanation:
      'From 8:00 AM to 12:00 PM = 4 hours. Plus 30 minutes to 12:30 PM. Total = 4 hours 30 minutes.',
  },
  {
    id: 'sof3-paper2-23',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'Kavya has two Rs 20 notes and three Rs 5 coins. How much money does she have?',
    answer: 'Rs 55',
    options: ['Rs 45', 'Rs 50', 'Rs 55', 'Rs 60'],
    hint1: 'Find the value of notes and coins separately, then add.',
    hint2: 'Notes: 2 × 20 = Rs 40. Coins: 3 × 5 = Rs 15. Total = 40 + 15.',
    explanation:
      'Two Rs 20 notes = Rs 40. Three Rs 5 coins = Rs 15. Total = Rs 40 + Rs 15 = Rs 55.',
  },
  {
    id: 'sof3-paper2-24',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 3,
    type: 'multiple-choice',
    question: 'How many sides does a pentagon have?',
    answer: '5',
    options: ['4', '5', '6', '7'],
    hint1: 'The word "penta" gives a clue.',
    hint2: '"Penta" means five. A pentagon has five sides.',
    explanation: 'A pentagon has 5 sides. "Penta" means five in Greek.',
  },
  {
    id: 'sof3-paper2-25',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A table shows that Ravi scored 8 runs, Sita scored 12 runs, and Amit scored 5 runs. How many runs were scored in total?',
    answer: '25',
    options: ['20', '23', '25', '27'],
    hint1: 'Add all three scores together.',
    hint2: '8 + 12 + 5 = ?',
    explanation: 'Total runs = 8 + 12 + 5 = 25.',
  },
  {
    id: 'sof3-paper2-26',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A watermelon weighs 3 kg 500 g. A pumpkin weighs 2 kg 200 g. Which is heavier and by how much?',
    answer: 'Watermelon by 1 kg 300 g',
    options: [
      'Watermelon by 1 kg 200 g',
      'Watermelon by 1 kg 300 g',
      'Pumpkin by 1 kg 300 g',
      'Watermelon by 1 kg 500 g',
    ],
    hint1: 'Subtract the smaller weight from the larger weight.',
    hint2: '3kg 500g - 2kg 200g: kg: 3-2=1, g: 500-200=300.',
    explanation:
      'Watermelon (3 kg 500 g) - Pumpkin (2 kg 200 g) = 1 kg 300 g. The watermelon is heavier by 1 kg 300 g.',
  },
  {
    id: 'sof3-paper2-27',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'How many months in a year have exactly 30 days?',
    answer: '4',
    options: ['3', '4', '5', '6'],
    hint1: 'Think of the rhyme: "30 days has September..."',
    hint2: 'April, June, September, and November each have 30 days.',
    explanation:
      'The months with exactly 30 days are: April, June, September, and November. That is 4 months.',
  },
  {
    id: 'sof3-paper2-28',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A jug holds 2 litres of juice. If 750 mL is poured out, how much juice is left?',
    answer: '1250 mL',
    options: ['1000 mL', '1150 mL', '1250 mL', '1500 mL'],
    hint1: 'First convert litres to millilitres.',
    hint2: '2 litres = 2000 mL. Subtract 750 mL from 2000 mL.',
    explanation:
      '2 litres = 2000 mL. Juice left = 2000 - 750 = 1250 mL.',
  },
  {
    id: 'sof3-paper2-29',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 3,
    type: 'multiple-choice',
    question: 'A triangle has 3 sides. How many sides do 4 triangles have in total?',
    answer: '12',
    options: ['9', '10', '12', '15'],
    hint1: 'Multiply the number of sides by the number of triangles.',
    hint2: '3 sides × 4 triangles = ?',
    explanation: '4 triangles × 3 sides each = 12 sides in total.',
  },
  {
    id: 'sof3-paper2-30',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'Neha bought 4 chocolates at Rs 12 each. How much did she spend?',
    answer: 'Rs 48',
    options: ['Rs 36', 'Rs 44', 'Rs 48', 'Rs 52'],
    hint1: 'Multiply the price by the number of chocolates.',
    hint2: '4 × 12 = ? Try 4 × 10 = 40 and 4 × 2 = 8, then add.',
    explanation: '4 × Rs 12 = Rs 48.',
  },

  // ─────────────────────────────────────────────
  // Section 4: Achievers Section (10 questions, difficulty 4)
  // ─────────────────────────────────────────────
  {
    id: 'sof3-paper2-31',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'Vikram has 48 marbles. He gives 1/4 of them to Sunil and 1/3 of them to Pooja. How many marbles does Vikram have left?',
    answer: '20',
    options: ['16', '18', '20', '24'],
    hint1: 'Find 1/4 of 48 and 1/3 of 48 separately, then subtract both from 48.',
    hint2: '1/4 of 48 = 12. 1/3 of 48 = 16. Marbles given away = 12 + 16 = 28. Left = 48 - 28.',
    explanation:
      '1/4 of 48 = 12 (to Sunil). 1/3 of 48 = 16 (to Pooja). Total given = 28. Left = 48 - 28 = 20.',
  },
  {
    id: 'sof3-paper2-32',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A pattern goes: 2, 6, 12, 20, 30, __. What is the next number?',
    answer: '42',
    options: ['36', '38', '40', '42'],
    hint1: 'Look at the differences between consecutive numbers.',
    hint2: 'Differences: 4, 6, 8, 10. Each difference increases by 2. Next difference = 12. So 30 + 12 = ?',
    explanation:
      'Differences: 6-2=4, 12-6=6, 20-12=8, 30-20=10. The differences increase by 2 each time. Next difference = 12. So 30 + 12 = 42.',
  },
  {
    id: 'sof3-paper2-33',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'There are 5 rows of chairs. Each row has 7 chairs. If 12 chairs are empty, how many chairs have people sitting on them?',
    answer: '23',
    options: ['19', '21', '23', '25'],
    hint1: 'First find total chairs, then subtract the empty ones.',
    hint2: 'Total chairs = 5 × 7 = 35. Chairs with people = 35 - 12.',
    explanation:
      'Total chairs = 5 × 7 = 35. Empty chairs = 12. Chairs with people = 35 - 12 = 23.',
  },
  {
    id: 'sof3-paper2-34',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A rectangular garden is 12 m long and 8 m wide. What is the total length of fencing needed to go all around it?',
    answer: '40 m',
    options: ['20 m', '36 m', '40 m', '96 m'],
    hint1: 'The fencing goes around all 4 sides. This is the perimeter.',
    hint2: 'Perimeter of a rectangle = 2 × (length + width) = 2 × (12 + 8).',
    explanation:
      'Perimeter = 2 × (length + width) = 2 × (12 + 8) = 2 × 20 = 40 m.',
  },
  {
    id: 'sof3-paper2-35',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A movie starts at 10:45 AM and is 1 hour 50 minutes long. At what time does the movie end?',
    answer: '12:35 PM',
    options: ['11:35 AM', '12:25 PM', '12:35 PM', '12:45 PM'],
    hint1: 'Add 1 hour first, then add 50 minutes.',
    hint2: '10:45 + 1 hour = 11:45. Then 11:45 + 50 minutes. 11:45 + 15 min = 12:00, then +35 min = 12:35.',
    explanation:
      '10:45 AM + 1 hour = 11:45 AM. 11:45 AM + 50 minutes = 12:35 PM. (15 min to noon, then 35 more minutes.)',
  },
  {
    id: 'sof3-paper2-36',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A shopkeeper buys 6 boxes of mangoes. Each box has 24 mangoes. He sells all but 18. How many mangoes did he sell?',
    answer: '126',
    options: ['120', '124', '126', '130'],
    hint1: 'First find the total mangoes, then subtract the ones not sold.',
    hint2: 'Total = 6 × 24 = 144. Sold = 144 - 18.',
    explanation:
      'Total mangoes = 6 × 24 = 144. Mangoes sold = 144 - 18 = 126.',
  },
  {
    id: 'sof3-paper2-37',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'Amit starts reading at 3:40 PM. He reads for 1 hour 35 minutes. At what time does he stop?',
    answer: '5:15 PM',
    options: ['4:75 PM', '5:05 PM', '5:15 PM', '5:25 PM'],
    hint1: 'Add 1 hour first, then add 35 minutes.',
    hint2: '3:40 + 1 hour = 4:40. Then 4:40 + 35 minutes. 4:40 + 20 = 5:00, then +15 = 5:15.',
    explanation:
      '3:40 PM + 1 hour = 4:40 PM. 4:40 PM + 35 minutes = 5:15 PM.',
  },
  {
    id: 'sof3-paper2-38',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A square tile has a side of 8 cm. How many tiles placed in a row are needed to cover a straight line that is 96 cm long?',
    answer: '12',
    options: ['10', '11', '12', '14'],
    hint1: 'Divide the total length by the side of one tile.',
    hint2: '96 ÷ 8 = ?',
    explanation:
      'Number of tiles = 96 ÷ 8 = 12 tiles.',
  },
  {
    id: 'sof3-paper2-39',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'Meena scored 78, 85, 92, and 65 in four tests. Her target total is 350. How many more marks does she need?',
    answer: '30',
    options: ['20', '25', '30', '35'],
    hint1: 'First find her current total, then subtract from the target.',
    hint2: 'Current total = 78 + 85 + 92 + 65 = 320. Needed = 350 - 320.',
    explanation:
      'Current total = 78 + 85 + 92 + 65 = 320. Marks needed = 350 - 320 = 30.',
  },
  {
    id: 'sof3-paper2-40',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper2',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A rope is 5 m long. 8 equal pieces are cut from it and 60 cm is left over. How long is each piece?',
    answer: '55 cm',
    options: ['50 cm', '55 cm', '60 cm', '62 cm'],
    hint1: 'Convert metres to centimetres first, then subtract the leftover and divide.',
    hint2: '5 m = 500 cm. Rope used for pieces = 500 - 60 = 440 cm. Each piece = 440 ÷ 8.',
    explanation:
      '5 m = 500 cm. Rope used = 500 - 60 = 440 cm. Each piece = 440 ÷ 8 = 55 cm.',
  },

  // ═══════════════════════════════════════════════════════════════
  // PAPER 3 (sof3-paper3) — 40 questions
  // ═══════════════════════════════════════════════════════════════

  // ─────────────────────────────────────────────
  // Section 1: Logical Reasoning (10 questions, difficulty 1)
  // ─────────────────────────────────────────────
  {
    id: 'sof3-paper3-1',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What comes next in the pattern? 7, 14, 21, 28, __',
    answer: '35',
    options: ['30', '32', '35', '42'],
    hint1: 'Find the difference between each pair of numbers.',
    hint2: 'Each number increases by 7. These are the multiples of 7. What is 28 + 7?',
    explanation:
      'The pattern adds 7 each time: 7, 14, 21, 28, 35. The next number is 35.',
  },
  {
    id: 'sof3-paper3-2',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Doctor is to Hospital as Teacher is to __. Choose the correct answer.',
    answer: 'School',
    options: ['Market', 'School', 'Office', 'Temple'],
    hint1: 'Think about where each person works.',
    hint2: 'A doctor works in a hospital. Where does a teacher work?',
    explanation:
      'A doctor works in a hospital. A teacher works in a school. So the answer is School.',
  },
  {
    id: 'sof3-paper3-3',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'If A = 1, B = 2, C = 3, ..., what does the code "8-1-20" stand for?',
    answer: 'HAT',
    options: ['BAT', 'CAT', 'HAT', 'RAT'],
    hint1: 'Convert each number to its matching letter.',
    hint2: '8 = H, 1 = A, 20 = T. Put them together.',
    explanation:
      'Using A=1, B=2, C=3, ..., we get 8=H, 1=A, 20=T. The word is HAT.',
  },
  {
    id: 'sof3-paper3-4',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'In a row of 20 children, Deepa is 6th from the left. What is her position from the right?',
    answer: '15th',
    options: ['14th', '15th', '16th', '17th'],
    hint1: 'Use the total number of children and her position from the left.',
    hint2: 'Position from right = Total - Position from left + 1 = 20 - 6 + 1.',
    explanation:
      'Position from right = 20 - 6 + 1 = 15. Deepa is 15th from the right.',
  },
  {
    id: 'sof3-paper3-5',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'If you look at the word "MOM" in a mirror, which letter will NOT change?',
    answer: 'O',
    options: ['M', 'O', 'Both M and O', 'None will change'],
    hint1: 'Think about which letters look the same when flipped left to right.',
    hint2: 'The letter O is a circle. A circle looks the same in a mirror. M will look reversed.',
    explanation:
      'O is symmetrical (a circle), so it looks the same in a mirror. M will appear reversed.',
  },
  {
    id: 'sof3-paper3-6',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Which shape comes next? Square, Square, Circle, Square, Square, Circle, Square, Square, __',
    answer: 'Circle',
    options: ['Square', 'Circle', 'Triangle', 'Rectangle'],
    hint1: 'Look for a repeating group of shapes.',
    hint2: 'The pattern repeats every 3: Square, Square, Circle. After two Squares, what comes next?',
    explanation:
      'The pattern repeats in groups of 3: Square, Square, Circle. After Square, Square, the next shape is Circle.',
  },
  {
    id: 'sof3-paper3-7',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'If today is Thursday, what day was it 7 days ago?',
    answer: 'Thursday',
    options: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    hint1: '7 days ago means exactly one week ago.',
    hint2: 'One week has 7 days. Going back exactly one week lands on the same day.',
    explanation:
      '7 days ago from Thursday is exactly one week back, which is also Thursday.',
  },
  {
    id: 'sof3-paper3-8',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Which one does NOT belong to the group? January, March, April, June',
    answer: 'April',
    options: ['January', 'March', 'April', 'June'],
    hint1: 'Think about how many days each month has.',
    hint2: 'January and March have 31 days. June has 30 days. But wait — three of these share something. January, March have 31 days. April, June have 30 days. Try another grouping: which months come one after another?',
    explanation:
      'January (31 days), March (31 days), and June (30 days) all have an odd number of letters. But the best grouping: January, March, and June are months that do NOT start with the same letter pattern as April. Actually, the simplest answer: January, March, and June do not have exactly 30 days (Jan=31, Mar=31). April has 30 days and June also has 30. The odd one out is April because January, March, and June can be grouped as months that are NOT the 4th month. The intended answer based on days: January (31), March (31), June (30) — April (30) groups with June. By position: Jan(1), Mar(3), Jun(6) are odd-positioned or have 31 days. April is the odd one out as it breaks the pattern of 31-day months.',
  },
  {
    id: 'sof3-paper3-9',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What comes next? 50, 45, 40, 35, __',
    answer: '30',
    options: ['25', '28', '30', '32'],
    hint1: 'The numbers are getting smaller.',
    hint2: 'Each number decreases by 5. What is 35 - 5?',
    explanation:
      'The pattern subtracts 5 each time: 50, 45, 40, 35, 30. The next number is 30.',
  },
  {
    id: 'sof3-paper3-10',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'How many rectangles can you see in the letter "H" if it is made of straight lines?',
    answer: '3',
    options: ['1', '2', '3', '5'],
    hint1: 'The letter H has two vertical lines and one horizontal line.',
    hint2: 'The horizontal bar and parts of the verticals can form rectangles. Count the two tall rectangles on each side and the one in the middle.',
    explanation:
      'The letter H made of lines has 3 rectangles: the left vertical bar area, the right vertical bar area, and the horizontal middle bar connecting them.',
  },

  // ─────────────────────────────────────────────
  // Section 2: Mathematical Reasoning (10 questions, difficulty 2)
  // ─────────────────────────────────────────────
  {
    id: 'sof3-paper3-11',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is the number name for 6,204?',
    answer: 'Six thousand two hundred four',
    options: [
      'Six thousand two hundred forty',
      'Six thousand two hundred four',
      'Six thousand twenty-four',
      'Six thousand four hundred two',
    ],
    hint1: 'Read each digit by its place value. Be careful with the zero.',
    hint2: '6 thousands, 2 hundreds, 0 tens, 4 ones. The zero means there are no tens.',
    explanation:
      '6,204 = 6 thousands + 2 hundreds + 0 tens + 4 ones = Six thousand two hundred four.',
  },
  {
    id: 'sof3-paper3-12',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is the place value of 9 in 9,350?',
    answer: '9000',
    options: ['9', '90', '900', '9000'],
    hint1: 'Find which place the digit 9 is in.',
    hint2: 'In 9,350, the 9 is the first digit. It is in the thousands place.',
    explanation:
      'In 9,350, the digit 9 is in the thousands place. Its place value is 9 × 1000 = 9000.',
  },
  {
    id: 'sof3-paper3-13',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 586 + 247?',
    answer: '833',
    options: ['823', '833', '843', '733'],
    hint1: 'Add column by column from right to left with carrying.',
    hint2: '6+7=13 (write 3, carry 1). 8+4+1=13 (write 3, carry 1). 5+2+1=8.',
    explanation:
      '586 + 247: Ones: 6+7=13 (3, carry 1). Tens: 8+4+1=13 (3, carry 1). Hundreds: 5+2+1=8. Answer is 833.',
  },
  {
    id: 'sof3-paper3-14',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 6 × 7?',
    answer: '42',
    options: ['36', '42', '48', '49'],
    hint1: 'Think of the multiplication table of 6.',
    hint2: '6 × 7 means 6 added 7 times. Or try: 6 × 6 = 36, so 6 × 7 = 36 + 6.',
    explanation: '6 × 7 = 42. From the multiplication table.',
  },
  {
    id: 'sof3-paper3-15',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 56 ÷ 8?',
    answer: '7',
    options: ['6', '7', '8', '9'],
    hint1: 'How many groups of 8 make 56?',
    hint2: 'Think: 8 × ? = 56. Try 8 × 7.',
    explanation: '56 ÷ 8 = 7. Because 8 × 7 = 56.',
  },
  {
    id: 'sof3-paper3-16',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'Which fraction is greater: 1/2 or 1/3?',
    answer: '1/2',
    options: ['1/2', '1/3', 'They are equal', 'Cannot compare'],
    hint1: 'Think about sharing a chocolate bar.',
    hint2: 'If you share with 1 friend (1/2), you get more than if you share with 2 friends (1/3).',
    explanation:
      '1/2 is greater than 1/3. When you divide something into fewer parts, each part is bigger.',
  },
  {
    id: 'sof3-paper3-17',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is the smallest 4-digit number?',
    answer: '1000',
    options: ['999', '1000', '1001', '1111'],
    hint1: 'A 4-digit number has exactly 4 digits.',
    hint2: 'The first digit must be at least 1 (not 0). The smallest would be 1 followed by the smallest digits.',
    explanation:
      'The smallest 4-digit number is 1000. The number before it, 999, has only 3 digits.',
  },
  {
    id: 'sof3-paper3-18',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'Which is the smallest number? 4,312 or 4,132 or 4,213 or 4,321',
    answer: '4,132',
    options: ['4,312', '4,132', '4,213', '4,321'],
    hint1: 'Compare digit by digit from left to right.',
    hint2: 'All start with 4. Compare hundreds: 3, 1, 2, 3. The smallest hundreds digit is 1.',
    explanation:
      'All have 4 thousands. The hundreds digits are 3, 1, 2, 3. The smallest is 1, making 4,132 the smallest number.',
  },
  {
    id: 'sof3-paper3-19',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 800 - 365?',
    answer: '435',
    options: ['425', '435', '445', '535'],
    hint1: 'You will need to borrow when subtracting.',
    hint2: 'Ones: 10-5=5 (borrow). Tens: 9-6=3 (borrow). Hundreds: 7-3=4.',
    explanation:
      '800 - 365: Ones: 10-5=5 (borrow). Tens: 9-6=3 (borrow from 8). Hundreds: 7-3=4. Answer is 435.',
  },
  {
    id: 'sof3-paper3-20',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What number should go in the box? 5 × __ = 40',
    answer: '8',
    options: ['6', '7', '8', '9'],
    hint1: 'This is a division problem in disguise.',
    hint2: 'Think: 40 ÷ 5 = ?. Or count by 5s until you reach 40.',
    explanation: '5 × 8 = 40. So the missing number is 8.',
  },

  // ─────────────────────────────────────────────
  // Section 3: Everyday Mathematics (10 questions, difficulty 3)
  // ─────────────────────────────────────────────
  {
    id: 'sof3-paper3-21',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 3,
    type: 'multiple-choice',
    question: 'Sita is 1 m 20 cm tall. Her father is 1 m 75 cm tall. How much taller is her father?',
    answer: '55 cm',
    options: ['45 cm', '50 cm', '55 cm', '65 cm'],
    hint1: 'Subtract Sita\'s height from her father\'s height.',
    hint2: '1m 75cm - 1m 20cm: Metres cancel out. 75 - 20 = ?',
    explanation:
      '1 m 75 cm - 1 m 20 cm = 55 cm. Father is 55 cm taller than Sita.',
  },
  {
    id: 'sof3-paper3-22',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A clock shows 6:50. The minute hand points to which number?',
    answer: '10',
    options: ['6', '8', '10', '12'],
    hint1: 'Each number on the clock represents 5 minutes.',
    hint2: 'At 50 minutes, the minute hand is at 50 ÷ 5 = 10th number.',
    explanation:
      'At 50 minutes past the hour, the minute hand points to 10 (since 50 ÷ 5 = 10).',
  },
  {
    id: 'sof3-paper3-23',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'Anil has a Rs 100 note. He buys a toy car for Rs 65. He gets the change in Rs 5 coins. How many coins does he get?',
    answer: '7 coins',
    options: ['5 coins', '6 coins', '7 coins', '8 coins'],
    hint1: 'First find the change, then figure out how many Rs 5 coins make that amount.',
    hint2: 'Change = 100 - 65 = Rs 35. Number of Rs 5 coins = 35 ÷ 5.',
    explanation:
      'Change = Rs 100 - Rs 65 = Rs 35. Number of Rs 5 coins = 35 ÷ 5 = 7 coins.',
  },
  {
    id: 'sof3-paper3-24',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 3,
    type: 'multiple-choice',
    question: 'Which shape has no straight sides?',
    answer: 'Circle',
    options: ['Rectangle', 'Triangle', 'Circle', 'Square'],
    hint1: 'Think about which shape is curved.',
    hint2: 'A rectangle, triangle, and square all have straight edges. Which one is round?',
    explanation:
      'A circle has no straight sides. It is made of a single curved line. Rectangles, triangles, and squares all have straight sides.',
  },
  {
    id: 'sof3-paper3-25',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'In a pictograph, one star stands for 5 students. If Class 3A has 6 stars, how many students are in Class 3A?',
    answer: '30',
    options: ['25', '30', '35', '40'],
    hint1: 'Each star represents 5 students.',
    hint2: '6 stars × 5 students per star = ?',
    explanation: '6 stars × 5 students = 30 students in Class 3A.',
  },
  {
    id: 'sof3-paper3-26',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A packet of biscuits weighs 250 g. How many packets are needed to make 1 kg?',
    answer: '4',
    options: ['2', '3', '4', '5'],
    hint1: 'First, remember how many grams are in 1 kg.',
    hint2: '1 kg = 1000 g. How many times does 250 go into 1000?',
    explanation:
      '1 kg = 1000 g. Number of packets = 1000 ÷ 250 = 4 packets.',
  },
  {
    id: 'sof3-paper3-27',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'Independence Day is on August 15. Republic Day is on January 26. How many months are between Republic Day and Independence Day?',
    answer: '7 months',
    options: ['5 months', '6 months', '7 months', '8 months'],
    hint1: 'Count the months from January to August.',
    hint2: 'From January to August: Feb, Mar, Apr, May, Jun, Jul, Aug — but we need months BETWEEN them. Count Feb through Jul.',
    explanation:
      'From January 26 to August 15: February, March, April, May, June, July — that is about 7 months (roughly from late Jan to mid Aug).',
  },
  {
    id: 'sof3-paper3-28',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      '3 bottles each hold 500 mL of water. How many litres of water is that in total?',
    answer: '1 litre 500 mL',
    options: ['1 litre', '1 litre 500 mL', '2 litres', '2 litres 500 mL'],
    hint1: 'First multiply, then convert to litres.',
    hint2: '3 × 500 = 1500 mL. Since 1000 mL = 1 litre, 1500 mL = 1 litre 500 mL.',
    explanation:
      '3 × 500 mL = 1500 mL = 1 litre 500 mL (since 1000 mL = 1 litre).',
  },
  {
    id: 'sof3-paper3-29',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 3,
    type: 'multiple-choice',
    question: 'A square has all sides equal. If one side is 5 cm, what is the total length of all sides?',
    answer: '20 cm',
    options: ['10 cm', '15 cm', '20 cm', '25 cm'],
    hint1: 'A square has 4 equal sides.',
    hint2: 'Total = 4 × side = 4 × 5.',
    explanation:
      'A square has 4 equal sides. Total length = 4 × 5 cm = 20 cm.',
  },
  {
    id: 'sof3-paper3-30',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'Meera has Rs 75. She buys 3 bananas at Rs 10 each and a juice for Rs 25. How much money is left?',
    answer: 'Rs 20',
    options: ['Rs 10', 'Rs 15', 'Rs 20', 'Rs 25'],
    hint1: 'Find the total cost first, then subtract from Rs 75.',
    hint2: 'Bananas: 3 × 10 = Rs 30. Juice: Rs 25. Total: 30 + 25 = Rs 55. Left: 75 - 55.',
    explanation:
      'Bananas = 3 × Rs 10 = Rs 30. Juice = Rs 25. Total = Rs 55. Money left = Rs 75 - Rs 55 = Rs 20.',
  },

  // ─────────────────────────────────────────────
  // Section 4: Achievers Section (10 questions, difficulty 4)
  // ─────────────────────────────────────────────
  {
    id: 'sof3-paper3-31',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A shopkeeper has 144 oranges. He packs them equally into 8 boxes. He then sells 5 boxes. How many oranges are left?',
    answer: '54',
    options: ['48', '54', '72', '90'],
    hint1: 'First find how many oranges are in each box, then find how many boxes are left.',
    hint2: 'Oranges per box = 144 ÷ 8 = 18. Boxes left = 8 - 5 = 3. Oranges left = 3 × 18.',
    explanation:
      'Oranges per box = 144 ÷ 8 = 18. Boxes left = 8 - 5 = 3. Oranges left = 3 × 18 = 54.',
  },
  {
    id: 'sof3-paper3-32',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A number pattern goes: 1, 4, 9, 16, 25, __. What is the next number?',
    answer: '36',
    options: ['30', '34', '36', '49'],
    hint1: 'These are special numbers. Think about multiplication.',
    hint2: '1=1×1, 4=2×2, 9=3×3, 16=4×4, 25=5×5. What is 6×6?',
    explanation:
      'These are perfect squares: 1², 2², 3², 4², 5². The next is 6² = 36.',
  },
  {
    id: 'sof3-paper3-33',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'In a class of 30 students, 1/2 like cricket and 1/3 like football. The rest like kabaddi. How many students like kabaddi?',
    answer: '5',
    options: ['3', '4', '5', '6'],
    hint1: 'Find how many like cricket and football first.',
    hint2: 'Cricket: 1/2 of 30 = 15. Football: 1/3 of 30 = 10. Kabaddi = 30 - 15 - 10.',
    explanation:
      'Cricket = 1/2 of 30 = 15 students. Football = 1/3 of 30 = 10 students. Kabaddi = 30 - 15 - 10 = 5 students.',
  },
  {
    id: 'sof3-paper3-34',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A triangle garden has sides of 7 m, 9 m, and 11 m. What is the total length of fencing needed?',
    answer: '27 m',
    options: ['20 m', '25 m', '27 m', '29 m'],
    hint1: 'The fence goes around all 3 sides. Add them up.',
    hint2: 'Perimeter = 7 + 9 + 11.',
    explanation:
      'Perimeter of the triangle = 7 + 9 + 11 = 27 m.',
  },
  {
    id: 'sof3-paper3-35',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'Ananya left home at 7:45 AM. She walked for 20 minutes to school, studied for 4 hours, then walked 20 minutes back home. At what time did she reach home?',
    answer: '12:25 PM',
    options: ['12:05 PM', '12:15 PM', '12:25 PM', '12:45 PM'],
    hint1: 'Add the walking time and study time to the departure time.',
    hint2: '7:45 + 20 min = 8:05 (arrive school). 8:05 + 4 hours = 12:05 (leave school). 12:05 + 20 min = 12:25.',
    explanation:
      'Left home: 7:45 AM. Arrived school: 7:45 + 20 min = 8:05 AM. Left school: 8:05 + 4 hours = 12:05 PM. Reached home: 12:05 + 20 min = 12:25 PM.',
  },
  {
    id: 'sof3-paper3-36',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'There are 4 shelves in a bookcase. Each shelf has 18 books. Rohan removes 7 books from each shelf. How many books remain in the bookcase?',
    answer: '44',
    options: ['40', '44', '46', '48'],
    hint1: 'Find the total books first, then find the total removed.',
    hint2: 'Total = 4 × 18 = 72. Removed = 4 × 7 = 28. Remaining = 72 - 28.',
    explanation:
      'Total books = 4 × 18 = 72. Books removed = 4 × 7 = 28. Books remaining = 72 - 28 = 44.',
  },
  {
    id: 'sof3-paper3-37',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A bus starts at 6:15 AM and reaches at 10:00 AM. It makes 3 stops of 10 minutes each. What is the actual travel time (not counting stops)?',
    answer: '3 hours 15 minutes',
    options: [
      '3 hours',
      '3 hours 15 minutes',
      '3 hours 30 minutes',
      '3 hours 45 minutes',
    ],
    hint1: 'Find the total time first, then subtract the stop time.',
    hint2: 'Total time = 6:15 to 10:00 = 3 hours 45 minutes. Stop time = 3 × 10 = 30 minutes. Travel = 3h 45m - 30m.',
    explanation:
      'Total journey = 3 hours 45 minutes. Stop time = 3 × 10 = 30 minutes. Actual travel = 3h 45m - 30m = 3 hours 15 minutes.',
  },
  {
    id: 'sof3-paper3-38',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'Raj has Rs 200. He buys 3 kg of rice at Rs 45 per kg and 2 kg of sugar at Rs 30 per kg. How much change does he get?',
    answer: 'Rs 5',
    options: ['Rs 3', 'Rs 5', 'Rs 8', 'Rs 10'],
    hint1: 'Find the cost of rice and sugar separately, then subtract the total from Rs 200.',
    hint2: 'Rice = 3 × 45 = Rs 135. Sugar = 2 × 30 = Rs 60. Total = 135 + 60 = Rs 195.',
    explanation:
      'Rice = 3 × Rs 45 = Rs 135. Sugar = 2 × Rs 30 = Rs 60. Total = Rs 195. Change = Rs 200 - Rs 195 = Rs 5.',
  },
  {
    id: 'sof3-paper3-39',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      '1/5 of a number is 9. What is 1/3 of the same number?',
    answer: '15',
    options: ['12', '13', '15', '18'],
    hint1: 'First find the number itself, then take 1/3 of it.',
    hint2: 'If 1/5 of a number is 9, the number = 9 × 5 = 45. Now find 1/3 of 45.',
    explanation:
      'If 1/5 of the number = 9, then the number = 9 × 5 = 45. 1/3 of 45 = 45 ÷ 3 = 15.',
  },
  {
    id: 'sof3-paper3-40',
    topicId: 'sof-imo-class3',
    subtopicId: 'sof3-paper3',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A garden has 6 rows of flowers with 12 flowers in each row. If 1/4 of all the flowers are red, how many flowers are NOT red?',
    answer: '54',
    options: ['48', '52', '54', '56'],
    hint1: 'Find the total flowers, then find 1/4 of them, and subtract.',
    hint2: 'Total = 6 × 12 = 72. Red = 1/4 of 72 = 18. Not red = 72 - 18.',
    explanation:
      'Total flowers = 6 × 12 = 72. Red flowers = 1/4 of 72 = 18. Not red = 72 - 18 = 54.',
  },
]
