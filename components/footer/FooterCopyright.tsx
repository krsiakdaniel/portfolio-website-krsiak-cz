import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getCurrentYear } from '@/lib/utils/helpers/getCurrentYear'
import Link from 'next/link'

export const FooterCopyright = (): JSX.Element => {
  return (
    <div className="mt-8">
      <span className="ml-2" data-testid={DATA_TEST_IDS.footer.copyright}>
        😼 😺 Copyright ©&nbsp;{getCurrentYear()}
        {' | '}
        <Link
          href={PAGES_URL.home}
          className="underline hover:no-underline"
          data-testid={DATA_TEST_IDS.footer.linkFooterHome}
        >
          krsiak.cz
        </Link>
      </span>
    </div>
  )
}

export default FooterCopyright
