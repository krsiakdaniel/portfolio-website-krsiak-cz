'use client'

import { IconClose, IconHamburger } from '@/components/icons'
import { ID } from '@/utils/constants'

type MenuToggleProps = {
  isOpen: boolean
  handleMenuToggle: () => void
}

const MenuToggle = ({ isOpen, handleMenuToggle }: MenuToggleProps) => {
  return (
    <button
      onClick={handleMenuToggle}
      id={ID.menu.toggle}
      data-testid={ID.menu.toggle}
      aria-label="Toggle Menu"
      className="lg:hidden"
    >
      {isOpen ? <IconClose /> : <IconHamburger />}
    </button>
  )
}

export default MenuToggle
