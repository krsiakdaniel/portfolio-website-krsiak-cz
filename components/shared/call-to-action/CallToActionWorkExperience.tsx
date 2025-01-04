import CallToAction from '@/components/shared/call-to-action/CallToAction'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

const CallToActionWorkExperience = (): JSX.Element => {
  return (
    <CallToAction
      highlight="Professional journey"
      heading="Explore My Work Experience"
      description="See the projects I worked on. Creating high-quality web applications, and  discover how that experience shaped my career."
      link={PAGES_URL.work.mainUrl}
      linkText={TEXT.workExperience}
      dataTestId={DATA_TEST_IDS.callToAction.linkWorkExperience}
      icon="🖥️"
    />
  )
}

export default CallToActionWorkExperience
