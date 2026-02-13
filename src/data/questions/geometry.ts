import type { Question } from '../types'

export const questions: Question[] = [
  // ============================================================
  // ANGLES (geo-angles-1 through geo-angles-20)
  // ============================================================

  // --- Difficulty 1 (Easy): Angle types, basic angle identification ---
  {
    id: 'geo-angles-1',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What do we call an angle that measures exactly 90 degrees?',
    answer: 'Right angle',
    options: ['Acute angle', 'Right angle', 'Obtuse angle', 'Reflex angle'],
    hint1: 'Think about the corner of a book or a door frame.',
    hint2: 'This angle makes a perfect "L" shape and is found in squares and rectangles.',
    explanation:
      'An angle that measures exactly 90° is called a right angle. You can spot them at the corners of squares, rectangles, and books.',
  },
  {
    id: 'geo-angles-2',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 1,
    type: 'true-false',
    question: 'An obtuse angle measures between 90° and 180°.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Think about an angle that is wider than a right angle but not a straight line.',
    hint2: 'A right angle is 90° and a straight angle is 180°. Where does an obtuse angle fall?',
    explanation:
      'True! An obtuse angle measures between 90° and 180°. It is wider than a right angle but less than a straight angle.',
  },
  {
    id: 'geo-angles-3',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'Which of these angle measurements is an acute angle?',
    answer: '55°',
    options: ['55°', '90°', '120°', '180°'],
    hint1: 'An acute angle is smaller than a right angle.',
    hint2: 'An acute angle is any angle that measures less than 90°.',
    explanation:
      'An acute angle measures between 0° and 90°. Of the options, only 55° is less than 90°, so it is the acute angle.',
  },
  {
    id: 'geo-angles-4',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 1,
    type: 'fill-in',
    question: 'A straight angle measures exactly how many degrees?',
    answer: '180',
    hint1: 'A straight angle looks like a flat, straight line.',
    hint2: 'It is exactly two right angles put together. Each right angle is 90°.',
    explanation:
      'A straight angle measures exactly 180°. It looks like a straight line and is equal to two right angles (90° + 90°).',
  },
  {
    id: 'geo-angles-5',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'An angle that measures 200° is called a:',
    answer: 'Reflex angle',
    options: ['Acute angle', 'Obtuse angle', 'Straight angle', 'Reflex angle'],
    hint1: 'This angle is greater than 180°.',
    hint2: 'Angles greater than 180° but less than 360° have a special name.',
    explanation:
      'A reflex angle measures between 180° and 360°. Since 200° is greater than 180°, it is a reflex angle.',
  },

  // --- Difficulty 2 (Medium): Complementary/supplementary angles, basic angle arithmetic ---
  {
    id: 'geo-angles-6',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 2,
    type: 'fill-in',
    question:
      'Two angles are complementary. If one angle is 37°, what is the other angle in degrees?',
    answer: '53',
    hint1: 'Complementary angles add up to a specific number. What is it?',
    hint2: 'Complementary angles add up to 90°. Subtract 37 from 90.',
    explanation:
      'Complementary angles add up to 90°. So the other angle = 90° - 37° = 53°.',
  },
  {
    id: 'geo-angles-7',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'Two angles are supplementary. If one angle is 115°, what is the other angle?',
    answer: '65°',
    options: ['55°', '65°', '75°', '85°'],
    hint1: 'Supplementary angles add up to a number related to a straight line.',
    hint2: 'Supplementary angles add up to 180°. Subtract 115 from 180.',
    explanation:
      'Supplementary angles add up to 180° (a straight line). So the other angle = 180° - 115° = 65°.',
  },
  {
    id: 'geo-angles-8',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 2,
    type: 'true-false',
    question: 'Two angles measuring 45° and 45° are complementary.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Add the two angles together and compare to a key number.',
    hint2: 'Complementary angles add up to 90°. Does 45 + 45 = 90?',
    explanation:
      'True! 45° + 45° = 90°, and complementary angles are pairs of angles that add up to exactly 90°.',
  },
  {
    id: 'geo-angles-9',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 2,
    type: 'fill-in',
    question:
      'An angle and its supplement together form a straight line. If an angle is 72°, what is its supplement in degrees?',
    answer: '108',
    hint1: 'A straight line is 180°. The supplement is the amount needed to complete the line.',
    hint2: 'Supplement = 180° - 72°.',
    explanation:
      'Supplementary angles add up to 180°. The supplement of 72° = 180° - 72° = 108°.',
  },
  {
    id: 'geo-angles-10',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'Which pair of angles is supplementary?',
    answer: '130° and 50°',
    options: ['40° and 50°', '130° and 50°', '60° and 60°', '45° and 55°'],
    hint1: 'Supplementary angles add up to 180°.',
    hint2: 'Check each pair: which two angles add up to exactly 180°?',
    explanation:
      'Supplementary angles add up to 180°. Only 130° + 50° = 180°, so that is the supplementary pair.',
  },

  // --- Difficulty 3 (Hard): Triangle angle sums, angles on a line, multi-step ---
  {
    id: 'geo-angles-11',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 3,
    type: 'fill-in',
    question:
      'In a triangle, two of the angles are 48° and 67°. What is the third angle in degrees?',
    answer: '65',
    hint1: 'All three angles of a triangle add up to a special number.',
    hint2: 'The angles in a triangle add up to 180°. Calculate 180 - 48 - 67.',
    explanation:
      'The angles in any triangle add up to 180°. The third angle = 180° - 48° - 67° = 65°.',
  },
  {
    id: 'geo-angles-12',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A straight line is divided into three angles: 55°, 75°, and a third angle. What is the third angle?',
    answer: '50°',
    options: ['40°', '50°', '60°', '70°'],
    hint1: 'Angles on a straight line add up to a specific total.',
    hint2: 'Angles on a straight line add up to 180°. Find 180 - 55 - 75.',
    explanation:
      'Angles on a straight line add up to 180°. The third angle = 180° - 55° - 75° = 50°.',
  },
  {
    id: 'geo-angles-13',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 3,
    type: 'fill-in',
    question:
      'Two lines cross each other. One of the angles formed is 72°. What is the angle adjacent to it (next to it on the same straight line) in degrees?',
    answer: '108',
    hint1: 'Adjacent angles on a straight line are supplementary.',
    hint2: 'Adjacent angles on a line add up to 180°. Calculate 180 - 72.',
    explanation:
      'When two lines cross, adjacent angles are supplementary (they add up to 180°). So the adjacent angle = 180° - 72° = 108°.',
  },
  {
    id: 'geo-angles-14',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'The exterior angle of a triangle is 130°. If one of the non-adjacent interior angles is 55°, what is the other non-adjacent interior angle?',
    answer: '75°',
    options: ['50°', '65°', '75°', '80°'],
    hint1: 'The exterior angle of a triangle equals the sum of the two non-adjacent interior angles.',
    hint2: 'Exterior angle = sum of the two remote interior angles. So 130° = 55° + ?',
    explanation:
      'The exterior angle theorem states that an exterior angle equals the sum of the two non-adjacent interior angles. So the other angle = 130° - 55° = 75°.',
  },
  {
    id: 'geo-angles-15',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 3,
    type: 'true-false',
    question: 'The sum of angles around a point is 360°.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Think about spinning all the way around in a full circle.',
    hint2: 'A full rotation is 360°. All angles meeting at a single point form a full rotation.',
    explanation:
      'True! The angles around a point always add up to 360°, which is a complete rotation.',
  },

  // --- Difficulty 4 (Very Hard): Multi-step, algebraic thinking, quadrilaterals, polygons ---
  {
    id: 'geo-angles-16',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 4,
    type: 'fill-in',
    question:
      'In a triangle, one angle is twice the smallest angle, and the third angle is three times the smallest angle. What is the smallest angle in degrees?',
    answer: '30',
    hint1: 'Let the smallest angle be x. Then the other angles are 2x and 3x. What do they all add up to?',
    hint2: 'x + 2x + 3x = 180°, so 6x = 180°. Solve for x.',
    explanation:
      'Let the smallest angle = x. Then the angles are x, 2x, and 3x. Since x + 2x + 3x = 180°, we get 6x = 180°, so x = 30°.',
  },
  {
    id: 'geo-angles-17',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'In a quadrilateral, three of the angles are 95°, 80°, and 110°. What is the fourth angle?',
    answer: '75°',
    options: ['65°', '75°', '85°', '95°'],
    hint1: 'The angles in a quadrilateral add up to a specific total. Think about two triangles.',
    hint2: 'The angles in any quadrilateral add up to 360°. Subtract the three known angles from 360.',
    explanation:
      'The interior angles of a quadrilateral add up to 360°. The fourth angle = 360° - 95° - 80° - 110° = 75°.',
  },
  {
    id: 'geo-angles-18',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 4,
    type: 'fill-in',
    question:
      'A regular hexagon has 6 equal sides and 6 equal angles. The sum of interior angles of a hexagon is 720°. What is each interior angle in degrees?',
    answer: '120',
    hint1: 'If all 6 angles are equal and they add up to 720°, what operation do you use?',
    hint2: 'Divide the total (720°) by the number of angles (6).',
    explanation:
      'Since all 6 angles are equal, each angle = 720° / 6 = 120°. Regular polygons have all sides and angles equal.',
  },
  {
    id: 'geo-angles-19',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'Two parallel lines are cut by a transversal. One of the alternate interior angles is 62°. What is the other alternate interior angle?',
    answer: '62°',
    options: ['62°', '118°', '128°', '180°'],
    hint1: 'Alternate interior angles formed by a transversal cutting parallel lines have a special property.',
    hint2: 'Alternate interior angles are always equal when the lines are parallel.',
    explanation:
      'When a transversal crosses two parallel lines, alternate interior angles are equal. So the other alternate interior angle is also 62°.',
  },
  {
    id: 'geo-angles-20',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 4,
    type: 'fill-in',
    question:
      'Two parallel lines are cut by a transversal. A co-interior (same-side interior) angle is 115°. What is the other co-interior angle in degrees?',
    answer: '65',
    hint1: 'Co-interior angles (also called consecutive interior angles) have a special sum when the lines are parallel.',
    hint2: 'Co-interior angles add up to 180°. Calculate 180 - 115.',
    explanation:
      'Co-interior angles (same-side interior angles) are supplementary when formed by parallel lines and a transversal. The other angle = 180° - 115° = 65°.',
  },

  // ============================================================
  // AREA & PERIMETER (geo-ap-1 through geo-ap-20)
  // ============================================================

  // --- Difficulty 1 (Easy): Basic area/perimeter with whole numbers ---
  {
    id: 'geo-ap-1',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 1,
    type: 'fill-in',
    question: 'A rectangle is 9 cm long and 5 cm wide. What is its area in cm²?',
    answer: '45',
    hint1: 'The area of a rectangle uses multiplication.',
    hint2: 'Area of a rectangle = length × width = 9 × 5.',
    explanation: 'Area of a rectangle = length × width = 9 × 5 = 45 cm².',
  },
  {
    id: 'geo-ap-2',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'A square has sides of 7 cm. What is its perimeter?',
    answer: '28 cm',
    options: ['14 cm', '21 cm', '28 cm', '49 cm'],
    hint1: 'A square has 4 equal sides. Add them all up.',
    hint2: 'Perimeter of a square = 4 × side length = 4 × 7.',
    explanation: 'A square has 4 equal sides. Perimeter = 4 × 7 = 28 cm.',
  },
  {
    id: 'geo-ap-3',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 1,
    type: 'fill-in',
    question:
      'A rectangle has a length of 12 cm and a width of 8 cm. What is its perimeter in cm?',
    answer: '40',
    hint1: 'Perimeter means the total distance around the shape.',
    hint2: 'Perimeter of a rectangle = 2 × (length + width) = 2 × (12 + 8).',
    explanation:
      'Perimeter = 2 × (length + width) = 2 × (12 + 8) = 2 × 20 = 40 cm.',
  },
  {
    id: 'geo-ap-4',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 1,
    type: 'true-false',
    question: 'A square with side 6 cm has the same perimeter as a rectangle with length 8 cm and width 4 cm.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Calculate the perimeter of each shape separately.',
    hint2: 'Square perimeter = 4 × 6 = 24. Rectangle perimeter = 2 × (8 + 4) = 24.',
    explanation:
      'True! The square has perimeter = 4 × 6 = 24 cm. The rectangle has perimeter = 2 × (8 + 4) = 2 × 12 = 24 cm. They are equal.',
  },
  {
    id: 'geo-ap-5',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'A square has an area of 64 cm². What is the length of one side?',
    answer: '8 cm',
    options: ['6 cm', '7 cm', '8 cm', '16 cm'],
    hint1: 'For a square, area = side × side. What number times itself gives 64?',
    hint2: 'Try: 8 × 8 = ?',
    explanation:
      'Area of a square = side × side. Since 8 × 8 = 64, the side length is 8 cm.',
  },

  // --- Difficulty 2 (Medium): Parallelogram, trapezium, composite shapes intro ---
  {
    id: 'geo-ap-6',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 2,
    type: 'fill-in',
    question:
      'A parallelogram has a base of 12 cm and a height of 7 cm. What is its area in cm²?',
    answer: '84',
    hint1: 'The area of a parallelogram is similar to the area of a rectangle.',
    hint2: 'Area of a parallelogram = base × height = 12 × 7.',
    explanation:
      'Area of a parallelogram = base × height = 12 × 7 = 84 cm².',
  },
  {
    id: 'geo-ap-7',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 2,
    type: 'multiple-choice',
    question:
      'A trapezium has parallel sides of 10 cm and 6 cm, and a height of 5 cm. What is its area?',
    answer: '40 cm²',
    options: ['30 cm²', '35 cm²', '40 cm²', '50 cm²'],
    hint1: 'The area of a trapezium uses the two parallel sides and the height.',
    hint2: 'Area = (sum of parallel sides) × height / 2 = (10 + 6) × 5 / 2.',
    explanation:
      'Area of a trapezium = (a + b) × h / 2 = (10 + 6) × 5 / 2 = 16 × 5 / 2 = 80 / 2 = 40 cm².',
  },
  {
    id: 'geo-ap-8',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 2,
    type: 'fill-in',
    question:
      'A rectangular garden is 15 m long and 9 m wide. How many meters of fencing are needed to go around it?',
    answer: '48',
    hint1: 'Fencing goes around the outside, so you need the perimeter.',
    hint2: 'Perimeter = 2 × (length + width) = 2 × (15 + 9).',
    explanation:
      'Perimeter = 2 × (length + width) = 2 × (15 + 9) = 2 × 24 = 48 m of fencing.',
  },
  {
    id: 'geo-ap-9',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 2,
    type: 'multiple-choice',
    question:
      'A room is 10 m long and 8 m wide. If tiles cost ₹60 per square meter, how much will it cost to tile the floor?',
    answer: '₹4,800',
    options: ['₹4,200', '₹4,800', '₹5,400', '₹6,000'],
    hint1: 'First find the area, then multiply by the cost per square meter.',
    hint2: 'Area = 10 × 8 = 80 m². Cost = 80 × 60.',
    explanation:
      'Area = 10 × 8 = 80 m². Cost = 80 × ₹60 = ₹4,800.',
  },
  {
    id: 'geo-ap-10',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 2,
    type: 'true-false',
    question:
      'A parallelogram with a base of 8 cm and a height of 5 cm has the same area as a rectangle that is 8 cm long and 5 cm wide.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Calculate the area of each shape using their respective formulas.',
    hint2: 'Parallelogram area = base × height = 8 × 5 = 40. Rectangle area = length × width = 8 × 5 = 40.',
    explanation:
      'True! Both have an area of 40 cm². A parallelogram and a rectangle with the same base and height always have equal areas.',
  },

  // --- Difficulty 3 (Hard): Composite shapes, multi-step word problems ---
  {
    id: 'geo-ap-11',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 3,
    type: 'fill-in',
    question:
      'An L-shaped room is made of two rectangles. The first is 8 m × 5 m, and the second is 4 m × 3 m. What is the total area in m²?',
    answer: '52',
    hint1: 'For composite shapes, find the area of each piece and add them.',
    hint2: 'First rectangle: 8 × 5 = 40. Second rectangle: 4 × 3 = 12. Total = 40 + 12.',
    explanation:
      'Area = (8 × 5) + (4 × 3) = 40 + 12 = 52 m².',
  },
  {
    id: 'geo-ap-12',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A rectangular yard is 20 m by 15 m. A square flower bed with sides of 4 m is built inside. What is the area of the remaining yard?',
    answer: '284 m²',
    options: ['276 m²', '280 m²', '284 m²', '296 m²'],
    hint1: 'Find the total area and subtract the flower bed area.',
    hint2: 'Yard area = 20 × 15 = 300. Flower bed = 4 × 4 = 16. Remaining = 300 - 16.',
    explanation:
      'Yard area = 20 × 15 = 300 m². Flower bed area = 4 × 4 = 16 m². Remaining = 300 - 16 = 284 m².',
  },
  {
    id: 'geo-ap-13',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 3,
    type: 'fill-in',
    question:
      'A rectangle has a length of 14.5 cm and a width of 6 cm. What is its area in cm²?',
    answer: '87',
    hint1: 'Use the same formula: area = length × width.',
    hint2: 'Multiply 14.5 × 6. Think of it as (14 × 6) + (0.5 × 6) = 84 + 3.',
    explanation:
      'Area = 14.5 × 6 = 87 cm². Breaking it down: (14 × 6) + (0.5 × 6) = 84 + 3 = 87.',
  },
  {
    id: 'geo-ap-14',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A rectangular park is 50 m long and 30 m wide. A 2 m wide path runs along the inside of all four edges. What is the area of the path?',
    answer: '304 m²',
    options: ['296 m²', '304 m²', '312 m²', '320 m²'],
    hint1: 'Find the outer area, then subtract the inner area (the part without the path).',
    hint2: 'Outer area = 50 × 30 = 1500. Inner dimensions: (50 - 4) × (30 - 4) = 46 × 26 = 1196. Path = 1500 - 1196.',
    explanation:
      'Outer area = 50 × 30 = 1500 m². The path is 2 m on each side, so inner dimensions = 46 m × 26 m. Inner area = 1196 m². Path area = 1500 - 1196 = 304 m².',
  },
  {
    id: 'geo-ap-15',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 3,
    type: 'fill-in',
    question:
      'A rhombus has diagonals of 10 cm and 8 cm. What is its area in cm²?',
    answer: '40',
    hint1: 'The area of a rhombus can be found using its diagonals.',
    hint2: 'Area of a rhombus = (diagonal₁ × diagonal₂) / 2 = (10 × 8) / 2.',
    explanation:
      'Area of a rhombus = (d₁ × d₂) / 2 = (10 × 8) / 2 = 80 / 2 = 40 cm².',
  },

  // --- Difficulty 4 (Very Hard): Multi-step, real-world, advanced composite ---
  {
    id: 'geo-ap-16',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 4,
    type: 'fill-in',
    question:
      'A rectangular piece of cardboard is 30 cm × 20 cm. A 3 cm square is cut from each corner. What is the remaining area in cm²?',
    answer: '564',
    hint1: 'Find the full area, then subtract all four corner squares.',
    hint2: 'Full area = 30 × 20 = 600. Each corner = 3 × 3 = 9. Four corners = 4 × 9 = 36. Remaining = 600 - 36.',
    explanation:
      'Full area = 30 × 20 = 600 cm². Each corner square = 3 × 3 = 9 cm². Four corners = 4 × 9 = 36 cm². Remaining = 600 - 36 = 564 cm².',
  },
  {
    id: 'geo-ap-17',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A rectangular hall is 25 m × 18 m. It needs to be painted on all 4 walls (height 4 m) and the ceiling. What is the total area to be painted?',
    answer: '794 m²',
    options: ['744 m²', '794 m²', '844 m²', '900 m²'],
    hint1: 'Calculate the wall area (4 walls) and ceiling area separately, then add.',
    hint2: 'Two walls: 2 × (25 × 4) = 200. Two walls: 2 × (18 × 4) = 144. Ceiling: 25 × 18 = 450. Total = 200 + 144 + 450.',
    explanation:
      'Wall area = 2 × (25 × 4) + 2 × (18 × 4) = 200 + 144 = 344 m². Ceiling = 25 × 18 = 450 m². Total = 344 + 450 = 794 m².',
  },
  {
    id: 'geo-ap-18',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 4,
    type: 'fill-in',
    question:
      'A trapezium has parallel sides of 15 cm and 9 cm, and a height of 8 cm. What is its area in cm²?',
    answer: '96',
    hint1: 'Use the trapezium area formula with the two parallel sides and the height.',
    hint2: 'Area = (15 + 9) × 8 / 2 = 24 × 8 / 2.',
    explanation:
      'Area = (a + b) × h / 2 = (15 + 9) × 8 / 2 = 24 × 8 / 2 = 192 / 2 = 96 cm².',
  },
  {
    id: 'geo-ap-19',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A square field has a perimeter of 120 m. What is the area of the field?',
    answer: '900 m²',
    options: ['625 m²', '784 m²', '900 m²', '1,024 m²'],
    hint1: 'First find the side length from the perimeter, then calculate the area.',
    hint2: 'Side = perimeter / 4 = 120 / 4 = 30 m. Area = 30 × 30.',
    explanation:
      'Side = 120 / 4 = 30 m. Area = 30 × 30 = 900 m².',
  },
  {
    id: 'geo-ap-20',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 4,
    type: 'fill-in',
    question:
      'A rectangular plot is 40 m long and 25 m wide. A path 2.5 m wide runs along the outside of the plot. What is the area of the path alone in m²?',
    answer: '350',
    hint1: 'The outer rectangle includes the plot plus the path on all sides. Find both areas and subtract.',
    hint2: 'Outer dimensions: (40 + 5) × (25 + 5) = 45 × 30 = 1350. Inner area = 40 × 25 = 1000. Path = 1350 - 1000.',
    explanation:
      'The path adds 2.5 m on each side. Outer dimensions = 45 m × 30 m. Outer area = 1350 m². Inner area = 40 × 25 = 1000 m². Path area = 1350 - 1000 = 350 m².',
  },

  // ============================================================
  // VOLUME (geo-vol-1 through geo-vol-20)
  // ============================================================

  // --- Difficulty 1 (Easy): Basic volume concepts and simple cubes ---
  {
    id: 'geo-vol-1',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What does volume measure?',
    answer: 'The amount of space inside a 3D shape',
    options: [
      'The distance around a shape',
      'The flat space inside a shape',
      'The amount of space inside a 3D shape',
      'The weight of a shape',
    ],
    hint1: 'Think about how much water a box can hold.',
    hint2: 'Volume is about 3D space — how much stuff an object can contain inside it.',
    explanation:
      'Volume measures the amount of 3D space inside an object. For example, the volume of a box tells you how much it can hold.',
  },
  {
    id: 'geo-vol-2',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 1,
    type: 'true-false',
    question: 'Volume is measured in cubic units like cm³ or m³.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Think about stacking tiny cubes inside a box to fill it up.',
    hint2: 'Each tiny cube is 1 unit × 1 unit × 1 unit = 1 cubic unit.',
    explanation:
      'True! Volume is measured in cubic units because we count how many unit cubes fit inside a 3D shape. Common units are cm³, m³, and liters.',
  },
  {
    id: 'geo-vol-3',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 1,
    type: 'fill-in',
    question: 'A cube has sides of 3 cm. What is its volume in cm³?',
    answer: '27',
    hint1: 'A cube has all sides equal. Volume of a cube = side × side × side.',
    hint2: 'Volume = 3 × 3 × 3. First find 3 × 3 = 9, then multiply by 3.',
    explanation: 'Volume of a cube = side³ = 3 × 3 × 3 = 27 cm³.',
  },
  {
    id: 'geo-vol-4',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'A rectangular box (cuboid) is 6 cm long, 4 cm wide, and 3 cm tall. What is its volume?',
    answer: '72 cm³',
    options: ['48 cm³', '60 cm³', '72 cm³', '84 cm³'],
    hint1: 'Volume of a cuboid = length × width × height.',
    hint2: 'Multiply: 6 × 4 × 3.',
    explanation:
      'Volume of a cuboid = length × width × height = 6 × 4 × 3 = 72 cm³.',
  },
  {
    id: 'geo-vol-5',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 1,
    type: 'fill-in',
    question: 'A cube has sides of 5 cm. What is its volume in cm³?',
    answer: '125',
    hint1: 'Volume of a cube = side × side × side.',
    hint2: 'Volume = 5 × 5 × 5. First 5 × 5 = 25, then 25 × 5.',
    explanation: 'Volume of a cube = 5³ = 5 × 5 × 5 = 125 cm³.',
  },

  // --- Difficulty 2 (Medium): Cuboid calculations, basic unit conversion ---
  {
    id: 'geo-vol-6',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 2,
    type: 'fill-in',
    question:
      'A fish tank is 50 cm long, 30 cm wide, and 40 cm tall. How many liters of water can it hold? (1 liter = 1,000 cm³)',
    answer: '60',
    hint1: 'First find the volume in cm³, then convert to liters.',
    hint2: 'Volume = 50 × 30 × 40 = 60,000 cm³. Divide by 1,000 to get liters.',
    explanation:
      'Volume = 50 × 30 × 40 = 60,000 cm³. Since 1 liter = 1,000 cm³, the tank holds 60,000 / 1,000 = 60 liters.',
  },
  {
    id: 'geo-vol-7',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 2,
    type: 'multiple-choice',
    question:
      'A cube has a volume of 64 cm³. What is the length of one side?',
    answer: '4 cm',
    options: ['3 cm', '4 cm', '8 cm', '16 cm'],
    hint1: 'If side × side × side = 64, what number multiplied by itself three times gives 64?',
    hint2: 'Try: 4 × 4 × 4 = ?',
    explanation:
      'Since volume of a cube = side³, we need side³ = 64. Because 4 × 4 × 4 = 64, the side length is 4 cm.',
  },
  {
    id: 'geo-vol-8',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 2,
    type: 'fill-in',
    question:
      'A rectangular box is 8 cm long, 5 cm wide, and 4 cm tall. What is its volume in cm³?',
    answer: '160',
    hint1: 'Volume of a cuboid = length × width × height.',
    hint2: '8 × 5 = 40. Then 40 × 4 = ?',
    explanation:
      'Volume = length × width × height = 8 × 5 × 4 = 160 cm³.',
  },
  {
    id: 'geo-vol-9',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 2,
    type: 'multiple-choice',
    question:
      'A storage box is 12 cm long, 10 cm wide, and 5 cm tall. How many 1 cm³ cubes can fit inside?',
    answer: '600',
    options: ['270', '500', '600', '720'],
    hint1: 'The number of 1 cm³ cubes equals the volume in cm³.',
    hint2: 'Volume = 12 × 10 × 5.',
    explanation:
      'Volume = 12 × 10 × 5 = 600 cm³. Since each small cube is 1 cm³, exactly 600 cubes fit inside.',
  },
  {
    id: 'geo-vol-10',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 2,
    type: 'true-false',
    question:
      'A cuboid with dimensions 2 cm × 3 cm × 6 cm has the same volume as a cuboid with dimensions 4 cm × 3 cm × 3 cm.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Calculate the volume of each cuboid separately.',
    hint2: 'First: 2 × 3 × 6 = 36. Second: 4 × 3 × 3 = 36.',
    explanation:
      'True! First cuboid: 2 × 3 × 6 = 36 cm³. Second cuboid: 4 × 3 × 3 = 36 cm³. They have the same volume.',
  },

  // --- Difficulty 3 (Hard): Composite volumes, multi-step, decimal measurements ---
  {
    id: 'geo-vol-11',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 3,
    type: 'fill-in',
    question:
      'An L-shaped solid is made by joining two cuboids. The first cuboid is 10 cm × 4 cm × 3 cm. The second cuboid is 6 cm × 4 cm × 3 cm. What is the total volume in cm³?',
    answer: '192',
    hint1: 'Find the volume of each cuboid separately, then add them.',
    hint2: 'First: 10 × 4 × 3 = 120. Second: 6 × 4 × 3 = 72. Total = 120 + 72.',
    explanation:
      'Volume of first cuboid = 10 × 4 × 3 = 120 cm³. Volume of second = 6 × 4 × 3 = 72 cm³. Total = 120 + 72 = 192 cm³.',
  },
  {
    id: 'geo-vol-12',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A rectangular box is 10 cm long, 6.5 cm wide, and 4 cm tall. What is its volume?',
    answer: '260 cm³',
    options: ['240 cm³', '250 cm³', '260 cm³', '280 cm³'],
    hint1: 'Volume = length × width × height.',
    hint2: '10 × 6.5 = 65. Then 65 × 4 = ?',
    explanation:
      'Volume = 10 × 6.5 × 4 = 65 × 4 = 260 cm³.',
  },
  {
    id: 'geo-vol-13',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 3,
    type: 'fill-in',
    question:
      'A swimming pool is 25 m long, 10 m wide, and 2 m deep. How many liters of water does it hold? (1 m³ = 1,000 liters)',
    answer: '500000',
    hint1: 'First find the volume in m³, then convert to liters.',
    hint2: 'Volume = 25 × 10 × 2 = 500 m³. Multiply by 1,000 to get liters.',
    explanation:
      'Volume = 25 × 10 × 2 = 500 m³. Since 1 m³ = 1,000 liters, the pool holds 500 × 1,000 = 500,000 liters.',
  },
  {
    id: 'geo-vol-14',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A cuboid has a volume of 360 cm³. Its length is 10 cm and width is 6 cm. What is its height?',
    answer: '6 cm',
    options: ['4 cm', '5 cm', '6 cm', '8 cm'],
    hint1: 'You know the volume formula. Rearrange it to find the height.',
    hint2: 'Volume = length × width × height, so height = volume / (length × width) = 360 / (10 × 6).',
    explanation:
      'Height = volume / (length × width) = 360 / (10 × 6) = 360 / 60 = 6 cm.',
  },
  {
    id: 'geo-vol-15',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 3,
    type: 'fill-in',
    question:
      'A cube has a surface area of 150 cm² (6 faces). What is the length of one side in cm?',
    answer: '5',
    hint1: 'A cube has 6 equal square faces. Find the area of one face first.',
    hint2: 'One face area = 150 / 6 = 25 cm². Since the face is a square, side = sqrt(25) = 5.',
    explanation:
      'A cube has 6 identical faces. Area of one face = 150 / 6 = 25 cm². Since each face is a square, side = 5 cm (because 5 × 5 = 25).',
  },

  // --- Difficulty 4 (Very Hard): Challenging composite, real-world, advanced ---
  {
    id: 'geo-vol-16',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 4,
    type: 'fill-in',
    question:
      'A large cube has sides of 10 cm. A smaller cube with sides of 4 cm is cut out from one corner. What is the remaining volume in cm³?',
    answer: '936',
    hint1: 'Find the volume of the large cube, then subtract the small cube that was removed.',
    hint2: 'Large cube = 10³ = 1,000. Small cube = 4³ = 64. Remaining = 1,000 - 64.',
    explanation:
      'Large cube volume = 10³ = 1,000 cm³. Small cube volume = 4³ = 64 cm³. Remaining = 1,000 - 64 = 936 cm³.',
  },
  {
    id: 'geo-vol-17',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A container is 80 cm long, 50 cm wide, and 40 cm tall. How many boxes measuring 10 cm × 10 cm × 10 cm can fit inside?',
    answer: '160',
    options: ['120', '140', '160', '200'],
    hint1: 'Figure out how many small boxes fit along each dimension of the container.',
    hint2: 'Along length: 80/10 = 8. Width: 50/10 = 5. Height: 40/10 = 4. Total = 8 × 5 × 4.',
    explanation:
      'Along length: 80/10 = 8 boxes. Along width: 50/10 = 5 boxes. Along height: 40/10 = 4 boxes. Total = 8 × 5 × 4 = 160 boxes.',
  },
  {
    id: 'geo-vol-18',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 4,
    type: 'fill-in',
    question:
      'A T-shaped solid is made from two cuboids. The top bar is 12 cm × 3 cm × 4 cm. The vertical part is 3 cm × 8 cm × 4 cm. What is the total volume in cm³?',
    answer: '240',
    hint1: 'Find the volume of each part and add them together.',
    hint2: 'Top: 12 × 3 × 4 = 144. Vertical: 3 × 8 × 4 = 96. Total = 144 + 96.',
    explanation:
      'Top bar volume = 12 × 3 × 4 = 144 cm³. Vertical part = 3 × 8 × 4 = 96 cm³. Total = 144 + 96 = 240 cm³.',
  },
  {
    id: 'geo-vol-19',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A water tank is 2 m long, 1.5 m wide, and 1 m deep. Water is filled to 80% of its capacity. How many liters of water are in the tank? (1 m³ = 1,000 liters)',
    answer: '2,400 liters',
    options: ['2,000 liters', '2,400 liters', '2,800 liters', '3,000 liters'],
    hint1: 'First find the full volume, then take 80% of it.',
    hint2: 'Full volume = 2 × 1.5 × 1 = 3 m³ = 3,000 liters. 80% of 3,000 = 0.8 × 3,000.',
    explanation:
      'Full volume = 2 × 1.5 × 1 = 3 m³ = 3,000 liters. 80% of 3,000 = 2,400 liters.',
  },
  {
    id: 'geo-vol-20',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 4,
    type: 'fill-in',
    question:
      'A rectangular block of metal is 15 cm × 10 cm × 8 cm. It is melted and recast into small cubes of side 2 cm. How many small cubes can be made?',
    answer: '150',
    hint1: 'Find the volume of the block, then divide by the volume of one small cube.',
    hint2: 'Block volume = 15 × 10 × 8 = 1,200 cm³. Small cube volume = 2³ = 8 cm³. Number = 1,200 / 8.',
    explanation:
      'Block volume = 15 × 10 × 8 = 1,200 cm³. Small cube volume = 2³ = 8 cm³. Number of cubes = 1,200 / 8 = 150.',
  },

  // ============================================================
  // TRIANGLES (geo-tri-1 through geo-tri-20)
  // ============================================================

  // --- Difficulty 1 (Easy): Triangle types, basic properties ---
  {
    id: 'geo-tri-1',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What type of triangle has all three sides equal?',
    answer: 'Equilateral triangle',
    options: [
      'Scalene triangle',
      'Isosceles triangle',
      'Equilateral triangle',
      'Right triangle',
    ],
    hint1: '"Equi" means equal and "lateral" means sides.',
    hint2: 'An equilateral triangle has all sides the same length and all angles equal to 60°.',
    explanation:
      'An equilateral triangle has all three sides equal and all three angles equal (each 60°).',
  },
  {
    id: 'geo-tri-2',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 1,
    type: 'true-false',
    question: 'The sum of the interior angles of any triangle is 180°.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'This is one of the most important rules in geometry.',
    hint2: 'No matter what shape or size, the three angles inside a triangle always add to the same total.',
    explanation:
      'True! The three interior angles of any triangle always add up to exactly 180°.',
  },
  {
    id: 'geo-tri-3',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'A triangle with two equal sides is called:',
    answer: 'Isosceles triangle',
    options: [
      'Equilateral triangle',
      'Isosceles triangle',
      'Scalene triangle',
      'Obtuse triangle',
    ],
    hint1: '"Iso" means equal and "skeles" relates to legs.',
    hint2: 'This triangle has exactly two sides of equal length (and the third side is different).',
    explanation:
      'An isosceles triangle has exactly two sides of equal length. The angles opposite the equal sides are also equal.',
  },
  {
    id: 'geo-tri-4',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 1,
    type: 'fill-in',
    question:
      'A triangle has sides of 5 cm, 7 cm, and 9 cm. What is its perimeter in cm?',
    answer: '21',
    hint1: 'Perimeter means adding up all the sides.',
    hint2: 'Perimeter = 5 + 7 + 9.',
    explanation: 'Perimeter = sum of all sides = 5 + 7 + 9 = 21 cm.',
  },
  {
    id: 'geo-tri-5',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'A triangle with a 90° angle is called a:',
    answer: 'Right triangle',
    options: [
      'Acute triangle',
      'Right triangle',
      'Obtuse triangle',
      'Equilateral triangle',
    ],
    hint1: 'The 90° angle has a special name — what kind of angle is it?',
    hint2: 'A 90° angle is a right angle, so the triangle is named after it.',
    explanation:
      'A triangle containing a 90° angle is called a right triangle. The side opposite the right angle is called the hypotenuse.',
  },

  // --- Difficulty 2 (Medium): Triangle area and perimeter calculations ---
  {
    id: 'geo-tri-6',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 2,
    type: 'fill-in',
    question:
      'A triangle has a base of 12 cm and a height of 8 cm. What is its area in cm²?',
    answer: '48',
    hint1: 'The area of a triangle is half the area of a rectangle with the same base and height.',
    hint2: 'Area of a triangle = (base × height) / 2 = (12 × 8) / 2.',
    explanation:
      'Area = (base × height) / 2 = (12 × 8) / 2 = 96 / 2 = 48 cm².',
  },
  {
    id: 'geo-tri-7',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 2,
    type: 'multiple-choice',
    question:
      'An isosceles triangle has two equal sides of 10 cm each and a base of 8 cm. What is its perimeter?',
    answer: '28 cm',
    options: ['24 cm', '26 cm', '28 cm', '30 cm'],
    hint1: 'Add all three sides together.',
    hint2: 'Perimeter = 10 + 10 + 8.',
    explanation:
      'Perimeter = 10 + 10 + 8 = 28 cm.',
  },
  {
    id: 'geo-tri-8',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 2,
    type: 'fill-in',
    question:
      'A right triangle has legs of 9 cm and 12 cm. What is its area in cm²?',
    answer: '54',
    hint1: 'In a right triangle, the two legs serve as the base and height.',
    hint2: 'Area = (base × height) / 2 = (9 × 12) / 2.',
    explanation:
      'In a right triangle, the legs are perpendicular. Area = (9 × 12) / 2 = 108 / 2 = 54 cm².',
  },
  {
    id: 'geo-tri-9',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 2,
    type: 'multiple-choice',
    question:
      'An equilateral triangle has a perimeter of 36 cm. What is the length of each side?',
    answer: '12 cm',
    options: ['9 cm', '10 cm', '12 cm', '18 cm'],
    hint1: 'An equilateral triangle has three equal sides.',
    hint2: 'Each side = perimeter / 3 = 36 / 3.',
    explanation:
      'An equilateral triangle has 3 equal sides. Each side = 36 / 3 = 12 cm.',
  },
  {
    id: 'geo-tri-10',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 2,
    type: 'true-false',
    question:
      'A triangle with a base of 10 cm and a height of 6 cm has an area of 30 cm².',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Use the triangle area formula to check.',
    hint2: 'Area = (10 × 6) / 2 = 60 / 2 = 30. Is this correct?',
    explanation:
      'True! Area = (base × height) / 2 = (10 × 6) / 2 = 30 cm².',
  },

  // --- Difficulty 3 (Hard): Finding missing measurements, multi-step ---
  {
    id: 'geo-tri-11',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 3,
    type: 'fill-in',
    question:
      'A triangle has an area of 56 cm² and a base of 14 cm. What is its height in cm?',
    answer: '8',
    hint1: 'You know the area formula. Rearrange it to find the height.',
    hint2: 'Area = (base × height) / 2, so height = (2 × area) / base = (2 × 56) / 14.',
    explanation:
      'Height = (2 × area) / base = (2 × 56) / 14 = 112 / 14 = 8 cm.',
  },
  {
    id: 'geo-tri-12',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'In a triangle, one angle is 90° and another is 35°. What is the third angle?',
    answer: '55°',
    options: ['45°', '55°', '65°', '75°'],
    hint1: 'The angles of a triangle add up to 180°.',
    hint2: 'Third angle = 180° - 90° - 35°.',
    explanation:
      'The angles add up to 180°. Third angle = 180° - 90° - 35° = 55°.',
  },
  {
    id: 'geo-tri-13',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 3,
    type: 'fill-in',
    question:
      'A rectangle is 18 cm long and 10 cm wide. A diagonal divides it into two equal triangles. What is the area of one triangle in cm²?',
    answer: '90',
    hint1: 'A diagonal splits a rectangle into two identical triangles.',
    hint2: 'Rectangle area = 18 × 10 = 180. Each triangle = 180 / 2.',
    explanation:
      'Rectangle area = 18 × 10 = 180 cm². A diagonal divides it into two equal triangles, so each triangle = 180 / 2 = 90 cm².',
  },
  {
    id: 'geo-tri-14',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A triangular garden has a base of 15 m and a height of 8 m. If grass seed costs ₹5 per m², how much does it cost to cover the entire garden?',
    answer: '₹300',
    options: ['₹250', '₹300', '₹450', '₹600'],
    hint1: 'First find the area, then multiply by the cost per m².',
    hint2: 'Area = (15 × 8) / 2 = 60 m². Cost = 60 × 5.',
    explanation:
      'Area = (15 × 8) / 2 = 60 m². Cost = 60 × ₹5 = ₹300.',
  },
  {
    id: 'geo-tri-15',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 3,
    type: 'fill-in',
    question:
      'A triangle has a base of 16.5 cm and a height of 10 cm. What is its area in cm²?',
    answer: '82.5',
    hint1: 'Use the triangle area formula with the decimal base.',
    hint2: 'Area = (16.5 × 10) / 2 = 165 / 2.',
    explanation:
      'Area = (base × height) / 2 = (16.5 × 10) / 2 = 165 / 2 = 82.5 cm².',
  },

  // --- Difficulty 4 (Very Hard): Multi-step, composite, real-world ---
  {
    id: 'geo-tri-16',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 4,
    type: 'fill-in',
    question:
      'A large triangle has a base of 24 cm and a height of 16 cm. Inside it, a smaller triangle with a base of 10 cm and a height of 6 cm is cut out. What is the area of the remaining shape in cm²?',
    answer: '162',
    hint1: 'Find the area of the large triangle, then subtract the area of the small triangle.',
    hint2: 'Large = (24 × 16) / 2 = 192. Small = (10 × 6) / 2 = 30. Remaining = 192 - 30.',
    explanation:
      'Large triangle area = (24 × 16) / 2 = 192 cm². Small triangle area = (10 × 6) / 2 = 30 cm². Remaining = 192 - 30 = 162 cm².',
  },
  {
    id: 'geo-tri-17',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A right triangle has legs of 5 cm and 12 cm. Using the Pythagorean theorem (a² + b² = c²), what is the length of the hypotenuse?',
    answer: '13 cm',
    options: ['11 cm', '13 cm', '15 cm', '17 cm'],
    hint1: 'The hypotenuse is the longest side, opposite the right angle.',
    hint2: 'c² = 5² + 12² = 25 + 144 = 169. What number squared is 169?',
    explanation:
      'Using the Pythagorean theorem: c² = 5² + 12² = 25 + 144 = 169. c = 13 cm (since 13 × 13 = 169).',
  },
  {
    id: 'geo-tri-18',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 4,
    type: 'fill-in',
    question:
      'In a triangle, one angle is 40° and another angle is twice the first angle. What is the third angle in degrees?',
    answer: '60',
    hint1: 'Find all three angles using the information given.',
    hint2: 'Angles: 40°, 2 × 40° = 80°, and the third angle. They add to 180°. Third = 180 - 40 - 80.',
    explanation:
      'The three angles are 40°, 80° (twice 40°), and the third angle. Third angle = 180° - 40° - 80° = 60°.',
  },
  {
    id: 'geo-tri-19',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A right triangle has legs of 8 cm and 6 cm. What is the perimeter of this triangle? (Use the Pythagorean theorem to find the hypotenuse: a² + b² = c²)',
    answer: '24 cm',
    options: ['20 cm', '22 cm', '24 cm', '26 cm'],
    hint1: 'First find the hypotenuse using a² + b² = c², then add all three sides.',
    hint2: 'c² = 8² + 6² = 64 + 36 = 100. c = 10. Perimeter = 8 + 6 + 10.',
    explanation:
      'Hypotenuse: c² = 64 + 36 = 100, so c = 10 cm. Perimeter = 8 + 6 + 10 = 24 cm.',
  },
  {
    id: 'geo-tri-20',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 4,
    type: 'fill-in',
    question:
      'A triangular flag has a base of 1.2 m and a height of 0.8 m. Fabric costs ₹150 per m². What is the cost to make one flag in rupees?',
    answer: '72',
    hint1: 'Find the area of the triangle first, then multiply by the cost per m².',
    hint2: 'Area = (1.2 × 0.8) / 2 = 0.96 / 2 = 0.48 m². Cost = 0.48 × 150.',
    explanation:
      'Area = (1.2 × 0.8) / 2 = 0.48 m². Cost = 0.48 × ₹150 = ₹72.',
  },

  // ============================================================
  // CIRCLES (geo-cir-1 through geo-cir-20)
  // ============================================================

  // --- Difficulty 1 (Easy): Basic circle concepts ---
  {
    id: 'geo-cir-1',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 1,
    type: 'multiple-choice',
    question:
      'What is the name of the straight line from the center of a circle to any point on its edge?',
    answer: 'Radius',
    options: ['Diameter', 'Radius', 'Circumference', 'Chord'],
    hint1: 'This line goes from the very center to the edge — just halfway across.',
    hint2: 'It is half the length of the diameter.',
    explanation:
      'The radius is the distance from the center of a circle to any point on its edge. It is half the diameter.',
  },
  {
    id: 'geo-cir-2',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 1,
    type: 'true-false',
    question: 'The diameter of a circle is twice the radius.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'The diameter goes all the way across the circle through the center.',
    hint2: 'If the radius is center to edge, the diameter is edge to edge through the center.',
    explanation:
      'True! The diameter passes through the center from one side to the other, so diameter = 2 × radius.',
  },
  {
    id: 'geo-cir-3',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 1,
    type: 'fill-in',
    question: 'A circle has a radius of 9 cm. What is its diameter in cm?',
    answer: '18',
    hint1: 'The diameter is related to the radius by a simple multiplication.',
    hint2: 'Diameter = 2 × radius = 2 × 9.',
    explanation: 'Diameter = 2 × radius = 2 × 9 = 18 cm.',
  },
  {
    id: 'geo-cir-4',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'A circle has a diameter of 16 cm. What is its radius?',
    answer: '8 cm',
    options: ['4 cm', '8 cm', '16 cm', '32 cm'],
    hint1: 'The radius is half the diameter.',
    hint2: 'Radius = diameter / 2 = 16 / 2.',
    explanation: 'Radius = diameter / 2 = 16 / 2 = 8 cm.',
  },
  {
    id: 'geo-cir-5',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What is the name for the distance around a circle?',
    answer: 'Circumference',
    options: ['Perimeter', 'Diameter', 'Circumference', 'Area'],
    hint1: 'It is the circular equivalent of the perimeter of a polygon.',
    hint2: 'The specific term for the perimeter of a circle starts with the letter "C".',
    explanation:
      'The circumference is the distance around the outside of a circle. It is the circle equivalent of perimeter.',
  },

  // --- Difficulty 2 (Medium): Circumference and basic area calculations ---
  {
    id: 'geo-cir-6',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 2,
    type: 'fill-in',
    question:
      'A circle has a diameter of 10 cm. Using pi = 3.14, what is its circumference in cm?',
    answer: '31.4',
    hint1: 'Circumference uses pi and the diameter.',
    hint2: 'Circumference = pi × diameter = 3.14 × 10.',
    explanation: 'Circumference = pi × diameter = 3.14 × 10 = 31.4 cm.',
  },
  {
    id: 'geo-cir-7',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 2,
    type: 'multiple-choice',
    question:
      'A circle has a radius of 7 cm. Using pi = 3.14, what is its circumference?',
    answer: '43.96 cm',
    options: ['21.98 cm', '43.96 cm', '87.92 cm', '153.86 cm'],
    hint1: 'First find the diameter from the radius, or use C = 2 × pi × r.',
    hint2: 'Circumference = 2 × pi × r = 2 × 3.14 × 7 = 6.28 × 7.',
    explanation:
      'Circumference = 2 × pi × r = 2 × 3.14 × 7 = 43.96 cm.',
  },
  {
    id: 'geo-cir-8',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 2,
    type: 'fill-in',
    question:
      'A circle has a radius of 5 cm. Using pi = 3.14, what is its area in cm²?',
    answer: '78.5',
    hint1: 'The area of a circle uses pi and the radius squared.',
    hint2: 'Area = pi × r² = 3.14 × 5 × 5 = 3.14 × 25.',
    explanation: 'Area = pi × r² = 3.14 × 25 = 78.5 cm².',
  },
  {
    id: 'geo-cir-9',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 2,
    type: 'multiple-choice',
    question:
      'A circular table top has a diameter of 8 cm. Using pi = 3.14, what is its area?',
    answer: '50.24 cm²',
    options: ['25.12 cm²', '50.24 cm²', '100.48 cm²', '200.96 cm²'],
    hint1: 'First find the radius from the diameter.',
    hint2: 'Radius = 8 / 2 = 4. Area = pi × r² = 3.14 × 4 × 4 = 3.14 × 16.',
    explanation:
      'Radius = 8 / 2 = 4 cm. Area = pi × r² = 3.14 × 16 = 50.24 cm².',
  },
  {
    id: 'geo-cir-10',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 2,
    type: 'true-false',
    question:
      'Using pi = 3.14, a circle with radius 3 cm has an area of 28.26 cm².',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Calculate using the area formula and check.',
    hint2: 'Area = pi × r² = 3.14 × 9 = 28.26. Is this correct?',
    explanation:
      'True! Area = pi × r² = 3.14 × 3² = 3.14 × 9 = 28.26 cm².',
  },

  // --- Difficulty 3 (Hard): Multi-step circle problems, real-world contexts ---
  {
    id: 'geo-cir-11',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 3,
    type: 'fill-in',
    question:
      'A circular pizza has a diameter of 14 cm. Using pi = 3.14, what is the area of the pizza in cm²?',
    answer: '153.86',
    hint1: 'First find the radius from the diameter, then use the area formula.',
    hint2: 'Radius = 14 / 2 = 7. Area = pi × r² = 3.14 × 7 × 7 = 3.14 × 49.',
    explanation:
      'Radius = 14 / 2 = 7 cm. Area = pi × r² = 3.14 × 49 = 153.86 cm².',
  },
  {
    id: 'geo-cir-12',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A circular track has a diameter of 20 m. Using pi = 3.14, if you run 3 laps, how far do you run in total?',
    answer: '188.4 m',
    options: ['62.8 m', '125.6 m', '188.4 m', '251.2 m'],
    hint1: 'Find the circumference (one lap), then multiply by the number of laps.',
    hint2: 'Circumference = pi × 20 = 62.8. For 3 laps: 62.8 × 3.',
    explanation:
      'Circumference = pi × diameter = 3.14 × 20 = 62.8 m per lap. For 3 laps: 62.8 × 3 = 188.4 m.',
  },
  {
    id: 'geo-cir-13',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 3,
    type: 'fill-in',
    question:
      'A semicircle has a diameter of 12 cm. Using pi = 3.14, what is the area of the semicircle in cm²?',
    answer: '56.52',
    hint1: 'A semicircle is half a circle. Find the full circle area first.',
    hint2: 'Radius = 6. Full area = 3.14 × 36 = 113.04. Semicircle = 113.04 / 2.',
    explanation:
      'Radius = 12 / 2 = 6 cm. Full circle area = 3.14 × 6² = 113.04 cm². Semicircle = 113.04 / 2 = 56.52 cm².',
  },
  {
    id: 'geo-cir-14',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A wheel has a radius of 35 cm. Using pi = 3.14, how far does it travel in one complete rotation (in cm)?',
    answer: '219.8 cm',
    options: ['109.9 cm', '175.84 cm', '219.8 cm', '384.65 cm'],
    hint1: 'One rotation covers a distance equal to the circumference.',
    hint2: 'Circumference = 2 × pi × r = 2 × 3.14 × 35.',
    explanation:
      'One rotation = circumference = 2 × pi × r = 2 × 3.14 × 35 = 219.8 cm.',
  },
  {
    id: 'geo-cir-15',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 3,
    type: 'fill-in',
    question:
      'A circular garden has a radius of 10 m. Using pi = 3.14, what is the total length of fencing needed to go around it in meters?',
    answer: '62.8',
    hint1: 'Fencing goes around the outside, so you need the circumference.',
    hint2: 'Circumference = 2 × pi × r = 2 × 3.14 × 10.',
    explanation:
      'Circumference = 2 × pi × r = 2 × 3.14 × 10 = 62.8 m.',
  },

  // --- Difficulty 4 (Very Hard): Composite shapes with circles, ring areas ---
  {
    id: 'geo-cir-16',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 4,
    type: 'fill-in',
    question:
      'A square has sides of 10 cm. A circle with a diameter of 10 cm is drawn inside the square. Using pi = 3.14, what is the area of the square that is NOT covered by the circle in cm²?',
    answer: '21.5',
    hint1: 'Find the area of the square and the area of the circle, then subtract.',
    hint2: 'Square area = 10 × 10 = 100. Circle: radius = 5, area = 3.14 × 25 = 78.5. Remaining = 100 - 78.5.',
    explanation:
      'Square area = 100 cm². Circle radius = 5 cm, area = 3.14 × 25 = 78.5 cm². Uncovered area = 100 - 78.5 = 21.5 cm².',
  },
  {
    id: 'geo-cir-17',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A circular pond has a radius of 6 m. A path 2 m wide surrounds the pond. Using pi = 3.14, what is the area of just the path?',
    answer: '87.92 m²',
    options: ['75.36 m²', '87.92 m²', '100.48 m²', '113.04 m²'],
    hint1: 'Find the area of the outer circle (pond + path) and subtract the area of the pond.',
    hint2: 'Outer radius = 6 + 2 = 8. Outer area = 3.14 × 64 = 200.96. Pond area = 3.14 × 36 = 113.04. Path = 200.96 - 113.04.',
    explanation:
      'Outer radius = 8 m. Outer area = 3.14 × 64 = 200.96 m². Pond area = 3.14 × 36 = 113.04 m². Path area = 200.96 - 113.04 = 87.92 m².',
  },
  {
    id: 'geo-cir-18',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 4,
    type: 'fill-in',
    question:
      'A semicircle has a diameter of 20 cm. Using pi = 3.14, what is the perimeter of the semicircle (the straight edge plus the curved part) in cm?',
    answer: '51.4',
    hint1: 'The perimeter includes the straight diameter plus half the circumference.',
    hint2: 'Half circumference = (pi × 20) / 2 = 31.4. Total perimeter = 31.4 + 20.',
    explanation:
      'The curved part = half the circumference = (pi × diameter) / 2 = (3.14 × 20) / 2 = 31.4 cm. Perimeter = curved part + diameter = 31.4 + 20 = 51.4 cm.',
  },
  {
    id: 'geo-cir-19',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A quarter circle has a radius of 8 cm. Using pi = 3.14, what is the area of the quarter circle?',
    answer: '50.24 cm²',
    options: ['25.12 cm²', '50.24 cm²', '100.48 cm²', '200.96 cm²'],
    hint1: 'A quarter circle is one-fourth of a full circle.',
    hint2: 'Full area = pi × r² = 3.14 × 64 = 200.96. Quarter = 200.96 / 4.',
    explanation:
      'Full circle area = 3.14 × 8² = 3.14 × 64 = 200.96 cm². Quarter circle area = 200.96 / 4 = 50.24 cm².',
  },
  {
    id: 'geo-cir-20',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 4,
    type: 'fill-in',
    question:
      'A rectangular sheet is 20 cm × 14 cm. Two circles, each with a diameter of 7 cm, are cut out from it. Using pi = 3.14, what is the remaining area of the sheet in cm²?',
    answer: '203.07',
    hint1: 'Find the sheet area, then subtract the area of both circles.',
    hint2: 'Sheet = 20 × 14 = 280. Each circle: r = 3.5, area = 3.14 × 12.25 = 38.465. Two circles = 76.93. Remaining = 280 - 76.93.',
    explanation:
      'Sheet area = 20 × 14 = 280 cm². Each circle: radius = 3.5 cm, area = 3.14 × 3.5² = 3.14 × 12.25 = 38.465 cm². Two circles = 76.93 cm². Remaining = 280 - 76.93 = 203.07 cm².',
  },
]
