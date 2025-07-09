import { FC } from 'react'

import MenuItem from '@/components/layout/header/menu/MenuItem'

import { pagesLinks } from '@/lib/data/layout/pagesLinks'

import { ARIA_LABELS } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'

import { DeviceTypeEnum } from '@/lib/utils/typeDefinitions/enums'
import { MenuProps } from '@/lib/utils/typeDefinitions/props/layout/header/menu'

/**
 * Menu component for both mobile and desktop navigation
 */
const Menu: FC<MenuProps> = ({ type, forwardedRef, onClickLink }): JSX.Element => {
  const isMobile = type === DeviceTypeEnum.Mobile

  // Set the appropriate test ID and element ID based on device type
  const menuDataTestId = isMobile
    ? DATA_TEST_IDS.menu.mobile.componentMenu
    : DATA_TEST_IDS.menu.desktop.componentMenu
  const menuId = isMobile ? ID.menu.mobile : ID.menu.desktop

  return (
    <nav aria-label={ARIA_LABELS.menu} data-testid={menuDataTestId} id={menuId}>
      <ul
        ref={forwardedRef}
        className={isMobile ? 'mb-6 mt-2 flex flex-col lg:hidden' : 'hidden gap-2 lg:flex'}
      >
        {(pagesLinks ?? []).map((link) => {
          return (
            <MenuItem key={link.id} linkItem={link} isMobile={isMobile} onClickLink={onClickLink} />
          )
        })}
      </ul>
    </nav>
  )
}

export default Menu
