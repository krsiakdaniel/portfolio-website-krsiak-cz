import DefaultNoLinkNavigation from '@/components/layout/page-navigation/DefaultNoLinkNavigation'
import { PageNavigationProps } from '@/components/layout/page-navigation/PageNavigation.types'
import PageNavigationLink from '@/components/layout/page-navigation/PageNavigationLink'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { ArrowDirectionEnum } from '@/lib/types/enums'
import { ARIA_LABELS } from '@/localization'

const PageNavigation = ({
  linkPrevious,
  iconPrevious,
  namePrevious,
  dataTestIdPrevious,
  linkNext,
  iconNext,
  nameNext,
  dataTestIdNext,
}: PageNavigationProps) => {
  const hasPreviousLink = linkPrevious && namePrevious
  const hasNextLink = linkNext && nameNext

  return (
    <nav data-testid={DATA_TEST_IDS.navigation.END_OF_PAGE} aria-label={ARIA_LABELS.pageNavigation}>
      <div className="container mx-auto mt-20 max-w-(--breakpoint-xl)">
        <div
          className={`flex flex-col gap-4 md:flex-row ${hasPreviousLink ? 'justify-between' : 'justify-end'}`}
        >
          {hasPreviousLink ? (
            <PageNavigationLink
              href={linkPrevious}
              icon={iconPrevious!}
              text={namePrevious}
              arrowDirection={ArrowDirectionEnum.Left}
              dataTestId={dataTestIdPrevious}
            />
          ) : (
            <DefaultNoLinkNavigation arrowDirection={ArrowDirectionEnum.Left} />
          )}
          {hasNextLink ? (
            <PageNavigationLink
              href={linkNext}
              icon={iconNext!}
              text={nameNext}
              arrowDirection={ArrowDirectionEnum.Right}
              dataTestId={dataTestIdNext}
            />
          ) : (
            <DefaultNoLinkNavigation arrowDirection={ArrowDirectionEnum.Right} />
          )}
        </div>
      </div>
    </nav>
  )
}

export default PageNavigation
