import { FC } from 'react'

import Menu from '@/components/layout/header/menu/Menu'

import { DeviceTypeEnum } from '@/lib/utils/typeDefinitions/enums'

const MenuDesktop: FC = (): JSX.Element => {
  return <Menu type={DeviceTypeEnum.Desktop} />
}

export default MenuDesktop
