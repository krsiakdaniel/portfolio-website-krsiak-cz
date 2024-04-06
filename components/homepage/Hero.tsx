import TypeAnimationText from '@/components/homepage/TypeAnimationText'
import { CONTACT, EXTERNAL_URL, ID } from '@/utils/constants'

// TODO: move the photo here and make it responsive
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
        <a
          data-testid="hero-link-linkedin"
          href={EXTERNAL_URL.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-md mb-2 w-[208px] rounded-lg bg-blue-700 px-5 py-2.5 text-center font-medium uppercase text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:mb-0 sm:mr-2"
        >
          LinkedIn
        </a>
        <a
          data-testid="hero-link-github"
          href={EXTERNAL_URL.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-md mb-2 w-[208px] rounded-lg bg-gray-700 px-5 py-2.5 text-center font-medium uppercase text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 sm:mb-0 sm:mr-2"
        >
          GitHub
        </a>
        <a
          data-testid="hero-link-resume"
          href={EXTERNAL_URL.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-md w-[208px] rounded-lg bg-red-700 px-5 py-2.5 text-center font-medium uppercase text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 sm:mb-0"
        >
          Resume
        </a>
      </div>

      <div className="mt-4 flex flex-col items-center justify-center sm:flex-row">
        <a
          data-testid="hero-link-email"
          href={CONTACT.email.href}
          className="mb-2 w-[208px] rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-neutral-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:mb-0 sm:mr-2"
        >
          {CONTACT.email.text}
        </a>
        <a
          data-testid="hero-link-phone"
          href={CONTACT.phone.href}
          className="w-[208px] rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-neutral-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 "
        >
          {CONTACT.phone.text}
        </a>
      </div>
    </div>
  )
}

export default Hero
