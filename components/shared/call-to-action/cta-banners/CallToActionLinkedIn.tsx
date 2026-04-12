import CallToAction from '@/components/shared/call-to-action/CallToAction'

import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'

import { CALL_TO_ACTION, ICON_EMOJI, TEXT } from '@/localization'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

const CallToActionLinkedIn = () => {
  return (
    <CallToAction
      highlight={CALL_TO_ACTION.linkedIn.highlight}
      heading={CALL_TO_ACTION.linkedIn.heading}
      textMobileAndDesktop={CALL_TO_ACTION.linkedIn.textMobileAndDesktop}
      textDesktop={CALL_TO_ACTION.linkedIn.textDesktop}
      link={EXTERNAL_URL.linkedIn}
      linkText={`${TEXT.linkedIn} - ${TEXT.nameDanielKrsiak}`}
      linkTextMobile={TEXT.nameDanielKrsiak}
      dataTestId={DATA_TEST_IDS.callToAction.linkLinkedIn}
      icon={ICON_EMOJI.link}
      hasPhoto={true}
      isLinkExternal={true}
    />
  )
}

export default CallToActionLinkedIn
