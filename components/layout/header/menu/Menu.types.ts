import { DeviceTypeEnum } from '@/lib/types/enums'

export type MenuProps = {
  type: DeviceTypeEnum
  ref?: React.Ref<HTMLUListElement>
  onClickLink?: () => void
}
