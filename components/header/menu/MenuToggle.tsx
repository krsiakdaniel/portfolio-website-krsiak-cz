'use client' // using onClick

import { FC } from 'react'

import { IconClose } from '@/components/icons/IconClose'
import { IconHamburger } from '@/components/icons/IconHamburger'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ARIA_LABELS } from '@/lib/utils/constants/ariaLabels'
import { ID } from '@/lib/utils/constants/ids/elementIds'

type MenuToggleProps = {
  isOpen: boolean
  handleMenuToggle: () => void
}

const MenuToggle: FC<MenuToggleProps> = ({ isOpen, handleMenuToggle }): JSX.Element => {
  return (
    <button
      onClick={handleMenuToggle}
      id={ID.menu.toggle}
      data-testid={DATA_TEST_IDS.menu.toggle.component}
      aria-label={ARIA_LABELS.toggleMenu}
      className="lg:hidden"
    >
      {isOpen ? <IconClose /> : <IconHamburger />}
    </button>
  )
}

export default MenuToggle
