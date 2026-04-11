import CallToAction from '@/components/shared/call-to-action/CallToAction'
import { type CallToActionResumeProps } from '@/components/shared/call-to-action/CallToActionResume.types'

import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { CALL_TO_ACTION, IMAGE_ALT, TEXT } from '@/localization'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import starAnimated from '@/public/images/webp/emoji-animated/128x128/star-animated-128x128.webp'

const CallToActionResume = ({
  dataTestId = DATA_TEST_IDS.callToAction.linkResume,
}: CallToActionResumeProps) => {
  return (
    <CallToAction
      highlight={CALL_TO_ACTION.resume.highlight}
      heading={CALL_TO_ACTION.resume.heading}
      textMobileAndDesktop={CALL_TO_ACTION.resume.textMobileAndDesktop}
      textDesktop={CALL_TO_ACTION.resume.textDesktop}
      link={PAGES_URL.resume}
      linkText={TEXT.resumeTextOnly}
      dataTestId={dataTestId}
      icon={starAnimated}
      iconAlt={IMAGE_ALT.emojiStar}
    />
  )
}

export default CallToActionResume
