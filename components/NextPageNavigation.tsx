import { IconArrow } from '@/components/icons'

type Props = {
  pageLinkPrevious?: string
  pageNamePrevious?: string
  pageLinkNext?: string
  pageNameNext?: string
  dataTestIDPrevious?: string
  dataTestIDNext?: string
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
