import Link from 'next/link'
import { FC } from 'react'

import IconCaretRight from '@/components/icons/IconCaretRight'

import { BreadcrumbsItemProps } from '@/lib/utils/typeDefinitions/props/shared/breadcrumbs'

const BreadcrumbsItem: FC<BreadcrumbsItemProps> = ({ url, text }): JSX.Element => {
  const hoverAndFocusCSS = 'hover:bg-violet-100 hover:text-violet-600'

  return (
    <li className="inline-flex items-center">
      <span className="ml-0 sm:mx-2">
        <IconCaretRight />
      </span>
      <Link href={url} className={`rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 ${hoverAndFocusCSS}`}>
        {text}
      </Link>
    </li>
  )
}

export default BreadcrumbsItem
