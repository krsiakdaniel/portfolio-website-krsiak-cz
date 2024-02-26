import Image from 'next/image'

import gmail from '../public/icons/png/gmail.png'
import linkedin from '../public/icons/png/linkedin.png'
import phone from '../public/icons/png/phone.png'

import { EMAIL_HREF, EMAIL_TEXT, LINK_LINKEDIN, PHONE_HREF, PHONE_TEXT } from '../utils/constants'

interface Contact {
  image: string
  heading: string
  description: string
  href: string
  linkText: string
}

const contacts: Contact[] = [
  {
    image: phone.src,
    heading: 'Phone',
    description: 'Time zone GMT+1',
    href: PHONE_HREF,
    linkText: PHONE_TEXT,
  },
  {
    image: gmail.src,
    heading: 'Email',
    description: 'I read it daily',
    href: EMAIL_HREF,
    linkText: EMAIL_TEXT,
  },
  {
    image: linkedin.src,
    heading: 'LinkedIn',
    description: 'Easy and fast',
    href: LINK_LINKEDIN,
    linkText: 'Send me message',
  },
]

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
          {contacts.map((contact) => {
            return (
              <div
                key={contact.heading}
                className="w-full max-w-3xl lg:max-w-sm bg-white border border-neutral-400 rounded-lg shadow mt-8"
              >
                <div className="flex justify-end px-4 pt-8"></div>
                <div className="flex flex-col items-center pb-10">
                  <Image
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={contact.image}
                    alt={contact.heading}
                    width={128}
                    height={128}
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 uppercase">{contact.heading}</h5>
                  <span className="text-sm text-gray-500 text-neutral-600">{contact.description}</span>
                  <div className="flex mt-4 md:mt-6">
                    <a
                      href={contact.href}
                      target="_blank"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-500 rounded-lg hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      {contact.linkText}
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ContactMe
