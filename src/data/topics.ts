import { Topic } from './types'

export const topics: Topic[] = [
  {
    id: 'arithmetic',
    name: 'Arithmetic',
    icon: 'Calculator',
    color: 'indigo',
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
    subtopics: [
      { id: 'place-value', name: 'Place Value', description: 'Understand decimal place values' },
      { id: 'add-sub-dec', name: 'Adding & Subtracting', description: 'Add and subtract decimals' },
      { id: 'mul-div-dec', name: 'Multiplying & Dividing', description: 'Multiply and divide decimals' },
      { id: 'converting', name: 'Converting', description: 'Convert between fractions and decimals' },
      { id: 'rounding', name: 'Rounding', description: 'Round decimals to given places' },
    ],
  },
  {
    id: 'geometry',
    name: 'Geometry',
    icon: 'Triangle',
    color: 'amber',
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
    subtopics: [
      { id: 'patterns', name: 'Patterns & Sequences', description: 'Find and extend number patterns' },
      { id: 'expressions', name: 'Variables & Expressions', description: 'Use letters to represent numbers' },
      { id: 'equations', name: 'Simple Equations', description: 'Solve for unknown values' },
      { id: 'inequalities', name: 'Inequalities', description: 'Compare using < > and solve' },
      { id: 'coordinates', name: 'Coordinate Basics', description: 'Plot and read points on a grid' },
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
