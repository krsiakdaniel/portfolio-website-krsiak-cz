'use client' // using hooks

import Logo from '@/components/header/Logo'
import Menu from '@/components/header/menu/Menu'
import MenuToggle from '@/components/header/menu/MenuToggle'
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
          {/* desktop menu */}
          <Menu isMobile={false} />
          <MenuToggle isOpen={isOpen} handleMenuToggle={handleMenuToggle} />
        </div>
        {isOpen && <Menu isMobile={true} />}
      </div>

      <ScrollProgressBar scroll={scroll} />
    </header>
  )
}

export default Header
