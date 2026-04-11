import CallToActionIcon from '@/components/shared/call-to-action/CallToActionIcon'
import Heading from '@/components/shared/heading/Heading'
import Highlight from '@/components/shared/highlight/Highlight'
import Paragraph from '@/components/shared/paragraph/Paragraph'

import { DeviceTypeEnum } from '@/lib/types/enums'

import { type CallToActionTextsProps } from './CallToActionTexts.types'

const CallToActionTexts = ({
  icon,
  iconAlt,
  highlight,
  heading,
  textMobileAndDesktop,
  textDesktop,
}: CallToActionTextsProps) => {
  return (
    <>
      <div className="mb-2 flex items-end space-x-2 uppercase md:space-x-0">
        <CallToActionIcon type={DeviceTypeEnum.Mobile} icon={icon} iconAlt={iconAlt} />
        <Highlight text={highlight} customCss="text-violet-800" />
      </div>
      <Heading as="h2" textColor="text-neutral-900">
        {heading}
      </Heading>
      <Paragraph
        marginTop="mt-2"
        size="text-xl"
        textColor="text-neutral-900"
        customCss="tracking-tight"
      >
        <span className="text-neutral-600">
          {textMobileAndDesktop} <span className="hidden lg:inline">{textDesktop}</span>
        </span>
      </Paragraph>
    </>
  )
}

export default CallToActionTexts
