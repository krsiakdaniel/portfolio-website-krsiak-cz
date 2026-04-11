'use client' // Ensure the component is a Client Component if it has an onClick handler.
import { useCallback, useEffect, useState } from 'react'

import { ArrowUp } from 'lucide-react'

import { scrollToTop } from '@/lib/utils/helpers/scrollToTop'

import { ARIA_LABELS, FOOTER } from '@/localization'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { SCROLL_TO_TOP } from './ScrollToTopButton.constants'

const getButtonCss = (isFadingOut: boolean) =>
  `${isFadingOut ? 'animate-fade-out-scroll' : 'animate-fade-in-scroll'}
  fixed right-8 bottom-8 z-50 
  flex h-12 w-12 items-center justify-center 
  rounded-full bg-violet-600 text-white
  transition-all duration-300 ease-in-out
  hover:-translate-y-1 hover:scale-110 hover:bg-violet-700
  focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none`

const ScrollToTopButton = () => {
  const [shouldRender, setShouldRender] = useState<boolean>(false)
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false)

  const handleScrollToTop = useCallback(() => {
    scrollToTop()
  }, [])

  const toggleVisibility = useCallback(() => {
    const aboveThreshold = window.pageYOffset > SCROLL_TO_TOP.THRESHOLD

    if (aboveThreshold) {
      setIsFadingOut(false)
      setShouldRender(true)
    } else if (shouldRender) {
      setIsFadingOut(true)
      setTimeout(() => {
        setShouldRender(false)
        setIsFadingOut(false)
      }, SCROLL_TO_TOP.FADE_DURATION)
    }
  }, [shouldRender])

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true })

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [toggleVisibility])

  if (!shouldRender) {
    return null
  }

  return (
    <button
      onClick={handleScrollToTop}
      className={getButtonCss(isFadingOut)}
      data-testid={DATA_TEST_IDS.footer.scrollToTopButton}
      aria-label={ARIA_LABELS.scrollToTopPage}
      title={FOOTER.scrollToTop}
    >
      <ArrowUp aria-hidden="true" className="h-5 w-5" />
    </button>
  )
}

export default ScrollToTopButton
