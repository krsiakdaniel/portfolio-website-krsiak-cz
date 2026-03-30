import { PageLinkItem } from '@/lib/utils/typeDefinitions/interfaces'

export type MenuItemProps = {
  linkItem: PageLinkItem
  isMobile: boolean
  onClickLink?: () => void
}
