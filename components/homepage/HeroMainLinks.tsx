import { TEXT } from '@/localization/texts_en'
import { EXTERNAL_URL } from '@/utils/constants/urls/externalUrls'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import HeroLink from './HeroLink'

const HeroMainLinks = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center sm:flex-row">
      <HeroLink
        href={EXTERNAL_URL.linkedin}
        text="My LinkedIn"
        className="mb-2 bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-300 sm:mb-0 sm:mr-2"
        dataTestId={DATA_TEST_IDS.hero.linkLinkedIn}
      />
      <HeroLink
        href={EXTERNAL_URL.resume.resumeViewPDF}
        text={TEXT.resumePDF}
        className="mb-2 bg-red-700 text-white hover:bg-red-800 focus:ring-red-300 sm:mb-0 sm:mr-2"
        dataTestId={DATA_TEST_IDS.hero.linkResume}
      />
      <HeroLink
        href={EXTERNAL_URL.github}
        text="GitHub Code"
        className="bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-300 sm:mb-0"
        dataTestId={DATA_TEST_IDS.hero.linkGitHub}
      />
    </div>
  )
}

export default HeroMainLinks
