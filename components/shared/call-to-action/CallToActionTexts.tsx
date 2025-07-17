import { FC } from 'react'

import Heading2 from '@/components/shared/Heading2'
import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'
import CallToActionIcon from '@/components/shared/call-to-action/CallToActionIcon'

import { DeviceTypeEnum } from '@/lib/utils/typeDefinitions/enums'
import { CallToActionTextsProps } from '@/lib/utils/typeDefinitions/props/shared/call-to-action'

const CallToActionTexts: FC<CallToActionTextsProps> = ({
  icon,
  highlight,
  heading,
  textMobileAndDesktop,
  textDesktop,
}): JSX.Element => {
  return (
    <>
      <div className="mb-2 flex items-end space-x-2 uppercase md:space-x-0">
        <CallToActionIcon type={DeviceTypeEnum.Mobile} icon={icon} />
        <Highlight text={highlight} customCss="text-violet-800" />
      </div>
      <Heading2 textColor="text-neutral-900">{heading}</Heading2>
      <Paragraph marginTop="mt-2" textColor="text-neutral-900" customCss="tracking-tight">
        <span className="text-neutral-600">
          {textMobileAndDesktop} <span className="hidden lg:inline">{textDesktop}</span>
        </span>
      </Paragraph>
    </>
  )
}

export default CallToActionTexts
