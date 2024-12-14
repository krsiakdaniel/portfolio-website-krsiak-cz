import { IconCaretRight, IconHome } from '@/components/icons'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import { BreadCrumbsType } from '@/utils/types'
import Link from 'next/link'

type BreadCrumbsProps = BreadCrumbsType

const BreadCrumbs = ({ linkLevel1, textLevel1, linkLevel2, textLevel2 }: BreadCrumbsProps) => {
  return (
    <>
      <nav className="mb-10 flex text-neutral-700" aria-label="Breadcrumbs" data-testid={DATA_TEST_IDS.breadcrumbs}>
        <ol className="inline-flex flex-row flex-wrap items-start space-x-1 md:space-x-2">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-neutral-700 hover:text-violet-600"
            >
              <IconHome />
              Home
            </Link>
          </li>
          {linkLevel1 && textLevel1 && (
            <li>
              <div className="flex items-center">
                <IconCaretRight />
                <Link
                  href={linkLevel1}
                  className="ms-1 text-sm font-medium text-neutral-700 hover:text-violet-600 md:ms-2"
                >
                  {textLevel1}
                </Link>
              </div>
            </li>
          )}
          {linkLevel2 && textLevel2 && (
            <li>
              <div className="flex items-center">
                <IconCaretRight />
                <Link
                  href={linkLevel2}
                  className="ms-1 text-sm font-medium text-neutral-700 hover:text-violet-600 md:ms-2"
                >
                  {textLevel2}
                </Link>
              </div>
            </li>
          )}
        </ol>
      </nav>
    </>
  )
}

export default BreadCrumbs
