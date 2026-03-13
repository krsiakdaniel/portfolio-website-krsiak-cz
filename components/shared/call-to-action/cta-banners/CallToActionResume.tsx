import CallToAction from '@/components/shared/call-to-action/CallToAction'

import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { CallToActionResumeProps } from '@/lib/utils/typeDefinitions/props/shared/call-to-action-resume'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import starAnimated from '@/public/images/webp/emoji-animated/128x128/star-animated-128x128.webp'

import { CALL_TO_ACTION, TEXT } from '@/localization'

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
    />
  )
}

export default CallToActionResume
