import { FC } from 'react'

import SocialLinkIcon from '@/components/shared/SocialLinkIcon'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'

import { MenuSocialLinksProps } from '@/lib/utils/typeDefinitions/props/layout/header/menu'

import { DeviceTypeEnum } from '@/lib/utils/typeDefinitions/enums'

import iconGitHub from '@/public/icons/svg/social/github.svg'
import iconLinkedIn from '@/public/icons/svg/social/linkedin.svg'

const MenuSocialLinks: FC<MenuSocialLinksProps> = ({ type }): JSX.Element => {
  const isMobile = type === DeviceTypeEnum.Mobile

  const dataTestIdGitHub = isMobile
    ? `mobile-${DATA_TEST_IDS.menu.socialLinks.gitHubRepo}`
    : `desktop-${DATA_TEST_IDS.menu.socialLinks.gitHubRepo}`

  const dataTestIdLinkedIn = isMobile
    ? `mobile-${DATA_TEST_IDS.menu.socialLinks.linkedInProfile}`
    : `desktop-${DATA_TEST_IDS.menu.socialLinks.linkedInProfile}`

  return (
    <div className={`flex items-center space-x-2 ${isMobile ? 'ml-2' : 'ml-6'}`}>
      <SocialLinkIcon
        type={type}
        href={EXTERNAL_URL.gitHub}
        dataTestId={dataTestIdGitHub}
        title={`${TEXT.gitHub} - ${TEXT.opensInNewTab}`}
        ariaLabel={TEXT.gitHub}
        imgSrc={iconGitHub}
        imgAlt={TEXT.gitHub}
      />

      <SocialLinkIcon
        type={type}
        href={EXTERNAL_URL.linkedIn}
        dataTestId={dataTestIdLinkedIn}
        title={`${TEXT.linkedIn} - ${TEXT.opensInNewTab}`}
        ariaLabel={TEXT.linkedIn}
        imgSrc={iconLinkedIn}
        imgAlt={TEXT.linkedIn}
      />
    </div>
  )
}

export default MenuSocialLinks
