import DividerWithText from '@/components/shared/DividerWithText'
import vcardQRcode from '@/public/images/svg/vcard-qr-code.svg'
import Image from 'next/image'

const ContactVcard = () => {
  return (
    <div className="mt-20">
      <DividerWithText text="Scan to add my contact" />
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <Image src={vcardQRcode} alt="contact QR code" width={256} height={256} />
      </div>
    </div>
  )
}

export default ContactVcard
