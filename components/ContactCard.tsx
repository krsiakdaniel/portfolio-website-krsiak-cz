import { Contact } from '@/utils/types'
import Image from 'next/image'

type Props = { color: string; contact: Contact }

const ContactCard = ({ contact, color }: Props) => (
  <div className="w-full max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col items-center">
      <Image
        className="w-24 h-24 mb-3 rounded-full shadow-lg"
        src={contact.image}
        alt={contact.heading}
        width={128}
        height={128}
      />
      <div className="mb-1 text-xl font-medium text-neutral-900">{contact.heading}</div>
      <p className="mb-3 font-normal text-neutral-600 dark:text-neutral-600">{contact.description}</p>

      <div className="flex mt-4 md:mt-6">
        <a
          href={contact.href}
          target="_blank"
          className={`text-center uppercase mb-2 sm:mb-0 sm:mr-2 text-white bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 font-medium rounded-lg text-sm md:text-md px-5 py-2.5 dark:bg-${color}-600 dark:hover:bg-${color}-700 focus:outline-none dark:focus:ring-${color}-800`}
        >
          {contact.linkText}
        </a>
      </div>
    </div>
  </div>
)

export default ContactCard
