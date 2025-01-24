import { FC } from 'react'

import Menu from '@/components/layout/header/menu/Menu'
import MenuSocialLinks from '@/components/layout/header/menu/MenuSocialLinks'
import MenuToggle from '@/components/layout/header/menu/MenuToggle'

import { DeviceTypeEnum } from '@/lib/utils/typeDefinitions/enums'
import { MenuDesktopProps } from '@/lib/utils/typeDefinitions/props/layout/header/menu'

const MenuDesktop: FC<MenuDesktopProps> = ({ isOpen, handleMenuToggle }): JSX.Element => {
  return (
    <div className="flex">
      <Menu type={DeviceTypeEnum.Desktop} />
      <MenuSocialLinks />
      <MenuToggle isOpen={isOpen} handleMenuToggle={handleMenuToggle} />
    </div>
  )
}

export default MenuDesktop
