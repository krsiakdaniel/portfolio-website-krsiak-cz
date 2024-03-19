import { IconCaretRight, IconHome } from '@/components/icons'
import { BreadCrumbsType } from '@/utils/types'

const BreadCrumbs = ({ linkLevel1, textLevel1, linkLevel2, textLevel2 }: BreadCrumbsType) => {
  return (
    <>
      <nav className="mb-10 flex text-neutral-700" aria-label="Breadcrumbs" data-testid="breadcrumbs">
        <ol className="inline-flex flex-row flex-wrap items-start space-x-1 md:space-x-2">
          <li className="inline-flex items-center">
            <a href="/" className="inline-flex items-center text-sm font-medium text-neutral-700 hover:text-violet-600">
              <IconHome />
              Home
            </a>
          </li>
          {linkLevel1 && textLevel1 && (
            <li>
              <div className="flex items-center">
                <IconCaretRight />
                <a
                  href={linkLevel1}
                  className="ms-1 text-sm font-medium text-neutral-700 hover:text-violet-600 md:ms-2"
                >
                  {textLevel1}
                </a>
              </div>
            </li>
          )}
          {linkLevel2 && textLevel2 && (
            <li>
              <div className="flex items-center">
                <IconCaretRight />
                <a
                  href={linkLevel2}
                  className="ms-1 text-sm font-medium text-neutral-700 hover:text-violet-600 md:ms-2"
                >
                  {textLevel2}
                </a>
              </div>
            </li>
          )}
        </ol>
      </nav>
    </>
  )
}

export default BreadCrumbs
