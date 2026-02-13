import { Topic } from './types'

export const topics: Topic[] = [
  {
    id: 'arithmetic',
    name: 'Arithmetic',
    icon: 'Calculator',
    color: 'indigo',
    grades: [4, 5, 6],
    subtopics: [
      { id: 'add-sub', name: 'Addition & Subtraction', description: 'Add and subtract whole numbers' },
      { id: 'multiplication', name: 'Multiplication', description: 'Multiply single and multi-digit numbers' },
      { id: 'division', name: 'Division', description: 'Divide numbers with and without remainders' },
      { id: 'order-of-ops', name: 'Order of Operations', description: 'PEMDAS / BODMAS rules' },
      { id: 'negatives', name: 'Negative Numbers', description: 'Work with numbers below zero' },
    ],
  },
  {
    id: 'fractions',
    name: 'Fractions',
    icon: 'PieChart',
    color: 'violet',
    grades: [4, 5, 6],
    subtopics: [
      { id: 'understanding', name: 'Understanding Fractions', description: 'What fractions mean and how to read them' },
      { id: 'add-sub-frac', name: 'Adding & Subtracting', description: 'Add and subtract fractions' },
      { id: 'mul-div-frac', name: 'Multiplying & Dividing', description: 'Multiply and divide fractions' },
      { id: 'mixed-numbers', name: 'Mixed Numbers', description: 'Work with mixed numbers and improper fractions' },
      { id: 'compare-order', name: 'Comparing & Ordering', description: 'Compare and order fractions' },
    ],
  },
  {
    id: 'decimals',
    name: 'Decimals',
    icon: 'Hash',
    color: 'emerald',
    grades: [4, 5, 6],
    subtopics: [
      { id: 'place-value', name: 'Place Value', description: 'Understand decimal place values' },
      { id: 'add-sub-dec', name: 'Adding & Subtracting', description: 'Add and subtract decimals' },
      { id: 'mul-div-dec', name: 'Multiplying & Dividing', description: 'Multiply and divide decimals' },
      { id: 'converting', name: 'Converting', description: 'Convert between fractions and decimals' },
      { id: 'rounding', name: 'Rounding', description: 'Round decimals to given places' },
      { id: 'unit-conversion', name: 'Unit Conversion', description: 'Convert between metric units (km, m, cm, mm, kg, g, L, mL)' },
    ],
  },
  {
    id: 'geometry',
    name: 'Geometry',
    icon: 'Triangle',
    color: 'amber',
    grades: [4, 5, 6],
    subtopics: [
      { id: 'angles', name: 'Angles', description: 'Types and measurement of angles' },
      { id: 'area-perimeter', name: 'Area & Perimeter', description: 'Calculate area and perimeter of shapes' },
      { id: 'volume', name: 'Volume', description: 'Find the volume of 3D shapes' },
      { id: 'triangles', name: 'Triangles', description: 'Properties and types of triangles' },
      { id: 'circles', name: 'Circles', description: 'Radius, diameter, circumference, and area' },
    ],
  },
  {
    id: 'word-problems',
    name: 'Word Problems',
    icon: 'BookOpen',
    color: 'rose',
    grades: [4, 5, 6],
    subtopics: [
      { id: 'single-step', name: 'Single-Step', description: 'Solve problems in one step' },
      { id: 'multi-step', name: 'Multi-Step', description: 'Problems needing two or more steps' },
      { id: 'money', name: 'Money & Shopping', description: 'Real-world money problems' },
      { id: 'time-distance', name: 'Time & Distance', description: 'Problems involving time, speed, and distance' },
      { id: 'ratio', name: 'Ratio & Proportion', description: 'Work with ratios and proportions' },
    ],
  },
  {
    id: 'pre-algebra',
    name: 'Pre-Algebra',
    icon: 'Variable',
    color: 'sky',
    grades: [5, 6],
    subtopics: [
      { id: 'patterns', name: 'Patterns & Sequences', description: 'Find and extend number patterns' },
      { id: 'expressions', name: 'Variables & Expressions', description: 'Use letters to represent numbers' },
      { id: 'equations', name: 'Simple Equations', description: 'Solve for unknown values' },
      { id: 'inequalities', name: 'Inequalities', description: 'Compare using < > and solve' },
      { id: 'coordinates', name: 'Coordinate Basics', description: 'Plot and read points on a grid' },
    ],
  },
  {
    id: 'factors-multiples',
    name: 'Factors & Multiples',
    icon: 'Grid3x3',
    color: 'teal',
    grades: [4, 5, 6],
    subtopics: [
      { id: 'factors', name: 'Factors & Divisibility', description: 'Find factors and test divisibility rules' },
      { id: 'multiples', name: 'Multiples', description: 'List and work with multiples of numbers' },
      { id: 'prime-composite', name: 'Prime & Composite Numbers', description: 'Identify primes and composites' },
      { id: 'hcf', name: 'HCF (Highest Common Factor)', description: 'Find the greatest common factor of numbers' },
      { id: 'lcm', name: 'LCM (Least Common Multiple)', description: 'Find the least common multiple of numbers' },
    ],
  },
  {
    id: 'data-handling',
    name: 'Data Handling',
    icon: 'BarChart2',
    color: 'cyan',
    grades: [4, 5, 6],
    subtopics: [
      { id: 'tables-tally', name: 'Tables & Tally Marks', description: 'Read and interpret frequency tables' },
      { id: 'mean-median-mode', name: 'Mean, Median & Mode', description: 'Calculate averages and central tendency' },
      { id: 'bar-graphs', name: 'Bar Graphs', description: 'Read and analyze bar graphs' },
      { id: 'pie-charts', name: 'Pie Charts', description: 'Interpret and calculate from pie charts' },
      { id: 'probability-basic', name: 'Basic Probability', description: 'Understand chance and simple probability' },
    ],
  },
  {
    id: 'percentage',
    name: 'Percentage',
    icon: 'Percent',
    color: 'orange',
    grades: [5, 6],
    subtopics: [
      { id: 'pct-basics', name: 'Understanding Percentages', description: 'Convert between fractions, decimals, and percentages' },
      { id: 'pct-of-number', name: 'Percentage of a Number', description: 'Calculate a given percentage of a number' },
      { id: 'pct-increase-decrease', name: 'Increase & Decrease', description: 'Find percentage increase and decrease' },
      { id: 'profit-loss', name: 'Profit & Loss', description: 'Calculate profit, loss, and percentages' },
      { id: 'pct-applications', name: 'Real-Life Percentages', description: 'Apply percentages to real-world situations' },
    ],
  },
  {
    id: 'symmetry',
    name: 'Symmetry',
    icon: 'FlipHorizontal2',
    color: 'fuchsia',
    grades: [4, 5, 6],
    subtopics: [
      { id: 'line-symmetry', name: 'Lines of Symmetry', description: 'Identify lines of symmetry in shapes' },
      { id: 'reflection', name: 'Reflection', description: 'Reflect shapes and figures across lines' },
      { id: 'rotational-symmetry', name: 'Rotational Symmetry', description: 'Identify rotational symmetry and order' },
      { id: '2d-symmetry-shapes', name: 'Symmetry in 2D Shapes', description: 'Classify 2D shapes by their symmetry' },
      { id: '3d-symmetry', name: 'Symmetry in 3D Shapes', description: 'Explore planes of symmetry in 3D shapes' },
    ],
  },
  {
    id: 'logical-reasoning',
    name: 'Logical Reasoning',
    icon: 'BrainCircuit',
    color: 'lime',
    grades: [4, 5, 6],
    subtopics: [
      { id: 'number-patterns', name: 'Number Series & Patterns', description: 'Find rules and extend number sequences' },
      { id: 'analogy-classification', name: 'Analogies & Classification', description: 'Solve number analogies and classify groups' },
      { id: 'math-operations-logic', name: 'Operations & Symbols', description: 'Decode operations and symbol puzzles' },
      { id: 'spatial-reasoning', name: 'Spatial Reasoning', description: 'Solve spatial and grid-based puzzles' },
      { id: 'logical-deduction', name: 'Logical Puzzles', description: 'Use logic to solve deduction puzzles' },
    ],
  },
]

export function getTopic(topicId: string): Topic | undefined {
  return topics.find(t => t.id === topicId)
}

export function getSubtopic(topicId: string, subtopicId: string) {
  const topic = getTopic(topicId)
  return topic?.subtopics.find(s => s.id === subtopicId)
}
