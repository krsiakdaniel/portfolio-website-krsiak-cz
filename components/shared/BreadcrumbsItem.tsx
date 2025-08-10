import Link from 'next/link'

import IconCaretRight from '@/components/icons/IconCaretRight'

import { BreadcrumbsItemProps } from '@/lib/utils/typeDefinitions/props/shared/breadcrumbs-item'

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
          <IconCaretRight />
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
