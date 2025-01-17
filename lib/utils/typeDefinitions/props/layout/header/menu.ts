import { HandleMenuToggleType } from '@/lib/utils/typeDefinitions/types'

// Menu Props
export type MenuProps = {
  isMobile: boolean
}

// Menu Desktop Props
export type MenuDesktopProps = {
  handleMenuToggle: HandleMenuToggleType
  isOpen: boolean
}

// Menu Toggle Props
export type MenuToggleProps = {
  handleMenuToggle: HandleMenuToggleType
  isOpen: boolean
}
