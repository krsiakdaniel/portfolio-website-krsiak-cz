import Link from 'next/link'

import { menuDesktopLinks } from '@/lib/data/menu/desktopLinks'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'

const MenuDesktop = (): JSX.Element => {
  return (
    <ul className="hidden gap-8 lg:flex" id={ID.menu.desktop} data-testid={DATA_TEST_IDS.menu.desktop.componentMenu}>
      {menuDesktopLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-body-md cursor-pointer font-bold text-neutral-700 hover:text-violet-600"
            data-testid={link.testId}
            id={link.id}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MenuDesktop
