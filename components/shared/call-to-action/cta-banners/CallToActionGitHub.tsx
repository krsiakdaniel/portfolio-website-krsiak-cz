import { FC } from 'react'

import CallToAction from '@/components/shared/call-to-action/CallToAction'

import { ICON_EMOJI, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'

const CallToActionGitHub: FC = (): JSX.Element => {
  return (
    <CallToAction
      highlight="GitHub"
      heading="Explore GitHub Projects"
      textMobileAndDesktop="Go through my GitHub repository to see how I code my personal portfolio project."
      textDesktop="Writing maintainable, and efficient code, using React, Next.js, and TypeScript."
      link={EXTERNAL_URL.gitHub}
      linkText={TEXT.gitHubCode}
      dataTestId={DATA_TEST_IDS.callToAction.linkGitHub}
      icon={ICON_EMOJI.rocket}
      isLinkExternal
    />
  )
}

export default CallToActionGitHub
