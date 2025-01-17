import { HandleMenuToggleType } from '@/lib/utils/typeDefinitions/types'

export type MenuProps = {
  isMobile: boolean
}

export type MenuDesktopProps = {
  isOpen: boolean
  handleMenuToggle: HandleMenuToggleType
}

export type MenuToggleProps = {
  isOpen: boolean
  handleMenuToggle: HandleMenuToggleType
}
