import { RefObject } from 'react'
import { DeviceTypeEnum } from '@/lib/utils/typeDefinitions/enums'
import { PageLinkItem } from '@/lib/utils/typeDefinitions/interfaces'

// Menu Props
export type MenuProps = {
  type: DeviceTypeEnum
  forwardedRef?: RefObject<HTMLUListElement>
  onClickLink?: () => void
}

// Menu Item Props
export type MenuItemProps = {
  linkItem: PageLinkItem
  isMobile: boolean
  onClickLink?: () => void
}

// Menu Social Links Props
export type MenuSocialLinksProps = {
  type: DeviceTypeEnum
}

// Menu Mobile Toggle Props
export type MenuMobileToggleProps = {
  handleMenuMobileToggle: () => void
  isMenuOpen: boolean
  forwardedRef?: RefObject<HTMLButtonElement>
}
