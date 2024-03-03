import ContactCard from '@/components/ContactCard'
import PageContainer from '@/components/layout/PageContainer'
import DividerWithText from '@/components/shared/DividerWithText'
import { contacts } from '@/data/contacts'
import { ID_CONTACT } from '@/utils/constants'

const Contacts = () => {
  return (
    <PageContainer id={ID_CONTACT}>
      <DividerWithText text="How to reach me" />
      <div className="mb-20 mt-10">
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
          <div className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0 lg:w-2/3 lg:flex-row">
            <ContactCard contact={contacts[0]} color="purple" />
            <ContactCard contact={contacts[1]} color="purple" />
          </div>
          <div className="flex lg:w-1/3">
            <ContactCard contact={contacts[2]} color="purple" />
          </div>
        </div>
      </div>
    </PageContainer>
  )
}

export default Contacts
