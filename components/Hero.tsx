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
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none tracking-tight text-neutral-900 dark:text-white text-center mb-4">
          Daniel Kršiak <span className="block text-violet-600 dark:text-violet-600">React Developer</span>
        </h1>

        <p className="mb-3 text-neutral-600 dark:text-neutral-600 font-semibold text-lg text-center">
          Hi 👋 I am React Developer based in Brno, Czech Republic 🇨🇿
        </p>

        <p className="text-neutral-600 dark:text-neutral-600 text-center">
          I enjoy working with <span className="text-violet-600 font-bold">JavaScript</span>,{' '}
          <span className="text-violet-600 font-bold">TypeScript</span>, and{' '}
          <span className="text-violet-600 font-bold">React</span>.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-8">
        <a
          href={LINK_LINKEDIN}
          target="_blank"
          className="uppercase w-40 text-center mb-2 sm:mb-0 sm:mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          LinkedIn
        </a>
        <a
          href={LINK_GITHUB}
          target="_blank"
          className="uppercase w-40 text-center mb-2 sm:mb-0 sm:mr-2 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        >
          GitHub
        </a>
        <a
          href={LINK_RESUME}
          target="_blank"
          className="uppercase w-40 text-center sm:mb-0 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-md px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
        >
          Resume
        </a>
      </div>

      <div className="flex flex-col items-center mt-8">
        <a
          href={EMAIL_HREF}
          className="text-neutral-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          {EMAIL_TEXT}
        </a>
        <a
          href={PHONE_HREF}
          className="text-neutral-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          {PHONE_TEXT}
        </a>
      </div>
    </PageContainer>
  )
}

export default Hero
