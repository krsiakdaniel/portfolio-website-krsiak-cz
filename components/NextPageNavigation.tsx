type Props = {
  pageLinkPrevious?: string
  pageNamePrevious?: string
  pageLinkNext?: string
  pageNameNext?: string
  dataTestIDPrevious?: string
  dataTestIDNext?: string
}

type IconArrowProps = {
  type?: 'left' | 'right'
}

const IconArrow = ({ type = 'right' }: IconArrowProps) => {
  return (
    <svg
      className={`mx-1 block h-4 w-4 ${type === 'left' ? 'rotate-180' : ''}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

const NextPageNavigation = ({
  pageLinkPrevious,
  pageNamePrevious,
  pageLinkNext,
  pageNameNext,
  dataTestIDPrevious,
  dataTestIDNext,
}: Props) => {
  const hasPrevious = pageLinkPrevious && pageNamePrevious
  const hasNext = pageLinkNext && pageNameNext

  return (
    <div className="container mx-auto max-w-screen-xl">
      <div className={`group flex flex-col gap-4 md:flex-row ${hasPrevious ? 'justify-between' : 'justify-end'}`}>
        {hasPrevious && (
          <a
            href={pageLinkPrevious}
            className={`flex w-full items-center justify-start rounded-lg border-violet-300 bg-violet-50 p-4 font-bold text-violet-600 hover:border-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-300 group-hover:text-violet-800 ${hasPrevious && hasNext ? 'lg:w-1/2' : 'lg:w-full'}`}
            data-testid={`${dataTestIDPrevious}`}
          >
            <IconArrow type="left" />
            {pageNamePrevious}
          </a>
        )}
        {hasNext && (
          <a
            href={pageLinkNext}
            className={`flex w-full items-center justify-end rounded-lg border-violet-300 bg-violet-50 p-4 font-bold text-violet-600 hover:border-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-300 group-hover:text-violet-800 ${hasPrevious && hasNext ? 'lg:w-1/2' : 'lg:w-full'}`}
            data-testid={`${dataTestIDNext}`}
          >
            {pageNameNext}
            <IconArrow />
          </a>
        )}
      </div>
    </div>
  )
}

export default NextPageNavigation
