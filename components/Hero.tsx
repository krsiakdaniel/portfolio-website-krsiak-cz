import {
  EMAIL_HREF,
  EMAIL_TEXT,
  LINK_GITHUB,
  LINK_LINKEDIN,
  LINK_RESUME,
  PHONE_HREF,
  PHONE_TEXT,
} from '@/utils/constants'

const Hero = () => {
  return (
    <div id="hero" className="mt-20 px-5">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-7xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center mb-4">
            Daniel Kršiak <span className="block text-purple-600 dark:text-purple-500">React Developer</span>
          </h1>

          <p className="mb-3 text-gray-500 dark:text-gray-400 font-semibold text-lg text-center">
            Hi 👋 I am React Developer based in Brno, Czech Republic 🇨🇿
          </p>

          <p className="mb-3 text-gray-500 dark:text-gray-400 text-center">
            I enjoy working with <span className="text-purple-500 font-bold">JavaScript</span>,{' '}
            <span className="text-purple-500 font-bold">TypeScript</span>, and{' '}
            <span className="text-purple-500 font-bold">React</span>.
          </p>

          <p className="mb-3 text-gray-500 dark:text-gray-400 text-center">
            <a
              href={PHONE_HREF}
              className="font-medium text-gray-600 dark:text-gray-500 hover:underline hover:text-purple-500"
            >
              {PHONE_TEXT}
            </a>
            <span className=""> | </span>
            <a
              href={EMAIL_HREF}
              className="font-medium text-gray-600 dark:text-gray-500 hover:underline hover:text-purple-500"
            >
              {EMAIL_TEXT}
            </a>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center mt-8">
          <a
            href={LINK_LINKEDIN}
            target="_blank"
            className="uppercase mb-2 sm:mb-0 sm:mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            LinkedIn
          </a>
          <a
            href={LINK_GITHUB}
            target="_blank"
            className="uppercase mb-2 sm:mb-0 sm:mr-2 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            GitHub
          </a>
          <a
            href={LINK_RESUME}
            target="_blank"
            className="uppercase sm:mb-0 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-md px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
