import { FC } from 'react'

import { EASTER_EGG, ICON_EMOJI } from '@/localization/english'

import { ArrowDirectionEnum } from '@/lib/utils/typeDefinitions/enums'
import { EasterEggGhostProps } from '@/lib/utils/typeDefinitions/props/layout/easter-egg-ghost'

const EasterEggGhost: FC<EasterEggGhostProps> = ({ arrowDirection }) => {
  const isArrowDirectionLeft = arrowDirection === ArrowDirectionEnum.Left
  const isArrowDirectionRight = arrowDirection === ArrowDirectionEnum.Right

  const moveGhostDirectionClass = isArrowDirectionLeft ? 'animate-ghost-next' : 'animate-ghost-previous'

  return (
    <span
      role="img"
      className={`${moveGhostDirectionClass} hidden cursor-not-allowed select-none px-4 group-hover:inline-block`}
    >
      {isArrowDirectionRight && <span className="mr-2">{EASTER_EGG.ghostSound}</span>}
      {ICON_EMOJI.ghost}
      {isArrowDirectionLeft && <span className="ml-2">{EASTER_EGG.ghostSound}</span>}
    </span>
  )
}

export default EasterEggGhost
