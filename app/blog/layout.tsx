import React from 'react'
import './code-highlight.css'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">{children}</div>
    </div>
  )
}
