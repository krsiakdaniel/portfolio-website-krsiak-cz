import { LayoutViewEnum } from '@/lib/utils/typeDefinitions/enums'

export type LayoutToggleProps = {
  activeView: LayoutViewEnum
  onListClick: () => void
  onGridClick: () => void
}
