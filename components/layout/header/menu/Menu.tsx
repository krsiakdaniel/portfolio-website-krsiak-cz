'use client' // using usePathname hook

import { usePathname } from 'next/navigation'
import { FC } from 'react'

import MenuItem from '@/components/layout/header/menu/MenuItem'

import { pagesLinks } from '@/lib/data/layout/pagesLinks'
import { isMenuItemActive } from '@/lib/utils/helpers/menu/isMenuItemActive'

import { ARIA_LABELS } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'

import { DeviceTypeEnum } from '@/lib/utils/typeDefinitions/enums'
import { MenuProps } from '@/lib/utils/typeDefinitions/props/layout/header/menu'

/**
 * Menu component for both mobile and desktop navigation
 */
const Menu: FC<MenuProps> = ({ type, ref, onClickLink }): JSX.Element => {
  const isMobile = type === DeviceTypeEnum.Mobile
  const currentPathname = usePathname()

  // Set the appropriate test ID and element ID based on device type
  const menuDataTestId = isMobile
    ? DATA_TEST_IDS.menu.mobile.componentMenu
    : DATA_TEST_IDS.menu.desktop.componentMenu
  const menuId = isMobile ? ID.menu.mobile : ID.menu.desktop

  return (
    <nav aria-label={ARIA_LABELS.menu} data-testid={menuDataTestId} id={menuId}>
      <ul
        ref={ref}
        role="menubar"
        aria-orientation={isMobile ? 'vertical' : 'horizontal'}
        className={isMobile ? 'mt-2 mb-6 flex flex-col gap-2 lg:hidden' : 'hidden gap-2 lg:flex'}
      >
        {(pagesLinks ?? []).map((link) => {
          // Create a new link object with the active state
          const linkWithActiveState = {
            ...link,
            isActive: isMenuItemActive(currentPathname, link.href),
          }

          return (
            <MenuItem
              key={link.id}
              linkItem={linkWithActiveState}
              isMobile={isMobile}
              onClickLink={onClickLink}
            />
          )
        })}
      </ul>
    </nav>
  )
}

export default Menu
