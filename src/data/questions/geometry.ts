import type { Question } from '../types'

export const questions: Question[] = [
  // ============================================================
  // ANGLES (geo-angles-1 through geo-angles-10)
  // ============================================================

  // --- Difficulty 1: Basic concepts, identify angles ---
  {
    id: 'geo-angles-1',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What do we call an angle that measures exactly 90 degrees?',
    answer: 'Right angle',
    options: ['Acute angle', 'Right angle', 'Obtuse angle', 'Straight angle'],
    hint1: 'Think about the corner of a book or a door frame.',
    hint2: 'This angle makes a perfect "L" shape.',
    explanation:
      'An angle that measures exactly 90° is called a right angle. You can spot them at the corners of squares, rectangles, and books.',
  },
  {
    id: 'geo-angles-2',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 1,
    type: 'true-false',
    question: 'An acute angle is smaller than 90 degrees.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Think of the word "acute" — it means sharp and small.',
    hint2: 'A right angle is exactly 90°. Where does an acute angle fall compared to that?',
    explanation:
      'True! An acute angle measures between 0° and 90°. The word "acute" means sharp, and these angles look like sharp, narrow openings.',
  },

  // --- Difficulty 2: Simple angle calculations ---
  {
    id: 'geo-angles-3',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 2,
    type: 'fill-in',
    question:
      'Two angles are complementary. If one angle is 35°, what is the other angle in degrees?',
    answer: '55',
    hint1: 'Complementary angles add up to a specific number. What is it?',
    hint2: 'Complementary angles add up to 90°. Subtract 35 from 90.',
    explanation:
      'Complementary angles add up to 90°. So the other angle is 90° − 35° = 55°.',
  },
  {
    id: 'geo-angles-4',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'Two angles are supplementary. If one angle is 110°, what is the other angle?',
    answer: '70°',
    options: ['80°', '70°', '60°', '90°'],
    hint1: 'Supplementary angles add up to a special number related to a straight line.',
    hint2: 'Supplementary angles add up to 180°. Subtract 110 from 180.',
    explanation:
      'Supplementary angles add up to 180° (a straight line). So the other angle is 180° − 110° = 70°.',
  },

  // --- Difficulty 3: Multi-step angle problems ---
  {
    id: 'geo-angles-5',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 3,
    type: 'fill-in',
    question:
      'In a triangle, two of the angles are 45° and 65°. What is the third angle in degrees?',
    answer: '70',
    hint1: 'All three angles of a triangle add up to a special number.',
    hint2: 'The angles in a triangle add up to 180°. Add 45 + 65, then subtract from 180.',
    explanation:
      'The angles in any triangle add up to 180°. So the third angle = 180° − 45° − 65° = 70°.',
  },
  {
    id: 'geo-angles-6',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A straight line is divided into three angles. Two of them are 50° and 80°. What is the third angle?',
    answer: '50°',
    options: ['40°', '50°', '60°', '30°'],
    hint1: 'Angles on a straight line add up to a specific total.',
    hint2: 'Angles on a straight line add up to 180°. Find 180 − 50 − 80.',
    explanation:
      'Angles on a straight line add up to 180°. The third angle = 180° − 50° − 80° = 50°.',
  },

  // --- Difficulty 4: Complex angle problems ---
  {
    id: 'geo-angles-7',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 4,
    type: 'fill-in',
    question:
      'Two lines cross each other. One of the angles formed is 125°. What is the angle directly opposite to it (the vertically opposite angle) in degrees?',
    answer: '125',
    hint1: 'When two lines cross, the angles opposite each other have a special relationship.',
    hint2: 'Vertically opposite angles are always equal to each other.',
    explanation:
      'When two straight lines cross, vertically opposite angles are always equal. So the angle directly opposite 125° is also 125°.',
  },
  {
    id: 'geo-angles-8',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'In a quadrilateral (4-sided shape), three of the angles are 90°, 85°, and 110°. What is the fourth angle?',
    answer: '75°',
    options: ['65°', '75°', '80°', '95°'],
    hint1: 'The angles in a quadrilateral add up to a specific total. Think about two triangles.',
    hint2: 'The angles in any quadrilateral add up to 360°. Subtract the three known angles from 360.',
    explanation:
      'The interior angles of a quadrilateral add up to 360°. The fourth angle = 360° − 90° − 85° − 110° = 75°.',
  },

  // --- Difficulty 5: Challenging angle problems ---
  {
    id: 'geo-angles-9',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 5,
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
    id: 'geo-angles-10',
    topicId: 'geometry',
    subtopicId: 'angles',
    difficulty: 5,
    type: 'multiple-choice',
    question:
      'A regular pentagon has 5 equal sides and 5 equal angles. The sum of interior angles of a pentagon is 540°. What is each interior angle?',
    answer: '108°',
    options: ['100°', '108°', '120°', '135°'],
    hint1: 'If all 5 angles are equal and they add up to 540°, what operation do you use?',
    hint2: 'Divide the total (540°) by the number of angles (5).',
    explanation:
      'Since all 5 angles are equal, each angle = 540° ÷ 5 = 108°. Regular polygons have all sides and angles equal.',
  },

  // ============================================================
  // AREA & PERIMETER (geo-area-1 through geo-area-10)
  // ============================================================

  // --- Difficulty 1: Basic concepts ---
  {
    id: 'geo-area-1',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'What does the perimeter of a shape measure?',
    answer: 'The total distance around the outside of the shape',
    options: [
      'The space inside the shape',
      'The total distance around the outside of the shape',
      'How tall the shape is',
      'How heavy the shape is',
    ],
    hint1: 'Imagine walking along the edges of a shape. What are you measuring?',
    hint2: '"Peri" means around, and "meter" means measure.',
    explanation:
      'Perimeter is the total distance around the outside of a shape. If you walked along every edge and came back to the start, the distance you walked is the perimeter.',
  },
  {
    id: 'geo-area-2',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 1,
    type: 'true-false',
    question: 'Area is measured in square units (like cm² or m²).',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'Area measures flat space inside a shape. Think about covering a floor with square tiles.',
    hint2: 'Each small tile is 1 unit by 1 unit — that is 1 square unit.',
    explanation:
      'True! Area measures the space inside a flat shape, and we count how many unit squares fit inside. That is why we use square units like cm² or m².',
  },

  // --- Difficulty 2: Simple calculations ---
  {
    id: 'geo-area-3',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 2,
    type: 'fill-in',
    question: 'A rectangle is 8 cm long and 5 cm wide. What is its area in cm²?',
    answer: '40',
    hint1: 'The area of a rectangle uses multiplication.',
    hint2: 'Area of a rectangle = length × width = 8 × 5.',
    explanation: 'Area of a rectangle = length × width = 8 cm × 5 cm = 40 cm².',
  },
  {
    id: 'geo-area-4',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 2,
    type: 'multiple-choice',
    question: 'A square has sides of 6 cm. What is its perimeter?',
    answer: '24 cm',
    options: ['12 cm', '24 cm', '36 cm', '18 cm'],
    hint1: 'A square has 4 equal sides. Add them all up.',
    hint2: 'Perimeter of a square = 4 × side length = 4 × 6.',
    explanation:
      'A square has 4 equal sides. Perimeter = 4 × 6 cm = 24 cm.',
  },

  // --- Difficulty 3: Multi-step problems ---
  {
    id: 'geo-area-5',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 3,
    type: 'fill-in',
    question:
      'A rectangular garden is 12 m long and 7 m wide. You want to build a fence around it. How many meters of fencing do you need?',
    answer: '38',
    hint1: 'A fence goes around the outside — that means you need the perimeter.',
    hint2: 'Perimeter of a rectangle = 2 × (length + width) = 2 × (12 + 7).',
    explanation:
      'Perimeter = 2 × (length + width) = 2 × (12 + 7) = 2 × 19 = 38 m. You need 38 meters of fencing.',
  },
  {
    id: 'geo-area-6',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A rectangular room is 10 m long and 8 m wide. If tiles cost ₹50 per square meter, how much will it cost to tile the entire floor?',
    answer: '₹4,000',
    options: ['₹3,600', '₹4,000', '₹4,500', '₹5,000'],
    hint1: 'First find the area of the floor, then multiply by the cost per square meter.',
    hint2: 'Area = 10 × 8 = 80 m². Cost = 80 × ₹50.',
    explanation:
      'Area = 10 × 8 = 80 m². Cost = 80 × ₹50 = ₹4,000.',
  },

  // --- Difficulty 4: Decimal measurements and complex shapes ---
  {
    id: 'geo-area-7',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 4,
    type: 'fill-in',
    question:
      'A rectangle has a length of 12.5 cm and a width of 4 cm. What is its area in cm²?',
    answer: '50',
    hint1: 'Use the same formula: area = length × width.',
    hint2: 'Multiply 12.5 × 4. Think of it as 12 × 4 + 0.5 × 4.',
    explanation:
      'Area = length × width = 12.5 × 4 = 50 cm². You can break it up: (12 × 4) + (0.5 × 4) = 48 + 2 = 50.',
  },
  {
    id: 'geo-area-8',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'An L-shaped room is made of two rectangles. One is 6 m × 4 m and the other is 3 m × 2 m. What is the total area?',
    answer: '30 m²',
    options: ['26 m²', '28 m²', '30 m²', '32 m²'],
    hint1: 'For a composite shape, find the area of each piece and add them together.',
    hint2: 'Area of first rectangle = 6 × 4 = 24. Area of second = 3 × 2 = 6. Add them.',
    explanation:
      'Break the L-shape into two rectangles. Area = (6 × 4) + (3 × 2) = 24 + 6 = 30 m².',
  },

  // --- Difficulty 5: Challenging composite shapes ---
  {
    id: 'geo-area-9',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 5,
    type: 'fill-in',
    question:
      'A rectangular yard is 20 m by 15 m. A square swimming pool with sides of 5 m is built in the middle. What is the area of the remaining yard (not including the pool) in m²?',
    answer: '275',
    hint1: 'Find the total area of the yard, then subtract the area of the pool.',
    hint2: 'Yard area = 20 × 15 = 300. Pool area = 5 × 5 = 25. Remaining = 300 − 25.',
    explanation:
      'Yard area = 20 × 15 = 300 m². Pool area = 5 × 5 = 25 m². Remaining area = 300 − 25 = 275 m².',
  },
  {
    id: 'geo-area-10',
    topicId: 'geometry',
    subtopicId: 'area-perimeter',
    difficulty: 5,
    type: 'multiple-choice',
    question:
      'A rectangular piece of cardboard is 30 cm × 20 cm. A 2 cm square is cut from each corner. What is the remaining area?',
    answer: '584 cm²',
    options: ['576 cm²', '584 cm²', '592 cm²', '600 cm²'],
    hint1: 'Find the area of the full rectangle, then subtract the area of all four cut-out squares.',
    hint2: 'Full area = 30 × 20 = 600. Each corner square = 2 × 2 = 4. Four corners = 4 × 4 = 16. Remaining = 600 − 16.',
    explanation:
      'Full area = 30 × 20 = 600 cm². Each cut square = 2 × 2 = 4 cm². Four squares = 4 × 4 = 16 cm². Remaining = 600 − 16 = 584 cm².',
  },

  // ============================================================
  // VOLUME (geo-vol-1 through geo-vol-10)
  // ============================================================

  // --- Difficulty 1: Basic concepts ---
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
    hint2: 'Volume is about the 3D space inside an object — how much stuff it can contain.',
    explanation:
      'Volume measures the amount of 3D space inside an object. For example, the volume of a box tells you how much it can hold inside.',
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
      'True! Volume is measured in cubic units because we are counting how many unit cubes fit inside a 3D shape. Common units are cm³, m³, and liters.',
  },

  // --- Difficulty 2: Simple volume calculations ---
  {
    id: 'geo-vol-3',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 2,
    type: 'fill-in',
    question:
      'A cube has sides of 4 cm. What is its volume in cm³?',
    answer: '64',
    hint1: 'A cube has all sides equal. Volume of a cube = side × side × side.',
    hint2: 'Volume = 4 × 4 × 4. First find 4 × 4, then multiply by 4 again.',
    explanation:
      'Volume of a cube = side³ = 4 × 4 × 4 = 64 cm³.',
  },
  {
    id: 'geo-vol-4',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 2,
    type: 'multiple-choice',
    question:
      'A rectangular box (cuboid) is 5 cm long, 3 cm wide, and 2 cm tall. What is its volume?',
    answer: '30 cm³',
    options: ['20 cm³', '25 cm³', '30 cm³', '36 cm³'],
    hint1: 'Volume of a cuboid = length × width × height.',
    hint2: 'Multiply: 5 × 3 × 2.',
    explanation:
      'Volume of a cuboid = length × width × height = 5 × 3 × 2 = 30 cm³.',
  },

  // --- Difficulty 3: Multi-step volume problems ---
  {
    id: 'geo-vol-5',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 3,
    type: 'fill-in',
    question:
      'A fish tank is 60 cm long, 30 cm wide, and 40 cm tall. How many liters of water can it hold? (1 liter = 1,000 cm³)',
    answer: '72',
    hint1: 'First find the volume in cm³, then convert to liters.',
    hint2: 'Volume = 60 × 30 × 40 = 72,000 cm³. Divide by 1,000 to get liters.',
    explanation:
      'Volume = 60 × 30 × 40 = 72,000 cm³. Since 1 liter = 1,000 cm³, the tank holds 72,000 ÷ 1,000 = 72 liters.',
  },
  {
    id: 'geo-vol-6',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A cube has a volume of 125 cm³. What is the length of one side?',
    answer: '5 cm',
    options: ['4 cm', '5 cm', '6 cm', '25 cm'],
    hint1: 'If side × side × side = 125, what number multiplied by itself three times gives 125?',
    hint2: 'Try: 5 × 5 × 5 = ?',
    explanation:
      'Since volume of a cube = side³, we need side³ = 125. Because 5 × 5 × 5 = 125, the side length is 5 cm.',
  },

  // --- Difficulty 4: Complex shapes, decimal measurements ---
  {
    id: 'geo-vol-7',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 4,
    type: 'fill-in',
    question:
      'A rectangular box is 10 cm long, 6.5 cm wide, and 4 cm tall. What is its volume in cm³?',
    answer: '260',
    hint1: 'Use the same formula: length × width × height.',
    hint2: 'Volume = 10 × 6.5 × 4. Try 10 × 6.5 first, then multiply by 4.',
    explanation:
      'Volume = 10 × 6.5 × 4 = 65 × 4 = 260 cm³.',
  },
  {
    id: 'geo-vol-8',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A storage container is 2 m long, 1.5 m wide, and 1 m tall. How many cubic meters is its volume?',
    answer: '3 m³',
    options: ['2 m³', '2.5 m³', '3 m³', '4.5 m³'],
    hint1: 'Volume = length × width × height. Use the decimal values.',
    hint2: 'Volume = 2 × 1.5 × 1 = ?',
    explanation:
      'Volume = 2 × 1.5 × 1 = 3 m³.',
  },

  // --- Difficulty 5: Challenging composite volume ---
  {
    id: 'geo-vol-9',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 5,
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
    id: 'geo-vol-10',
    topicId: 'geometry',
    subtopicId: 'volume',
    difficulty: 5,
    type: 'multiple-choice',
    question:
      'A large cube has sides of 10 cm. A smaller cube with sides of 3 cm is cut out from one corner. What is the remaining volume?',
    answer: '973 cm³',
    options: ['970 cm³', '973 cm³', '991 cm³', '997 cm³'],
    hint1: 'Find the volume of the large cube, then subtract the volume of the small cube that was removed.',
    hint2: 'Large cube = 10³ = 1,000. Small cube = 3³ = 27. Remaining = 1,000 − 27.',
    explanation:
      'Large cube volume = 10³ = 1,000 cm³. Small cube volume = 3³ = 27 cm³. Remaining = 1,000 − 27 = 973 cm³.',
  },

  // ============================================================
  // TRIANGLES (geo-tri-1 through geo-tri-10)
  // ============================================================

  // --- Difficulty 1: Basic concepts ---
  {
    id: 'geo-tri-1',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 1,
    type: 'multiple-choice',
    question: 'How many sides does a triangle have?',
    answer: '3',
    options: ['2', '3', '4', '5'],
    hint1: 'The prefix "tri" gives you a clue.',
    hint2: '"Tri" means three. A triangle has three sides and three angles.',
    explanation:
      'A triangle has exactly 3 sides and 3 angles. The word "triangle" comes from "tri" (three) and "angle."',
  },
  {
    id: 'geo-tri-2',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 1,
    type: 'true-false',
    question: 'An equilateral triangle has all three sides equal in length.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: '"Equi" means equal and "lateral" means sides.',
    hint2: 'An equilateral triangle has all sides the same length and all angles equal to 60°.',
    explanation:
      'True! An equilateral triangle has all three sides equal and all three angles equal (each is 60°).',
  },

  // --- Difficulty 2: Simple triangle calculations ---
  {
    id: 'geo-tri-3',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 2,
    type: 'fill-in',
    question:
      'A triangle has a base of 10 cm and a height of 6 cm. What is its area in cm²?',
    answer: '30',
    hint1: 'The area of a triangle is related to the area of a rectangle but with one extra step.',
    hint2: 'Area of a triangle = (base × height) ÷ 2 = (10 × 6) ÷ 2.',
    explanation:
      'Area of a triangle = (base × height) ÷ 2 = (10 × 6) ÷ 2 = 60 ÷ 2 = 30 cm².',
  },
  {
    id: 'geo-tri-4',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 2,
    type: 'multiple-choice',
    question:
      'A triangle has sides of 5 cm, 7 cm, and 8 cm. What is its perimeter?',
    answer: '20 cm',
    options: ['15 cm', '18 cm', '20 cm', '22 cm'],
    hint1: 'Perimeter means adding up all the sides.',
    hint2: 'Perimeter = 5 + 7 + 8.',
    explanation:
      'Perimeter = sum of all sides = 5 + 7 + 8 = 20 cm.',
  },

  // --- Difficulty 3: Multi-step triangle problems ---
  {
    id: 'geo-tri-5',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 3,
    type: 'fill-in',
    question:
      'An isosceles triangle has two equal sides of 9 cm each and a base of 6 cm. What is its perimeter in cm?',
    answer: '24',
    hint1: 'An isosceles triangle has two sides that are the same length.',
    hint2: 'Perimeter = 9 + 9 + 6.',
    explanation:
      'An isosceles triangle has two equal sides. Perimeter = 9 + 9 + 6 = 24 cm.',
  },
  {
    id: 'geo-tri-6',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A right triangle has legs of 6 cm and 8 cm. What is its area?',
    answer: '24 cm²',
    options: ['14 cm²', '24 cm²', '48 cm²', '36 cm²'],
    hint1: 'In a right triangle, the two legs can serve as the base and height.',
    hint2: 'Area = (base × height) ÷ 2 = (6 × 8) ÷ 2.',
    explanation:
      'In a right triangle, the two legs are perpendicular, so they serve as base and height. Area = (6 × 8) ÷ 2 = 48 ÷ 2 = 24 cm².',
  },

  // --- Difficulty 4: Complex triangle problems ---
  {
    id: 'geo-tri-7',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 4,
    type: 'fill-in',
    question:
      'A triangle has a base of 14.5 cm and a height of 8 cm. What is its area in cm²?',
    answer: '58',
    hint1: 'Use the triangle area formula with the decimal base.',
    hint2: 'Area = (14.5 × 8) ÷ 2 = 116 ÷ 2.',
    explanation:
      'Area = (base × height) ÷ 2 = (14.5 × 8) ÷ 2 = 116 ÷ 2 = 58 cm².',
  },
  {
    id: 'geo-tri-8',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A triangle has an area of 36 cm² and a base of 12 cm. What is its height?',
    answer: '6 cm',
    options: ['3 cm', '6 cm', '9 cm', '12 cm'],
    hint1: 'You know the area formula. Rearrange it to find the height.',
    hint2: 'Area = (base × height) ÷ 2, so height = (2 × Area) ÷ base = (2 × 36) ÷ 12.',
    explanation:
      'From Area = (base × height) ÷ 2, we get height = (2 × Area) ÷ base = (2 × 36) ÷ 12 = 72 ÷ 12 = 6 cm.',
  },

  // --- Difficulty 5: Challenging triangle problems ---
  {
    id: 'geo-tri-9',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 5,
    type: 'fill-in',
    question:
      'A rectangle is 16 cm long and 10 cm wide. A diagonal line divides it into two equal triangles. What is the area of one triangle in cm²?',
    answer: '80',
    hint1: 'A diagonal splits a rectangle into two identical triangles.',
    hint2: 'Each triangle has half the area of the rectangle. Rectangle area = 16 × 10 = 160. Half = ?',
    explanation:
      'The rectangle area = 16 × 10 = 160 cm². A diagonal divides it into two equal triangles, so each triangle has area = 160 ÷ 2 = 80 cm².',
  },
  {
    id: 'geo-tri-10',
    topicId: 'geometry',
    subtopicId: 'triangles',
    difficulty: 5,
    type: 'multiple-choice',
    question:
      'A large triangle has a base of 20 cm and a height of 12 cm. Inside it, a smaller triangle with a base of 8 cm and a height of 5 cm is cut out. What is the area of the remaining shape?',
    answer: '100 cm²',
    options: ['92 cm²', '100 cm²', '108 cm²', '120 cm²'],
    hint1: 'Find the area of the large triangle, then subtract the area of the small triangle.',
    hint2: 'Large = (20 × 12) ÷ 2 = 120. Small = (8 × 5) ÷ 2 = 20. Remaining = 120 − 20.',
    explanation:
      'Large triangle area = (20 × 12) ÷ 2 = 120 cm². Small triangle area = (8 × 5) ÷ 2 = 20 cm². Remaining = 120 − 20 = 100 cm².',
  },

  // ============================================================
  // CIRCLES (geo-circles-1 through geo-circles-10)
  // ============================================================

  // --- Difficulty 1: Basic concepts ---
  {
    id: 'geo-circles-1',
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
    id: 'geo-circles-2',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 1,
    type: 'true-false',
    question: 'The diameter of a circle is twice the radius.',
    answer: 'True',
    options: ['True', 'False'],
    hint1: 'The diameter goes all the way across the circle through the center.',
    hint2: 'If the radius is the distance from center to edge, the diameter covers center-to-edge twice.',
    explanation:
      'True! The diameter passes through the center from one side to the other, so it is twice the radius. Diameter = 2 × radius.',
  },

  // --- Difficulty 2: Simple circle calculations ---
  {
    id: 'geo-circles-3',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 2,
    type: 'fill-in',
    question: 'A circle has a radius of 7 cm. What is its diameter in cm?',
    answer: '14',
    hint1: 'The diameter and radius have a simple relationship.',
    hint2: 'Diameter = 2 × radius = 2 × 7.',
    explanation: 'Diameter = 2 × radius = 2 × 7 = 14 cm.',
  },
  {
    id: 'geo-circles-4',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 2,
    type: 'multiple-choice',
    question:
      'A circle has a diameter of 10 cm. Using π ≈ 3.14, what is its circumference?',
    answer: '31.4 cm',
    options: ['15.7 cm', '31.4 cm', '62.8 cm', '78.5 cm'],
    hint1: 'Circumference is the distance around the circle.',
    hint2: 'Circumference = π × diameter = 3.14 × 10.',
    explanation:
      'Circumference = π × diameter = 3.14 × 10 = 31.4 cm.',
  },

  // --- Difficulty 3: Multi-step circle problems ---
  {
    id: 'geo-circles-5',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 3,
    type: 'fill-in',
    question:
      'A circular garden has a radius of 5 m. Using π ≈ 3.14, what is its area in m²?',
    answer: '78.5',
    hint1: 'The area of a circle uses the radius squared.',
    hint2: 'Area = π × r² = 3.14 × 5 × 5 = 3.14 × 25.',
    explanation:
      'Area = π × r² = 3.14 × 5² = 3.14 × 25 = 78.5 m².',
  },
  {
    id: 'geo-circles-6',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 3,
    type: 'multiple-choice',
    question:
      'A circular track has a diameter of 20 m. Using π ≈ 3.14, if you run around the track once, how far do you run?',
    answer: '62.8 m',
    options: ['31.4 m', '62.8 m', '125.6 m', '314 m'],
    hint1: 'Running around the track once means traveling the circumference.',
    hint2: 'Circumference = π × diameter = 3.14 × 20.',
    explanation:
      'One lap around the track = the circumference = π × diameter = 3.14 × 20 = 62.8 m.',
  },

  // --- Difficulty 4: Complex circle problems ---
  {
    id: 'geo-circles-7',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 4,
    type: 'fill-in',
    question:
      'A circular pizza has a diameter of 14 cm. Using π ≈ 3.14, what is the area of the pizza in cm²?',
    answer: '153.86',
    hint1: 'First find the radius from the diameter, then use the area formula.',
    hint2: 'Radius = 14 ÷ 2 = 7. Area = π × r² = 3.14 × 7 × 7 = 3.14 × 49.',
    explanation:
      'Radius = 14 ÷ 2 = 7 cm. Area = π × r² = 3.14 × 49 = 153.86 cm².',
  },
  {
    id: 'geo-circles-8',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 4,
    type: 'multiple-choice',
    question:
      'A semicircle has a diameter of 12 cm. Using π ≈ 3.14, what is the area of the semicircle?',
    answer: '56.52 cm²',
    options: ['28.26 cm²', '56.52 cm²', '113.04 cm²', '37.68 cm²'],
    hint1: 'A semicircle is half a circle. Find the full circle area first.',
    hint2: 'Radius = 6. Full area = 3.14 × 36 = 113.04. Semicircle = 113.04 ÷ 2.',
    explanation:
      'Radius = 12 ÷ 2 = 6 cm. Full circle area = 3.14 × 6² = 3.14 × 36 = 113.04 cm². Semicircle area = 113.04 ÷ 2 = 56.52 cm².',
  },

  // --- Difficulty 5: Challenging composite circle problems ---
  {
    id: 'geo-circles-9',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 5,
    type: 'fill-in',
    question:
      'A square has sides of 10 cm. A circle with a diameter of 10 cm is drawn inside the square. Using π ≈ 3.14, what is the area of the square that is NOT covered by the circle? Give your answer in cm².',
    answer: '21.5',
    hint1: 'Find the area of the square and the area of the circle, then subtract.',
    hint2: 'Square area = 10 × 10 = 100. Circle area = 3.14 × 5² = 78.5. Remaining = 100 − 78.5.',
    explanation:
      'Square area = 10 × 10 = 100 cm². The circle has radius 5 cm, so its area = 3.14 × 25 = 78.5 cm². Uncovered area = 100 − 78.5 = 21.5 cm².',
  },
  {
    id: 'geo-circles-10',
    topicId: 'geometry',
    subtopicId: 'circles',
    difficulty: 5,
    type: 'multiple-choice',
    question:
      'A circular pond has a radius of 4 m. A path 1 m wide surrounds the pond. Using π ≈ 3.14, what is the area of just the path (not including the pond)?',
    answer: '28.26 m²',
    options: ['25.12 m²', '28.26 m²', '31.4 m²', '50.24 m²'],
    hint1: 'The path forms a ring (annulus). Find the area of the large circle (pond + path) and subtract the area of the pond.',
    hint2: 'Outer radius = 4 + 1 = 5 m. Outer area = 3.14 × 25 = 78.5. Inner area = 3.14 × 16 = 50.24. Path = 78.5 − 50.24.',
    explanation:
      'Outer circle radius = 4 + 1 = 5 m. Outer area = 3.14 × 5² = 78.5 m². Pond area = 3.14 × 4² = 50.24 m². Path area = 78.5 − 50.24 = 28.26 m².',
  },
]
