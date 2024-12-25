import { IconArrow } from '@/components/icons/IconArrow'

import { NavigationDirectionEnum } from '@/utils/interfaces/enums'

type PageNavigationLinkProps = {
  href: string
  text: string
  type?: NavigationDirectionEnum
  dataTestId: string | undefined
  justify: 'start' | 'end'
  widthClass: string
}

const PageNavigationLink = ({ href, text, type, dataTestId, justify, widthClass }: PageNavigationLinkProps) => {
  const showArrowLeft = type === NavigationDirectionEnum.Left
  const showArrowRight = type === NavigationDirectionEnum.Right

  return (
    <a
      href={href}
      className={`flex w-full items-center justify-${justify} rounded-lg border-violet-300 bg-violet-50 p-4 font-bold text-violet-600 hover:border-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-300 group-hover:text-violet-800 ${widthClass}`}
      data-testid={dataTestId}
    >
      {showArrowLeft && <IconArrow type={NavigationDirectionEnum.Left} />}
      {text}
      {showArrowRight && <IconArrow type={NavigationDirectionEnum.Right} />}
    </a>
  )
}

export default PageNavigationLink
