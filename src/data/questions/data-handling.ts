import { Question } from '../types'

export const questions: Question[] = [
  // ─────────────────────────────────────────────
  // TABLES & TALLY MARKS (tables-tally) — 20 questions
  // ─────────────────────────────────────────────

  // Level 1 (Easy): Read values from simple frequency tables (3-4 rows)
  {
    id: 'dh-tables-1',
    topicId: 'data-handling',
    subtopicId: 'tables-tally',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'A frequency table shows the favourite fruit of students: Mango = 12, Banana = 8, Apple = 15, Guava = 5. Which fruit is the most popular?',
    answer: 'Apple',
    options: ['Mango', 'Banana', 'Apple', 'Guava'],
    hint1: 'Look for the fruit with the highest number.',
    hint2: 'Compare: 12, 8, 15, and 5. Which is the largest?',
    explanation:
      'Apple has the highest frequency of 15, making it the most popular fruit.',
  },
  {
    id: 'dh-tables-2',
    topicId: 'data-handling',
    subtopicId: 'tables-tally',
    difficulty: 1,
    type: 'fill-in',
    question:
      'A table shows the number of students in each house: Red House = 23, Blue House = 19, Green House = 27. How many students are in Red House?',
    answer: '23',
    hint1: 'Read the value directly from the table for Red House.',
    hint2: 'The table says Red House = 23.',
    explanation:
      'The table directly tells us Red House has 23 students.',
  },
  {
    id: 'dh-tables-3',
    topicId: 'data-handling',
    subtopicId: 'tables-tally',
    difficulty: 1,
    type: 'true-false',
    question:
      'A frequency table shows: Cricket = 18, Football = 14, Kabaddi = 9, Badminton = 11. True or false: Football has more fans than Kabaddi.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Compare the numbers for Football and Kabaddi.',
    hint2: 'Football = 14 and Kabaddi = 9. Is 14 greater than 9?',
    explanation:
      'True. Football (14) has more fans than Kabaddi (9), since 14 > 9.',
  },
  {
    id: 'dh-tables-4',
    topicId: 'data-handling',
    subtopicId: 'tables-tally',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'A table shows the number of books read by students: Aarav = 5, Priya = 8, Ravi = 3, Meera = 6. Who read the fewest books?',
    answer: 'Ravi',
    options: ['Aarav', 'Priya', 'Ravi', 'Meera'],
    hint1: 'Find the student with the smallest number.',
    hint2: 'Compare: 5, 8, 3, and 6. Which is the smallest?',
    explanation:
      'Ravi read only 3 books, which is the fewest among all four students.',
  },
  {
    id: 'dh-tables-5',
    topicId: 'data-handling',
    subtopicId: 'tables-tally',
    difficulty: 1,
    type: 'fill-in',
    question:
      'A frequency table shows favourite colours: Red = 10, Blue = 16, Yellow = 7, Green = 12. How many students chose Blue?',
    answer: '16',
    hint1: 'Look at the number next to Blue in the table.',
    hint2: 'The table says Blue = 16.',
    explanation:
      'The table directly shows that 16 students chose Blue as their favourite colour.',
  },

  // Level 2 (Medium): Interpret tally marks, find totals, compare categories
  {
    id: 'dh-tables-6',
    topicId: 'data-handling',
    subtopicId: 'tables-tally',
    difficulty: 2,
    type: 'fill-in',
    question:
      'A tally chart shows vehicles passing a school gate: Cars = 𝍸𝍸 𝍸𝍸 III (that is, four groups of 5 plus 3). How many cars passed?',
    answer: '23',
    hint1: 'Each group of tally marks with a cross represents 5. Count the groups and add the extra marks.',
    hint2: 'There are 4 complete groups of 5 = 20, plus 3 more = 23.',
    explanation:
      '4 groups of 5 = 20, plus 3 extra tally marks = 23 cars in total.',
  },
  {
    id: 'dh-tables-7',
    topicId: 'data-handling',
    subtopicId: 'tables-tally',
    difficulty: 2,
    type: 'multiple-choice',
    question:
      'A tally chart shows favourite snacks: Samosa = 14, Vada Pav = 11, Pakora = 9, Chaat = 16. What is the total number of students surveyed?',
    answer: '50',
    options: ['45', '48', '50', '52'],
    hint1: 'Add up all the frequencies.',
    hint2: '14 + 11 = 25, 9 + 16 = 25, so total = 25 + 25.',
    explanation:
      'Total = 14 + 11 + 9 + 16 = 50 students were surveyed.',
  },
  {
    id: 'dh-tables-8',
    topicId: 'data-handling',
    subtopicId: 'tables-tally',
    difficulty: 2,
    type: 'fill-in',
    question:
      'A frequency table shows marks scored in a test: 0–10 = 3 students, 11–20 = 7 students, 21–30 = 12 students, 31–40 = 8 students. How many more students scored 21–30 than 0–10?',
    answer: '9',
    hint1: 'Find the difference between the two groups.',
    hint2: '12 students scored 21–30 and 3 scored 0–10. What is 12 - 3?',
    explanation:
      '12 - 3 = 9. So 9 more students scored in the 21–30 range than in the 0–10 range.',
  },
  {
    id: 'dh-tables-9',
    topicId: 'data-handling',
    subtopicId: 'tables-tally',
    difficulty: 2,
    type: 'true-false',
    question:
      'A tally chart shows animals spotted in a park: Squirrels = 17, Rabbits = 12, Birds = 25, Butterflies = 8. True or false: More than half of all animals spotted were Birds.',
    answer: 'False',
    options: ['True', 'False'],
    hint1: 'First find the total number of animals spotted, then check if Birds are more than half.',
    hint2: 'Total = 17 + 12 + 25 + 8 = 62. Half of 62 = 31. Are 25 birds more than 31?',
    explanation:
      'False. Total = 62, and half of 62 is 31. Birds = 25, which is less than 31, so birds are NOT more than half.',
  },
  {
    id: 'dh-tables-10',
    topicId: 'data-handling',
    subtopicId: 'tables-tally',
    difficulty: 2,
    type: 'multiple-choice',
    question:
      'A frequency table shows the number of siblings: 0 siblings = 6, 1 sibling = 14, 2 siblings = 8, 3 siblings = 2. How many students have at least 1 sibling?',
    answer: '24',
    options: ['20', '22', '24', '30'],
    hint1: '"At least 1" means 1 or more siblings.',
    hint2: 'Add students with 1, 2, and 3 siblings: 14 + 8 + 2.',
    explanation:
      'Students with at least 1 sibling = 14 + 8 + 2 = 24.',
  },

  // Level 3 (Hard): Two-way tables, find missing values
  {
    id: 'dh-tables-11',
    topicId: 'data-handling',
    subtopicId: 'tables-tally',
    difficulty: 3,
    type: 'fill-in',
    question:
      'A two-way table shows students who play Cricket or Football, by gender. Boys who play Cricket = 15, Boys who play Football = 12, Girls who play Cricket = 10. Total students who play Cricket = 25, total who play Football = 20. How many girls play Football?',
    answer: '8',
    hint1: 'Use the total for Football and subtract the boys who play Football.',
    hint2: 'Total Football = 20, Boys Football = 12. Girls Football = 20 - 12.',
    explanation:
      'Girls who play Football = Total Football - Boys Football = 20 - 12 = 8.',
  },
  {
    id: 'dh-tables-12',
    topicId: 'data-handling',
    subtopicId: 'tables-tally',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A two-way table: Vegetarian boys = 18, Non-vegetarian boys = 7, Vegetarian girls = 22, Non-vegetarian girls = 3. How many students are vegetarian in total?',
    answer: '40',
    options: ['25', '35', '40', '50'],
    hint1: 'Add the vegetarian counts for boys and girls.',
    hint2: 'Vegetarian boys = 18, Vegetarian girls = 22. Total = 18 + 22.',
    explanation:
      'Total vegetarians = 18 + 22 = 40.',
  },
  {
    id: 'dh-tables-13',
    topicId: 'data-handling',
    subtopicId: 'tables-tally',
    difficulty: 3,
    type: 'fill-in',
    question:
      'A two-way table shows transport to school: Bus boys = 20, Bus girls = ?, Walk boys = 10, Walk girls = 15. Total Bus = 35, Total Walk = 25. How many girls take the bus?',
    answer: '15',
    hint1: 'Use the total for Bus and subtract Bus boys.',
    hint2: 'Total Bus = 35, Bus boys = 20. Bus girls = 35 - 20.',
    explanation:
      'Bus girls = Total Bus - Bus boys = 35 - 20 = 15.',
  },
  {
    id: 'dh-tables-14',
    topicId: 'data-handling',
    subtopicId: 'tables-tally',
    difficulty: 3,
    type: 'true-false',
    question:
      'A two-way table shows: Class 5 passed = 28, Class 5 failed = 2, Class 6 passed = 25, Class 6 failed = 5. True or false: Class 5 has a higher pass rate than Class 6.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Calculate the pass rate (passed / total) for each class.',
    hint2: 'Class 5: 28/30. Class 6: 25/30. Compare the two fractions.',
    explanation:
      'True. Class 5 pass rate = 28/30 ≈ 93.3%. Class 6 pass rate = 25/30 ≈ 83.3%. So Class 5 has a higher pass rate.',
  },
  {
    id: 'dh-tables-15',
    topicId: 'data-handling',
    subtopicId: 'tables-tally',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A two-way table shows ice cream preferences: Chocolate boys = 14, Vanilla boys = 8, Chocolate girls = 11, Vanilla girls = ?. If the total number of students is 45, how many girls prefer Vanilla?',
    answer: '12',
    options: ['10', '11', '12', '13'],
    hint1: 'Add all known values and subtract from the total.',
    hint2: '14 + 8 + 11 = 33. Vanilla girls = 45 - 33.',
    explanation:
      'Vanilla girls = 45 - (14 + 8 + 11) = 45 - 33 = 12.',
  },

  // Level 4 (Very Hard): Multi-step reasoning from complex tables, draw conclusions
  {
    id: 'dh-tables-16',
    topicId: 'data-handling',
    subtopicId: 'tables-tally',
    difficulty: 4,
    type: 'fill-in',
    question:
      'A frequency table shows test scores: 0–20 = 4, 21–40 = 8, 41–60 = 15, 61–80 = 10, 81–100 = 3. The teacher says students scoring 41 or above pass. What fraction of students passed? Express as a simplified fraction.',
    answer: '7/10',
    hint1: 'First find how many students scored 41 or above, then find the total.',
    hint2: 'Passed = 15 + 10 + 3 = 28. Total = 4 + 8 + 15 + 10 + 3 = 40. Fraction = 28/40.',
    explanation:
      'Passed = 15 + 10 + 3 = 28. Total = 4 + 8 + 15 + 10 + 3 = 40. Fraction = 28/40 = 7/10.',
  },
  {
    id: 'dh-tables-17',
    topicId: 'data-handling',
    subtopicId: 'tables-tally',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'Two classes took a quiz. Class A: scored 0–5 = 3, 6–10 = 17. Class B: scored 0–5 = 8, 6–10 = 22. Which class had a higher percentage of students scoring 6–10?',
    answer: 'Class A',
    options: ['Class A', 'Class B', 'Both equal', 'Cannot determine'],
    hint1: 'Calculate the percentage of students scoring 6–10 in each class.',
    hint2: 'Class A: 17/20 = 85%. Class B: 22/30 ≈ 73.3%. Compare.',
    explanation:
      'Class A: 17 out of 20 = 85%. Class B: 22 out of 30 ≈ 73.3%. Class A has the higher percentage.',
  },
  {
    id: 'dh-tables-18',
    topicId: 'data-handling',
    subtopicId: 'tables-tally',
    difficulty: 4,
    type: 'fill-in',
    question:
      'A two-way table shows students and their hobbies. Reading: Boys = 12, Girls = 18. Sports: Boys = 20, Girls = 10. Music: Boys = 8, Girls = 12. What percentage of all students chose Sports? Round to the nearest whole number.',
    answer: '38',
    hint1: 'Find total Sports students and total students, then calculate percentage.',
    hint2: 'Sports = 20 + 10 = 30. Total = (12+18) + (20+10) + (8+12) = 80. Percentage = (30/80) × 100.',
    explanation:
      'Sports total = 20 + 10 = 30. Grand total = (12+18) + (20+10) + (8+12) = 80. Percentage = (30/80) × 100 = 37.5%, which rounds to 38%.',
  },
  {
    id: 'dh-tables-19',
    topicId: 'data-handling',
    subtopicId: 'tables-tally',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A survey table shows: Monday absences = 8, Tuesday = 5, Wednesday = 3, Thursday = 6, Friday = 13. The school has 200 students. On which day was more than 5% of the school absent?',
    answer: 'Friday',
    options: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    hint1: 'Calculate 5% of 200 first.',
    hint2: '5% of 200 = 10. Which day has more than 10 absences?',
    explanation:
      '5% of 200 = 10. Only Friday has 13 absences, which is more than 10. So Friday is the answer.',
  },
  {
    id: 'dh-tables-20',
    topicId: 'data-handling',
    subtopicId: 'tables-tally',
    difficulty: 4,
    type: 'true-false',
    question:
      'A table shows monthly sales of a shop: Jan = ₹4,200, Feb = ₹5,500, Mar = ₹3,800, Apr = ₹6,200, May = ₹5,800. True or false: The average monthly sales are more than ₹5,000.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Calculate the total sales and divide by 5 to find the average.',
    hint2: 'Total = 4,200 + 5,500 + 3,800 + 6,200 + 5,800 = 25,500. Average = 25,500 ÷ 5.',
    explanation:
      'True. Total = 4,200 + 5,500 + 3,800 + 6,200 + 5,800 = 25,500. Average = 25,500 ÷ 5 = ₹5,100, which is more than ₹5,000.',
  },

  // ─────────────────────────────────────────────
  // MEAN, MEDIAN & MODE (mean-median-mode) — 20 questions
  // ─────────────────────────────────────────────

  // Level 1 (Easy): Mean of 3-4 small whole numbers
  {
    id: 'dh-mean-1',
    topicId: 'data-handling',
    subtopicId: 'mean-median-mode',
    difficulty: 1,
    type: 'fill-in',
    question: 'Find the mean of 4, 8, and 6.',
    answer: '6',
    hint1: 'The mean is the sum divided by how many numbers there are.',
    hint2: 'Sum = 4 + 8 + 6 = 18. There are 3 numbers. Mean = 18 ÷ 3.',
    explanation:
      'Mean = (4 + 8 + 6) ÷ 3 = 18 ÷ 3 = 6.',
  },
  {
    id: 'dh-mean-2',
    topicId: 'data-handling',
    subtopicId: 'mean-median-mode',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What is the mean of 10, 20, 30, and 40?',
    answer: '25',
    options: ['20', '25', '30', '35'],
    hint1: 'Add all four numbers and divide by 4.',
    hint2: 'Sum = 10 + 20 + 30 + 40 = 100. Mean = 100 ÷ 4.',
    explanation:
      'Mean = (10 + 20 + 30 + 40) ÷ 4 = 100 ÷ 4 = 25.',
  },
  {
    id: 'dh-mean-3',
    topicId: 'data-handling',
    subtopicId: 'mean-median-mode',
    difficulty: 1,
    type: 'true-false',
    question: 'The mean of 5, 5, and 5 is 5. True or false?',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'If all numbers are the same, what would the mean be?',
    hint2: 'Sum = 5 + 5 + 5 = 15. Mean = 15 ÷ 3 = 5.',
    explanation:
      'True. (5 + 5 + 5) ÷ 3 = 15 ÷ 3 = 5. When all values are equal, the mean equals that value.',
  },
  {
    id: 'dh-mean-4',
    topicId: 'data-handling',
    subtopicId: 'mean-median-mode',
    difficulty: 1,
    type: 'fill-in',
    question: 'Find the mean of 3, 7, 10, and 12.',
    answer: '8',
    hint1: 'Add the numbers and divide by the count.',
    hint2: 'Sum = 3 + 7 + 10 + 12 = 32. Mean = 32 ÷ 4.',
    explanation:
      'Mean = (3 + 7 + 10 + 12) ÷ 4 = 32 ÷ 4 = 8.',
  },
  {
    id: 'dh-mean-5',
    topicId: 'data-handling',
    subtopicId: 'mean-median-mode',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What is the mean of 2, 4, and 9?',
    answer: '5',
    options: ['4', '5', '6', '7'],
    hint1: 'Sum the three numbers first.',
    hint2: '2 + 4 + 9 = 15. Divide by 3.',
    explanation:
      'Mean = (2 + 4 + 9) ÷ 3 = 15 ÷ 3 = 5.',
  },

  // Level 2 (Medium): Median of 5-7 numbers, mode of a dataset
  {
    id: 'dh-mean-6',
    topicId: 'data-handling',
    subtopicId: 'mean-median-mode',
    difficulty: 2,
    type: 'fill-in',
    question: 'Find the median of: 12, 7, 3, 9, 15.',
    answer: '9',
    hint1: 'First arrange the numbers in order from smallest to largest.',
    hint2: 'In order: 3, 7, 9, 12, 15. The middle (3rd) number is the median.',
    explanation:
      'Arranged in order: 3, 7, 9, 12, 15. The middle value is 9, so the median is 9.',
  },
  {
    id: 'dh-mean-7',
    topicId: 'data-handling',
    subtopicId: 'mean-median-mode',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is the mode of: 4, 7, 2, 7, 3, 7, 5?',
    answer: '7',
    options: ['2', '4', '5', '7'],
    hint1: 'The mode is the number that appears most often.',
    hint2: 'Count each number: 4 appears once, 7 appears three times, 2 once, 3 once, 5 once.',
    explanation:
      '7 appears 3 times, more than any other number. So the mode is 7.',
  },
  {
    id: 'dh-mean-8',
    topicId: 'data-handling',
    subtopicId: 'mean-median-mode',
    difficulty: 2,
    type: 'fill-in',
    question: 'Find the median of: 22, 18, 25, 30, 15, 20, 28.',
    answer: '22',
    hint1: 'Arrange all 7 numbers in ascending order first.',
    hint2: 'In order: 15, 18, 20, 22, 25, 28, 30. The 4th number is the middle one.',
    explanation:
      'Arranged: 15, 18, 20, 22, 25, 28, 30. With 7 numbers, the median is the 4th value = 22.',
  },
  {
    id: 'dh-mean-9',
    topicId: 'data-handling',
    subtopicId: 'mean-median-mode',
    difficulty: 2,
    type: 'true-false',
    question: 'The mode of 3, 5, 3, 8, 5, 3, 9 is 5. True or false?',
    answer: 'False',
    options: ['True', 'False'],
    hint1: 'Count how many times each number appears.',
    hint2: '3 appears 3 times, 5 appears 2 times. Which is more frequent?',
    explanation:
      'False. 3 appears 3 times while 5 appears only 2 times. The mode is 3, not 5.',
  },
  {
    id: 'dh-mean-10',
    topicId: 'data-handling',
    subtopicId: 'mean-median-mode',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'What is the median of: 11, 4, 9, 6, 13?',
    answer: '9',
    options: ['6', '9', '11', '13'],
    hint1: 'Order the numbers from smallest to largest.',
    hint2: 'In order: 4, 6, 9, 11, 13. Pick the middle one.',
    explanation:
      'Arranged: 4, 6, 9, 11, 13. The median (middle value) is 9.',
  },

  // Level 3 (Hard): All three measures for same dataset, compare them
  {
    id: 'dh-mean-11',
    topicId: 'data-handling',
    subtopicId: 'mean-median-mode',
    difficulty: 3,
    type: 'fill-in',
    question:
      'For the dataset 2, 5, 5, 8, 10, what is the mean?',
    answer: '6',
    hint1: 'Add all the numbers and divide by 5.',
    hint2: 'Sum = 2 + 5 + 5 + 8 + 10 = 30. Mean = 30 ÷ 5.',
    explanation:
      'Mean = (2 + 5 + 5 + 8 + 10) ÷ 5 = 30 ÷ 5 = 6.',
  },
  {
    id: 'dh-mean-12',
    topicId: 'data-handling',
    subtopicId: 'mean-median-mode',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'For the data: 3, 3, 7, 9, 13, which statement is correct?',
    answer: 'The mean is 7 and the mode is 3',
    options: [
      'The mean is 7 and the mode is 3',
      'The mean is 7 and the mode is 7',
      'The mean is 9 and the mode is 3',
      'The mean is 3 and the mode is 7',
    ],
    hint1: 'Calculate the mean (sum ÷ count) and find which number repeats most.',
    hint2: 'Sum = 3 + 3 + 7 + 9 + 13 = 35. Mean = 35 ÷ 5 = 7. Mode is 3 (appears twice).',
    explanation:
      'Mean = 35 ÷ 5 = 7. Mode = 3 (appears twice, all others appear once). So mean = 7 and mode = 3.',
  },
  {
    id: 'dh-mean-13',
    topicId: 'data-handling',
    subtopicId: 'mean-median-mode',
    difficulty: 3,
    type: 'true-false',
    question:
      'For the data: 10, 12, 12, 14, 17, the median and the mode are the same. True or false?',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Find both the median and the mode of this dataset.',
    hint2: 'Already in order: 10, 12, 12, 14, 17. Median = 3rd value = 12. Mode = 12 (appears twice).',
    explanation:
      'True. Median = 12 (middle value). Mode = 12 (most frequent). They are the same.',
  },
  {
    id: 'dh-mean-14',
    topicId: 'data-handling',
    subtopicId: 'mean-median-mode',
    difficulty: 3,
    type: 'fill-in',
    question:
      'The cricket scores of 6 matches are: 45, 30, 55, 30, 50, 30. What is the difference between the mean and the mode?',
    answer: '10',
    hint1: 'Find the mean (sum ÷ 6) and the mode (most frequent score).',
    hint2: 'Sum = 45+30+55+30+50+30 = 240. Mean = 240 ÷ 6 = 40. Mode = 30 (appears 3 times).',
    explanation:
      'Sum = 240. Mean = 240 ÷ 6 = 40. Mode = 30 (appears 3 times). Difference = 40 - 30 = 10.',
  },
  {
    id: 'dh-mean-15',
    topicId: 'data-handling',
    subtopicId: 'mean-median-mode',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'For the data: 4, 6, 6, 8, 10, 14, which measure of central tendency has the highest value?',
    answer: 'Mean',
    options: ['Mean', 'Median', 'Mode', 'All are equal'],
    hint1: 'Calculate all three: mean, median, and mode.',
    hint2: 'Mean = (4+6+6+8+10+14) ÷ 6 = 48 ÷ 6 = 8. Median = (6+8)/2 = 7. Mode = 6.',
    explanation:
      'Mean = 48 ÷ 6 = 8. Median = (6+8)/2 = 7. Mode = 6. The mean (8) is the highest.',
  },

  // Level 4 (Very Hard): Find missing value given mean, weighted average problems
  {
    id: 'dh-mean-16',
    topicId: 'data-handling',
    subtopicId: 'mean-median-mode',
    difficulty: 4,
    type: 'fill-in',
    question:
      'The mean of five numbers is 12. Four of the numbers are 8, 10, 15, and 13. What is the fifth number?',
    answer: '14',
    hint1: 'If the mean is 12 and there are 5 numbers, what is the total sum?',
    hint2: 'Total sum = 12 × 5 = 60. Sum of four known numbers = 8 + 10 + 15 + 13 = 46. Fifth number = 60 - 46.',
    explanation:
      'Total = mean × count = 12 × 5 = 60. Known sum = 8 + 10 + 15 + 13 = 46. Fifth number = 60 - 46 = 14.',
  },
  {
    id: 'dh-mean-17',
    topicId: 'data-handling',
    subtopicId: 'mean-median-mode',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'Section A has 20 students with a mean score of 70. Section B has 30 students with a mean score of 80. What is the combined mean score of all 50 students?',
    answer: '76',
    options: ['74', '75', '76', '78'],
    hint1: 'Find the total marks for each section, then divide by the total number of students.',
    hint2: 'Section A total = 20 × 70 = 1400. Section B total = 30 × 80 = 2400. Combined mean = (1400 + 2400) ÷ 50.',
    explanation:
      'Section A total = 1400. Section B total = 2400. Combined = 3800 ÷ 50 = 76.',
  },
  {
    id: 'dh-mean-18',
    topicId: 'data-handling',
    subtopicId: 'mean-median-mode',
    difficulty: 4,
    type: 'fill-in',
    question:
      'Riya scored 85, 90, and 78 in three tests. What score does she need in the 4th test to have a mean of 85?',
    answer: '87',
    hint1: 'Set up an equation: (85 + 90 + 78 + x) ÷ 4 = 85.',
    hint2: 'Total needed = 85 × 4 = 340. Current sum = 85 + 90 + 78 = 253. Fourth score = 340 - 253.',
    explanation:
      'Total needed = 85 × 4 = 340. Current sum = 253. Fourth score = 340 - 253 = 87.',
  },
  {
    id: 'dh-mean-19',
    topicId: 'data-handling',
    subtopicId: 'mean-median-mode',
    difficulty: 4,
    type: 'true-false',
    question:
      'A student has test scores of 72, 88, 65, and 95. If the student scores 80 on the next test, the new mean will be exactly 80. True or false?',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Calculate the new mean with 5 scores.',
    hint2: 'Sum = 72 + 88 + 65 + 95 + 80 = 400. Mean = 400 ÷ 5 = 80.',
    explanation:
      'True. Sum = 72 + 88 + 65 + 95 + 80 = 400. Mean = 400 ÷ 5 = 80.',
  },
  {
    id: 'dh-mean-20',
    topicId: 'data-handling',
    subtopicId: 'mean-median-mode',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'The mean of 6 numbers is 15. When one number is removed, the mean of the remaining 5 numbers becomes 14. What was the removed number?',
    answer: '20',
    options: ['18', '19', '20', '21'],
    hint1: 'Find the sum of all 6 numbers, then the sum of the remaining 5.',
    hint2: 'Sum of 6 = 15 × 6 = 90. Sum of 5 = 14 × 5 = 70. Removed number = 90 - 70.',
    explanation:
      'Sum of 6 numbers = 90. Sum of remaining 5 = 70. Removed number = 90 - 70 = 20.',
  },

  // ─────────────────────────────────────────────
  // BAR GRAPHS (bar-graphs) — 20 questions
  // ─────────────────────────────────────────────

  // Level 1 (Easy): Read a single bar value from text description
  {
    id: 'dh-bar-1',
    topicId: 'data-handling',
    subtopicId: 'bar-graphs',
    difficulty: 1,
    type: 'fill-in',
    question:
      'A bar graph shows the number of students in different clubs: Art = 12, Music = 18, Dance = 15, Drama = 9. How many students are in the Music club?',
    answer: '18',
    hint1: 'Read the value for the Music bar directly.',
    hint2: 'The bar graph shows Music = 18.',
    explanation:
      'The Music bar shows 18 students.',
  },
  {
    id: 'dh-bar-2',
    topicId: 'data-handling',
    subtopicId: 'bar-graphs',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'A bar graph shows runs scored in cricket matches: Match 1 = 45, Match 2 = 62, Match 3 = 38, Match 4 = 55. In which match were the most runs scored?',
    answer: 'Match 2',
    options: ['Match 1', 'Match 2', 'Match 3', 'Match 4'],
    hint1: 'Look for the tallest bar.',
    hint2: 'Compare: 45, 62, 38, 55. Which is the largest number?',
    explanation:
      'Match 2 has 62 runs, which is the highest among all four matches.',
  },
  {
    id: 'dh-bar-3',
    topicId: 'data-handling',
    subtopicId: 'bar-graphs',
    difficulty: 1,
    type: 'true-false',
    question:
      'A bar graph shows trees planted: Class 4 = 20, Class 5 = 25, Class 6 = 30. True or false: Class 6 planted the most trees.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Compare the values for all three classes.',
    hint2: 'Class 6 = 30, which is greater than 25 and 20.',
    explanation:
      'True. Class 6 planted 30 trees, which is more than Class 5 (25) and Class 4 (20).',
  },
  {
    id: 'dh-bar-4',
    topicId: 'data-handling',
    subtopicId: 'bar-graphs',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'A bar graph shows favourite subjects: Maths = 22, Science = 18, English = 14, Hindi = 16. Which subject is the least popular?',
    answer: 'English',
    options: ['Maths', 'Science', 'English', 'Hindi'],
    hint1: 'Find the subject with the shortest bar (smallest value).',
    hint2: 'Compare: 22, 18, 14, 16. Which is the smallest?',
    explanation:
      'English has only 14 students, which is the smallest number, making it the least popular.',
  },
  {
    id: 'dh-bar-5',
    topicId: 'data-handling',
    subtopicId: 'bar-graphs',
    difficulty: 1,
    type: 'fill-in',
    question:
      'A bar graph shows the number of rainy days in a month: June = 8, July = 14, August = 11, September = 6. How many rainy days were there in August?',
    answer: '11',
    hint1: 'Read the bar for August directly.',
    hint2: 'The bar for August shows 11.',
    explanation:
      'The bar graph shows August had 11 rainy days.',
  },

  // Level 2 (Medium): Compare bars, find difference between categories
  {
    id: 'dh-bar-6',
    topicId: 'data-handling',
    subtopicId: 'bar-graphs',
    difficulty: 2,
    type: 'fill-in',
    question:
      'A bar graph shows the number of mangoes sold: Monday = 35, Tuesday = 42, Wednesday = 28, Thursday = 50. How many more mangoes were sold on Thursday than Wednesday?',
    answer: '22',
    hint1: 'Find the difference between Thursday and Wednesday.',
    hint2: 'Thursday = 50, Wednesday = 28. Difference = 50 - 28.',
    explanation:
      '50 - 28 = 22 more mangoes were sold on Thursday than Wednesday.',
  },
  {
    id: 'dh-bar-7',
    topicId: 'data-handling',
    subtopicId: 'bar-graphs',
    difficulty: 2,
    type: 'multiple-choice',
    question:
      'A bar graph shows goals scored by 4 teams: Lions = 8, Tigers = 12, Bears = 6, Eagles = 10. What is the difference in goals between the highest-scoring and lowest-scoring teams?',
    answer: '6',
    options: ['4', '5', '6', '8'],
    hint1: 'Find the team with the most goals and the team with the fewest.',
    hint2: 'Highest = Tigers (12), Lowest = Bears (6). Difference = 12 - 6.',
    explanation:
      'Tigers scored 12 (highest) and Bears scored 6 (lowest). Difference = 12 - 6 = 6.',
  },
  {
    id: 'dh-bar-8',
    topicId: 'data-handling',
    subtopicId: 'bar-graphs',
    difficulty: 2,
    type: 'true-false',
    question:
      'A bar graph shows students who like different sports: Cricket = 30, Football = 25, Hockey = 15, Tennis = 12. True or false: More students like Cricket and Tennis combined than Football and Hockey combined.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Calculate each combined total.',
    hint2: 'Cricket + Tennis = 30 + 12 = 42. Football + Hockey = 25 + 15 = 40.',
    explanation:
      'True. Cricket + Tennis = 30 + 12 = 42. Football + Hockey = 25 + 15 = 40. Since 42 > 40, the statement is true.',
  },
  {
    id: 'dh-bar-9',
    topicId: 'data-handling',
    subtopicId: 'bar-graphs',
    difficulty: 2,
    type: 'fill-in',
    question:
      'A bar graph shows books read by students: Aman = 7, Sita = 12, Raj = 5, Neha = 10. How many books did Aman and Raj read together?',
    answer: '12',
    hint1: 'Add the values for Aman and Raj.',
    hint2: 'Aman = 7, Raj = 5. Total = 7 + 5.',
    explanation:
      'Aman (7) + Raj (5) = 12 books together.',
  },
  {
    id: 'dh-bar-10',
    topicId: 'data-handling',
    subtopicId: 'bar-graphs',
    difficulty: 2,
    type: 'multiple-choice',
    question:
      'A bar graph shows monthly visitors to a library: Jan = 120, Feb = 95, Mar = 140, Apr = 110. Which two consecutive months had the biggest increase in visitors?',
    answer: 'Feb to Mar',
    options: ['Jan to Feb', 'Feb to Mar', 'Mar to Apr', 'Jan to Mar'],
    hint1: 'Look at the change between each pair of consecutive months.',
    hint2: 'Jan→Feb: decrease of 25. Feb→Mar: increase of 45. Mar→Apr: decrease of 30.',
    explanation:
      'Feb to Mar shows an increase of 140 - 95 = 45, which is the biggest increase.',
  },

  // Level 3 (Hard): Calculate totals, fractions of total from bar data
  {
    id: 'dh-bar-11',
    topicId: 'data-handling',
    subtopicId: 'bar-graphs',
    difficulty: 3,
    type: 'fill-in',
    question:
      'A bar graph shows fruit sold at a stall: Apples = 40, Oranges = 30, Bananas = 50, Grapes = 20, Guavas = 10. What fraction of the total fruit sold were Bananas? Write as a simplified fraction.',
    answer: '1/3',
    hint1: 'Find the total first, then express Bananas as a fraction of the total.',
    hint2: 'Total = 40 + 30 + 50 + 20 + 10 = 150. Bananas fraction = 50/150.',
    explanation:
      'Total = 150. Bananas = 50. Fraction = 50/150 = 1/3.',
  },
  {
    id: 'dh-bar-12',
    topicId: 'data-handling',
    subtopicId: 'bar-graphs',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A bar graph shows monthly expenses (in ₹): Rent = 8000, Food = 6000, Transport = 3000, Entertainment = 2000, Savings = 1000. What is the total monthly expense?',
    answer: '₹20,000',
    options: ['₹18,000', '₹19,000', '₹20,000', '₹21,000'],
    hint1: 'Add up all the bar values.',
    hint2: '8000 + 6000 + 3000 + 2000 + 1000.',
    explanation:
      'Total = 8000 + 6000 + 3000 + 2000 + 1000 = ₹20,000.',
  },
  {
    id: 'dh-bar-13',
    topicId: 'data-handling',
    subtopicId: 'bar-graphs',
    difficulty: 3,
    type: 'fill-in',
    question:
      'A bar graph shows runs scored in 5 overs: Over 1 = 8, Over 2 = 12, Over 3 = 6, Over 4 = 15, Over 5 = 9. What is the average runs per over?',
    answer: '10',
    hint1: 'Find the total runs, then divide by the number of overs.',
    hint2: 'Total = 8 + 12 + 6 + 15 + 9 = 50. Average = 50 ÷ 5.',
    explanation:
      'Total runs = 50. Average = 50 ÷ 5 = 10 runs per over.',
  },
  {
    id: 'dh-bar-14',
    topicId: 'data-handling',
    subtopicId: 'bar-graphs',
    difficulty: 3,
    type: 'true-false',
    question:
      'A bar graph shows the number of cakes sold: Monday = 15, Tuesday = 20, Wednesday = 25, Thursday = 30, Friday = 35. True or false: The sales increased by the same amount each day.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Check the difference between each consecutive day.',
    hint2: 'Mon→Tue: +5. Tue→Wed: +5. Wed→Thu: +5. Thu→Fri: +5.',
    explanation:
      'True. The increase is exactly 5 each day: 15, 20, 25, 30, 35.',
  },
  {
    id: 'dh-bar-15',
    topicId: 'data-handling',
    subtopicId: 'bar-graphs',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A bar graph shows students absent: Monday = 6, Tuesday = 4, Wednesday = 8, Thursday = 2, Friday = 10. If there are 40 students in the class, on which day was exactly 20% of the class absent?',
    answer: 'Wednesday',
    options: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
    hint1: 'Calculate 20% of 40 first.',
    hint2: '20% of 40 = 8. Which day had 8 students absent?',
    explanation:
      '20% of 40 = 8. Wednesday had 8 students absent, which is exactly 20%.',
  },

  // Level 4 (Very Hard): Multi-step analysis, percentage of total, trend interpretation
  {
    id: 'dh-bar-16',
    topicId: 'data-handling',
    subtopicId: 'bar-graphs',
    difficulty: 4,
    type: 'fill-in',
    question:
      'A bar graph shows monthly sales: Jan = ₹50,000, Feb = ₹60,000, Mar = ₹45,000, Apr = ₹70,000, May = ₹75,000. What percentage of total sales came from April? Round to the nearest whole number.',
    answer: '23',
    hint1: 'Find total sales, then calculate April as a percentage.',
    hint2: 'Total = 50000 + 60000 + 45000 + 70000 + 75000 = 300000. April % = (70000/300000) × 100.',
    explanation:
      'Total = ₹3,00,000. April percentage = (70,000/3,00,000) × 100 = 23.33%, which rounds to 23%.',
  },
  {
    id: 'dh-bar-17',
    topicId: 'data-handling',
    subtopicId: 'bar-graphs',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A bar graph shows production (in units) over 4 quarters: Q1 = 200, Q2 = 250, Q3 = 300, Q4 = 350. By what percentage did production increase from Q1 to Q4?',
    answer: '75%',
    options: ['50%', '60%', '75%', '80%'],
    hint1: 'Percentage increase = ((New - Old) / Old) × 100.',
    hint2: 'Increase = 350 - 200 = 150. Percentage = (150/200) × 100.',
    explanation:
      'Increase = 350 - 200 = 150. Percentage increase = (150/200) × 100 = 75%.',
  },
  {
    id: 'dh-bar-18',
    topicId: 'data-handling',
    subtopicId: 'bar-graphs',
    difficulty: 4,
    type: 'fill-in',
    question:
      'A double bar graph shows boys and girls in 3 sections. Section A: Boys = 22, Girls = 18. Section B: Boys = 20, Girls = 24. Section C: Boys = 24, Girls = 21. What is the overall ratio of boys to girls (simplified)?',
    answer: '22:21',
    hint1: 'Find the total boys and total girls across all sections.',
    hint2: 'Total boys = 22 + 20 + 24 = 66. Total girls = 18 + 24 + 21 = 63. Ratio = 66:63.',
    explanation:
      'Total boys = 66. Total girls = 63. GCD of 66 and 63 is 3. Ratio = 66:63 = 22:21.',
  },
  {
    id: 'dh-bar-19',
    topicId: 'data-handling',
    subtopicId: 'bar-graphs',
    difficulty: 4,
    type: 'true-false',
    question:
      'A bar graph shows temperatures: Mon = 32°C, Tue = 35°C, Wed = 31°C, Thu = 36°C, Fri = 33°C. True or false: The average temperature for the week is 33.4°C.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Calculate the average of the 5 temperature values.',
    hint2: 'Sum = 32 + 35 + 31 + 36 + 33 = 167. Average = 167 ÷ 5 = 33.4.',
    explanation:
      'True. Sum = 167. Average = 167 ÷ 5 = 33.4°C.',
  },
  {
    id: 'dh-bar-20',
    topicId: 'data-handling',
    subtopicId: 'bar-graphs',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A bar graph shows class test scores: Class A average = 72, Class B average = 68, Class C average = 80, Class D average = 75. If each class has 30 students, what is the overall average score across all classes?',
    answer: '73.75',
    options: ['72.5', '73', '73.75', '74.5'],
    hint1: 'Since all classes have the same number of students, the overall average is the mean of the four averages.',
    hint2: 'Overall = (72 + 68 + 80 + 75) ÷ 4 = 295 ÷ 4.',
    explanation:
      'Since each class has equal students: Overall average = (72 + 68 + 80 + 75) ÷ 4 = 295 ÷ 4 = 73.75.',
  },

  // ─────────────────────────────────────────────
  // PIE CHARTS (pie-charts) — 20 questions
  // ─────────────────────────────────────────────

  // Level 1 (Easy): Basic fraction-of-total from given percentages
  {
    id: 'dh-pie-1',
    topicId: 'data-handling',
    subtopicId: 'pie-charts',
    difficulty: 1,
    type: 'fill-in',
    question:
      'A pie chart shows that 40% of 200 students like Cricket. How many students like Cricket?',
    answer: '80',
    hint1: 'Find 40% of 200.',
    hint2: '40% of 200 = (40/100) × 200.',
    explanation:
      '40% of 200 = (40/100) × 200 = 80 students.',
  },
  {
    id: 'dh-pie-2',
    topicId: 'data-handling',
    subtopicId: 'pie-charts',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'A pie chart of favourite ice cream flavours shows: Chocolate = 50%, Vanilla = 30%, Strawberry = 20%. If 100 students were surveyed, how many chose Vanilla?',
    answer: '30',
    options: ['20', '25', '30', '50'],
    hint1: '30% of 100 is straightforward.',
    hint2: '30% of 100 = 30.',
    explanation:
      '30% of 100 = 30 students chose Vanilla.',
  },
  {
    id: 'dh-pie-3',
    topicId: 'data-handling',
    subtopicId: 'pie-charts',
    difficulty: 1,
    type: 'true-false',
    question:
      'A pie chart shows: Maths = 25%, Science = 25%, English = 25%, Hindi = 25%. True or false: All subjects are equally popular.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Compare all the percentages.',
    hint2: 'Each subject has 25%. Are they all the same?',
    explanation:
      'True. Each subject has 25%, meaning they are all equally popular.',
  },
  {
    id: 'dh-pie-4',
    topicId: 'data-handling',
    subtopicId: 'pie-charts',
    difficulty: 1,
    type: 'fill-in',
    question:
      'A pie chart shows that 10% of 500 people prefer walking to school. How many people prefer walking?',
    answer: '50',
    hint1: 'Calculate 10% of 500.',
    hint2: '10% of 500 = 500 ÷ 10.',
    explanation:
      '10% of 500 = 50 people prefer walking.',
  },
  {
    id: 'dh-pie-5',
    topicId: 'data-handling',
    subtopicId: 'pie-charts',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'A pie chart shows: Dosa = 35%, Idli = 25%, Poha = 20%, Paratha = 20%. Which breakfast item is most popular?',
    answer: 'Dosa',
    options: ['Dosa', 'Idli', 'Poha', 'Paratha'],
    hint1: 'The most popular item has the largest percentage.',
    hint2: 'Compare: 35%, 25%, 20%, 20%. Which is largest?',
    explanation:
      'Dosa has 35%, which is the highest percentage, making it the most popular.',
  },

  // Level 2 (Medium): Find missing sector percentage, convert between % and count
  {
    id: 'dh-pie-6',
    topicId: 'data-handling',
    subtopicId: 'pie-charts',
    difficulty: 2,
    type: 'fill-in',
    question:
      'A pie chart shows: Red = 30%, Blue = 25%, Green = 20%, Yellow = ?%. What percentage is Yellow?',
    answer: '25',
    hint1: 'All percentages in a pie chart must add up to 100%.',
    hint2: '30 + 25 + 20 = 75. Yellow = 100 - 75.',
    explanation:
      'Yellow = 100% - (30% + 25% + 20%) = 100% - 75% = 25%.',
  },
  {
    id: 'dh-pie-7',
    topicId: 'data-handling',
    subtopicId: 'pie-charts',
    difficulty: 2,
    type: 'multiple-choice',
    question:
      'A pie chart of 300 students shows: Football = 40%, Cricket = 35%, Hockey = 15%, Others = 10%. How many students play Cricket?',
    answer: '105',
    options: ['90', '100', '105', '120'],
    hint1: 'Find 35% of 300.',
    hint2: '35% of 300 = (35/100) × 300 = 105.',
    explanation:
      '35% of 300 = 105 students play Cricket.',
  },
  {
    id: 'dh-pie-8',
    topicId: 'data-handling',
    subtopicId: 'pie-charts',
    difficulty: 2,
    type: 'true-false',
    question:
      'A pie chart shows: Apples = 45%, Oranges = 30%, Bananas = 25%. If 60 people chose Oranges, then the total number of people surveyed is 200. True or false?',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'If 30% = 60 people, find the total.',
    hint2: '30% of total = 60. Total = 60 ÷ 0.30 = 200.',
    explanation:
      'True. If 30% = 60, then total = 60 / 0.30 = 200.',
  },
  {
    id: 'dh-pie-9',
    topicId: 'data-handling',
    subtopicId: 'pie-charts',
    difficulty: 2,
    type: 'fill-in',
    question:
      'A pie chart shows expenses: Food = 35%, Rent = 40%, Travel = 15%, Other = 10%. The total budget is ₹20,000. How much is spent on Rent?',
    answer: '8000',
    hint1: 'Find 40% of ₹20,000.',
    hint2: '40% of 20,000 = (40/100) × 20,000.',
    explanation:
      '40% of ₹20,000 = ₹8,000 spent on Rent.',
  },
  {
    id: 'dh-pie-10',
    topicId: 'data-handling',
    subtopicId: 'pie-charts',
    difficulty: 2,
    type: 'multiple-choice',
    question:
      'A pie chart shows marks distribution: A grade = 20%, B grade = 30%, C grade = 35%, D grade = 15%. If 200 students are in the class, how many got grade B or above (A or B)?',
    answer: '100',
    options: ['80', '90', '100', '120'],
    hint1: 'Add the percentages for A and B grades, then find that percentage of 200.',
    hint2: 'A + B = 20% + 30% = 50%. 50% of 200 = 100.',
    explanation:
      'A + B = 20% + 30% = 50%. 50% of 200 = 100 students got grade B or above.',
  },

  // Level 3 (Hard): Compare two sectors, multi-step calculations
  {
    id: 'dh-pie-11',
    topicId: 'data-handling',
    subtopicId: 'pie-charts',
    difficulty: 3,
    type: 'fill-in',
    question:
      'A pie chart shows: Cricket = 30%, Football = 25%, Kabaddi = 20%, Badminton = 15%, Others = 10%. If 600 students were surveyed, how many more chose Cricket than Badminton?',
    answer: '90',
    hint1: 'Find the number of students for Cricket and Badminton, then subtract.',
    hint2: 'Cricket = 30% of 600 = 180. Badminton = 15% of 600 = 90. Difference = 180 - 90.',
    explanation:
      'Cricket = 180 students. Badminton = 90 students. Difference = 180 - 90 = 90.',
  },
  {
    id: 'dh-pie-12',
    topicId: 'data-handling',
    subtopicId: 'pie-charts',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A pie chart of a monthly budget (₹40,000): Food = 30%, Rent = 35%, Education = 20%, Others = 15%. How much more is spent on Rent than on Education?',
    answer: '₹6,000',
    options: ['₹4,000', '₹5,000', '₹6,000', '₹8,000'],
    hint1: 'Find the amounts for Rent and Education, then subtract.',
    hint2: 'Rent = 35% of 40,000 = 14,000. Education = 20% of 40,000 = 8,000. Difference = 14,000 - 8,000.',
    explanation:
      'Rent = ₹14,000. Education = ₹8,000. Difference = ₹6,000.',
  },
  {
    id: 'dh-pie-13',
    topicId: 'data-handling',
    subtopicId: 'pie-charts',
    difficulty: 3,
    type: 'fill-in',
    question:
      'A pie chart shows the favourite drinks of 400 students: Tea = 35%, Coffee = 25%, Milk = 20%, Juice = 15%, Water = 5%. How many students chose either Tea or Coffee?',
    answer: '240',
    hint1: 'Add the percentages for Tea and Coffee, then find that percentage of 400.',
    hint2: 'Tea + Coffee = 35% + 25% = 60%. 60% of 400 = 240.',
    explanation:
      'Tea + Coffee = 60%. 60% of 400 = 240 students.',
  },
  {
    id: 'dh-pie-14',
    topicId: 'data-handling',
    subtopicId: 'pie-charts',
    difficulty: 3,
    type: 'true-false',
    question:
      'A pie chart shows time spent daily: School = 30%, Homework = 15%, Play = 20%, Sleep = 35%. If there are 24 hours in a day, is the time spent on Play more than 5 hours?',
    answer: 'False',
    options: ['True', 'False'],
    hint1: 'Calculate 20% of 24 hours.',
    hint2: '20% of 24 = 4.8 hours. Is 4.8 more than 5?',
    explanation:
      'False. 20% of 24 = 4.8 hours, which is less than 5 hours.',
  },
  {
    id: 'dh-pie-15',
    topicId: 'data-handling',
    subtopicId: 'pie-charts',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A pie chart shows: Savings = 20%, Food = 40%, Transport = 15%, Clothes = 25%. If Food costs ₹12,000, what is the total income?',
    answer: '₹30,000',
    options: ['₹24,000', '₹28,000', '₹30,000', '₹36,000'],
    hint1: 'If 40% equals ₹12,000, find the total (100%).',
    hint2: '40% = ₹12,000. So 1% = ₹300. Total = ₹300 × 100.',
    explanation:
      'If 40% = ₹12,000, then 100% = 12,000 × (100/40) = ₹30,000.',
  },

  // Level 4 (Very Hard): Back-calculate total from one sector's count, compare two pie charts
  {
    id: 'dh-pie-16',
    topicId: 'data-handling',
    subtopicId: 'pie-charts',
    difficulty: 4,
    type: 'fill-in',
    question:
      'In a pie chart, the "Science" sector is 24% and represents 48 students. What is the total number of students in the survey?',
    answer: '200',
    hint1: 'If 24% = 48 students, find 100%.',
    hint2: '24% = 48. So 1% = 48 ÷ 24 = 2. Total = 2 × 100.',
    explanation:
      '24% = 48 students. 1% = 2 students. Total = 200 students.',
  },
  {
    id: 'dh-pie-17',
    topicId: 'data-handling',
    subtopicId: 'pie-charts',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'School A (400 students): Cricket = 45%, Football = 30%, Others = 25%. School B (500 students): Cricket = 38%, Football = 40%, Others = 22%. Which school has more Cricket fans?',
    answer: 'School B',
    options: ['School A', 'School B', 'Both equal', 'Cannot determine'],
    hint1: 'Calculate the actual number of Cricket fans in each school.',
    hint2: 'School A: 45% of 400 = 180. School B: 38% of 500 = 190. Compare.',
    explanation:
      'School A: 45% of 400 = 180 Cricket fans. School B: 38% of 500 = 190 Cricket fans. School B has more (190 > 180).',
  },
  {
    id: 'dh-pie-18',
    topicId: 'data-handling',
    subtopicId: 'pie-charts',
    difficulty: 4,
    type: 'fill-in',
    question:
      'A pie chart shows pocket money spending: Books = 15%, Food = 40%, Games = 25%, Savings = 20%. If ₹300 is spent on Books, how much goes to Savings?',
    answer: '400',
    hint1: 'First find the total pocket money from the Books percentage.',
    hint2: '15% = ₹300. Total = 300 × (100/15) = ₹2000. Savings = 20% of ₹2000.',
    explanation:
      'Total = ₹300 ÷ 0.15 = ₹2,000. Savings = 20% of 2,000 = ₹400.',
  },
  {
    id: 'dh-pie-19',
    topicId: 'data-handling',
    subtopicId: 'pie-charts',
    difficulty: 4,
    type: 'true-false',
    question:
      'Two classes took a survey on favourite fruit. Class X (50 students): Mango = 60%, Apple = 40%. Class Y (80 students): Mango = 50%, Apple = 50%. True or false: More students across both classes prefer Mango than Apple.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Calculate Mango and Apple counts for each class, then add.',
    hint2: 'Mango: 60% of 50 + 50% of 80 = 30 + 40 = 70. Apple: 40% of 50 + 50% of 80 = 20 + 40 = 60.',
    explanation:
      'True. Total Mango = 30 + 40 = 70. Total Apple = 20 + 40 = 60. More students prefer Mango (70 > 60).',
  },
  {
    id: 'dh-pie-20',
    topicId: 'data-handling',
    subtopicId: 'pie-charts',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A pie chart shows a school\'s budget: Teachers\' salary = 50%, Maintenance = 20%, Events = 15%, Library = 10%, Other = 5%. If the Library budget is ₹1,50,000, what is the Teachers\' salary budget?',
    answer: '₹7,50,000',
    options: ['₹5,00,000', '₹6,00,000', '₹7,50,000', '₹10,00,000'],
    hint1: 'Find the total budget from the Library data, then calculate the Teachers\' salary.',
    hint2: '10% = ₹1,50,000. Total = ₹15,00,000. Teachers\' salary = 50% of ₹15,00,000.',
    explanation:
      'Total budget = 1,50,000 ÷ 0.10 = ₹15,00,000. Teachers\' salary = 50% of 15,00,000 = ₹7,50,000.',
  },

  // ─────────────────────────────────────────────
  // BASIC PROBABILITY (probability-basic) — 20 questions
  // ─────────────────────────────────────────────

  // Level 1 (Easy): Certain/likely/unlikely/impossible classification
  {
    id: 'dh-prob-1',
    topicId: 'data-handling',
    subtopicId: 'probability-basic',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'Which of the following events is IMPOSSIBLE?',
    answer: 'Rolling a 7 on a standard die',
    options: [
      'Getting heads when flipping a coin',
      'Rolling a 7 on a standard die',
      'It will rain tomorrow',
      'Drawing a red card from a deck',
    ],
    hint1: 'Think about which event can NEVER happen.',
    hint2: 'A standard die has faces numbered 1 to 6. Can you roll a 7?',
    explanation:
      'A standard die has numbers 1–6, so rolling a 7 is impossible.',
  },
  {
    id: 'dh-prob-2',
    topicId: 'data-handling',
    subtopicId: 'probability-basic',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'Which event is CERTAIN to happen?',
    answer: 'The sun will rise tomorrow morning',
    options: [
      'You will score 100% on a test',
      'It will snow in Chennai in July',
      'The sun will rise tomorrow morning',
      'You will win a lottery',
    ],
    hint1: 'A certain event is something that will definitely happen.',
    hint2: 'Which of these always happens without fail?',
    explanation:
      'The sun rising tomorrow morning is a certain event — it always happens.',
  },
  {
    id: 'dh-prob-3',
    topicId: 'data-handling',
    subtopicId: 'probability-basic',
    difficulty: 1,
    type: 'true-false',
    question:
      'Getting a number less than 7 when rolling a standard die is a certain event. True or false?',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'A standard die has numbers 1 to 6.',
    hint2: 'Every number on the die (1, 2, 3, 4, 5, 6) is less than 7.',
    explanation:
      'True. All faces of a die show 1–6, and all are less than 7, so this event is certain.',
  },
  {
    id: 'dh-prob-4',
    topicId: 'data-handling',
    subtopicId: 'probability-basic',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'A bag has 8 red balls and 2 blue balls. Is picking a red ball likely, unlikely, or equally likely?',
    answer: 'Likely',
    options: ['Certain', 'Likely', 'Unlikely', 'Impossible'],
    hint1: 'Compare how many red balls there are to blue balls.',
    hint2: '8 out of 10 balls are red. That is most of them.',
    explanation:
      'With 8 out of 10 balls being red, picking a red ball is likely (but not certain, since there are blue balls too).',
  },
  {
    id: 'dh-prob-5',
    topicId: 'data-handling',
    subtopicId: 'probability-basic',
    difficulty: 1,
    type: 'true-false',
    question:
      'Picking a green ball from a bag that contains only red and blue balls is an unlikely event. True or false?',
    answer: 'False',
    options: ['True', 'False'],
    hint1: 'Are there any green balls in the bag?',
    hint2: 'The bag has only red and blue balls. No green balls exist in the bag.',
    explanation:
      'False. It is not just unlikely — it is IMPOSSIBLE, since there are no green balls in the bag.',
  },

  // Level 2 (Medium): Simple probability as fraction
  {
    id: 'dh-prob-6',
    topicId: 'data-handling',
    subtopicId: 'probability-basic',
    difficulty: 2,
    type: 'fill-in',
    question:
      'A bag contains 3 red balls, 5 blue balls, and 2 green balls. What is the probability of picking a blue ball? Write as a simplified fraction.',
    answer: '1/2',
    hint1: 'Probability = favourable outcomes ÷ total outcomes.',
    hint2: 'Blue balls = 5. Total = 3 + 5 + 2 = 10. Probability = 5/10.',
    explanation:
      'P(blue) = 5/10 = 1/2.',
  },
  {
    id: 'dh-prob-7',
    topicId: 'data-handling',
    subtopicId: 'probability-basic',
    difficulty: 2,
    type: 'multiple-choice',
    question:
      'A spinner has 8 equal sections numbered 1 to 8. What is the probability of landing on an even number?',
    answer: '1/2',
    options: ['1/4', '3/8', '1/2', '5/8'],
    hint1: 'Count how many even numbers are between 1 and 8.',
    hint2: 'Even numbers: 2, 4, 6, 8 = 4 numbers. Total sections = 8. Probability = 4/8.',
    explanation:
      'Even numbers: 2, 4, 6, 8 (4 outcomes). P(even) = 4/8 = 1/2.',
  },
  {
    id: 'dh-prob-8',
    topicId: 'data-handling',
    subtopicId: 'probability-basic',
    difficulty: 2,
    type: 'fill-in',
    question:
      'A box has 4 mangoes, 6 apples, and 2 bananas. If you pick one fruit at random, what is the probability of picking a mango? Write as a simplified fraction.',
    answer: '1/3',
    hint1: 'Find the total number of fruits first.',
    hint2: 'Total = 4 + 6 + 2 = 12. P(mango) = 4/12.',
    explanation:
      'P(mango) = 4/12 = 1/3.',
  },
  {
    id: 'dh-prob-9',
    topicId: 'data-handling',
    subtopicId: 'probability-basic',
    difficulty: 2,
    type: 'true-false',
    question:
      'When you flip a fair coin, the probability of getting heads is 1/2. True or false?',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'How many outcomes are there when flipping a coin?',
    hint2: 'There are 2 outcomes (heads, tails) and 1 favourable outcome (heads).',
    explanation:
      'True. A fair coin has 2 equally likely outcomes. P(heads) = 1/2.',
  },
  {
    id: 'dh-prob-10',
    topicId: 'data-handling',
    subtopicId: 'probability-basic',
    difficulty: 2,
    type: 'multiple-choice',
    question:
      'A die is rolled once. What is the probability of getting a number greater than 4?',
    answer: '1/3',
    options: ['1/6', '1/3', '1/2', '2/3'],
    hint1: 'Which numbers on a die are greater than 4?',
    hint2: 'Numbers greater than 4: 5, 6. That is 2 out of 6.',
    explanation:
      'Numbers greater than 4: {5, 6} = 2 outcomes. P = 2/6 = 1/3.',
  },

  // Level 3 (Hard): Probability of NOT an event, comparing probabilities
  {
    id: 'dh-prob-11',
    topicId: 'data-handling',
    subtopicId: 'probability-basic',
    difficulty: 3,
    type: 'fill-in',
    question:
      'A bag has 7 red marbles and 3 yellow marbles. What is the probability of NOT picking a red marble? Write as a simplified fraction.',
    answer: '3/10',
    hint1: 'P(NOT red) = 1 - P(red).',
    hint2: 'P(red) = 7/10. P(NOT red) = 1 - 7/10 = 3/10.',
    explanation:
      'Total = 10. P(red) = 7/10. P(NOT red) = 1 - 7/10 = 3/10.',
  },
  {
    id: 'dh-prob-12',
    topicId: 'data-handling',
    subtopicId: 'probability-basic',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'Bag A has 2 red and 3 blue balls. Bag B has 4 red and 1 blue ball. Which bag gives a higher probability of picking a red ball?',
    answer: 'Bag B',
    options: ['Bag A', 'Bag B', 'Both equal', 'Cannot determine'],
    hint1: 'Calculate P(red) for each bag.',
    hint2: 'Bag A: P(red) = 2/5. Bag B: P(red) = 4/5. Compare.',
    explanation:
      'Bag A: P(red) = 2/5 = 0.4. Bag B: P(red) = 4/5 = 0.8. Bag B has a higher probability.',
  },
  {
    id: 'dh-prob-13',
    topicId: 'data-handling',
    subtopicId: 'probability-basic',
    difficulty: 3,
    type: 'true-false',
    question:
      'A spinner has 5 equal sections: 2 red, 2 blue, 1 green. The probability of NOT landing on green is 4/5. True or false?',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'P(NOT green) = 1 - P(green).',
    hint2: 'P(green) = 1/5. P(NOT green) = 1 - 1/5 = 4/5.',
    explanation:
      'True. P(green) = 1/5. P(NOT green) = 1 - 1/5 = 4/5.',
  },
  {
    id: 'dh-prob-14',
    topicId: 'data-handling',
    subtopicId: 'probability-basic',
    difficulty: 3,
    type: 'fill-in',
    question:
      'A deck of cards has 52 cards. What is the probability of NOT drawing a heart? Write as a simplified fraction.',
    answer: '3/4',
    hint1: 'How many hearts are there in a deck?',
    hint2: 'There are 13 hearts. P(heart) = 13/52 = 1/4. P(NOT heart) = 1 - 1/4.',
    explanation:
      'P(heart) = 13/52 = 1/4. P(NOT heart) = 1 - 1/4 = 3/4.',
  },
  {
    id: 'dh-prob-15',
    topicId: 'data-handling',
    subtopicId: 'probability-basic',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A bag has 6 red, 4 blue, and 5 green marbles. Which colour has the highest probability of being picked?',
    answer: 'Red',
    options: ['Red', 'Blue', 'Green', 'All equal'],
    hint1: 'The colour with the most marbles has the highest probability.',
    hint2: 'Red = 6, Blue = 4, Green = 5. Which is the largest?',
    explanation:
      'Red has 6 marbles (most), so P(red) = 6/15 = 2/5, which is the highest probability.',
  },

  // Level 4 (Very Hard): Combined events, fair/unfair game analysis
  {
    id: 'dh-prob-16',
    topicId: 'data-handling',
    subtopicId: 'probability-basic',
    difficulty: 4,
    type: 'fill-in',
    question:
      'Two coins are tossed together. What is the probability of getting exactly one head? Write as a simplified fraction.',
    answer: '1/2',
    hint1: 'List all possible outcomes when tossing two coins.',
    hint2: 'Outcomes: HH, HT, TH, TT (4 total). Exactly one head: HT, TH (2 outcomes).',
    explanation:
      'Total outcomes = 4 (HH, HT, TH, TT). Favourable (exactly one head) = 2 (HT, TH). P = 2/4 = 1/2.',
  },
  {
    id: 'dh-prob-17',
    topicId: 'data-handling',
    subtopicId: 'probability-basic',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'Two dice are rolled. How many total outcomes are possible?',
    answer: '36',
    options: ['6', '12', '24', '36'],
    hint1: 'Each die has 6 faces. Think about combinations.',
    hint2: 'First die: 6 outcomes. Second die: 6 outcomes. Total = 6 × 6.',
    explanation:
      'Each die has 6 outcomes. Total outcomes = 6 × 6 = 36.',
  },
  {
    id: 'dh-prob-18',
    topicId: 'data-handling',
    subtopicId: 'probability-basic',
    difficulty: 4,
    type: 'fill-in',
    question:
      'Two dice are rolled. What is the probability of getting a sum of 7? Write as a simplified fraction.',
    answer: '1/6',
    hint1: 'List the pairs that give a sum of 7.',
    hint2: 'Pairs summing to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 pairs out of 36 total.',
    explanation:
      'Pairs with sum 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6. P = 6/36 = 1/6.',
  },
  {
    id: 'dh-prob-19',
    topicId: 'data-handling',
    subtopicId: 'probability-basic',
    difficulty: 4,
    type: 'true-false',
    question:
      'A game: you roll a die. You win if you get 1, 2, or 3. Your friend wins if you get 4, 5, or 6. True or false: This is a fair game.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'A fair game means both players have equal chances of winning.',
    hint2: 'You have 3 outcomes (1,2,3) and your friend has 3 outcomes (4,5,6). Both = 3/6 = 1/2.',
    explanation:
      'True. Both players have 3 out of 6 outcomes, so each has a probability of 1/2. The game is fair.',
  },
  {
    id: 'dh-prob-20',
    topicId: 'data-handling',
    subtopicId: 'probability-basic',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A game uses a spinner with sections: Red = 3, Blue = 2, Yellow = 1 (6 equal sections total). Player A wins on Red, Player B wins on Blue or Yellow. Is the game fair?',
    answer: 'Yes, it is fair',
    options: [
      'Yes, it is fair',
      'No, Player A has an advantage',
      'No, Player B has an advantage',
      'Cannot determine',
    ],
    hint1: 'Count the sections for each player.',
    hint2: 'Player A: 3 sections (Red). Player B: 2 + 1 = 3 sections (Blue + Yellow). Are they equal?',
    explanation:
      'Player A has 3/6 = 1/2 chance. Player B has 3/6 = 1/2 chance. Equal chances mean the game is fair.',
  },
]
