import Link from 'next/link'

import ScrollToTopButton from '@/components/layout/footer/ScrollToTopButton'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/dataTestIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

const FooterStatusAndScroll = (): JSX.Element => {
  return (
    <div className="mt-8 flex space-x-4">
      <div className="flex space-x-2">
        <Link
          href={PAGES_URL.statusPage}
          className="text-violet-600 underline hover:no-underline"
          data-testid={DATA_TEST_IDS.footer.statusPage}
        >
          Status page
        </Link>
      </div>
      <ScrollToTopButton />
    </div>
  )
}

export default FooterStatusAndScroll
