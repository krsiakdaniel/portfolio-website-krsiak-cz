import Link from 'next/link'
import { FC } from 'react'

import { pagesLinks } from '@/lib/data/pages/pagesLinks'

import { ID } from '@/lib/utils/constants/ids/elementIds'

type MenuProps = {
  isMobile: boolean
}

const getMenuLinkCss = (isMobile: boolean): string => {
  return isMobile
    ? 'block border-b border-neutral-100 py-2 pl-3 pr-4 hover:bg-neutral-50'
    : 'text-body-md cursor-pointer'
}

const Menu: FC<MenuProps> = ({ isMobile }): JSX.Element => {
  return (
    <ul
      className={isMobile ? 'mb-6 mt-2 flex flex-col lg:hidden' : 'hidden gap-8 lg:flex'}
      id={isMobile ? ID.menu.mobile : ID.menu.desktop}
      data-testid={isMobile ? ID.menu.mobile : ID.menu.desktop}
    >
      {pagesLinks.map((link) => (
        <li key={link.id}>
          <Link
            href={link.href}
            className={`font-bold text-neutral-700 hover:text-violet-600 ${getMenuLinkCss(isMobile)}`}
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
