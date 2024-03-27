'use client' // using hooks

import Logo from '@/components/header/Logo'
import MenuDesktop from '@/components/header/MenuDesktop'
import MenuMobile from '@/components/header/MenuMobile'
import MenuToggle from '@/components/header/MenuToggle'
import ScrollProgressBar from '@/components/header/ScrollProgressBar'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const scroll = useScrollProgress()

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

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

      <ScrollProgressBar scroll={scroll} />
    </header>
  )
}

export default Header
