'use client'

import { FC, useEffect, useState } from 'react'

import Bubble from '@/components/shared/Bubble'

import { shuffleArrayWithBubblesColors } from '@/lib/utils/helpers/bubbles/shuffleArrayWithBubblesColors'

const CallToActionBubbles: FC = (): JSX.Element => {
  const initialBubblesColors = ['bg-blue-300', 'bg-violet-400', 'bg-blue-400']

  // State to manage the colors of the bubbles
  const [bubbleColors, setBubbleColors] = useState<string[]>(initialBubblesColors)

  // Shuffle the colors when the component mounts
  useEffect(() => {
    setBubbleColors(shuffleArrayWithBubblesColors(initialBubblesColors))
  }, [])

  return (
    <>
      <Bubble
        customCss={`${bubbleColors[0]} -left-8 -top-8 2xl:-left-12 h-24 w-24 transition duration-500 group-hover:-translate-x-1 group-hover:translate-y-1 2xl:group-hover:-translate-x-2 2xl:group-hover:translate-y-2`}
      />
      <Bubble
        customCss={`${bubbleColors[1]} -right-8 2xl:-right-16 -top-12 2xl:-top-14 h-44 w-44 transition duration-500 group-hover:translate-x-1 group-hover:translate-y-1 2xl:group-hover:translate-x-2 2xl:group-hover:translate-y-2`}
      />
      <Bubble
        customCss={`${bubbleColors[2]} -bottom-10 2xl:-bottom-12 -right-8 2xl:-right-10 h-32 w-32 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 2xl:group-hover:translate-x-2 2xl:group-hover:-translate-y-2`}
      />
    </>
  )
}

export default CallToActionBubbles
