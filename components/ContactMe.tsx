import Image from 'next/image'

import phone from '../public/icons/png/phone.png'
import gmail from '../public/icons/png/gmail.png'
import linkedin from '../public/icons/png/linkedin.png'

const ContactMe = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center relative pb-1 pt-5 mt-20">
        <span className="absolute block h-px bg-white bottom-1/2 left-0 right-0 bg-skills-line"></span>
        <div className="bg-white px-6 pb-3 pt-0 relative">
          <p className="text-body-sm font-semibold tracking-2 text-neutral-500 uppercase">How to reach me</p>
        </div>
      </div>
      <div className="mb-20">
        <div className="flex flex-col lg:flex-row lg:space-x-10">
          <div className="w-full max-w-3xl lg:max-w-sm bg-white border border-neutral-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8">
            <div className="flex justify-end px-4 pt-8"></div>
            <div className="flex flex-col items-center pb-10">
              <Image className="w-24 h-24 mb-3 rounded-full shadow-lg" src={phone} alt="phone" />
              <h5 className="mb-1 text-xl font-medium text-gray-900 uppercase">Phone</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">Time zone GMT+1</span>
              <div className="flex mt-4 md:mt-6">
                <a
                  href="tel:+420734496308"
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  (+420) 734 496 308
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-3xl lg:max-w-sm bg-white border border-neutral-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8">
            <div className="flex justify-end px-4 pt-8"></div>
            <div className="flex flex-col items-center pb-10">
              <Image className="w-24 h-24 mb-3 rounded-full shadow-lg" src={gmail} alt="email" />
              <h5 className="mb-1 text-xl font-medium text-gray-900 uppercase">Email</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">I read it daily</span>
              <div className="flex mt-4 md:mt-6">
                <a
                  href="mailto:krsiak.daniel@gmail.com"
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  krsiak.daniel@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-3xl lg:max-w-sm bg-white border border-neutral-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8">
            <div className="flex justify-end px-4 pt-8"></div>
            <div className="flex flex-col items-center pb-10">
              <Image className="w-24 h-24 mb-3 rounded-full shadow-lg" src={linkedin} alt="linkedin" />
              <h5 className="mb-1 text-xl font-medium text-gray-900 uppercase">LinkedIn</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">Easy and fast</span>
              <div className="flex mt-4 md:mt-6">
                <a
                  href="https://www.linkedin.com/in/krsiakdaniel/"
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Send me message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
