import DividerWithText from '@/components/shared/DividerWithText'
import vcardQRcode from '@/public/images/svg/qr-code-vcard.svg'
import { ID } from '@/utils/constants'
import Image from 'next/image'

const ContactVcard = () => {
  return (
    <div id={ID.contactVcard} className="mt-10">
      <DividerWithText text="Scan to add my contact" />
      <div className="mt-5 flex flex-col items-center justify-center sm:flex-row">
        <Image src={vcardQRcode} alt="contact QR code" width={200} height={200} />
      </div>
    </div>
  )
}

export default ContactVcard
