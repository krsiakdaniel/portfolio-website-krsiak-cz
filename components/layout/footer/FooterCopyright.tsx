import Link from 'next/link'
import { FC } from 'react'

import Paragraph from '@/components/shared/Paragraph'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getCurrentYear } from '@/lib/utils/helpers/years/getCurrentYear'

const FooterCopyright: FC = (): JSX.Element => {
  return (
    <Paragraph size="text-md" customCss="mt-4 flex flex-col text-center">
      <span data-testid={DATA_TEST_IDS.footer.copyright}>😼 😺 Copyright ©&nbsp;{getCurrentYear()}</span>
      <Link
        href={PAGES_URL.home}
        className="text-neutral-600 underline hover:text-neutral-800 hover:no-underline"
        data-testid={DATA_TEST_IDS.footer.linkFooterHome}
      >
        krsiak.cz
      </Link>
    </Paragraph>
  )
}

export default FooterCopyright
