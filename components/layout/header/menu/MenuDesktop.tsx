import { FC } from 'react'

import Menu from '@/components/layout/header/menu/Menu'
import MenuToggle from '@/components/layout/header/menu/MenuToggle'

import { MenuDesktopProps } from '@/lib/utils/typeDefinitions/props/props'

const MenuDesktop: FC<MenuDesktopProps> = ({ isOpen, handleMenuToggle }): JSX.Element => {
  return (
    <>
      <Menu isMobile={false} />
      <MenuToggle isOpen={isOpen} handleMenuToggle={handleMenuToggle} />
    </>
  )
}

export default MenuDesktop
