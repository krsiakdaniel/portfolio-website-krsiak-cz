'use client' // Ensure the component is a Client Component if it has an onClick handler.

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { scrollToTop } from '@/lib/utils/helpers/scrollToTop'

const ScrollToTopButton = (): JSX.Element => {
  return (
    <>
      <div className="flex space-x-2">
        <div
          className="mt-4 flex cursor-pointer text-violet-600 underline hover:text-violet-600 hover:no-underline md:mt-0"
          data-testid={DATA_TEST_IDS.footer.scrollToTopButton}
        >
          <div onClick={scrollToTop}>Scroll to Top</div>
        </div>
        <span className="hidden md:inline">⬆️</span>
      </div>
    </>
  )
}

export default ScrollToTopButton
