import SocialLink from '@/components/shared/SocialLink'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'

const FooterSocialLinks = (): JSX.Element => {
  return (
    <div className="flex flex-col sm:flex-row">
      <SocialLink
        href={EXTERNAL_URL.linkedin}
        text={TEXT.linkedIn}
        linkColor="blue"
        className="sm:mr-4"
        dataTestId={DATA_TEST_IDS.footer.linkFooterLinkedIn}
      />
      <SocialLink
        href={EXTERNAL_URL.resume.resumeViewPDF}
        text={TEXT.resumePDF}
        linkColor="red"
        className="mt-4 sm:mr-4 sm:mt-0"
        dataTestId={DATA_TEST_IDS.footer.linkFooterResume}
      />
      <SocialLink
        href={EXTERNAL_URL.github}
        text={TEXT.gitHub}
        linkColor="gray"
        className="mt-4 sm:mt-0"
        dataTestId={DATA_TEST_IDS.footer.linkFooterGitHub}
      />
    </div>
  )
}

export default FooterSocialLinks
