import { ReactNode } from 'react'

type HighlightedTextProps = {
  children: ReactNode
}

const HighlightedText = ({ children }: HighlightedTextProps) => {
  return <span className="font-bold text-violet-600">{children}</span>
}

export default HighlightedText
