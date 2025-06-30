import { FC } from 'react'

import BreadcrumbsItem from '@/components/shared/BreadcrumbsItem'

import { ICON_EMOJI, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { ARIA_LABELS } from '@/localization/english'

import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { BreadCrumbsProps } from '@/lib/utils/typeDefinitions/props/shared/breadcrumbs'

const BreadCrumbs: FC<BreadCrumbsProps> = ({
  level1Url,
  level1Icon = '',
  level1AriaLabel = '',
  level1Text,
  level2Url,
  level2Icon = '',
  level2AriaLabel = '',
  level2Text,
}): JSX.Element => {
  return (
    <nav aria-label={ARIA_LABELS.breadcrumbs} data-testid={DATA_TEST_IDS.breadcrumbs}>
      <ol className="inline-flex flex-row flex-wrap items-start">
        <BreadcrumbsItem
          href={PAGES_URL.home}
          icon={ICON_EMOJI.house}
          ariaLabel={ARIA_LABELS.emoji.house}
          text={TEXT.home}
          showSeparatorIcon={false}
        />
        {level1Url && level1Text && (
          <BreadcrumbsItem
            href={level1Url}
            icon={level1Icon}
            ariaLabel={level1AriaLabel}
            text={level1Text}
          />
        )}
        {level2Url && level2Text && (
          <BreadcrumbsItem
            href={level2Url}
            icon={level2Icon}
            ariaLabel={level2AriaLabel}
            text={level2Text}
          />
        )}
      </ol>
    </nav>
  )
}

export default BreadCrumbs
