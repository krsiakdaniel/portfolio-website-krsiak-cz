import { FC } from 'react'

import Menu from '@/components/layout/header/menu/Menu'

const MenuMobile: FC = (): JSX.Element => {
  return <Menu isMobile={true} />
}

export default MenuMobile
