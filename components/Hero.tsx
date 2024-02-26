import Button from './Button'

import {
  EMAIL_HREF,
  EMAIL_TEXT,
  LINK_GITHUB,
  LINK_LINKEDIN,
  LINK_RESUME,
  PHONE_HREF,
  PHONE_TEXT,
} from '../utils/constants'

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid pt-20 pb-20 grid-cols-1 lg:grid-cols-12 flex-col justify-between items-center text-center">
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-10 flex flex-col items-center">
            <h1 className="lg:text-display-2xl md:text-display-xl text-display-md">
              <span className="text-primary-500 font-bold">Daniel Kršiak</span>
            </h1>
            <h2 className="lg:text-display-2xl md:text-display-xl text-display-md">
              <span className="font-semibold">React Developer</span>
            </h2>
            <div>
              <p className="md:text-body-xl text-body-lg pb-1 pt-4 font-medium">
                Hi 👋 I am React Developer based in Brno, Czech Republic 🇨🇿
              </p>
              <p className="md:text-body-xl text-body-lg mb-4">
                I enjoy working with <span className="text-primary-500 font-bold">JavaScript</span>,{' '}
                <span className="text-primary-500 font-bold">TypeScript</span>, and{' '}
                <span className="text-primary-500 font-bold">React</span>.
              </p>
            </div>
            <div className="mb-6 text-neutral-500">
              <a href={PHONE_HREF} className="font-semibold hover:underline hover:text-primary-500">
                {PHONE_TEXT}
              </a>{' '}
              |{' '}
              <a href={EMAIL_HREF} className="font-semibold hover:underline hover:text-primary-500">
                {EMAIL_TEXT}
              </a>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center">
              <div className="flex mb-4 sm:mr-4 sm:mb-0">
                <Button label="LINKEDIN" link={LINK_LINKEDIN} size="lg" />
              </div>
              <div className="flex mb-4 sm:mr-4 sm:mb-0">
                <Button label="GITHUB" link={LINK_GITHUB} size="lg" type="bg-neutral-900" />
              </div>
              <div className="flex mb-0 mr-0">
                <Button label="DOWNLOAD RESUME" link={LINK_RESUME} size="lg" type="bg-red-500" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
