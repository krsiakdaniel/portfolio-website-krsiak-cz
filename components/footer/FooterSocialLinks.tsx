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
        className="bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-300 sm:mr-4"
        dataTestId={DATA_TEST_IDS.footer.linkFooterLinkedIn}
      />
      <SocialLink
        href={EXTERNAL_URL.resume.resumeViewPDF}
        text={TEXT.resumePDF}
        className="mt-4 bg-red-700 text-white hover:bg-red-800 focus:ring-red-300 sm:mr-4 sm:mt-0"
        dataTestId={DATA_TEST_IDS.footer.linkFooterResume}
      />
      <SocialLink
        href={EXTERNAL_URL.github}
        text={TEXT.gitHub}
        className="mt-4 bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-300 sm:mt-0"
        dataTestId={DATA_TEST_IDS.footer.linkFooterGitHub}
      />
    </div>
  )
}

export default FooterSocialLinks
