import PageNavigationLink from '@/components/page-navigation/PageNavigationLink'

import { NavigationDirectionEnum } from '@/lib/utils/interfaces/enums'

type PageNavigationProps = {
  linkPrevious?: string
  namePrevious?: string
  linkNext?: string
  nameNext?: string
  dataTestIdPrevious?: string
  dataTestIdNext?: string
}

const PageNavigation = ({
  linkPrevious,
  namePrevious,
  linkNext,
  nameNext,
  dataTestIdPrevious,
  dataTestIdNext,
}: PageNavigationProps) => {
  const hasPreviousLink = linkPrevious && namePrevious
  const hasNextLink = linkNext && nameNext

  return (
    <div className="container mx-auto mt-20 max-w-screen-xl">
      <div className={`group flex flex-col gap-4 md:flex-row ${hasPreviousLink ? 'justify-between' : 'justify-end'}`}>
        {hasPreviousLink && (
          <PageNavigationLink
            href={linkPrevious}
            text={namePrevious}
            type={NavigationDirectionEnum.Left}
            dataTestId={dataTestIdPrevious}
            justify="start"
            widthClass={hasPreviousLink && hasNextLink ? 'lg:w-1/2' : 'lg:w-full'}
          />
        )}
        {hasNextLink && (
          <PageNavigationLink
            href={linkNext}
            text={nameNext}
            type={NavigationDirectionEnum.Right}
            dataTestId={dataTestIdNext}
            justify="end"
            widthClass={hasPreviousLink && hasNextLink ? 'lg:w-1/2' : 'lg:w-full'}
          />
        )}
      </div>
    </div>
  )
}

export default PageNavigation
