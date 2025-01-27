'use client'

import { FC, useEffect, useState } from 'react'

import { ICON_EMOJI } from '@/localization/english'

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
    setForestIcon(ICON_EMOJI.nature.christmasForest) // Christmas trees
  } else {
    setForestIcon(ICON_EMOJI.nature.forest) // Evergreen trees
  }

  // Update mountain icon based on the season
  if (isChristmas) {
    setMountainIcon(ICON_EMOJI.nature.christmasMountainAndTree) // Christmas
  } else if (isWinter) {
    setMountainIcon(ICON_EMOJI.nature.winterMountainAndTree) // Winter
  } else {
    setMountainIcon(ICON_EMOJI.nature.mountainAndTree) // Other seasons
  }
}

const ManWalkingInForest: FC = (): JSX.Element => {
  const [forestIcon, setForestIcon] = useState(ICON_EMOJI.nature.forest) // Initial forest icon
  const [mountainIcon, setMountainIcon] = useState(ICON_EMOJI.nature.mountainAndTree) // Initial mountain icon

  useEffect(() => {
    // Initial update of icons
    updateIcons(new Date(), setForestIcon, setMountainIcon)
  }, [])

  return (
    <>
      <span role="img" aria-label={ARIA_LABELS.forest} className="text-3xl">
        {forestIcon}
      </span>
      <span role="img" aria-label={ARIA_LABELS.manWalking} className="animate-walk text-2xl">
        {ICON_EMOJI.manWalking}
      </span>
      <span role="img" aria-label={ARIA_LABELS.forestWithMountain} className="text-3xl">
        {mountainIcon}
      </span>
    </>
  )
}

export default ManWalkingInForest
