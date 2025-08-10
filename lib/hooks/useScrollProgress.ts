import { useCallback, useEffect, useState } from 'react'

import { SCROLL_PROGRESS } from '@/lib/utils/constants/scroll-progress-constants'

/**
 * Custom hook to track the scroll progress of the page.
 *
 * @returns The scroll progress as a percentage (0-100).
 */

export const useScrollProgress = (): number => {
  const [scrollProgress, setScrollProgress] = useState<number>(SCROLL_PROGRESS.MIN)

  const calculateScrollProgress = useCallback((): void => {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    const scrollHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight

    if (scrollHeight === SCROLL_PROGRESS.MIN) {
      setScrollProgress(SCROLL_PROGRESS.MIN)
      return
    }

    const progress = Math.min(
      SCROLL_PROGRESS.MAX,
      Math.max(SCROLL_PROGRESS.MIN, (scrollTop / scrollHeight) * SCROLL_PROGRESS.MAX),
    )
    setScrollProgress(progress)
  }, [])

  useEffect(() => {
    // Calculate initial scroll progress
    calculateScrollProgress()

    window.addEventListener('scroll', calculateScrollProgress, { passive: true })

    return () => {
      window.removeEventListener('scroll', calculateScrollProgress)
    }
  }, [calculateScrollProgress])

  return scrollProgress
}
