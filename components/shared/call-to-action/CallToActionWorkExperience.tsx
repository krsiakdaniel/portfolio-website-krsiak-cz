import { FC } from 'react'

import CallToAction from '@/components/shared/call-to-action/CallToAction'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

const CallToActionWorkExperience: FC = (): JSX.Element => {
  return (
    <CallToAction
      highlight="Professional journey"
      heading="Explore My Work Experience"
      description={`See the professional projects I worked on and had the opportunity to\u00A0improve. Developing scalable and robust web applications for big companies.`}
      link={PAGES_URL.work.mainUrl}
      linkText={TEXT.workExperience}
      dataTestId={DATA_TEST_IDS.callToAction.linkWorkExperience}
      icon="👨🏻‍💻"
    />
  )
}

export default CallToActionWorkExperience
