import Link from 'next/link'
import { FC } from 'react'

import BreadcrumbsItem from '@/components/shared/BreadcrumbsItem'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ARIA_LABELS } from '@/lib/utils/constants/ariaLabels'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { BreadCrumbsProps } from '@/lib/utils/typeDefinitions/props/props'

const BreadCrumbs: FC<BreadCrumbsProps> = ({ level1Url, level1Text, level2Url, level2Text }): JSX.Element => {
  {
    return (
      <nav className="flex" aria-label={ARIA_LABELS.breadcrumbs} data-testid={DATA_TEST_IDS.breadcrumbs}>
        <ol className="inline-flex flex-row flex-wrap items-start space-x-1 md:space-x-2">
          <li className="inline-flex items-center">
            <Link
              href={PAGES_URL.home}
              className="inline-flex items-center text-sm font-medium text-neutral-600 hover:text-violet-600"
            >
              {TEXT.home}
            </Link>
          </li>
          {level1Url && level1Text && <BreadcrumbsItem url={level1Url} text={level1Text} />}
          {level2Url && level2Text && <BreadcrumbsItem url={level2Url} text={level2Text} />}
        </ol>
      </nav>
    )
  }
}

export default BreadCrumbs
