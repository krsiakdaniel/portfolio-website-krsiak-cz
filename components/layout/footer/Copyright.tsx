import Link from 'next/link'

import Paragraph from '@/components/shared/Paragraph'

import { ARIA_LABELS, FOOTER, ICON_EMOJI } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { COPYRIGHT } from '@/lib/utils/constants/specialCharacters'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { getCurrentYear } from '@/lib/utils/helpers/years/getCurrentYear'

const Copyright = () => {
  return (
    <Paragraph size="text-md" marginTop="mt-4" customCss="flex flex-row text-center gap-2">
      <span data-testid={DATA_TEST_IDS.footer.copyright}>
        {COPYRIGHT}
        {'\u00A0'}
        {getCurrentYear()}
      </span>

      <span role="img" aria-label={ARIA_LABELS.emoji.cats.nufka} className="select-none">
        {ICON_EMOJI.cat.nufka}
      </span>
      <span role="img" aria-label={ARIA_LABELS.emoji.cats.ruzenka} className="select-none">
        {ICON_EMOJI.cat.ruzenka}
      </span>

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
