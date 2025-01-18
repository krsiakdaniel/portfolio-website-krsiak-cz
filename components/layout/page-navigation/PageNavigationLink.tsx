import { FC } from 'react'

import IconArrow from '@/components/icons/IconArrow'

import { NavigationDirectionEnum } from '@/lib/utils/typeDefinitions/enums'

import { PageNavigationLinkProps } from '@/lib/utils/typeDefinitions/props/layout/page-navigation'

const PageNavigationLink: FC<PageNavigationLinkProps> = ({ href, text, direction, dataTestId }): JSX.Element => {
  const hasArrowLeft = direction === NavigationDirectionEnum.Left
  const hasArrowRight = direction === NavigationDirectionEnum.Right

  const justifyArrowCSS = hasArrowLeft ? 'justify-start' : 'justify-end'
  const hoverAndFocusCSS =
    'hover:bg-violet-100 focus:outline-none focus:ring-4 focus:ring-violet-300 group-hover:text-violet-600'

  return (
    <a
      href={href}
      className={`flex w-full items-center space-x-2 rounded-lg bg-violet-50 p-4 font-bold text-violet-500 ${justifyArrowCSS} ${hoverAndFocusCSS} lg:w-1/2`}
      data-testid={dataTestId}
    >
      {hasArrowLeft && <IconArrow direction={NavigationDirectionEnum.Left} />}
      <span>{text}</span>
      {hasArrowRight && <IconArrow direction={NavigationDirectionEnum.Right} />}
    </a>
  )
}

export default PageNavigationLink
