import Link from 'next/link'

import { menuMobileLinks } from '@/lib/data/menu/mobileLinks'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'

const MenuMobile = () => {
  return (
    <ul className="mt-2 flex flex-col lg:hidden" id={ID.menu.mobile} data-testid={DATA_TEST_IDS.menu.mobile.component}>
      {menuMobileLinks.map((link) => (
        <li key={link.id}>
          <Link
            href={link.href}
            className="block border-b border-neutral-100 py-2 pl-3 pr-4 font-bold text-neutral-700 hover:bg-neutral-50 hover:text-violet-700"
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

export default MenuMobile
