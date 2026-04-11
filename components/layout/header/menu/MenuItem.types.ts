import { type PageLinkItem } from '@/lib/types/interfaces'

export type MenuItemProps = {
  linkItem: PageLinkItem
  isMobile: boolean
  onClickLink?: () => void
}
