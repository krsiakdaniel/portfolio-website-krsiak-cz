import { FC } from 'react'

import PageNavigationLink from '@/components/layout/pages/navigation-previous-next/PageNavigationLink'

import { NavigationDirectionEnum } from '@/lib/utils/interfaces/enums'

type PageNavigationProps = {
  linkPrevious?: string
  namePrevious?: string
  linkNext?: string
  nameNext?: string
  dataTestIdPrevious?: string
  dataTestIdNext?: string
}

const PageNavigation: FC<PageNavigationProps> = ({
  linkPrevious,
  namePrevious,
  linkNext,
  nameNext,
  dataTestIdPrevious,
  dataTestIdNext,
}): JSX.Element => {
  const hasPreviousLink = linkPrevious && namePrevious
  const hasNextLink = linkNext && nameNext

  return (
    <div className="container mx-auto mt-20 max-w-screen-xl">
      <div className={`group flex flex-col gap-4 md:flex-row ${hasPreviousLink ? 'justify-between' : 'justify-end'}`}>
        {hasPreviousLink && (
          <PageNavigationLink
            href={linkPrevious}
            text={namePrevious}
            direction={NavigationDirectionEnum.Left}
            dataTestId={dataTestIdPrevious}
            justify="start"
            widthClass={hasPreviousLink && hasNextLink ? 'lg:w-1/2' : 'lg:w-full'}
          />
        )}
        {hasNextLink && (
          <PageNavigationLink
            href={linkNext}
            text={nameNext}
            direction={NavigationDirectionEnum.Right}
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
