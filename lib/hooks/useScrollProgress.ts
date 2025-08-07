import { useCallback, useEffect, useState } from 'react'

/**
 * Custom hook to track the scroll progress of the page.
 *
 * @returns The scroll progress as a percentage (0-100).
 */
export const useScrollProgress = (): number => {
  const [scrollProgress, setScrollProgress] = useState<number>(0)

  const calculateScrollProgress = useCallback((): void => {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    const scrollHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight

    if (scrollHeight === 0) {
      setScrollProgress(0)
      return
    }

    const progress = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100))
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
