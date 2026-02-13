'use client'

interface ProgressRingProps {
  percentage: number
  size?: number
  strokeWidth?: number
  className?: string
}

export function ProgressRing({
  percentage,
  size = 48,
  strokeWidth = 4,
  className = '',
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-muted/30"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="text-indigo-600 transition-all duration-500"
        />
      </svg>
      <span className="absolute text-xs font-medium">{percentage}%</span>
    </div>
  )
}
