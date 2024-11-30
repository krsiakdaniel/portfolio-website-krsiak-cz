import { EXTERNAL_URL } from '@/utils/constants'
import HeroLink from './HeroLink'

const HeroMainLinks = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center sm:flex-row">
      <HeroLink
        href={EXTERNAL_URL.linkedin}
        text="LinkedIn"
        className="mb-2 bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-300 sm:mb-0 sm:mr-2"
        testId="hero-link-linkedin"
      />
      <HeroLink
        href={EXTERNAL_URL.github}
        text="GitHub"
        className="mb-2 bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-300 sm:mb-0 sm:mr-2"
        testId="hero-link-github"
      />
      <HeroLink
        href={EXTERNAL_URL.resume}
        text="Resume"
        className="bg-red-700 text-white hover:bg-red-800 focus:ring-red-300 sm:mb-0"
        testId="hero-link-resume"
      />
    </div>
  )
}

export default HeroMainLinks
