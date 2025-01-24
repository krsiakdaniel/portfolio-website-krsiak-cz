import { FC } from 'react'

import { DeviceTypeEnum } from '@/lib/utils/typeDefinitions/enums'
import { CallToActionIconProps } from '@/lib/utils/typeDefinitions/props/shared/call-to-action'

const CallToActionIcon: FC<CallToActionIconProps> = ({ type, icon }) => {
  const isMobile = type === DeviceTypeEnum.Mobile

  return <div className={isMobile ? 'text-2xl md:hidden' : 'text-9xl'}>{icon}</div>
}

export default CallToActionIcon
