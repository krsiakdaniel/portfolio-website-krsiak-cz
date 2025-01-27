import Link from 'next/link'
import { FC } from 'react'

import { getMenuLinkID } from '@/lib/utils/helpers/menu/getMenuLinkID'
import { MenuItemProps } from '@/lib/utils/typeDefinitions/props/layout/header/menu'

const MenuItem: FC<MenuItemProps> = ({ linkItem, isMobile }) => {
  const { id, href, icon, text, dataTestId } = linkItem

  const mobileDesktopCSS = isMobile ? 'border-b border-gray-100 py-3' : 'py-2'
  const hoverAndFocusCSS = 'hover:border-violet-100 hover:bg-violet-100'
  const sharedCss = 'text-md block select-none rounded-lg px-4 font-bold text-neutral-600 hover:text-violet-600'

  return (
    <li>
      <Link
        href={href}
        className={`${mobileDesktopCSS} ${hoverAndFocusCSS} ${sharedCss}`}
        data-testid={isMobile ? `mobile-${dataTestId}` : `desktop-${dataTestId}`}
        id={getMenuLinkID({ isMobile, linkID: id })}
      >
        <span className="select-none">{icon}</span>
        <span className="ml-2">{text}</span>
      </Link>
    </li>
  )
}

export default MenuItem
