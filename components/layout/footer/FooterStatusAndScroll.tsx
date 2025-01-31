import Link from 'next/link'
import { FC } from 'react'

import ScrollToTopButton from '@/components/layout/footer/ScrollToTopButton'

import { ICON_EMOJI, STATUS } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

const FooterStatusAndScroll: FC = (): JSX.Element => {
  return (
    <div className="mt-8 flex flex-col space-y-2">
      <div className="flex space-x-1">
        <span>{ICON_EMOJI.verticalTrafficLight}</span>
        <Link
          href={PAGES_URL.status}
          className="text-violet-600 underline hover:text-violet-800 hover:no-underline"
          data-testid={DATA_TEST_IDS.footer.status}
        >
          {STATUS.text}
        </Link>
      </div>

      <ScrollToTopButton />
    </div>
  )
}

export default FooterStatusAndScroll
