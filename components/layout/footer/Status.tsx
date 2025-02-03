import Link from 'next/link'
import { FC } from 'react'

import { STATUS } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

const Status: FC = (): JSX.Element => {
  return (
    <div className="mt-8">
      <Link
        href={PAGES_URL.status}
        className="text-violet-600 underline hover:text-violet-800 hover:no-underline"
        data-testid={DATA_TEST_IDS.footer.status}
      >
        {STATUS.text}
      </Link>
    </div>
  )
}

export default Status
