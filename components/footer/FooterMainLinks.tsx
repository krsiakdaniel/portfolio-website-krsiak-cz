import HeroLink from '@/components/homepage/hero/HeroLink'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'
import { TEXT } from '@/localization/english'

const FooterMainLinks = (): JSX.Element => {
  return (
    <div className="flex flex-col sm:flex-row">
      <HeroLink
        href={EXTERNAL_URL.linkedin}
        text="My LinkedIn"
        className="bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-300 sm:mr-2"
        dataTestId={DATA_TEST_IDS.hero.linkLinkedIn}
        isSmall
      />
      <HeroLink
        href={EXTERNAL_URL.resume.resumeViewPDF}
        text={TEXT.resumePDF}
        className="mt-2 bg-red-700 text-white hover:bg-red-800 focus:ring-red-300 sm:mr-2 sm:mt-0"
        dataTestId={DATA_TEST_IDS.hero.linkResume}
        isSmall
      />
      <HeroLink
        href={EXTERNAL_URL.github}
        text="GitHub Code"
        className="mt-2 bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-300 sm:mt-0"
        dataTestId={DATA_TEST_IDS.hero.linkGitHub}
        isSmall
      />
    </div>
  )
}

export default FooterMainLinks
