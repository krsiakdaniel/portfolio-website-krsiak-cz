import { menuDesktopLinks } from '@/data/menu/desktopLinks'
import { ID } from '@/utils/constants'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import Link from 'next/link'

const MenuDesktop = () => {
  return (
    <ul className="hidden gap-8 lg:flex" id={ID.menu.desktop} data-testid={DATA_TEST_IDS.menu.desktop.component}>
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
