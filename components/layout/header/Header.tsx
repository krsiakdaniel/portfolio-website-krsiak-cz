'use client' // using hooks

import { FC, useEffect, useMemo, useRef, useState } from 'react'

import { useClickOutside } from '@/lib/hooks/useClickOutside'
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

  const menuRef = useRef<HTMLUListElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const handleMenuMobileToggle = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Memoize the refs array to avoid creating a new array on every render
  const clickOutsideRefs = useMemo(() => {
    return isMenuOpen
      ? [menuRef as React.RefObject<HTMLElement>, toggleRef as React.RefObject<HTMLElement>]
      : []
  }, [isMenuOpen]) // Only re-create array when isMenuOpen changes

  // Only add click outside listener when menu is open
  useClickOutside(clickOutsideRefs, () => setIsMenuOpen(false))

  // Keyboard event handling for dialog accessibility
  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-400 bg-white">
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

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} `}
        >
          <Menu
            type={DeviceTypeEnum.Mobile}
            ref={menuRef}
            onClickLink={() => setIsMenuOpen(false)}
          />
        </div>
      </PageContainer>

      <ScrollProgressBar scroll={scroll} />
    </header>
  )
}

export default Header
