import { FC } from 'react'

import IconArrow from '@/components/icons/IconArrow'

import { ArrowDirectionEnum } from '@/lib/utils/typeDefinitions/enums'

import { PageNavigationLinkProps } from '@/lib/utils/typeDefinitions/props/layout/page-navigation'

const PageNavigationLink: FC<PageNavigationLinkProps> = ({ href, text, arrowDirection, dataTestId }): JSX.Element => {
  const hasArrowLeft = arrowDirection === ArrowDirectionEnum.Left
  const hasArrowRight = arrowDirection === ArrowDirectionEnum.Right

  const justifyArrowCSS = hasArrowLeft ? 'justify-start' : 'justify-end'
  const hoverAndFocusCSS =
    'hover:bg-violet-100 focus:outline-none focus:ring-4 focus:ring-violet-300 group-hover:text-violet-600'

  return (
    <a
      href={href}
      className={`flex w-full items-center space-x-2 rounded-lg bg-violet-50 p-4 font-bold text-violet-500 ${justifyArrowCSS} ${hoverAndFocusCSS} lg:w-1/2`}
      data-testid={dataTestId}
    >
      {hasArrowLeft && <IconArrow arrowDirection={ArrowDirectionEnum.Left} />}
      <span>{text}</span>
      {hasArrowRight && <IconArrow arrowDirection={ArrowDirectionEnum.Right} />}
    </a>
  )
}

export default PageNavigationLink
