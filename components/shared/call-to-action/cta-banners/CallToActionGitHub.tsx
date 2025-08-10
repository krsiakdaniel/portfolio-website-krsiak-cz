import CallToAction from '@/components/shared/call-to-action/CallToAction'

import { CALL_TO_ACTION, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'

import rocketAnimated from '@/public/images/webp/emoji-animated/128x128/rocket-animated-128x128.webp'

const CallToActionGitHub = () => {
  return (
    <CallToAction
      highlight={CALL_TO_ACTION.github.highlight}
      heading={CALL_TO_ACTION.github.heading}
      textMobileAndDesktop={CALL_TO_ACTION.github.textMobileAndDesktop}
      textDesktop={CALL_TO_ACTION.github.textDesktop}
      link={EXTERNAL_URL.gitHub}
      linkText={TEXT.gitHubCode}
      dataTestId={DATA_TEST_IDS.callToAction.linkGitHub}
      icon={rocketAnimated}
      isLinkExternal
    />
  )
}

export default CallToActionGitHub
