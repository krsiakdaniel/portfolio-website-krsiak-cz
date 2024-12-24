import { IconCaretRight } from '@/components/icons/IconCaretRight'
import Link from 'next/link'

type BreadcrumbsItemProps = {
  url: string
  text: string
}

const BreadcrumbsItem = ({ url, text }: BreadcrumbsItemProps) => (
  <li>
    <div className="flex items-center">
      <IconCaretRight />
      <Link href={url} className="ms-1 text-sm font-medium text-neutral-700 hover:text-violet-600 md:ms-2">
        {text}
      </Link>
    </div>
  </li>
)

export default BreadcrumbsItem
