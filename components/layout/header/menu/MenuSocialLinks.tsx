import { FC } from 'react'

import SocialLinkIcon from '@/components/shared/SocialLinkIcon'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'

import iconGitHub from '@/public/icons/svg/social/github.svg'
import iconLinkedIn from '@/public/icons/svg/social/linkedin.svg'

// FIXME: responsive design, M: 32, D: 24 , default is 24, pass as prop on mobile, remove const here after
const IMAGE_WIDTH = 24
const IMAGE_HEIGHT = 24

const MenuSocialLinks: FC = (): JSX.Element => {
  return (
    <div className="ml-8 flex items-center space-x-2">
      <SocialLinkIcon
        href={EXTERNAL_URL.gitHub}
        dataTestId={DATA_TEST_IDS.menu.socialLinks.gitHubRepo}
        title={`${TEXT.gitHub} - ${TEXT.opensInNewTab}`}
        ariaLabel={TEXT.gitHub}
        imgSrc={iconGitHub}
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        imgAlt={TEXT.gitHub}
      />

      <SocialLinkIcon
        href={EXTERNAL_URL.linkedIn}
        dataTestId={DATA_TEST_IDS.menu.socialLinks.linkedInProfile}
        title={`${TEXT.linkedIn} - ${TEXT.opensInNewTab}`}
        ariaLabel={TEXT.linkedIn}
        imgSrc={iconLinkedIn}
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        imgAlt={TEXT.linkedIn}
      />
    </div>
  )
}

export default MenuSocialLinks
