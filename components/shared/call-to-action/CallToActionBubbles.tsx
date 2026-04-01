'use client'

import { useState } from 'react'

import Bubble from '@/components/shared/Bubble'

import { shuffleArrayWithBubblesColors } from '@/lib/utils/helpers/shuffleArrayWithBubblesColors'

const animationClassCss = 'animate-pulse-bubble'
const initialBubblesColorsCss = ['bg-blue-300', 'bg-violet-400', 'bg-blue-400']

const CallToActionBubbles = () => {
  // Shuffle using a fresh copy to avoid mutating the module-level array
  const [bubbleColors] = useState<string[]>(() =>
    shuffleArrayWithBubblesColors([...initialBubblesColorsCss]),
  )

  return (
    <>
      <Bubble
        customCss={`${bubbleColors[0]} ${animationClassCss} -left-6 -top-8 2xl:-left-10 h-24 w-24 transition duration-500`}
      />
      <Bubble
        customCss={`${bubbleColors[1]} ${animationClassCss} -right-6 -top-12 2xl:-right-8 2xl:-top-14 h-36 w-36 transition duration-500`}
      />
      <Bubble
        customCss={`${bubbleColors[2]} ${animationClassCss} -bottom-8 -right-6 2xl:-bottom-10 2xl:-right-8 h-28 w-28 transition duration-500`}
      />
    </>
  )
}

export default CallToActionBubbles
