'use client'

import Link from 'next/link'
import { Brain } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Brain className="h-6 w-6 text-indigo-600" />
          <span>Math Tutor</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Topics
          </Link>
        </nav>
      </div>
    </header>
  )
}
