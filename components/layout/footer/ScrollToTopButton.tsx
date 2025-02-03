'use client' // Ensure the component is a Client Component if it has an onClick handler.

import { FC } from 'react'

import { FOOTER } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { scrollToTop } from '@/lib/utils/helpers/scrollToTop'

const ScrollToTopButton: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex space-x-2">
        <div
          className="flex cursor-pointer text-violet-600 underline hover:text-violet-800 hover:no-underline"
          data-testid={DATA_TEST_IDS.footer.scrollToTopButton}
        >
          <div onClick={scrollToTop}>{FOOTER.scrollToTop}</div>
        </div>
      </div>
    </>
  )
}

export default ScrollToTopButton
