'use client'

import Logo from '@/components/header/Logo'
import MenuDesktop from '@/components/header/MenuDesktop'
import MenuMobile from '@/components/header/MenuMobile'
import MenuToggle from '@/components/header/MenuToggle'
import { useEffect, useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scroll, setScroll] = useState(0)

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  const pageScrollProgress = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrolled = (winScroll / height) * 100

    // Check if the document height is the same as the viewport height
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

  return (
    <header className="sticky top-0 z-20 border-b border-neutral-400 bg-white px-5">
      <div className="container mx-auto max-w-screen-xl px-5">
        <div className="flex items-center justify-between py-3">
          <Logo />
          <MenuDesktop />
          <MenuToggle isOpen={isOpen} handleMenuToggle={handleMenuToggle} />
        </div>
        {isOpen && <MenuMobile />}
      </div>

      <div className="absolute bottom-0 left-0 h-1 bg-violet-600" style={{ width: `${scroll}%` }}></div>
    </header>
  )
}

export default Header
