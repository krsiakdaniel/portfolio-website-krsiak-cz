import { FC } from 'react'

import Menu from '@/components/layout/header/menu/Menu'

import { DeviceTypeEnum } from '@/lib/utils/typeDefinitions/enums'

const MenuMobile: FC = (): JSX.Element => {
  return <Menu type={DeviceTypeEnum.Mobile} />
}

export default MenuMobile
