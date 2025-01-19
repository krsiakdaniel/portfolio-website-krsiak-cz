import { FC } from 'react'

import IconArrow from '@/components/icons/IconArrow'

import { ArrowDirectionEnum } from '@/lib/utils/typeDefinitions/enums'

import { DefaultNoLinkNavigationProps } from '@/lib/utils/typeDefinitions/props/layout/page-navigation'

const DefaultNoLinkNavigation: FC<DefaultNoLinkNavigationProps> = ({ arrowDirection }) => {
  const hasArrowLeft = arrowDirection === ArrowDirectionEnum.Left

  const justifyArrowCSS = hasArrowLeft ? 'justify-start' : 'justify-end'

  return (
    <div
      className={`flex w-full items-center rounded-lg border border-dashed border-gray-200 bg-gray-50 p-4 text-center font-bold text-gray-200 ${justifyArrowCSS} lg:w-1/2`}
    >
      <IconArrow arrowDirection={arrowDirection} />
    </div>
  )
}

export default DefaultNoLinkNavigation
