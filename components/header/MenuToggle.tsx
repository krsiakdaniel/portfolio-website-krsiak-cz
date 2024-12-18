'use client' // using onClick

import { IconClose, IconHamburger } from '@/components/icons'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'

type MenuToggleProps = {
  isOpen: boolean
  handleMenuToggle: () => void
}

const MenuToggle = ({ isOpen, handleMenuToggle }: MenuToggleProps) => {
  return (
    <button
      onClick={handleMenuToggle}
      id={ID.menu.toggle}
      data-testid={DATA_TEST_IDS.menu.toggle.component}
      aria-label="Toggle Menu"
      className="lg:hidden"
    >
      {isOpen ? <IconClose /> : <IconHamburger />}
    </button>
  )
}

export default MenuToggle
