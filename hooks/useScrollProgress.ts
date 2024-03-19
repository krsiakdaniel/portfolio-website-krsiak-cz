import { useEffect, useState } from 'react'

export const useScrollProgress = () => {
  const [scroll, setScroll] = useState(0)

  const pageScrollProgress = () => {
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
