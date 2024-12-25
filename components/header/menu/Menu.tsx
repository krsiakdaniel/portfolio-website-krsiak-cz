import Link from 'next/link'

import { websiteLinks } from '@/data/websiteLinks'

import { ID } from '@/utils/constants/ids/elementIds'

type MenuProps = {
  isMobile: boolean
}

const cssMobile =
  'block border-b border-neutral-100 py-2 pl-3 pr-4 font-bold text-neutral-700 hover:bg-neutral-50 hover:text-violet-700'

const cssDesktop = 'text-body-md cursor-pointer font-bold text-neutral-700 hover:text-violet-600'

const Menu = ({ isMobile }: MenuProps) => {
  return (
    <ul
      className={isMobile ? 'mb-5 mt-2 flex flex-col lg:hidden' : 'hidden gap-8 lg:flex'}
      id={isMobile ? ID.menu.mobile : ID.menu.desktop}
      data-testid={isMobile ? ID.menu.mobile : ID.menu.desktop}
    >
      {websiteLinks.map((link) => (
        <li key={link.id}>
          <Link
            href={link.href}
            className={isMobile ? cssMobile : cssDesktop}
            data-testid={isMobile ? `mobile-${link.testId}` : `desktop-${link.testId}`}
            id={link.id}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Menu
