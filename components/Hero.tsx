import PageContainer from '@/components/layout/PageContainer'
import {
  EMAIL_HREF,
  EMAIL_TEXT,
  ID_HERO,
  LINK_GITHUB,
  LINK_LINKEDIN,
  LINK_RESUME,
  PHONE_HREF,
  PHONE_TEXT,
} from '@/utils/constants'

const Hero = () => {
  return (
    <PageContainer id={ID_HERO}>
      <div className="flex flex-col items-center justify-center">
        <h1
          data-testid="hero-heading"
          className="mb-4 text-center text-5xl font-bold leading-none tracking-tight text-neutral-900 dark:text-white sm:text-6xl lg:text-7xl"
        >
          Daniel Krsiak <span className="block text-violet-600 dark:text-violet-600">React Developer</span>
        </h1>

        <p
          data-testid="hero-paragraph-1"
          className="mb-3 text-center text-lg font-semibold text-neutral-600 dark:text-neutral-600"
        >
          Hi 👋 I am React Developer based in Brno, Czech Republic 🇨🇿
        </p>

        <p data-testid="hero-paragraph-2" className="text-center text-neutral-600 dark:text-neutral-600">
          I enjoy working with <span className="font-bold text-violet-600">JavaScript</span>,{' '}
          <span className="font-bold text-violet-600">TypeScript</span>, and{' '}
          <span className="font-bold text-violet-600">React</span>.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center sm:flex-row">
        <a
          data-testid="hero-link-linkedin"
          href={LINK_LINKEDIN}
          target="_blank"
          className="text-md mb-2 w-40 rounded-lg bg-blue-700 px-5 py-2.5 text-center font-medium uppercase text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:mb-0 sm:mr-2"
        >
          LinkedIn
        </a>
        <a
          data-testid="hero-link-github"
          href={LINK_GITHUB}
          target="_blank"
          className="text-md mb-2 w-40 rounded-lg bg-gray-700 px-5 py-2.5 text-center font-medium uppercase text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 sm:mb-0 sm:mr-2"
        >
          GitHub
        </a>
        <a
          data-testid="hero-link-resume"
          href={LINK_RESUME}
          target="_blank"
          className="text-md w-40 rounded-lg bg-red-700 px-5 py-2.5 text-center font-medium uppercase text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 sm:mb-0"
        >
          Resume
        </a>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <a
          href={EMAIL_HREF}
          className="mb-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          {EMAIL_TEXT}
        </a>
        <a
          href={PHONE_HREF}
          className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          {PHONE_TEXT}
        </a>
      </div>
    </PageContainer>
  )
}

export default Hero
