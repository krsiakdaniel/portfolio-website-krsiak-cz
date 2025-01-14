import Link from 'next/link'
import { FC } from 'react'

import { pagesLinks } from '@/lib/data/layout/pagesLinks'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ARIA_LABELS } from '@/lib/utils/constants/ariaLabels'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { getMenuLinkCSS } from '@/lib/utils/helpers/menu/getMenuLinkCSS'
import { getMenuLinkID } from '@/lib/utils/helpers/menu/getMenuLinkID'

type MenuProps = {
  isMobile: boolean
}

const Menu: FC<MenuProps> = ({ isMobile }): JSX.Element => {
  const menuDataTestID = isMobile ? DATA_TEST_IDS.menu.mobile.componentMenu : DATA_TEST_IDS.menu.desktop.componentMenu
  const menuID = isMobile ? ID.menu.mobile : ID.menu.desktop

  return (
    <nav aria-label={ARIA_LABELS.menu} data-testid={menuDataTestID} id={menuID}>
      <ul className={isMobile ? 'mb-6 mt-2 flex flex-col lg:hidden' : 'hidden gap-8 lg:flex'}>
        {pagesLinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className={`font-bold text-neutral-700 hover:text-violet-600 ${getMenuLinkCSS(isMobile)}`}
              data-testid={isMobile ? `mobile-${link.testId}` : `desktop-${link.testId}`}
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
