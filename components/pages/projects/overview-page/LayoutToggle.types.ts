import { LayoutViewEnum } from '@/lib/types/enums'

export type LayoutToggleProps = {
  activeView: LayoutViewEnum
  onListClick: () => void
  onGridClick: () => void
}
