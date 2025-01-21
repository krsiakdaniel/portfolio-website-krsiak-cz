'use client' // using onClick

import { FC } from 'react'

import IconClose from '@/components/icons/IconClose'
import IconHamburger from '@/components/icons/IconHamburger'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ARIA_LABELS } from '@/lib/utils/constants/ariaLabels'
import { ID } from '@/lib/utils/constants/ids/elementIds'

import { MenuToggleProps } from '@/lib/utils/typeDefinitions/props/layout/header/menu'

const MenuToggle: FC<MenuToggleProps> = ({ isOpen, handleMenuToggle }): JSX.Element => {
  return (
    <button
      onClick={handleMenuToggle}
      id={ID.menu.toggle}
      data-testid={DATA_TEST_IDS.menu.toggle.component}
      aria-label={ARIA_LABELS.toggleMenu}
      className="rounded-lg bg-violet-50 p-2 hover:bg-violet-100 focus:bg-violet-100 focus:outline-none focus:ring-4 focus:ring-violet-400 lg:hidden"
    >
      {isOpen ? <IconClose /> : <IconHamburger />}
    </button>
  )
}

export default MenuToggle
