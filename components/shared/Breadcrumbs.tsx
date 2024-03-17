import { BreadCrumbsType } from '@/utils/types'

const IconHome = () => {
  return (
    <svg
      className="me-2.5 h-3 w-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
    </svg>
  )
}

const IconCaretRight = () => {
  return (
    <svg
      className="mx-1 block h-3 w-3 text-neutral-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 6 10"
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
    </svg>
  )
}

// TODO: write tests for all pages breadcrumbs and links
const BreadCrumbs = ({ linkLevel1, textLevel1, linkLevel2, textLevel2 }: BreadCrumbsType) => {
  return (
    <>
      <nav className="mb-10 flex text-neutral-700" aria-label="Breadcrumb">
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
