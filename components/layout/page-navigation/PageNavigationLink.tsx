import { FC } from 'react'

import IconArrow from '@/components/icons/IconArrow'

import { NavigationDirectionEnum } from '@/lib/utils/typeDefinitions/enums'

import { PageNavigationLinkProps } from '@/lib/utils/typeDefinitions/props'

const PageNavigationLink: FC<PageNavigationLinkProps> = ({ href, text, direction, dataTestId }): JSX.Element => {
  const hasArrowLeft = direction === NavigationDirectionEnum.Left
  const hasArrowRight = direction === NavigationDirectionEnum.Right

  const justifyArrowCSS = hasArrowLeft ? 'justify-start' : 'justify-end'

  return (
    <a
      href={href}
      className={`${justifyArrowCSS} flex w-full items-center rounded-lg border-violet-300 bg-violet-50 p-4 font-bold text-violet-600 hover:border-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-300 group-hover:text-violet-800 lg:w-1/2`}
      data-testid={dataTestId}
    >
      {hasArrowLeft && <IconArrow direction={NavigationDirectionEnum.Left} />}
      {text}
      {hasArrowRight && <IconArrow direction={NavigationDirectionEnum.Right} />}
    </a>
  )
}

export default PageNavigationLink
