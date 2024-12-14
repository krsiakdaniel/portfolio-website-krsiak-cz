import { menuMobileLinks } from '@/data/menu/mobileLinks'
import { ID } from '@/utils/constants'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import Link from 'next/link'

const MenuMobile = () => {
  return (
    <ul
      className="mb-5 mt-2 flex flex-col lg:hidden"
      id={ID.menu.mobile}
      data-testid={DATA_TEST_IDS.menu.mobile.component}
    >
      {menuMobileLinks.map((link) => (
        <li key={link.href}>
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
