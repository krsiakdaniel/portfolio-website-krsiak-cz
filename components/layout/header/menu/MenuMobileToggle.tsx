'use client' // using onClick
import { Menu, X } from 'lucide-react'

import { ID } from '@/lib/utils/constants/ids/elementIds'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { ARIA_LABELS } from '@/localization'

import { type MenuMobileToggleProps } from './MenuMobileToggle.types'

const MenuMobileToggle = ({ isMenuOpen, handleMenuMobileToggle, ref }: MenuMobileToggleProps) => {
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
        {isMenuOpen ? (
          <X aria-hidden="true" className="h-6 w-6 text-violet-600 hover:text-violet-800" />
        ) : (
          <Menu aria-hidden="true" className="h-6 w-6 text-violet-600 hover:text-violet-800" />
        )}
      </div>
    </button>
  )
}

export default MenuMobileToggle
