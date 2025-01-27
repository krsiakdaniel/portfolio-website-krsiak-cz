'use client'

import { FC, useEffect, useState } from 'react'

import Bubble from '@/components/shared/Bubble'

import { generateBubbleCss } from '@/lib/utils/helpers/bubbles/generateBubbleCss'
import { getBubbleStyles } from '@/lib/utils/helpers/bubbles/getBubbleStyles'
import { shuffleArrayWithBubblesColors } from '@/lib/utils/helpers/bubbles/shuffleArrayWithBubblesColors'
import { BubbleStyle } from '@/lib/utils/typeDefinitions/interfaces'

/**
 * CallToActionBubbles Component
 *
 * Displays a set of bubbles with randomized colors.
 *
 * The colors of the bubbles are shuffled on component mount.
 * Each bubble has a specific position, size, and hover effect.
 *
 * @returns {JSX.Element} The rendered component.
 */
const CallToActionBubbles: FC = (): JSX.Element => {
  const initialBubblesColors = ['bg-blue-300', 'bg-violet-400', 'bg-blue-400']

  // State to manage the colors of the bubbles
  const [colors, setColors] = useState<string[]>(initialBubblesColors)

  // Shuffle the colors when the component mounts
  useEffect(() => {
    setColors(shuffleArrayWithBubblesColors(initialBubblesColors))
  }, [])

  // Generate styles for the bubbles based on the colors
  const bubbleStyles: BubbleStyle[] = getBubbleStyles(colors)

  return (
    <>
      {(bubbleStyles ?? []).map((bubbleStyle) => (
        <Bubble key={bubbleStyle.id} customCss={generateBubbleCss(bubbleStyle)} />
      ))}
    </>
  )
}

export default CallToActionBubbles
