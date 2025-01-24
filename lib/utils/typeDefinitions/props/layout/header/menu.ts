import { DeviceTypeEnum } from '@/lib/utils/typeDefinitions/enums'
import { HandleMenuToggleType } from '@/lib/utils/typeDefinitions/types'

// Menu Props
export type MenuProps = {
  type: DeviceTypeEnum
}

export type MenuSocialLinksProps = {
  type: DeviceTypeEnum
}

// Menu Toggle Props
export type MenuToggleProps = {
  handleMenuToggle: HandleMenuToggleType
  isMenuOpen: boolean
}
