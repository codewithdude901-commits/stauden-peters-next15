// components/Spinner.tsx
'use client'

import React from 'react'

interface SpinnerProps {
  size?: number
  color?: string
  trackColor?: string
  thickness?: number
  className?: string
}

export default function Spinner({
  size = 40,
  color = '#2563eb', // Tailwind blue-600
  trackColor = '#e5e7eb', // Tailwind gray-200
  thickness = 4,
  className = '',
}: SpinnerProps) {
  const style: React.CSSProperties = {
    width: size,
    height: size,
    borderWidth: thickness,
    borderColor: trackColor,
    borderTopColor: color,
  }

  return (
    <div
      className={`inline-block animate-spin rounded-full ${className}`}
      style={style}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading…</span>
    </div>
  )
}
