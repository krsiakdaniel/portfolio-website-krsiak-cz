import { FC } from 'react'

import { IconDeviceTypeEnum } from '@/lib/utils/typeDefinitions/enums'
import { CallToActionIconProps } from '@/lib/utils/typeDefinitions/props/shared/call-to-action'

const CallToActionIcon: FC<CallToActionIconProps> = ({ type, icon }) => {
  const isIconTypeMobile = type === IconDeviceTypeEnum.Mobile

  return <div className={isIconTypeMobile ? 'text-2xl md:hidden' : 'text-9xl'}>{icon}</div>
}

export default CallToActionIcon
