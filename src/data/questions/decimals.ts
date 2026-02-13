import type { Question } from '../types'

export const questions: Question[] = [
  // ============================================================
  // PLACE VALUE (dec-pv-1 through dec-pv-10)
  // ============================================================

  // Level 1 - Tenths only
  {
    id: 'dec-pv-1',
    topicId: 'decimals',
    subtopicId: 'place-value',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'In the number 3.7, what does the 7 represent?',
    answer: '7 tenths',
    options: ['7 ones', '7 tenths', '7 hundredths', '7 tens'],
    hint1: 'The digit right after the decimal point is in the tenths place.',
    hint2: 'Tenths means the number is divided into 10 equal parts.',
    explanation:
      'In 3.7, the 3 is in the ones place and the 7 is in the tenths place, so it represents 7 tenths (7/10 or 0.7).',
  },
  {
    id: 'dec-pv-2',
    topicId: 'decimals',
    subtopicId: 'place-value',
    difficulty: 1,
    type: 'fill-in',
    question: 'Write the decimal for "five and two tenths."',
    answer: '5.2',
    hint1: '"Five and" tells you the whole number part is 5.',
    hint2: '"Two tenths" means a 2 goes right after the decimal point.',
    explanation:
      '"Five and two tenths" is written as 5.2. The word "and" tells you where the decimal point goes.',
  },

  // Level 2 - Tenths and hundredths
  {
    id: 'dec-pv-3',
    topicId: 'decimals',
    subtopicId: 'place-value',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is the value of the digit 4 in the number 6.45?',
    answer: '4 tenths',
    options: ['4 ones', '4 tenths', '4 hundredths', '4 thousandths'],
    hint1: 'Count the positions after the decimal point. The first position is tenths.',
    hint2: 'In 6.45, the 4 is in the first spot after the decimal.',
    explanation:
      'In 6.45, the 4 is in the tenths place (first digit after the decimal point), so it represents 4 tenths (0.4).',
  },
  {
    id: 'dec-pv-4',
    topicId: 'decimals',
    subtopicId: 'place-value',
    difficulty: 2,
    type: 'true-false',
    question: 'In the number 9.08, the digit 8 is in the hundredths place.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'After the decimal: first position is tenths, second is hundredths.',
    hint2: 'In 9.08, the 0 is in the tenths place. Where does that put the 8?',
    explanation:
      'True. In 9.08, the 0 is in the tenths place and the 8 is in the hundredths place, representing 8/100 or 0.08.',
  },

  // Level 3 - Thousandths, multi-step
  {
    id: 'dec-pv-5',
    topicId: 'decimals',
    subtopicId: 'place-value',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'Which number has a 6 in the thousandths place?',
    answer: '4.326',
    options: ['6.432', '4.632', '4.362', '4.326'],
    hint1: 'The thousandths place is the third digit after the decimal point.',
    hint2: 'Count: tenths, hundredths, thousandths. Check each option for a 6 in the third spot.',
    explanation:
      'In 4.326: the 3 is in tenths, 2 is in hundredths, and 6 is in thousandths. That is the correct answer.',
  },
  {
    id: 'dec-pv-6',
    topicId: 'decimals',
    subtopicId: 'place-value',
    difficulty: 3,
    type: 'fill-in',
    question:
      'Write the number that has 2 ones, 0 tenths, 5 hundredths, and 3 thousandths.',
    answer: '2.053',
    hint1: 'Start with the ones: 2. Then build the decimal part digit by digit.',
    hint2: '0 tenths means the first decimal digit is 0, then 5, then 3.',
    explanation:
      '2 ones = 2, 0 tenths = .0, 5 hundredths = .05, 3 thousandths = .053. The number is 2.053.',
  },

  // Level 4 - Complex
  {
    id: 'dec-pv-7',
    topicId: 'decimals',
    subtopicId: 'place-value',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'How many times greater is the 5 in 3.523 than the 3 in the same number (considering the 3 in the thousandths place)?',
    answer: '100',
    options: ['10', '100', '1000', '50'],
    hint1: 'First figure out the value of the 5 (tenths) and the value of the 3 (thousandths).',
    hint2: '5 tenths = 0.5 and 3 thousandths = 0.003. But the question asks about the digits, not the full values. Compare 1 tenth to 1 thousandth.',
    explanation:
      'The 5 is in the tenths place (value = 5/10) and the 3 is in the thousandths place (value = 3/1000). Each place is 10 times the next, and tenths to thousandths spans 2 jumps: 10 x 10 = 100. So the 5 digit sits in a place that is 100 times greater.',
  },
  {
    id: 'dec-pv-8',
    topicId: 'decimals',
    subtopicId: 'place-value',
    difficulty: 4,
    type: 'fill-in',
    question:
      'In 47.619, if you move the digit 6 one place to the left, the number becomes 47.619 -> ?. What is the new value of the digit 6?',
    answer: '6',
    hint1: 'The 6 is currently in the tenths place (0.6). One place to the left is the ones place.',
    hint2: 'Moving from tenths to ones means the value goes from 6/10 to 6/1.',
    explanation:
      'The 6 in 47.619 is in the tenths place, with a value of 0.6. Moving it one place to the left puts it in the ones place, where its value becomes 6.',
  },

  // Level 5 - Challenging
  {
    id: 'dec-pv-9',
    topicId: 'decimals',
    subtopicId: 'place-value',
    difficulty: 5,
    type: 'fill-in',
    question:
      'A scientist measures a cell as 0.004507 meters long. What is the value of the digit 5 in this number? Write your answer as a decimal.',
    answer: '0.0005',
    hint1: 'Count the places: 0, 0, 4, 5, 0, 7. The 5 is in the ten-thousandths place.',
    hint2: 'Ten-thousandths means 5/10000 = 0.0005.',
    explanation:
      'In 0.004507, the places are: 0 tenths, 0 hundredths, 4 thousandths, 5 ten-thousandths, 0 hundred-thousandths, 7 millionths. The digit 5 is in the ten-thousandths place, so its value is 5/10,000 = 0.0005.',
  },
  {
    id: 'dec-pv-10',
    topicId: 'decimals',
    subtopicId: 'place-value',
    difficulty: 5,
    type: 'multiple-choice',
    question:
      'Which of the following correctly shows 8.040200 written with NO unnecessary trailing zeros?',
    answer: '8.0402',
    options: ['8.42', '8.0402', '8.04020', '8.402'],
    hint1: 'Trailing zeros after the last non-zero digit (to the right of the decimal) can be dropped.',
    hint2: 'Start from the right: the final "00" can go, but the zero between 4 and 2 matters because it holds the place.',
    explanation:
      '8.040200 has trailing zeros at the end. Removing them gives 8.0402. The 0 between 4 and 2 must stay because it holds the hundredths place.',
  },

  // ============================================================
  // ADDING & SUBTRACTING DECIMALS (dec-addsub-1 through dec-addsub-10)
  // ============================================================

  // Level 1 - Tenths only
  {
    id: 'dec-addsub-1',
    topicId: 'decimals',
    subtopicId: 'add-sub-dec',
    difficulty: 1,
    type: 'fill-in',
    question: 'What is 2.3 + 1.4?',
    answer: '3.7',
    hint1: 'Line up the decimal points, then add each column.',
    hint2: '3 tenths + 4 tenths = 7 tenths. 2 ones + 1 one = 3 ones.',
    explanation:
      '2.3 + 1.4: Add the tenths (3 + 4 = 7) and the ones (2 + 1 = 3). The answer is 3.7.',
  },
  {
    id: 'dec-addsub-2',
    topicId: 'decimals',
    subtopicId: 'add-sub-dec',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What is 5.8 - 2.5?',
    answer: '3.3',
    options: ['3.3', '3.7', '2.3', '3.13'],
    hint1: 'Line up the decimal points and subtract column by column.',
    hint2: '8 tenths - 5 tenths = 3 tenths. 5 ones - 2 ones = 3 ones.',
    explanation:
      '5.8 - 2.5: Subtract tenths (8 - 5 = 3) and ones (5 - 2 = 3). The answer is 3.3.',
  },

  // Level 2 - Tenths and hundredths
  {
    id: 'dec-addsub-3',
    topicId: 'decimals',
    subtopicId: 'add-sub-dec',
    difficulty: 2,
    type: 'fill-in',
    question: 'What is 4.56 + 3.27?',
    answer: '7.83',
    hint1: 'Add the hundredths first (6 + 7), then the tenths, then the ones.',
    hint2: '6 + 7 = 13, write 3 carry 1. Then 5 + 2 + 1 = 8. Then 4 + 3 = 7.',
    explanation:
      '4.56 + 3.27: Hundredths: 6 + 7 = 13 (write 3, carry 1). Tenths: 5 + 2 + 1 = 8. Ones: 4 + 3 = 7. Answer: 7.83.',
  },
  {
    id: 'dec-addsub-4',
    topicId: 'decimals',
    subtopicId: 'add-sub-dec',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 10.00 - 3.75?',
    answer: '6.25',
    options: ['6.25', '6.35', '7.25', '6.75'],
    hint1: 'You need to borrow. Think of 10.00 as 10 dollars and subtract $3.75.',
    hint2: 'If you have a $10 bill and spend $3.75, how much change do you get?',
    explanation:
      '10.00 - 3.75 = 6.25. Think of it as money: $10.00 - $3.75 = $6.25.',
  },

  // Level 3 - Thousandths, multi-step
  {
    id: 'dec-addsub-5',
    topicId: 'decimals',
    subtopicId: 'add-sub-dec',
    difficulty: 3,
    type: 'fill-in',
    question: 'What is 12.345 + 7.658?',
    answer: '20.003',
    hint1: 'Line up all three decimal places and add from right to left.',
    hint2: 'Thousandths: 5 + 8 = 13 (write 3, carry 1). Hundredths: 4 + 5 + 1 = 10 (write 0, carry 1). Tenths: 3 + 6 + 1 = 10 (write 0, carry 1). Ones: 12 + 7 + 1 = 20.',
    explanation:
      '12.345 + 7.658 = 20.003. Working right to left with carrying gives us 20.003.',
  },
  {
    id: 'dec-addsub-6',
    topicId: 'decimals',
    subtopicId: 'add-sub-dec',
    difficulty: 3,
    type: 'multiple-choice',
    question: 'A rope is 8.250 meters long. You cut off 2.875 meters. How much rope is left?',
    answer: '5.375 meters',
    options: ['5.375 meters', '5.475 meters', '5.385 meters', '6.375 meters'],
    hint1: 'This is a subtraction problem: 8.250 - 2.875.',
    hint2: 'You will need to borrow. Start from the thousandths: 0 - 5 requires borrowing.',
    explanation:
      '8.250 - 2.875 = 5.375. You borrow across multiple columns: thousandths (10 - 5 = 5), hundredths (4 - 7, borrow again to get 14 - 7 = 7), tenths (1 - 8, borrow to get 11 - 8 = 3), ones (7 - 2 = 5).',
  },

  // Level 4 - Complex
  {
    id: 'dec-addsub-7',
    topicId: 'decimals',
    subtopicId: 'add-sub-dec',
    difficulty: 4,
    type: 'fill-in',
    question:
      'Find the result: 15.6 + 3.47 - 9.083. (Write your answer to three decimal places.)',
    answer: '9.987',
    hint1: 'First add 15.6 + 3.47, then subtract 9.083. Pad with zeros: 15.600 + 3.470 - 9.083.',
    hint2: '15.600 + 3.470 = 19.070. Then 19.070 - 9.083 = ?',
    explanation:
      'Step 1: 15.600 + 3.470 = 19.070. Step 2: 19.070 - 9.083 = 9.987.',
  },
  {
    id: 'dec-addsub-8',
    topicId: 'decimals',
    subtopicId: 'add-sub-dec',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'Maya ran 3.75 km in the morning and 4.6 km in the evening. Her goal was 10 km. How much more does she need to run?',
    answer: '1.65 km',
    options: ['1.65 km', '2.65 km', '1.75 km', '1.55 km'],
    hint1: 'First find the total she already ran, then subtract from 10.',
    hint2: '3.75 + 4.60 = 8.35. Now subtract: 10.00 - 8.35.',
    explanation:
      'Maya ran 3.75 + 4.60 = 8.35 km. She needs 10.00 - 8.35 = 1.65 km more.',
  },

  // Level 5 - Challenging real-world
  {
    id: 'dec-addsub-9',
    topicId: 'decimals',
    subtopicId: 'add-sub-dec',
    difficulty: 5,
    type: 'fill-in',
    question:
      'A chemist mixes three solutions: 2.375 liters, 0.968 liters, and 1.457 liters. She then pours out 1.625 liters for an experiment. How many liters remain?',
    answer: '3.175',
    hint1: 'Add all three amounts first, then subtract what was poured out.',
    hint2: '2.375 + 0.968 + 1.457 = 4.800. Then 4.800 - 1.625 = ?',
    explanation:
      '2.375 + 0.968 + 1.457 = 4.800 liters total. After pouring out 1.625 liters: 4.800 - 1.625 = 3.175 liters remain.',
  },
  {
    id: 'dec-addsub-10',
    topicId: 'decimals',
    subtopicId: 'add-sub-dec',
    difficulty: 5,
    type: 'multiple-choice',
    question:
      'A bank account has $125.50. Three transactions occur: deposit $48.75, withdrawal $63.20, and deposit $14.95. What is the final balance?',
    answer: '$126.00',
    options: ['$126.00', '$125.00', '$126.50', '$124.00'],
    hint1: 'Apply each transaction one at a time: add deposits, subtract withdrawals.',
    hint2: '$125.50 + $48.75 = $174.25. Then $174.25 - $63.20 = $111.05. Then $111.05 + $14.95 = ?',
    explanation:
      '$125.50 + $48.75 = $174.25. Then $174.25 - $63.20 = $111.05. Then $111.05 + $14.95 = $126.00.',
  },

  // ============================================================
  // MULTIPLYING & DIVIDING DECIMALS (dec-muldiv-1 through dec-muldiv-10)
  // ============================================================

  // Level 1 - Tenths only
  {
    id: 'dec-muldiv-1',
    topicId: 'decimals',
    subtopicId: 'mul-div-dec',
    difficulty: 1,
    type: 'fill-in',
    question: 'What is 0.3 x 2?',
    answer: '0.6',
    hint1: 'Multiply 3 x 2 = 6, then put the decimal point back.',
    hint2: '0.3 has one decimal place, so your answer needs one decimal place too.',
    explanation:
      '0.3 x 2 = 0.6. Multiply 3 x 2 = 6, and since 0.3 has one decimal place, the answer is 0.6.',
  },
  {
    id: 'dec-muldiv-2',
    topicId: 'decimals',
    subtopicId: 'mul-div-dec',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What is 4.8 / 2?',
    answer: '2.4',
    options: ['2.4', '2.8', '24', '0.24'],
    hint1: 'Divide as if it were 48 / 2, then put the decimal point in the right spot.',
    hint2: '48 / 2 = 24. Since 4.8 has one decimal place, so does the answer.',
    explanation:
      '4.8 / 2 = 2.4. Think of it as 48 tenths divided by 2 = 24 tenths = 2.4.',
  },

  // Level 2 - Tenths and hundredths
  {
    id: 'dec-muldiv-3',
    topicId: 'decimals',
    subtopicId: 'mul-div-dec',
    difficulty: 2,
    type: 'fill-in',
    question: 'What is 0.6 x 0.4?',
    answer: '0.24',
    hint1: 'Multiply 6 x 4 = 24. Then count the total decimal places in both numbers.',
    hint2: '0.6 has 1 decimal place, 0.4 has 1 decimal place. Total = 2 decimal places in the answer.',
    explanation:
      '0.6 x 0.4: Multiply 6 x 4 = 24. Total decimal places = 1 + 1 = 2. So the answer is 0.24.',
  },
  {
    id: 'dec-muldiv-4',
    topicId: 'decimals',
    subtopicId: 'mul-div-dec',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is 7.56 / 4?',
    answer: '1.89',
    options: ['1.89', '1.98', '18.9', '0.189'],
    hint1: 'Divide 756 by 4, then place the decimal correctly.',
    hint2: '756 / 4 = 189. Since 7.56 has two decimal places, the answer has two decimal places: 1.89.',
    explanation:
      '7.56 / 4 = 1.89. Dividing: 756 hundredths / 4 = 189 hundredths = 1.89.',
  },

  // Level 3 - Thousandths, multi-step
  {
    id: 'dec-muldiv-5',
    topicId: 'decimals',
    subtopicId: 'mul-div-dec',
    difficulty: 3,
    type: 'fill-in',
    question: 'What is 2.5 x 0.12?',
    answer: '0.3',
    hint1: 'Multiply 25 x 12 first, then count decimal places.',
    hint2: '25 x 12 = 300. Total decimal places: 1 + 2 = 3. So place the decimal 3 spots from the right: 0.300 = 0.3.',
    explanation:
      '2.5 x 0.12: Multiply 25 x 12 = 300. Total decimal places = 3. Answer: 0.300 = 0.3.',
  },
  {
    id: 'dec-muldiv-6',
    topicId: 'decimals',
    subtopicId: 'mul-div-dec',
    difficulty: 3,
    type: 'multiple-choice',
    question: 'What is 15.6 / 0.3?',
    answer: '52',
    options: ['5.2', '52', '520', '0.52'],
    hint1: 'To divide by a decimal, multiply both numbers by 10 to make the divisor a whole number.',
    hint2: '15.6 / 0.3 = 156 / 3. Now divide: 156 / 3 = ?',
    explanation:
      '15.6 / 0.3: Multiply both by 10 to get 156 / 3 = 52.',
  },

  // Level 4 - Complex
  {
    id: 'dec-muldiv-7',
    topicId: 'decimals',
    subtopicId: 'mul-div-dec',
    difficulty: 4,
    type: 'fill-in',
    question: 'What is 3.14 x 2.5?',
    answer: '7.85',
    hint1: 'Multiply 314 x 25, then count the total decimal places (2 + 1 = 3).',
    hint2: '314 x 25 = 7850. Place the decimal 3 spots from the right: 7.850 = 7.85.',
    explanation:
      '3.14 x 2.5: 314 x 25 = 7850. With 3 decimal places total, the answer is 7.850 = 7.85.',
  },
  {
    id: 'dec-muldiv-8',
    topicId: 'decimals',
    subtopicId: 'mul-div-dec',
    difficulty: 4,
    type: 'multiple-choice',
    question: 'A car travels 156.8 km on 8.4 liters of fuel. How many km per liter does it get? (Round to one decimal place.)',
    answer: '18.7 km/L',
    options: ['18.7 km/L', '17.8 km/L', '19.2 km/L', '18.3 km/L'],
    hint1: 'Divide distance by fuel: 156.8 / 8.4.',
    hint2: 'Multiply both by 10: 1568 / 84. Divide step by step.',
    explanation:
      '156.8 / 8.4 = 1568 / 84. 84 x 18 = 1512, remainder 56. 560 / 84 = 6.67. So the answer rounds to approximately 18.7 km/L.',
  },

  // Level 5 - Challenging real-world
  {
    id: 'dec-muldiv-9',
    topicId: 'decimals',
    subtopicId: 'mul-div-dec',
    difficulty: 5,
    type: 'fill-in',
    question:
      'A rectangular garden is 12.5 meters long and 8.4 meters wide. What is its area in square meters?',
    answer: '105',
    hint1: 'Area = length x width. Multiply 12.5 x 8.4.',
    hint2: '125 x 84 = 10500. Total decimal places = 1 + 1 = 2. So the answer is 105.00 = 105.',
    explanation:
      'Area = 12.5 x 8.4. Multiply: 125 x 84 = 10,500. With 2 decimal places, that is 105.00 = 105 square meters.',
  },
  {
    id: 'dec-muldiv-10',
    topicId: 'decimals',
    subtopicId: 'mul-div-dec',
    difficulty: 5,
    type: 'multiple-choice',
    question:
      'A factory produces 2,847.5 widgets in 12.5 hours. If it runs for 0.8 hours overtime, how many additional widgets are produced at the same rate?',
    answer: '182.24',
    options: ['182.24', '178.50', '185.00', '181.80'],
    hint1: 'First find the rate: 2847.5 / 12.5 widgets per hour. Then multiply by 0.8.',
    hint2: '2847.5 / 12.5 = 227.8 widgets/hour. Then 227.8 x 0.8 = ?',
    explanation:
      'Rate = 2847.5 / 12.5 = 227.8 widgets per hour. Additional widgets = 227.8 x 0.8 = 182.24.',
  },

  // ============================================================
  // CONVERTING FRACTIONS AND DECIMALS (dec-conv-1 through dec-conv-10)
  // ============================================================

  // Level 1 - Tenths only
  {
    id: 'dec-conv-1',
    topicId: 'decimals',
    subtopicId: 'converting',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What is 1/2 as a decimal?',
    answer: '0.5',
    options: ['0.2', '0.5', '0.12', '1.2'],
    hint1: 'Divide the numerator by the denominator: 1 divided by 2.',
    hint2: 'Think about money: half of a dollar is 50 cents, or $0.50.',
    explanation:
      '1/2 = 1 divided by 2 = 0.5. Half of 1 is 0.5.',
  },
  {
    id: 'dec-conv-2',
    topicId: 'decimals',
    subtopicId: 'converting',
    difficulty: 1,
    type: 'fill-in',
    question: 'Write 0.7 as a fraction in simplest form. (Write as a/b.)',
    answer: '7/10',
    hint1: '0.7 means 7 tenths.',
    hint2: 'Seven tenths as a fraction is 7 over 10. Is it already in simplest form?',
    explanation:
      '0.7 = 7/10. Since 7 and 10 share no common factor other than 1, it is already simplified.',
  },

  // Level 2 - Tenths and hundredths
  {
    id: 'dec-conv-3',
    topicId: 'decimals',
    subtopicId: 'converting',
    difficulty: 2,
    type: 'fill-in',
    question: 'What is 3/4 as a decimal?',
    answer: '0.75',
    hint1: 'Divide 3 by 4. You can also think: what times 4 equals 3?',
    hint2: '3 / 4 = 0.75. Think of it as 75 cents out of a dollar.',
    explanation:
      '3/4 = 3 divided by 4 = 0.75. You can also convert: 3/4 = 75/100 = 0.75.',
  },
  {
    id: 'dec-conv-4',
    topicId: 'decimals',
    subtopicId: 'converting',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'Which fraction equals 0.25?',
    answer: '1/4',
    options: ['1/5', '2/5', '1/4', '1/3'],
    hint1: '0.25 = 25 hundredths = 25/100. Now simplify.',
    hint2: '25/100: divide both by 25. What do you get?',
    explanation:
      '0.25 = 25/100 = 1/4. Dividing numerator and denominator by 25 gives 1/4.',
  },

  // Level 3 - Thousandths, multi-step
  {
    id: 'dec-conv-5',
    topicId: 'decimals',
    subtopicId: 'converting',
    difficulty: 3,
    type: 'fill-in',
    question: 'What is 5/8 as a decimal?',
    answer: '0.625',
    hint1: 'Divide 5 by 8 using long division.',
    hint2: '5.000 / 8: 8 goes into 50 six times (48), remainder 2. Bring down 0: 20 / 8 = 2 remainder 4. Bring down 0: 40 / 8 = 5.',
    explanation:
      '5/8 = 0.625. Using long division: 5.000 / 8 = 0.625.',
  },
  {
    id: 'dec-conv-6',
    topicId: 'decimals',
    subtopicId: 'converting',
    difficulty: 3,
    type: 'multiple-choice',
    question: 'Which decimal is equal to 7/20?',
    answer: '0.35',
    options: ['0.72', '0.35', '0.307', '3.5'],
    hint1: 'Convert 7/20 so the denominator is 100.',
    hint2: '20 x 5 = 100, so multiply the numerator by 5 too: 7 x 5 = 35. So 7/20 = 35/100.',
    explanation:
      '7/20 = 35/100 = 0.35. Multiply numerator and denominator by 5 to get hundredths.',
  },

  // Level 4 - Complex
  {
    id: 'dec-conv-7',
    topicId: 'decimals',
    subtopicId: 'converting',
    difficulty: 4,
    type: 'true-false',
    question: 'The fraction 1/3 can be written as an exact terminating decimal.',
    answer: 'False',
    options: ['True', 'False'],
    hint1: 'Try dividing 1 by 3. Does it ever end?',
    hint2: '1 / 3 = 0.333333... The 3 repeats forever.',
    explanation:
      'False. 1/3 = 0.333... (repeating). It never terminates because 3 is not a factor of any power of 10.',
  },
  {
    id: 'dec-conv-8',
    topicId: 'decimals',
    subtopicId: 'converting',
    difficulty: 4,
    type: 'fill-in',
    question: 'Write 2.375 as a fraction in simplest form. (Write as a/b.)',
    answer: '19/8',
    hint1: 'First write 2.375 as a fraction: 2375/1000. Then simplify.',
    hint2: '2375/1000: divide both by 125. 2375 / 125 = 19, 1000 / 125 = 8.',
    explanation:
      '2.375 = 2375/1000. The GCD of 2375 and 1000 is 125. So 2375/125 = 19 and 1000/125 = 8. The answer is 19/8.',
  },

  // Level 5 - Challenging
  {
    id: 'dec-conv-9',
    topicId: 'decimals',
    subtopicId: 'converting',
    difficulty: 5,
    type: 'multiple-choice',
    question:
      'Which of the following fractions produces the longest repeating block before the pattern repeats?',
    answer: '1/7',
    options: ['1/3', '1/6', '1/7', '1/9'],
    hint1: 'Convert each fraction to a decimal and count how many digits repeat.',
    hint2: '1/3 = 0.333... (1 digit repeats). 1/6 = 0.1666... (1 digit repeats). 1/7 = 0.142857142857... (how many digits?). 1/9 = 0.111... (1 digit repeats).',
    explanation:
      '1/7 = 0.142857142857... with a repeating block of 6 digits (142857). The others have repeating blocks of only 1 digit. So 1/7 has the longest repeating block.',
  },
  {
    id: 'dec-conv-10',
    topicId: 'decimals',
    subtopicId: 'converting',
    difficulty: 5,
    type: 'fill-in',
    question:
      'A recipe calls for 0.875 cups of sugar. Express this as a fraction of a cup in simplest form. (Write as a/b.)',
    answer: '7/8',
    hint1: '0.875 = 875/1000. Find the greatest common divisor of 875 and 1000.',
    hint2: '875 = 7 x 125. 1000 = 8 x 125. So 875/1000 simplifies to 7/8.',
    explanation:
      '0.875 = 875/1000. The GCD is 125. Dividing both by 125: 875/125 = 7, 1000/125 = 8. So 0.875 = 7/8.',
  },

  // ============================================================
  // ROUNDING DECIMALS (dec-round-1 through dec-round-10)
  // ============================================================

  // Level 1 - Tenths only
  {
    id: 'dec-round-1',
    topicId: 'decimals',
    subtopicId: 'rounding',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'Round 3.7 to the nearest whole number.',
    answer: '4',
    options: ['3', '4', '3.5', '3.7'],
    hint1: 'Look at the digit in the tenths place. Is it 5 or more?',
    hint2: 'The tenths digit is 7, which is 5 or more, so round up.',
    explanation:
      '3.7 rounded to the nearest whole number is 4. Since the tenths digit (7) is 5 or more, we round up from 3 to 4.',
  },
  {
    id: 'dec-round-2',
    topicId: 'decimals',
    subtopicId: 'rounding',
    difficulty: 1,
    type: 'fill-in',
    question: 'Round 6.2 to the nearest whole number.',
    answer: '6',
    hint1: 'Look at the tenths digit. Is it less than 5?',
    hint2: 'The tenths digit is 2, which is less than 5, so round down.',
    explanation:
      '6.2 rounded to the nearest whole number is 6. The tenths digit (2) is less than 5, so we round down.',
  },

  // Level 2 - Tenths and hundredths
  {
    id: 'dec-round-3',
    topicId: 'decimals',
    subtopicId: 'rounding',
    difficulty: 2,
    type: 'fill-in',
    question: 'Round 4.567 to the nearest tenth.',
    answer: '4.6',
    hint1: 'To round to the nearest tenth, look at the hundredths digit.',
    hint2: 'The hundredths digit is 6 (5 or more), so round the tenths digit up from 5 to 6.',
    explanation:
      '4.567 rounded to the nearest tenth is 4.6. The hundredths digit (6) is 5 or more, so the tenths digit rounds up from 5 to 6.',
  },
  {
    id: 'dec-round-4',
    topicId: 'decimals',
    subtopicId: 'rounding',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'Round 12.34 to the nearest tenth.',
    answer: '12.3',
    options: ['12.3', '12.4', '12.30', '12.35'],
    hint1: 'Look at the hundredths digit (4). Is it 5 or more?',
    hint2: 'The hundredths digit is 4, which is less than 5. Keep the tenths digit as is.',
    explanation:
      '12.34 rounded to the nearest tenth is 12.3. The hundredths digit (4) is less than 5, so we keep the tenths digit at 3.',
  },

  // Level 3 - Thousandths, multi-step
  {
    id: 'dec-round-5',
    topicId: 'decimals',
    subtopicId: 'rounding',
    difficulty: 3,
    type: 'fill-in',
    question: 'Round 8.4951 to the nearest hundredth.',
    answer: '8.50',
    hint1: 'To round to the nearest hundredth, look at the thousandths digit.',
    hint2: 'The thousandths digit is 5. Since it is 5 or more, round the hundredths digit up. But 9 + 1 = 10, so you need to carry!',
    explanation:
      '8.4951 rounded to the nearest hundredth is 8.50. The thousandths digit is 5, so we round up. The 9 in hundredths becomes 10, which carries over, making the tenths digit go from 4 to 5.',
  },
  {
    id: 'dec-round-6',
    topicId: 'decimals',
    subtopicId: 'rounding',
    difficulty: 3,
    type: 'multiple-choice',
    question: 'Round 0.9965 to the nearest thousandth.',
    answer: '0.997',
    options: ['0.996', '0.997', '1.000', '0.9965'],
    hint1: 'To round to the nearest thousandth, look at the ten-thousandths digit.',
    hint2: 'The ten-thousandths digit is 5. So round the thousandths digit (6) up to 7.',
    explanation:
      '0.9965 rounded to the nearest thousandth is 0.997. The ten-thousandths digit is 5, so we round up from 0.996 to 0.997.',
  },

  // Level 4 - Complex
  {
    id: 'dec-round-7',
    topicId: 'decimals',
    subtopicId: 'rounding',
    difficulty: 4,
    type: 'true-false',
    question:
      'When you round 9.9999 to the nearest hundredth, the result is 10.00.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Round step by step. Look at the thousandths digit to decide what happens to the hundredths.',
    hint2: 'The thousandths digit is 9 (round up). Hundredths: 9 + 1 = 10, carry. Tenths: 9 + 1 = 10, carry. Ones: 9 + 1 = 10.',
    explanation:
      'True. Rounding 9.9999 to the nearest hundredth: the thousandths digit is 9, so round up. This causes a chain of carries: 9.9999 -> 10.00.',
  },
  {
    id: 'dec-round-8',
    topicId: 'decimals',
    subtopicId: 'rounding',
    difficulty: 4,
    type: 'fill-in',
    question:
      'A calculator shows the result 7.34999. If you round to the nearest tenth, what do you get?',
    answer: '7.3',
    hint1: 'To round to the nearest tenth, only look at the hundredths digit.',
    hint2: 'The hundredths digit is 4 (less than 5). Even though there are lots of 9s after it, we only look at the next digit.',
    explanation:
      '7.34999 rounded to the nearest tenth is 7.3. We look at the hundredths digit (4), which is less than 5, so the tenths digit stays at 3. The trailing 9s do not matter.',
  },

  // Level 5 - Challenging real-world
  {
    id: 'dec-round-9',
    topicId: 'decimals',
    subtopicId: 'rounding',
    difficulty: 5,
    type: 'multiple-choice',
    question:
      'A store sells items for $3.33 each. You buy 3 items. The exact total is $9.99. If the store rounds to the nearest dollar, you pay $10.00. How much extra do you pay compared to the exact price?',
    answer: '$0.01',
    options: ['$0.01', '$0.10', '$0.00', '$1.00'],
    hint1: 'Find the difference between the rounded price and the exact price.',
    hint2: '$10.00 - $9.99 = ?',
    explanation:
      'The exact total is $9.99. Rounded to the nearest dollar, it becomes $10.00. The difference is $10.00 - $9.99 = $0.01.',
  },
  {
    id: 'dec-round-10',
    topicId: 'decimals',
    subtopicId: 'rounding',
    difficulty: 5,
    type: 'fill-in',
    question:
      'A scientist divides 22 by 7 to approximate pi. The calculator shows 3.142857142857... Round this to the nearest ten-thousandth.',
    answer: '3.1429',
    hint1: 'The ten-thousandths place is the fourth digit after the decimal point.',
    hint2: 'The digits after the decimal are 1, 4, 2, 8, 5, 7... Look at the fifth digit (5) to decide whether to round the fourth digit (8) up or keep it.',
    explanation:
      '3.142857... rounded to the nearest ten-thousandth: The ten-thousandths digit is 8. The next digit is 5, so we round up: 3.1429.',
  },
]
