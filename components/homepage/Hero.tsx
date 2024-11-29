import TypeAnimationText from '@/components/homepage/TypeAnimationText'
import { CONTACT, EXTERNAL_URL, ID } from '@/utils/constants'

type HeroLinkProps = {
  href: string
  text: string
  className: string
  testId: string
}

const sharedCss = 'w-[248px] text-md rounded-lg px-5 py-2.5 text-center font-medium focus:outline-none focus:ring-4'

const HeroLink = ({ href, text, className = '', testId }: HeroLinkProps) => (
  <a data-testid={testId} href={href} target="_blank" rel="noopener noreferrer" className={`${sharedCss} ${className}`}>
    {text}
  </a>
)

const Hero = () => {
  return (
    <div id={ID.hero}>
      <div className="flex flex-col items-center justify-center">
        <h1 data-testid="hero-heading" className="text-center text-5xl font-bold sm:text-6xl lg:text-7xl">
          Daniel Krsiak
          <br />
          <TypeAnimationText />
        </h1>

        <p data-testid="hero-paragraph-1" className="mb-3 mt-4 text-center text-lg font-semibold text-neutral-600">
          Hi 👋 I am React Developer based in Brno, Czech Republic 🇨🇿
        </p>
      </div>

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

      <div className="mt-4 flex flex-col items-center justify-center sm:flex-row">
        <HeroLink
          href={CONTACT.email.href}
          text={CONTACT.email.text}
          className="mb-2 border border-gray-300 bg-white text-neutral-900 hover:bg-gray-100 focus:ring-gray-100 sm:mb-0 sm:mr-2"
          testId="hero-link-email"
        />
        <HeroLink
          href={CONTACT.phone.href}
          text={CONTACT.phone.text}
          className="border border-gray-300 bg-white text-neutral-900 hover:bg-gray-100 focus:ring-gray-100"
          testId="hero-link-phone"
        />
      </div>
    </div>
  )
}

export default Hero
