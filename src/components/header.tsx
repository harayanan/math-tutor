'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Brain } from 'lucide-react'
import { useGrade } from '@/lib/grade-context'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function Header() {
  const { grade, setGrade } = useGrade()
  const pathname = usePathname()

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Brain className="h-6 w-6 text-indigo-600" />
          <span>Math Tutor</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <Select value={grade} onValueChange={setGrade}>
            <SelectTrigger className="w-[130px] h-8 text-sm">
              <SelectValue placeholder="All Grades" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Grades</SelectItem>
              <SelectItem value="4">Class 4</SelectItem>
              <SelectItem value="5">Class 5</SelectItem>
              <SelectItem value="6">Class 6</SelectItem>
            </SelectContent>
          </Select>
          <Link
            href="/"
            className={`hover:text-foreground transition-colors ${pathname === '/' ? 'text-foreground font-medium' : ''}`}
          >
            Topics
          </Link>
          <Link
            href="/olympiad"
            className={`hover:text-foreground transition-colors ${pathname === '/olympiad' ? 'text-foreground font-medium' : ''}`}
          >
            Olympiad
          </Link>
        </nav>
      </div>
    </header>
  )
}
