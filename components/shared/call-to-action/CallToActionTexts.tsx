import { FC } from 'react'

import Heading2 from '@/components/shared/Heading2'
import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

import { CallToActionTextsProps } from '@/lib/utils/typeDefinitions/props/shared/call-to-action'

const CallToActionTexts: FC<CallToActionTextsProps> = ({ highlight, heading, textMobileAndDesktop, textDesktop }) => {
  return (
    <div>
      <div className="mb-2 uppercase">
        <Highlight text={highlight} />
      </div>
      <Heading2 textColor="text-neutral-900">{heading}</Heading2>
      <Paragraph marginTop="mt-2" size="text-xl" textColor="text-neutral-900" customCss="tracking-tight">
        <span>
          {textMobileAndDesktop} <span className="hidden lg:inline">{textDesktop}</span>
        </span>
      </Paragraph>
    </div>
  )
}

export default CallToActionTexts
