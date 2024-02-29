import ContactCard from '@/components/ContactCard'
import DividerWithText from '@/components/shared/DividerWithText'
import { contacts } from '@/data/contacts'

const ContactMe = () => {
  return (
    <div className="container mx-auto px-5">
      <DividerWithText text="How to reach me" />
      <div className="mb-20 mt-10">
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="flex flex-col md:flex-row lg:flex-row space-y-8 md:space-y-0 md:space-x-8 lg:w-2/3">
            <ContactCard contact={contacts[0]} color="purple" />
            <ContactCard contact={contacts[1]} color="green" />
          </div>
          <div className="flex lg:w-1/3">
            <ContactCard contact={contacts[2]} color="blue" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
