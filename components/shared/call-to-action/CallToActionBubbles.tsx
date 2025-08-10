'use client'

import { useEffect, useMemo, useState } from 'react'

import Bubble from '@/components/shared/Bubble'

import { shuffleArrayWithBubblesColors } from '@/lib/utils/helpers/bubbles/shuffleArrayWithBubblesColors'

const CallToActionBubbles = () => {
  const cssAnimationClass = 'animate-pulse-bubble'

  const initialBubblesColors = useMemo(() => ['bg-blue-300', 'bg-violet-400', 'bg-blue-400'], [])

  // State to manage the colors of the bubbles
  const [bubbleColors, setBubbleColors] = useState<string[]>(initialBubblesColors)

  // Shuffle the colors when the component mounts
  useEffect(() => {
    setBubbleColors(shuffleArrayWithBubblesColors(initialBubblesColors))
  }, [initialBubblesColors])

  return (
    <>
      <Bubble
        customCss={`${bubbleColors[0]} ${cssAnimationClass} -left-6 -top-8 2xl:-left-10 h-24 w-24 transition duration-500`}
      />
      <Bubble
        customCss={`${bubbleColors[1]} ${cssAnimationClass} -right-6 -top-12 2xl:-right-8 2xl:-top-14 h-36 w-36 transition duration-500`}
      />
      <Bubble
        customCss={`${bubbleColors[2]} ${cssAnimationClass} -bottom-8 -right-6 2xl:-bottom-10 2xl:-right-8 h-28 w-28 transition duration-500`}
      />
    </>
  )
}

export default CallToActionBubbles
