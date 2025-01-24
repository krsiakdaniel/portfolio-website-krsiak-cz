import { DeviceTypeEnum } from '@/lib/utils/typeDefinitions/enums'
import { HandleMenuMobileToggleType } from '@/lib/utils/typeDefinitions/types'

// Menu Props
export type MenuProps = {
  type: DeviceTypeEnum
}

export type MenuSocialLinksProps = {
  type: DeviceTypeEnum
}

// Menu Mobile Toggle Props
export type MenuMobileToggleProps = {
  handleMenuMobileToggle: HandleMenuMobileToggleType
  isMenuOpen: boolean
}
