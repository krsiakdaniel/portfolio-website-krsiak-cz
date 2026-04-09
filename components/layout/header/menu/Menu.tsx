'use client' // using usePathname hook
import { usePathname } from 'next/navigation'

import { MenuProps } from '@/components/layout/header/menu/Menu.types'
import MenuItem from '@/components/layout/header/menu/MenuItem'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { isMenuItemActive } from '@/lib/utils/helpers/menu/isMenuItemActive'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { pagesLinks } from '@/data/layout/pagesLinks'
import { DeviceTypeEnum } from '@/lib/types/enums'
import { ARIA_LABELS } from '@/localization'

/**
 * Menu component for both mobile and desktop navigation
 */
const Menu = ({ type, ref, onClickLink }: MenuProps) => {
  const isMobile = type === DeviceTypeEnum.Mobile
  const currentPathname = usePathname()

  // Set the appropriate test ID and element ID based on device type
  const menuDataTestId = isMobile
    ? DATA_TEST_IDS.menu.mobile.componentMenu
    : DATA_TEST_IDS.menu.desktop.componentMenu
  const menuId = isMobile ? ID.menu.mobile : ID.menu.desktop
  const menuOrientation: 'vertical' | 'horizontal' = isMobile ? 'vertical' : 'horizontal'
  const mobileCss = isMobile ? 'mt-2 mb-6 flex flex-col gap-2 lg:hidden' : 'hidden gap-2 lg:flex'

  return (
    <nav aria-label={ARIA_LABELS.menu} data-testid={menuDataTestId} id={menuId}>
      <ul ref={ref} role="menubar" aria-orientation={menuOrientation} className={mobileCss}>
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
