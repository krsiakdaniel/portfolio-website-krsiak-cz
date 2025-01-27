import { FC } from 'react'

import CallToAction from '@/components/shared/call-to-action/CallToAction'

import { ICON_EMOJI, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'

const CallToActionLinkedIn: FC = (): JSX.Element => {
  return (
    <CallToAction
      highlight="LinkedIn"
      heading={`Connect on\u00A0LinkedIn`}
      textMobileAndDesktop={`Visit my LinkedIn profile to connect and\u00A0see my professional experiences.`}
      textDesktop={`It\u00A0showcases a\u00A0comprehensive overview of my career journey.`}
      link={EXTERNAL_URL.linkedIn}
      linkText={TEXT.myLinkedIn}
      dataTestId={DATA_TEST_IDS.callToAction.linkLinkedIn}
      icon={ICON_EMOJI.link}
      isLinkExternal
    />
  )
}

export default CallToActionLinkedIn
