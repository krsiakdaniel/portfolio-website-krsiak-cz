import { FC } from 'react'

import SocialLinkIcon from '@/components/shared/SocialLinkIcon'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'

import iconGitHub from '@/public/icons/svg/social/github.svg'
import iconLinkedIn from '@/public/icons/svg/social/linkedin.svg'

// FIXME: responsive design, M: 32, D: 24
const ICON_HEIGHT = 24
const ICON_WIDTH = 24

const MenuSocialLinks: FC = (): JSX.Element => {
  return (
    <div className="ml-8 flex items-center space-x-2">
      <SocialLinkIcon
        href={EXTERNAL_URL.gitHub}
        dataTestId={DATA_TEST_IDS.menu.socialLinks.gitHubRepo}
        title={`${TEXT.gitHub} - ${TEXT.opensInNewTab}`}
        ariaLabel={TEXT.gitHub}
        imgSrc={iconGitHub}
        imgAlt={TEXT.gitHub}
        iconWidth={ICON_WIDTH}
        iconHeight={ICON_HEIGHT}
      />

      <SocialLinkIcon
        href={EXTERNAL_URL.linkedIn}
        dataTestId={DATA_TEST_IDS.menu.socialLinks.linkedInProfile}
        title={`${TEXT.linkedIn} - ${TEXT.opensInNewTab}`}
        ariaLabel={TEXT.linkedIn}
        imgSrc={iconLinkedIn}
        imgAlt={TEXT.linkedIn}
        iconWidth={ICON_WIDTH}
        iconHeight={ICON_HEIGHT}
      />
    </div>
  )
}

export default MenuSocialLinks
