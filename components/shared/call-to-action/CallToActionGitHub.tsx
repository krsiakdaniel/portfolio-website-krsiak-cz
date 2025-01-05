import CallToAction from '@/components/shared/call-to-action/CallToAction'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'

const CallToActionGitHub = (): JSX.Element => {
  return (
    <CallToAction
      highlight="GitHub"
      heading="Explore GitHub Projects"
      description="Go through my GitHub repository to see my latest projects and how I code."
      link={EXTERNAL_URL.github}
      linkText={TEXT.gitHub}
      dataTestId={DATA_TEST_IDS.callToAction.linkGitHub}
      icon="🚀"
      isLinkExternal
    />
  )
}

export default CallToActionGitHub
