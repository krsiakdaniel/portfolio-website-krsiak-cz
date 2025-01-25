import { FC } from 'react'

import MenuItem from '@/components/layout/header/menu/MenuItem'

import { pagesLinks } from '@/lib/data/layout/pagesLinks'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ARIA_LABELS } from '@/lib/utils/constants/ariaLabels'
import { ID } from '@/lib/utils/constants/ids/elementIds'

import { DeviceTypeEnum } from '@/lib/utils/typeDefinitions/enums'
import { MenuProps } from '@/lib/utils/typeDefinitions/props/layout/header/menu'

const Menu: FC<MenuProps> = ({ type }): JSX.Element => {
  const isMobile = type === DeviceTypeEnum.Mobile

  const menuDataTestId = isMobile ? DATA_TEST_IDS.menu.mobile.componentMenu : DATA_TEST_IDS.menu.desktop.componentMenu
  const menuId = isMobile ? ID.menu.mobile : ID.menu.desktop

  return (
    <nav aria-label={ARIA_LABELS.menu} data-testid={menuDataTestId} id={menuId}>
      <ul className={isMobile ? 'mb-6 mt-2 flex flex-col lg:hidden' : 'hidden gap-2 lg:flex'}>
        {(pagesLinks ?? []).map((link) => (
          <MenuItem key={link.id} linkItem={link} isMobile={isMobile} />
        ))}
      </ul>
    </nav>
  )
}

export default Menu
