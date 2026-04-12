'use client' // using hooks
import { useRef, useState } from 'react'

import { useScrollProgress } from '@/lib/hooks/useScrollProgress'

import BottomDrawer from '@/components/layout/header/BottomDrawer'
import Logo from '@/components/layout/header/Logo'
import ScrollProgressBar from '@/components/layout/header/ScrollProgressBar'
import Menu from '@/components/layout/header/menu/Menu'
import MenuMobileToggle from '@/components/layout/header/menu/MenuMobileToggle'
import MenuSocialLinks from '@/components/layout/header/menu/MenuSocialLinks'
import PageContainer from '@/components/layout/page-container/PageContainer'

import { ARIA_LABELS } from '@/localization'

import { DeviceTypeEnum } from '@/lib/types/enums'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const scroll = useScrollProgress()

  const menuRef = useRef<HTMLUListElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const handleMenuMobileToggle = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header
        role="banner"
        aria-label={ARIA_LABELS.siteHeader}
        className="sticky top-0 z-50 border-b border-neutral-400 bg-white"
      >
        <PageContainer marginTop="mt-0">
          <div>
            <div className="flex items-center justify-between py-4">
              <Logo />

              <div className="flex">
                <Menu type={DeviceTypeEnum.Desktop} />
                <div className="flex lg:hidden">
                  <MenuSocialLinks type={DeviceTypeEnum.Mobile} />
                </div>

                <div className="hidden lg:flex">
                  <MenuSocialLinks type={DeviceTypeEnum.Desktop} />
                </div>
                <MenuMobileToggle
                  isMenuOpen={isMenuOpen}
                  handleMenuMobileToggle={handleMenuMobileToggle}
                  ref={toggleRef}
                />
              </div>
            </div>
          </div>
        </PageContainer>

        <ScrollProgressBar scroll={scroll} />
      </header>

      <BottomDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} menuRef={menuRef} />
    </>
  )
}

export default Header
