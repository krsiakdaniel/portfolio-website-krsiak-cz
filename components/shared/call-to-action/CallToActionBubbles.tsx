'use client'

import { FC, useEffect, useState } from 'react'

import Bubble from '@/components/shared/Bubble'

import { generateBubbleCss } from '@/lib/utils/helpers/bubbles/generateBubbleCss'
import { getBubblesStyles } from '@/lib/utils/helpers/bubbles/getBubblesStyles'
import { shuffleArrayWithBubblesColors } from '@/lib/utils/helpers/bubbles/shuffleArrayWithBubblesColors'
import { BubbleStyleCSS } from '@/lib/utils/typeDefinitions/interfaces'

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
  const bubblesStylesCSS: BubbleStyleCSS[] = getBubblesStyles(colors)

  return (
    <>
      {(bubblesStylesCSS ?? []).map((bubbleCSS) => (
        <Bubble key={bubbleCSS.id} customCss={generateBubbleCss(bubbleCSS)} />
      ))}
    </>
  )
}

export default CallToActionBubbles
