import { DeviceTypeEnum } from '@/lib/utils/typeDefinitions/enums'
import { HandleMenuToggleType } from '@/lib/utils/typeDefinitions/types'

// Menu Props
export type MenuProps = {
  type: DeviceTypeEnum
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
