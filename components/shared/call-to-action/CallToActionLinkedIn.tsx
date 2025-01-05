import CallToAction from '@/components/shared/call-to-action/CallToAction'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'

const CallToActionLinkedIn = (): JSX.Element => {
  return (
    <CallToAction
      highlight="LinkedIn"
      heading="Connect on LinkedIn"
      description="Visit my LinkedIn profile to connect and see my professional experiences."
      link={EXTERNAL_URL.linkedin}
      linkText={TEXT.linkedIn}
      dataTestId={DATA_TEST_IDS.callToAction.linkLinkedIn}
      icon="🔗"
      isLinkExternal
    />
  )
}

export default CallToActionLinkedIn
