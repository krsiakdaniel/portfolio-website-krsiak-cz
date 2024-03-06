import { Contact } from '@/utils/types'
import Image from 'next/image'

type Props = { color: string; contact: Contact }

const ContactCard = ({ contact, color }: Props) => (
  <div className="w-full max-w-full rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
    <div className="flex flex-col items-center">
      <Image
        className="mb-3 h-24 w-24 rounded-full bg-neutral-100 shadow-lg"
        src={contact.image}
        alt={contact.heading}
        width={128}
        height={128}
      />
      <div className="mb-1 text-xl font-medium text-neutral-900">{contact.heading}</div>
      <p className="mb-3 font-normal text-neutral-600 dark:text-neutral-600">{contact.description}</p>

      <div className="mt-4 flex md:mt-6">
        <a
          href={contact.href}
          target="_blank"
          className={`mb-2 text-center uppercase text-white sm:mb-0 sm:mr-2 bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 md:text-md rounded-lg px-5 py-2.5 text-sm font-medium dark:bg-${color}-600 dark:hover:bg-${color}-700 focus:outline-none dark:focus:ring-${color}-800`}
        >
          {contact.linkText}
        </a>
      </div>
    </div>
  </div>
)

export default ContactCard
