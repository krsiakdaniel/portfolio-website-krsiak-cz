import { useEffect, useState } from 'react'

/**
 * Custom hook to track the scroll progress of the page.
 *
 * @returns {number} - The scroll progress as a percentage.
 *
 * @example
 * ```tsx
 *  <div style={{ width: `${scroll}%` }} ></div>
 * ```
 */

export const useScrollProgress = (): number => {
  const [scroll, setScroll] = useState<number>(0)

  const pageScrollProgress = (): void => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrolled = (winScroll / height) * 100

    if (document.documentElement.scrollHeight === document.documentElement.clientHeight) {
      scrolled = 0
    }

    setScroll(scrolled)
  }

  useEffect(() => {
    window.addEventListener('scroll', pageScrollProgress)
    return () => {
      window.removeEventListener('scroll', pageScrollProgress)
      setScroll(0) // reset scroll progress
    }
  }, [])

  return scroll
}
