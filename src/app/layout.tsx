import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Header } from '@/components/header'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Math Tutor — Learn Math by Doing',
  description:
    'An adaptive math tutor for grades 4–6. Practice arithmetic, fractions, decimals, geometry, word problems, and pre-algebra with Socratic guidance.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50/50 min-h-screen`}
      >
        <Header />
        <main className="container mx-auto px-4 py-8 max-w-3xl">
          {children}
        </main>
      </body>
    </html>
  )
}
