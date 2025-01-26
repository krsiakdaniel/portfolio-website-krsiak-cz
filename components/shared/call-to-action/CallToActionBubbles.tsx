import { FC } from 'react'

import Bubble from '@/components/shared/Bubble'

const CallToActionBubbles: FC = (): JSX.Element => {
  return (
    <>
      <Bubble customCss="-left-10 -top-8 h-24 w-24 bg-blue-300 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2" />
      <Bubble customCss="-right-16 -top-8 h-44 w-44 bg-violet-400 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
      <Bubble customCss="-bottom-10 -right-8 h-32 w-32 bg-blue-400 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
    </>
  )
}

export default CallToActionBubbles
