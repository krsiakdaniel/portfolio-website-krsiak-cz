'use client'

import { useResponsiveText } from '@/lib/hooks/useResponsiveText'

import CallToAction from '@/components/shared/call-to-action/CallToAction'

import { CALL_TO_ACTION, ICON_EMOJI, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'

const CallToActionLinkedIn = () => {
  const text = useResponsiveText({
    mobileText: TEXT.nameDanielKrsiak,
    desktopText: `${TEXT.linkedIn} - ${TEXT.nameDanielKrsiak}`,
  })

  return (
    <CallToAction
      highlight={CALL_TO_ACTION.linkedIn.highlight}
      heading={CALL_TO_ACTION.linkedIn.heading}
      textMobileAndDesktop={CALL_TO_ACTION.linkedIn.textMobileAndDesktop}
      textDesktop={CALL_TO_ACTION.linkedIn.textDesktop}
      link={EXTERNAL_URL.linkedIn}
      linkText={text ?? TEXT.linkedIn}
      dataTestId={DATA_TEST_IDS.callToAction.linkLinkedIn}
      icon={ICON_EMOJI.link}
      hasPhoto={true}
      isLinkExternal
    />
  )
}

export default CallToActionLinkedIn
