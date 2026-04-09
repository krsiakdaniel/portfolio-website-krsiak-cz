import Link from 'next/link'

import { getMenuLinkID } from '@/lib/utils/helpers/menu/getMenuLinkID'

import { MenuItemProps } from './MenuItem.types'

const MenuItem = ({ linkItem, isMobile, onClickLink }: MenuItemProps) => {
  const { id, href, icon, ariaLabel, text, dataTestId, isActive } = linkItem

  const testId = isMobile ? `mobile-${dataTestId}` : `desktop-${dataTestId}`
  const mobileDesktopCss = isMobile ? 'py-3' : 'py-2'
  const hoverAndFocusCss = 'hover:border-violet-50 hover:bg-violet-50'
  const sharedCss =
    'text-base block select-none rounded-lg px-4 lg:px-3 xl:px-4 bg-neutral-50 font-bold transition-all duration-200 ease-in-out'

  // Active state styling
  const activeCss = isActive
    ? 'bg-violet-100 text-violet-900'
    : 'text-neutral-600 hover:text-violet-800'

  return (
    <li role="none">
      <Link
        href={href}
        role="menuitem"
        className={`${mobileDesktopCss} ${hoverAndFocusCss} ${sharedCss} ${activeCss}`}
        data-testid={testId}
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
