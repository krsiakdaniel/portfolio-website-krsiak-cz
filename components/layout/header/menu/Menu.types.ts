import { DeviceTypeEnum } from '@/lib/utils/typeDefinitions/enums'

export type MenuProps = {
  type: DeviceTypeEnum
  ref?: React.Ref<HTMLUListElement>
  onClickLink?: () => void
}
