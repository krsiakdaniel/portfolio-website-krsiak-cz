import Link from 'next/link'
import { FC } from 'react'

import { pagesLinks } from '@/lib/data/layout/pagesLinks'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ARIA_LABELS } from '@/lib/utils/constants/ariaLabels'
import { ID } from '@/lib/utils/constants/ids/elementIds'

import { getMenuLinkID } from '@/lib/utils/helpers/menu/getMenuLinkID'

import { DeviceTypeEnum } from '@/lib/utils/typeDefinitions/enums'
import { MenuProps } from '@/lib/utils/typeDefinitions/props/layout/header/menu'

const getMenuLinkCSS = (isMobile: boolean): string => {
  return isMobile
    ? 'block border-b border-gray-100 hover:border-violet-100 py-3 pl-3 pr-4 hover:bg-violet-100 rounded-lg'
    : 'text-md cursor-pointer'
}

const Menu: FC<MenuProps> = ({ type }): JSX.Element => {
  const isMobile = type === DeviceTypeEnum.Mobile
  const menuDataTestId = isMobile ? DATA_TEST_IDS.menu.mobile.componentMenu : DATA_TEST_IDS.menu.desktop.componentMenu
  const menuId = isMobile ? ID.menu.mobile : ID.menu.desktop

  return (
    <nav aria-label={ARIA_LABELS.menu} data-testid={menuDataTestId} id={menuId}>
      <ul className={isMobile ? 'mb-6 mt-2 flex flex-col lg:hidden' : 'hidden gap-8 lg:flex'}>
        {pagesLinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className={`font-bold text-neutral-600 hover:text-violet-600 ${getMenuLinkCSS(isMobile)}`}
              data-testid={isMobile ? `mobile-${link.dataTestId}` : `desktop-${link.dataTestId}`}
              id={getMenuLinkID({
                isMobile: isMobile,
                linkID: link.id,
              })}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
