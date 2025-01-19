import { FC } from 'react'

import { CallToActionIconProps } from '@/lib/utils/typeDefinitions/props/shared/call-to-action'

const CallToActionIcon: FC<CallToActionIconProps> = ({ icon }) => {
  return <div className="text-9xl">{icon}</div>
}

export default CallToActionIcon
