import { FC } from 'react'

import { BubbleProps } from '@/lib/utils/typeDefinitions/props/shared/bubble'

const Bubble: FC<BubbleProps> = ({ customCss }) => (
  <div className={`absolute transform rounded-full opacity-50 ${customCss}`}></div>
)

export default Bubble
