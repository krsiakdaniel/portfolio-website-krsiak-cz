import { FC } from 'react'

import { HighlightProps } from '@/lib/utils/typeDefinitions/props/shared/highlight'

const Highlight: FC<HighlightProps> = ({ text, customCss = 'text-violet-600' }): JSX.Element => {
  return <span className={`font-bold ${customCss}`}>{text}</span>
}

export default Highlight
