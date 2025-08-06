import { FC } from 'react'

import DefaultNoLinkNavigation from '@/components/layout/page-navigation/DefaultNoLinkNavigation'
import PageNavigationLink from '@/components/layout/page-navigation/PageNavigationLink'

import { ICON_EMOJI } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { ArrowDirectionEnum } from '@/lib/utils/typeDefinitions/enums'

import { PageNavigationProps } from '@/lib/utils/typeDefinitions/props/layout/page-navigation'

const PageNavigation: FC<PageNavigationProps> = ({
  linkPrevious,
  iconPrevious = ICON_EMOJI.ghost,
  namePrevious,
  dataTestIdPrevious,
  linkNext,
  iconNext = ICON_EMOJI.ghost,
  nameNext,
  dataTestIdNext,
}): JSX.Element => {
  const hasPreviousLink = linkPrevious && namePrevious
  const hasNextLink = linkNext && nameNext

  return (
    <nav data-testid={DATA_TEST_IDS.navigation.END_OF_PAGE}>
      <div className="container mx-auto mt-20 max-w-(--breakpoint-xl)">
        <div
          className={`group flex flex-col gap-8 md:flex-row ${hasPreviousLink ? 'justify-between' : 'justify-end'}`}
        >
          {hasPreviousLink ? (
            <PageNavigationLink
              href={linkPrevious}
              icon={iconPrevious}
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
              icon={iconNext}
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
