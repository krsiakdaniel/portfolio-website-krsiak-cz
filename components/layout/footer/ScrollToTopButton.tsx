'use client' // Ensure the component is a Client Component if it has an onClick handler.

import { FC, useCallback, useEffect, useState } from 'react'

import { FOOTER } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { scrollToTop } from '@/lib/utils/helpers/scrollToTop'

const SCROLL_THRESHOLD = 300 // Show button after scrolling 300px

const BUTTON_STYLES = `animate-fade-in-scroll 
  fixed right-8 bottom-8 z-50 
  flex h-12 w-12 items-center justify-center 
  rounded-full bg-violet-600 text-white shadow-lg
  transition-all duration-300 ease-in-out
  hover:-translate-y-1 hover:scale-110 hover:bg-violet-700 hover:shadow-xl
  focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none`

const ScrollToTopButton: FC = (): JSX.Element | null => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const handleScrollToTop = useCallback(() => {
    scrollToTop()
  }, [])

  const toggleVisibility = useCallback(() => {
    setIsVisible(window.pageYOffset > SCROLL_THRESHOLD)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true })

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [toggleVisibility])

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={handleScrollToTop}
      className={BUTTON_STYLES}
      data-testid={DATA_TEST_IDS.footer.scrollToTopButton}
      aria-label="Scroll to top of page"
      title={FOOTER.scrollToTop}
    >
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  )
}

export default ScrollToTopButton
