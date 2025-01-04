import CallToAction from '@/components/shared/call-to-action/CallToAction'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

const CallToActionResume = (): JSX.Element => {
  return (
    <CallToAction
      highlight="React Developer"
      heading="Explore My Resume"
      description="Learn more about my skills, experience, and accomplishments in Front End development to get better overview of my career."
      link={PAGES_URL.resume}
      linkText={TEXT.resume}
      dataTestId={DATA_TEST_IDS.callToAction.linkResume}
      icon="📝"
    />
  )
}

export default CallToActionResume
