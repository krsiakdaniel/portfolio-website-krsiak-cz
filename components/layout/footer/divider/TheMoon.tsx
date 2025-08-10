'use client'

import { useEffect, useState } from 'react'

import { ARIA_LABELS, ICON_EMOJI } from '@/localization/english'

import { updateLunarPhase } from '@/lib/utils/helpers/updateLunarPhase'

// Define the interval duration in milliseconds (1 hour)
const HOUR_IN_MILLISECONDS = 60 * 60 * 1000

const TheMoon = () => {
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
