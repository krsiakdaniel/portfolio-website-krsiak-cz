'use client' // using hooks

import { FC, useState } from 'react'

import { useScrollProgress } from '@/lib/hooks/useScrollProgress'

import Logo from '@/components/layout/header/Logo'
import MenuDesktop from '@/components/layout/header/menu/MenuDesktop'
import MenuMobile from '@/components/layout/header/menu/MenuMobile'
import MenuSocialLinks from '@/components/layout/header/menu/MenuSocialLinks'
import ScrollProgressBar from '@/components/layout/header/ScrollProgressBar'
import PageContainer from '@/components/layout/PageContainer'

const Header: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const scroll = useScrollProgress()

  const handleMenuToggle = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="sticky top-0 z-20 border-b border-neutral-400 bg-white">
      <PageContainer marginTop="mt-0">
        <div>
          <div className="flex items-center justify-between py-2">
            <Logo />

            <div className="flex space-x-8">
              <MenuDesktop isOpen={isOpen} handleMenuToggle={handleMenuToggle} />
              <MenuSocialLinks />
            </div>
          </div>
        </div>

        {isOpen && <MenuMobile />}
      </PageContainer>

      <ScrollProgressBar scroll={scroll} />
    </header>
  )
}

export default Header
