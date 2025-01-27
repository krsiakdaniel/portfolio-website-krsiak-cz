import Link from 'next/link'
import { FC } from 'react'

import IconCaretRight from '@/components/icons/IconCaretRight'

import { BreadcrumbsItemProps } from '@/lib/utils/typeDefinitions/props/shared/breadcrumbs'

const BreadcrumbsItem: FC<BreadcrumbsItemProps> = ({ href, icon, text, showSeparatorIcon = true }): JSX.Element => {
  const hoverAndFocusCSS = 'hover:bg-violet-100 hover:text-violet-600'

  return (
    <li className="inline-flex items-center">
      {showSeparatorIcon && (
        <span className="ml-0 sm:mx-2">
          <IconCaretRight />
        </span>
      )}
      <Link
        href={href}
        className={`select-none rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 ${hoverAndFocusCSS}`}
      >
        <span className="select-none">{icon}</span> <span className="ml-1">{text}</span>
      </Link>
    </li>
  )
}

export default BreadcrumbsItem
