import { FC } from 'react'

import { ScrollProgressBarProps } from '@/lib/utils/typeDefinitions/props/layout/header/scrollProgressBar'

const ScrollProgressBar: FC<ScrollProgressBarProps> = ({ scroll }): JSX.Element => {
  return (
    <div
      className="absolute bottom-0 left-0 h-1 bg-violet-600"
      style={{ width: `${scroll}%` }}
    ></div>
  )
}

export default ScrollProgressBar
