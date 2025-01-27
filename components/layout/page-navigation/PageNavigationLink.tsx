import { FC } from 'react'

import IconArrow from '@/components/icons/IconArrow'

import { ArrowDirectionEnum } from '@/lib/utils/typeDefinitions/enums'

import { PageNavigationLinkProps } from '@/lib/utils/typeDefinitions/props/layout/page-navigation'

const PageNavigationLink: FC<PageNavigationLinkProps> = ({
  href,
  icon,
  text,
  arrowDirection,
  dataTestId,
}): JSX.Element => {
  const hasArrowLeft = arrowDirection === ArrowDirectionEnum.Left
  const hasArrowRight = arrowDirection === ArrowDirectionEnum.Right

  const justifyArrowCSS = hasArrowLeft ? 'justify-start' : 'justify-end'
  const hoverAndFocusCSS =
    'hover:border-violet-400 hover:bg-violet-100 group-hover:text-violet-600 focus:outline-none focus:ring-4 focus:ring-violet-300 focus:bg-violet-100 focus:border-violet-400 '

  return (
    <a
      href={href}
      rel={hasArrowLeft ? 'prev' : 'next'}
      className={`flex w-full items-center space-x-2 rounded-lg border border-dashed border-violet-200 bg-violet-50 p-4 font-bold text-violet-500 ${justifyArrowCSS} ${hoverAndFocusCSS} select-none lg:w-1/2`}
      data-testid={dataTestId}
    >
      {hasArrowLeft && <IconArrow arrowDirection={ArrowDirectionEnum.Left} />}
      <span>{icon}</span>
      <span>{text}</span>
      {hasArrowRight && <IconArrow arrowDirection={ArrowDirectionEnum.Right} />}
    </a>
  )
}

export default PageNavigationLink
