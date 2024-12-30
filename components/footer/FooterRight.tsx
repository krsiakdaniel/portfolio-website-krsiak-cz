import Link from 'next/link'

import ScrollToTopButton from '@/components/footer/ScrollToTopButton'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

const FooterRight = (): JSX.Element => {
  return (
    <div className="flex space-x-4">
      <div className="mt-4 flex space-x-2 md:mt-0">
        <Link
          href={PAGES_URL.statusPage}
          className="text-violet-600 underline hover:no-underline"
          data-testid={DATA_TEST_IDS.footer.statusPage}
        >
          Status page
        </Link>
        <span className="hidden md:inline">🟢</span>
      </div>
      <ScrollToTopButton />
    </div>
  )
}

export default FooterRight
