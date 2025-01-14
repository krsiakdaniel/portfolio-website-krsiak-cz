import Link from 'next/link'
import { FC } from 'react'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getCurrentYear } from '@/lib/utils/helpers/getCurrentYear'

const FooterCopyright: FC = (): JSX.Element => {
  return (
    <div className="mt-4 flex flex-col text-center text-neutral-600">
      <span data-testid={DATA_TEST_IDS.footer.copyright}>😼 😺 Copyright ©&nbsp;{getCurrentYear()}</span>
      <Link
        href={PAGES_URL.home}
        className="underline hover:no-underline"
        data-testid={DATA_TEST_IDS.footer.linkFooterHome}
      >
        krsiak.cz
      </Link>
    </div>
  )
}

export default FooterCopyright
