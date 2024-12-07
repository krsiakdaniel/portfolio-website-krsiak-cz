import DividerWithText from '@/components/shared/DividerWithText'
import vcardQRcode from '@/public/images/svg/qr-code-vcard.svg'
import Image from 'next/image'

const ContactVcard = () => {
  return (
    <div className="mt-20">
      <DividerWithText text="Scan to add my contact" />
      <div className="mb-20 mt-5 flex flex-col items-center justify-center sm:flex-row">
        <Image src={vcardQRcode} alt="contact QR code" width={256} height={256} />
      </div>
    </div>
  )
}

export default ContactVcard
