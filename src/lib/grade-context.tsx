'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type GradeFilter = 'all' | '4' | '5' | '6'

interface GradeContextValue {
  grade: GradeFilter
  setGrade: (grade: GradeFilter) => void
}

const GradeContext = createContext<GradeContextValue>({
  grade: 'all',
  setGrade: () => {},
})

const STORAGE_KEY = 'math-tutor-grade'

export function GradeProvider({ children }: { children: ReactNode }) {
  const [grade, setGradeState] = useState<GradeFilter>(() => {
    if (typeof window === 'undefined') return 'all'
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === '4' || stored === '5' || stored === '6') {
      return stored
    }
    return 'all'
  })

  const setGrade = (g: GradeFilter) => {
    setGradeState(g)
    if (g === 'all') {
      localStorage.removeItem(STORAGE_KEY)
    } else {
      localStorage.setItem(STORAGE_KEY, g)
    }
  }

  return (
    <GradeContext.Provider value={{ grade, setGrade }}>
      {children}
    </GradeContext.Provider>
  )
}

export function useGrade() {
  return useContext(GradeContext)
}
