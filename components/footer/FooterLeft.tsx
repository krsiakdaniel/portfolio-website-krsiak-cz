import Link from 'next/link'

import { DATA_TEST_IDS } from '@/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getCurrentYear } from '@/lib/utils/helpers/getCurrentYear'

export const FooterLeft = () => {
  return (
    <div>
      <span>😼 😺</span>
      <span className="ml-2" data-testid={DATA_TEST_IDS.footer.copyright}>
        Copyright ©&nbsp;{getCurrentYear()}
      </span>
      <span className="mx-2 hidden md:inline-flex">|</span>
      <span className="mt-4 block md:mt-0 md:inline">
        <Link
          href={PAGES_URL.home}
          className="text-violet-600 underline hover:no-underline"
          data-testid={DATA_TEST_IDS.footer.link}
        >
          krsiak.cz
        </Link>
      </span>
    </div>
  )
}

export default FooterLeft
