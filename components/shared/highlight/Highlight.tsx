import { type HighlightProps } from '@/components/shared/highlight/Highlight.types'

const Highlight = ({ text, customCss = 'text-violet-600' }: HighlightProps) => {
  return <span className={`font-bold ${customCss}`}>{text}</span>
}

export default Highlight
