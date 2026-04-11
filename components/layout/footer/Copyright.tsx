import Link from 'next/link'

import Paragraph from '@/components/shared/paragraph/Paragraph'

import { COPYRIGHT, MIDDLE_DOT } from '@/lib/utils/constants/specialCharacters'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { getCurrentYear } from '@/lib/utils/helpers/years/getCurrentYear'

import { FOOTER } from '@/localization'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

const Copyright = () => {
  return (
    <Paragraph
      size="text-base"
      marginTop="mt-4"
      customCss="flex flex-col sm:flex-row text-center gap-2"
    >
      <span data-testid={DATA_TEST_IDS.footer.copyright}>
        {COPYRIGHT}
        {'\u00A0'}
        {getCurrentYear()}
        {'\u00A0'}
        {FOOTER.nameDanielKrsiak}
      </span>

      <span className="hidden sm:inline">{MIDDLE_DOT}</span>

      <Link
        href={PAGES_URL.home}
        className="text-neutral-600 underline hover:text-neutral-800 hover:no-underline"
        data-testid={DATA_TEST_IDS.footer.linkFooterHome}
      >
        {FOOTER.linkHome}
      </Link>
    </Paragraph>
  )
}

export default Copyright
