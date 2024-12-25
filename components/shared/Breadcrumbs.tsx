import Link from 'next/link'

import BreadcrumbsItem from '@/components/shared/BreadcrumbsItem'

import { TEXT } from '@/localization/english'
import { ARIA_LABELS } from '@/utils/constants/ariaLabels'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
import { BreadCrumbsType } from '@/utils/interfaces/types'

type BreadCrumbsProps = BreadCrumbsType

const BreadCrumbs = ({ level1Url, level1Text, level2Url, level2Text }: BreadCrumbsProps) => {
  return (
    <nav
      className="mb-10 flex text-neutral-700"
      aria-label={ARIA_LABELS.breadcrumbs}
      data-testid={DATA_TEST_IDS.breadcrumbs}
    >
      <ol className="inline-flex flex-row flex-wrap items-start space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link
            href={PAGES_URL.home}
            className="inline-flex items-center text-sm font-medium text-neutral-700 hover:text-violet-600"
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

export default BreadCrumbs
