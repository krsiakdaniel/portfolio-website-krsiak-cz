import Link from 'next/link'

import { getMenuLinkID } from '@/lib/utils/helpers/menu/getMenuLinkID'
import { MenuItemProps } from '@/lib/utils/typeDefinitions/props/layout/header/menu'

const MenuItem = ({ linkItem, isMobile, onClickLink }: MenuItemProps) => {
  const { id, href, icon, ariaLabel, text, dataTestId, isActive } = linkItem

  const mobileDesktopCSS = isMobile ? 'py-3' : 'py-2'
  const hoverAndFocusCSS = 'hover:border-violet-50 hover:bg-violet-50'
  const sharedCss =
    'text-md block select-none rounded-lg px-4 lg:px-3 xl:px-4 bg-neutral-50 font-bold transition-all duration-200 ease-in-out'

  // Active state styling
  const activeCSS = isActive
    ? 'bg-violet-100 text-violet-900'
    : 'text-neutral-600 hover:text-violet-800'

  return (
    <li role="none">
      <Link
        href={href}
        role="menuitem"
        className={`${mobileDesktopCSS} ${hoverAndFocusCSS} ${sharedCss} ${activeCSS}`}
        data-testid={isMobile ? `mobile-${dataTestId}` : `desktop-${dataTestId}`}
        id={getMenuLinkID({ isMobile, linkID: id })}
        onClick={isMobile ? onClickLink : undefined}
        aria-current={isActive ? 'page' : undefined}
      >
        <span role="img" aria-label={ariaLabel} className="select-none">
          {icon}
        </span>
        <span className="ml-2">{text}</span>
      </Link>
    </li>
  )
}

export default MenuItem
