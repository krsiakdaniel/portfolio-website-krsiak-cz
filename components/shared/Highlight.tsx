import { FC } from 'react'

type HighlightProps = {
  text: string
}

const Highlight: FC<HighlightProps> = ({ text }): JSX.Element => {
  return <span className="font-bold text-violet-600">{text}</span>
}

export default Highlight
