'use client' // using hooks

import { useState } from 'react'

import { useScrollProgress } from '@/lib/hooks/useScrollProgress'

import Logo from '@/components/layout/header/Logo'
import Menu from '@/components/layout/header/menu/Menu'
import MenuToggle from '@/components/layout/header/menu/MenuToggle'
import ScrollProgressBar from '@/components/layout/header/ScrollProgressBar'

const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const scroll = useScrollProgress()

  const handleMenuToggle = (): void => {
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
