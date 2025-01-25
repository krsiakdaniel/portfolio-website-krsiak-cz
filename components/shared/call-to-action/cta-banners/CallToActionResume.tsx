import { FC } from 'react'

import CallToAction from '@/components/shared/call-to-action/CallToAction'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { TEXT } from '@/localization/english'

import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { CallToActionResumeProps } from '@/lib/utils/typeDefinitions/props/shared/call-to-action-resume'

const CallToActionResume: FC<CallToActionResumeProps> = ({
  dataTestId = DATA_TEST_IDS.callToAction.linkResume,
}): JSX.Element => {
  return (
    <CallToAction
      highlight="React Developer"
      heading="Explore My Resume"
      textMobileAndDesktop={`Learn about  my skills and experience, to\u00A0understand my React Developer career.`}
      textDesktop="From startup to large corporations I have worked on a variety of projects."
      link={PAGES_URL.resume}
      linkText={TEXT.resumeTextOnly}
      dataTestId={dataTestId}
      icon="📝"
    />
  )
}

export default CallToActionResume
