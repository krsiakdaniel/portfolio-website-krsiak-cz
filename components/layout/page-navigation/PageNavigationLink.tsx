import { FC } from 'react'

import { IconArrow } from '@/components/icons/IconArrow'

import { NavigationDirectionEnum } from '@/lib/utils/interfaces/enums'

type PageNavigationLinkProps = {
  href: string
  text: string
  direction?: NavigationDirectionEnum
  dataTestId: string | undefined
  justify: 'start' | 'end'
  widthClass: string
}

const PageNavigationLink: FC<PageNavigationLinkProps> = ({
  href,
  text,
  direction,
  dataTestId,
  justify,
  widthClass,
}): JSX.Element => {
  const showArrowLeft = direction === NavigationDirectionEnum.Left
  const showArrowRight = direction === NavigationDirectionEnum.Right

  return (
    <a
      href={href}
      className={`flex w-full items-center justify-${justify} rounded-lg border-violet-300 bg-violet-50 p-4 font-bold text-violet-600 hover:border-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-300 group-hover:text-violet-800 ${widthClass}`}
      data-testid={dataTestId}
    >
      {showArrowLeft && <IconArrow direction={NavigationDirectionEnum.Left} />}
      {text}
      {showArrowRight && <IconArrow direction={NavigationDirectionEnum.Right} />}
    </a>
  )
}

export default PageNavigationLink
