'use client'

import { FC, useEffect, useState } from 'react'

import { ARIA_LABELS } from '@/lib/utils/constants/ariaLabels'

// Function to update the forest and mountain icons based on the date
export const updateIcons = (
  date: Date,
  setForestIcon: (icon: string) => void,
  setMountainIcon: (icon: string) => void,
): void => {
  const month = date.getMonth()
  const day = date.getDate()

  // Determine if it is winter (December, January, February)
  const isWinter = month === 11 || month === 0 || month === 1

  // Determine if it is Christmas week (December 23-29)
  const isChristmas = month === 11 && day >= 23 && day <= 29

  // Update forest icon based on the season
  if (isChristmas) {
    setForestIcon('🎄🎄') // Christmas trees
  } else {
    setForestIcon('🌲🌲') // Evergreen trees
  }

  // Update mountain icon based on the season
  if (isChristmas) {
    setMountainIcon('🏔️🎄') // Christmas trees
  } else if (isWinter) {
    setMountainIcon('🏔️🌲') // Snowy mountain for winter
  } else {
    setMountainIcon('⛰️🌲') // Regular mountain for other seasons
  }
}

const ManWalkingInForest: FC = (): JSX.Element => {
  const [forestIcon, setForestIcon] = useState('🌲🌲') // Initial forest icon
  const [mountainIcon, setMountainIcon] = useState('⛰️🌲') // Initial mountain icon

  useEffect(() => {
    // Initial update of icons
    updateIcons(new Date(), setForestIcon, setMountainIcon)
  }, [])

  return (
    <>
      <span role="img" aria-label={ARIA_LABELS.forest} className="text-2xl">
        {forestIcon}
      </span>
      <span role="img" aria-label={ARIA_LABELS.manWalking} className="animate-walk text-2xl">
        🚶‍♂️
      </span>
      <span role="img" aria-label={ARIA_LABELS.forestWithMountain} className="text-2xl">
        {mountainIcon}
      </span>
    </>
  )
}

export default ManWalkingInForest
