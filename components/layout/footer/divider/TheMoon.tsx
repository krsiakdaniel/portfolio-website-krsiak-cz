'use client'

import { Hemisphere, Moon } from 'lunarphase-js'
import { FC, useEffect, useState } from 'react'

import { ICON_EMOJI } from '@/localization/english'

import { ARIA_LABELS } from '@/lib/utils/constants/ariaLabels'

// Define the interval duration in milliseconds (1 hour)
const HOUR_IN_MILLISECONDS = 60 * 60 * 1000

// Define the type for the setLunarPhaseEmoji function
type SetLunarPhaseEmoji = (emoji: string) => void

// Function to update the lunar phase emoji
export const updateLunarPhase = (setLunarPhaseEmoji: SetLunarPhaseEmoji): void => {
  const date = new Date()
  const options = {
    hemisphere: Hemisphere.NORTHERN,
  }
  const emoji = Moon.lunarPhaseEmoji(date, options)
  setLunarPhaseEmoji(emoji)
}

const TheMoon: FC = (): JSX.Element => {
  const [lunarPhaseEmoji, setLunarPhaseEmoji] = useState<string>(ICON_EMOJI.moon.newMoon)

  useEffect(() => {
    // Initial update
    updateLunarPhase(setLunarPhaseEmoji)

    // Set interval to update lunar phase every hour
    const interval = setInterval(() => updateLunarPhase(setLunarPhaseEmoji), HOUR_IN_MILLISECONDS)

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [])

  return (
    <span role="img" aria-label={ARIA_LABELS.moon} className="text-2xl">
      {lunarPhaseEmoji}
    </span>
  )
}

export default TheMoon
