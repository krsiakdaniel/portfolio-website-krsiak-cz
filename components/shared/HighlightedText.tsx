import { ReactNode } from 'react'

interface HighlightedTextProps {
  children: ReactNode
}

const HighlightedText = ({ children }: HighlightedTextProps) => {
  return <span className="font-bold text-violet-600">{children}</span>
}

export default HighlightedText
