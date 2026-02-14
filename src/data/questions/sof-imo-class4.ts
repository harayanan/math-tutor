import { Question } from '../types'

export const questions: Question[] = [
  // ═══════════════════════════════════════════════════════
  // PAPER 1 — SOF IMO Class 4 Sample Paper 1 (40 questions)
  // ═══════════════════════════════════════════════════════

  // ─────────────────────────────────────────────
  // Section 1: Logical Reasoning (10 questions, difficulty 1)
  // ─────────────────────────────────────────────

  {
    id: 'sof4-paper1-1',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What is the next number in the pattern? 3, 6, 12, 24, __',
    answer: '48',
    options: ['36', '48', '30', '42'],
    hint1: 'Look at how each number relates to the one before it.',
    hint2: 'Each number is doubled (multiplied by 2). What is 24 × 2?',
    explanation:
      'Each number is multiplied by 2: 3 × 2 = 6, 6 × 2 = 12, 12 × 2 = 24, 24 × 2 = 48.',
  },
  {
    id: 'sof4-paper1-2',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'If APPLE is coded as BQQMF, how is MANGO coded?',
    answer: 'NBOHP',
    options: ['NBOHP', 'NBOGH', 'MBNGO', 'LZMFN'],
    hint1: 'Compare each letter of APPLE to the coded word BQQMF.',
    hint2: 'Each letter is replaced by the next letter in the alphabet. A→B, P→Q, L→M, E→F. Apply the same rule to MANGO.',
    explanation:
      'Each letter shifts forward by 1: M→N, A→B, N→O, G→H, O→P. So MANGO becomes NBOHP.',
  },
  {
    id: 'sof4-paper1-3',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Which number does NOT belong in the group? 8, 15, 22, 29, 34, 36',
    answer: '34',
    options: ['15', '29', '34', '36'],
    hint1: 'Find the pattern that most of the numbers follow.',
    hint2: 'Starting from 8, the numbers increase by 7 each time: 8, 15, 22, 29, 36. Which number breaks this pattern?',
    explanation:
      'The pattern is +7: 8, 15, 22, 29, 36. The number 34 does not fit because 29 + 7 = 36, not 34.',
  },
  {
    id: 'sof4-paper1-4',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'In a row of children, Priya is 8th from the left and 12th from the right. How many children are in the row?',
    answer: '19',
    options: ['18', '19', '20', '21'],
    hint1: 'Priya is counted in both positions — from the left and from the right.',
    hint2: 'Total = position from left + position from right − 1 (so Priya is not counted twice).',
    explanation:
      'Total children = 8 + 12 − 1 = 19. We subtract 1 because Priya is counted in both positions.',
  },
  {
    id: 'sof4-paper1-5',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Which shape has exactly 4 equal sides and 4 right angles?',
    answer: 'Square',
    options: ['Rectangle', 'Rhombus', 'Square', 'Parallelogram'],
    hint1: 'Think about which shapes have all sides equal.',
    hint2: 'A rhombus has 4 equal sides but not always right angles. Which shape has BOTH?',
    explanation:
      'A square has 4 equal sides and 4 right angles (90° each). A rectangle has right angles but sides are not all equal. A rhombus has equal sides but angles may not be 90°.',
  },
  {
    id: 'sof4-paper1-6',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Look at the pattern: 5, 10, 9, 14, 13, 18, 17, __. What comes next?',
    answer: '22',
    options: ['16', '21', '22', '23'],
    hint1: 'The pattern alternates between two operations.',
    hint2: 'The pattern alternates: +5, −1, +5, −1, +5, −1, +5. So after 17, add 5.',
    explanation:
      'The pattern is +5, −1 repeating: 5+5=10, 10−1=9, 9+5=14, 14−1=13, 13+5=18, 18−1=17, 17+5=22.',
  },
  {
    id: 'sof4-paper1-7',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'If the day before yesterday was Wednesday, what day will it be the day after tomorrow?',
    answer: 'Sunday',
    options: ['Saturday', 'Sunday', 'Monday', 'Friday'],
    hint1: 'First figure out what day it is today.',
    hint2: 'If the day before yesterday was Wednesday, then yesterday was Thursday and today is Friday. Tomorrow is Saturday, and the day after tomorrow is Sunday.',
    explanation:
      'Day before yesterday = Wednesday → Yesterday = Thursday → Today = Friday → Tomorrow = Saturday → Day after tomorrow = Sunday.',
  },
  {
    id: 'sof4-paper1-8',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'How many triangles can you count in a rectangle that has both diagonals drawn?',
    answer: '8',
    options: ['4', '6', '8', '10'],
    hint1: 'Draw a rectangle and its two diagonals. Look for small triangles first, then larger ones.',
    hint2: 'The diagonals create 4 small triangles. Then each pair of adjacent small triangles forms a larger triangle — that gives 4 more.',
    explanation:
      'A rectangle with both diagonals has 4 small triangles (formed at the center) and 4 larger triangles (each made of 2 small triangles). Total = 4 + 4 = 8.',
  },
  {
    id: 'sof4-paper1-9',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Arjun has 3 shirts (red, blue, green) and 2 pants (black, brown). How many different outfits can he make?',
    answer: '6',
    options: ['5', '6', '7', '8'],
    hint1: 'For each shirt, think about how many pants he can pair it with.',
    hint2: 'Each of the 3 shirts can be paired with each of the 2 pants. Multiply: 3 × 2.',
    explanation:
      'Number of outfits = 3 shirts × 2 pants = 6. The combinations are: red-black, red-brown, blue-black, blue-brown, green-black, green-brown.',
  },
  {
    id: 'sof4-paper1-10',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'When a clock shows 3:15, what is the mirror image time?',
    answer: '8:45',
    options: ['9:45', '8:45', '9:15', '8:15'],
    hint1: 'In a mirror, left and right are swapped. Think about where the hands would point in the reflection.',
    hint2: 'To find the mirror time, subtract the time from 12:00. The mirror image of 3:15 is 12:00 − 3:15 = 8:45.',
    explanation:
      'Mirror image time = 12:00 − original time. 12:00 − 3:15 = 8:45. In the mirror, the clock would appear to show 8:45.',
  },

  // ─────────────────────────────────────────────
  // Section 2: Mathematical Reasoning (10 questions, difficulty 2)
  // ─────────────────────────────────────────────

  {
    id: 'sof4-paper1-11',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 2,
    type: 'multiple-choice',
    question:
      'What is the place value of 6 in 56,342?',
    answer: '6,000',
    options: ['6', '60', '600', '6,000'],
    hint1: 'Identify which place the digit 6 occupies in the number.',
    hint2: 'Starting from the right: 2 is in ones, 4 in tens, 3 in hundreds, 6 in thousands. Place value = 6 × 1,000.',
    explanation:
      'In 56,342, the digit 6 is in the thousands place. Its place value is 6 × 1,000 = 6,000.',
  },
  {
    id: 'sof4-paper1-12',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 4,578 + 3,697?',
    answer: '8,275',
    options: ['8,175', '8,265', '8,275', '8,375'],
    hint1: 'Add the numbers column by column starting from the ones place.',
    hint2: '8 + 7 = 15, carry 1. 7 + 9 + 1 = 17, carry 1. 5 + 6 + 1 = 12, carry 1. 4 + 3 + 1 = 8.',
    explanation:
      '4,578 + 3,697: Ones: 8+7=15 (write 5, carry 1). Tens: 7+9+1=17 (write 7, carry 1). Hundreds: 5+6+1=12 (write 2, carry 1). Thousands: 4+3+1=8. Answer = 8,275.',
  },
  {
    id: 'sof4-paper1-13',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 7,003 − 4,568?',
    answer: '2,435',
    options: ['2,435', '2,445', '2,535', '3,435'],
    hint1: 'You will need to borrow across several columns since 7,003 has zeros.',
    hint2: 'Borrow from the thousands: 7,003 becomes 6,9,9,13 when you borrow down. Now subtract: 13−8=5, 9−6=3, 9−5=4, 6−4=2.',
    explanation:
      '7,003 − 4,568: Borrow from thousands across the zeros. Ones: 13−8=5, Tens: 9−6=3, Hundreds: 9−5=4, Thousands: 6−4=2. Answer = 2,435.',
  },
  {
    id: 'sof4-paper1-14',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'Which fraction is equivalent to 3/4?',
    answer: '9/12',
    options: ['6/12', '8/12', '9/12', '10/12'],
    hint1: 'Multiply both the numerator and denominator by the same number.',
    hint2: 'Multiply both parts of 3/4 by 3: (3×3)/(4×3) = 9/12.',
    explanation:
      '3/4 = 9/12 because 3 × 3 = 9 and 4 × 3 = 12. You can verify: 9 ÷ 3 = 3 and 12 ÷ 3 = 4.',
  },
  {
    id: 'sof4-paper1-15',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is the Roman numeral for 49?',
    answer: 'XLIX',
    options: ['XXXXIX', 'IL', 'XLIX', 'XLXI'],
    hint1: 'Break 49 into tens and ones. How do you write 40 and 9 in Roman numerals?',
    hint2: '40 = XL (10 before 50) and 9 = IX (1 before 10). Put them together.',
    explanation:
      '49 = 40 + 9. In Roman numerals, 40 = XL and 9 = IX. So 49 = XLIX.',
  },
  {
    id: 'sof4-paper1-16',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 236 × 14?',
    answer: '3,304',
    options: ['3,204', '3,304', '3,404', '3,294'],
    hint1: 'Break 14 into 10 + 4 and multiply separately.',
    hint2: '236 × 10 = 2,360. 236 × 4 = 944. Add them: 2,360 + 944.',
    explanation:
      '236 × 14 = 236 × 10 + 236 × 4 = 2,360 + 944 = 3,304.',
  },
  {
    id: 'sof4-paper1-17',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'Which is the largest 5-digit number using the digits 3, 7, 1, 9, 5 (each used once)?',
    answer: '97,531',
    options: ['97,531', '97,513', '95,731', '79,531'],
    hint1: 'To make the largest number, which digit should come first?',
    hint2: 'Arrange the digits in descending order (largest to smallest): 9, 7, 5, 3, 1.',
    explanation:
      'To form the largest number, arrange all digits in descending order: 9 > 7 > 5 > 3 > 1, giving 97,531.',
  },
  {
    id: 'sof4-paper1-18',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'Which fraction is greater: 3/5 or 2/3?',
    answer: '2/3',
    options: ['3/5', '2/3', 'They are equal', 'Cannot compare'],
    hint1: 'To compare fractions with different denominators, find a common denominator.',
    hint2: 'Common denominator of 5 and 3 is 15. 3/5 = 9/15 and 2/3 = 10/15. Compare 9 and 10.',
    explanation:
      'Convert to common denominator 15: 3/5 = 9/15 and 2/3 = 10/15. Since 10/15 > 9/15, we have 2/3 > 3/5.',
  },
  {
    id: 'sof4-paper1-19',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What are all the factors of 36?',
    answer: '1, 2, 3, 4, 6, 9, 12, 18, 36',
    options: [
      '1, 2, 3, 4, 6, 9, 12, 18, 36',
      '1, 2, 3, 6, 9, 12, 36',
      '1, 2, 4, 6, 9, 18, 36',
      '2, 3, 4, 6, 9, 12, 18',
    ],
    hint1: 'Factors are numbers that divide 36 evenly. Start checking from 1.',
    hint2: 'Check each number: 36÷1=36, 36÷2=18, 36÷3=12, 36÷4=9, 36÷6=6. List all pairs.',
    explanation:
      'Factors of 36: 1×36, 2×18, 3×12, 4×9, 6×6. So the factors are 1, 2, 3, 4, 6, 9, 12, 18, 36.',
  },
  {
    id: 'sof4-paper1-20',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 8,456 ÷ 8?',
    answer: '1,057',
    options: ['1,047', '1,052', '1,057', '1,067'],
    hint1: 'Divide step by step: how many times does 8 go into 8, then into 4, and so on.',
    hint2: '8÷8=1, bring down 4. 4÷8=0 remainder 4, bring down 5. 45÷8=5 remainder 5, bring down 6. 56÷8=7.',
    explanation:
      '8,456 ÷ 8: 8÷8=1. 4÷8=0 R4. 45÷8=5 R5. 56÷8=7. Answer = 1,057.',
  },

  // ─────────────────────────────────────────────
  // Section 3: Everyday Mathematics (10 questions, difficulty 3)
  // ─────────────────────────────────────────────

  {
    id: 'sof4-paper1-21',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A rope is 3 km 450 m long. Another rope is 1 km 780 m long. What is the total length in metres?',
    answer: '5,230 m',
    options: ['5,130 m', '5,230 m', '5,330 m', '4,230 m'],
    hint1: 'First convert both lengths to metres. 1 km = 1,000 m.',
    hint2: '3 km 450 m = 3,450 m. 1 km 780 m = 1,780 m. Now add them.',
    explanation:
      '3 km 450 m = 3,450 m. 1 km 780 m = 1,780 m. Total = 3,450 + 1,780 = 5,230 m.',
  },
  {
    id: 'sof4-paper1-22',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A movie starts at 2:45 PM and lasts 1 hour 50 minutes. At what time does it end?',
    answer: '4:35 PM',
    options: ['4:25 PM', '4:30 PM', '4:35 PM', '4:45 PM'],
    hint1: 'Add the hours first, then the minutes to the start time.',
    hint2: '2:45 + 1 hour = 3:45. Then add 50 minutes: 3:45 + 50 min = 4:35 PM.',
    explanation:
      '2:45 PM + 1 hour = 3:45 PM. 3:45 PM + 50 minutes = 4:35 PM (45 + 50 = 95 minutes = 1 hour 35 minutes, so 3:45 + 0:50 = 4:35).',
  },
  {
    id: 'sof4-paper1-23',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'Meera buys a notebook for Rs 45, a pen for Rs 18, and an eraser for Rs 7. She pays with a Rs 100 note. How much change does she get?',
    answer: 'Rs 30',
    options: ['Rs 25', 'Rs 28', 'Rs 30', 'Rs 32'],
    hint1: 'First find the total cost of all items.',
    hint2: 'Total = 45 + 18 + 7 = 70. Change = 100 − 70.',
    explanation:
      'Total cost = Rs 45 + Rs 18 + Rs 7 = Rs 70. Change = Rs 100 − Rs 70 = Rs 30.',
  },
  {
    id: 'sof4-paper1-24',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'What is the perimeter of a rectangle with length 12 cm and breadth 7 cm?',
    answer: '38 cm',
    options: ['34 cm', '36 cm', '38 cm', '40 cm'],
    hint1: 'Perimeter means the total distance around the shape.',
    hint2: 'Perimeter of rectangle = 2 × (length + breadth) = 2 × (12 + 7).',
    explanation:
      'Perimeter = 2 × (length + breadth) = 2 × (12 + 7) = 2 × 19 = 38 cm.',
  },
  {
    id: 'sof4-paper1-25',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A water tank holds 5 L 300 mL. If 2 L 750 mL is used, how much water remains?',
    answer: '2 L 550 mL',
    options: ['2 L 450 mL', '2 L 550 mL', '2 L 650 mL', '3 L 550 mL'],
    hint1: 'Convert both to millilitres or subtract litres and millilitres separately.',
    hint2: '5 L 300 mL − 2 L 750 mL: Since 300 < 750, borrow 1 L. 4 L 1300 mL − 2 L 750 mL.',
    explanation:
      '5 L 300 mL − 2 L 750 mL: Borrow 1 L → 4 L 1,300 mL. 1,300 − 750 = 550 mL. 4 − 2 = 2 L. Answer = 2 L 550 mL.',
  },
  {
    id: 'sof4-paper1-26',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'In a bar graph, the number of books read by four students is: Ankit = 8, Sana = 12, Rohan = 6, Diya = 10. How many more books did Sana read than Rohan?',
    answer: '6',
    options: ['4', '5', '6', '8'],
    hint1: 'Find the values for Sana and Rohan from the data.',
    hint2: 'Sana read 12 books and Rohan read 6 books. Subtract to find the difference.',
    explanation:
      'Sana read 12 books and Rohan read 6 books. Difference = 12 − 6 = 6 more books.',
  },
  {
    id: 'sof4-paper1-27',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'How many lines of symmetry does a square have?',
    answer: '4',
    options: ['1', '2', '3', '4'],
    hint1: 'A line of symmetry divides the shape into two identical halves.',
    hint2: 'Think about folding the square: horizontally, vertically, and along both diagonals.',
    explanation:
      'A square has 4 lines of symmetry: 1 horizontal, 1 vertical, and 2 diagonal.',
  },
  {
    id: 'sof4-paper1-28',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'What is 16:45 in 12-hour clock format?',
    answer: '4:45 PM',
    options: ['4:45 AM', '4:45 PM', '6:45 PM', '4:15 PM'],
    hint1: 'For times from 13:00 onwards, subtract 12 from the hour and add PM.',
    hint2: '16 − 12 = 4. So 16:45 = 4:45 PM.',
    explanation:
      'To convert from 24-hour to 12-hour format: 16 − 12 = 4, so 16:45 = 4:45 PM.',
  },
  {
    id: 'sof4-paper1-29',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A bag of rice weighs 2 kg 350 g. How many grams is that in total?',
    answer: '2,350 g',
    options: ['2,035 g', '2,305 g', '2,350 g', '2,530 g'],
    hint1: 'Remember that 1 kg = 1,000 g.',
    hint2: '2 kg = 2,000 g. Add the extra 350 g.',
    explanation:
      '2 kg 350 g = (2 × 1,000) + 350 = 2,000 + 350 = 2,350 g.',
  },
  {
    id: 'sof4-paper1-30',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'The perimeter of a square garden is 64 m. What is the length of each side?',
    answer: '16 m',
    options: ['12 m', '14 m', '16 m', '18 m'],
    hint1: 'A square has 4 equal sides. How is perimeter related to the side length?',
    hint2: 'Perimeter = 4 × side. So side = perimeter ÷ 4 = 64 ÷ 4.',
    explanation:
      'Perimeter of a square = 4 × side. So side = 64 ÷ 4 = 16 m.',
  },

  // ─────────────────────────────────────────────
  // Section 4: Achievers Section (10 questions, difficulty 4)
  // ─────────────────────────────────────────────

  {
    id: 'sof4-paper1-31',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A rectangular garden is 25 m long and 18 m wide. A path 2 m wide runs along the inside of all four sides. What is the area of the path?',
    answer: '156 sq m',
    options: ['148 sq m', '152 sq m', '156 sq m', '160 sq m'],
    hint1: 'Find the area of the outer rectangle and the inner rectangle (after removing the path width from each side).',
    hint2: 'Outer area = 25 × 18 = 450 sq m. Inner dimensions: (25−4) × (18−4) = 21 × 14 = 294 sq m. Path area = 450 − 294.',
    explanation:
      'Outer area = 25 × 18 = 450 sq m. The inner rectangle is (25−2−2) × (18−2−2) = 21 × 14 = 294 sq m. Path area = 450 − 294 = 156 sq m.',
  },
  {
    id: 'sof4-paper1-32',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'Ravi has Rs 500. He buys 3 pencil boxes at Rs 85 each and 4 erasers at Rs 12 each. How much money does he have left?',
    answer: 'Rs 197',
    options: ['Rs 187', 'Rs 192', 'Rs 197', 'Rs 207'],
    hint1: 'Calculate the total cost of pencil boxes and erasers separately, then subtract from Rs 500.',
    hint2: 'Pencil boxes: 3 × 85 = 255. Erasers: 4 × 12 = 48. Total spent = 255 + 48 = 303. Remaining = 500 − 303.',
    explanation:
      'Cost of pencil boxes = 3 × Rs 85 = Rs 255. Cost of erasers = 4 × Rs 12 = Rs 48. Total spent = Rs 255 + Rs 48 = Rs 303. Money left = Rs 500 − Rs 303 = Rs 197.',
  },
  {
    id: 'sof4-paper1-33',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A train leaves at 09:25 and arrives at 14:10. The journey has a 35-minute stop in between. How long was the train actually moving?',
    answer: '4 hours 10 minutes',
    options: [
      '4 hours 10 minutes',
      '4 hours 45 minutes',
      '5 hours 10 minutes',
      '4 hours 20 minutes',
    ],
    hint1: 'First find the total travel time, then subtract the stop time.',
    hint2: 'Total time from 09:25 to 14:10 = 4 hours 45 minutes. Subtract the 35-minute stop.',
    explanation:
      'Total time = 14:10 − 09:25 = 4 hours 45 minutes. Moving time = 4 hours 45 min − 35 min = 4 hours 10 minutes.',
  },
  {
    id: 'sof4-paper1-34',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A number is multiplied by 6 and then 14 is added to get 92. What is the number?',
    answer: '13',
    options: ['11', '12', '13', '14'],
    hint1: 'Work backwards from the result.',
    hint2: 'If the result after adding 14 is 92, then before adding 14 it was 92 − 14 = 78. Now divide 78 by 6.',
    explanation:
      'Let the number be n. 6 × n + 14 = 92. So 6 × n = 92 − 14 = 78. n = 78 ÷ 6 = 13.',
  },
  {
    id: 'sof4-paper1-35',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'Sneha has a ribbon 4 m 20 cm long. She cuts 5 equal pieces from it and has 20 cm left over. How long is each piece?',
    answer: '80 cm',
    options: ['70 cm', '75 cm', '80 cm', '84 cm'],
    hint1: 'First convert the total length to centimetres, subtract the leftover, then divide by 5.',
    hint2: '4 m 20 cm = 420 cm. After removing 20 cm leftover: 420 − 20 = 400 cm. Each piece = 400 ÷ 5.',
    explanation:
      '4 m 20 cm = 420 cm. Ribbon used for pieces = 420 − 20 = 400 cm. Each piece = 400 ÷ 5 = 80 cm.',
  },
  {
    id: 'sof4-paper1-36',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'The sum of three consecutive numbers is 72. What is the largest of the three numbers?',
    answer: '25',
    options: ['23', '24', '25', '26'],
    hint1: 'Consecutive numbers are one apart. Let the middle number be the average.',
    hint2: 'If the middle number is 72 ÷ 3 = 24, then the three numbers are 23, 24, 25.',
    explanation:
      'Three consecutive numbers with sum 72: average = 72 ÷ 3 = 24. The numbers are 23, 24, 25. The largest is 25.',
  },
  {
    id: 'sof4-paper1-37',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A tank holds 12 L 500 mL of water. If 3 L 750 mL is used each day, how many full days will the water last?',
    answer: '3 days',
    options: ['2 days', '3 days', '4 days', '5 days'],
    hint1: 'Convert everything to millilitres and divide.',
    hint2: '12 L 500 mL = 12,500 mL. 3 L 750 mL = 3,750 mL. 12,500 ÷ 3,750 = 3 with remainder 500.',
    explanation:
      '12,500 mL ÷ 3,750 mL = 3 remainder 500. The water lasts 3 full days (with 500 mL left over).',
  },
  {
    id: 'sof4-paper1-38',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'In a school of 480 students, 3/8 are boys. How many girls are there?',
    answer: '300',
    options: ['180', '240', '280', '300'],
    hint1: 'Find the number of boys first, then subtract from the total.',
    hint2: 'Boys = 3/8 × 480 = 180. Girls = 480 - 180.',
    explanation:
      'Boys = 3/8 × 480 = 180. Girls = 480 - 180 = 300.',
  },
  {
    id: 'sof4-paper1-39',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A rectangle has a perimeter of 56 cm. If its length is 18 cm, what is its area?',
    answer: '180 sq cm',
    options: ['160 sq cm', '170 sq cm', '180 sq cm', '200 sq cm'],
    hint1: 'First find the width using the perimeter, then calculate the area.',
    hint2: 'Perimeter = 2 × (length + width). 56 = 2 × (18 + width). 28 = 18 + width. Width = 10.',
    explanation:
      '56 = 2 × (18 + w), so 28 = 18 + w, w = 10 cm. Area = 18 × 10 = 180 sq cm.',
  },
  {
    id: 'sof4-paper1-40',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper1',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'Ankit leaves home at 7:35 AM, cycles 25 minutes to the station, waits 10 minutes, then takes a 1 hour 15 minute train. At what time does he arrive?',
    answer: '9:25 AM',
    options: ['9:05 AM', '9:15 AM', '9:25 AM', '9:35 AM'],
    hint1: 'Add each segment of time one by one.',
    hint2: '7:35 + 25 min = 8:00. 8:00 + 10 min wait = 8:10. 8:10 + 1 hr 15 min = 9:25.',
    explanation:
      '7:35 AM + 25 min = 8:00 AM. + 10 min wait = 8:10 AM. + 1 hr 15 min train = 9:25 AM.',
  },

  // ═══════════════════════════════════════════════════════
  // PAPER 2 — SOF IMO Class 4 Sample Paper 2
  // ═══════════════════════════════════════════════════════

  // ─────────────────────────────────────────────
  // Section 1: Logical Reasoning (10 questions, difficulty 1)
  // ─────────────────────────────────────────────

  {
    id: 'sof4-paper2-1',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What is the next number in the series? 2, 5, 11, 23, __',
    answer: '47',
    options: ['35', '41', '45', '47'],
    hint1: 'Look at how each number relates to the previous one.',
    hint2: 'Each number is doubled and then 1 is added: 2×2+1=5, 5×2+1=11, 11×2+1=23, 23×2+1=?',
    explanation:
      'The rule is: multiply by 2 and add 1. 2→5 (2×2+1), 5→11 (5×2+1), 11→23 (11×2+1), 23→47 (23×2+1).',
  },
  {
    id: 'sof4-paper2-2',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'If CAT = 24, DOG = 26, then what is PIG?',
    answer: '32',
    options: ['28', '30', '32', '34'],
    hint1: 'Convert each letter to its position number (A=1, B=2, C=3...) and add them up.',
    hint2: 'C=3, A=1, T=20 → 3+1+20=24. D=4, O=15, G=7 → 4+15+7=26. P=16, I=9, G=7 → 16+9+7=?',
    explanation:
      'Using letter positions: P=16, I=9, G=7. Sum = 16 + 9 + 7 = 32.',
  },
  {
    id: 'sof4-paper2-3',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Which number does NOT belong? 4, 9, 16, 25, 32, 49',
    answer: '32',
    options: ['9', '25', '32', '49'],
    hint1: 'What is special about most of these numbers?',
    hint2: 'These are perfect squares: 2²=4, 3²=9, 4²=16, 5²=25, 7²=49. Which number is NOT a perfect square?',
    explanation:
      '4, 9, 16, 25, 49 are all perfect squares (2², 3², 4², 5², 7²). 32 is not a perfect square, so it does not belong.',
  },
  {
    id: 'sof4-paper2-4',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'In a class of 40 students, Kavya ranks 15th from the top. What is her rank from the bottom?',
    answer: '26th',
    options: ['24th', '25th', '26th', '27th'],
    hint1: 'Think about how rank from top and rank from bottom relate to total students.',
    hint2: 'Rank from bottom = Total students − Rank from top + 1 = 40 − 15 + 1.',
    explanation:
      'Rank from bottom = 40 − 15 + 1 = 26th. Kavya is 26th from the bottom.',
  },
  {
    id: 'sof4-paper2-5',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Which solid has 6 faces, 12 edges, and 8 vertices?',
    answer: 'Cuboid',
    options: ['Cone', 'Cylinder', 'Cuboid', 'Sphere'],
    hint1: 'Think about common 3D shapes and count their faces.',
    hint2: 'A box shape (like a brick) has 6 flat faces, 12 edges, and 8 corners.',
    explanation:
      'A cuboid (also called a rectangular prism) has 6 faces, 12 edges, and 8 vertices. A cube is a special cuboid.',
  },
  {
    id: 'sof4-paper2-6',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Look at the series: A, C, F, J, __. What letter comes next?',
    answer: 'O',
    options: ['L', 'M', 'N', 'O'],
    hint1: 'Convert the letters to numbers and find the pattern.',
    hint2: 'A=1, C=3, F=6, J=10. The differences are 2, 3, 4. The next difference should be 5. J(10) + 5 = 15 = O.',
    explanation:
      'A=1, C=3 (+2), F=6 (+3), J=10 (+4). The differences increase by 1 each time. Next: 10 + 5 = 15 = O.',
  },
  {
    id: 'sof4-paper2-7',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Today is Saturday. What day was it 100 days ago?',
    answer: 'Thursday',
    options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    hint1: 'Weeks have 7 days. How many complete weeks are in 100 days?',
    hint2: '100 ÷ 7 = 14 weeks and 2 days remainder. Go back 2 days from Saturday.',
    explanation:
      '100 ÷ 7 = 14 remainder 2. Going back 14 weeks from Saturday lands on Saturday. Then go back 2 more days: Friday (1 day back), Thursday (2 days back). So 100 days ago was Thursday.',
  },
  {
    id: 'sof4-paper2-8',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Find the missing number: 3, 4, 7, 11, 18, 29, __',
    answer: '47',
    options: ['36', '40', '43', '47'],
    hint1: 'Look at how each number is formed from the previous numbers.',
    hint2: 'Each number is the sum of the two numbers before it: 3+4=7, 4+7=11, 7+11=18, 11+18=29. What is 18+29?',
    explanation:
      'Each term is the sum of the previous two: 3+4=7, 4+7=11, 7+11=18, 11+18=29, 18+29=47.',
  },
  {
    id: 'sof4-paper2-9',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Ananya is taller than Bharat. Charu is shorter than Bharat but taller than Diya. Who is the shortest?',
    answer: 'Diya',
    options: ['Ananya', 'Bharat', 'Charu', 'Diya'],
    hint1: 'Arrange the people from tallest to shortest using the given clues.',
    hint2: 'Ananya > Bharat > Charu > Diya. Who is at the end?',
    explanation:
      'From the clues: Ananya > Bharat (given), Bharat > Charu > Diya (given). Order: Ananya > Bharat > Charu > Diya. Diya is the shortest.',
  },
  {
    id: 'sof4-paper2-10',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'How many squares of any size can you find on a 2×2 grid (like a window with 4 panes)?',
    answer: '5',
    options: ['4', '5', '6', '8'],
    hint1: 'Count the small squares first, then look for any larger squares formed by combining smaller ones.',
    hint2: 'There are 4 small (1×1) squares. Is there a larger (2×2) square? That gives 1 more.',
    explanation:
      'A 2×2 grid has 4 small (1×1) squares and 1 large (2×2) square. Total = 4 + 1 = 5 squares.',
  },

  // ─────────────────────────────────────────────
  // Section 2: Mathematical Reasoning (10 questions, difficulty 2)
  // ─────────────────────────────────────────────

  {
    id: 'sof4-paper2-11',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 2,
    type: 'multiple-choice',
    question:
      'What is the number name for 73,209?',
    answer: 'Seventy-three thousand two hundred nine',
    options: [
      'Seventy-three thousand two hundred nine',
      'Seventy-three thousand two hundred ninety',
      'Seventy-two thousand three hundred nine',
      'Seven thousand three hundred twenty-nine',
    ],
    hint1: 'Break the number into parts: 73 thousand, then the remaining 209.',
    hint2: '73,209 = 73 thousand + 200 + 9 = Seventy-three thousand two hundred nine.',
    explanation:
      '73,209: 73 thousands = seventy-three thousand, 2 hundreds = two hundred, 9 ones = nine. Together: seventy-three thousand two hundred nine.',
  },
  {
    id: 'sof4-paper2-12',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 6,102 − 2,879?',
    answer: '3,223',
    options: ['3,123', '3,213', '3,223', '3,323'],
    hint1: 'Subtract column by column from right to left. You will need to borrow.',
    hint2: 'Ones: 2−9 → borrow → 12−9=3. Tens: 9−7=2 (after borrow). Hundreds: 0−8 → borrow → 10−8=2. Thousands: 5−2=3.',
    explanation:
      '6,102 − 2,879: Ones: borrow to get 12−9=3. Tens: 9(after borrow)−7=2. Hundreds: borrow to get 10−8=2. Thousands: 5−2=3. Answer = 3,223.',
  },
  {
    id: 'sof4-paper2-13',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'Which is the correct order from smallest to largest? 2/3, 1/2, 5/6, 1/4',
    answer: '1/4, 1/2, 2/3, 5/6',
    options: [
      '1/4, 1/2, 2/3, 5/6',
      '1/2, 1/4, 2/3, 5/6',
      '1/4, 2/3, 1/2, 5/6',
      '1/4, 1/2, 5/6, 2/3',
    ],
    hint1: 'Convert all fractions to a common denominator to compare them.',
    hint2: 'Common denominator 12: 1/4=3/12, 1/2=6/12, 2/3=8/12, 5/6=10/12. Now order them.',
    explanation:
      'Converting to twelfths: 1/4=3/12, 1/2=6/12, 2/3=8/12, 5/6=10/12. Order: 3/12 < 6/12 < 8/12 < 10/12, so 1/4 < 1/2 < 2/3 < 5/6.',
  },
  {
    id: 'sof4-paper2-14',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is the value of XLIV in Hindu-Arabic numerals?',
    answer: '44',
    options: ['44', '46', '54', '64'],
    hint1: 'Break the Roman numeral into parts: XL and IV.',
    hint2: 'XL = 40 (10 before 50) and IV = 4 (1 before 5). Add them together.',
    explanation:
      'XL = 50 − 10 = 40. IV = 5 − 1 = 4. XLIV = 40 + 4 = 44.',
  },
  {
    id: 'sof4-paper2-15',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 345 × 23?',
    answer: '7,935',
    options: ['7,835', '7,935', '8,035', '7,945'],
    hint1: 'Break 23 into 20 + 3 and multiply separately.',
    hint2: '345 × 20 = 6,900. 345 × 3 = 1,035. Add: 6,900 + 1,035.',
    explanation:
      '345 × 23 = 345 × 20 + 345 × 3 = 6,900 + 1,035 = 7,935.',
  },
  {
    id: 'sof4-paper2-16',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is the smallest 5-digit number that has 7 in the hundreds place?',
    answer: '10,700',
    options: ['10,007', '10,070', '10,700', '17,000'],
    hint1: 'For the smallest 5-digit number, start with 1 in the ten-thousands place. Then place 7 in the hundreds place and 0 everywhere else.',
    hint2: 'The number is _ _ _ _ _. Ten-thousands: 1 (smallest nonzero). Thousands: 0. Hundreds: 7. Tens: 0. Ones: 0.',
    explanation:
      'Smallest 5-digit number = 10,000. We need 7 in hundreds place. Place 0s in thousands, tens, ones: 10,700.',
  },
  {
    id: 'sof4-paper2-17',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 3/8 + 1/8 + 2/8?',
    answer: '3/4',
    options: ['6/24', '6/8', '3/4', '1/2'],
    hint1: 'When fractions have the same denominator, add the numerators.',
    hint2: '3 + 1 + 2 = 6. So the answer is 6/8. Can you simplify this fraction?',
    explanation:
      '3/8 + 1/8 + 2/8 = (3+1+2)/8 = 6/8 = 3/4 (dividing both by 2).',
  },
  {
    id: 'sof4-paper2-18',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'Which of the following is a common multiple of 6 and 8?',
    answer: '24',
    options: ['16', '18', '24', '28'],
    hint1: 'A common multiple is a number that both 6 and 8 divide into evenly.',
    hint2: 'Multiples of 6: 6, 12, 18, 24, 30... Multiples of 8: 8, 16, 24, 32... Which appears in both lists?',
    explanation:
      'Multiples of 6: 6, 12, 18, 24... Multiples of 8: 8, 16, 24... The first common multiple (LCM) is 24.',
  },
  {
    id: 'sof4-paper2-19',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 9,636 ÷ 6?',
    answer: '1,606',
    options: ['1,506', '1,606', '1,706', '1,600'],
    hint1: 'Divide step by step from the left.',
    hint2: '9÷6=1 R3. 36÷6=6. 3÷6=0 R3. 36÷6=6. So the answer is 1,606.',
    explanation:
      '9,636 ÷ 6: 9÷6=1 R3. Bring down 6: 36÷6=6. Bring down 3: 3÷6=0 R3. Bring down 6: 36÷6=6. Answer = 1,606.',
  },
  {
    id: 'sof4-paper2-20',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'Round 47,682 to the nearest thousand.',
    answer: '48,000',
    options: ['47,000', '47,700', '48,000', '50,000'],
    hint1: 'Look at the hundreds digit to decide whether to round up or down.',
    hint2: 'The hundreds digit is 6 (≥5), so round up. 47,000 rounds up to 48,000.',
    explanation:
      '47,682: The digit in the hundreds place is 6 (≥5), so we round up the thousands digit. 47,682 ≈ 48,000.',
  },

  // ─────────────────────────────────────────────
  // Section 3: Everyday Mathematics (10 questions, difficulty 3)
  // ─────────────────────────────────────────────

  {
    id: 'sof4-paper2-21',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'Amit walks 2 km 300 m to school and then 1 km 850 m to his friend\'s house. What is the total distance he walks?',
    answer: '4 km 150 m',
    options: ['3 km 150 m', '4 km 50 m', '4 km 150 m', '4 km 250 m'],
    hint1: 'Add the kilometres and metres separately.',
    hint2: '2 km + 1 km = 3 km. 300 m + 850 m = 1,150 m = 1 km 150 m. Total = 3 km + 1 km 150 m = 4 km 150 m.',
    explanation:
      '2 km 300 m + 1 km 850 m: Metres: 300 + 850 = 1,150 m = 1 km 150 m. Kilometres: 2 + 1 + 1 = 4 km. Total = 4 km 150 m.',
  },
  {
    id: 'sof4-paper2-22',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A school assembly starts at 8:15 AM and ends at 9:40 AM. How long is the assembly?',
    answer: '1 hour 25 minutes',
    options: [
      '1 hour 15 minutes',
      '1 hour 20 minutes',
      '1 hour 25 minutes',
      '1 hour 35 minutes',
    ],
    hint1: 'Count the time from 8:15 to 9:40.',
    hint2: 'From 8:15 to 9:15 is 1 hour. From 9:15 to 9:40 is 25 more minutes.',
    explanation:
      'From 8:15 AM to 9:15 AM = 1 hour. From 9:15 AM to 9:40 AM = 25 minutes. Total = 1 hour 25 minutes.',
  },
  {
    id: 'sof4-paper2-23',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'Neha buys 3 kg 500 g of apples and 2 kg 750 g of oranges. What is the total weight?',
    answer: '6 kg 250 g',
    options: ['5 kg 250 g', '6 kg 150 g', '6 kg 250 g', '6 kg 350 g'],
    hint1: 'Add the kilograms and grams separately.',
    hint2: '3 kg + 2 kg = 5 kg. 500 g + 750 g = 1,250 g = 1 kg 250 g. Total = 5 kg + 1 kg 250 g = 6 kg 250 g.',
    explanation:
      '3 kg 500 g + 2 kg 750 g: Grams: 500 + 750 = 1,250 g = 1 kg 250 g. Kilograms: 3 + 2 + 1 = 6 kg. Total = 6 kg 250 g.',
  },
  {
    id: 'sof4-paper2-24',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A square has a side of 9 cm. What is its perimeter?',
    answer: '36 cm',
    options: ['27 cm', '36 cm', '45 cm', '81 cm'],
    hint1: 'A square has 4 equal sides.',
    hint2: 'Perimeter = 4 × side = 4 × 9.',
    explanation:
      'Perimeter of a square = 4 × side = 4 × 9 = 36 cm.',
  },
  {
    id: 'sof4-paper2-25',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'Vikram has Rs 200. He buys a book for Rs 78 and a toy for Rs 65. How much money does he have left?',
    answer: 'Rs 57',
    options: ['Rs 47', 'Rs 52', 'Rs 57', 'Rs 67'],
    hint1: 'Add the costs first, then subtract from Rs 200.',
    hint2: 'Total spent = 78 + 65 = 143. Remaining = 200 − 143.',
    explanation:
      'Total spent = Rs 78 + Rs 65 = Rs 143. Money left = Rs 200 − Rs 143 = Rs 57.',
  },
  {
    id: 'sof4-paper2-26',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A table shows that 15 students like cricket, 12 like football, 8 like badminton, and 5 like tennis. How many students were surveyed in total?',
    answer: '40',
    options: ['35', '38', '40', '42'],
    hint1: 'Add up all the students from each sport.',
    hint2: '15 + 12 + 8 + 5 = ?',
    explanation:
      'Total students = 15 + 12 + 8 + 5 = 40.',
  },
  {
    id: 'sof4-paper2-27',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'An angle that measures exactly 90° is called a:',
    answer: 'Right angle',
    options: ['Acute angle', 'Right angle', 'Obtuse angle', 'Straight angle'],
    hint1: 'Think about the corners of a rectangle or square.',
    hint2: 'The corners of a square are exactly 90°. What is this type of angle called?',
    explanation:
      'An angle of exactly 90° is a right angle. Acute angles are less than 90°, obtuse angles are between 90° and 180°, and a straight angle is 180°.',
  },
  {
    id: 'sof4-paper2-28',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A bottle holds 1 L 200 mL of juice. If Priya drinks 450 mL, how much juice is left?',
    answer: '750 mL',
    options: ['650 mL', '700 mL', '750 mL', '800 mL'],
    hint1: 'First convert 1 L 200 mL to millilitres.',
    hint2: '1 L 200 mL = 1,200 mL. Subtract 450 mL from this.',
    explanation:
      '1 L 200 mL = 1,200 mL. After drinking: 1,200 − 450 = 750 mL.',
  },
  {
    id: 'sof4-paper2-29',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'How many lines of symmetry does an equilateral triangle have?',
    answer: '3',
    options: ['1', '2', '3', '6'],
    hint1: 'An equilateral triangle has all sides equal. Think about how many ways you can fold it into matching halves.',
    hint2: 'Each line of symmetry goes from one vertex to the midpoint of the opposite side. With 3 vertices, there are 3 such lines.',
    explanation:
      'An equilateral triangle has 3 lines of symmetry, one from each vertex to the midpoint of the opposite side.',
  },
  {
    id: 'sof4-paper2-30',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'Convert 3:50 PM to 24-hour format.',
    answer: '15:50',
    options: ['3:50', '13:50', '15:50', '17:50'],
    hint1: 'For PM times, add 12 to the hour.',
    hint2: '3 PM → 3 + 12 = 15. So 3:50 PM = 15:50.',
    explanation:
      'To convert PM to 24-hour: add 12 to the hour. 3 + 12 = 15. So 3:50 PM = 15:50.',
  },

  // ─────────────────────────────────────────────
  // Section 4: Achievers Section (10 questions, difficulty 4)
  // ─────────────────────────────────────────────

  {
    id: 'sof4-paper2-31',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A shopkeeper has 5 kg 200 g of sugar. He sells 1 kg 750 g in the morning and 2 kg 300 g in the evening. How much sugar is left?',
    answer: '1 kg 150 g',
    options: ['1 kg 50 g', '1 kg 150 g', '1 kg 250 g', '1 kg 350 g'],
    hint1: 'First find the total sugar sold, then subtract from the original amount.',
    hint2: 'Total sold = 1 kg 750 g + 2 kg 300 g = 4 kg 50 g. Remaining = 5 kg 200 g − 4 kg 50 g.',
    explanation:
      'Total sold = 1 kg 750 g + 2 kg 300 g = 4 kg 050 g. Remaining = 5 kg 200 g − 4 kg 050 g = 1 kg 150 g.',
  },
  {
    id: 'sof4-paper2-32',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A rectangular field is 120 m long and 80 m wide. Fencing costs Rs 15 per metre. What is the total cost of fencing the field?',
    answer: 'Rs 6,000',
    options: ['Rs 3,000', 'Rs 4,800', 'Rs 6,000', 'Rs 9,600'],
    hint1: 'First find the perimeter, then multiply by the cost per metre.',
    hint2: 'Perimeter = 2 × (120 + 80) = 2 × 200 = 400 m. Cost = 400 × Rs 15.',
    explanation:
      'Perimeter = 2 × (120 + 80) = 2 × 200 = 400 m. Total cost = 400 × Rs 15 = Rs 6,000.',
  },
  {
    id: 'sof4-paper2-33',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'Divya starts reading a book at 4:45 PM. She reads for 1 hour 40 minutes, takes a 20-minute break, and reads for another 55 minutes. At what time does she finish?',
    answer: '7:40 PM',
    options: ['7:20 PM', '7:30 PM', '7:40 PM', '7:50 PM'],
    hint1: 'Add each activity time to the start time step by step.',
    hint2: '4:45 + 1h 40m = 6:25 PM. 6:25 + 20 min break = 6:45 PM. 6:45 + 55 min = 7:40 PM.',
    explanation:
      'Start: 4:45 PM. After 1h 40m of reading: 6:25 PM. After 20-minute break: 6:45 PM. After 55 more minutes of reading: 7:40 PM.',
  },
  {
    id: 'sof4-paper2-34',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A number when divided by 7 gives quotient 135 and remainder 4. What is the number?',
    answer: '949',
    options: ['939', '945', '949', '953'],
    hint1: 'Use the relationship: Number = Divisor × Quotient + Remainder.',
    hint2: 'Number = 7 × 135 + 4. First calculate 7 × 135.',
    explanation:
      'Number = Divisor × Quotient + Remainder = 7 × 135 + 4 = 945 + 4 = 949.',
  },
  {
    id: 'sof4-paper2-35',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'In a bar graph, the sale of umbrellas in 4 months is: June = 150, July = 225, August = 300, September = 175. What is the average monthly sale?',
    answer: '213',
    options: ['200', '206', '213', '225'],
    hint1: 'Average = Total ÷ Number of months.',
    hint2: 'Total = 150 + 225 + 300 + 175 = 850. Average = 850 ÷ 4.',
    explanation:
      'Total sales = 150 + 225 + 300 + 175 = 850. Average = 850 ÷ 4 = 212.5. Rounded to the nearest whole number = 213.',
  },
  {
    id: 'sof4-paper2-36',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A number when divided by 7 gives a quotient of 12 and a remainder of 5. What is the number?',
    answer: '89',
    options: ['84', '87', '89', '91'],
    hint1: 'Use the formula: Number = Divisor × Quotient + Remainder.',
    hint2: 'Number = 7 × 12 + 5.',
    explanation:
      'Number = (7 × 12) + 5 = 84 + 5 = 89.',
  },
  {
    id: 'sof4-paper2-37',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A box contains 250 beads. 3/5 of them are blue and the rest are red. How many red beads are there?',
    answer: '100',
    options: ['75', '100', '125', '150'],
    hint1: 'Find the fraction that is red, then calculate.',
    hint2: 'If 3/5 are blue, then 2/5 are red. Red = 2/5 × 250.',
    explanation:
      'Blue = 3/5 of 250 = 150. Red = 250 - 150 = 100. (Or: 2/5 × 250 = 100.)',
  },
  {
    id: 'sof4-paper2-38',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'Two numbers have a sum of 96 and a difference of 14. What is the larger number?',
    answer: '55',
    options: ['41', '48', '52', '55'],
    hint1: 'If you add the sum and difference, you get twice the larger number.',
    hint2: 'Larger = (Sum + Difference) ÷ 2 = (96 + 14) ÷ 2.',
    explanation:
      'Larger number = (96 + 14) ÷ 2 = 110 ÷ 2 = 55. Smaller = 55 - 14 = 41. Check: 55 + 41 = 96.',
  },
  {
    id: 'sof4-paper2-39',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A shopkeeper bought 15 notebooks at Rs 35 each and sold them at Rs 42 each. What was his total profit?',
    answer: 'Rs 105',
    options: ['Rs 90', 'Rs 95', 'Rs 100', 'Rs 105'],
    hint1: 'Profit per notebook = Selling price - Cost price. Then multiply by 15.',
    hint2: 'Profit per book = 42 - 35 = Rs 7. Total profit = 15 × 7.',
    explanation:
      'Profit per notebook = Rs 42 - Rs 35 = Rs 7. Total profit = 15 × Rs 7 = Rs 105.',
  },
  {
    id: 'sof4-paper2-40',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper2',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A square has the same perimeter as a rectangle of length 10 cm and width 6 cm. What is the side of the square?',
    answer: '8 cm',
    options: ['6 cm', '7 cm', '8 cm', '10 cm'],
    hint1: 'Find the perimeter of the rectangle first.',
    hint2: 'Rectangle perimeter = 2 × (10 + 6) = 32 cm. Square perimeter = 32 cm. Side = 32 ÷ 4.',
    explanation:
      'Rectangle perimeter = 2 × (10 + 6) = 32 cm. Square side = 32 ÷ 4 = 8 cm.',
  },

  // ═══════════════════════════════════════════════════════
  // PAPER 3 — SOF IMO Class 4 Sample Paper 3
  // ═══════════════════════════════════════════════════════

  // ─────────────────────────────────────────────
  // Section 1: Logical Reasoning (10 questions, difficulty 1)
  // ─────────────────────────────────────────────

  {
    id: 'sof4-paper3-1',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What is the next number? 1, 4, 9, 16, 25, __',
    answer: '36',
    options: ['30', '32', '35', '36'],
    hint1: 'These are special numbers. What operation produces them?',
    hint2: 'These are perfect squares: 1², 2², 3², 4², 5². What is 6²?',
    explanation:
      'The numbers are perfect squares: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36. The next number is 36.',
  },
  {
    id: 'sof4-paper3-2',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'If BOOK is coded as CPPL, how is DESK coded?',
    answer: 'EFTL',
    options: ['DFLT', 'EFTL', 'EDTL', 'CESK'],
    hint1: 'Compare each letter of BOOK to the coded CPPL.',
    hint2: 'Each letter moves forward by 1: B→C, O→P, O→P, K→L. Apply to DESK: D→E, E→F, S→T, K→L.',
    explanation:
      'Each letter shifts +1: D→E, E→F, S→T, K→L. DESK becomes EFTL.',
  },
  {
    id: 'sof4-paper3-3',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Which one does NOT belong? Circle, Square, Triangle, Cube',
    answer: 'Cube',
    options: ['Circle', 'Square', 'Triangle', 'Cube'],
    hint1: 'Think about whether these are flat (2D) or solid (3D) shapes.',
    hint2: 'Circle, square, and triangle are all 2D (flat) shapes. Which one is 3D?',
    explanation:
      'Circle, square, and triangle are 2D shapes. Cube is a 3D solid shape, so it does not belong in the group.',
  },
  {
    id: 'sof4-paper3-4',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'In a queue, Rahul is 6th from the front and 9th from the back. How many people are in the queue?',
    answer: '14',
    options: ['13', '14', '15', '16'],
    hint1: 'Rahul is counted in both positions.',
    hint2: 'Total = position from front + position from back − 1 = 6 + 9 − 1.',
    explanation:
      'Total = 6 + 9 − 1 = 14. We subtract 1 because Rahul is counted in both positions.',
  },
  {
    id: 'sof4-paper3-5',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Which shape when folded forms a cube?',
    answer: 'A cross made of 6 squares',
    options: [
      'A cross made of 6 squares',
      'A row of 6 squares',
      'A cross made of 5 squares',
      'A row of 4 squares',
    ],
    hint1: 'A cube has 6 faces. The net must have exactly 6 squares arranged so they fold up properly.',
    hint2: 'A cross shape (like a plus sign with one extra square) has 6 squares and folds into a cube.',
    explanation:
      'A cube has 6 faces, so the net needs 6 squares. A cross-shaped arrangement of 6 squares (one center square with 4 around it plus 1 more extending) folds perfectly into a cube.',
  },
  {
    id: 'sof4-paper3-6',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Find the pattern: 100, 95, 85, 70, 50, __',
    answer: '25',
    options: ['20', '25', '30', '35'],
    hint1: 'Look at how much is subtracted each time.',
    hint2: 'Differences: 100−95=5, 95−85=10, 85−70=15, 70−50=20. The differences increase by 5 each time. Next difference = 25.',
    explanation:
      'The differences increase by 5 each time: −5, −10, −15, −20, −25. So 50 − 25 = 25.',
  },
  {
    id: 'sof4-paper3-7',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'March has 31 days. If March 1 is a Monday, what day is March 31?',
    answer: 'Wednesday',
    options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    hint1: 'Count the days from March 1 to March 31.',
    hint2: 'March 1 is Monday (day 1). March 31 is 30 days later. 30 ÷ 7 = 4 weeks and 2 days. Monday + 2 days = Wednesday.',
    explanation:
      'From March 1 (Monday) to March 31 is 30 days. 30 ÷ 7 = 4 weeks + 2 days. Monday + 2 = Wednesday.',
  },
  {
    id: 'sof4-paper3-8',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Which figure is embedded (hidden) in every rectangle?',
    answer: 'Triangle',
    options: ['Circle', 'Triangle', 'Pentagon', 'Hexagon'],
    hint1: 'If you draw a diagonal in a rectangle, what shapes do you see?',
    hint2: 'Drawing one diagonal in a rectangle divides it into two triangles.',
    explanation:
      'A diagonal of a rectangle creates 2 triangles. So a triangle is always embedded in a rectangle.',
  },
  {
    id: 'sof4-paper3-9',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'Ria has 4 coloured pencils: red, blue, green, yellow. She wants to pick 2 pencils. How many different pairs can she choose?',
    answer: '6',
    options: ['4', '5', '6', '8'],
    hint1: 'List out all possible pairs systematically.',
    hint2: 'Start with red: RB, RG, RY (3 pairs). Then blue: BG, BY (2 pairs). Then green: GY (1 pair). Total = 3+2+1.',
    explanation:
      'Pairs: (R,B), (R,G), (R,Y), (B,G), (B,Y), (G,Y). Total = 6 pairs. Formula: 4×3÷2 = 6.',
  },
  {
    id: 'sof4-paper3-10',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'In a mirror, the letter "b" looks like:',
    answer: 'd',
    options: ['p', 'q', 'd', 'b'],
    hint1: 'A mirror flips left and right.',
    hint2: 'When you look at "b" in a mirror, the round part flips from the right side to the left side.',
    explanation:
      'A mirror reverses left and right. The letter "b" has the bump on the right; in the mirror, it flips to the left, making it look like "d".',
  },

  // ─────────────────────────────────────────────
  // Section 2: Mathematical Reasoning (10 questions, difficulty 2)
  // ─────────────────────────────────────────────

  {
    id: 'sof4-paper3-11',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 2,
    type: 'multiple-choice',
    question:
      'What is the face value of 5 in 85,467?',
    answer: '5',
    options: ['5', '500', '5,000', '50,000'],
    hint1: 'Face value is different from place value.',
    hint2: 'Face value of a digit is always the digit itself, regardless of its position.',
    explanation:
      'The face value of any digit is the digit itself. The face value of 5 in 85,467 is simply 5. (Place value would be 5,000.)',
  },
  {
    id: 'sof4-paper3-12',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 3,245 + 4,867 + 1,388?',
    answer: '9,500',
    options: ['9,400', '9,500', '9,600', '9,450'],
    hint1: 'Add two numbers first, then add the third.',
    hint2: '3,245 + 4,867 = 8,112. Then 8,112 + 1,388 = 9,500.',
    explanation:
      '3,245 + 4,867 = 8,112. 8,112 + 1,388 = 9,500.',
  },
  {
    id: 'sof4-paper3-13',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 5,000 − 2,364?',
    answer: '2,636',
    options: ['2,536', '2,636', '2,736', '3,636'],
    hint1: 'You need to borrow from the thousands since the other digits are zeros.',
    hint2: '5,000 = 4,999 + 1. So 5,000 − 2,364: borrow across zeros. 10−4=6, 9−6=3, 9−3=6, 4−2=2.',
    explanation:
      '5,000 − 2,364: Borrow from 5,000 → 4,9,9,10. Ones: 10−4=6. Tens: 9−6=3. Hundreds: 9−3=6. Thousands: 4−2=2. Answer = 2,636.',
  },
  {
    id: 'sof4-paper3-14',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'Which fraction is the simplest form of 12/18?',
    answer: '2/3',
    options: ['4/6', '6/9', '2/3', '3/4'],
    hint1: 'Find the largest number that divides both 12 and 18.',
    hint2: 'The GCD of 12 and 18 is 6. Divide both by 6: 12÷6=2, 18÷6=3.',
    explanation:
      'GCD of 12 and 18 is 6. 12÷6 = 2, 18÷6 = 3. So 12/18 in simplest form = 2/3.',
  },
  {
    id: 'sof4-paper3-15',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is LXXVIII in Hindu-Arabic numerals?',
    answer: '78',
    options: ['68', '73', '78', '88'],
    hint1: 'Break the Roman numeral into parts.',
    hint2: 'L=50, XX=20, V=5, III=3. Add them up: 50+20+5+3.',
    explanation:
      'L=50, X=10, X=10, V=5, I=1, I=1, I=1. Total = 50+10+10+5+1+1+1 = 78.',
  },
  {
    id: 'sof4-paper3-16',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 128 × 25?',
    answer: '3,200',
    options: ['2,800', '3,000', '3,200', '3,400'],
    hint1: 'Use a shortcut: 25 = 100 ÷ 4.',
    hint2: '128 × 25 = 128 × 100 ÷ 4 = 12,800 ÷ 4 = 3,200. Or: 128 × 25 = 128 × 20 + 128 × 5 = 2,560 + 640.',
    explanation:
      '128 × 25: Method 1: 128 × 25 = 128 × 100 ÷ 4 = 12,800 ÷ 4 = 3,200. Method 2: 128 × 20 = 2,560; 128 × 5 = 640; 2,560 + 640 = 3,200.',
  },
  {
    id: 'sof4-paper3-17',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'How many 4-digit numbers can be formed using the digits 0, 1, 2, 3 without repetition?',
    answer: '18',
    options: ['12', '18', '24', '36'],
    hint1: 'The first digit cannot be 0 (otherwise it is a 3-digit number).',
    hint2: 'First digit: 3 choices (1, 2, or 3). Second digit: 3 remaining. Third digit: 2 remaining. Fourth digit: 1 remaining. Total = 3 × 3 × 2 × 1.',
    explanation:
      'First digit: 3 choices (1, 2, 3 — not 0). Remaining 3 positions: 3 × 2 × 1 = 6 arrangements. Total = 3 × 6 = 18.',
  },
  {
    id: 'sof4-paper3-18',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 5/6 − 1/3?',
    answer: '1/2',
    options: ['1/3', '1/2', '2/3', '4/6'],
    hint1: 'Find a common denominator for both fractions.',
    hint2: 'Convert 1/3 to sixths: 1/3 = 2/6. Now subtract: 5/6 − 2/6.',
    explanation:
      '1/3 = 2/6. So 5/6 − 2/6 = 3/6 = 1/2.',
  },
  {
    id: 'sof4-paper3-19',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is the HCF (highest common factor) of 24 and 36?',
    answer: '12',
    options: ['6', '8', '12', '18'],
    hint1: 'List the factors of both numbers and find the largest common one.',
    hint2: 'Factors of 24: 1,2,3,4,6,8,12,24. Factors of 36: 1,2,3,4,6,9,12,18,36. The largest common factor is?',
    explanation:
      'Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. Common factors: 1, 2, 3, 4, 6, 12. HCF = 12.',
  },
  {
    id: 'sof4-paper3-20',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 7,392 ÷ 4?',
    answer: '1,848',
    options: ['1,838', '1,848', '1,858', '1,948'],
    hint1: 'Divide digit by digit from left to right.',
    hint2: '7÷4=1 R3. 33÷4=8 R1. 19÷4=4 R3. 32÷4=8.',
    explanation:
      '7,392 ÷ 4: 7÷4=1 R3. 33÷4=8 R1. 19÷4=4 R3. 32÷4=8. Answer = 1,848.',
  },

  // ─────────────────────────────────────────────
  // Section 3: Everyday Mathematics (10 questions, difficulty 3)
  // ─────────────────────────────────────────────

  {
    id: 'sof4-paper3-21',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A car travels 45 km 600 m in the morning and 38 km 750 m in the afternoon. What is the total distance?',
    answer: '84 km 350 m',
    options: ['83 km 350 m', '84 km 250 m', '84 km 350 m', '84 km 450 m'],
    hint1: 'Add kilometres and metres separately.',
    hint2: '45 + 38 = 83 km. 600 + 750 = 1,350 m = 1 km 350 m. Total = 83 + 1 km 350 m = 84 km 350 m.',
    explanation:
      '45 km 600 m + 38 km 750 m: Metres: 600 + 750 = 1,350 m = 1 km 350 m. Kilometres: 45 + 38 + 1 = 84 km. Total = 84 km 350 m.',
  },
  {
    id: 'sof4-paper3-22',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A cricket match starts at 10:30 AM and ends at 3:15 PM. How long did the match last?',
    answer: '4 hours 45 minutes',
    options: [
      '4 hours 15 minutes',
      '4 hours 30 minutes',
      '4 hours 45 minutes',
      '5 hours 15 minutes',
    ],
    hint1: 'Count the hours from 10:30 AM to 3:15 PM.',
    hint2: 'From 10:30 to 3:30 PM = 5 hours. But the match ends at 3:15, which is 15 min before 3:30. So 5 hours − 15 min = 4 hours 45 minutes.',
    explanation:
      'From 10:30 AM to 3:30 PM = 5 hours. Since the match ends at 3:15 PM (15 minutes before 3:30), the duration is 5 hours − 15 minutes = 4 hours 45 minutes.',
  },
  {
    id: 'sof4-paper3-23',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'Kiran bought 2 kg 400 g of potatoes, 1 kg 600 g of onions, and 750 g of tomatoes. What is the total weight?',
    answer: '4 kg 750 g',
    options: ['4 kg 650 g', '4 kg 750 g', '4 kg 850 g', '5 kg 750 g'],
    hint1: 'Convert everything to grams or add kg and g separately.',
    hint2: '2 kg + 1 kg = 3 kg. 400 g + 600 g + 750 g = 1,750 g = 1 kg 750 g. Total = 3 + 1 kg 750 g = 4 kg 750 g.',
    explanation:
      'Kilograms: 2 + 1 = 3 kg (tomatoes are less than 1 kg). Grams: 400 + 600 + 750 = 1,750 g = 1 kg 750 g. Total = 3 + 1 = 4 kg 750 g.',
  },
  {
    id: 'sof4-paper3-24',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A rectangular park is 45 m long and 30 m wide. What is its perimeter?',
    answer: '150 m',
    options: ['120 m', '135 m', '150 m', '1,350 m'],
    hint1: 'Perimeter = total distance around the rectangle.',
    hint2: 'Perimeter = 2 × (length + breadth) = 2 × (45 + 30).',
    explanation:
      'Perimeter = 2 × (45 + 30) = 2 × 75 = 150 m.',
  },
  {
    id: 'sof4-paper3-25',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'Arun has a Rs 500 note. He buys a shirt for Rs 325 and socks for Rs 48. How much change does he get?',
    answer: 'Rs 127',
    options: ['Rs 117', 'Rs 127', 'Rs 137', 'Rs 227'],
    hint1: 'Add the costs, then subtract from Rs 500.',
    hint2: 'Total cost = 325 + 48 = 373. Change = 500 − 373.',
    explanation:
      'Total cost = Rs 325 + Rs 48 = Rs 373. Change = Rs 500 − Rs 373 = Rs 127.',
  },
  {
    id: 'sof4-paper3-26',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A pictograph shows fruit sales where each picture represents 5 fruits. Apples have 7 pictures, Bananas have 9 pictures, and Mangoes have 4 pictures. How many bananas were sold?',
    answer: '45',
    options: ['35', '40', '45', '50'],
    hint1: 'Each picture = 5 fruits. Multiply the number of pictures by 5.',
    hint2: 'Bananas: 9 pictures × 5 = ?',
    explanation:
      'Bananas: 9 pictures × 5 fruits per picture = 45 bananas.',
  },
  {
    id: 'sof4-paper3-27',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'Which of the following letters has exactly 2 lines of symmetry?',
    answer: 'H',
    options: ['A', 'B', 'H', 'S'],
    hint1: 'A line of symmetry divides the letter into two matching halves.',
    hint2: 'H can be folded horizontally (top-bottom) and vertically (left-right). Both halves match each way.',
    explanation:
      'H has 2 lines of symmetry: one vertical (left matches right) and one horizontal (top matches bottom). A has only 1 (vertical), B has 1 (horizontal), S has 0.',
  },
  {
    id: 'sof4-paper3-28',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A drum holds 8 L 500 mL of water. If 3 L 200 mL is poured out and then 1 L 800 mL is added, how much water is in the drum now?',
    answer: '7 L 100 mL',
    options: ['6 L 100 mL', '6 L 900 mL', '7 L 100 mL', '7 L 300 mL'],
    hint1: 'Do the subtraction first, then the addition.',
    hint2: '8 L 500 mL − 3 L 200 mL = 5 L 300 mL. Then 5 L 300 mL + 1 L 800 mL = ?',
    explanation:
      '8 L 500 mL − 3 L 200 mL = 5 L 300 mL. Then 5 L 300 mL + 1 L 800 mL = 7 L 100 mL (300+800=1100 mL = 1L 100 mL).',
  },
  {
    id: 'sof4-paper3-29',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'An angle less than 90° is called:',
    answer: 'Acute angle',
    options: ['Right angle', 'Acute angle', 'Obtuse angle', 'Reflex angle'],
    hint1: 'Think about the different types of angles based on their size.',
    hint2: 'Angles less than 90° are small and sharp. The word "acute" means sharp.',
    explanation:
      'An acute angle measures less than 90°. A right angle is exactly 90°. An obtuse angle is between 90° and 180°. A reflex angle is greater than 180°.',
  },
  {
    id: 'sof4-paper3-30',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'What is 21:30 in 12-hour clock format?',
    answer: '9:30 PM',
    options: ['9:30 AM', '9:30 PM', '11:30 PM', '8:30 PM'],
    hint1: 'For hours 13 and above, subtract 12 and add PM.',
    hint2: '21 − 12 = 9. So 21:30 = 9:30 PM.',
    explanation:
      '21:30 in 12-hour format: 21 − 12 = 9 PM. So 21:30 = 9:30 PM.',
  },

  // ─────────────────────────────────────────────
  // Section 4: Achievers Section (10 questions, difficulty 4)
  // ─────────────────────────────────────────────

  {
    id: 'sof4-paper3-31',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A school ordered 1,250 notebooks. Each class gets 75 notebooks. If there are 15 classes, how many notebooks are left over?',
    answer: '125',
    options: ['100', '115', '125', '150'],
    hint1: 'Find the total notebooks given out, then subtract from 1,250.',
    hint2: 'Total given = 15 × 75 = 1,125. Leftover = 1,250 − 1,125.',
    explanation:
      'Total distributed = 15 × 75 = 1,125 notebooks. Leftover = 1,250 − 1,125 = 125 notebooks.',
  },
  {
    id: 'sof4-paper3-32',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'The perimeter of a rectangle is 56 cm. If the length is 3 times the breadth, what is the length?',
    answer: '21 cm',
    options: ['14 cm', '18 cm', '21 cm', '28 cm'],
    hint1: 'Let the breadth = b. Then length = 3b. Use the perimeter formula.',
    hint2: 'Perimeter = 2 × (l + b) = 2 × (3b + b) = 2 × 4b = 8b. So 8b = 56, b = 7. Length = 3 × 7.',
    explanation:
      'Let breadth = b, length = 3b. Perimeter = 2(3b + b) = 8b = 56. So b = 7 cm. Length = 3 × 7 = 21 cm.',
  },
  {
    id: 'sof4-paper3-33',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'Lakshmi has Rs 1,000. She spends 1/4 of it on books, 1/5 on stationery, and saves the rest. How much does she save?',
    answer: 'Rs 550',
    options: ['Rs 450', 'Rs 500', 'Rs 550', 'Rs 600'],
    hint1: 'Find how much she spends on books and stationery, then subtract from Rs 1,000.',
    hint2: 'Books: 1/4 of 1,000 = 250. Stationery: 1/5 of 1,000 = 200. Total spent = 250 + 200 = 450. Savings = 1,000 − 450.',
    explanation:
      'Books: 1/4 × 1,000 = Rs 250. Stationery: 1/5 × 1,000 = Rs 200. Total spent = Rs 450. Savings = Rs 1,000 − Rs 450 = Rs 550.',
  },
  {
    id: 'sof4-paper3-34',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A water tank fills at 4 L 500 mL per minute. How much water is filled in 8 minutes?',
    answer: '36 L',
    options: ['32 L', '34 L', '36 L', '38 L'],
    hint1: 'Multiply the rate by the time.',
    hint2: '4 L 500 mL = 4,500 mL. In 8 minutes: 4,500 × 8 = 36,000 mL. Convert to litres.',
    explanation:
      '4 L 500 mL = 4,500 mL. In 8 minutes: 4,500 × 8 = 36,000 mL = 36 L.',
  },
  {
    id: 'sof4-paper3-35',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A pattern uses shapes: Square, Triangle, Circle, Square, Triangle, Circle, ... What is the 50th shape in the pattern?',
    answer: 'Triangle',
    options: ['Square', 'Triangle', 'Circle', 'Cannot determine'],
    hint1: 'The pattern repeats every 3 shapes. Find which position in the cycle the 50th shape falls on.',
    hint2: '50 ÷ 3 = 16 remainder 2. Remainder 1 = Square, Remainder 2 = Triangle, Remainder 0 = Circle.',
    explanation:
      'The pattern repeats every 3: S, T, C. 50 ÷ 3 = 16 remainder 2. The 2nd shape in the cycle is Triangle. So the 50th shape is Triangle.',
  },
  {
    id: 'sof4-paper3-36',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'What is the LCM (Least Common Multiple) of 6 and 8?',
    answer: '24',
    options: ['12', '16', '24', '48'],
    hint1: 'List the multiples of each number until you find the first one in common.',
    hint2: 'Multiples of 6: 6, 12, 18, 24, 30... Multiples of 8: 8, 16, 24, 32... The first common one is?',
    explanation:
      'Multiples of 6: 6, 12, 18, 24... Multiples of 8: 8, 16, 24... The smallest common multiple is 24.',
  },
  {
    id: 'sof4-paper3-37',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A pizza costs Rs 240. Five friends share the cost equally. If one friend decides to pay for 2 shares, how much does that friend pay?',
    answer: 'Rs 96',
    options: ['Rs 48', 'Rs 80', 'Rs 96', 'Rs 120'],
    hint1: 'First find each person\'s share, then double it.',
    hint2: 'Each share = 240 ÷ 5 = Rs 48. Two shares = 48 × 2.',
    explanation:
      'Each share = Rs 240 ÷ 5 = Rs 48. Two shares = Rs 48 × 2 = Rs 96.',
  },
  {
    id: 'sof4-paper3-38',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'The population of a village is 4,528. If 1,365 are children and 948 are elderly, how many are adults?',
    answer: '2,215',
    options: ['2,115', '2,215', '2,315', '2,415'],
    hint1: 'Adults = Total - Children - Elderly.',
    hint2: '4,528 - 1,365 = 3,163. Then 3,163 - 948 = ?',
    explanation:
      'Adults = 4,528 - 1,365 - 948 = 2,215.',
  },
  {
    id: 'sof4-paper3-39',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A train is 250 m long and travels at 50 m per second. How long will it take to completely pass through a 750 m tunnel?',
    answer: '20 seconds',
    options: ['15 seconds', '18 seconds', '20 seconds', '25 seconds'],
    hint1: 'The train must cover its own length plus the tunnel length.',
    hint2: 'Total distance = 250 + 750 = 1,000 m. Time = Distance ÷ Speed = 1,000 ÷ 50.',
    explanation:
      'Total distance = train length + tunnel length = 250 + 750 = 1,000 m. Time = 1,000 ÷ 50 = 20 seconds.',
  },
  {
    id: 'sof4-paper3-40',
    topicId: 'sof-imo-class4',
    subtopicId: 'sof4-paper3',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A fruit seller has 360 mangoes. He sells 2/5 on Monday and 1/3 of the remainder on Tuesday. How many mangoes are left?',
    answer: '144',
    options: ['120', '132', '144', '168'],
    hint1: 'Find how many are sold each day step by step.',
    hint2: 'Monday: 2/5 of 360 = 144 sold. Remaining = 216. Tuesday: 1/3 of 216 = 72 sold. Left = 216 - 72.',
    explanation:
      'Monday: 2/5 × 360 = 144 sold. Remaining = 360 - 144 = 216. Tuesday: 1/3 × 216 = 72 sold. Left = 216 - 72 = 144.',
  },
]
