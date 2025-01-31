import { FC } from 'react'

import GhostScreaming from '@/components/layout/page-navigation/GhostScreaming'

import { ICON_EMOJI } from '@/localization/english'

import { ArrowDirectionEnum } from '@/lib/utils/typeDefinitions/enums'
import { EasterEggGhostProps } from '@/lib/utils/typeDefinitions/props/layout/easter-egg-ghost'

const EasterEggGhost: FC<EasterEggGhostProps> = ({ arrowDirection }) => {
  const cssAnimationClassNext = 'animate-ghost-next'
  const cssAnimationClassPrevious = 'animate-ghost-previous'

  const isArrowDirectionLeft = arrowDirection === ArrowDirectionEnum.Left
  const isArrowDirectionRight = arrowDirection === ArrowDirectionEnum.Right

  const moveGhostDirectionClass = isArrowDirectionLeft ? cssAnimationClassNext : cssAnimationClassPrevious

  return (
    <span role="img" className={`${moveGhostDirectionClass} hidden select-none px-4 group-hover:inline-block`}>
      {isArrowDirectionRight && <GhostScreaming />}
      <span className="mx-2">{ICON_EMOJI.ghost}</span>
      {isArrowDirectionLeft && <GhostScreaming />}
    </span>
  )
}

export default EasterEggGhost
