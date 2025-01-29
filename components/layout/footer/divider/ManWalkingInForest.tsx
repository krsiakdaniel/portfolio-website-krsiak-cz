'use client'

import { FC, useEffect, useState } from 'react'

import { ICON_EMOJI } from '@/localization/english'

import { ARIA_LABELS } from '@/lib/utils/constants/ariaLabels'
import { updateIconsManWalkingInForest } from '@/lib/utils/helpers/updateIconsManWalkingInForest'

const ManWalkingInForest: FC = (): JSX.Element => {
  const [forestIcon, setForestIcon] = useState(ICON_EMOJI.nature.forest) // Initial forest icon
  const [mountainIcon, setMountainIcon] = useState(ICON_EMOJI.nature.mountainAndTree) // Initial mountain icon

  useEffect(() => {
    // Initial update of icons
    updateIconsManWalkingInForest(new Date(), setForestIcon, setMountainIcon)
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
