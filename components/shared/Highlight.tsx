import { FC } from 'react'

import { HighlightProps } from '@/lib/utils/typeDefinitions/props/props'

const Highlight: FC<HighlightProps> = ({ text }): JSX.Element => {
  return <span className="font-bold text-violet-600">{text}</span>
}

export default Highlight
