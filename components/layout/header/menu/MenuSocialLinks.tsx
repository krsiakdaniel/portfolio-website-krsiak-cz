import SocialLinkIcon from '@/components/shared/social-link/SocialLinkIcon'

import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'

import { IMAGE_ALT, TEXT } from '@/localization'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import iconGitHub from '@/public/icons/svg/social/github.svg'
import iconLinkedIn from '@/public/icons/svg/social/linkedin.svg'

import { DeviceTypeEnum } from '@/lib/types/enums'

import { type MenuSocialLinksProps } from './MenuSocialLinks.types'

const MenuSocialLinks = ({ type }: MenuSocialLinksProps) => {
  const isMobile = type === DeviceTypeEnum.Mobile

  const dataTestIdGitHub = isMobile
    ? `mobile-${DATA_TEST_IDS.menu.socialLinks.gitHubRepo}`
    : `desktop-${DATA_TEST_IDS.menu.socialLinks.gitHubRepo}`

  const dataTestIdLinkedIn = isMobile
    ? `mobile-${DATA_TEST_IDS.menu.socialLinks.linkedInProfile}`
    : `desktop-${DATA_TEST_IDS.menu.socialLinks.linkedInProfile}`

  return (
    <div className={`flex items-center space-x-2 ${isMobile ? 'ml-2' : 'ml-2 md:ml-4 xl:ml-6'}`}>
      <SocialLinkIcon
        type={type}
        href={EXTERNAL_URL.gitHub}
        dataTestId={dataTestIdGitHub}
        title={`${TEXT.gitHub} - ${TEXT.opensInNewTab}`}
        ariaLabel={TEXT.gitHub}
        imgSrc={iconGitHub}
        imgAlt={IMAGE_ALT.gitHub}
      />

      <SocialLinkIcon
        type={type}
        href={EXTERNAL_URL.linkedIn}
        dataTestId={dataTestIdLinkedIn}
        title={`${TEXT.linkedIn} - ${TEXT.opensInNewTab}`}
        ariaLabel={TEXT.linkedIn}
        imgSrc={iconLinkedIn}
        imgAlt={IMAGE_ALT.linkedIn}
      />
    </div>
  )
}

export default MenuSocialLinks
