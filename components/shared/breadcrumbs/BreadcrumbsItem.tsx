import Link from 'next/link'

import { ChevronRight } from 'lucide-react'

import { BreadcrumbsItemProps } from '@/components/shared/breadcrumbs/BreadcrumbsItem.types'

const BreadcrumbsItem = ({
  href,
  icon,
  ariaLabel = '',
  text,
  showSeparatorIcon = true,
}: BreadcrumbsItemProps) => {
  const hoverAndFocusCSS = 'hover:bg-violet-50 hover:text-violet-800'

  return (
    <li className="inline-flex items-center">
      {showSeparatorIcon && (
        <span className="mx-2">
          <ChevronRight className="block h-4 w-4 text-violet-600" aria-hidden="true" />
        </span>
      )}
      <Link
        href={href}
        className={`rounded-lg p-2 text-sm font-medium text-neutral-600 select-none ${hoverAndFocusCSS}`}
      >
        <span role="img" aria-label={ariaLabel} className="select-none">
          {icon}
        </span>{' '}
        <span className="ml-1">{text}</span>
      </Link>
    </li>
  )
}

export default BreadcrumbsItem
