import { FC } from 'react'

import { IconArrow } from '@/components/icons/IconArrow'

import { NavigationDirectionEnum } from '@/lib/utils/interfaces/enums'

type DefaultNoLinkNavigationProps = {
  arrowDirection: NavigationDirectionEnum
}

const DefaultNoLinkNavigation: FC<DefaultNoLinkNavigationProps> = ({ arrowDirection }) => {
  return (
    <div
      className={`flex w-full font-bold lg:w-1/2 ${arrowDirection === NavigationDirectionEnum.Left ? 'justify-start' : 'justify-end'} rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4 text-center font-bold text-gray-300`}
    >
      <IconArrow direction={arrowDirection} />
    </div>
  )
}

export default DefaultNoLinkNavigation
