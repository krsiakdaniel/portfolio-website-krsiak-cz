'use client' // using onClick

import { FC } from 'react'

import IconClose from '@/components/icons/IconClose'
import IconHamburger from '@/components/icons/IconHamburger'

import { ARIA_LABELS } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'

import { MenuMobileToggleProps } from '@/lib/utils/typeDefinitions/props/layout/header/menu'

const MenuMobileToggle: FC<MenuMobileToggleProps> = ({
  isMenuOpen,
  handleMenuMobileToggle,
  ref,
}): JSX.Element => {
  return (
    <button
      ref={ref}
      onClick={handleMenuMobileToggle}
      id={ID.menu.toggle}
      data-testid={DATA_TEST_IDS.menu.toggle.component}
      aria-label={isMenuOpen ? ARIA_LABELS.menuExpanded : ARIA_LABELS.menuCollapsed}
      aria-expanded={isMenuOpen}
      aria-controls={ID.menu.mobile}
      aria-haspopup="menu"
      className="ml-6 rounded-lg bg-violet-50 p-2 transition-all duration-200 ease-in-out hover:bg-violet-100 focus:bg-violet-100 focus:ring-4 focus:ring-violet-400 focus:outline-hidden lg:hidden"
    >
      <div className="transition-all duration-200 ease-in-out">
        {isMenuOpen ? <IconClose /> : <IconHamburger />}
      </div>
    </button>
  )
}

export default MenuMobileToggle
