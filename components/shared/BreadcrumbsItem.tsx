import Link from 'next/link'
import { FC } from 'react'

import IconCaretRight from '@/components/icons/IconCaretRight'

import { BreadcrumbsItemProps } from '@/lib/utils/typeDefinitions/props/shared/breadcrumbs'

const BreadcrumbsItem: FC<BreadcrumbsItemProps> = ({ url, text }): JSX.Element => (
  <li>
    <div className="flex items-center">
      <IconCaretRight />
      <Link href={url} className="ms-1 text-sm font-medium text-neutral-600 hover:text-violet-600 md:ms-2">
        {text}
      </Link>
    </div>
  </li>
)

export default BreadcrumbsItem
