import IconArrow from '@/components/icons/IconArrow'

import { ArrowDirectionEnum } from '@/lib/types/enums'
import { COMMON_VALUES } from '@/localization'

import { PageNavigationLinkProps } from './PageNavigationLink.types'

const PageNavigationLink = ({
  href,
  icon,
  text,
  arrowDirection,
  dataTestId,
}: PageNavigationLinkProps) => {
  const hasArrowLeft = arrowDirection === ArrowDirectionEnum.Left
  const hasArrowRight = arrowDirection === ArrowDirectionEnum.Right

  const justifyArrowCSS = hasArrowLeft ? 'justify-start' : 'justify-end'
  const hoverAndFocusCSS =
    'hover:border-violet-400 hover:bg-violet-100 hover:text-violet-800 focus:outline-hidden focus:ring-4 focus:ring-violet-400 focus:bg-violet-100 focus:border-violet-400 '

  return (
    <a
      href={href}
      rel={hasArrowLeft ? 'prev' : 'next'}
      className={`flex w-full items-center space-x-2 rounded-lg border border-dashed border-violet-200 bg-violet-50 p-4 font-bold text-violet-600 ${justifyArrowCSS} ${hoverAndFocusCSS} select-none lg:w-1/2`}
      data-testid={dataTestId}
    >
      {hasArrowLeft && <IconArrow arrowDirection={ArrowDirectionEnum.Left} />}
      <span
        role="img"
        aria-label={hasArrowLeft ? COMMON_VALUES.navigationPrevious : COMMON_VALUES.navigationNext}
      >
        {icon}
      </span>
      <span>{text}</span>
      {hasArrowRight && <IconArrow arrowDirection={ArrowDirectionEnum.Right} />}
    </a>
  )
}

export default PageNavigationLink
