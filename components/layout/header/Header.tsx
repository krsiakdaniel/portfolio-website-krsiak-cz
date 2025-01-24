'use client' // using hooks

import { FC, useState } from 'react'

import { useScrollProgress } from '@/lib/hooks/useScrollProgress'

import Logo from '@/components/layout/header/Logo'
import Menu from '@/components/layout/header/menu/Menu'
import MenuMobileToggle from '@/components/layout/header/menu/MenuMobileToggle'
import MenuSocialLinks from '@/components/layout/header/menu/MenuSocialLinks'
import ScrollProgressBar from '@/components/layout/header/ScrollProgressBar'
import PageContainer from '@/components/layout/PageContainer'

import { DeviceTypeEnum } from '@/lib/utils/typeDefinitions/enums'

const Header: FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const scroll = useScrollProgress()

  const handleMenuMobileToggle = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-20 border-b border-neutral-400 bg-white">
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
              <MenuMobileToggle isMenuOpen={isMenuOpen} handleMenuMobileToggle={handleMenuMobileToggle} />
            </div>
          </div>
        </div>

        {isMenuOpen && <Menu type={DeviceTypeEnum.Mobile} />}
      </PageContainer>

      <ScrollProgressBar scroll={scroll} />
    </header>
  )
}

export default Header
