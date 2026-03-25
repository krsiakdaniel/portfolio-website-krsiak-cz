import { DeviceTypeEnum } from '@/lib/utils/typeDefinitions/enums'
import { PageLinkItem } from '@/lib/utils/typeDefinitions/interfaces'

export type MenuProps = {
  type: DeviceTypeEnum
  ref?: React.Ref<HTMLUListElement>
  onClickLink?: () => void
}

export type MenuItemProps = {
  linkItem: PageLinkItem
  isMobile: boolean
  onClickLink?: () => void
}

export type MenuSocialLinksProps = {
  type: DeviceTypeEnum
}

export type MenuMobileToggleProps = {
  handleMenuMobileToggle: () => void
  isMenuOpen: boolean
  ref?: React.Ref<HTMLButtonElement>
}
