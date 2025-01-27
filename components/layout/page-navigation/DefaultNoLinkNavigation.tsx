import { FC } from 'react'

import IconArrow from '@/components/icons/IconArrow'
import EasterEggGhost from '@/components/layout/page-navigation/EasterEggGhost'

import { ArrowDirectionEnum } from '@/lib/utils/typeDefinitions/enums'

import { DefaultNoLinkNavigationProps } from '@/lib/utils/typeDefinitions/props/layout/page-navigation'

const DefaultNoLinkNavigation: FC<DefaultNoLinkNavigationProps> = ({ arrowDirection }) => {
  const hasArrowLeft = arrowDirection === ArrowDirectionEnum.Left
  const hasArrowRight = arrowDirection === ArrowDirectionEnum.Right

  const justifyArrowCSS = hasArrowLeft ? 'justify-start' : 'justify-end'

  return (
    <div
      className={`group flex min-h-[58px] w-full cursor-help items-center space-x-2 rounded-lg border border-dashed border-gray-200 bg-white p-4 text-center font-bold text-gray-200 ${justifyArrowCSS} lg:w-1/2`}
    >
      {hasArrowRight && <EasterEggGhost arrowDirection={ArrowDirectionEnum.Right} />}
      <IconArrow arrowDirection={arrowDirection} />
      {hasArrowLeft && <EasterEggGhost arrowDirection={ArrowDirectionEnum.Left} />}
    </div>
  )
}

export default DefaultNoLinkNavigation
